"""
FastAPI后端应用
"""
from fastapi import FastAPI, UploadFile, Request, HTTPException, Query
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import JSONResponse, StreamingResponse, FileResponse
from pydantic import BaseModel
import os
import json
import asyncio
import time
import html as html_module
import shutil

import config
from parser import parse_md_to_html, parse_md_chunk_to_html, generate_log_id, is_log_cache_stale, _build_trace_json_from_sidecar
from ai_service import init_ai_service, get_ai_service

app = FastAPI(title="日志查看器后端 v2.0")

LARGE_LOG_CHUNKED_THRESHOLD_BYTES = 20 * 1024 * 1024
DEFAULT_LOG_CHUNK_BYTES = 512 * 1024
MIN_TRACE_CHUNK_BOUNDARY_BYTES = 64 * 1024
MAX_CHUNK_LINE_TAIL_BYTES = 128 * 1024
DISCARD_OVERSIZED_LINE_BUFFER_BYTES = 1024 * 1024


def _count_trace_calls_before_offset(md_file: str, offset: int) -> int:
    """Count rendered callBy sections before a chunk starts."""
    if offset <= 0:
        return 0
    count = 0
    remaining = offset
    previous_tail = b""
    needle = b"\ncallBy("
    with open(md_file, "rb") as f:
        while remaining > 0:
            data = f.read(min(1024 * 1024, remaining))
            if not data:
                break
            count += (previous_tail + data).count(needle)
            previous_tail = data[-(len(needle) - 1):]
            remaining -= len(data)
    return count

# 初始化AI服务
AI_API_KEY = "sk-e0365992728d4327bce4f78c522146ca"
init_ai_service(AI_API_KEY)

# 确保logs_cache目录存在
os.makedirs(config.LOGS_CACHE_DIR, exist_ok=True)


def _normalize_log_id(log_id: str) -> str:
    normalized = (log_id or "").strip().replace("\\", "/")
    while normalized.startswith("./"):
        normalized = normalized[2:]
    while "//" in normalized:
        normalized = normalized.replace("//", "/")
    if normalized.endswith(".md"):
        normalized = normalized[:-3]
    return normalized


def _resolve_log_id_to_md(log_id: str) -> tuple[str, str]:
    """将请求 log_id 解析为真实 md 文件路径。

    返回:
        (resolved_log_id, md_file_abs_path)
    """
    normalized = _normalize_log_id(log_id)
    direct_file = os.path.join(config.LOGS_DIR, f"{normalized}.md")
    if os.path.exists(direct_file):
        return normalized, direct_file

    # 兼容历史异常路径：LogList/LogList/xxx -> LogList/xxx
    if normalized.startswith("LogList/LogList/"):
        dedup = normalized.replace("LogList/LogList/", "LogList/", 1)
        dedup_file = os.path.join(config.LOGS_DIR, f"{dedup}.md")
        if os.path.exists(dedup_file):
            return dedup, dedup_file

    # 仅短名时启用递归回退：/api/log/test_trace_simple -> 搜索 **/test_trace_simple.md
    if "/" not in normalized:
        target_name = f"{normalized}.md"
        matched: list[tuple[float, str, str]] = []
        for root, _, files in os.walk(config.LOGS_DIR):
            if target_name not in files:
                continue
            full_path = os.path.join(root, target_name)
            rel_path = os.path.relpath(full_path, config.LOGS_DIR).replace("\\", "/")
            resolved = rel_path[:-3]  # strip ".md"
            try:
                mtime = os.path.getmtime(full_path)
            except OSError:
                mtime = 0.0
            matched.append((mtime, resolved, full_path))

        if matched:
            # 同名冲突时选择最近修改的文件，避免随机命中
            matched.sort(key=lambda item: item[0], reverse=True)
            _, resolved_id, resolved_path = matched[0]
            return resolved_id, resolved_path

    raise HTTPException(status_code=404, detail=f"日志文件不存在: {normalized}.md")


def _resolve_log_folder_path(folder_path: str) -> tuple[str, str]:
    """将请求目录解析到 LOGS_DIR 下的真实目录，禁止越界删除。"""
    normalized = (folder_path or "").strip().replace("\\", "/")
    while normalized.startswith("./"):
        normalized = normalized[2:]
    normalized = normalized.strip("/")
    if not normalized:
        raise HTTPException(status_code=400, detail="不允许删除日志根目录")

    logs_root = os.path.abspath(config.LOGS_DIR)
    target_dir = os.path.abspath(os.path.join(logs_root, normalized))
    try:
        common = os.path.commonpath([logs_root, target_dir])
    except ValueError:
        common = ""
    if common != logs_root:
        raise HTTPException(status_code=400, detail="非法目录路径")
    if not os.path.isdir(target_dir):
        raise HTTPException(status_code=404, detail=f"日志目录不存在: {normalized}")
    return normalized, target_dir


def _is_large_log_file(md_file: str) -> bool:
    try:
        return os.path.getsize(md_file) >= LARGE_LOG_CHUNKED_THRESHOLD_BYTES
    except OSError:
        return False


def _large_log_chunked_response(resolved_log_id: str, md_file: str) -> dict:
    file_size = os.path.getsize(md_file)
    filename = f"{resolved_log_id}.md"
    result = {
        "filename": filename,
        "html": (
            "<div class='markdown-body log-chunked-viewer' "
            "data-component='chunked-log-viewer'>"
            "<div class='log-chunked-notice'>"
            "<h2>大日志分块加载模式</h2>"
            "<p>该日志文件过大，已改为按块解析 Markdown 并追加渲染。</p>"
            f"<p>文件大小: {file_size / 1024 / 1024:.2f} MB</p>"
            "</div>"
            "<div class='log-chunked-content' data-role='chunked-content'></div>"
            "<div class='log-chunked-actions'>"
            "<button type='button' data-role='load-next-chunk'>加载下一段</button>"
            "<span data-role='chunked-status'>准备加载...</span>"
            "</div>"
            "</div>"
        ),
        "chunked": True,
        "chunk": {
            "file_size": file_size,
            "chunk_bytes": DEFAULT_LOG_CHUNK_BYTES,
            "threshold_bytes": LARGE_LOG_CHUNKED_THRESHOLD_BYTES,
        },
        "metadata": {
            "is_large_log": True,
            "file_path": md_file,
            "file_size": file_size,
        },
    }

    trace_data = _build_trace_json_from_sidecar(filename)
    if trace_data:
        result["data"] = trace_data
        result["trace_linear_available"] = True

    return result


