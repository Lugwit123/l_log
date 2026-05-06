
<<<LPRINT_TRACE_META>>>
> [!AI] 本文件为 pytracemp 生成的 Python 运行时追踪日志，专为 AI 辅助分析设计。
> 阅读约定：`|1|` = 已执行，`|0|` = 未执行或 tracer 超时后未观测，`|d|` = 函数定义行，`|c1|` = 有子调用的已执行行，`|c0|` = 有子调用但未执行，`💡 变量` = 该行的局部变量快照，`⬅️ 返回值` = 函数返回值。

### 追踪日志元数据

- **生成时间**：2026-04-20 17:44:06
- **pytracemp 版本**：`0.1.0`
- **trace_line_locals**：是 — 逐行记录 locals，产生 **line** 事件
- **总事件数**：**162**（本段 `trace_data` 列表长度）。分项 — **调用** 21（`call` 与 `loop_limit` 之和）、**返回** 21（`return`）、**异常** 0（`exception`）、**line** 120（逐行 locals 快照；与调用/返回/异常并列计入总条数）。
- **总耗时**：2.476 秒（`trace_start` → `trace_stop` 墙钟，含被追踪代码与 `sys.settrace` 等开销）
- **停止原因**：**正常结束**（手动调用 `trace_stop()` 或程序退出）
- **日志路径**：`D:\Temp\Log\test_trace_simple\test_trace_simple.md`
<<</LPRINT_TRACE_META>>>


<<<lprint-trace>>>
TITLE 向前追踪 (Forward Trace)
<<<CMD_INFO>>>
 CMD:[D:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\python_env\lugwit_python.exe d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py]
