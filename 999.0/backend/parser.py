"""
日志解析模块 - Markdown到HTML渲染
"""
from __future__ import annotations

import os
import sys
import time
import hashlib
import html as html_module
import json
import markdown
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional, Tuple
from markdown.extensions import Extension
from markdown.preprocessors import Preprocessor

# 添加src/l_log到路径以复用配置
SRC_LOG_DIR = os.path.join(os.path.dirname(__file__), '..', '..', '..', 'src', 'l_log')
sys.path.insert(0, SRC_LOG_DIR)

import re

# 正则表达式定义
LOG_LINE_RE = re.compile(r"^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\]\s+(.*)$", re.MULTILINE)
LPRINT_TRACE_BLOCK_RE = re.compile(r'<<<lprint-trace>>>(.*?)<<</lprint-trace>>>', re.DOTALL)
# 格式: callBy(深度X 路径X-X-X #X): path:line in func() [← caller:line] [⏱️...] [PID:... TID:...]
CALLBY_CALL_RE = re.compile(r"callBy\(深度(\d+)\s+路径([\d\-]+)\s+#(\d+)\):\s*(.+):(\d+)\s+in\s+(.+?)\(\)(?:\s*←\s*(.+):(\d+))?(?:\s+.*)?", re.UNICODE)
# 第三列：0/1 执行态；d 函数定义；c0/c1 子调用（0=本展开未执行该行，1=已执行）；单写 c 为旧版，等同 c1
# 兼容: "   1 |   10 |!| code"、"   1 |   10 || code"、"   1 |   10 | code"
CALLBY_CODE_LINE_RE = re.compile(
    r"^\s*(\d+)\s*\|\s*(\d+)\s*\|\s*((?:c[01]?)|[01d!]?)\s*(?:\|)?(.*)$"
)
PY_REF_RE = re.compile(r"((?:[a-zA-Z]:)?(?:[\w\-\.]|[\\/])+\.py)(?::(\d+))?")
# ⬅️ 与 ⬅（U+2B05）及可选 U+FE0F，兼容不同字体/保存方式
RETURN_VALUE_LINE_RE = re.compile(r"^\s*\U00002b05\uFE0F?\s*返回值\s+(.*)$", re.UNICODE)
# 单行返回值超过此长度且下一行即 <<<END_RETURN>>> 时，合成「点击展开」（修复旧日志/tracer 误走短路径）
RETURN_LONG_SINGLE_LINE_MIN = 120
# 长变量 / 长返回值未展开时，内联链接文案中的 repr 预览长度（Unicode 码点数）
TRACE_VAR_COLLAPSED_PREVIEW_CHARS = 50
_TRACE_LINEAR_CODE_BLOCK_DURATION_CACHE: Dict[Tuple[str, float, int], List[Dict[str, Any]]] = {}


def _format_trace_duration(duration_s: float) -> str:
    """Format trace durations compactly for call headers."""
    if duration_s <= 0:
        return "~0μs"
    if duration_s < 0.001:
        return f"{duration_s * 1_000_000:.2f}μs"
    if duration_s < 1:
        return f"{duration_s * 1000:.2f}ms"
    return f"{duration_s:.4f}s"


def _trace_event_time(obj: Dict[str, Any]) -> Optional[float]:
    value = obj.get("elapsed_s", obj.get("time"))
    if isinstance(value, (int, float)):
        return float(value)
    return None


DATE_LOG_TIMESTAMP_LINE_RE = re.compile(
    r"^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\]\s+\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\]\s+\{([A-Z]+)\}\s*$"
)
DATE_LOG_INLINE_TOKEN_RE = re.compile(
    r'(\[arg\d+\]|----code_context\s*:\s*lprint\(|\{[A-Z]+\}|\btrue\b|\bfalse\b|\bnull\b|-?\d+\.\d+|-?\d+|"(?:[^"\\]|\\.)*"|[A-Za-z]:[\\/][^,\s\]]+)'
)


def _looks_like_structured_date_log(raw_content: str, filename: str) -> bool:
    if not raw_content:
        return False
    if "<<<LPRINT_DATE_LOG_META>>>" in raw_content:
        return True
    stem = os.path.splitext(os.path.basename(filename or ""))[0]
    stem_is_date = bool(re.fullmatch(r"\d{8}", stem))
    has_batch_marker = "[LogFileHandler] ====== 批量写入" in raw_content
    has_arg_lines = "[arg0]" in raw_content and "----code_context" in raw_content
    timestamp_line_count = len(DATE_LOG_TIMESTAMP_LINE_RE.findall(raw_content))
    return (stem_is_date and has_arg_lines) or (has_batch_marker and timestamp_line_count >= 2)


def _highlight_date_log_inline_tokens(text: str) -> str:
    if not text:
        return ""
    parts: List[str] = []
    cursor = 0
    for match in DATE_LOG_INLINE_TOKEN_RE.finditer(text):
        start, end = match.span()
        if start > cursor:
            parts.append(html_module.escape(text[cursor:start], quote=False))
        token = match.group(0)
        css_class = "tok-default"
        if token.startswith("[arg"):
            css_class = "tok-arg"
        elif token.startswith("----code_context"):
            css_class = "tok-context"
        elif token.startswith("{") and token.endswith("}"):
            css_class = "tok-level"
        elif token.startswith('"') and token.endswith('"'):
            css_class = "tok-string"
        elif token in ("true", "false"):
            css_class = "tok-bool"
        elif token == "null":
            css_class = "tok-null"
        elif token and (token[0].isdigit() or (token[0] == "-" and len(token) > 1 and token[1].isdigit())):
            css_class = "tok-number"
        elif re.match(r"^[A-Za-z]:[\\/]", token):
            css_class = "tok-path"
        parts.append(f"<span class='date-log-token {css_class}'>{html_module.escape(token, quote=False)}</span>")
        cursor = end
    if cursor < len(text):
        parts.append(html_module.escape(text[cursor:], quote=False))
    return "".join(parts)


def _render_structured_date_log_html(raw_content: str) -> str:
    lines = raw_content.splitlines()
    blocks: List[Dict[str, Any]] = []
    current: Optional[Dict[str, Any]] = None
    batch_lines: List[str] = []

    def flush_current() -> None:
        nonlocal current
        if current:
            blocks.append(current)
            current = None

    for line in lines:
        display_line = line.rstrip("\r\n")
        stripped = display_line.strip()
        if not stripped:
            continue
        if stripped.startswith("[LogFileHandler]"):
            flush_current()
            batch_lines.append(display_line)
            continue
        ts_match = DATE_LOG_TIMESTAMP_LINE_RE.match(stripped)
        if ts_match:
            flush_current()
            current = {
                "time": ts_match.group(1),
                "raw_time": ts_match.group(2),
                "level": ts_match.group(3),
                "args": [],
                "file": "",
            }
            continue
        if current is None:
            continue
        if stripped.startswith("[arg"):
            current["args"].append(display_line)
            continue
        if stripped.startswith("File:"):
            current["file"] = display_line
            continue
        current["args"].append(display_line)

    flush_current()

    if not blocks:
        return ""

    cards: List[str] = []
    for item in blocks:
        level = html_module.escape(item.get("level", "INFO"))
        time_text = html_module.escape(item.get("time", ""))
        args_html = "".join(
            f"<div class='date-log-arg'>{_highlight_date_log_inline_tokens(arg)}</div>"
            for arg in item.get("args", [])
        )
        file_html = ""
        if item.get("file"):
            file_html = f"<div class='date-log-file'>{_highlight_date_log_inline_tokens(item['file'])}</div>"
        cards.append(
            "<section class='date-log-entry'>"
            "<header class='date-log-header'>"
            f"<span class='date-log-time-bracket'>[{time_text}]</span>"
            f"<span class='date-log-level-bracket level-{level.lower()}'>{{{level}}}</span>"
            "</header>"
            f"<div class='date-log-body'>{args_html}{file_html}</div>"
            "</section>"
        )

    batch_html = "".join(
        f"<div class='date-log-batch'>{html_module.escape(line)}</div>" for line in batch_lines
    )
    return (
        "<div class='markdown-body date-log-view' style='padding: 20px;'>"
        f"{batch_html}"
        f"{''.join(cards)}"
        "</div>"
    )