def _read_chunk_with_bounded_line_tail(
    md_file: str,
    offset: int,
    max_bytes: int,
) -> tuple[bytes, int, bool]:
    """Read a chunk without allowing a single huge line to dominate the response.

    The normal chunk path extends to the next newline so the trace parser sees
    complete records. Some logs contain enormous single-line repr/return values;
    reading those with an unbounded readline defeats progressive rendering. In
    that case, keep a bounded preview, consume the rest of the physical line,
    and append an explicit truncation marker.
    """
    file_size = os.path.getsize(md_file)
    truncated_oversized_line = False
    with open(md_file, "rb") as f:
        f.seek(offset)
        data = f.read(max_bytes)
        if f.tell() >= file_size:
            return data, f.tell(), truncated_oversized_line

        tail = f.readline(MAX_CHUNK_LINE_TAIL_BYTES + 1)
        if not tail:
            return data, f.tell(), truncated_oversized_line

        if tail.endswith(b"\n") or len(tail) <= MAX_CHUNK_LINE_TAIL_BYTES:
            data += tail
            return data, f.tell(), truncated_oversized_line

        truncated_oversized_line = True
        data += tail[:MAX_CHUNK_LINE_TAIL_BYTES]

        # Consume the rest of the current physical line in bounded reads.
        while True:
            skipped = f.readline(DISCARD_OVERSIZED_LINE_BUFFER_BYTES)
            if not skipped or skipped.endswith(b"\n"):
                break

        marker = (
            b"\n\n[... oversized log line truncated for progressive rendering; "
            b"open raw Markdown to inspect the full value ...]\n"
        )
        data += marker
        return data, f.tell(), truncated_oversized_line


def _generate_debug_html(data: dict, log_id: str) -> str:
    """生成独立的debug HTML文件"""
    import datetime
    return f'''<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Debug: {data.get('filename', 'log')}</title>
    <link rel="stylesheet" href="/static/css/base.css">
    <link rel="stylesheet" href="/static/css/markdown.css">
    <link rel="stylesheet" href="/static/css/lprint-trace.css">
    <link rel="stylesheet" href="/static/css/trace.css">
    <link rel="stylesheet" href="/static/css/tree-view.css">
    <link rel="stylesheet" href="/static/css/prism.css">
    <link rel="stylesheet" href="/static/css/dark-theme.css">
    <style>
        body {{
            padding: 20px;
            background: #1e1e1e;
            color: #d4d4d4;
        }}
        .debug-header {{
            background: #252526;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
            border-left: 4px solid #4ec9b0;
        }}
        .debug-header h1 {{
            margin: 0 0 10px 0;
            color: #4ec9b0;
        }}
        .debug-info {{
            color: #858585;
            font-size: 0.9em;
        }}
        
        /* 完整的 lprint-trace 样式 */
        .lprint-forward-trace {{ margin:10px 0; padding:6px 0; border-top:1px solid #2d2d2d; }}
        .lprint-trace-func {{ margin:6px 0 8px 0; }}
        .lprint-trace-code-block {{ font-family: "Consolas", "Monaco", monospace; font-size:11px; line-height:1.35;
          background:#252526; color:#d4d4d4; padding:8px 10px; border-radius:4px; border:1px solid #3c3c3c; margin:4px 0; }}
        .lprint-trace-code-pre-wrap {{ display:flex; align-items:stretch; margin:0 0 4px 0; background:transparent; }}
        .lprint-trace-code-pre-wrap .lprint-trace-code-line-nums {{ flex-shrink:0; width:3.2em; min-width:3.2em; margin:0; padding:0 4px 0 0;
          font-family:"Consolas","Monaco",monospace; font-size:11px; line-height:1.35; color:#6a6a6a; background:transparent;
          border:none; white-space:pre; overflow:hidden; user-select:none; text-align:right; }}
        .lprint-trace-code-pre-wrap .lprint-trace-code-pre-inner {{ flex:1; min-width:0; overflow:auto; }}
        .lprint-trace-code-pre-wrap .lprint-trace-pre {{ margin:0; padding:0; flex:1; min-width:0; background:transparent; border:none; white-space:pre; }}
        .lprint-trace-call {{ color:#9cdcfe; margin:4px 0 2px 0; font-size:11px; font-family:monospace; 
          white-space: pre-wrap !important; word-wrap: break-word !important; overflow-wrap: break-word !important; word-break: break-all !important; }}
        .lprint-trace-func-code {{ color: #4ec9b0; font-weight: bold; margin: 8px 0 4px 0; font-size: 12px; font-family: monospace;
          white-space: pre-wrap !important; word-wrap: break-word !important; overflow-wrap: break-word !important; word-break: break-all !important; }}
        .lprint-trace-divider {{ color: #888; margin: 10px 0; }}
        .lprint-trace-tree {{ display: none; }}
        #trace-tree-view-container {{ margin: 15px 0; }}
        
        /* USAGE_GUIDE 代码块样式 */
        [data-component="usage-guide"] pre, [data-component="usage-guide"] code, [data-component="usage-guide"] pre code {{
            font-size: 15px !important; line-height: 1.6 !important; font-family: "Consolas", "Monaco", monospace !important; }}
        div[data-component="usage-guide"] {{ font-size: 15px !important; }}
        div[data-component="usage-guide"] * {{ font-size: inherit !important; }}
    </style>
</head>
<body>
    <div class="debug-header">
        <h1>🐛 Debug View</h1>
        <div class="debug-info">
            <p><strong>文件名:</strong> {data.get('filename', 'unknown')}</p>
            <p><strong>Log ID:</strong> {log_id}</p>
            <p><strong>生成时间:</strong> {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
        </div>
    </div>
    <div class="log-content">
        {data.get('html', '<p>无内容</p>')}
    </div>
    <!-- 引入 marked.js CDN 用于渲染 Markdown -->
    <script src="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js"></script>
    
    <script src="/static/js/prism.js"></script>
    <script src="/static/js/trace_tree_view.js"></script>
    <script src="/static/js/function_call_highlight.js"></script>
    <script src="/static/js/unused_highlight.js"></script>
    <script src="/static/js/markdown_renderer.js"></script>
    <script>
        // 页面加载后初始化所有功能
        window.addEventListener('DOMContentLoaded', () => {{
            console.log('[Debug HTML] 页面加载完成，初始化功能...');
            
            // 高亮代码
            if (window.Prism) {{
                Prism.highlightAll();
            }}
            
            // 渲染树视图
            if (typeof buildTraceTreeView === 'function') {{
                console.log('[Debug HTML] 調用 buildTraceTreeView');
                buildTraceTreeView();
            }}
            
            console.log('[Debug HTML] 初始化完成');
            
            // 延迟绑定滚动监听器和恢复滚动位置，确保 .tab-pane.active 已生成
            setTimeout(() => {{
                // 保存滚动位置 - 监听可滚动容器
                let scrollTimeout;
                const saveScrollPosition = (event) => {{
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {{
                        const target = event.target;
                        const scrollPos = target.scrollTop || 0;
                        if (scrollPos > 0) {{
                            localStorage.setItem('scrollPosition_{log_id}', scrollPos);
                            console.log('[Debug HTML] 保存滚动位置:', scrollPos, '容器:', target.className);
                        }}
                    }}, 100);
                }};
                
                // 查找可滚动容器
                const scrollContainer = document.querySelector('.tab-pane.active') || 
                                      document.querySelector('.log-content') ||
                                      document.body;
                
                if (scrollContainer) {{
                    // 绑定滚动监听器
                    scrollContainer.addEventListener('scroll', saveScrollPosition);
                    console.log('[Debug HTML] 已绑定滚动监听器到:', scrollContainer.className);
                    
                    // 恢复滚动位置
                    const savedScrollPos = localStorage.getItem('scrollPosition_{log_id}');
                    if (savedScrollPos) {{
                        const scrollPos = parseInt(savedScrollPos);
                        scrollContainer.scrollTop = scrollPos;
                        console.log('[Debug HTML] 恢复滚动位置:', scrollPos, '容器:', scrollContainer.className);
                    }}
                }} else {{
                    console.log('[Debug HTML] 未找到滚动容器');
                }}
                
                // 备用：也监听 document 的滚动捕获
                document.addEventListener('scroll', saveScrollPosition, true);
            }}, 200);
        }});
    </script>
</body>
</html>'''

