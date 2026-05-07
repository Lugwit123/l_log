
<<<LPRINT_TRACE_META>>>
> [!AI] 本文件为 pytracemp 生成的 Python 运行时追踪日志，专为 AI 辅助分析设计。
> 阅读约定：`|1|` = 已执行/已到达（line 事件或 AST 控制流推断），`|0|` = 未执行或 tracer 超时后未观测，`|d|` = 函数定义行，`|c1|` = 有子调用的已执行行，`|c0|` = 有子调用但未执行，`💡 变量` = 该行的局部变量快照，`⬅️ 返回值` = 函数返回值。

### 追踪日志元数据

- **生成时间**：2026-05-07 11:37:58
- **pytracemp 版本**：`0.1.0`
- **line_events_enabled**：是 — 逐行记录 locals，产生 **line** 事件
- **总事件数**：**167**（本段 `trace_data` 列表长度）。分项 — **调用** 13（`call` 与 `loop_limit` 之和）、**返回** 11（`return`）、**异常** 1（`exception`）、**line** 142（逐行 locals 快照；与调用/返回/异常并列计入总条数）。
- **总耗时**：3.266 秒（`trace_start` → `trace_stop` 墙钟，含被追踪代码与 `sys.settrace` 等开销）
- **停止原因**：**正常结束**（手动调用 `trace_stop()` 或程序退出）
- **日志路径**：`D:\Temp\Log\j_disc_backup_ui\j_disc_backup_ui_refresh_muse_category_tree.md`
- **循环迭代统计条件**：需要 `trace_use_profile=False`（启用 line 事件）；当前 `trace_use_profile=False`，line_events_enabled=True。
- **循环计数说明**：Top 20 只限制展示条数，不限制计数；`trace_line_record_limit_per_location` 只限制 locals 快照写入，不再截断回跳计数。
- **循环迭代统计（Top 20）**：按 `(filename, function, loop_head_lineno)` 计数，并统计同循环相邻两次回跳间隔耗时（非单次函数调用纯 CPU 时间）。
  - `c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11525` in `refresh_muse_category_tree`: **2** 次回跳 | 耗时(相邻回跳间隔): 合计 **~0μs**、平均 **~0μs**、最大 **~0μs**（样本 1）
  - `c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11537` in `refresh_muse_category_tree`: **2** 次回跳 | 耗时(相邻回跳间隔): 合计 **~0μs**、平均 **~0μs**、最大 **~0μs**（样本 1）
  - `c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1051` in `get_cache_file_path`: **1** 次回跳 | 耗时(相邻回跳间隔): 合计 **~0μs**、平均 **~0μs**、最大 **~0μs**（样本 0）
  - `c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11524` in `refresh_muse_category_tree`: **1** 次回跳 | 耗时(相邻回跳间隔): 合计 **~0μs**、平均 **~0μs**、最大 **~0μs**（样本 0）
  - `c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11528` in `refresh_muse_category_tree`: **1** 次回跳 | 耗时(相邻回跳间隔): 合计 **~0μs**、平均 **~0μs**、最大 **~0μs**（样本 0）
  - `c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11534` in `refresh_muse_category_tree`: **1** 次回跳 | 耗时(相邻回跳间隔): 合计 **~0μs**、平均 **~0μs**、最大 **~0μs**（样本 0）
  - `c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11557` in `refresh_muse_category_tree`: **1** 次回跳 | 耗时(相邻回跳间隔): 合计 **~0μs**、平均 **~0μs**、最大 **~0μs**（样本 0）
<<</LPRINT_TRACE_META>>>


<<<lprint-trace>>>
TITLE 向前追踪 (Forward Trace)
<<<CMD_INFO>>>
 CMD:[d:\td_depot\wuzu-internal-latest\repository\packages\python\3.11.8\platform-windows\arch-AMD64\python.exe c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py --enable-trace=True --source-dir D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑 --upload-dir __ALL__ --ignore-ui-state --separate-taskbar-icon]