def _scan_trace_linear_code_block_durations(sidecar_path: str) -> List[Dict[str, Any]]:
    """Return per-call code-block durations in trace display order."""
    try:
        stat = os.stat(sidecar_path)
    except OSError:
        return []

    cache_key = (sidecar_path, stat.st_mtime, stat.st_size)
    cached = _TRACE_LINEAR_CODE_BLOCK_DURATION_CACHE.get(cache_key)
    if cached is not None:
        return cached

    calls: List[Dict[str, Any]] = []
    stack: List[Dict[str, Any]] = []

    with open(sidecar_path, "r", encoding="utf-8", errors="replace") as f:
        for raw_line in f:
            raw_line = raw_line.strip()
            if not raw_line:
                continue
            try:
                obj = json.loads(raw_line)
            except json.JSONDecodeError:
                continue

            event_type = obj.get("type")
            event_time = _trace_event_time(obj)
            if event_type == "call":
                call_info = {
                    "filename": obj.get("filename"),
                    "function": obj.get("function"),
                    "lineno": obj.get("lineno"),
                    "start_time": event_time,
                    "first_line_time": None,
                    "last_line_time": None,
                    "return_time": None,
                    "line_count": 0,
                }
                calls.append(call_info)
                stack.append(call_info)
                continue

            if event_type == "line":
                if stack and event_time is not None:
                    current = stack[-1]
                    if current["first_line_time"] is None:
                        current["first_line_time"] = event_time
                    current["last_line_time"] = event_time
                    current["line_count"] += 1
                continue

            if event_type == "return":
                matched_index = None
                for idx in range(len(stack) - 1, -1, -1):
                    candidate = stack[idx]
                    if (
                        candidate.get("function") == obj.get("function")
                        and candidate.get("filename") == obj.get("filename")
                    ):
                        matched_index = idx
                        break
                if matched_index is None:
                    continue
                current = stack[matched_index]
                current["return_time"] = event_time
                del stack[matched_index:]

    for call_info in calls:
        first_line_time = call_info.get("first_line_time")
        return_time = call_info.get("return_time")
        last_line_time = call_info.get("last_line_time")
        if isinstance(first_line_time, (int, float)) and isinstance(return_time, (int, float)):
            duration_s = max(0.0, float(return_time) - float(first_line_time))
        elif isinstance(first_line_time, (int, float)) and isinstance(last_line_time, (int, float)):
            duration_s = max(0.0, float(last_line_time) - float(first_line_time))
        else:
            duration_s = None
        call_info["code_block_duration_s"] = duration_s
        call_info["code_block_duration_label"] = (
            _format_trace_duration(duration_s) if isinstance(duration_s, (int, float)) else None
        )

    _TRACE_LINEAR_CODE_BLOCK_DURATION_CACHE.clear()
    _TRACE_LINEAR_CODE_BLOCK_DURATION_CACHE[cache_key] = calls
    return calls


def _trace_var_collapsed_preview(cleaned_body: str, max_chars: int = TRACE_VAR_COLLAPSED_PREVIEW_CHARS) -> str:
    """长变量、长返回值折叠态可见预览；不得含 `]`（否则 [[EXPAND:id:label]] 解析被截断）。"""
    if not cleaned_body.strip():
        return "〈空〉"
    flat = " ".join(cleaned_body.split())
    if len(flat) <= max_chars:
        frag = flat
    else:
        frag = flat[:max_chars] + "…"
    return frag.replace("]", "›")


def _trace_var_collapsed_label(payload: str, cleaned_body: str) -> str:
    """生成长变量折叠链接文案，保留变量名，避免前端只看到变量值预览。"""
    preview = _trace_var_collapsed_preview(cleaned_body)
    clean_payload = (payload or "").split("{BIGVAR:", 1)[0].strip()
    mo = re.match(r"^([A-Za-z_][\w.]*)=([^\s,]+)\s+\([^)]+\),\s*(\d+)\s*字符", clean_payload)
    if mo:
        label = f"变量·{mo.group(1)}·{mo.group(2)}·{mo.group(3)}字符·{preview}·点击展开"
    else:
        name = clean_payload.split("=", 1)[0].strip()
        if name:
            label = f"变量·{name}·{preview}·点击展开"
        else:
            label = f"变量·{preview}·点击展开"
    return label.replace("]", "›")


def _is_return_value_command(stripped: str) -> bool:
    return bool(RETURN_VALUE_LINE_RE.match(stripped))


def _trace_exec_for_sandwich(exec_flag: str) -> bool:
    """夹心检测：与 0/! 一样视为「未跑过」的还有 c0 和 u（tracer 停止后未观测行）。"""
    return exec_flag not in ('!', '0', 'c0', 'u')


def _linkify_py_refs(escaped_text):
    """将已转义文本中的.py文件引用转为可点击链接"""
    def repl(m):
        fname, line_no = m.group(1), m.group(2)
        path_slash = fname.replace("\\", "/")
        href = "openlogfile:" + path_slash
        if line_no:
            href += "#" + line_no
        link_text = '<a href="' + href + '" class="lprint-file-link">' + fname + "</a>"
        if line_no:
            link_text += ":" + line_no
        return link_text
    return PY_REF_RE.sub(repl, escaped_text)


def _escape_code_block(s):
    """代码块内容转义"""
    s = html_module.escape(s)
    if ">" in s:
        s = s.replace(">", "&gt;")
    return s


def _is_trace_command(line):
    """判断一行是否为trace命令"""
    s = line.strip()
    if not s:
        return False
    if s.startswith("callBy(") or s.startswith(">>Function Code") or s.startswith("traceEnd ") or s.startswith("noSource "):
        return True
    if s.startswith("skip ") or s.startswith("💡 变量 ") or s.startswith("[变量]") or s.startswith("[返回值]") or _is_return_value_command(s) or s == "<<<END_RETURN>>>":
        return True
    return False