# 挂载静态文件
app.mount("/static", StaticFiles(directory=config.STATIC_DIR), name="static")

# 配置模板
templates = Jinja2Templates(directory=config.TEMPLATES_DIR)


@app.get("/")
async def index(request: Request):
    """主页面（完整界面）"""
    # 确保目录存在
    os.makedirs(config.LOGS_DIR, exist_ok=True)
    os.makedirs(config.LOGS_CACHE_DIR, exist_ok=True)
    
    # 检查是否有演示文件，自动加载
    demo_filename = "test_trace_simple.md"
    demo_file = os.path.join(config.LOGS_DIR, demo_filename)
    demo_log_id = None
    
    if os.path.exists(demo_file):
        # 读取演示文件并解析
        with open(demo_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 使用文件名（不含扩展名）作为log_id
        demo_log_id = os.path.splitext(demo_filename)[0]  # "test_trace_simple"
        result = parse_md_to_html(content, demo_filename)
        
        # 保存JSON缓存（使用log_id命名）
        cache_file = os.path.join(config.LOGS_CACHE_DIR, f"{demo_log_id}.json")
        with open(cache_file, 'w', encoding='utf-8') as f:
            json.dump(result, f, ensure_ascii=False)
        
        # 生成独立的HTML文件用于调试（使用log_id命名）
        html_file = os.path.join(config.LOGS_CACHE_DIR, f"{demo_log_id}.html")
        html_content = _generate_debug_html(result, demo_log_id)
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(html_content)

    return templates.TemplateResponse("app.html.j2", {
        "request": request,
        "demo_log_id": demo_log_id
    })


@app.get("/simple")
async def simple_view(request: Request):
    """简单视图（仅标签页）"""
    return templates.TemplateResponse("index.html.j2", {
        "request": request
    })


@app.post("/upload")
async def upload_log(file: UploadFile):
    """上传日志文件"""
    # 验证文件类型
    file_ext = os.path.splitext(file.filename)[1].lower()
    if file_ext not in config.ALLOWED_EXTENSIONS:
        raise HTTPException(status_code=400, detail=f"不支持的文件类型: {file_ext}")


@app.delete("/api/log/{log_id:path}")
async def delete_log(log_id: str):
    """删除日志文件及其缓存"""
    from urllib.parse import unquote
    log_id = _normalize_log_id(unquote(log_id))
    resolved_log_id, md_file = _resolve_log_id_to_md(log_id)
    if not md_file or not os.path.exists(md_file):
        raise HTTPException(status_code=404, detail="日志文件不存在")
    try:
        os.remove(md_file)
        cache_file = os.path.join(config.LOGS_CACHE_DIR, f"{resolved_log_id}.json")
        if os.path.exists(cache_file):
            os.remove(cache_file)
        print(f"[API] 已删除日志: {md_file}")
        return {"ok": True, "deleted": resolved_log_id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"删除失败: {e}")


@app.delete("/api/log-folder/{folder_path:path}")
async def delete_log_folder(folder_path: str):
    """删除日志目录及目录下日志缓存"""
    from urllib.parse import unquote
    folder_path = unquote(folder_path)
    resolved_folder, target_dir = _resolve_log_folder_path(folder_path)
    deleted_logs: list[str] = []

    try:
        for root, _, files in os.walk(target_dir):
            for filename in files:
                if not filename.endswith(".md"):
                    continue
                md_file = os.path.join(root, filename)
                rel_path = os.path.relpath(md_file, config.LOGS_DIR).replace("\\", "/")
                log_id = rel_path[:-3]
                deleted_logs.append(log_id)
                for suffix in (".json", ".html"):
                    cache_file = os.path.join(config.LOGS_CACHE_DIR, f"{log_id}{suffix}")
                    if os.path.exists(cache_file):
                        os.remove(cache_file)

        shutil.rmtree(target_dir)
        print(f"[API] 已删除日志目录: {target_dir}")
        return {"ok": True, "deleted_folder": resolved_folder, "deleted_logs": deleted_logs}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"删除目录失败: {e}")


