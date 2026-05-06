
<<<LPRINT_TRACE_META>>>
> [!AI] 本文件为 pytracemp 生成的 Python 运行时追踪日志，专为 AI 辅助分析设计。
> 阅读约定：`|1|` = 已执行，`|0|` = 未执行或 tracer 超时后未观测，`|d|` = 函数定义行，`|c1|` = 有子调用的已执行行，`|c0|` = 有子调用但未执行，`💡 变量` = 该行的局部变量快照，`⬅️ 返回值` = 函数返回值。

### 追踪日志元数据

- **生成时间**：2026-04-15 13:12:17
- **pytracemp 版本**：`0.1.0`
- **trace_line_locals**：是 — 逐行记录 locals，产生 **line** 事件
- **总事件数**：**615**（本段 `trace_data` 列表长度）。分项 — **调用** 22（`call` 与 `loop_limit` 之和）、**返回** 22（`return`）、**异常** 0（`exception`）、**line** 571（逐行 locals 快照；与调用/返回/异常并列计入总条数）。
- **总耗时**：0.345 秒（`trace_start` → `trace_stop` 墙钟，含被追踪代码与 `sys.settrace` 等开销）
- **停止原因**：**正常结束**（手动调用 `trace_stop()` 或程序退出）
- **日志路径**：`d:\Temp\Log\test_fix\test_fix_verify\test_fix_verify.md`
<<</LPRINT_TRACE_META>>>


<<<lprint-trace>>>
TITLE 向前追踪 (Forward Trace)
<<<CMD_INFO>>>
 CMD:[D:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\python_env\lugwit_python.exe d:\Temp\test_fix_verify.py]