<<</CMD_INFO>>>
<<<CALL_TREE>>>
TREE_OVERVIEW
📊 调用链概览：
```
└─ <module> [深度1 路径1 #1] [2.4750s] 🔥 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:120)
    ├─ main_function [深度2 路径1-1 #2] [1.0183s] 🔥 → 55 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:67)
    │   └─ process_data [深度3 路径1-1-1 #3] [1.0072s] 🔥 → [1, 4, 9, 16, 25] (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:50)
    │       └─ helper_function [深度4 路径1-1-1-1 #4] [×5次, 合计 1.0042s] [平均 200.85ms] → 1 (首次) 🔥 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30)
    └─ secondary_function [深度2 路径1-2 #9] [1.4267s] 🔥 → (101, [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, ... (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:91)
        ├─ batch_process [深度3 路径1-2-1 #10] [1.0158s] 🔥 → [1, 4, 9, 16, 25] (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:58)
        │   ├─ process_data [深度4 路径1-2-1-1 #11] [402.85ms] 🔥 → [1, 4] (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:50)
        │   │   └─ helper_function [深度5 路径1-2-1-1-1 #12] [201.31ms] ⚡ → 1 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30)
        │   │   └─ helper_function [深度5 路径1-2-1-1-2 #13] [201.54ms] ⚡ → 4 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30)
        │   └─ process_data [深度4 路径1-2-1-2 #14] [604.38ms] 🔥 → [9, 16, 25] (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:50)
        │       └─ helper_function [深度5 路径1-2-1-2-1 #15] [200.57ms] ⚡ → 9 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30)
        │       └─ helper_function [深度5 路径1-2-1-2-2 #16] [200.63ms] ⚡ → 16 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30)
        │       └─ helper_function [深度5 路径1-2-1-2-3 #17] [200.67ms] ⚡ → 25 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30)
        └─ advanced_process [深度3 路径1-2-2 #18] [403.84ms] 🔥 → 96 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:42)
            └─ calculate_factorial [深度4 路径1-2-2-1 #19] [~0μs] → 6 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:36)
                └─ calculate_factorial [深度5 路径1-2-2-1-1 #20] [~0μs] → 2 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:36)
                    └─ calculate_factorial [深度6 路径1-2-2-1-1-1 #21] [~0μs] → 1 (d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:36)
```
<<</CALL_TREE>>>
TRACE_DETAIL_START
════════════════════════════════════════════════════════════════════════════════
callBy(深度1 路径1 #1): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:120 in <module>() ⏱️[2.4750s] 🔥 [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度1 - <module>): [起始行号: 120] [源码来源:文件读取]
      1 |    120 |c1|     result1 = main_function()  # → 第1个根调用（路径1-x-y）  # → 调用 main_function()
                       💡 变量 sys=<module 'sys' (built-in)>, os=<module 'os' (frozen)>, time=<module 'time' (built-in)>, lprint_info=True, lprint=<pytracemp.usualFunc.LPrint object at 0x000001DCF9CD7390>
<<<END_VAR>>>
      2 |    121 |1|     lprint("")
      3 |    122 |c1|     result2 = secondary_function()  # → 第2个根调用（路径2-x-y）  # → 调用 secondary_function()
                       💡 变量 result2=tuple (result2), 157 字符
(101, [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5])
<<<END_VAR>>>
      4 |    123 |0|     
      5 |    124 |0| 
      6 |    125 |1|     lprint("追踪已停止")
      7 |    126 |0|     
      8 |    127 |0|     # 4. 显示追踪结果（会自动写入日志文件）
      9 |    128 |1|     lprint("")
     10 |    129 |1|     lprint("## 追踪结果")
     11 |    130 |0|     # console_output=True：在控制台打印追踪 Markdown；默认 False 仅写文件并提示路径
     12 |    131 |0| 
     13 |    132 |0|     
     14 |    133 |1|     lprint("")
     15 |    134 |1|     lprint("**第一个结果**: {}", result1)
     16 |    135 |1|     lprint("**第二个结果**: {}", result2)
     17 |    136 |0|     # lprint("**总结果**: {}", result1 + result2)
     18 |    137 |1|     lprint("=" * 50)
     19 |    138 |0|     
     20 |    139 |0|     # 日志文件会自动保存到: logs/test_trace_simple.md
     21 |    140 |1|     print("\n追踪日志已保存，请查看生成的 Markdown 文件")
                       ⬅️ 返回值 (第140行) None
<<<END_RETURN>>>
callBy(深度2 路径1-1 #2): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:67 in main_function() ← :120 ⏱️[1.0183s] 🔥 [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度2 - main_function): [起始行号: 67] [源码来源:文件读取]
      1 |     67 |d| def main_function():
      2 |     68 |0|     """主函数：手动控制追踪"""
      3 |     69 |0|     lprint("开始执行主函数")
      4 |     70 |1|     lprint.trace_start(
      5 |     71 |1|         clear_log=True,
      6 |     72 |1|         auto_result=True,
      7 |     73 |1|         trace_line_locals=True,
      8 |     74 |1|         trace_log_stem="test_trace_simple",
      9 |     75 |1|         trace_path_id_limit = 200
     10 |     76 |1|     )
     11 |     77 |1|     # 测试数据
     12 |     78 |1|     numbers = [1, 2, 3, 4, 5]
                       💡 变量 numbers=[1, 2, 3, 4, 5] (list)
<<<END_VAR>>>
     13 |     79 |1|     lprint("输入数据: {}", numbers)
     14 |     80 |0|     
     15 |     81 |0|     # 调用处理函数
     16 |     82 |c1|     results = process_data(numbers)  # → 调用 process_data()
                       💡 变量 results=[1, 4, 9, 16, 25] (list)
<<<END_VAR>>>
     17 |     83 |1|     lprint("处理结果: {}", results)
     18 |     84 |0|     
     19 |     85 |0|     # 计算总和
     20 |     86 |1|     total = sum(results)
                       💡 变量 total=55 (int)
<<<END_VAR>>>
     21 |     87 |1|     lprint("总和: {}", total)
     22 |     88 |0|     
     23 |     89 |1|     return total
                       ⬅️ 返回值 (第89行) 55
<<<END_RETURN>>>
callBy(深度3 路径1-1-1 #3): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:50 in process_data() ← :82 ⏱️[1.0072s] 🔥 [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度3 - process_data): [起始行号: 50] [源码来源:gc+linecache+inspect]
      1 |     50 |d| def process_data(data):
                   💡 变量 data=[1, 2, 3, 4, 5]
<<<END_VAR>>>
      2 |     51 |0|     """处理数据：对列表中每个元素求平方"""
      3 |     52 |1|     results = []
                       💡 变量 results=[] (list)
<<<END_VAR>>>
      4 |     53 |1|     for item in data:
      5 |     54 |c1|         square = helper_function(item)  # → 调用 helper_function()
                           💡 变量 square=1 (int)
<<<END_VAR>>>
      6 |     55 |1|         results.append(square)
      7 |     56 |1|     return results
                       ⬅️ 返回值 (第56行) [1, 4, 9, 16, 25]
<<<END_RETURN>>>
      8 |     57 |0| 
callBy(深度4 路径1-1-1-1 #4): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30 in helper_function() ← :54 ⏱️[200.77ms] ⚡ [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度4 - helper_function): [起始行号: 30] [源码来源:gc+linecache+inspect]
      1 |     30 |d| def helper_function(x):
                   💡 变量 x=1
<<<END_VAR>>>
      2 |     31 |0|     """辅助函数：计算平方"""
      3 |     32 |1|     result = x * x
                       💡 变量 result=1 (int)
<<<END_VAR>>>
      4 |     33 |1|     time.sleep(0.2)  # 模拟耗时操作
      5 |     34 |1|     return result
                       ⬅️ 返回值 (第34行) 1
<<<END_RETURN>>>
      6 |     35 |0| 
callBy(深度4 路径1-1-1-2 #5): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30 in helper_function() ← :54 ⏱️[201.38ms] ⚡ [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度4 - helper_function): [起始行号: 30] [源码来源:gc+linecache+inspect(缓存)]
      1 |     30 |d| def helper_function(x):
                   💡 变量 x=2
<<<END_VAR>>>
      2 |     31 |0|     """辅助函数：计算平方"""
      3 |     32 |1|     result = x * x
                       💡 变量 result=4 (int)
<<<END_VAR>>>
      4 |     33 |1|     time.sleep(0.2)  # 模拟耗时操作
      5 |     34 |1|     return result
                       ⬅️ 返回值 (第34行) 4
<<<END_RETURN>>>
      6 |     35 |0| 
callBy(深度4 路径1-1-1-3 #6): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30 in helper_function() ← :54 ⏱️[201.54ms] ⚡ [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度4 - helper_function): [起始行号: 30] [源码来源:gc+linecache+inspect(缓存)]
      1 |     30 |d| def helper_function(x):
                   💡 变量 x=3
<<<END_VAR>>>
      2 |     31 |0|     """辅助函数：计算平方"""
      3 |     32 |1|     result = x * x
                       💡 变量 result=9 (int)
<<<END_VAR>>>
      4 |     33 |1|     time.sleep(0.2)  # 模拟耗时操作
      5 |     34 |1|     return result
                       ⬅️ 返回值 (第34行) 9
<<<END_RETURN>>>
      6 |     35 |0| 
callBy(深度4 路径1-1-1-4 #7): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30 in helper_function() ← :54 ⏱️[200.38ms] ⚡ [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度4 - helper_function): [起始行号: 30] [源码来源:gc+linecache+inspect(缓存)]
      1 |     30 |d| def helper_function(x):
                   💡 变量 x=4
<<<END_VAR>>>
      2 |     31 |0|     """辅助函数：计算平方"""
      3 |     32 |1|     result = x * x
                       💡 变量 result=16 (int)
<<<END_VAR>>>
      4 |     33 |1|     time.sleep(0.2)  # 模拟耗时操作
      5 |     34 |1|     return result
                       ⬅️ 返回值 (第34行) 16
<<<END_RETURN>>>
      6 |     35 |0| 
callBy(深度4 路径1-1-1-5 #8): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30 in helper_function() ← :54 ⏱️[200.15ms] ⚡ [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度4 - helper_function): [起始行号: 30] [源码来源:gc+linecache+inspect(缓存)]
      1 |     30 |d| def helper_function(x):
                   💡 变量 x=5
<<<END_VAR>>>
      2 |     31 |0|     """辅助函数：计算平方"""
      3 |     32 |1|     result = x * x
                       💡 变量 result=25 (int)
<<<END_VAR>>>
      4 |     33 |1|     time.sleep(0.2)  # 模拟耗时操作
      5 |     34 |1|     return result
                       ⬅️ 返回值 (第34行) 25
<<<END_RETURN>>>
      6 |     35 |0| 
callBy(深度2 路径1-2 #9): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:91 in secondary_function() ← :122 ⏱️[1.4267s] 🔥 [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度2 - secondary_function): [起始行号: 91] [源码来源:gc+linecache+inspect]
      1 |     91 |d| def secondary_function():
      2 |     92 |0|     """第二个主函数：创建第2个根调用"""
      3 |     93 |1|     lprint("执行第二个主函数")
      4 |     94 |0|     
      5 |     95 |0|     # 多批次处理
      6 |     96 |1|     batches = [[1, 2], [3, 4, 5]]
                       💡 变量 batches=[[1, 2], [3, 4, 5]] (list)
<<<END_VAR>>>
      7 |     97 |c1|     results = batch_process(batches)  # → 调用 batch_process()
                       💡 变量 results=[1, 4, 9, 16, 25] (list)
<<<END_VAR>>>
      8 |     98 |0|     
      9 |     99 |0|     # 高级处理
     10 |    100 |c1|     advanced_result = advanced_process(3)  # → 调用 advanced_process()
                       💡 变量 advanced_result=96 (int)
<<<END_VAR>>>
     11 |    101 |1|     lprint("高级处理结果: {}", advanced_result)
     12 |    102 |0| 
     13 |    103 |0|     # 测试长变量
     14 |    104 |1|     a = [1, 2, 3, 4, 5]*10
                       💡 变量 a=list (a), 150 字符
[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
<<<END_VAR>>>
     15 |    105 |0|     
     16 |    106 |1|     return len(results) + advanced_result,a
                       ⬅️ 返回值 (第106行) (101, [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5... len=2)
(101, [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5])
<<<END_RETURN>>>
     17 |    107 |0| 
callBy(深度3 路径1-2-1 #10): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:58 in batch_process() ← :97 ⏱️[1.0158s] 🔥 [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度3 - batch_process): [起始行号: 58] [源码来源:gc+linecache+inspect]
      1 |     58 |d| def batch_process(batches):
                   💡 变量 batches=[[1, 2], [3, 4, 5]]
<<<END_VAR>>>
      2 |     59 |0|     """批量处理：处理多个批次"""
      3 |     60 |1|     all_results = []
                       💡 变量 all_results=[] (list)
<<<END_VAR>>>
      4 |     61 |1|     for i, batch in enumerate(batches):
      5 |     62 |1|         lprint("处理批次 {}", i + 1)
      6 |     63 |c1|         batch_results = process_data(batch)  # → 调用 process_data()
                           💡 变量 batch_results=[1, 4] (list)
<<<END_VAR>>>
      7 |     64 |1|         all_results.extend(batch_results)
      8 |     65 |1|     return all_results
                       ⬅️ 返回值 (第65行) [1, 4, 9, 16, 25]
<<<END_RETURN>>>
      9 |     66 |0| 
callBy(深度4 路径1-2-1-1 #11): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:50 in process_data() ← :63 ⏱️[402.85ms] 🔥 [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度4 - process_data): [起始行号: 50] [源码来源:gc+linecache+inspect(缓存)]
      1 |     50 |d| def process_data(data):
                   💡 变量 data=[1, 2]
<<<END_VAR>>>
      2 |     51 |0|     """处理数据：对列表中每个元素求平方"""
      3 |     52 |1|     results = []
                       💡 变量 results=[] (list)
<<<END_VAR>>>
      4 |     53 |1|     for item in data:
      5 |     54 |c1|         square = helper_function(item)  # → 调用 helper_function()
                           💡 变量 square=1 (int)
<<<END_VAR>>>
      6 |     55 |1|         results.append(square)
      7 |     56 |1|     return results
                       ⬅️ 返回值 (第56行) [1, 4]
<<<END_RETURN>>>
      8 |     57 |0| 
callBy(深度5 路径1-2-1-1-1 #12): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30 in helper_function() ← :54 ⏱️[201.31ms] ⚡ [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度5 - helper_function): [起始行号: 30] [源码来源:gc+linecache+inspect(缓存)]
      1 |     30 |d| def helper_function(x):
                   💡 变量 x=1
<<<END_VAR>>>
      2 |     31 |0|     """辅助函数：计算平方"""
      3 |     32 |1|     result = x * x
                       💡 变量 result=1 (int)
<<<END_VAR>>>
      4 |     33 |1|     time.sleep(0.2)  # 模拟耗时操作
      5 |     34 |1|     return result
                       ⬅️ 返回值 (第34行) 1
<<<END_RETURN>>>
      6 |     35 |0| 
callBy(深度5 路径1-2-1-1-2 #13): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30 in helper_function() ← :54 ⏱️[201.54ms] ⚡ [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度5 - helper_function): [起始行号: 30] [源码来源:gc+linecache+inspect(缓存)]
      1 |     30 |d| def helper_function(x):
                   💡 变量 x=2
<<<END_VAR>>>
      2 |     31 |0|     """辅助函数：计算平方"""
      3 |     32 |1|     result = x * x
                       💡 变量 result=4 (int)
<<<END_VAR>>>
      4 |     33 |1|     time.sleep(0.2)  # 模拟耗时操作
      5 |     34 |1|     return result
                       ⬅️ 返回值 (第34行) 4
<<<END_RETURN>>>
      6 |     35 |0| 
callBy(深度4 路径1-2-1-2 #14): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:50 in process_data() ← :63 ⏱️[604.38ms] 🔥 [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度4 - process_data): [起始行号: 50] [源码来源:gc+linecache+inspect(缓存)]
      1 |     50 |d| def process_data(data):
                   💡 变量 data=[3, 4, 5]
<<<END_VAR>>>
      2 |     51 |0|     """处理数据：对列表中每个元素求平方"""
      3 |     52 |1|     results = []
                       💡 变量 results=[] (list)
<<<END_VAR>>>
      4 |     53 |1|     for item in data:
      5 |     54 |c1|         square = helper_function(item)  # → 调用 helper_function()
                           💡 变量 square=9 (int)
<<<END_VAR>>>
      6 |     55 |1|         results.append(square)
      7 |     56 |1|     return results
                       ⬅️ 返回值 (第56行) [9, 16, 25]
<<<END_RETURN>>>
      8 |     57 |0| 
callBy(深度5 路径1-2-1-2-1 #15): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30 in helper_function() ← :54 ⏱️[200.57ms] ⚡ [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度5 - helper_function): [起始行号: 30] [源码来源:gc+linecache+inspect(缓存)]
      1 |     30 |d| def helper_function(x):
                   💡 变量 x=3
<<<END_VAR>>>
      2 |     31 |0|     """辅助函数：计算平方"""
      3 |     32 |1|     result = x * x
                       💡 变量 result=9 (int)
<<<END_VAR>>>
      4 |     33 |1|     time.sleep(0.2)  # 模拟耗时操作
      5 |     34 |1|     return result
                       ⬅️ 返回值 (第34行) 9
<<<END_RETURN>>>
      6 |     35 |0| 
callBy(深度5 路径1-2-1-2-2 #16): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30 in helper_function() ← :54 ⏱️[200.63ms] ⚡ [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度5 - helper_function): [起始行号: 30] [源码来源:gc+linecache+inspect(缓存)]
      1 |     30 |d| def helper_function(x):
                   💡 变量 x=4
<<<END_VAR>>>
      2 |     31 |0|     """辅助函数：计算平方"""
      3 |     32 |1|     result = x * x
                       💡 变量 result=16 (int)
<<<END_VAR>>>
      4 |     33 |1|     time.sleep(0.2)  # 模拟耗时操作
      5 |     34 |1|     return result
                       ⬅️ 返回值 (第34行) 16
<<<END_RETURN>>>
      6 |     35 |0| 
callBy(深度5 路径1-2-1-2-3 #17): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:30 in helper_function() ← :54 ⏱️[200.67ms] ⚡ [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度5 - helper_function): [起始行号: 30] [源码来源:gc+linecache+inspect(缓存)]
      1 |     30 |d| def helper_function(x):
                   💡 变量 x=5
<<<END_VAR>>>
      2 |     31 |0|     """辅助函数：计算平方"""
      3 |     32 |1|     result = x * x
                       💡 变量 result=25 (int)
<<<END_VAR>>>
      4 |     33 |1|     time.sleep(0.2)  # 模拟耗时操作
      5 |     34 |1|     return result
                       ⬅️ 返回值 (第34行) 25
<<<END_RETURN>>>
      6 |     35 |0| 
callBy(深度3 路径1-2-2 #18): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:42 in advanced_process() ← :100 ⏱️[403.84ms] 🔥 [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度3 - advanced_process): [起始行号: 42] [源码来源:gc+linecache+inspect]
      1 |     42 |d| def advanced_process(value):
                   💡 变量 value=3
<<<END_VAR>>>
      2 |     43 |0|     """高级处理：包含多个子调用"""
      3 |     44 |0|     # 调用多个不同的辅助函数
      4 |     45 |1|     square = helper_function(value)
                       💡 变量 square=9 (int)
<<<END_VAR>>>
      5 |     46 |c1|     factorial = calculate_factorial(value)  # → 调用 calculate_factorial()
                       💡 变量 factorial=6 (int)
<<<END_VAR>>>
      6 |     47 |1|     cube = helper_function(square)  # 嵌套调用
                       💡 变量 cube=81 (int)
<<<END_VAR>>>
      7 |     48 |1|     return square + factorial + cube
                       ⬅️ 返回值 (第48行) 96
<<<END_RETURN>>>
      8 |     49 |0| 
callBy(深度4 路径1-2-2-1 #19): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:36 in calculate_factorial() ← :46 ⏱️[~0μs] [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度4 - calculate_factorial): [起始行号: 36] [源码来源:gc+linecache+inspect]
      1 |     36 |d| def calculate_factorial(n):
                   💡 变量 n=3
<<<END_VAR>>>
      2 |     37 |0|     """计算阶乘"""
      3 |     38 |1|     if n <= 1:
      4 |     39 |0|         return 1
      5 |     40 |c1|     return n * calculate_factorial(n - 1)  # → 调用 calculate_factorial()
                       ⬅️ 返回值 (第40行) 6
<<<END_RETURN>>>
      6 |     41 |0| 
callBy(深度5 路径1-2-2-1-1 #20): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:36 in calculate_factorial() ← :40 ⏱️[~0μs] [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度5 - calculate_factorial): [起始行号: 36] [源码来源:gc+linecache+inspect(缓存)]
      1 |     36 |d| def calculate_factorial(n):
                   💡 变量 n=2
<<<END_VAR>>>
      2 |     37 |0|     """计算阶乘"""
      3 |     38 |1|     if n <= 1:
      4 |     39 |0|         return 1
      5 |     40 |c1|     return n * calculate_factorial(n - 1)  # → 调用 calculate_factorial()
                       ⬅️ 返回值 (第40行) 2
<<<END_RETURN>>>
      6 |     41 |0| 
callBy(深度6 路径1-2-2-1-1-1 #21): d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py:36 in calculate_factorial() ← :40 ⏱️[~0μs] [PID:221540 主进程 TID:153848]
>>Function Code|id=func-21 (深度6 - calculate_factorial): [起始行号: 36] [源码来源:gc+linecache+inspect(缓存)]
      1 |     36 |d| def calculate_factorial(n):
                   💡 变量 n=1
<<<END_VAR>>>
      2 |     37 |0|     """计算阶乘"""
      3 |     38 |1|     if n <= 1:
      4 |     39 |1|         return 1
                           ⬅️ 返回值 (第39行) 1
<<<END_RETURN>>>
      5 |     40 |c0|     return n * calculate_factorial(n - 1)  # → 调用 calculate_factorial()
      6 |     41 |0| 
════════════════════════════════════════════════════════════════════════════════
TRACE_END reason=manual
<<</lprint-trace>>>

<<<TRACE_SUMMARY>>>
📋 追踪摘要
  • 起始函数: <module>() @ test_trace_simple.py:120
  • 总耗时: 2.4763s | 事件数: 162 | 显示: 21 | 省略: 0
  • 性能热点:
    🔥 1. <module> - 2.4750s (99.9%)
    🔥 2. main_function - 1.0183s (41.1%)
    🔥 3. helper_function - 1.0072s (40.7%)

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
{"version":"2.0","format_version":"2026.03","rules":{"id_pattern":"call-{seq}","depth_range":[1,0],"path_format":"{parent}-{child}","time_unit":"ms","slow_threshold":500,"deep_threshold":4,"parsing":{"call_pattern":"callBy\\(深度(\\d+)\\s+路径([\\d\\-]+)\\s+#(\\d+)\\)","func_pattern":"in\\s+(\\w+)\\(\\)","file_pattern":"([^:]+:\\d+)","time_pattern":"⏱️\\[([\\d.]+)ms\\]","return_pattern":"⬅️\\s*返回值\\s*\\([^)]+\\)\\s*(.+?)(?:\\s*[═\\n]|$)","param_pattern":"💡\\s*变量\\s+(.+)","error_pattern":"(?i)error|exception|failed"},"components":{"tree_view":{"container":"trace-tree-view","header":"tree-view-header","controls":"tree-controls","content":"tree-content","node":"tree-node","node_content":"tree-node-content","children":"tree-children","toggle":"tree-toggle"},"call_elements":{"call":"lprint-trace-call","func":"lprint-trace-func","code_block":"lprint-trace-code-block","expand_container":"lprint-trace-expand-container","expand_header":"lprint-trace-expand-header","return_pre":"lprint-trace-return-pre","inline":"lprint-trace-inline","skip":"lprint-trace-skip"},"interactive_elements":{"expand_toggle":"ret-val-toggle","return_block":"return-value-block","ai_button":"ask-ai-code-btn","back_button":"back-to-tree-code-btn","search_input":"tree-search","expand_all":"expand-all-btn","collapse_all":"collapse-all-btn"},"ai_components":{"modal":"ai-modal","question_list":"ai-question-list","answer_area":"ai-answer-area"},"ui_components":{"toast":"toast","toast_container":"toast-container","modal":"modal","context_menu":"context-menu","tooltip":"tooltip"}},"id_patterns":{"call":"call-{seq}","func":"func-{seq}","expand":"expand-{call_id}","return":"return-{call_id}","tree_node":"node-{depth}-{path}","code_block":"code-{func_id}"},"css_classes":{"prefixes":{"trace":"lprint-trace","tree":"tree","ai":"ai","ui":"ui"},"modifiers":{"active":"active","collapsed":"collapsed","expanded":"expanded","highlighted":"highlighted","slow":"slow","deep":"deep","error":"error"},"elements":{"call":"call","func":"func","code":"code","return":"return","param":"param","variable":"variable"}},"display":{"max_return_length":200,"param_separator":", ","time_precision":2,"depth_indent":4,"expand_button_text":"展开","collapse_button_text":"收起"},"styling":{"slow_call_color":"#ff6b6b","deep_call_color":"#4ecdc4","error_call_color":"#ff4757","normal_call_color":"#1890ff","return_value_color":"#98c379","param_color":"#61afef"},"features":{"enable_params_extraction":true,"enable_return_expansion":true,"enable_performance_analysis":true,"enable_error_highlighting":true,"enable_deep_call_detection":true}},"metadata":{"total_calls":0,"max_depth":0,"total_time":0,"avg_time":0.0,"generated_at":"2026-04-20T17:44:06Z","parser_version":"2.1.0"},"highlights":{"slow_calls":[],"deep_calls":[],"error_calls":[]}}
```
<<</JSON_INDEX>>>


=== 追踪摘要 ===
总耗时: 2.476 秒

执行信息:
  脚本: d:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/pytracemp/test/test_trace_simple.py

函数调用次数排行（Top 10）:
  1. helper_function - 10 次
  2. process_data - 3 次
  3. calculate_factorial - 3 次
  4. <module> - 1 次
  5. main_function - 1 次
  6. secondary_function - 1 次
  7. batch_process - 1 次
  8. advanced_process - 1 次

文件调用次数排行（Top 5）:
  1. test_trace_simple.py - 21 次