@app.get("/api/log/{log_id:path}/raw")
async def get_log_raw(log_id: str):
    """获取原始 Markdown 内容"""
    from urllib.parse import unquote
    
    log_id = _normalize_log_id(unquote(log_id))
    resolved_log_id, md_file = _resolve_log_id_to_md(log_id)
    
    # 优先从缓存获取文件名
    cache_file = os.path.join(config.LOGS_CACHE_DIR, f"{resolved_log_id}.json")
    original_filename = f"{resolved_log_id}.md"
    if os.path.exists(cache_file):
        try:
            with open(cache_file, 'r', encoding='utf-8') as f:
                cached_data = json.load(f)
                original_filename = cached_data.get('filename', original_filename)
        except (json.JSONDecodeError, IOError) as e:
            print(f"[DEBUG] 缓存文件损坏或读取失败: {e}")
            try:
                os.remove(cache_file)
            except OSError:
                pass
    
    # 优先使用解析到的真实文件路径；缓存文件名仅用于展示
    
    try:
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 检查内容是否为空
        if not content or not content.strip():
            return {
                "content": "# 📝 日志文件为空\n\n该日志文件当前没有任何内容。\n\n**可能的原因：**\n- 追踪尚未开始或未生成任何数据\n- 追踪过程中没有记录任何事件\n- 日志文件已被清空\n\n**建议：** 检查追踪配置或重新运行追踪。",
                "filename": original_filename,
                "is_empty": True
            }
        
        return {"content": content, "filename": original_filename}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"读取文件失败: {str(e)}")


@app.post("/api/log/{log_id:path}/refresh")
async def refresh_log(log_id: str):
    """刷新日志：重新解析源文件并更新缓存"""
    log_id = _normalize_log_id(log_id)
    resolved_log_id, md_file = _resolve_log_id_to_md(log_id)
    cache_file = os.path.join(config.LOGS_CACHE_DIR, f"{resolved_log_id}.json")
    original_filename = f"{resolved_log_id}.md"

    if _is_large_log_file(md_file):
        # 大日志刷新不再同步重建完整 HTML 缓存；清掉旧缓存后让前端
        # 重新进入分块加载模式，首屏可立即显示并逐段追加渲染。
        for stale_path in (
            cache_file,
            os.path.join(config.LOGS_CACHE_DIR, f"{resolved_log_id}.html"),
        ):
            try:
                if os.path.exists(stale_path):
                    os.remove(stale_path)
            except OSError as e:
                print(f"[DEBUG] 删除大日志旧缓存失败: {stale_path}: {e}")
        return {
            "status": "ok",
            "message": "大日志已切换为分块刷新",
            "chunked": True,
        }

    if os.path.exists(cache_file):
        try:
            with open(cache_file, 'r', encoding='utf-8') as f:
                cached_data = json.load(f)
                original_filename = cached_data.get('filename', original_filename)
        except (json.JSONDecodeError, IOError) as e:
            print(f"[DEBUG] 缓存文件损坏或读取失败: {e}")
            try:
                os.remove(cache_file)
            except OSError:
                pass
    
    try:
        # 读取源文件
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 检查内容是否为空
        if not content or not content.strip():
            print(f"[DEBUG] 刷新时发现日志文件为空: {md_file}")
            # 返回空日志提示
            result = {
                "filename": original_filename,
                "html": "<div class='empty-log-notice'><h2>📝 日志文件为空</h2><p>该日志文件当前没有任何内容。</p><p>可能的原因：</p><ul><li>追踪尚未开始或未生成任何数据</li><li>追踪过程中没有记录任何事件</li><li>日志文件已被清空</li></ul><p>建议：检查追踪配置或重新运行追踪。</p></div>",
                "metadata": {
                    "is_empty": True,
                    "file_path": md_file
                }
            }
        else:
            # 重新解析
            result = parse_md_to_html(content, original_filename)
        
        # 更新JSON缓存（使用log_id命名，先创建目录结构）
        cache_dir = os.path.dirname(cache_file)
        if cache_dir:
            os.makedirs(cache_dir, exist_ok=True)
        with open(cache_file, 'w', encoding='utf-8') as f:
            json.dump(result, f, ensure_ascii=False)
        
        # 更新HTML文件（使用log_id命名，与JSON保持一致，先创建目录结构）
        html_file = os.path.join(config.LOGS_CACHE_DIR, f"{resolved_log_id}.html")
        html_dir = os.path.dirname(html_file)
        if html_dir:
            os.makedirs(html_dir, exist_ok=True)
        html_content = _generate_debug_html(result, log_id)
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        return {"status": "ok", "message": "日志已刷新"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"刷新失败: {str(e)}")


@app.get("/api/log/{log_id:path}/trace_linear")
async def get_log_trace_linear(log_id: str):
    """返回与 ``{log_id}.md`` 同目录的 ``{stem}.trace_linear.jsonl``（NDJSON），供前端解析。
    若 .md 文件本身是 LPRINT_TRACE_STREAM 格式，则直接返回该文件。
    """
    from urllib.parse import unquote

    log_id = _normalize_log_id(unquote(log_id))
    _, md_file = _resolve_log_id_to_md(log_id)

    # 检测 .md 文件本身是否为 NDJSON 流
    try:
        with open(md_file, 'r', encoding='utf-8', errors='replace') as f:
            head = f.read(64)
        if head.lstrip().startswith('<<<LPRINT_TRACE_STREAM>>>'):
            return FileResponse(
                md_file,
                media_type="application/x-ndjson",
                filename=os.path.basename(md_file),
            )
    except Exception:
        pass

    base, _ = os.path.splitext(md_file)
    sidecar = base + ".trace_linear.jsonl"
    if not os.path.exists(sidecar):
        raise HTTPException(status_code=404, detail="无 trace_linear.jsonl 侧车文件")
    return FileResponse(
        sidecar,
        media_type="application/x-ndjson",
        filename=os.path.basename(sidecar),
    )


