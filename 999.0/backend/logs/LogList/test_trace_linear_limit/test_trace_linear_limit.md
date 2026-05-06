
<<<LPRINT_TRACE_META>>>
> [!AI] 本文件为 pytracemp 生成的 Python 运行时追踪日志，专为 AI 辅助分析设计。
> 阅读约定：`|1|` = 已执行，`|0|` = 未执行或 tracer 超时后未观测，`|d|` = 函数定义行，`|c1|` = 有子调用的已执行行，`|c0|` = 有子调用但未执行，`💡 变量` = 该行的局部变量快照，`⬅️ 返回值` = 函数返回值。

### 追踪日志元数据

- **生成时间**：2026-04-17 21:42:36
- **pytracemp 版本**：`0.1.0`
- **trace_line_locals**：否 — 轻量：仅 **call** 形参与 **return**（通常无 **line**）
- **总事件数**：**24**（本段 `trace_data` 列表长度）。分项 — **调用** 13（`call` 与 `loop_limit` 之和）、**返回** 11（`return`）、**异常** 0（`exception`）、**line** 0（逐行 locals 快照；当前为 0（多为 `trace_line_locals=False`））。
- **总耗时**：0.004 秒（`trace_start` → `trace_stop` 墙钟，含被追踪代码与 `sys.settrace` 等开销）
- **停止原因**：**正常结束**（手动调用 `trace_stop()` 或程序退出）
- **日志路径**：`D:\Temp\Log\test_trace_linear_limit\test_trace_linear_limit.md`
<<</LPRINT_TRACE_META>>>


<<<lprint-trace>>>
TITLE 向前追踪 (Forward Trace)
<<<CMD_INFO>>>
 CMD:[D:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\python_env\lugwit_python.exe d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py]