<<</CMD_INFO>>>
<<<CALL_TREE>>>
TREE_OVERVIEW
📊 调用链概览：
```
└─ <module> [深度1 路径1 #1] [3.2658s] 🔥 (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:12902)
    └─ main [深度2 路径1-1 #2] [~0μs] (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:12807)
        └─ refresh_muse_category_tree [深度3 路径1-1-1 #3] [3.2396s] 🔥 (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:11510)
            ├─ wrapper [深度4 路径1-1-1-1 #4] [1.2429s] 🔥 → 'L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl' (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/backup_data_center.py:182)
            │   └─ get_cache_file_path [深度5 路径1-1-1-1-1 #5] [1.2259s] 🔥 → 'L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl' (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/backup_data_center.py:1011)
            │       ├─ _effective_organization_id_for_muse_tree [深度6 路径1-1-1-1-1-1 #6] [123.97ms] → 'h42' (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/backup_data_center.py:401)
            │       └─ resolve_category_tree_cache_paths [深度6 路径1-1-1-1-1-2 #7] [295.65ms] ⚡ → ('L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl', None) (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/muse_helper/services/base_service.py:975)
            ├─ append_log [深度4 路径1-1-1-2 #8] [1.05ms] (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:12580)
            ├─ _is_qthread_running_safe [深度4 路径1-1-1-3 #9] [~0μs] → False (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:11234)
            ├─ _any_category_tree_worker_running [深度4 路径1-1-1-4 #10] [35.46ms] → False (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:11225)
            │   └─ _is_qthread_running_safe [深度5 路径1-1-1-4-1 #11] [~0μs] → False (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:11234)
            │   └─ _is_qthread_running_safe [深度5 路径1-1-1-4-2 #12] [~0μs] → False (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:11234)
            └─ append_log [深度4 路径1-1-1-5 #13] [~0μs] (c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:12580)
```
<<</CALL_TREE>>>
TRACE_DETAIL_START
════════════════════════════════════════════════════════════════════════════════
callBy(深度1 路径1 #1): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:12902 in <module>() [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度1 - <module>): [起始行号: 12902] [源码来源:文件读取]
      1 |   12902 |c0| if __name__ == "__main__":  # → 调用 main()
                   💡 变量 os=<module 'os' (frozen)>, argparse=<module 'argparse' from 'd:\\td_depot\\wuzu-internal-latest\\repository\\packages\\python\\3.11.8\\platform-windows\\arch-AMD64\\Lib\\argparse.py'>, ctypes=<module 'ctypes' from 'd:\\td_depot\\wuzu-internal-latest\\repository\\packages\\python\\3.11.8\\platform-windows\\arch-AMD64\\Lib\\ctypes\\__init__.py'>, pickle=<module 'pickle' from 'd:\\td_depot\\wuzu-internal-latest\\repository\\packages\\python\\3.11.8\\platform-windows\\arch-AMD64\\Lib\\pickle.py'>, re=<module 're' from 'd:\\td_depot\\wuzu-internal-latest\\repository\\packages\\python\\3.11.8\\platform-windows\\arch-AMD64\\Lib\\re\\__init__.py'>
<<<END_VAR>>>
      2 |   12903 |0|     main()
callBy(深度2 路径1-1 #2): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:12807 in main() ← :12902 [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度2 - main): [起始行号: 12808] [源码来源:文件读取(缓存)]
      1 |   12808 |d| def main():
                   💡 变量 parser=ArgumentParser(prog='j_disc_backup_ui.py', usage=None, description='J盘备份到Muse UI', formatter_class=<class 'argparse.HelpFormatter'>, conflict_handler='error', add_help=True), args=Namespace(enable_trace='True', source_dir='D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑', upload_dir='__ALL__', ignore_ui_state=True, taskbar_app_id='AnimUploadMuseTool.JDiscBackupToMuse.1', separate_taskbar_icon=True), enable_trace=True, runtime_taskbar_app_id='AnimUploadMuseTool.JDiscBackupToMuse.1.pid48776', app=<PySide6.QtWidgets.QApplication(0x2e6b6259a20) at 0x000002E6BA1882C0>, window=<__main__.JDiscBackupUI(0x2e6b625a5e0) at 0x000002E6BA8498C0>
<<<END_VAR>>>
      2 |   12809 |0|     """主函数：启动 J 盘备份到 Muse UI"""
      3 |   12810 |0|     # 解析命令行参数
      4 |   12811 |0|     parser = argparse.ArgumentParser(description="J盘备份到Muse UI")
      5 |   12812 |0|     parser.add_argument("--enable-trace", type=str, default="False", help="是否启用 lprint 代码追踪（默认: False）")
      6 |   12813 |0|     parser.add_argument("--source-dir", type=str, default="", help="启动时指定源目录，优先于 ui_state_cache")
      7 |   12814 |0|     parser.add_argument("--upload-dir", type=str, default="", help="启动时指定上传目录，优先于 ui_state_cache")
      8 |   12815 |0|     parser.add_argument(
      9 |   12816 |0|         "--ignore-ui-state",
     10 |   12817 |0|         action="store_true",
     11 |   12818 |0|         help="启动时跳过 ui_state_cache 中保存的 source/upload 恢复",
     12 |   12819 |0|     )
     13 |   12820 |0|     parser.add_argument(
     14 |   12821 |0|         "--taskbar-app-id",
     15 |   12822 |0|         type=str,
     16 |   12823 |0|         default="AnimUploadMuseTool.JDiscBackupToMuse.1",
     17 |   12824 |0|         help="Windows 任务栏 AppUserModelID；不同值可避免实例图标合并",
     18 |   12825 |0|     )
     19 |   12826 |0|     parser.add_argument(
     20 |   12827 |0|         "--separate-taskbar-icon",
     21 |   12828 |0|         action="store_true",
     22 |   12829 |0|         default=True,
     23 |   12830 |0|         help="为当前进程附加唯一 AppID（含 pid），使该实例与其他实例在任务栏不合并（默认开启）",
     24 |   12831 |0|     )
     25 |   12832 |0|     parser.add_argument(
     26 |   12833 |0|         "--merge-taskbar-icon",
     27 |   12834 |0|         dest="separate_taskbar_icon",
     28 |   12835 |0|         action="store_false",
     29 |   12836 |0|         help="关闭唯一 AppID，恢复同类实例任务栏合并",
     30 |   12837 |0|     )
     31 |   12838 |0| 
     32 |   12839 |0|     args = parser.parse_args()
     33 |   12840 |d|     def _to_bool(value: str) -> bool:
     34 |   12841 |0|         return str(value or "").strip().lower() in {"1", "true", "yes", "on", "y"}
     35 |   12842 |0|     enable_trace = _to_bool(args.enable_trace)
     36 |   12843 |0|     lprint(
     37 |   12844 |0|         "[启动参数][argv_parse]",
     38 |   12845 |0|         ("argv", sys.argv),
     39 |   12846 |0|         ("arg_source_dir", args.source_dir or "<empty>"),
     40 |   12847 |0|         ("arg_upload_dir", args.upload_dir or "<empty>"),
     41 |   12848 |0|         ("arg_ignore_ui_state", args.ignore_ui_state),
     42 |   12849 |0|         ("arg_taskbar_app_id", args.taskbar_app_id or "<empty>"),
     43 |   12850 |0|         ("arg_separate_taskbar_icon", args.separate_taskbar_icon),
     44 |   12851 |0|     )
     45 |   12852 |0|     runtime_taskbar_app_id = (args.taskbar_app_id or "AnimUploadMuseTool.JDiscBackupToMuse.1").strip()
     46 |   12853 |0|     if args.separate_taskbar_icon:
     47 |   12854 |0|         runtime_taskbar_app_id = f"{runtime_taskbar_app_id}.pid{os.getpid()}"
     48 |   12855 |0|     lprint(
     49 |   12856 |0|         "[启动参数][final]",
     50 |   12857 |0|         ("source_dir", args.source_dir or "<empty>"),
     51 |   12858 |0|         ("upload_dir", args.upload_dir or "<empty>"),
     52 |   12859 |0|         ("ignore_ui_state", args.ignore_ui_state),
     53 |   12860 |0|         ("taskbar_app_id", runtime_taskbar_app_id),
     54 |   12861 |0|         ("enable_trace", enable_trace),
     55 |   12862 |0|     )
     56 |   12863 |0| 
     57 |   12864 |0| 
     58 |   12865 |0|     # 配置 logging（保留用于其他模块）
     59 |   12866 |0|     logging.basicConfig(
     60 |   12867 |0|         level=logging.INFO,
     61 |   12868 |0|         format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
     62 |   12869 |0|         handlers=[logging.StreamHandler(sys.stdout)],
     63 |   12870 |0|     )
     64 |   12871 |0| 
     65 |   12872 |0|     lprint("=" * 60)
     66 |   12873 |0|     lprint("J盘备份到Muse UI 启动")
     67 |   12874 |0|     lprint("=" * 60)
     68 |   12875 |0| 
     69 |   12876 |0|     _set_windows_taskbar_app_id(runtime_taskbar_app_id)
     70 |   12877 |0|     app = QApplication(sys.argv)
     71 |   12878 |0|     lprint.trace_max_result_per_function = 4
     72 |   12879 |0|     lprint("正在初始化 UI...")
     73 |   12880 |0|     window = JDiscBackupUI(
     74 |   12881 |0|         startup_source_dir=args.source_dir,
     75 |   12882 |0|         startup_upload_dir=args.upload_dir,
     76 |   12883 |0|         ignore_ui_state=args.ignore_ui_state,
     77 |   12884 |0|         enable_trace=enable_trace,
     78 |   12885 |0|     )
     79 |   12886 |0|     window.show()
     80 |   12887 |0|     lprint("UI 窗口已显示")
     81 |   12888 |0|     try:
     82 |   12889 |0|         app.exec()
     83 |   12890 |0|     except KeyboardInterrupt:
     84 |   12891 |0|         now_text = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
     85 |   12892 |0|         pid = os.getpid()
     86 |   12893 |0|         ppid = os.getppid() if hasattr(os, "getppid") else -1
     87 |   12894 |0|         lprint(
     88 |   12895 |0|             "[KeyboardInterrupt诊断] 捕获到中断信号: "
     89 |   12896 |0|             f"time={now_text}, pid={pid}, ppid={ppid}, cwd={os.getcwd()}, argv={sys.argv}",
     90 |   12897 |0|             "warning",
     91 |   12898 |0|         )
     92 |   12899 |0|         lprint("[KeyboardInterrupt诊断] 应用被中断退出（可能来自终端/批处理/外部信号）", "warning")
callBy(深度3 路径1-1-1 #3): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:11510 in refresh_muse_category_tree() ← usualFunc.py:2276 ⏱️[3.2396s] 🔥 [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度3 - refresh_muse_category_tree): [起始行号: 11464]
      1 |   11464 |d|         def count_folders(node):
      2 |   11465 |0|             nonlocal total_folders
      3 |   11466 |1|             if isinstance(node, FolderNode):
      4 |   11467 |1|                 total_folders += 1
      5 |   11468 |1|                 for child in node.children:
      6 |   11469 |1|                     count_folders(child)
callBy(深度4 路径1-1-1-1 #4): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/backup_data_center.py:182 in wrapper() ← j_disc_backup_ui.py:11516 ⏱️[1.2429s] 🔥 [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度4 - wrapper): [起始行号: 182] [源码来源:gc+linecache+inspect(缓存)]
      1 |    182 |1|     @parm_property
                       💡 变量 args=(<anim_upload_muse_tool.j_disc_backtomuse.backup_data_center.BackupDataCenter(0x2e6b92bc4f0) at 0x000002E6B9CDDA40>, '', 'global_category_tree'), kwargs={}, func=<function BackupDataCenter.get_cache_file_path at 0x000002E6BA432480>
<<<END_VAR>>>
      2 |    183 |d|     def mark_config_persisted(self) -> None:
      3 |    184 |c1|         """公开入口：更新配置落盘快照（供 UI Helper 委托调用）。"""  # → 调用 get_cache_file_path()
                           ⬅️ 返回值 (第184行) 'L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl'
<<<END_RETURN>>>
      4 |    185 |0|         self._mark_config_persisted()
      5 |    186 |0| 
callBy(深度5 路径1-1-1-1-1 #5): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/backup_data_center.py:1011 in get_cache_file_path() ← :184 ⏱️[1.2259s] 🔥 [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度5 - get_cache_file_path): [起始行号: 1011] [源码来源:gc+linecache+inspect(缓存)]
      1 |   1011 |1|     @parm_property
                       💡 变量 self=<anim_upload_muse_tool.j_disc_backtomuse.backup_data_center.BackupDataCenter(0x2e6b92bc4f0) at 0x000002E6B9CDDA40>, folder_name='', cache_type='global_category_tree', self.config_changed=<PySide6.QtCore.SignalInstance config_changed() at 0x000002E6BA21B7B0>, self.data_changed=<PySide6.QtCore.SignalInstance data_changed() at 0x000002E6BA21AEB0>, self.destroyed=<PySide6.QtCore.SignalInstance destroyed() at 0x000002E6BA21BA70>, self.objectNameChanged=<PySide6.QtCore.SignalInstance objectNameChanged(QString) at 0x000002E6BA21BA10>, self.main_window=<__main__.JDiscBackupUI(0x2e6b625a5e0) at 0x000002E6BA8498C0>, self.ui_helper=<anim_upload_muse_tool.j_disc_backtomuse.backup_ui_helper.BackupUIHelper(0x2e6b92bc330) at 0x000002E6B9B382C0>, self.config_file_path='c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml', self.p4_mapping_config_path='c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\config\\p4_to_muse.yaml', self.source_mappings=[{'source': 'D:\\PTrack\\hangzhou\\H55项目美术资源\\角色动作资源（2025）', 'muse_lib': 'h55', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'asset_creation_mode': 'file', 'category_root': 'H55动画/动作库', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'engineering', 'business_mode': 'action_library', 'asset_creation_mode': 'file', 'category_root': '动作资源/03角色动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max'}, {'source': 'J:\\', 'muse_lib': 'rsvs', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'engineering', 'business_mode': 'backup_file', 'upload_scope': 'subdir', 'asset_creation_mode': 'directory', 'category_root': '备份资源包/J', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': '*'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_坐骑', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'asset_creation_mode': 'file', 'category_root': '动作资源/坐骑/主角_坐骑', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_宠物', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/宠物/主角_宠物', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\特效动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/悠游/特效动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\怪物动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/怪物/怪物动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\BOSS', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/Boss/BOSS', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\NPC', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/NPC/NPC', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\特效动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/道具/特效道具/特效动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\道具', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/道具/场景物件/道具', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\道具-最终整理', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/道具/场景物件/道具-最终整理', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\场景动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/道具/场景物件/场景动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\common主角表情动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/表情动作/common主角表情动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\common主角表情动画02', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/表情动作/common主角表情动画02', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\动捕_主角', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/表情动作/动捕_主角', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\主角表情动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/表情动作/主角表情动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\common男女主角共用动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/生活动作/common男女主角共用动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\坐凳子修改动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/生活动作/坐凳子修改动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\站立采集', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/生活动作/站立采集', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\common主角受击动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/主角受击/common主角受击动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\公用受击', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/主角受击/公用受击', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\碰撞通用动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/主角受击/碰撞通用动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\储备展示动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/储备展示/储备展示动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\衣柜动画动捕', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/储备展示/衣柜动画动捕', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\飞檐走壁', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/飞檐走壁/飞檐走壁', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\塞北铁索动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/飞檐走壁/塞北铁索动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\公用游泳动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/游泳/公用游泳动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_活动', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/玩法动作/主角_活动', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_玩具', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/交互动作/主角_玩具', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_双人交互', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/交互动作/主角_双人交互', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_云梦成女', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_云梦成女', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_云梦萝莉', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_云梦萝莉', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_伽蓝成女', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_伽蓝成女', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_伽蓝成男', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_伽蓝成男', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_关山成女', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_关山成女', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_关山成男', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_关山成男', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_关山正太', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_关山正太', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_关山萝莉', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_关山萝莉', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_华山成女', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_华山成女', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_华山成男', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_华山成男', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, {'source': 'D:\
... [已截断，共 28397 字符], self.source_mapping_by_normalized_path={'d:\\ptrack\\hangzhou\\h55项目美术资源\\角色动作资源（2025）': {'source': 'D:\\PTrack\\hangzhou\\H55项目美术资源\\角色动作资源（2025）', 'muse_lib': 'h55', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'asset_creation_mode': 'file', 'category_root': 'H55动画/动作库', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'engineering', 'business_mode': 'action_library', 'asset_creation_mode': 'file', 'category_root': '动作资源/03角色动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max'}, 'j:': {'source': 'J:\\', 'muse_lib': 'rsvs', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'engineering', 'business_mode': 'backup_file', 'upload_scope': 'subdir', 'asset_creation_mode': 'directory', 'category_root': '备份资源包/J', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': '*'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角_坐骑': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_坐骑', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'asset_creation_mode': 'file', 'category_root': '动作资源/坐骑/主角_坐骑', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角_宠物': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_宠物', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/宠物/主角_宠物', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\特效动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\特效动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/道具/特效道具/特效动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\怪物动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\怪物动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/怪物/怪物动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\boss': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\BOSS', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/Boss/BOSS', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\npc': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\NPC', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/NPC/NPC', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\道具': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\道具', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/道具/场景物件/道具', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\道具-最终整理': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\道具-最终整理', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/道具/场景物件/道具-最终整理', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\场景动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\场景动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/道具/场景物件/场景动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\common主角表情动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\common主角表情动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/表情动作/common主角表情动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\common主角表情动画02': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\common主角表情动画02', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/表情动作/common主角表情动画02', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\动捕_主角': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\动捕_主角', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/表情动作/动捕_主角', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\主角表情动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\主角表情动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/表情动作/主角表情动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\common男女主角共用动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\common男女主角共用动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/生活动作/common男女主角共用动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\坐凳子修改动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\坐凳子修改动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/生活动作/坐凳子修改动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\站立采集': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\站立采集', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/生活动作/站立采集', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\common主角受击动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\common主角受击动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/主角受击/common主角受击动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\公用受击': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\公用受击', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/主角受击/公用受击', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\碰撞通用动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\碰撞通用动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/主角受击/碰撞通用动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\储备展示动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\储备展示动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/储备展示/储备展示动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\衣柜动画动捕': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\衣柜动画动捕', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/储备展示/衣柜动画动捕', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\飞檐走壁': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\飞檐走壁', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/飞檐走壁/飞檐走壁', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\塞北铁索动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\塞北铁索动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/飞檐走壁/塞北铁索动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\公用游泳动画': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\common公用\\公用游泳动画', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/游泳/公用游泳动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角_活动': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_活动', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/玩法动作/主角_活动', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角_玩具': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_玩具', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/交互动作/主角_玩具', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角_双人交互': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_双人交互', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/交互动作/主角_双人交互', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\门派_云梦成女': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_云梦成女', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_云梦成女', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\门派_云梦萝莉': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_云梦萝莉', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_云梦萝莉', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\门派_伽蓝成女': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_伽蓝成女', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_伽蓝成女', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\门派_伽蓝成男': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_伽蓝成男', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_伽蓝成男', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\门派_关山成女': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_关山成女', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_关山成女', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\门派_关山成男': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_关山成男', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'category_root': '动作资源/主角通用/门派动作/门派_关山成男', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max', 'upload_scope': 'all'}, 'd:\\ptrack\\hangzhou\\h42项目美术资源\\正式资源\\03角色动画\\主角\\门派_关山正太': {'source': 'D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角\\门派_关山正太', 'tag_rule_file': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/mark_rule/H42.json', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com'
... [已截断，共 31410 字符], self.path_mapping_entries=[{'source': '//hangzhou/H55项目美术资源/角色动作资源（2025）', 'muse_lib': 'h55', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'asset_creation_mode': 'file', 'category_root': 'H55动画/动作库', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max'}, {'source': 'D:/PTrack/hangzhou/H55项目美术资源/角色动作资源（2025）', 'muse_lib': 'h55', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'simpleaction', 'business_mode': 'action_library', 'asset_creation_mode': 'file', 'category_root': 'H55动画/动作库', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max'}, {'source': 'D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画', 'muse_lib': 'h42', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'engineering', 'business_mode': 'action_library', 'asset_creation_mode': 'file', 'category_root': '动作资源/03角色动画', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': 'max'}, {'source': 'J://', 'muse_lib': 'rsvs', 'muse_user': 'wb.fengqingqing@mesg.corp.netease.com', 'muse_asset_type': 'engineering', 'business_mode': 'backup_file', 'upload_scope': 'subdir', 'asset_creation_mode': 'directory', 'category_root': '备份资源包/J', 'category_start': 0, 'category_end': -1, 'asset_name_index': -1, 'force_update': False, 'force_update_file': False, 'sync_ext': '*'}, {'source': 'D:/TD_Depot/Wuzu_dev/mywork/muse_work/H42/h42_p4_to_muse.yaml'}], self.is_syncing_muse_settings=False
<<<END_VAR>>>
      2 |   1012 |d|     def get_cache_file_path(self, folder_name: FolderName, cache_type: CacheKindStr = "scan") -> FilePath:
      3 |   1013 |0|         """获取缓存文件路径
      4 |   1014 |0|         
      5 |   1015 |0|         Args:
      6 |   1016 |0|             folder_name: 文件夹名称
      7 |   1017 |0|             cache_type: 缓存类型（"scan" 或 "upload"）
      8 |   1018 |0|         
      9 |   1019 |0|         Returns:
     10 |   1020 |0|             缓存文件的完整路径
     11 |   1021 |0|         """
     12 |   1022 |0|         # 每个文件夹有独立的缓存子目录
     13 |   1023 |1|         if self._config is None:
     14 |   1024 |0|             raise ValueError("配置未初始化，无法获取缓存目录")
     15 |   1025 |1|         cache_dir = self._config.cache_dir
                           💡 变量 cache_dir='L:\\temp\\j_muse_backup_new' (str)
<<<END_VAR>>>
     16 |   1026 |c1|         org = (self._effective_organization_id_for_muse_tree() or "rsvs").strip() or "rsvs"  # → 调用 _effective_organization_id_for_muse_tree()
                           💡 变量 org='h42' (str)
<<<END_VAR>>>
     17 |   1027 |1|         at = (getattr(self._config, "asset_type", None) or "").strip() or "engineering"
                           💡 变量 at='simpleaction' (str)
<<<END_VAR>>>
     18 |   1028 |0| 
     19 |   1029 |0|         # pattern 已含完整路径，渲染后直接就是最终路径
     20 |   1030 |1|         if cache_type == "scan":
     21 |   1031 |0|             full_path = self._scan_cache_filename(folder_name)  # 内部已 format
     22 |   1032 |1|         elif cache_type == "branch_category_tree":
     23 |   1033 |0|             muse_tool = getattr(self.main_window, "muse_tool", None)
     24 |   1034 |0|             helper = getattr(muse_tool, "muse_helper", None) if muse_tool is not None else None
     25 |   1035 |0|             category_service = getattr(helper, "category_service", None) if helper is not None else None
     26 |   1036 |0|             if category_service is None:
     27 |   1037 |0|                 raise ValueError("muse_helper.category_service 不可用，无法解析 branch 分类树缓存路径")
     28 |   1038 |0|             _full_cache_path, branch_cache_path = category_service.resolve_category_tree_cache_paths(
     29 |   1039 |0|                 cache_dir=category_service.cache_dir,
     30 |   1040 |0|                 muse_base_path_segments=(str(folder_name).strip(),)
     31 |   1041 |0|             )
     32 |   1042 |0|             if not branch_cache_path:
     33 |   1043 |0|                 raise ValueError("无法解析 branch 分类树缓存路径：folder_name 为空")
     34 |   1044 |0|             full_path = branch_cache_path
     35 |   1045 |1|         elif cache_type == "global_category_tree":
     36 |   1046 |1|             muse_tool = getattr(self.main_window, "muse_tool", None)
                               💡 变量 muse_tool=<anim_upload_muse_tool.j_disc_backtomuse.muse_tool.MuseTool object at 0x000002E6BA963B90> (MuseTool)
<<<END_VAR>>>
     37 |   1047 |1|             helper = getattr(muse_tool, "muse_helper", None) if muse_tool is not None else None
                               💡 变量 helper=<anim_upload_muse_tool.muse_helper.main.MuseHelper object at 0x000002E6BBAA5DD0> (MuseHelper)
<<<END_VAR>>>
     38 |   1048 |1|             category_service = getattr(helper, "category_service", None) if helper is not None else None
                               💡 变量 category_service=<anim_upload_muse_tool.muse_helper.services.category_service.CategoryService object at 0x000002E6BBAD8F10> (CategoryService)
<<<END_VAR>>>
     39 |   1049 |1|             if category_service is None:
     40 |   1050 |0|                 raise ValueError("muse_helper.category_service 不可用，无法解析 global 分类树缓存路径")
     41 |   1051 |c1|             global_cache_path, _branch_cache_path = category_service.resolve_category_tree_cache_paths(  # → 调用 resolve_category_tree_cache_paths()
     42 |   1052 |1|                 cache_dir=category_service.cache_dir,
     43 |   1053 |1|                 muse_base_path_segments=None
     44 |   1054 |0|             )
     45 |   1055 |1|             full_path = global_cache_path
     46 |   1056 |0|         else:
     47 |   1057 |0|             full_path = self._upload_cache_tpl.format(
     48 |   1058 |0|                 cache_dir=cache_dir, folder_name=folder_name,
     49 |   1059 |0|                 organization_id=org, asset_type=at,
     50 |   1060 |0|             )
     51 |   1061 |0| 
     52 |   1062 |0|         # 确保父目录存在
     53 |   1063 |1|         os.makedirs(os.path.dirname(full_path), exist_ok=True)
     54 |   1064 |1|         return full_path
                           ⬅️ 返回值 (第1064行) 'L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl'
<<<END_RETURN>>>
     55 |   1065 |0| 
callBy(深度6 路径1-1-1-1-1-1 #6): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/backup_data_center.py:401 in _effective_organization_id_for_muse_tree() ← :1026 ⏱️[123.97ms] [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度6 - _effective_organization_id_for_muse_tree): [起始行号: 401] [源码来源:gc+linecache+inspect(缓存)]
      1 |    401 |d|     def _effective_organization_id_for_muse_tree(self) -> Optional[str]:
      2 |    402 |0|         """
      3 |    403 |0|         解析分类树 JSON 时使用的组织 ID（与顶层键名一致，如 ``rsvs``）。
      4 |    404 |0|         配置为空时与 ``MuseHelper`` / 缓存文件名默认一致，使用 ``rsvs``；否则
      5 |    405 |0|         ``organization_id`` 为假值（如 ``\"\"``）时无法解析，文档会始终为空。
      6 |    406 |0|         """
      7 |    407 |1|         if self._config is None:
      8 |    408 |0|             return None
      9 |    409 |1|         oid = (self._config.organization_id or "").strip()
                           💡 变量 oid='h42' (str)
<<<END_VAR>>>
     10 |    410 |1|         return oid or "rsvs"
                           ⬅️ 返回值 (第410行) 'h42'
<<<END_RETURN>>>
     11 |    411 |0| 
callBy(深度6 路径1-1-1-1-1-2 #7): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/muse_helper/services/base_service.py:975 in resolve_category_tree_cache_paths() ← backup_data_center.py:1051 ⏱️[295.65ms] ⚡ [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度6 - resolve_category_tree_cache_paths): [起始行号: 975] [源码来源:gc+linecache+inspect(缓存)]
      1 |    975 |1|     @beartype
                       💡 变量 self=<anim_upload_muse_tool.muse_helper.services.category_service.CategoryService object at 0x000002E6BBAD8F10>, cache_dir='L:\\temp\\j_muse_backup_new', muse_base_path_segments=None, self.cache_dir='L:\\temp\\j_muse_backup_new', self.enable_file_cache=True, self.enable_memory_cache=True, self.muse_client=<muse_python_api.main.MuseClient object at 0x000002E6BA8B0F90>, self.organization_id='h42', self.asset_type='simpleaction', self.max_concurrent=5, self.timeout=60.0
<<<END_VAR>>>
      2 |    976 |d|     def resolve_category_tree_cache_paths(
      3 |    977 |0|         self,
      4 |    978 |0|         cache_dir: str,
      5 |    979 |0|         muse_base_path_segments: Optional[Sequence[str]] = None,
      6 |    980 |0|     ) -> Tuple[str, Optional[str]]:
      7 |    981 |0|         """
      8 |    982 |0|         解析分类树缓存文件路径（全量 + 分支）。
      9 |    983 |0| 
     10 |    984 |0|         说明：
     11 |    985 |0|         - 仅负责路径生成，不访问 API，不读写缓存内容。
     12 |    986 |0|         - 路径命名规则与 category/asset 缓存接口保持一致。
     13 |    987 |0|         """
     14 |    988 |1|         normalized_cache_dir = cache_dir.strip()
                           💡 变量 normalized_cache_dir='L:\\temp\\j_muse_backup_new' (str)
<<<END_VAR>>>
     15 |    989 |1|         if not normalized_cache_dir:
     16 |    990 |0|             raise ValueError("cache_dir 为空，无法解析分类树缓存路径")
     17 |    991 |0| 
     18 |    992 |1|         organization_id = (self.organization_id or "").strip() or "rsvs"
                           💡 变量 organization_id='h42' (str)
<<<END_VAR>>>
     19 |    993 |1|         asset_type = (self.asset_type or "").strip() or "engineering"
                           💡 变量 asset_type='simpleaction' (str)
<<<END_VAR>>>
     20 |    994 |1|         cache_filename = f"muse_category_tree_{organization_id}_{asset_type}.pkl"
                           💡 变量 cache_filename='muse_category_tree_h42_simpleaction.pkl' (str)
<<<END_VAR>>>
     21 |    995 |0| 
     22 |    996 |1|         full_cache_file = os.path.join(normalized_cache_dir, cache_filename)
                           💡 变量 full_cache_file='L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl' (str)
<<<END_VAR>>>
     23 |    997 |1|         branch_cache_file: Optional[str] = None
                           💡 变量 branch_cache_file=None (NoneType)
<<<END_VAR>>>
     24 |    998 |1|         if muse_base_path_segments:
     25 |    999 |0|             segment_list = [str(seg).strip() for seg in muse_base_path_segments if str(seg).strip()]
     26 |   1000 |0|             leaf_name = segment_list[-1] if segment_list else ""
     27 |   1001 |0|             if leaf_name:
     28 |   1002 |0|                 safe_leaf_name = re.sub(r'[\\/:*?"<>|]+', "_", leaf_name).strip(" .")
     29 |   1003 |0|                 if not safe_leaf_name:
     30 |   1004 |0|                     safe_leaf_name = "branch"
     31 |   1005 |0|                 branch_path_key = "/".join(segment_list)
     32 |   1006 |0|                 dir_id = hashlib.md5(branch_path_key.encode("utf-8")).hexdigest()[:8]
     33 |   1007 |0|                 branch_filename = (
     34 |   1008 |0|                     f"brunch_{safe_leaf_name}(md5_{dir_id})_"
     35 |   1009 |0|                     f"muse_category_tree_{organization_id}_{asset_type}.pkl"
     36 |   1010 |0|                 )
     37 |   1011 |0|                 branch_cache_file = os.path.join(normalized_cache_dir, branch_filename)
     38 |   1012 |1|         return full_cache_file, branch_cache_file
                           ⬅️ 返回值 (第1012行) ('L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl', None)
<<<END_RETURN>>>
     39 |   1013 |0| 
callBy(深度4 路径1-1-1-2 #8): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:12580 in append_log() ← :11523 ⏱️[1.05ms] [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度4 - append_log): [起始行号: 12580] [源码来源:gc+linecache+inspect(缓存)]
      1 |   12580 |d|         def _on_canceled() -> None:
                           💡 变量 message='[分类树缓存][目标文件] L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl'
<<<END_VAR>>>
      2 |   12581 |0|             self.ui.statusLabel.setText("正在取消 Muse资产根级2026过滤...")
      3 |   12582 |1|             progress.setLabelText("正在取消异步检查，请等待当前请求结束...")
                               ⬅️ 返回值 (第12582行) None
<<<END_RETURN>>>
      4 |   12583 |0|             lprint("[muse_asset_filter][root_2026_async_cancel_requested]")
      5 |   12584 |0| 
callBy(深度4 路径1-1-1-3 #9): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:11234 in _is_qthread_running_safe() ← :11557 ⏱️[~0μs] [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度4 - _is_qthread_running_safe): [起始行号: 11234] [源码来源:gc+linecache+inspect(缓存)]
      1 |   11234 |d|     def _any_category_tree_worker_running(self) -> bool:
                       💡 变量 thread_obj=None, attr_name='_folder_muse_thread'
<<<END_VAR>>>
      2 |   11235 |0|         ft = getattr(self, "_category_tree_fetch_thread", None)
      3 |   11236 |1|         if self._is_qthread_running_safe(ft, "_category_tree_fetch_thread"):
      4 |   11237 |0|             return True
      5 |   11238 |0|         rt = getattr(self, "_category_tree_refresh_thread", None)
      6 |   11239 |1|         if self._is_qthread_running_safe(rt, "_category_tree_refresh_thread"):
      7 |   11240 |0|             return True
      8 |   11241 |1|         return False
      9 |   11242 |1| 
                   ⬅️ 返回值 (第11242行) False
<<<END_RETURN>>>
callBy(深度4 路径1-1-1-4 #10): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:11225 in _any_category_tree_worker_running() ← :11567 ⏱️[35.46ms] [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度4 - _any_category_tree_worker_running): [起始行号: 11225] [源码来源:gc+linecache+inspect(缓存)]
      1 |   11225 |d|         def check_node(node):
      2 |   11226 |1|             nonlocal exists_count, not_exists_count
      3 |   11227 |c1|   # → 调用 _is_qthread_running_safe()
                   💡 变量 ft=False (bool)
<<<END_VAR>>>
      4 |   11228 |1|             if isinstance(node, FolderNode):
      5 |   11229 |1|                 # 使用节点内置的方法检查是否存在
      6 |   11230 |c1|                 if node.muse_path:  # → 调用 _is_qthread_running_safe()
                                   💡 变量 rt=False (bool)
<<<END_VAR>>>
      7 |   11231 |1|                     if node.muse_path_exists_in_category_tree(self.data_center):
      8 |   11232 |1|                         exists_count += 1
                                           ⬅️ 返回值 (第11232行) False
<<<END_RETURN>>>
      9 |   11233 |0|                     else:
     10 |   11234 |0|                         not_exists_count += 1
     11 |   11235 |0| 
     12 |   11236 |0|                 # 递归检查子节点
     13 |   11237 |0|                 for child in node.children:
     14 |   11238 |0|                     check_node(child)
     15 |   11239 |0| 
callBy(深度5 路径1-1-1-4-1 #11): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:11234 in _is_qthread_running_safe() ← :11227 ⏱️[~0μs] [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度5 - _is_qthread_running_safe): [起始行号: 11234] [源码来源:gc+linecache+inspect(缓存)]
      1 |   11234 |d|     def _any_category_tree_worker_running(self) -> bool:
                       💡 变量 thread_obj=None, attr_name='_category_tree_fetch_thread'
<<<END_VAR>>>
      2 |   11235 |0|         ft = getattr(self, "_category_tree_fetch_thread", None)
      3 |   11236 |1|         if self._is_qthread_running_safe(ft, "_category_tree_fetch_thread"):
      4 |   11237 |0|             return True
      5 |   11238 |0|         rt = getattr(self, "_category_tree_refresh_thread", None)
      6 |   11239 |1|         if self._is_qthread_running_safe(rt, "_category_tree_refresh_thread"):
      7 |   11240 |0|             return True
      8 |   11241 |1|         return False
      9 |   11242 |1| 
                   ⬅️ 返回值 (第11242行) False
<<<END_RETURN>>>
callBy(深度5 路径1-1-1-4-2 #12): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:11234 in _is_qthread_running_safe() ← :11230 ⏱️[~0μs] [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度5 - _is_qthread_running_safe): [起始行号: 11234] [源码来源:gc+linecache+inspect(缓存)]
      1 |   11234 |d|     def _any_category_tree_worker_running(self) -> bool:
                       💡 变量 thread_obj=<repr failed>, attr_name='_category_tree_refresh_thread'
<<<END_VAR>>>
      2 |   11235 |0|         ft = getattr(self, "_category_tree_fetch_thread", None)
      3 |   11236 |1|         if self._is_qthread_running_safe(ft, "_category_tree_fetch_thread"):
      4 |   11237 |0|             return True
      5 |   11238 |0|         rt = getattr(self, "_category_tree_refresh_thread", None)
      6 |   11239 |1|         if self._is_qthread_running_safe(rt, "_category_tree_refresh_thread"):
      7 |   11240 |0|             return True
      8 |   11241 |1|         return False
      9 |   11242 |0| 
callBy(深度4 路径1-1-1-5 #13): c:/users/wb.fengqingqing/packages/anim_upload_muse_tool/999.0.0/src/anim_upload_muse_tool/j_disc_backtomuse/j_disc_backup_ui.py:12580 in append_log() ← :11575 ⏱️[~0μs] [PID:48776 主进程 TID:53372]
>>Function Code|id=func-13 (深度4 - append_log): [起始行号: 12580] [源码来源:gc+linecache+inspect(缓存)]
      1 |   12580 |d|         def _on_canceled() -> None:
                           💡 变量 message='开始从 Muse 更新分类树（忽略本地旧缓存）…'
<<<END_VAR>>>
      2 |   12581 |0|             self.ui.statusLabel.setText("正在取消 Muse资产根级2026过滤...")
      3 |   12582 |1|             progress.setLabelText("正在取消异步检查，请等待当前请求结束...")
                               ⬅️ 返回值 (第12582行) None
<<<END_RETURN>>>
      4 |   12583 |0|             lprint("[muse_asset_filter][root_2026_async_cancel_requested]")
      5 |   12584 |0| 
════════════════════════════════════════════════════════════════════════════════
TRACE_END reason=manual
<<</lprint-trace>>>

<<<TRACE_SUMMARY>>>
📋 追踪摘要
  • 起始函数: <module>() @ j_disc_backup_ui.py:12902
  • 总耗时: 3.2658s | 事件数: 167 | 显示: 13 | 省略: 0
  • 性能热点:
    🔥 1. refresh_muse_category_tree - 3.2396s (99.2%)
    🔥 2. append_log - 1.2429s (38.1%)
    🔥 3. _any_category_tree_worker_running - 1.2259s (37.5%)

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
{"version":"2.0","format_version":"2026.03","rules":{"id_pattern":"call-{seq}","depth_range":[1,6],"path_format":"{parent}-{child}","time_unit":"ms","slow_threshold":500,"deep_threshold":4,"parsing":{"call_pattern":"callBy\\(深度(\\d+)\\s+路径([\\d\\-]+)\\s+#(\\d+)\\)","func_pattern":"in\\s+(\\w+)\\(\\)","file_pattern":"([^:]+:\\d+)","time_pattern":"⏱️\\[([\\d.]+)ms\\]","return_pattern":"⬅️\\s*返回值\\s*\\([^)]+\\)\\s*(.+?)(?:\\s*[═\\n]|$)","param_pattern":"💡\\s*变量\\s+(.+)","error_pattern":"(?i)error|exception|failed"},"components":{"tree_view":{"container":"trace-tree-view","header":"tree-view-header","controls":"tree-controls","content":"tree-content","node":"tree-node","node_content":"tree-node-content","children":"tree-children","toggle":"tree-toggle"},"call_elements":{"call":"lprint-trace-call","func":"lprint-trace-func","code_block":"lprint-trace-code-block","expand_container":"lprint-trace-expand-container","expand_header":"lprint-trace-expand-header","return_pre":"lprint-trace-return-pre","inline":"lprint-trace-inline","skip":"lprint-trace-skip"},"interactive_elements":{"expand_toggle":"ret-val-toggle","return_block":"return-value-block","ai_button":"ask-ai-code-btn","back_button":"back-to-tree-code-btn","search_input":"tree-search","expand_all":"expand-all-btn","collapse_all":"collapse-all-btn"},"ai_components":{"modal":"ai-modal","question_list":"ai-question-list","answer_area":"ai-answer-area"},"ui_components":{"toast":"toast","toast_container":"toast-container","modal":"modal","context_menu":"context-menu","tooltip":"tooltip"}},"id_patterns":{"call":"call-{seq}","func":"func-{seq}","expand":"expand-{call_id}","return":"return-{call_id}","tree_node":"node-{depth}-{path}","code_block":"code-{func_id}"},"css_classes":{"prefixes":{"trace":"lprint-trace","tree":"tree","ai":"ai","ui":"ui"},"modifiers":{"active":"active","collapsed":"collapsed","expanded":"expanded","highlighted":"highlighted","slow":"slow","deep":"deep","error":"error"},"elements":{"call":"call","func":"func","code":"code","return":"return","param":"param","variable":"variable"}},"display":{"max_return_length":200,"param_separator":", ","time_precision":2,"depth_indent":4,"expand_button_text":"展开","collapse_button_text":"收起"},"styling":{"slow_call_color":"#ff6b6b","deep_call_color":"#4ecdc4","error_call_color":"#ff4757","normal_call_color":"#1890ff","return_value_color":"#98c379","param_color":"#61afef"},"features":{"enable_params_extraction":true,"enable_return_expansion":true,"enable_performance_analysis":true,"enable_error_highlighting":true,"enable_deep_call_detection":true}},"metadata":{"total_calls":23,"max_depth":6,"total_time":6898,"avg_time":299.91,"generated_at":"2026-05-07T11:37:58Z","parser_version":"2.1.0"},"highlights":{"slow_calls":["3","4","5","3","4","5"],"deep_calls":["4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","4","5","6","7","8","9","10","11","12","13"],"error_calls":[]}}
```
<<</JSON_INDEX>>>


=== 追踪摘要 ===
总耗时: 3.266 秒

执行信息:
  脚本: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py
  参数:
    --enable-trace=True
    --source-dir
    D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑
    --upload-dir
    __ALL__
    --ignore-ui-state
    --separate-taskbar-icon

函数调用次数排行（Top 10）:
  1. _is_qthread_running_safe - 3 次
  2. append_log - 2 次
  3. <module> - 1 次
  4. main - 1 次
  5. refresh_muse_category_tree - 1 次
  6. wrapper - 1 次
  7. get_cache_file_path - 1 次
  8. _effective_organization_id_for_muse_tree - 1 次
  9. resolve_category_tree_cache_paths - 1 次
  10. _any_category_tree_worker_running - 1 次

文件调用次数排行（Top 5）:
  1. j_disc_backup_ui.py - 9 次
  2. backup_data_center.py - 3 次
  3. base_service.py - 1 次