@app.get("/api/log/{log_id:path}/tree_overview")
async def get_log_tree_overview(log_id: str):
    """从 NDJSON 流文件生成调用树概览 JSON，供前端直接渲染，无需加载全量事件。"""
    from urllib.parse import unquote
    import json as _json

    log_id = _normalize_log_id(unquote(log_id))
    _, md_file = _resolve_log_id_to_md(log_id)

    # 确认是 NDJSON 流格式
    try:
        with open(md_file, 'r', encoding='utf-8', errors='replace') as f:
            head = f.read(64)
        if not head.lstrip().startswith('<<<LPRINT_TRACE_STREAM>>>'):
            raise HTTPException(status_code=400, detail="非 LPRINT_TRACE_STREAM 格式")
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

    # 解析 call/return 事件，构建调用树
    call_stack = []   # [(call_event, path_str)]
    path_counters = {}  # depth -> child_count
    call_id_counter = 0
    nodes = []        # 最终节点列表

    try:
        with open(md_file, 'r', encoding='utf-8', errors='replace') as f:
            for raw_line in f:
                s = raw_line.strip()
                if not s or s.startswith('<<<'):
                    continue
                try:
                    ev = _json.loads(s)
                except Exception:
                    continue

                ev_type = ev.get('type')
                depth = ev.get('depth', 0)

                if ev_type in ('call', 'loop_limit'):
                    call_id_counter += 1
                    ev['_call_id'] = call_id_counter

                    # 计算路径
                    parent_path = call_stack[-1][1] if call_stack else ''
                    parent_depth = depth - 1
                    path_counters[depth] = path_counters.get(depth, 0) + 1
                    # 重置更深层的计数器
                    for d in list(path_counters.keys()):
                        if d > depth:
                            del path_counters[d]
                    if parent_path:
                        path_str = f"{parent_path}-{path_counters[depth]}"
                    else:
                        path_str = str(path_counters[depth])

                    call_stack.append((ev, path_str))

                elif ev_type == 'return':
                    if not call_stack:
                        continue
                    call_ev, path_str = call_stack.pop()
                    call_time = call_ev.get('time', 0)
                    ret_time = ev.get('time', call_time)
                    duration_ms = (ret_time - call_time) * 1000

                    func = call_ev.get('function', '?')
                    filename = call_ev.get('filename', '')
                    lineno = call_ev.get('lineno', 0)
                    call_depth = call_ev.get('depth', 0)
                    cid = call_ev.get('_call_id', 0)
                    ret_val = ev.get('return_value', '')
                    if ret_val is None:
                        ret_val = 'None'
                    ret_val_str = str(ret_val)
                    if len(ret_val_str) > 60:
                        ret_val_str = ret_val_str[:57] + '...'

                    # 耗时格式
                    if duration_ms >= 1000:
                        time_str = f"{duration_ms/1000:.3f}s"
                    else:
                        time_str = f"{duration_ms:.2f}ms"

                    # 性能标记
                    marker = ''
                    if duration_ms >= 500:
                        marker = ' 🔥'
                    elif duration_ms >= 100:
                        marker = ' ⚡'

                    # 文件简短路径
                    short_file = filename.replace('\\', '/') if filename else ''

                    nodes.append({
                        'id': cid,
                        'depth': call_depth + 1,
                        'path': path_str,
                        'func': func,
                        'filename': short_file,
                        'lineno': lineno,
                        'duration_ms': duration_ms,
                        'time_str': time_str,
                        'marker': marker,
                        'return_value': ret_val_str,
                    })

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"解析失败: {e}")

    # 生成 TREE_OVERVIEW 文本
    # 先按 id 排序（保持原始顺序）
    nodes.sort(key=lambda n: n['id'])

    # 构建缩进树文本
    tree_lines = []
    # 用栈跟踪每层是否还有后续兄弟（用于 ├─ vs └─）
    # 简化：按深度用 └─（不区分是否最后一个子节点，前端解析器不依赖这个）
    for node in nodes:
        indent = '    ' * (node['depth'] - 1)
        connector = '└─'
        line = (
            f"{indent}{connector} {node['func']} "
            f"[深度{node['depth']} 路径{node['path']} #{node['id']}] "
            f"[{node['time_str']}]{node['marker']} "
            f"→ '{node['return_value']}' "
            f"({node['filename']}:{node['lineno']})"
        )
        tree_lines.append(line)

    # highlights
    slow_calls = [n['id'] for n in nodes if n['duration_ms'] >= 500]
    deep_calls = [n['id'] for n in nodes if n['depth'] >= 8]
    max_depth = max((n['depth'] for n in nodes), default=0)

    return {
        'tree_text': '\n'.join(tree_lines),
        'total_nodes': len(nodes),
        'max_depth': max_depth,
        'highlights': {
            'slow_calls': slow_calls[:200],
            'deep_calls': deep_calls[:200],
            'error_calls': [],
        },
        'metadata': {
            'total_calls': len(nodes),
            'max_depth': max_depth,
        }
    }