<<</CMD_INFO>>>
<<<CALL_TREE>>>
TREE_OVERVIEW
📊 调用链概览：
```
└─ <module> [深度1 路径1 #1] [4.00ms] 🔥 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:114)
    └─ main [深度2 路径1-1 #2] [~0μs] (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:72)
        └─ run_hot_loop [深度3 路径1-1-1 #3] [2.00ms] 🔥 → '5050' (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:22)
            └─ hot_function [深度4 路径1-1-1-1-(:10) #4] [×100次] → '1' (首次) (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:18)
                ├─ [LOOP:10] #4-#13 → '10' (第10次)
                └─ [LOOP10:] #94-#103 (最后)
```
<<</CALL_TREE>>>
TRACE_DETAIL_START
════════════════════════════════════════════════════════════════════════════════
callBy(深度1 路径1 #1): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:114 in <module>() [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度1 - <module>): [起始行号: 114] [源码来源:文件读取]
      1 |    114 |c1|     main()  # → 调用 main()
                       💡 变量 print_function=_Feature((2, 6, 0, 'alpha', 2), (3, 0, 0, 'alpha', 0), 1048576), json=<module 'json' from 'D:\\TD_Depot\\Software\\Lugwit_syncPlug\\lugwit_insapp\\python_env\\Lib\\json\\__init__.py'>, os=<module 'os' (frozen)>, time=<module 'time' (built-in)>, lprint_info=True
<<<END_VAR>>>
callBy(深度2 路径1-1 #2): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:72 in main() ← :114 [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度2 - main): [起始行号: 72] [源码来源:文件读取]
      1 |     72 |d| def main():
      2 |     73 |1|     # 关键配置：保留 linear 输出并启用同函数上限
      3 |     74 |1|     lprint.trace_log_enable = True
      4 |     75 |1|     lprint.trace_flush_interval = 0
      5 |     76 |1|     lprint.trace_max_result_per_function = TARGET_LIMIT
      6 |     77 |1| 
      7 |     78 |1|     lprint.trace_start(
      8 |     79 |1|         clear_log=True,
      9 |     80 |1|         auto_result=True,
     10 |     81 |1|         trace_line_locals=False,
     11 |     82 |1|         trace_log_stem=TRACE_STEM,
     12 |     83 |1|         trace_path_id_limit=50000,
     13 |     84 |1|     )
     14 |     85 |1| 
     15 |     86 |c1|     _ = run_hot_loop(100)  # → 调用 run_hot_loop()
                       💡 变量 _='5050' (str)
<<<END_VAR>>>
     16 |     87 |1|     lprint.trace_stop()
     17 |     88 |1| 
     18 |     89 |1|     # auto_result=True 时，trace_stop 内部会自动落盘；稍等文件系统写入
     19 |     90 |1|     time.sleep(0.5)
     20 |     91 |1| 
     21 |     92 |1|     trace_path = getattr(lprint, "_last_trace_log_file_path", None)
     22 |     93 |1|     linear_path = _sidecar_from_trace_path(trace_path)
     23 |     94 |1|     if not linear_path or not os.path.exists(linear_path):
     24 |     95 |1|         # 兜底：若运行环境未设置 _last_trace_log_file_path，则全局搜索最新 sidecar
     25 |     96 |1|         linear_path = _find_latest_linear_file(TRACE_STEM)
     26 |     97 |1|     if not linear_path or not os.path.exists(linear_path):
     27 |     98 |1|         raise RuntimeError("未找到 linear 日志文件: {}.trace_linear.jsonl".format(TRACE_STEM))
     28 |     99 |1| 
     29 |    100 |1|     call_count = _count_function_call_records(linear_path, TARGET_FUNCTION)
     30 |    101 |1| 
     31 |    102 |1|     print("linear file: {}".format(linear_path))
     32 |    103 |1|     print("function: {}, call count: {}, limit: {}".format(TARGET_FUNCTION, call_count, TARGET_LIMIT))
     33 |    104 |1| 
     34 |    105 |1|     if call_count > TARGET_LIMIT:
     35 |    106 |1|         raise AssertionError(
     36 |    107 |1|             "linear 限流未生效: {} call={} > limit={}".format(TARGET_FUNCTION, call_count, TARGET_LIMIT)
     37 |    108 |1|         )
     38 |    109 |1| 
     39 |    110 |1|     print("PASS: linear 同函数计数限流生效")
callBy(深度3 路径1-1-1 #3): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:22 in run_hot_loop() ← :86 ⏱️[2.00ms] 🔥 [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度3 - run_hot_loop): [起始行号: 22] [源码来源:文件读取]
      1 |     22 |d| def run_hot_loop(n):
                   💡 变量 n=100
<<<END_VAR>>>
      2 |     23 |1|     total = 0
      3 |     24 |1|     for i in range(n):
      4 |     25 |c1|         total += hot_function(i)  # → 调用 hot_function()
      5 |     26 |1|     return total
                       ⬅️ 返回值 (第26行) '5050'
<<<END_RETURN>>>
callBy(深度4 路径1-1-1-1 #4): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:18 in hot_function() ← :25 ⏱️[~0μs] [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度4 - hot_function): [起始行号: 18] [源码来源:文件读取]
      1 |     18 |d| def hot_function(x):
                   💡 变量 x=0
<<<END_VAR>>>
      2 |     19 |1|     return x + 1
                       ⬅️ 返回值 (第19行) '1'
<<<END_RETURN>>>
callBy(深度4 路径1-1-1-2 #5): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:18 in hot_function() ← :25 ⏱️[~0μs] [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度4 - hot_function): [起始行号: 18] [源码来源:文件读取(缓存)]
      1 |     18 |d| def hot_function(x):
                   💡 变量 x=1
<<<END_VAR>>>
      2 |     19 |1|     return x + 1
                       ⬅️ 返回值 (第19行) '2'
<<<END_RETURN>>>
callBy(深度4 路径1-1-1-3 #6): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:18 in hot_function() ← :25 ⏱️[~0μs] [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度4 - hot_function): [起始行号: 18] [源码来源:文件读取(缓存)]
      1 |     18 |d| def hot_function(x):
                   💡 变量 x=2
<<<END_VAR>>>
      2 |     19 |1|     return x + 1
                       ⬅️ 返回值 (第19行) '3'
<<<END_RETURN>>>
callBy(深度4 路径1-1-1-4 #7): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:18 in hot_function() ← :25 ⏱️[~0μs] [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度4 - hot_function): [起始行号: 18] [源码来源:文件读取(缓存)]
      1 |     18 |d| def hot_function(x):
                   💡 变量 x=3
<<<END_VAR>>>
      2 |     19 |1|     return x + 1
                       ⬅️ 返回值 (第19行) '4'
<<<END_RETURN>>>
callBy(深度4 路径1-1-1-5 #8): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:18 in hot_function() ← :25 ⏱️[~0μs] [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度4 - hot_function): [起始行号: 18] [源码来源:文件读取(缓存)]
      1 |     18 |d| def hot_function(x):
                   💡 变量 x=4
<<<END_VAR>>>
      2 |     19 |1|     return x + 1
                       ⬅️ 返回值 (第19行) '5'
<<<END_RETURN>>>
callBy(深度4 路径1-1-1-6 #9): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:18 in hot_function() ← :25 ⏱️[~0μs] [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度4 - hot_function): [起始行号: 18] [源码来源:文件读取(缓存)]
      1 |     18 |d| def hot_function(x):
                   💡 变量 x=5
<<<END_VAR>>>
      2 |     19 |1|     return x + 1
                       ⬅️ 返回值 (第19行) '6'
<<<END_RETURN>>>
callBy(深度4 路径1-1-1-7 #10): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:18 in hot_function() ← :25 ⏱️[~0μs] [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度4 - hot_function): [起始行号: 18] [源码来源:文件读取(缓存)]
      1 |     18 |d| def hot_function(x):
                   💡 变量 x=6
<<<END_VAR>>>
      2 |     19 |1|     return x + 1
                       ⬅️ 返回值 (第19行) '7'
<<<END_RETURN>>>
callBy(深度4 路径1-1-1-8 #11): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:18 in hot_function() ← :25 ⏱️[~0μs] [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度4 - hot_function): [起始行号: 18] [源码来源:文件读取(缓存)]
      1 |     18 |d| def hot_function(x):
                   💡 变量 x=7
<<<END_VAR>>>
      2 |     19 |1|     return x + 1
                       ⬅️ 返回值 (第19行) '8'
<<<END_RETURN>>>
callBy(深度4 路径1-1-1-9 #12): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:18 in hot_function() ← :25 ⏱️[~0μs] [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度4 - hot_function): [起始行号: 18] [源码来源:文件读取(缓存)]
      1 |     18 |d| def hot_function(x):
                   💡 变量 x=8
<<<END_VAR>>>
      2 |     19 |1|     return x + 1
                       ⬅️ 返回值 (第19行) '9'
<<<END_RETURN>>>
callBy(深度4 路径1-1-1-10 #13): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py:18 in hot_function() ← :25 ⏱️[~0μs] [PID:214492 主进程 TID:156772]
>>Function Code|id=func-13 (深度4 - hot_function): [起始行号: 18] [源码来源:文件读取(缓存)]
      1 |     18 |d| def hot_function(x):
                   💡 变量 x=9
<<<END_VAR>>>
      2 |     19 |1|     return x + 1
                       ⬅️ 返回值 (第19行) '10'
<<<END_RETURN>>>
════════════════════════════════════════════════════════════════════════════════
TRACE_END reason=manual
<<</lprint-trace>>>

<<<TRACE_SUMMARY>>>
📋 追踪摘要
  • 起始函数: <module>() @ test_trace_linear_limit.py:114
  • 总耗时: 4.00ms | 事件数: 24 | 显示: 13 | 省略: 0
  • 性能热点:
    🔥 1. run_hot_loop - 2.00ms (49.9%)

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
{"version":"2.0","format_version":"2026.03","rules":{"id_pattern":"call-{seq}","depth_range":[1,0],"path_format":"{parent}-{child}","time_unit":"ms","slow_threshold":500,"deep_threshold":4,"parsing":{"call_pattern":"callBy\\(深度(\\d+)\\s+路径([\\d\\-]+)\\s+#(\\d+)\\)","func_pattern":"in\\s+(\\w+)\\(\\)","file_pattern":"([^:]+:\\d+)","time_pattern":"⏱️\\[([\\d.]+)ms\\]","return_pattern":"⬅️\\s*返回值\\s*\\([^)]+\\)\\s*(.+?)(?:\\s*[═\\n]|$)","param_pattern":"💡\\s*变量\\s+(.+)","error_pattern":"(?i)error|exception|failed"},"components":{"tree_view":{"container":"trace-tree-view","header":"tree-view-header","controls":"tree-controls","content":"tree-content","node":"tree-node","node_content":"tree-node-content","children":"tree-children","toggle":"tree-toggle"},"call_elements":{"call":"lprint-trace-call","func":"lprint-trace-func","code_block":"lprint-trace-code-block","expand_container":"lprint-trace-expand-container","expand_header":"lprint-trace-expand-header","return_pre":"lprint-trace-return-pre","inline":"lprint-trace-inline","skip":"lprint-trace-skip"},"interactive_elements":{"expand_toggle":"ret-val-toggle","return_block":"return-value-block","ai_button":"ask-ai-code-btn","back_button":"back-to-tree-code-btn","search_input":"tree-search","expand_all":"expand-all-btn","collapse_all":"collapse-all-btn"},"ai_components":{"modal":"ai-modal","question_list":"ai-question-list","answer_area":"ai-answer-area"},"ui_components":{"toast":"toast","toast_container":"toast-container","modal":"modal","context_menu":"context-menu","tooltip":"tooltip"}},"id_patterns":{"call":"call-{seq}","func":"func-{seq}","expand":"expand-{call_id}","return":"return-{call_id}","tree_node":"node-{depth}-{path}","code_block":"code-{func_id}"},"css_classes":{"prefixes":{"trace":"lprint-trace","tree":"tree","ai":"ai","ui":"ui"},"modifiers":{"active":"active","collapsed":"collapsed","expanded":"expanded","highlighted":"highlighted","slow":"slow","deep":"deep","error":"error"},"elements":{"call":"call","func":"func","code":"code","return":"return","param":"param","variable":"variable"}},"display":{"max_return_length":200,"param_separator":", ","time_precision":2,"depth_indent":4,"expand_button_text":"展开","collapse_button_text":"收起"},"styling":{"slow_call_color":"#ff6b6b","deep_call_color":"#4ecdc4","error_call_color":"#ff4757","normal_call_color":"#1890ff","return_value_color":"#98c379","param_color":"#61afef"},"features":{"enable_params_extraction":true,"enable_return_expansion":true,"enable_performance_analysis":true,"enable_error_highlighting":true,"enable_deep_call_detection":true}},"metadata":{"total_calls":0,"max_depth":0,"total_time":0,"avg_time":0.0,"generated_at":"2026-04-17T21:42:36Z","parser_version":"2.1.0"},"highlights":{"slow_calls":[],"deep_calls":[],"error_calls":[]}}
```
<<</JSON_INDEX>>>


=== 追踪摘要 ===
总耗时: 0.004 秒

执行信息:
  脚本: d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_linear_limit.py

函数调用次数排行（Top 10）:
  1. hot_function - 10 次
  2. <module> - 1 次
  3. main - 1 次
  4. run_hot_loop - 1 次

文件调用次数排行（Top 5）:
  1. test_trace_linear_limit.py - 13 次