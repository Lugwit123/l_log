
<<<LPRINT_TRACE_META>>>
> [!AI] 本文件为 pytracemp 生成的 Python 运行时追踪日志，专为 AI 辅助分析设计。
> 阅读约定：`|1|` = 已执行，`|0|` = 未执行或 tracer 超时后未观测，`|d|` = 函数定义行，`|c1|` = 有子调用的已执行行，`|c0|` = 有子调用但未执行，`💡 变量` = 该行的局部变量快照，`⬅️ 返回值` = 函数返回值。

### 追踪日志元数据

- **生成时间**：2026-04-23 20:35:24
- **pytracemp 版本**：`0.1.0`
- **trace_line_locals**：是 — 逐行记录 locals，产生 **line** 事件
- **总事件数**：**44**（本段 `trace_data` 列表长度）。分项 — **调用** 9（`call` 与 `loop_limit` 之和）、**返回** 7（`return`）、**异常** 0（`exception`）、**line** 28（逐行 locals 快照；与调用/返回/异常并列计入总条数）。
- **总耗时**：0.224 秒（`trace_start` → `trace_stop` 墙钟，含被追踪代码与 `sys.settrace` 等开销）
- **停止原因**：**正常结束**（手动调用 `trace_stop()` 或程序退出）
- **日志路径**：`D:\Temp\Log\test_trace_each_call\test_trace_each_call_main.md`
<<</LPRINT_TRACE_META>>>


<<<lprint-trace>>>
TITLE 向前追踪 (Forward Trace)
<<<CMD_INFO>>>
 CMD:[D:\TD_Depot\Wuzu-Internal-Latest\current\rez\Scripts\python.exe d:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\trayapp\rez-package-source\pytracemp\999.0\src\pytracemp\test\test_trace_each_call.py]