@app.get("/api/log/{log_id:path}/chunk")
async def get_log_chunk(
    log_id: str,
    offset: int = Query(0, ge=0),
    max_bytes: int = Query(DEFAULT_LOG_CHUNK_BYTES, ge=4096, le=2 * 1024 * 1024),
    in_trace: bool = Query(False),
):
    """按 byte offset 返回大日志的一段 Markdown HTML，避免整文件读入和解析。"""
    from urllib.parse import unquote

    log_id = _normalize_log_id(unquote(log_id))
    resolved_log_id, md_file = _resolve_log_id_to_md(log_id)
    file_size = os.path.getsize(md_file)

    if offset >= file_size:
        return {
            "log_id": resolved_log_id,
            "offset": offset,
            "next_offset": file_size,
            "file_size": file_size,
            "content": "",
            "html": "",
            "in_trace": in_trace,
            "has_more": False,
        }

    data, next_offset, truncated_oversized_line = _read_chunk_with_bounded_line_tail(
        md_file,
        offset,
        max_bytes,
    )

    if (
        in_trace
        and not truncated_oversized_line
        and next_offset < file_size
        and len(data) > MIN_TRACE_CHUNK_BOUNDARY_BYTES
    ):
        # Keep each rendered fragment close to the full-parser structure by
        # ending trace chunks between function call sections whenever possible.
        boundary = data.rfind(b"\ncallBy(")
        if boundary >= MIN_TRACE_CHUNK_BOUNDARY_BYTES:
            data = data[: boundary + 1]
            next_offset = offset + len(data)

    text = data.decode("utf-8", errors="replace")
    parsed = parse_md_chunk_to_html(
        text,
        f"{resolved_log_id}.md",
        in_trace=in_trace,
        trace_call_start_index=_count_trace_calls_before_offset(md_file, offset),
    )
    return {
        "log_id": resolved_log_id,
        "offset": offset,
        "next_offset": next_offset,
        "file_size": file_size,
        "content": text,
        "html": parsed.get("html", ""),
        "in_trace": bool(parsed.get("in_trace")),
        "has_more": next_offset < file_size,
        "truncated_oversized_line": truncated_oversized_line,
    }