class LprintTracePreprocessor(Preprocessor):
    """预处理器：解析lprint-trace块并生成HTML"""

    def __init__(self, md=None, filename: str = "", code_block_duration_start_index: int = 0):
        super().__init__(md)
        self.filename = filename
        self._code_block_duration_index = max(0, int(code_block_duration_start_index or 0))
        self._code_block_duration_calls: List[Dict[str, Any]] = []
        sidecar = _trace_linear_sidecar_path(filename) if filename else None
        if sidecar:
            self._code_block_duration_calls = _scan_trace_linear_code_block_durations(sidecar)

    def _next_code_block_duration_html(self) -> str:
        while self._code_block_duration_index < len(self._code_block_duration_calls):
            call_info = self._code_block_duration_calls[self._code_block_duration_index]
            self._code_block_duration_index += 1
            label = call_info.get("code_block_duration_label")
            if not label:
                continue
            line_count = call_info.get("line_count") or 0
            title = f"代码块耗时：{label}，观测行数：{line_count}"
            return (
                ' <span class="lprint-trace-code-duration"'
                f' title="{html_module.escape(title)}">'
                f'代码块⏱️[{html_module.escape(str(label))}]</span>'
            )
        return ""
    
    def run(self, lines):
        new_lines = []
        in_trace = False
        in_summary = False
        in_guide = False
        in_trace_meta = False
        trace_lines = []
        summary_lines = []
        guide_lines = []
        trace_meta_lines = []
        
        for line in lines:
            stripped = line.strip()
            
            # 处理 lprint-trace 块
            if stripped == '<<<lprint-trace>>>':
                in_trace = True
                trace_lines = []
                continue
            elif stripped == '<<</lprint-trace>>>':
                in_trace = False
                _tb_t0 = __import__('time').time()
                print(f"[Parser] parse_trace_block 开始，共 {len(trace_lines)} 行")
                trace_html = self.parse_trace_block(trace_lines)
                print(f"[Parser] parse_trace_block 完成，耗时 {__import__('time').time() - _tb_t0:.2f}s，输出 {len(trace_html)} 字符")
                # 用唯一占位符替换，避免 markdown 库对 trace HTML 里的 | 字符做表格处理
                placeholder = f'\n<div class="lprint-forward-trace">\n{trace_html}\n</div>\n'
                new_lines.extend(placeholder.split('\n'))
                new_lines.append('')
                continue
            
            # 处理 TRACE_SUMMARY 块 - 添加 data-component 包装
            if stripped == '<<<TRACE_SUMMARY>>>':
                in_summary = True
                summary_lines = []
                continue
            elif stripped == '<<</TRACE_SUMMARY>>>':
                in_summary = False
                # 完全移除标记，让内容正常渲染
                new_lines.extend(summary_lines)
                continue
            
            # 处理 USAGE_GUIDE 块 - 添加 data-markdown-source 包装
            if stripped == '<<<USAGE_GUIDE>>>':
                in_guide = True
                guide_lines = []
                continue
            elif stripped == '<<</USAGE_GUIDE>>>':
                in_guide = False
                # 先渲染 Markdown，再放进包装 div
                guide_md = "\n".join(guide_lines)
                guide_html = markdown.markdown(guide_md, extensions=['fenced_code', 'tables', 'nl2br'])
                new_lines.append('<div data-component="usage-guide" class="usage-guide-section" data-markdown-source="true" style="background: #1a202c; color: #cbd5e0; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4a9eff; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">')
                new_lines.append(guide_html)
                new_lines.append('</div>')
                continue

            # 追踪日志元数据：渲染为可见 HTML（网页端展示，非 HTML 注释）
            if stripped == '<<<LPRINT_TRACE_META>>>':
                in_trace_meta = True
                trace_meta_lines = []
                continue
            elif stripped == '<<</LPRINT_TRACE_META>>>':
                in_trace_meta = False
                meta_md = "\n".join(trace_meta_lines)
                meta_html = markdown.markdown(meta_md, extensions=['fenced_code', 'tables', 'nl2br'])
                new_lines.append('<div class="lprint-trace-metadata-panel" data-component="lprint-trace-meta">')
                new_lines.append(meta_html)
                new_lines.append('</div>')
                new_lines.append('')
                continue
            
            if in_trace:
                trace_lines.append(line)
            elif in_summary:
                summary_lines.append(line)
            elif in_guide:
                guide_lines.append(line)
            elif in_trace_meta:
                trace_meta_lines.append(line)
            else:
                new_lines.append(line)
        
        return new_lines
    
    def parse_trace_block(self, lines):
        """完整解析trace块（移植自旧版showLog.py）"""
        i = 0
        out = []
        debug_skip_render_count = 0
        debug_callby_count = 0
        debug_unhandled_count = 0
        debug_unhandled_samples = []
        out.append('<div class="lprint-forward-trace">')
        code_block_open = False
        # 第 5 项：该行代码之后紧跟的 HTML（长变量/返回值展开块），flush 时接在对应 <pre> 后面
        code_lines_buf = []  # list of (exec_flag, disp, source_line_no, code_content, expand_suffix_html)
        last_callby_info = None  # 保存最近的 callBy 完整信息
        current_call_depth = None  # 当前代码块所属 callBy 深度
        _trace_stopped = False       # TRACE_END 后置 True，后续 |0| 行标记为 'u'（未观测）
        _trace_stop_reason = 'manual'  # 'timeout' / 'limit' / 'manual'
        _stop_reason_ref = ['manual']  # 可变引用，供 flush_code_lines 读取
        
        def flush_code_lines():
            nonlocal code_lines_buf, current_call_depth
            if not code_lines_buf:
                return
            # s=0的行（变量行、返回值行）不显示行号；逐行输出 span，便于按执行状态着色
            # 夹心检测：flag=0 的行，若前后最近的实质行（非空、非注释）都是已执行，
            # 则视为"执行行之间的注释/空行"，强制标记为已执行。
            _effective_flags = []
            for _i, row in enumerate(code_lines_buf):
                _ef, _d, _s, _c = row[0], row[1], row[2], row[3]
                _is_entry = _i == 0 or 'lprint.trace_start' in _c or 'trace_start(' in _c
                if _trace_exec_for_sandwich(_ef) or _is_entry:
                    _effective_flags.append(True)   # 已执行
                else:
                    # 向前找最近已执行行
                    _prev_exec = False
                    for _j in range(_i - 1, -1, -1):
                        _pf, _, _, _pc, _ = code_lines_buf[_j]
                        _p_entry = _j == 0 or 'lprint.trace_start' in _pc or 'trace_start(' in _pc
                        if _trace_exec_for_sandwich(_pf) or _p_entry:
                            _prev_exec = True
                            break
                        # 跳过空行/注释继续向前
                        if _pc.strip() and not _pc.strip().startswith('#'):
                            break
                    # 向后找最近已执行行
                    _next_exec = False
                    for _j in range(_i + 1, len(code_lines_buf)):
                        _nf, _, _, _nc, _ = code_lines_buf[_j]
                        _n_entry = _j == 0 or 'lprint.trace_start' in _nc or 'trace_start(' in _nc
                        if _trace_exec_for_sandwich(_nf) or _n_entry:
                            _next_exec = True
                            break
                        if _nc.strip() and not _nc.strip().startswith('#'):
                            break
                    _effective_flags.append(_prev_exec and _next_exec)

            pre_lines = []
            for idx, row in enumerate(code_lines_buf):
                exec_flag, _disp, _src, content, expand_suffix = (
                    row[0], row[1], row[2], row[3], row[4]
                )
                escaped = _escape_code_block(content)
                # 代码块第一行（idx==0）即使 flag=0 也不灰显：
                # tracer 进入函数意味着入口行被执行，flag=0 只是 tracer 未记录 line 事件。
                # 代码块第一行 或 lprint.trace_start 行强制视为已执行
                _is_trace_entry = idx == 0 or 'lprint.trace_start' in content or 'trace_start(' in content
                _sandwich_executed = _effective_flags[idx] if idx < len(_effective_flags) else False
                effective_unexecuted = False  # 默认值，下方分支按需覆盖
                _unobserved_title = None
                # c0：有子调用标记但非本展开已执行行，不参与夹心提亮，始终按未执行底纹 + 休眠调用样式
                if exec_flag == 'u':
                    # tracer 停止后的未观测行：不参与夹心检测，专属样式
                    _unobserved_reason = _stop_reason_ref[0]
                    _unobserved_labels = {
                        'timeout': '超时后未观测（tracer 已停止）',
                        'limit': 'call 次数上限后未观测（tracer 已停止）',
                        'manual': 'tracer 停止后未观测',
                    }
                    _unobserved_title = _unobserved_labels.get(_unobserved_reason, 'tracer 停止后未观测')
                    line_cls = ' lprint-trace-line-unobserved'
                    num_cls = 'lprint-trace-line-num-unobserved'
                else:
                    if exec_flag == 'c0':
                        effective_unexecuted = not _is_trace_entry
                    else:
                        effective_unexecuted = (
                            exec_flag in ('!', '0')
                            and not _is_trace_entry
                            and not _sandwich_executed
                        )
                    if effective_unexecuted and exec_flag == 'c0':
                        line_cls = ' lprint-trace-line-unexecuted lprint-trace-line-call-jump-dormant'
                        num_cls = 'lprint-trace-line-num-call-dormant'
                    elif effective_unexecuted:
                        line_cls = ' lprint-trace-line-unexecuted'
                        num_cls = 'lprint-trace-line-num-unexecuted'
                    elif exec_flag == 'c1':
                        line_cls = ' lprint-trace-line-call-jump'
                        num_cls = 'lprint-trace-line-num-call-jump'
                    elif exec_flag == 'd':
                        line_cls = ' lprint-trace-line-def'
                        num_cls = 'lprint-trace-line-num-def'
                    else:
                        line_cls = ''
                        num_cls = 'lprint-trace-line-num'
                line_num_text = str(_src) if _src != 0 else ""
                num_span = f'<span class="lprint-trace-inline-num {num_cls}">{line_num_text}</span>'
                _title_attr = f' title="{_unobserved_title}"' if _unobserved_title else ''
                pre_lines.append(
                    f'<pre class="lprint-trace-pre-line lprint-trace-semantic-code{line_cls}"{_title_attr}>'
                    f'{num_span}<code class="language-python">{escaped}</code></pre>'
                    + (expand_suffix or "")
                )
            out.append(
                '<div class="lprint-trace-code-block-inner">'
                + ''.join(pre_lines)
                + '</div>'
            )
            code_lines_buf = []
        
        func_container_open = False  # 跟踪 lprint-trace-func 容器是否已打开
        
        def close_code_block():
            nonlocal code_block_open, func_container_open
            flush_code_lines()
            if code_block_open:
                out.append("</div>")  # 关闭 lprint-trace-code-block
                code_block_open = False
            if func_container_open:
                out.append("</div>")  # 关闭 lprint-trace-func
                func_container_open = False
        
        def open_code_block():
            nonlocal code_block_open, func_container_open
            if not func_container_open:
                out.append('<div class="lprint-trace-func">')
                func_container_open = True
            if not code_block_open:
                out.append('<div class="lprint-trace-code-block">')
                code_block_open = True
        
        total_lines = len(lines)
        _progress_step = max(500, total_lines // 20)  # 每 5% 或每 500 行打印一次
        _t0 = __import__('time').time()

        while i < len(lines):
            if i % _progress_step == 0 and i > 0:
                _elapsed = __import__('time').time() - _t0
                print(f"[Parser] parse_trace_block 进度: {i}/{total_lines} 行 ({100*i//total_lines}%) 耗时 {_elapsed:.1f}s")
            line = lines[i]
            stripped = line.strip()
            
            # <<<CALL_TREE>>> 开始标记
            if stripped == "<<<CALL_TREE>>>":
                close_code_block()
                i += 1
                continue
            
            # <<</CALL_TREE>>> 结束标记
            if stripped == "<<</CALL_TREE>>>":
                close_code_block()
                i += 1
                continue
            
            # <<<USAGE_GUIDE>>> 开始标记 - 收集内容后渲染 Markdown
            if stripped == "<<<USAGE_GUIDE>>>":
                close_code_block()
                i += 1
                guide_lines_buf = []
                while i < len(lines) and lines[i].strip() != "<<</USAGE_GUIDE>>>":
                    guide_lines_buf.append(lines[i])
                    i += 1
                if i < len(lines) and lines[i].strip() == "<<</USAGE_GUIDE>>>":
                    i += 1
                guide_md = "\n".join(guide_lines_buf)
                guide_html = markdown.markdown(guide_md, extensions=['fenced_code', 'tables', 'nl2br'])
                out.append('<div data-component="usage-guide" class="usage-guide-section" style="background: #1a202c; color: #cbd5e0; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #4a9eff; box-shadow: 0 2px 8px rgba(0,0,0,0.3);">')
                out.append(guide_html)
                out.append('</div>')
                continue
            
            # CMD_INFO标记
            if stripped == "<<<CMD_INFO>>>":
                i += 1
                cmd_lines = []
                while i < len(lines):
                    line_content = lines[i]
                    line_stripped = line_content.strip()
                    if line_stripped == "<<</CMD_INFO>>>":
                        break
                    if line_stripped.startswith("CMD:["):
                        cmd_info = line_stripped[5:]  # 去掉 "CMD:[" 前缀
                        if cmd_info.endswith("]"):
                            cmd_info = cmd_info[:-1]  # 去掉 "]" 后缀
                        out.append(f'<div class="lprint-cmd-info" style="background:#2d3748;color:#e2e8f0;padding:8px 12px;margin:10px 0;border-radius:4px;font-family:monospace;font-size:12px;border-left:4px solid #4299e1;">')
                        out.append(f'<div style="font-weight:bold;color:#4299e1;margin-bottom:4px;">🔧 执行命令</div>')
                        out.append(f'<div>{html_module.escape(cmd_info)}</div>')
                        out.append('</div>')
                    i += 1
                continue
            
            # TREE_OVERVIEW标记
            if stripped == "TREE_OVERVIEW":
                out.append('<div id="trace-tree-view-container" style="margin:15px 0;"></div>')
                i += 1
                if i < len(lines) and "调用链概览" in lines[i]:
                    i += 1
                if i < len(lines) and lines[i].strip() == "```":
                    i += 1
                tree_lines = []
                while i < len(lines):
                    line_content = lines[i]
                    line_stripped = line_content.strip()
                    if line_stripped == "```" or not line_stripped or line_stripped in ["TRACE_DETAIL_START", "TRACE_END"]:
                        if line_stripped == "```":
                            i += 1
                        break
                    if any(char in line_content for char in ["├", "└", "│", "#"]):
                        # 截断超长行（返回值太长时）
                        display_line = line_content
                        if len(display_line) > 200:
                            display_line = display_line[:200] + "..."
                        tree_lines.append(html_module.escape(display_line))
                    i += 1
                if tree_lines:
                    out.append('<div class="lprint-trace-tree" style="display:none;">')
                    for tree_line in tree_lines:
                        out.append(f'<div>{tree_line}</div>')
                    out.append('</div>')
                continue
            
            # TRACE_DETAIL_START标记
            if stripped == "TRACE_DETAIL_START":
                out.append('<p class="lprint-trace-divider" style="color:#888;margin:10px 0;">─── 详细追踪 ───</p>')
                i += 1
                continue
            
            # 处理 HTML 格式的 callBy 行（已经被包裹在 <p class="lprint-trace-call"> 中）
            if '<p class="lprint-trace-call"' in stripped and 'callBy(' in stripped:
                close_code_block()
                # 提取 callBy 的完整信息（去除 HTML 标签）
                import re as re_module
                # 提取 <p>...</p> 之间的内容
                match = re_module.search(r'<p[^>]*>(.*?)</p>', stripped)
                if match:
                    callby_content = match.group(1)
                    # 解析 callBy 信息
                    callby_match = re_module.search(r'callBy\((深度(\d+)\s+路径([\d\-]+)\s+#(\d+))\):\s+(.+)', callby_content)
                    if callby_match:
                        depth_num = callby_match.group(2)      # "2"
                        try:
                            current_call_depth = int(depth_num)
                        except Exception:
                            current_call_depth = None
                        depth_path = callby_match.group(3)     # "3-1"
                        call_id = callby_match.group(4)        # "10"
                        rest_info = callby_match.group(5)      # 后续的所有信息
                        
                        last_callby_info = (
                            f'{callby_match.group(1)}: {rest_info}'
                            + self._next_code_block_duration_html()
                        )
                        out.append(f'<p id="call-{call_id}" class="lprint-trace-call">{last_callby_info}</p>')
                    else:
                        # 如果解析失败，直接输出原始 HTML
                        out.append(stripped)
                else:
                    # 如果提取失败，直接输出原始 HTML
                    out.append(stripped)
                i += 1
                continue
            
            # callBy行处理（纯文本格式）
            if stripped.startswith("callBy("):
                debug_callby_count += 1
                close_code_block()
                m_call = CALLBY_CALL_RE.search(stripped)
                if m_call:
                    # 新格式分组: 1=深度, 2=路径, 3=ID, 4=文件路径, 5=行号, 6=函数名, 7=调用者路径(可选), 8=调用者行号(可选)
                    depth_num = m_call.group(1)
                    try:
                        current_call_depth = int(depth_num)
                    except Exception:
                        current_call_depth = None
                    depth_path = m_call.group(2)
                    call_id = m_call.group(3)
                    path_part = m_call.group(4)
                    line_num = m_call.group(5)
                    func_name = m_call.group(6)
                    
                    # 生成唯一的call_id用于跳转定位
                    unique_call_id = "call-{}-{}-{}".format(depth_num, func_name, line_num)
                    
                    # 从原始行中提取 "callBy(...): " 之后的所有内容
                    # 格式: callBy(深度1 路径3 #9): path:line in func() ← :113 ⏱️[...] 🔥 [PID:...]
                    colon_idx = stripped.find("): ")
                    if colon_idx != -1:
                        # 获取 "): " 之后的完整内容
                        rest_content = stripped[colon_idx + 3:]  # +3 跳过 "): "
                        # 转义并链接化文件引用
                        rest_html = _linkify_py_refs(html_module.escape(rest_content))
                        
                        # 保存完整的 callBy 信息，供后续 >>Function Code 使用
                        last_callby_info = '# >>深度{} 路径{} #{} {}'.format(
                            depth_num, depth_path, call_id, rest_html
                        ) + self._next_code_block_duration_html()
                        
                        # 在显示文本中包含路径和ID信息（与树视图格式保持一致）
                        out.append('<p id="call-{}" class="lprint-trace-call">{}</p>'.format(
                            call_id, last_callby_info))
                    else:
                        # 降级处理：使用提取的字段构建
                        path_line = path_part + ":" + line_num
                        link = _linkify_py_refs(html_module.escape(path_line))
                        caller_html = ""
                        if m_call.group(7) and m_call.group(8):
                            caller_path = m_call.group(7)
                            caller_line = m_call.group(8)
                            caller_html = ' ← {}:{}'.format(html_module.escape(caller_path), caller_line)
                        
                        last_callby_info = '# >>深度{} {} {}(){}'.format(
                            depth_num, link, html_module.escape(func_name), caller_html
                        ) + self._next_code_block_duration_html()
                        
                        out.append('<p id="call-{}" class="lprint-trace-call">{}</p>'.format(
                            call_id, last_callby_info))
                else:
                    last_callby_info = (
                        '# >>深度'
                        + _linkify_py_refs(html_module.escape(stripped))
                        + self._next_code_block_duration_html()
                    )
                    out.append('<p class="lprint-trace-call">{}</p>'.format(last_callby_info))
                i += 1
                continue
            
            # >>Function Code标记 - 显示为标题，跳过后续函数代码行
            if stripped.startswith(">>Function Code"):
                flush_code_lines()
                # 解析 ID：>>Function Code|id=func-1 (深度...)
                func_id = None
                if "|id=" in stripped:
                    parts = stripped.split("|id=", 1)
                    if len(parts) == 2:
                        id_part = parts[1].split(" ", 1)[0]  # 提取 func-1
                        func_id = id_part
                
                # 添加带 ID 的容器
                if func_id:
                    out.append(f'<div class="lprint-trace-func" id="{func_id}">')
                else:
                    out.append('<div class="lprint-trace-func">')
                func_container_open = True  # 标记容器已打开
                
                # 不再显示 >>Function Code 标题，因为上面已经有 callBy 行了
                # 直接跳过，只保留函数代码块容器
                i += 1
                continue
            
            # 代码行（D | S | 标记 | code）：0/1、d、c0/c1（或旧 c≈c1）
            mo = CALLBY_CODE_LINE_RE.match(line)
            if mo:
                open_code_block()
                disp, src = int(mo.group(1)), int(mo.group(2))
                raw_flag = (mo.group(3) or '').strip()
                code_content = mo.group(4)
                if code_content.startswith('|'):
                    # 兼容旧格式中残留的分隔符
                    code_content = code_content[1:]
                if code_content.startswith(' '):
                    # 保持与历史渲染一致：去掉分隔符后的单个填充空格
                    code_content = code_content[1:]
                if raw_flag in ('0', '!'):
                    exec_flag = 'u' if _trace_stopped else '0'
                elif raw_flag in ('c', 'c1'):
                    exec_flag = 'c1'
                elif raw_flag == 'c0':
                    exec_flag = 'c0'
                elif raw_flag == 'd':
                    exec_flag = 'd'
                else:
                    exec_flag = '1'
                code_lines_buf.append((exec_flag, disp, src, code_content, ""))
                i += 1
                continue
            
            # 变量行处理
            if stripped.startswith("💡 变量 "):
                payload = stripped[len("💡 变量 "):].strip()
                has_expand_content = False
                expand_body = None
                expand_id = None  # 与 expand_body 共用，保证 [[EXPAND:...]] 与 DOM id 一致
                
                _next_is_end_var = (
                    i + 1 < len(lines) and lines[i + 1].strip() == "<<<END_VAR>>>"
                )
                _next_has_body = (
                    i + 1 < len(lines)
                    and not _next_is_end_var
                    and not _is_trace_command(lines[i + 1])
                    and not CALLBY_CODE_LINE_RE.match(lines[i + 1])
                )

                if " 字符" in payload and _next_has_body:
                    has_expand_content = True
                elif len(payload) >= RETURN_LONG_SINGLE_LINE_MIN:
                    # 单行超长变量（payload 本身即完整内容，下一行可能是 <<<END_VAR>>>）
                    has_expand_content = True

                if has_expand_content:
                    if " 字符" in payload and _next_has_body:
                        # 多行展开内容跟在变量行后面
                        i += 1
                        body_lines = []
                        while i < len(lines) and lines[i].strip() != "<<<END_VAR>>>":
                            body_lines.append(lines[i])
                            i += 1
                        if i < len(lines):
                            i += 1  # 消费 <<<END_VAR>>>

                        cleaned_lines = []
                        for line in body_lines:
                            cleaned_line = line.lstrip()
                            if cleaned_line.startswith('#'):
                                cleaned_line = cleaned_line.lstrip('#').lstrip()
                            if cleaned_line.startswith('💡'):
                                cleaned_line = cleaned_line[1:].lstrip()
                            cleaned_lines.append(cleaned_line)
                        cleaned_body = "\n".join(cleaned_lines)
                    else:
                        # 单行超长变量：payload 本身就是展开内容
                        cleaned_body = payload
                        i += 1  # 消费变量行
                        if _next_is_end_var:
                            i += 1  # 消费 <<<END_VAR>>>

                    escaped = html_module.escape(cleaned_body)
                    expand_id = f"var_expand_{id(payload)}_{i}"
                    expand_body = f'<div class="lprint-trace-expand-container" id="{expand_id}" style="display:none;"><div class="lprint-trace-expand-header">💡 变量 {_linkify_py_refs(html_module.escape(payload))}</div><pre class="lprint-trace-return-pre">{_linkify_py_refs(escaped)}</pre></div>'
                else:
                    i += 1
                    if _next_is_end_var:
                        i += 1  # 消费 <<<END_VAR>>>
                
                # 将变量摘要附加到上一行代码末尾作为行内注释
                if code_lines_buf:
                    last_flag, last_disp, last_src, last_code, last_expand = code_lines_buf[-1]
                    # 如果有展开内容，只显示摘要；否则显示完整信息
                    if has_expand_content and expand_id:
                        var_link_label = _trace_var_collapsed_label(payload, cleaned_body)
                        new_code = last_code + f"  # 💡 [[EXPAND:{expand_id}:{var_link_label}]]"
                    else:
                        new_code = last_code + "  # 💡 " + payload
                    new_expand = (last_expand or "") + (expand_body or "")
                    code_lines_buf[-1] = (last_flag, last_disp, last_src, new_code, new_expand)
                        
                continue
            
            # 返回值行处理（兼容 ⬅️ / ⬅ 箭头变体）
            mo_ret = RETURN_VALUE_LINE_RE.match(stripped)
            if mo_ret:
                payload = (mo_ret.group(1) or "").strip()
                has_expand_content = False
                expand_body = None
                repr_for_preview = ""  # 完整 repr，用于折叠态 50 字预览与总字数
                expand_id = f"ret_expand_{hashlib.md5(payload.encode('utf-8', errors='replace')).hexdigest()[:12]}_{i}"

                next_stripped = lines[i + 1].strip() if i + 1 < len(lines) else ""
                body_follows = False
                if i + 1 < len(lines):
                    _next = lines[i + 1]
                    body_follows = (
                        next_stripped != "<<<END_RETURN>>>"
                        and not _is_trace_command(_next)
                        and not CALLBY_CODE_LINE_RE.match(_next)
                        and not next_stripped.startswith('<p class="lprint-trace-call"')
                        and not next_stripped.startswith('>>Function Code')
                    )

                if body_follows:
                    has_expand_content = True
                    i += 1
                    body_lines = []
                    while i < len(lines) and lines[i].strip() != "<<<END_RETURN>>>":
                        body_lines.append(lines[i])
                        i += 1
                    if i < len(lines):
                        i += 1

                    cleaned_lines = []
                    for line in body_lines:
                        cleaned_line = line.lstrip()
                        if cleaned_line.startswith('#'):
                            cleaned_line = cleaned_line.lstrip('#').lstrip()
                        if cleaned_line.startswith('💡'):
                            cleaned_line = cleaned_line[1:].lstrip()
                        if cleaned_line.startswith('变量'):
                            continue
                        cleaned_lines.append(cleaned_line)

                    cleaned_body = "\n".join(cleaned_lines)
                    repr_for_preview = cleaned_body
                    escaped = html_module.escape(cleaned_body)
                    display_payload = payload if len(payload) <= 100 else payload[:100] + "..."
                    expand_body = (
                        f'<div class="lprint-trace-expand-container" id="{expand_id}" style="display:none;">'
                        f'<div class="lprint-trace-expand-header">返回值 {_linkify_py_refs(html_module.escape(display_payload))}</div>'
                        f'<pre class="lprint-trace-return-pre">{escaped}</pre></div>'
                    )
                elif next_stripped == "<<<END_RETURN>>>" and len(payload) > RETURN_LONG_SINGLE_LINE_MIN:
                    # 单行超长返回值 + 立即 END：合成隐藏块，避免整段贴进代码注释
                    has_expand_content = True
                    repr_for_preview = payload
                    escaped = html_module.escape(payload)
                    display_payload = payload if len(payload) <= 100 else payload[:100] + "..."
                    expand_body = (
                        f'<div class="lprint-trace-expand-container" id="{expand_id}" style="display:none;">'
                        f'<div class="lprint-trace-expand-header">返回值 {_linkify_py_refs(html_module.escape(display_payload))}</div>'
                        f'<pre class="lprint-trace-return-pre">{escaped}</pre></div>'
                    )
                    i += 1
                    if i < len(lines) and lines[i].strip() == "<<<END_RETURN>>>":
                        i += 1
                else:
                    i += 1
                    if i < len(lines) and lines[i].strip() == "<<<END_RETURN>>>":
                        i += 1

                if code_lines_buf:
                    last_flag, last_disp, last_src, last_code, last_expand = code_lines_buf[-1]
                    if has_expand_content:
                        preview_part = _trace_var_collapsed_preview(repr_for_preview)
                        link_label = (
                            f"返回值·{preview_part}·共{len(repr_for_preview)}字符·点击展开"
                        )
                        new_code = last_code + f"  # [[EXPAND:{expand_id}:{link_label}]]"
                    else:
                        new_code = last_code + "  # 返回值 " + payload
                    new_expand = (last_expand or "") + (expand_body or "")
                    code_lines_buf[-1] = (last_flag, last_disp, last_src, new_code, new_expand)

                continue
            
            # skip行
            if stripped.startswith("skip "):
                debug_skip_render_count += 1
                close_code_block()
                skip_msg = stripped[5:].strip()
                out.append('<p class="lprint-trace-skip"># [{}]</p>'.format(html_module.escape(skip_msg)))
                i += 1
                continue
            
            # traceEnd
            if stripped.startswith("traceEnd "):
                close_code_block()
                payload = stripped[9:].strip()
                out.append('<p class="lprint-trace-end"># ══ ' + _linkify_py_refs(html_module.escape(payload)) + " 结束</p>")
                i += 1
                continue
            
            # TRACE_END（新格式结束标记）
            if stripped.startswith("TRACE_END"):
                close_code_block()
                _trace_stopped = True
                # 解析停止原因：TRACE_END reason=timeout|limit|manual
                _reason_match = re.search(r'reason=(\w+)', stripped)
                if _reason_match:
                    _trace_stop_reason = _reason_match.group(1)
                    _stop_reason_ref[0] = _trace_stop_reason
                _reason_labels = {
                    'timeout': '超时停止',
                    'limit': 'call 次数上限停止',
                    'manual': '正常结束',
                }
                _reason_text = _reason_labels.get(_trace_stop_reason, _trace_stop_reason)
                out.append('<div class="lprint-trace-end-section">')
                out.append(f'<p class="lprint-trace-end-header" style="color:#4a9eff;font-weight:bold;font-size:1.1em;margin:10px 0;">═══ 追踪结束（{_reason_text}）═══</p>')
                i += 1
                continue
            
            # <<<TRACE_SUMMARY>>> 开始标记
            if stripped == "<<<TRACE_SUMMARY>>>":
                close_code_block()
                i += 1
                continue
            
            # <<</TRACE_SUMMARY>>> 结束标记
            if stripped == "<<</TRACE_SUMMARY>>>":
                close_code_block()
                i += 1
                continue
            
            # 📋 追踪摘要
            if stripped.startswith("📋 追踪摘要") or stripped.startswith("📋"):
                out.append('<p class="lprint-trace-summary-title" style="color:#4a9eff;font-weight:bold;margin:8px 0;">📋 追踪摘要</p>')
                i += 1
                continue
            
            # • 开头的摘要项（起始函数、总耗时、性能热点）
            if stripped.startswith("• "):
                payload = stripped[2:].strip()
                out.append('<p class="lprint-trace-summary-item" style="margin:4px 0;padding-left:20px;">' + _linkify_py_refs(html_module.escape(payload)) + '</p>')
                i += 1
                continue
            
            # 性能热点条目（🔥 或 ⚡ 开头）
            if stripped.startswith("🔥 ") or stripped.startswith("⚡ "):
                payload = stripped[2:].strip()
                marker = "🔥" if stripped.startswith("🔥") else "⚡"
                out.append('<p class="lprint-trace-hotspot" style="margin:4px 0;padding-left:40px;">' + marker + ' ' + _linkify_py_refs(html_module.escape(payload)) + '</p>')
                i += 1
                continue
            
            # ✓ 追踪完成标记
            if stripped.startswith("✓ "):
                payload = stripped[2:].strip()
                out.append('<p class="lprint-trace-complete" style="color:#52c41a;margin:8px 0;">' + html_module.escape("✓ " + payload) + '</p>')
                out.append('</div>')  # 关闭 lprint-trace-end-section
                i += 1
                continue
            
            # 跳过END标记
            if stripped == "<<<END_RETURN>>>":
                i += 1
                continue
            if stripped:
                debug_unhandled_count += 1
                if len(debug_unhandled_samples) < 8:
                    debug_unhandled_samples.append(stripped[:160])
            i += 1
        
        close_code_block()
        out.append("</div>")
        # 添加空段落，强制 Markdown 库退出 HTML 模式，正确处理后续的 Markdown 内容
        out.append("")
        out.append("")
        # #region agent log
        try:
            _payload = {
                "sessionId": "ca8ed4",
                "runId": "run-bottom-md-render",
                "hypothesisId": "H1",
                "location": "parser.py:parse_trace_block:end",
                "message": "trace block unhandled lines summary",
                "data": {
                    "input_lines": len(lines),
                    "callby_count": debug_callby_count,
                    "skip_count": debug_skip_render_count,
                    "unhandled_count": debug_unhandled_count,
                    "unhandled_samples": debug_unhandled_samples
                },
                "timestamp": __import__("time").time_ns() // 1000000
            }
            with open("debug-ca8ed4.log", "a", encoding="utf-8") as _f:
                _f.write(__import__("json").dumps(_payload, ensure_ascii=False) + "\n")
        except Exception:
            pass
        # #endregion
        return '\n'.join(out)


class LprintTraceExtension(Extension):
    """Markdown扩展：处理lprint-trace块"""

    def __init__(
        self,
        filename: str = "",
        code_block_duration_start_index: int = 0,
        **kwargs,
    ):
        super().__init__(**kwargs)
        self.filename = filename
        self.code_block_duration_start_index = code_block_duration_start_index
    
    def extendMarkdown(self, md):
        print(f"[Parser] 注册 LprintTraceExtension")
        md.preprocessors.register(
            LprintTracePreprocessor(
                md,
                filename=self.filename,
                code_block_duration_start_index=self.code_block_duration_start_index,
            ),
            'lprint_trace',
            175,
        )


_DEFAULT_TRACE_RULES: Optional[Dict[str, Any]] = None


def _load_default_trace_rules() -> Dict[str, Any]:
    """默认 ``rules``（与 ``trace_default_rules.json`` 一致），供 TraceDataParser 使用。"""
    global _DEFAULT_TRACE_RULES
    if _DEFAULT_TRACE_RULES is not None:
        return _DEFAULT_TRACE_RULES
    rules_path = os.path.join(os.path.dirname(__file__), "trace_default_rules.json")
    try:
        with open(rules_path, "r", encoding="utf-8") as rf:
            _DEFAULT_TRACE_RULES = json.load(rf)
    except Exception as e:
        print(f"[Parser] 无法加载 trace_default_rules.json: {e}")
        _DEFAULT_TRACE_RULES = {"parsing": {}, "components": {}, "features": {}}
    return _DEFAULT_TRACE_RULES


def _trace_linear_sidecar_path(md_filename: str) -> Optional[str]:
    """``{stem}.trace_linear.jsonl`` 与 ``{stem}.md`` 同目录时返回绝对路径，否则 ``None``。"""
    try:
        import config
    except ImportError:
        return None
    if not md_filename:
        return None
    md_path = os.path.join(config.LOGS_DIR, md_filename)
    parent = os.path.dirname(md_path)
    stem = os.path.splitext(os.path.basename(md_path))[0]
    sidecar = os.path.join(parent, stem + ".trace_linear.jsonl")
    return sidecar if os.path.isfile(sidecar) else None


def _scan_trace_linear_sidecar_meta(sidecar_path: str) -> Dict[str, Any]:
    """流式扫描 NDJSON，生成 metadata（不把全部事件读入内存拼装到 API JSON）。"""
    total = 0
    n_call = 0
    n_return = 0
    n_line = 0
    n_exc = 0
    max_depth = 0
    with open(sidecar_path, "r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            total += 1
            try:
                obj = json.loads(line)
            except json.JSONDecodeError:
                continue
            t = obj.get("type")
            if t == "call":
                n_call += 1
            elif t == "return":
                n_return += 1
            elif t == "line":
                n_line += 1
            elif t == "exception":
                n_exc += 1
            d = obj.get("depth")
            if isinstance(d, (int, float)) and d > max_depth:
                max_depth = int(d)
    return {
        "total_calls": n_call,
        "max_depth": max_depth,
        "total_events": total,
        "return_events": n_return,
        "line_events": n_line,
        "exception_events": n_exc,
        "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "parser_version": "2.1.0",
        "source": "trace_linear.jsonl",
    }


def _build_trace_json_from_sidecar(md_filename: str) -> Optional[Dict[str, Any]]:
    """若存在侧车 ``.trace_linear.jsonl``，用默认 rules + 扫描得到的 metadata 构建 ``data``。"""
    sidecar = _trace_linear_sidecar_path(md_filename)
    if not sidecar:
        return None
    try:
        meta = _scan_trace_linear_sidecar_meta(sidecar)
    except OSError as e:
        print(f"[Parser] 扫描 trace_linear 侧车失败: {e}")
        return None
    if meta.get("total_events", 0) == 0:
        return None
    print(
        f"[Parser] 使用侧车 trace_linear.jsonl："
        f" 事件 {meta['total_events']} 条, call {meta['total_calls']}"
    )
    return {
        "format": "trace_linear",
        "source": "trace_linear.jsonl",
        "rules": _load_default_trace_rules(),
        "metadata": meta,
        "highlights": {"slow_calls": [], "deep_calls": [], "error_calls": []},
    }


def is_log_cache_stale(cache_path: str, md_relative_path: str) -> bool:
    """当源 ``.md`` 新于缓存时返回 True。
    
    注意：``.trace_linear.jsonl`` 不纳入判断，因为它由 tracer 持续写入，
    会导致缓存永远失效；parser.py 更新会让缓存失效，以便展示规则及时生效。
    """
    try:
        import config
    except ImportError:
        return True
    try:
        if not os.path.isfile(cache_path):
            return True
        md_path = os.path.join(config.LOGS_DIR, md_relative_path)
        if not os.path.isfile(md_path):
            return True
        ct = os.path.getmtime(cache_path)
        if os.path.getmtime(md_path) > ct:
            return True
        if os.path.getmtime(__file__) > ct:
            return True
    except OSError:
        return True
    return False


def parse_md_to_html(raw_content: str, filename: str = "") -> dict:
    """
    将markdown日志转换为HTML
    
    Args:
        raw_content: 原始markdown内容
        filename: 文件名
        
    Returns:
        dict: {'html': str, 'filename': str, 'data': dict (可选)}
    """
    print(f"[Parser] 开始解析 Markdown，文件: {filename}, 长度: {len(raw_content)} 字符")
    _parse_t0 = __import__('time').time()
    if not raw_content:
        return {'html': '<div class="empty">空日志文件</div>', 'filename': filename}

    if _looks_like_structured_date_log(raw_content, filename):
        structured_html = _render_structured_date_log_html(raw_content)
        if structured_html:
            return {
                'html': structured_html,
                'filename': filename
            }
    
    try:
        import re

        # 顶部「仅给 AI / 阅读说明」块：不在主 HTML 中渲染，单独返回供前端折叠展示；源 .md 仍保留（读 raw 接口可见）
        ai_log_hint_html = ""
        ai_hint_match = re.search(
            r"<<<AI_LOG_HINT>>>\s*(.*?)<<</AI_LOG_HINT>>>",
            raw_content,
            flags=re.DOTALL,
        )
        if ai_hint_match:
            hint_md = ai_hint_match.group(1).strip()
            if hint_md:
                try:
                    _hint_html = markdown.markdown(
                        hint_md,
                        extensions=["fenced_code", "tables", "nl2br"],
                    )
                    ai_log_hint_html = (
                        '<div class="ai-log-hint-inner markdown-body" data-role="ai-log-hint">'
                        + _hint_html
                        + "</div>"
                    )
                except Exception as _e:
                    print(f"[Parser] AI_LOG_HINT Markdown 渲染失败: {_e}")
                    ai_log_hint_html = (
                        "<pre class=\"ai-log-hint-inner\">"
                        + html_module.escape(hint_md)
                        + "</pre>"
                    )
            raw_content = re.sub(
                r"<<<AI_LOG_HINT>>>\s*.*?<<</AI_LOG_HINT>>>\s*",
                "",
                raw_content,
                count=1,
                flags=re.DOTALL,
            )
        
        # 追踪数据：仅同目录 ``{stem}.trace_linear.jsonl``；.md 内嵌 JSON 索引块仅作剔除，不解析
        json_data = None
        trace_linear_available = False
        if filename:
            json_from_sidecar = _build_trace_json_from_sidecar(filename)
            if json_from_sidecar:
                json_data = json_from_sidecar
                trace_linear_available = True
        # 历史内嵌索引：不再解析；侧车 trace_linear.jsonl + 默认 rules 为唯一数据源。此处仅剔除块以免重复展示。
        raw_content = re.sub(
            r'<<<JSON_INDEX>>>\s*```json\s*\n.*?\n```\s*<<</JSON_INDEX>>>\s*',
            "",
            raw_content,
            flags=re.DOTALL,
        )

        # 提取日志元数据（从HTML注释中）
        metadata_html = ""
        metadata_match = re.search(r'<!-- 日志元数据\s+(.*?)\s+-->', raw_content, re.DOTALL)
        if metadata_match:
            print(f"[Parser] 找到元数据")
            metadata_text = metadata_match.group(1).strip()
            metadata_lines = [line.strip() for line in metadata_text.split('\n') if line.strip()]
            
            if metadata_lines:
                metadata_items = []
                for line in metadata_lines:
                    if ':' in line:
                        key, value = line.split(':', 1)
                        metadata_items.append(f'<span style="margin-right: 20px;"><strong>{key.strip()}:</strong> {value.strip()}</span>')
                
                metadata_html = f'''
                <div style="background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%); 
                            color: #cbd5e0; 
                            padding: 12px 20px; 
                            border-radius: 8px; 
                            margin-bottom: 20px;
                            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                            font-size: 13px;
                            border-left: 4px solid #4a5568;">
                    <div style="display: flex; align-items: center; flex-wrap: wrap;">
                        <span style="margin-right: 15px; font-size: 16px;">📋</span>
                        {' '.join(metadata_items)}
                    </div>
                </div>
                '''
        # #region agent log
        try:
            _trace_end_idx = raw_content.find("TRACE_END")
            _tail_preview = raw_content[_trace_end_idx:_trace_end_idx + 500] if _trace_end_idx >= 0 else raw_content[-500:]
            _payload = {
                "sessionId": "ca8ed4",
                "runId": "run-bottom-md-render",
                "hypothesisId": "H2",
                "location": "parser.py:parse_md_to_html:pre_markdown",
                "message": "raw content tail around TRACE_END before markdown",
                "data": {
                    "has_trace_end": _trace_end_idx >= 0,
                    "tail_has_md_heading": ("## " in _tail_preview or "### " in _tail_preview),
                    "tail_has_fence": ("```" in _tail_preview),
                    "tail_preview": _tail_preview[:300]
                },
                "timestamp": __import__("time").time_ns() // 1000000
            }
            with open("debug-ca8ed4.log", "a", encoding="utf-8") as _f:
                _f.write(__import__("json").dumps(_payload, ensure_ascii=False) + "\n")
        except Exception:
            pass
        # #endregion
        
        # 使用markdown库转换，支持常用扩展
        _t0 = time.time()
        print(f"[Parser] 开始 Markdown 转 HTML，内容长度: {len(raw_content)} 字符，行数: {raw_content.count(chr(10))}")

        # 快速路径：纯 trace 文件（内容几乎全在 <<<lprint-trace>>> 块里）
        # 直接走预处理器，跳过 markdown 全文解析，避免 O(n²) 性能问题
        _is_pure_trace = (
            ('<<<lprint-trace>>>' in raw_content or '<<<LPRINT_TRACE_META>>>' in raw_content)
            and len(raw_content) > 50_000
        )
        if _is_pure_trace:
            print(f"[Parser] 检测到大型 trace 文件，走快速路径（跳过 markdown 全文解析）")
            _preprocessor = LprintTracePreprocessor(markdown.Markdown(), filename=filename)
            _lines = _preprocessor.run(raw_content.split('\n'))
            html_content = '\n'.join(_lines)
        else:
            print(f"[Parser] 走标准 markdown 解析路径")
            html_content = markdown.markdown(
                raw_content,
                extensions=[
                    'extra',          # 表格、代码块等
                    'sane_lists',     # 更好的列表处理
                    'fenced_code',    # 围栏代码块
                    'codehilite',     # 代码高亮
                    LprintTraceExtension(filename=filename)  # 自定义trace块处理
                ],
                extension_configs={
                    'codehilite': {
                        'css_class': 'highlight',
                        'linenums': False
                    }
                }
            )
        _t1 = time.time()
        print(f"[Parser] Markdown 转换完成，耗时: {_t1 - _t0:.3f}s，生成 HTML 长度: {len(html_content)} 字符")
        
        # 后处理：通过识别特定内容添加 data-component 包装
        # TRACE_SUMMARY - 查找纯文本形式的 "📋 追踪摘要" 到 "✓ 追踪完成"
        trace_summary_pattern = r'(📋 追踪摘要.*?✓ 追踪完成[^\n]*)'
        trace_summary_replacement = r'<div data-component="trace-summary" class="trace-summary-section" style="background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%); color: #e2e8f0; padding: 20px; border-radius: 8px; margin: 20px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.3); border-left: 4px solid #667eea; white-space: pre-line; line-height: 1.6;">\1</div>'
        html_content = re.sub(trace_summary_pattern, trace_summary_replacement, html_content, flags=re.DOTALL)
        
        # USAGE_GUIDE 在parse_trace_block中已处理，无需后处理
        
        # 包装为完整的HTML结构（在顶部添加元数据卡片）
        full_html = f'''
        <div class="markdown-body" style="padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;">
            {metadata_html}
            {html_content}
        </div>
        '''
        
        result = {
            'html': full_html,
            'filename': filename
        }
        if ai_log_hint_html:
            result['ai_log_hint_html'] = ai_log_hint_html
        
        # 如果有 JSON 数据，添加到返回值中
        if json_data:
            result['data'] = json_data
        if trace_linear_available:
            result['trace_linear_available'] = True
        
        print(f"[Parser] 解析完成，总耗时 {__import__('time').time() - _parse_t0:.2f}s，最终 HTML 长度: {len(result['html'])} 字符")
        return result
    except Exception as e:
        # 如果markdown转换失败，降级为纯文本显示
        print(f"Markdown转换失败: {e}")
        html_content = f'''
        <div class="log-content">
            <pre style="font-family: 'Consolas', 'Monaco', monospace; 
                        font-size: 13px; 
                        line-height: 1.5; 
                        white-space: pre-wrap; 
                        word-wrap: break-word;
                        padding: 20px;
                        background: #fff;
                        color: #333;">{html_module.escape(raw_content)}</pre>
        </div>
        '''
        return {
            'html': html_content,
            'filename': filename
        }


def parse_md_chunk_to_html(
    raw_content: str,
    filename: str = "",
    in_trace: bool = False,
    trace_call_start_index: int = 0,
) -> dict:
    """Parse a Markdown fragment for progressive large-log rendering.

    The full parser still owns the final HTML rules. This helper keeps the
    same Markdown/trace rendering path, but accepts fragments and returns the
    trace-block state needed by the next chunk.
    """
    if not raw_content:
        return {"html": "", "filename": filename, "in_trace": in_trace}

    def render_markdown_fragment(fragment: str) -> str:
        if not fragment or not fragment.strip():
            return ""
        fragment = re.sub(
            r"<<<AI_LOG_HINT>>>\s*.*?<<</AI_LOG_HINT>>>\s*",
            "",
            fragment,
            count=1,
            flags=re.DOTALL,
        )
        fragment = re.sub(
            r'<<<JSON_INDEX>>>\s*```json\s*\n.*?\n```\s*<<</JSON_INDEX>>>\s*',
            "",
            fragment,
            flags=re.DOTALL,
        )
        return markdown.markdown(
            fragment,
            extensions=[
                'extra',
                'sane_lists',
                'fenced_code',
                'codehilite',
                LprintTraceExtension(
                    filename=filename,
                    code_block_duration_start_index=trace_call_start_index,
                ),
            ],
            extension_configs={
                'codehilite': {
                    'css_class': 'highlight',
                    'linenums': False,
                }
            },
        )

    trace_parser = LprintTracePreprocessor(
        markdown.Markdown(),
        filename=filename,
        code_block_duration_start_index=trace_call_start_index,
    )
    html_parts = []
    normal_lines = []
    trace_lines = []
    trace_open = bool(in_trace)

    def flush_normal() -> None:
        nonlocal normal_lines
        if not normal_lines:
            return
        html_parts.append(render_markdown_fragment("\n".join(normal_lines)))
        normal_lines = []

    def flush_trace() -> None:
        nonlocal trace_lines
        if not trace_lines:
            return
        html_parts.append(trace_parser.parse_trace_block(trace_lines))
        trace_lines = []

    for line in raw_content.split("\n"):
        stripped = line.strip()
        if trace_open:
            if stripped == "<<</lprint-trace>>>":
                flush_trace()
                trace_open = False
            else:
                trace_lines.append(line)
            continue

        if stripped == "<<<lprint-trace>>>":
            flush_normal()
            trace_open = True
            continue
        normal_lines.append(line)

    if trace_open:
        flush_trace()
    else:
        flush_normal()

    return {
        "html": "".join(html_parts),
        "filename": filename,
        "in_trace": trace_open,
    }


def colorize_log_body(body_escaped: str) -> str:
    """为日志内容添加颜色"""
    body = body_escaped
    
    # 错误级别
    if 'ERROR' in body or 'Error' in body or 'error' in body:
        body = f'<span class="log-error">{body}</span>'
    # 警告级别
    elif 'WARNING' in body or 'Warning' in body or 'warning' in body:
        body = f'<span class="log-warning">{body}</span>'
    # 信息级别
    elif 'INFO' in body or 'Info' in body:
        body = f'<span class="log-info">{body}</span>'
    # 调试级别
    elif 'DEBUG' in body or 'Debug' in body:
        body = f'<span class="log-debug">{body}</span>'
    
    return body


def wrap_plain_log_lines(text: str) -> str:
    """包装普通日志行"""
    lines = text.split('\n')
    result = []
    for line in lines:
        if line.strip() and not line.startswith('<'):
            line = f'<div class="lprint-log-entry">{html_module.escape(line)}</div>'
        result.append(line)
    return '\n'.join(result)


def generate_log_id(content: str) -> str:
    """生成日志ID"""
    return hashlib.md5(content.encode('utf-8')).hexdigest()[:12]
