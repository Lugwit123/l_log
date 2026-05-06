#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
showLog 配置文件
包含正则表达式、JavaScript代码、CSS样式等配置常量
"""
import re
import os

# 获取当前文件所在目录
_CONFIG_DIR = os.path.dirname(os.path.abspath(__file__))
_JS_DIR = os.path.join(_CONFIG_DIR, 'js')

def _load_js_file(filename):
    """从js目录加载JavaScript文件内容"""
    filepath = os.path.join(_JS_DIR, filename)
    print(f"[Config] 正在加载JavaScript文件: {filepath}")
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            print(f"[Config] 成功加载 {filename}，大小: {len(content)} 字符")
            return f'<script>\n{content}\n</script>'
    except Exception as e:
        print(f"[警告] 无法加载JavaScript文件 {filename}: {e}")
        return '<script>console.log("JavaScript文件加载失败");</script>'

# ==================== 正则表达式配置 ====================

# HTML 预处理相关正则
PRE_RETURN_RE = re.compile(r'<pre class="lprint-trace-return-pre">(.*?)</pre>', re.DOTALL)
PRE_CODE_RE = re.compile(r'<pre class="lprint-trace-pre"><code class="language-python">(.*?)</code></pre>', re.DOTALL)

# 日志条目匹配
LOG_ENTRY_RE = re.compile(r'(<div class="lprint-log-entry">.*?</div>)', re.DOTALL)
LOG_LINE_RE = re.compile(r"^\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\]\s+(.*)$", re.MULTILINE)
LPRINT_TRACE_BLOCK_RE = re.compile(r'<<<lprint-trace>>>(.*?)<<</lprint-trace>>>', re.DOTALL)

# callBy 调用链相关正则
# 格式: callBy(深度X 路径X-X-X #X): path:line in func() [← caller:line] [⏱️...] [PID:... TID:...]
CALLBY_CALL_RE = re.compile(r"callBy\(深度(\d+)\s+路径([\d\-]+)\s+#(\d+)\):\s*(.+):(\d+)\s+in\s+(.+?)\(\)(?:\s*←\s*(.+):(\d+))?(?:\s+.*)?", re.UNICODE)
CALLBY_CODE_LINE_RE = re.compile(r"^\s*(\d+)\s*\|\s*(\d+)\s*\|(.*)$")

# 日志级别匹配
LOG_LEVEL_ERROR_RE = re.compile(r"(\{ERROR\})")
LOG_LEVEL_WARNING_RE = re.compile(r"(\{WARNING\})")
LOG_LEVEL_INFO_RE = re.compile(r"(\{INFO\})")
LOG_LEVEL_DEBUG_RE = re.compile(r"(\{DEBUG\})")

# 文件路径匹配
LOG_FILE_RE = re.compile(r"(File:\s*)((?:[a-zA-Z]:)?(?:[\w\-\.]|[\\/])+\.py)(?::(\d+))?")
PY_REF_RE = re.compile(r"((?:[a-zA-Z]:)?(?:[\w\-\.]|[\\/])+\.py)(?::(\d+))?")

# ==================== JavaScript 代码配置 ====================

# 从独立的.js文件加载JavaScript代码，避免Python字符串转义问题
UNUSED_HIGHLIGHT_JS = _load_js_file('unused_highlight.js')
FUNCTION_CALL_HIGHLIGHT_JS = _load_js_file('function_call_highlight.js')
TRACE_TREE_VIEW_JS = _load_js_file('trace_tree_view.js')