@app.get("/api/log/{log_id:path}")
async def get_log(log_id: str):
    """获取日志内容 - 优先从缓存读取，缓存不存在则从源文件解析"""
    from urllib.parse import unquote
    
    # URL解码（FastAPI已经解码一次，但为了安全再解码一次）
    log_id = _normalize_log_id(unquote(log_id))
    resolved_log_id, md_file = _resolve_log_id_to_md(log_id)

    if _is_large_log_file(md_file):
        print(f"[DEBUG] 大日志启用分块加载: {md_file}")
        return _large_log_chunked_response(resolved_log_id, md_file)
    
    print(f"[DEBUG] 请求的log_id: {log_id}")
    print(f"[DEBUG] 解析后的log_id: {resolved_log_id}")
    
    cache_file = os.path.join(config.LOGS_CACHE_DIR, f"{resolved_log_id}.json")
    print(f"[DEBUG] 缓存文件路径: {cache_file}")
    
    # 如果缓存存在且未过期，直接返回
    if os.path.exists(cache_file) and not is_log_cache_stale(cache_file, f"{resolved_log_id}.md"):
        print(f"[DEBUG] 从缓存读取")
        try:
            with open(cache_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except (json.JSONDecodeError, IOError) as e:
            print(f"[DEBUG] 缓存文件损坏或读取失败: {e}")
            print(f"[DEBUG] 删除损坏的缓存文件并重新生成")
            try:
                os.remove(cache_file)
            except OSError:
                pass  # 忽略删除失败的情况
    elif os.path.exists(cache_file):
        print(f"[DEBUG] 缓存相对 .md / trace_linear.jsonl 已过期，重新解析")
    
    # 缓存不存在，从logs目录读取源文件
    print(f"[DEBUG] 源文件路径: {md_file}")
    print(f"[DEBUG] 文件是否存在: {os.path.exists(md_file)}")
    
    try:
        # 读取并解析源文件
        # 先读文件头，检测是否为原始 NDJSON 流（不应作为 .md 解析）
        with open(md_file, 'r', encoding='utf-8', errors='replace') as f:
            head = f.read(64)
        if head.lstrip().startswith('<<<LPRINT_TRACE_STREAM>>>'):
            print(f"[DEBUG] 文件是原始 NDJSON 流，作为 trace_linear 直接渲染: {md_file}")
            # 统计事件数
            import json as _json
            n_events = 0
            n_calls = 0
            try:
                with open(md_file, 'r', encoding='utf-8', errors='replace') as _f:
                    for _line in _f:
                        _s = _line.strip()
                        if not _s or _s.startswith('<<<'):
                            continue
                        try:
                            _ev = _json.loads(_s)
                            n_events += 1
                            if _ev.get('type') in ('call', 'loop_limit'):
                                n_calls += 1
                        except Exception:
                            pass
            except Exception:
                pass
            result = {
                "filename": f"{resolved_log_id}.md",
                "html": "<div class='lprint-forward-trace'><p style='color:#888;padding:16px'>正在加载调用树...</p></div>",
                "trace_linear_available": True,
                "data": {
                    "format": "trace_linear",
                    "source": "trace_linear.jsonl",
                    "metadata": {
                        "total_events": n_events,
                        "total_calls": n_calls,
                    }
                }
            }
        else:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # 检查文件内容是否为空
            if not content or not content.strip():
                print(f"[DEBUG] 日志文件为空: {md_file}")
                result = {
                    "filename": f"{log_id}.md",
                    "html": "<div class='empty-log-notice'><h2>📝 日志文件为空</h2><p>该日志文件当前没有任何内容。</p><p>可能的原因：</p><ul><li>追踪尚未开始或未生成任何数据</li><li>追踪过程中没有记录任何事件</li><li>日志文件已被清空</li></ul><p>建议：检查追踪配置或重新运行追踪。</p></div>",
                    "metadata": {
                        "is_empty": True,
                        "file_path": md_file
                    }
                }
            else:
                result = parse_md_to_html(content, f"{resolved_log_id}.md")
        
        # 保存到缓存（先创建目录结构）
        cache_dir = os.path.dirname(cache_file)
        if cache_dir:
            os.makedirs(cache_dir, exist_ok=True)
        try:
            with open(cache_file, 'w', encoding='utf-8') as f:
                json.dump(result, f, ensure_ascii=False)
        except (IOError, OSError) as e:
            print(f"[DEBUG] 缓存写入失败: {e}")
            # 缓存写入失败不影响返回结果
        
        # 生成HTML文件用于调试（先创建目录结构）
        html_file = os.path.join(config.LOGS_CACHE_DIR, f"{resolved_log_id}.html")
        html_dir = os.path.dirname(html_file)
        if html_dir:
            os.makedirs(html_dir, exist_ok=True)
        html_content = _generate_debug_html(result, resolved_log_id)
        with open(html_file, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"解析日志失败: {str(e)}")


@app.get("/api/logs")
async def list_logs():
    """返回最近的日志列表 - 递归扫描logs目录，返回树形结构"""
    
    def scan_directory(dir_path, relative_path=""):
        """递归扫描目录，返回文件和文件夹的树形结构"""
        items = []
        
        try:
            entries = os.listdir(dir_path)
        except (PermissionError, OSError):
            return items
        
        # 分别收集文件夹和文件
        folders = []
        files = []
        
        for entry in entries:
            full_path = os.path.join(dir_path, entry)
            rel_path = os.path.join(relative_path, entry) if relative_path else entry
            
            if os.path.isdir(full_path):
                # 递归扫描子文件夹
                children = scan_directory(full_path, rel_path)
                folder_mtime = os.path.getmtime(full_path)
                
                folders.append({
                    'type': 'folder',
                    'name': entry,
                    'path': rel_path,
                    'time': folder_mtime,
                    'children': children
                })
            elif entry.endswith('.md'):
                # .md文件
                file_size = os.path.getsize(full_path)
                file_mtime = os.path.getmtime(full_path)
                log_id = rel_path[:-3]  # 移除.md后缀作为log_id
                
                files.append({
                    'type': 'file',
                    'log_id': log_id,
                    'filename': entry,
                    'path': rel_path,
                    'time': file_mtime,
                    'file_size': file_size
                })
        
        # 文件夹按名称排序，文件按时间倒序
        folders.sort(key=lambda x: x['name'])
        files.sort(key=lambda x: x['time'], reverse=True)
        
        # 文件夹在前，文件在后
        return folders + files
    
    if os.path.exists(config.LOGS_DIR):
        return scan_directory(config.LOGS_DIR)
    
    return []


@app.get("/debug/{log_id}")
async def debug_log(log_id: str):
    """生成debug用的独立HTML文件"""
    from fastapi.responses import HTMLResponse
    
    cache_file = os.path.join(config.LOGS_CACHE_DIR, f"{log_id}.json")
    
    if not os.path.exists(cache_file):
        raise HTTPException(status_code=404, detail="日志不存在")
    
    with open(cache_file, 'r', encoding='utf-8') as f:
        try:
            data = json.load(f)
        except (json.JSONDecodeError, IOError) as e:
            print(f"[DEBUG] 调试页面缓存文件损坏: {e}")
            raise HTTPException(status_code=500, detail="缓存文件损坏，请刷新页面重试")
    
    # 生成完整的HTML页面
    debug_html = f'''<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Debug: {data.get('filename', 'log')}</title>
    <link rel="stylesheet" href="/static/css/base.css">
    <link rel="stylesheet" href="/static/css/markdown.css">
    <link rel="stylesheet" href="/static/css/lprint-trace.css">
    <link rel="stylesheet" href="/static/css/trace.css">
    <link rel="stylesheet" href="/static/css/tree-view.css">
    <link rel="stylesheet" href="/static/css/dark-theme.css">
    <style>
        body {{
            padding: 20px;
            background: #1e1e1e;
            color: #d4d4d4;
        }}
        .debug-header {{
            background: #252526;
            padding: 15px;
            border-radius: 4px;
            margin-bottom: 20px;
            border-left: 4px solid #4ec9b0;
        }}
        .debug-header h1 {{
            margin: 0 0 10px 0;
            color: #4ec9b0;
        }}
        .debug-info {{
            color: #858585;
            font-size: 0.9em;
        }}
        
        /* 完整的 lprint-trace 样式 */
        .lprint-forward-trace {{ margin:10px 0; padding:6px 0; border-top:1px solid #2d2d2d; }}
        .lprint-trace-func {{ margin:6px 0 8px 0; }}
        .lprint-trace-code-block {{ font-family: "Consolas", "Monaco", monospace; font-size:11px; line-height:1.35;
          background:#252526; color:#d4d4d4; padding:8px 10px; border-radius:4px; border:1px solid #3c3c3c; margin:4px 0; }}
        .lprint-trace-code-pre-wrap {{ display:flex; align-items:stretch; margin:0 0 4px 0; background:transparent; }}
        .lprint-trace-code-pre-wrap .lprint-trace-code-line-nums {{ flex-shrink:0; width:3.2em; min-width:3.2em; margin:0; padding:0 4px 0 0;
          font-family:"Consolas","Monaco",monospace; font-size:11px; line-height:1.35; color:#6a6a6a; background:transparent;
          border:none; white-space:pre; overflow:hidden; user-select:none; text-align:right; }}
        .lprint-trace-code-pre-wrap .lprint-trace-code-pre-inner {{ flex:1; min-width:0; overflow:auto; }}
        .lprint-trace-code-pre-wrap .lprint-trace-pre {{ margin:0; padding:0; flex:1; min-width:0; background:transparent; border:none; white-space:pre; }}
        .lprint-trace-call {{ color:#9cdcfe; margin:4px 0 2px 0; font-size:11px; font-family:monospace; 
          white-space: pre-wrap !important; word-wrap: break-word !important; overflow-wrap: break-word !important; word-break: break-all !important; }}
        .lprint-trace-func-code {{ color: #4ec9b0; font-weight: bold; margin: 8px 0 4px 0; font-size: 12px; font-family: monospace;
          white-space: pre-wrap !important; word-wrap: break-word !important; overflow-wrap: break-word !important; word-break: break-all !important; }}
        .lprint-trace-divider {{ color: #888; margin: 10px 0; }}
        .lprint-trace-tree {{ display: none; }}
        #trace-tree-view-container {{ margin: 15px 0; }}
        
        /* USAGE_GUIDE 代码块样式 - 根据最佳实践优化 */
        [data-component="usage-guide"] pre {{
            font-size: 16px !important;
            line-height: 1.7 !important;
            font-family: "Consolas", "Monaco", "Courier New", monospace !important;
            padding: 16px !important;
            background: #1e1e1e !important;
            border: 1px solid #3c3c3c !important;
            border-radius: 6px !important;
            overflow-x: auto !important;
        }}
        [data-component="usage-guide"] code {{
            font-size: 16px !important;
            font-family: "Consolas", "Monaco", "Courier New", monospace !important;
            background: #2d2d2d !important;
            padding: 2px 6px !important;
            border-radius: 3px !important;
        }}
        [data-component="usage-guide"] pre code {{
            font-size: 16px !important;
            background: transparent !important;
            padding: 0 !important;
        }}
        div[data-component="usage-guide"] {{ font-size: 16px !important; }}
        div[data-component="usage-guide"] p {{ line-height: 1.8 !important; margin: 12px 0 !important; }}
    </style>
</head>
<body>
    <div class="debug-header">
        <h1>🐛 Debug View</h1>
        <div class="debug-info">
            <p><strong>文件名:</strong> {data.get('filename', 'unknown')}</p>
            <p><strong>Log ID:</strong> {log_id}</p>
            <p><strong>生成时间:</strong> {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
        </div>
    </div>
    <div class="log-content">
        {data.get('html', '<p>无内容</p>')}
    </div>
    <script src="/static/js/trace_tree_view.js"></script>
    <script src="/static/js/function_call_highlight.js"></script>
    <script src="/static/js/unused_highlight.js"></script>
    <script>
        // 页面加载后恢复滚动位置
        window.addEventListener('DOMContentLoaded', () => {{
            const savedScrollPos = localStorage.getItem('scrollPosition_{log_id}');
            if (savedScrollPos) {{
                window.scrollTo(0, parseInt(savedScrollPos));
            }}
        }});
        
        // 保存滚动位置
        let scrollTimeout;
        window.addEventListener('scroll', () => {{
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {{
                localStorage.setItem('scrollPosition_{log_id}', window.scrollY);
            }}, 100);
        }});
    </script>
</body>
</html>'''
    
    return HTMLResponse(content=debug_html)


@app.get("/health")
async def health():
    """健康检查"""
    return {"status": "ok"}


@app.get("/debug/{log_id}")
async def debug_view(log_id: str):
    """查看debug HTML文件"""
    html_file = os.path.join(config.LOGS_CACHE_DIR, f"{log_id}.html")
    
    if not os.path.exists(html_file):
        raise HTTPException(status_code=404, detail="Debug HTML不存在")
    
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    from fastapi.responses import HTMLResponse
    return HTMLResponse(content=content)


@app.get("/ai-assistant-window")
async def ai_assistant_window(request: Request):
    """AI助手独立窗口"""
    templates = Jinja2Templates(directory="templates")
    return templates.TemplateResponse("ai_window.html", {"request": request})


# ============ AI API 端点 ============

class AIAnalyzeRequest(BaseModel):
    """AI分析请求"""
    content: str  # 要分析的内容（代码或调用链）
    question: str = None  # 可选的具体问题
    type: str  # 类型：code / call_tree / trace_log

@app.post("/api/ai/analyze")
async def ai_analyze(request: AIAnalyzeRequest):
    """AI分析接口"""
    ai_service = get_ai_service()
    if not ai_service:
        raise HTTPException(status_code=503, detail="AI服务未初始化")
    
    try:
        if request.type == "code":
            result = ai_service.analyze_code(request.content, request.question)
        elif request.type == "call_tree":
            result = ai_service.analyze_call_tree(request.content, request.question)
        elif request.type == "trace_log":
            result = ai_service.explain_trace_log(request.content, request.question)
        else:
            raise HTTPException(status_code=400, detail="不支持的分析类型")
        
        if result is None:
            raise HTTPException(status_code=500, detail="AI分析失败")
        
        # 如果返回的是字典（包含content和usage），则分别返回
        if isinstance(result, dict):
            return {
                "success": True, 
                "result": result.get("content", ""),
                "usage": result.get("usage", {})
            }
        else:
            # 兼容旧版本返回字符串的情况
            return {"success": True, "result": result}
        
    except Exception as e:
        return {"success": False, "error": str(e)}


@app.post("/api/ai/analyze-stream")
async def ai_analyze_stream(request: AIAnalyzeRequest):
    """AI分析流式接口"""
    ai_service = get_ai_service()
    if not ai_service:
        raise HTTPException(status_code=503, detail="AI服务未初始化")
    
    def generate():
        try:
            # 构建消息
            if request.type == "code":
                if request.question:
                    prompt = f"请分析以下代码并回答问题：\n\n问题：{request.question}\n\n代码：\n```python\n{request.content}\n```"
                else:
                    prompt = f"请分析以下代码的功能、逻辑和潜在问题：\n```python\n{request.content}\n```"
                system_msg = "你是一位专业的Python代码分析专家，擅长解释代码逻辑、发现潜在问题并提供优化建议。"
            elif request.type == "call_tree":
                if request.question:
                    prompt = f"请分析以下函数调用链并回答问题：\n\n问题：{request.question}\n\n调用链：\n```\n{request.content}\n```"
                else:
                    prompt = f"请分析以下函数调用链，找出性能瓶颈、异常调用模式和优化建议：\n```\n{request.content}\n```"
                system_msg = "你是一位专业的性能分析专家，擅长分析函数调用链、识别性能瓶颈、发现异常调用模式并提供优化建议。"
            elif request.type == "trace_log":
                if request.question:
                    prompt = f"请重点关注'{request.question}'，解释以下追踪日志的执行流程：\n\n{request.content}"
                else:
                    prompt = f"请解释以下追踪日志的执行流程和关键信息：\n\n{request.content}"
                system_msg = "你是一位专业的调试专家，擅长解读程序执行日志、追踪代码执行流程。"
            else:
                yield f"data: {json.dumps({'type': 'error', 'data': '不支持的分析类型'})}\n\n"
                return
            
            messages = [
                {"role": "system", "content": system_msg},
                {"role": "user", "content": prompt}
            ]
            
            # 流式生成
            for chunk in ai_service.chat_stream(messages):
                yield f"data: {json.dumps(chunk)}\n\n"
            
            yield "data: [DONE]\n\n"
            
        except Exception as e:
            yield f"data: {json.dumps({'type': 'error', 'data': str(e)})}\n\n"
    
    return StreamingResponse(generate(), media_type="text/event-stream")