<<</CMD_INFO>>>
<<<CALL_TREE>>>
TREE_OVERVIEW
📊 调用链概览：
```
└─ <module> [深度1 路径1 #1] [224.36ms] 🔥 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:65)
    └─ main [深度2 路径1-1 #2] [~0μs] (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:37)
        └─ top [深度3 路径1-1-1 #3] [139.08ms] 🔥 → 9 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:29)
            ├─ middle [深度4 路径1-1-1-1 #4] [52.42ms] 🔥 → 1 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:24)
            │   └─ leaf [深度5 路径1-1-1-1-1 #5] [41.90ms] 🔥 → 0 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:18)
            ├─ middle [深度4 路径1-1-1-2 #6] [45.18ms] 🔥 → 3 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:24)
            │   └─ leaf [深度5 路径1-1-1-2-1 #7] [35.32ms] 🔥 → 2 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:18)
            └─ middle [深度4 路径1-1-1-3 #8] [29.96ms] 🔥 → 5 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:24)
                └─ leaf [深度5 路径1-1-1-3-1 #9] [25.21ms] 🔥 → 4 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:18)
```
<<</CALL_TREE>>>
TRACE_DETAIL_START
════════════════════════════════════════════════════════════════════════════════
callBy(深度1 路径1 #1): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:65 in <module>() [PID:67672 主进程 TID:66292]
>>Function Code|id=func-9 (深度1 - <module>): [起始行号: 65] [源码来源:文件读取]
      1 |     65 |c0|     main()  # → 调用 main()
                       💡 变量 os=<module 'os' from 'D:\\TD_Depot\\Wuzu-Internal-Latest\\current\\rez\\lib\\os.py'>, sys=<module 'sys' (built-in)>, time=<module 'time' (built-in)>, CURRENT_DIR='d:\\TD_Depot\\Software\\Lugwit_syncPlug\\lugwit_insapp\\trayapp\\rez-package-source\\pytracemp\\999.0\\src\\pytracemp\\test', SRC_DIR='d:\\TD_Depot\\Software\\Lugwit_syncPlug\\lugwit_insapp\\trayapp\\rez-package-source\\pytracemp\\999.0\\src'
<<<END_VAR>>>
callBy(深度2 路径1-1 #2): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:37 in main() ← :65 [PID:67672 主进程 TID:66292]
>>Function Code|id=func-9 (深度2 - main): [起始行号: 37] [源码来源:文件读取]
      1 |     37 |d| def main():
      2 |     38 |0|     # trace_each_call assignment only starts tracing when this switch is on.
      3 |     39 |0|     os.environ.setdefault("PYTRACEMP_TRACE_LOG_ENABLE", "1")
      4 |     40 |0|     LPrint._trace_log_enable = True
      5 |     41 |0|     LPrint.trace_flush_interval = 0
      6 |     42 |0| 
      7 |     43 |0|     print("=== enable: lprint.trace_each_call = True ===")
      8 |     44 |0|     print("You should see per-call trace lines in console before normal lprint output.")
      9 |     45 |0| 
     10 |     46 |0|     try:
     11 |     47 |1|         lprint.trace_each_call = True
     12 |     48 |c1|         result = top()  # → 调用 top()
                           💡 变量 result=9 (int)
<<<END_VAR>>>
     13 |     49 |1|         print("result =", result)
     14 |     50 |0|     finally:
     15 |     51 |1|         lprint.trace_each_call = False
     16 |     52 |0| 
     17 |     53 |0|     print("")
     18 |     54 |0|     print("=== disable: lprint.trace_each_call = False ===")
     19 |     55 |0|     print("This run should only show normal lprint output, without per-call trace lines.")
     20 |     56 |0|     top()
     21 |     57 |0| 
     22 |     58 |0|     trace_path = LPrint._get_log_file_path()
     23 |     59 |0|     if trace_path:
     24 |     60 |0|         print("")
     25 |     61 |0|         print("trace log path:", trace_path)
callBy(深度3 路径1-1-1 #3): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:29 in top() ← :48 ⏱️[139.08ms] 🔥 [PID:67672 主进程 TID:66292]
>>Function Code|id=func-9 (深度3 - top): [起始行号: 29] [源码来源:gc+linecache+inspect]
      1 |     29 |d| def top():
      2 |     30 |1|     total = 0
                       💡 变量 total=0 (int)
<<<END_VAR>>>
      3 |     31 |1|     for value in range(3):
      4 |     32 |c1|         total += middle(value)  # → 调用 middle()
      5 |     33 |1|     lprint("[TRACE_EACH_CALL][TOP_DONE]", ("total", total))
      6 |     34 |1|     return total
                       ⬅️ 返回值 (第34行) 9
<<<END_RETURN>>>
      7 |     35 |0| 
callBy(深度4 路径1-1-1-1 #4): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:24 in middle() ← :32 ⏱️[52.42ms] 🔥 [PID:67672 主进程 TID:66292]
>>Function Code|id=func-9 (深度4 - middle): [起始行号: 24] [源码来源:gc+linecache+inspect]
      1 |     24 |d| def middle(value):
                   💡 变量 value=0
<<<END_VAR>>>
      2 |     25 |1|     lprint("[TRACE_EACH_CALL][MIDDLE]", ("value", value))
      3 |     26 |c1|     return leaf(value) + 1  # → 调用 leaf()
                       ⬅️ 返回值 (第26行) 1
<<<END_RETURN>>>
      4 |     27 |0| 
callBy(深度5 路径1-1-1-1-1 #5): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:18 in leaf() ← :26 ⏱️[41.90ms] 🔥 [PID:67672 主进程 TID:66292]
>>Function Code|id=func-9 (深度5 - leaf): [起始行号: 18] [源码来源:gc+linecache+inspect]
      1 |     18 |d| def leaf(value):
                   💡 变量 value=0
<<<END_VAR>>>
      2 |     19 |1|     lprint("[TRACE_EACH_CALL][LEAF]", ("value", value))
      3 |     20 |1|     time.sleep(0.02)
      4 |     21 |1|     return value * 2
                       ⬅️ 返回值 (第21行) 0
<<<END_RETURN>>>
      5 |     22 |0| 
callBy(深度4 路径1-1-1-2 #6): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:24 in middle() ← :32 ⏱️[45.18ms] 🔥 [PID:67672 主进程 TID:66292]
>>Function Code|id=func-9 (深度4 - middle): [起始行号: 24] [源码来源:gc+linecache+inspect(缓存)]
      1 |     24 |d| def middle(value):
                   💡 变量 value=1
<<<END_VAR>>>
      2 |     25 |1|     lprint("[TRACE_EACH_CALL][MIDDLE]", ("value", value))
      3 |     26 |c1|     return leaf(value) + 1  # → 调用 leaf()
                       ⬅️ 返回值 (第26行) 3
<<<END_RETURN>>>
      4 |     27 |0| 
callBy(深度5 路径1-1-1-2-1 #7): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:18 in leaf() ← :26 ⏱️[35.32ms] 🔥 [PID:67672 主进程 TID:66292]
>>Function Code|id=func-9 (深度5 - leaf): [起始行号: 18] [源码来源:gc+linecache+inspect(缓存)]
      1 |     18 |d| def leaf(value):
                   💡 变量 value=1
<<<END_VAR>>>
      2 |     19 |1|     lprint("[TRACE_EACH_CALL][LEAF]", ("value", value))
      3 |     20 |1|     time.sleep(0.02)
      4 |     21 |1|     return value * 2
                       ⬅️ 返回值 (第21行) 2
<<<END_RETURN>>>
      5 |     22 |0| 
callBy(深度4 路径1-1-1-3 #8): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:24 in middle() ← :32 ⏱️[29.96ms] 🔥 [PID:67672 主进程 TID:66292]
>>Function Code|id=func-9 (深度4 - middle): [起始行号: 24] [源码来源:gc+linecache+inspect(缓存)]
      1 |     24 |d| def middle(value):
                   💡 变量 value=2
<<<END_VAR>>>
      2 |     25 |1|     lprint("[TRACE_EACH_CALL][MIDDLE]", ("value", value))
      3 |     26 |c1|     return leaf(value) + 1  # → 调用 leaf()
                       ⬅️ 返回值 (第26行) 5
<<<END_RETURN>>>
      4 |     27 |0| 
callBy(深度5 路径1-1-1-3-1 #9): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/rez-package-source/pytracemp/999.0/src/pytracemp/test/test_trace_each_call.py:18 in leaf() ← :26 ⏱️[25.21ms] 🔥 [PID:67672 主进程 TID:66292]
>>Function Code|id=func-9 (深度5 - leaf): [起始行号: 18] [源码来源:gc+linecache+inspect(缓存)]
      1 |     18 |d| def leaf(value):
                   💡 变量 value=2
<<<END_VAR>>>
      2 |     19 |1|     lprint("[TRACE_EACH_CALL][LEAF]", ("value", value))
      3 |     20 |1|     time.sleep(0.02)
      4 |     21 |1|     return value * 2
                       ⬅️ 返回值 (第21行) 4
<<<END_RETURN>>>
      5 |     22 |0| 
════════════════════════════════════════════════════════════════════════════════
TRACE_END reason=manual
<<</lprint-trace>>>

<<<TRACE_SUMMARY>>>
📋 追踪摘要
  • 起始函数: <module>() @ test_trace_each_call.py:65
  • 总耗时: 224.36ms | 事件数: 44 | 显示: 9 | 省略: 0
  • 性能热点:
    🔥 1. middle - 139.08ms (62.0%)
    🔥 2. middle - 52.42ms (23.4%)

✓ 追踪完成 | 日志已保存
<<</TRACE_SUMMARY>>>

<<<USAGE_GUIDE>>>
---

## 📖 文件格式说明

本文件采用 **Markdown + JSON 索引** 混合格式，支持人类阅读和程序解析。

### 👤 人类阅读

- 📄 直接查看 Markdown 内容（调用树、详细追踪）
- 🔧 使用任何 Markdown 编辑器或查看器
- 🤖 AI 可以理解完整上下文

### 💻 程序解析

#### 1️⃣ 提取 JSON 索引

```python
import re, json

# 读取文件
with open("trace.md", "r", encoding="utf-8") as f:
    content = f.read()

# 提取 JSON 索引
match = re.search(r'<<<JSON_INDEX>>>\s*```json\s*\n(.*?)\n```', content, re.DOTALL)
if match:
    data = json.loads(match.group(1))
    print(f"版本: {data['version']}")
    print(f"总调用: {data['metadata']['total_calls']}")
    print(f"最大深度: {data['metadata']['max_depth']}")
```

#### 2️⃣ JSON 索引结构（规则驱动格式）

```javascript
{
  "version": "2.0",
  "format_version": "2026.03",
  "rules": {
    // 基础配置
    "id_pattern": "call-{seq}",
    "depth_range": [1, 5],
    "slow_threshold": 500,
    
    // 解析规则
    "parsing": {
      "call_pattern": "callBy\\(深度(\\d+)\\s+路径([\\d\\-]+)\\s+#(\\d+)\\)",
      "func_pattern": "in\\s+(\\w+)\\(\\)",
      "return_pattern": "⬅️\\s*返回值\\s*\\([^)]+\\)\\s*(.+?)(?:\\s*[═\\n]|$)"
    },
    
    // 组件命名规则
    "components": {
      "call_elements": {
        "call": "lprint-trace-call",
        "code_block": "lprint-trace-code-block"
      },
      "interactive_elements": {
        "ai_button": "ask-ai-code-btn",
        "back_button": "back-to-tree-code-btn"
      }
    },
    
    // 功能开关
    "features": {
      "enable_params_extraction": true,
      "enable_return_expansion": true
    }
  },
  "metadata": {
    "total_calls": 23,
    "max_depth": 5,
    "generated_at": "2026-03-28T15:20:00Z"
  }
}
```

#### 3️⃣ 前端解析器使用

```javascript
// 初始化解析器
const parser = new TraceDataParser(window.traceJsonData.rules);

// 查找元素
const callElement = parser.findElement('call', { seq: '2' });
const treeContainer = parser.findComponent('tree_view', 'container');

// 提取数据
const callInfo = parser.extractCallInfo(callElement);
const params = parser.extractParams(codeContent);
const returnValue = parser.extractReturnValue(codeContent);

// 创建组件
const returnBlock = parser.createReturnBlock('2', returnValue, params);
const aiButton = parser.createAIButton(callBlock);
```

#### 4️⃣ 组件查找示例

```javascript
// 使用组件名称查找
const allCalls = parser.findAllComponents('call_elements', 'call');
const expandButtons = parser.findAllComponents('interactive_elements', 'expand_toggle');

// 生成CSS类名
const callClass = parser.generateCssClass('trace', 'call', 'slow');
// 结果: "lprint-trace-call lprint-trace-call--slow"

// 生成元素ID
const returnId = parser.generateId('return', { call_id: '2' });
// 结果: "return-2"
```

### 🎯 主要特性

- 🏗️ **规则驱动**: 所有解析规则集中配置
- 🎨 **组件化**: 统一的组件命名和查找
- 🔧 **可扩展**: 易于添加新的解析规则
- 📱 **响应式**: 支持功能开关和样式配置
- 🔄 **向后兼容**: 保持与旧版本的兼容性

### 📚 版本信息

- **当前版本**: 2.0
- **格式版本**: 2026.03
- **解析器版本**: 2.1.0
- **生成时间**: 自动记录

---

### 🚀 pytracemp 追踪系统

**规则驱动 · 组件化 · 可扩展**

*🔧 pytracemp v2.1.0*

<<</USAGE_GUIDE>>>

<<<JSON_INDEX>>>
```json
{"version":"2.0","format_version":"2026.03","rules":{"id_pattern":"call-{seq}","depth_range":[1,0],"path_format":"{parent}-{child}","time_unit":"ms","slow_threshold":500,"deep_threshold":4,"parsing":{"call_pattern":"callBy\\(深度(\\d+)\\s+路径([\\d\\-]+)\\s+#(\\d+)\\)","func_pattern":"in\\s+(\\w+)\\(\\)","file_pattern":"([^:]+:\\d+)","time_pattern":"⏱️\\[([\\d.]+)ms\\]","return_pattern":"⬅️\\s*返回值\\s*\\([^)]+\\)\\s*(.+?)(?:\\s*[═\\n]|$)","param_pattern":"💡\\s*变量\\s+(.+)","error_pattern":"(?i)error|exception|failed"},"components":{"tree_view":{"container":"trace-tree-view","header":"tree-view-header","controls":"tree-controls","content":"tree-content","node":"tree-node","node_content":"tree-node-content","children":"tree-children","toggle":"tree-toggle"},"call_elements":{"call":"lprint-trace-call","func":"lprint-trace-func","code_block":"lprint-trace-code-block","expand_container":"lprint-trace-expand-container","expand_header":"lprint-trace-expand-header","return_pre":"lprint-trace-return-pre","inline":"lprint-trace-inline","skip":"lprint-trace-skip"},"interactive_elements":{"expand_toggle":"ret-val-toggle","return_block":"return-value-block","ai_button":"ask-ai-code-btn","back_button":"back-to-tree-code-btn","search_input":"tree-search","expand_all":"expand-all-btn","collapse_all":"collapse-all-btn"},"ai_components":{"modal":"ai-modal","question_list":"ai-question-list","answer_area":"ai-answer-area"},"ui_components":{"toast":"toast","toast_container":"toast-container","modal":"modal","context_menu":"context-menu","tooltip":"tooltip"}},"id_patterns":{"call":"call-{seq}","func":"func-{seq}","expand":"expand-{call_id}","return":"return-{call_id}","tree_node":"node-{depth}-{path}","code_block":"code-{func_id}"},"css_classes":{"prefixes":{"trace":"lprint-trace","tree":"tree","ai":"ai","ui":"ui"},"modifiers":{"active":"active","collapsed":"collapsed","expanded":"expanded","highlighted":"highlighted","slow":"slow","deep":"deep","error":"error"},"elements":{"call":"call","func":"func","code":"code","return":"return","param":"param","variable":"variable"}},"display":{"max_return_length":200,"param_separator":", ","time_precision":2,"depth_indent":4,"expand_button_text":"展开","collapse_button_text":"收起"},"styling":{"slow_call_color":"#ff6b6b","deep_call_color":"#4ecdc4","error_call_color":"#ff4757","normal_call_color":"#1890ff","return_value_color":"#98c379","param_color":"#61afef"},"features":{"enable_params_extraction":true,"enable_return_expansion":true,"enable_performance_analysis":true,"enable_error_highlighting":true,"enable_deep_call_detection":true}},"metadata":{"total_calls":0,"max_depth":0,"total_time":0,"avg_time":0.0,"generated_at":"2026-04-23T20:35:24Z","parser_version":"2.1.0"},"highlights":{"slow_calls":[],"deep_calls":[],"error_calls":[]}}
```
<<</JSON_INDEX>>>


=== 追踪摘要 ===
总耗时: 0.224 秒

执行信息:
  脚本: d:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\trayapp\rez-package-source\pytracemp\999.0\src\pytracemp\test\test_trace_each_call.py

函数调用次数排行（Top 10）:
  1. middle - 3 次
  2. leaf - 3 次
  3. <module> - 1 次
  4. main - 1 次
  5. top - 1 次

文件调用次数排行（Top 5）:
  1. test_trace_each_call.py - 9 次