<<</CMD_INFO>>>
<<<CALL_TREE>>>
TREE_OVERVIEW
📊 调用链概览：
```
└─ <module> [深度1 路径1 #1] [344.12ms] 🔥 (d:/Temp/test_fix_verify.py:26)
    └─ top [深度2 路径1-1 #2] [6.02ms] → [42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42] (d:/Temp/test_fix_verify.py:20)
        ├─ mid [深度3 路径1-1-1 #3] [1.00ms] → 42 (d:/Temp/test_fix_verify.py:17)
        │   └─ leaf [深度4 路径1-1-1-1 #4] [~0μs] → 42 (d:/Temp/test_fix_verify.py:14)
        ├─ mid [深度3 路径1-1-2 #5] [503.54μs] → 42 (d:/Temp/test_fix_verify.py:17)
        │   └─ leaf [深度4 路径1-1-2-1 #6] [~0μs] → 42 (d:/Temp/test_fix_verify.py:14)
        ├─ mid [深度3 路径1-1-3 #7] [~0μs] → 42 (d:/Temp/test_fix_verify.py:17)
        │   └─ leaf [深度4 路径1-1-3-1 #8] [~0μs] → 42 (d:/Temp/test_fix_verify.py:14)
        ├─ mid [深度3 路径1-1-4 #9] [~0μs] → 42 (d:/Temp/test_fix_verify.py:17)
        │   └─ leaf [深度4 路径1-1-4-1 #10] [~0μs] → 42 (d:/Temp/test_fix_verify.py:14)
        ├─ mid [深度3 路径1-1-5 #11] [~0μs] → 42 (d:/Temp/test_fix_verify.py:17)
        │   └─ leaf [深度4 路径1-1-5-1 #12] [~0μs] → 42 (d:/Temp/test_fix_verify.py:14)
        ├─ mid [深度3 路径1-1-6 #13] [503.54μs] → 42 (d:/Temp/test_fix_verify.py:17)
        │   └─ leaf [深度4 路径1-1-6-1 #14] [~0μs] → 42 (d:/Temp/test_fix_verify.py:14)
        ├─ mid [深度3 路径1-1-7 #15] [~0μs] → 42 (d:/Temp/test_fix_verify.py:17)
        │   └─ leaf [深度4 路径1-1-7-1 #16] [~0μs] → 42 (d:/Temp/test_fix_verify.py:14)
        ├─ mid [深度3 路径1-1-8 #17] [1.00ms] → 42 (d:/Temp/test_fix_verify.py:17)
        │   └─ leaf [深度4 路径1-1-8-1 #18] [~0μs] → 42 (d:/Temp/test_fix_verify.py:14)
        ├─ mid [深度3 路径1-1-9 #19] [~0μs] → 42 (d:/Temp/test_fix_verify.py:17)
        │   └─ leaf [深度4 路径1-1-9-1 #20] [~0μs] → 42 (d:/Temp/test_fix_verify.py:14)
        └─ mid [深度3 路径1-1-10 #21] [~0μs] → 42 (d:/Temp/test_fix_verify.py:17)
            └─ leaf [深度4 路径1-1-10-1 #22] [~0μs] → 42 (d:/Temp/test_fix_verify.py:14)
```
<<</CALL_TREE>>>
TRACE_DETAIL_START
════════════════════════════════════════════════════════════════════════════════
callBy(深度1 路径1 #1): d:/Temp/test_fix_verify.py:26 in <module>() ⏱️[344.12ms] 🔥 [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度1 - <module>): [起始行号: 26] [源码来源:文件读取]
      1 |     26 |1| lprint.trace_start(clear_log=True, trace_log_stem="test_fix_verify")
                   💡 变量 sys=<module 'sys' (built-in)>, lprint_info=True, LPrint=<class 'pytracemp.usualFunc.LPrint'>, lprint=<pytracemp.usualFunc.LPrint object at 0x0000017E593B5810>, os=<module 'os' (frozen)>
<<<END_VAR>>>
      2 |     27 |c1| top()  # → 调用 top()
      3 |     28 |1| lprint.trace_result(console_output=False)
      4 |     29 |0| 
      5 |     30 |0| # 统计 .jsonl 里的 call/return
      6 |     31 |1| import json, collections
      7 |     32 |1| jsonl_path = r"d:\Temp\Log\test_fix\test_fix_verify\test_fix_verify.trace_linear.jsonl"
                   💡 变量 jsonl_path=str (jsonl_path), 78 字符
'd:\\Temp\\Log\\test_fix\\test_fix_verify\\test_fix_verify.trace_linear.jsonl'
<<<END_VAR>>>
      8 |     33 |1| if os.path.exists(jsonl_path):
      9 |     34 |1|     counts = collections.Counter()
                       💡 变量 counts=Counter() (Counter)
<<<END_VAR>>>
     10 |     35 |1|     func_calls = collections.Counter()
                       💡 变量 func_calls=Counter() (Counter)
<<<END_VAR>>>
     11 |     36 |1|     func_returns = collections.Counter()
                       💡 变量 func_returns=Counter() (Counter)
<<<END_VAR>>>
     12 |     37 |1|     with open(jsonl_path, encoding='utf-8') as f:
     13 |     38 |1|         for line in f:
     14 |     39 |1|             line = line.strip()
                               💡 变量 line=str (line), 328 字符
'{"index": 0, "type": "call", "time": 0, "function": "<module>", "filename": "d:\\\\Temp\\\\test_fix_verify.py", "lineno": 26, "depth": 0, "params": [{"name": "sys", "type": "?"}, {"name": "lprint_info", "type": "?"}, {"name": "LPrint", "type": "?"}, {"name": "lprint", "type": "?"}, {"name": "os", "type": "?"}], "call_id": 1}'
<<<END_VAR>>>
     15 |     40 |1|             if not line or line.startswith('<<<'):
     16 |     41 |0|                 continue
     17 |     42 |1|             try:
     18 |     43 |1|                 obj = json.loads(line)
                                   💡 变量 obj=dict (obj), 322 字符
{'index': 0, 'type': 'call', 'time': 0, 'function': '<module>', 'filename': 'd:\\Temp\\test_fix_verify.py', 'lineno': 26, 'depth': 0, 'params': [{'name': 'sys', 'type': '?'}, {'name': 'lprint_info', 'type': '?'}, {'name': 'LPrint', 'type': '?'}, {'name': 'lprint', 'type': '?'}, {'name': 'os', 'type': '?'}], 'call_id': 1}
<<<END_VAR>>>
     19 |     44 |1|                 et = obj.get('type')
                                   💡 变量 et='call' (str)
<<<END_VAR>>>
     20 |     45 |1|                 counts[et] += 1
                                   💡 变量 counts=Counter({'call': 1}) (Counter)
<<<END_VAR>>>
     21 |     46 |1|                 fn = obj.get('function', '?')
                                   💡 变量 fn='<module>' (str)
<<<END_VAR>>>
     22 |     47 |1|                 if et == 'call':
     23 |     48 |1|                     func_calls[fn] += 1
     24 |     49 |1|                 elif et == 'return':
     25 |     50 |1|                     func_returns[fn] += 1
     26 |     51 |0|             except:
     27 |     52 |0|                 pass
     28 |     53 |1|     print(f"总事件: {dict(counts)}")
     29 |     54 |1|     print()
     30 |     55 |1|     all_funcs = set(func_calls) | set(func_returns)
                       💡 变量 all_funcs={'top', '<module>', 'mid', 'leaf'} (set)
<<<END_VAR>>>
     31 |     56 |1|     print(f"{'函数':<30} {'call':>6} {'return':>8} {'对称?':>6}")
     32 |     57 |1|     print("-" * 55)
     33 |     58 |1|     for fn in sorted(all_funcs):
                       ⬅️ 返回值 (第58行) None
<<<END_RETURN>>>
     34 |     59 |1|         c = func_calls.get(fn, 0)
                           💡 变量 c=1 (int)
<<<END_VAR>>>
     35 |     60 |1|         r = func_returns.get(fn, 0)
                           💡 变量 r=0 (int)
<<<END_VAR>>>
     36 |     61 |1|         ok = "OK" if c == r else "BUG c!=r"
                           💡 变量 ok='BUG c!=r' (str)
<<<END_VAR>>>
     37 |     62 |1|         print(f"  {fn:<28} {c:>6} {r:>8} {ok:>6}")
callBy(深度2 路径1-1 #2): d:/Temp/test_fix_verify.py:20 in top() ← :27 ⏱️[6.02ms] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度2 - top): [起始行号: 20] [源码来源:gc+linecache+inspect(缓存)]
      1 |     20 |d| def top():
      2 |     21 |1|     results = []
                       💡 变量 results=[] (list)
<<<END_VAR>>>
      3 |     22 |1|     for i in range(20):  # 超过10次，触发过滤
      4 |     23 |c1|         results.append(mid())  # → 调用 mid()
      5 |     24 |1|     return results
                       ⬅️ 返回值 (第24行) [42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42]
<<<END_RETURN>>>
      6 |     25 |0| 
callBy(深度3 路径1-1-1 #3): d:/Temp/test_fix_verify.py:17 in mid() ← :23 ⏱️[1.00ms] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度3 - mid): [起始行号: 17] [源码来源:gc+linecache+inspect(缓存)]
      1 |     17 |d| def mid():
      2 |     18 |c1|     return leaf()  # → 调用 leaf()
                       ⬅️ 返回值 (第18行) 42
<<<END_RETURN>>>
      3 |     19 |0| 
callBy(深度4 路径1-1-1-1 #4): d:/Temp/test_fix_verify.py:14 in leaf() ← :18 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度4 - leaf): [起始行号: 14] [源码来源:gc+linecache+inspect(缓存)]
      1 |     14 |d| def leaf():
      2 |     15 |1|     return 42
                       ⬅️ 返回值 (第15行) 42
<<<END_RETURN>>>
      3 |     16 |0| 
callBy(深度3 路径1-1-2 #5): d:/Temp/test_fix_verify.py:17 in mid() ← :23 ⏱️[503.54μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度3 - mid): [起始行号: 17] [源码来源:gc+linecache+inspect(缓存)]
      1 |     17 |d| def mid():
      2 |     18 |c1|     return leaf()  # → 调用 leaf()
                       ⬅️ 返回值 (第18行) 42
<<<END_RETURN>>>
      3 |     19 |0| 
callBy(深度4 路径1-1-2-1 #6): d:/Temp/test_fix_verify.py:14 in leaf() ← :18 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度4 - leaf): [起始行号: 14] [源码来源:gc+linecache+inspect(缓存)]
      1 |     14 |d| def leaf():
      2 |     15 |1|     return 42
                       ⬅️ 返回值 (第15行) 42
<<<END_RETURN>>>
      3 |     16 |0| 
callBy(深度3 路径1-1-3 #7): d:/Temp/test_fix_verify.py:17 in mid() ← :23 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度3 - mid): [起始行号: 17] [源码来源:gc+linecache+inspect(缓存)]
      1 |     17 |d| def mid():
      2 |     18 |c1|     return leaf()  # → 调用 leaf()
                       ⬅️ 返回值 (第18行) 42
<<<END_RETURN>>>
      3 |     19 |0| 
callBy(深度4 路径1-1-3-1 #8): d:/Temp/test_fix_verify.py:14 in leaf() ← :18 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度4 - leaf): [起始行号: 14] [源码来源:gc+linecache+inspect(缓存)]
      1 |     14 |d| def leaf():
      2 |     15 |1|     return 42
                       ⬅️ 返回值 (第15行) 42
<<<END_RETURN>>>
      3 |     16 |0| 
callBy(深度3 路径1-1-4 #9): d:/Temp/test_fix_verify.py:17 in mid() ← :23 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度3 - mid): [起始行号: 17] [源码来源:gc+linecache+inspect(缓存)]
      1 |     17 |d| def mid():
      2 |     18 |c1|     return leaf()  # → 调用 leaf()
                       ⬅️ 返回值 (第18行) 42
<<<END_RETURN>>>
      3 |     19 |0| 
callBy(深度4 路径1-1-4-1 #10): d:/Temp/test_fix_verify.py:14 in leaf() ← :18 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度4 - leaf): [起始行号: 14] [源码来源:gc+linecache+inspect(缓存)]
      1 |     14 |d| def leaf():
      2 |     15 |1|     return 42
                       ⬅️ 返回值 (第15行) 42
<<<END_RETURN>>>
      3 |     16 |0| 
callBy(深度3 路径1-1-5 #11): d:/Temp/test_fix_verify.py:17 in mid() ← :23 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度3 - mid): [起始行号: 17] [源码来源:gc+linecache+inspect(缓存)]
      1 |     17 |d| def mid():
      2 |     18 |c1|     return leaf()  # → 调用 leaf()
                       ⬅️ 返回值 (第18行) 42
<<<END_RETURN>>>
      3 |     19 |0| 
callBy(深度4 路径1-1-5-1 #12): d:/Temp/test_fix_verify.py:14 in leaf() ← :18 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度4 - leaf): [起始行号: 14] [源码来源:gc+linecache+inspect(缓存)]
      1 |     14 |d| def leaf():
      2 |     15 |1|     return 42
                       ⬅️ 返回值 (第15行) 42
<<<END_RETURN>>>
      3 |     16 |0| 
callBy(深度3 路径1-1-6 #13): d:/Temp/test_fix_verify.py:17 in mid() ← :23 ⏱️[503.54μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度3 - mid): [起始行号: 17] [源码来源:gc+linecache+inspect(缓存)]
      1 |     17 |d| def mid():
      2 |     18 |c1|     return leaf()  # → 调用 leaf()
                       ⬅️ 返回值 (第18行) 42
<<<END_RETURN>>>
      3 |     19 |0| 
callBy(深度4 路径1-1-6-1 #14): d:/Temp/test_fix_verify.py:14 in leaf() ← :18 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度4 - leaf): [起始行号: 14] [源码来源:gc+linecache+inspect(缓存)]
      1 |     14 |d| def leaf():
      2 |     15 |1|     return 42
                       ⬅️ 返回值 (第15行) 42
<<<END_RETURN>>>
      3 |     16 |0| 
callBy(深度3 路径1-1-7 #15): d:/Temp/test_fix_verify.py:17 in mid() ← :23 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度3 - mid): [起始行号: 17] [源码来源:gc+linecache+inspect(缓存)]
      1 |     17 |d| def mid():
      2 |     18 |c1|     return leaf()  # → 调用 leaf()
                       ⬅️ 返回值 (第18行) 42
<<<END_RETURN>>>
      3 |     19 |0| 
callBy(深度4 路径1-1-7-1 #16): d:/Temp/test_fix_verify.py:14 in leaf() ← :18 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度4 - leaf): [起始行号: 14] [源码来源:gc+linecache+inspect(缓存)]
      1 |     14 |d| def leaf():
      2 |     15 |1|     return 42
                       ⬅️ 返回值 (第15行) 42
<<<END_RETURN>>>
      3 |     16 |0| 
callBy(深度3 路径1-1-8 #17): d:/Temp/test_fix_verify.py:17 in mid() ← :23 ⏱️[1.00ms] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度3 - mid): [起始行号: 17] [源码来源:gc+linecache+inspect(缓存)]
      1 |     17 |d| def mid():
      2 |     18 |c1|     return leaf()  # → 调用 leaf()
                       ⬅️ 返回值 (第18行) 42
<<<END_RETURN>>>
      3 |     19 |0| 
callBy(深度4 路径1-1-8-1 #18): d:/Temp/test_fix_verify.py:14 in leaf() ← :18 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度4 - leaf): [起始行号: 14] [源码来源:gc+linecache+inspect(缓存)]
      1 |     14 |d| def leaf():
      2 |     15 |1|     return 42
                       ⬅️ 返回值 (第15行) 42
<<<END_RETURN>>>
      3 |     16 |0| 
callBy(深度3 路径1-1-9 #19): d:/Temp/test_fix_verify.py:17 in mid() ← :23 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度3 - mid): [起始行号: 17] [源码来源:gc+linecache+inspect(缓存)]
      1 |     17 |d| def mid():
      2 |     18 |c1|     return leaf()  # → 调用 leaf()
                       ⬅️ 返回值 (第18行) 42
<<<END_RETURN>>>
      3 |     19 |0| 
callBy(深度4 路径1-1-9-1 #20): d:/Temp/test_fix_verify.py:14 in leaf() ← :18 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度4 - leaf): [起始行号: 14] [源码来源:gc+linecache+inspect(缓存)]
      1 |     14 |d| def leaf():
      2 |     15 |1|     return 42
                       ⬅️ 返回值 (第15行) 42
<<<END_RETURN>>>
      3 |     16 |0| 
callBy(深度3 路径1-1-10 #21): d:/Temp/test_fix_verify.py:17 in mid() ← :23 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度3 - mid): [起始行号: 17] [源码来源:gc+linecache+inspect(缓存)]
      1 |     17 |d| def mid():
      2 |     18 |c1|     return leaf()  # → 调用 leaf()
                       ⬅️ 返回值 (第18行) 42
<<<END_RETURN>>>
      3 |     19 |0| 
callBy(深度4 路径1-1-10-1 #22): d:/Temp/test_fix_verify.py:14 in leaf() ← :18 ⏱️[~0μs] [PID:65844 主进程 TID:58896]
>>Function Code|id=func-22 (深度4 - leaf): [起始行号: 14] [源码来源:gc+linecache+inspect(缓存)]
      1 |     14 |d| def leaf():
      2 |     15 |1|     return 42
                       ⬅️ 返回值 (第15行) 42
<<<END_RETURN>>>
      3 |     16 |0| 
════════════════════════════════════════════════════════════════════════════════
TRACE_END reason=manual
<<</lprint-trace>>>

<<<TRACE_SUMMARY>>>
📋 追踪摘要
  • 起始函数: <module>() @ test_fix_verify.py:26
  • 总耗时: 345.12ms | 事件数: 615 | 显示: 22 | 省略: 0
  • 性能热点:
    🔥 1. <module> - 344.12ms (99.7%)

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
{"version":"2.0","format_version":"2026.03","rules":{"id_pattern":"call-{seq}","depth_range":[1,4],"path_format":"{parent}-{child}","time_unit":"ms","slow_threshold":500,"deep_threshold":4,"parsing":{"call_pattern":"callBy\\(深度(\\d+)\\s+路径([\\d\\-]+)\\s+#(\\d+)\\)","func_pattern":"in\\s+(\\w+)\\(\\)","file_pattern":"([^:]+:\\d+)","time_pattern":"⏱️\\[([\\d.]+)ms\\]","return_pattern":"⬅️\\s*返回值\\s*\\([^)]+\\)\\s*(.+?)(?:\\s*[═\\n]|$)","param_pattern":"💡\\s*变量\\s+(.+)","error_pattern":"(?i)error|exception|failed"},"components":{"tree_view":{"container":"trace-tree-view","header":"tree-view-header","controls":"tree-controls","content":"tree-content","node":"tree-node","node_content":"tree-node-content","children":"tree-children","toggle":"tree-toggle"},"call_elements":{"call":"lprint-trace-call","func":"lprint-trace-func","code_block":"lprint-trace-code-block","expand_container":"lprint-trace-expand-container","expand_header":"lprint-trace-expand-header","return_pre":"lprint-trace-return-pre","inline":"lprint-trace-inline","skip":"lprint-trace-skip"},"interactive_elements":{"expand_toggle":"ret-val-toggle","return_block":"return-value-block","ai_button":"ask-ai-code-btn","back_button":"back-to-tree-code-btn","search_input":"tree-search","expand_all":"expand-all-btn","collapse_all":"collapse-all-btn"},"ai_components":{"modal":"ai-modal","question_list":"ai-question-list","answer_area":"ai-answer-area"},"ui_components":{"toast":"toast","toast_container":"toast-container","modal":"modal","context_menu":"context-menu","tooltip":"tooltip"}},"id_patterns":{"call":"call-{seq}","func":"func-{seq}","expand":"expand-{call_id}","return":"return-{call_id}","tree_node":"node-{depth}-{path}","code_block":"code-{func_id}"},"css_classes":{"prefixes":{"trace":"lprint-trace","tree":"tree","ai":"ai","ui":"ui"},"modifiers":{"active":"active","collapsed":"collapsed","expanded":"expanded","highlighted":"highlighted","slow":"slow","deep":"deep","error":"error"},"elements":{"call":"call","func":"func","code":"code","return":"return","param":"param","variable":"variable"}},"display":{"max_return_length":200,"param_separator":", ","time_precision":2,"depth_indent":4,"expand_button_text":"展开","collapse_button_text":"收起"},"styling":{"slow_call_color":"#ff6b6b","deep_call_color":"#4ecdc4","error_call_color":"#ff4757","normal_call_color":"#1890ff","return_value_color":"#98c379","param_color":"#61afef"},"features":{"enable_params_extraction":true,"enable_return_expansion":true,"enable_performance_analysis":true,"enable_error_highlighting":true,"enable_deep_call_detection":true}},"metadata":{"total_calls":22,"max_depth":4,"total_time":8,"avg_time":0.36,"generated_at":"2026-04-15T13:12:17Z","parser_version":"2.1.0"},"highlights":{"slow_calls":[],"deep_calls":["4","6","8","10","12","14","16","18","20","22","4","6","8","10","12","14","16","18","20","22"],"error_calls":[]}}
```
<<</JSON_INDEX>>>


=== 追踪摘要 ===
总耗时: 0.345 秒

执行信息:
  脚本: d:\Temp\test_fix_verify.py

函数调用次数排行（Top 10）:
  1. mid - 10 次
  2. leaf - 10 次
  3. <module> - 1 次
  4. top - 1 次

文件调用次数排行（Top 5）:
  1. test_fix_verify.py - 22 次