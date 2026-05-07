<<<LPRINT_DATE_LOG_META>>>
```json
{
  "log_kind": "lprint_date_log",
  "schema_version": "1.0",
  "module_name": "j_disc_backup_ui",
  "extension": "md",
  "generated_by": "pytracemp.LogFileHandler"
}
```
<<</LPRINT_DATE_LOG_META>>>


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 00:11:03 ======
[2026-05-07 00:11:02] [2026-05-07 00:11:02] {WARNING}
[arg0] "[FILTER][START]"
[arg1] ["keyword", ""]
[arg2] ["filter_column", "全部列"]
[arg3] ["filter_column_index", -1]
[arg4] ["signal_arg_count", 0]
[arg5] ["source_count", 279339]   ----code_context : lprint(
            "[FILTER][START]",
            ("keyword", keyword_text),
            ("filter_column", filter_column_name),
            ("filter_column_index", filter_column_index),
            ("signal_arg_count", len(args)),
            ("source_count", len(self.filter_source_nodes)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11755, -fn: apply_filters, 打印次数: 1/4   

[2026-05-07 00:11:03] [2026-05-07 00:11:03] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 238637]
[arg4] ["muse_asset_nodes", 40702]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2324, -fn: update_file_tree, 打印次数: 2/4   

[2026-05-07 00:11:03] [2026-05-07 00:11:03] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40702]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1397, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 4/4   

[2026-05-07 00:11:03] [2026-05-07 00:11:03] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 319]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3732, -fn: _collect_selective_metrics_roots, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 00:11:09 ======
[2026-05-07 00:11:07] [2026-05-07 00:11:07] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3855, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 4/4   

[2026-05-07 00:11:07] [2026-05-07 00:11:07] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.871545]
[arg2] ["folders", 51201]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3865, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 4/4   

[2026-05-07 00:11:07] [2026-05-07 00:11:07] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=1812727403472, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3914, -fn: _apply_effective_metrics_by_path, 打印次数: 4/4   

[2026-05-07 00:11:08] [2026-05-07 00:11:08] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51201]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3974, -fn: _apply_effective_metrics_by_path, 打印次数: 4/4   

[2026-05-07 00:11:08] [2026-05-07 00:11:08] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=1812727403472, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2370, -fn: update_file_tree, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 00:11:12 ======
[2026-05-07 00:11:10] [2026-05-07 00:11:10] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=1812677544112, import_class_id=1812677544112, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4335, -fn: _build_folder_item, 打印次数: 2/4   

[2026-05-07 00:11:10] [2026-05-07 00:11:10] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 1.508636s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2386, -fn: update_file_tree, 打印次数: 2/4   

[2026-05-07 00:11:12] [2026-05-07 00:11:12] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 227 个 item，用时 2.231796s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2402, -fn: update_file_tree, 打印次数: 2/4   

[2026-05-07 00:11:12] [2026-05-07 00:11:12] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40702]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2418, -fn: update_file_tree, 打印次数: 2/4   

[2026-05-07 00:11:12] [2026-05-07 00:11:12] {WARNING}
[arg0] "[status_filter][tree_filter_restored]"
[arg1] ["previous_filter", "<unknown_or_already_all>"]
[arg2] ["status_text", "全部"]   ----code_context : lprint(
                        "[status_filter][tree_filter_restored]",
                        ("previous_filter", previous_filter or "<unknown_or_already_all>"),
                        ("status_text", status_text or "全部"),
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11813, -fn: apply_filters, 打印次数: 1/4   

[2026-05-07 00:11:12] [2026-05-07 00:11:12] {WARNING}
[arg0] "[FILTER][RESULT]"
[arg1] ["keyword", ""]
[arg2] ["filter_column", "全部列"]
[arg3] ["filter_column_index", -1]
[arg4] ["folder_name", "H42"]
[arg5] ["status", "全部"]
[arg6] ["matched_count", 10557]
[arg7] ["source_count", 279339]
[arg8] ["file_node_count", 238637]
[arg9] ["muse_asset_node_count", 40702]
[arg10] ["matched_tree_item_count", 0]
[arg11] ["visible_tree_item_count", 658]   ----code_context : lprint(
            "[FILTER][RESULT]",
            ("keyword", keyword),
            ("filter_column", filter_column_name),
            ("filter_column_index", filter_column_index),
            ("folder_name", str(folder_name or "").strip()),
            ("status", str(status or "").strip()),
            ("matched_count", len(filtered)),
            ("source_count", len(source_nodes)),
            ("file_node_count", len(self.all_files)),
            ("muse_asset_node_count", len(self._get_muse_asset_nodes_from_tree())),
            ("matched_tree_item_count", matched_item_count),
            ("visible_tree_item_count", visible_item_count),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11857, -fn: apply_filters, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 00:11:15 ======
[2026-05-07 00:11:13] [2026-05-07 00:11:13] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 4/4   

[2026-05-07 00:11:13] [2026-05-07 00:11:13] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 00:11:34 ======
[2026-05-07 00:11:31] [2026-05-07 00:11:31] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 4/4   

[2026-05-07 00:11:31] [2026-05-07 00:11:31] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3773, -fn: _flush_scan_cache_after_metrics, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:10:32 ======
[2026-05-07 10:10:29] [2026-05-07 10:10:29] {WARNING}
[arg0] "已收缩所有树节点"   ----code_context : lprint("已收缩所有树节点")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9498, -fn: toggle_tree_expansion, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:11:14 ======
[2026-05-07 10:11:13] [2026-05-07 10:11:13] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67f9344f045de032d412c4f0/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67f9344f045de032d412c4f0/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 1/6   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:13:11 ======
[2026-05-07 10:13:10] [2026-05-07 10:13:10] {WARNING}
[arg0] "删除资产后缓存同步完成: 内存缓存更新 1 项/移除 1 条, 文件缓存更新 1 个/移除 1 条"
[arg1] "info"   ----code_context : lprint(
                "删除资产后缓存同步完成: "
                f"内存缓存更新 {in_memory_updated_files} 项/移除 {in_memory_removed_assets} 条, "
                f"文件缓存更新 {file_updated_count} 个/移除 {file_removed_assets} 条",
                "info",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:8524, -fn: _sync_asset_cache_after_delete, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:13:38 ======
[2026-05-07 10:13:37] [2026-05-07 10:13:37] {WARNING}
[arg0] "删除资产完成：成功 1，失败 0"
[arg1] "info"   ----code_context : lprint(summary, "info") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:8434, -fn: _delete_muse_assets, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:18:17 ======
[2026-05-07 10:18:17] [2026-05-07 10:18:17] {WARNING}
[arg0] "窗口正在关闭..."   ----code_context : lprint("窗口正在关闭...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4621, -fn: on_window_close, 打印次数: 1/4   

[2026-05-07 10:18:17] [2026-05-07 10:18:17] {WARNING}
[arg0] "[ui_state] 已写入: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : lprint(f"[ui_state] 已写入: {self._ui_state_cache_file}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12366, -fn: save_combo_state_to_temp_file, 打印次数: 1/4   

[2026-05-07 10:18:17] [2026-05-07 10:18:17] {WARNING}
[arg0] "[ui_state] 已保存: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : lprint(f"[ui_state] 已保存: {self._ui_state_cache_file}")
        except Exception: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4626, -fn: on_window_close, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 43 条 @ 2026-05-07 10:20:11 ======
[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "正在创建数据中心..."   ----code_context : lprint("正在创建数据中心...")
        self.data_center = BackupDataCenter(self) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4225, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "配置加载成功: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置加载成功: {config_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:682, -fn: load_default_config, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "UI已根据配置更新（全量）"   ----code_context : lprint("UI已根据配置更新（全量）")
                return 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1992, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "数据中心创建完成"   ----code_context : lprint("数据中心创建完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4227, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['backup_source_dir']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2040, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2114, -fn: save_config_to_yaml_file, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "[启动参数][应用后配置]"
[arg1] ["startup_source_dir", "J:"]
[arg2] ["startup_upload_dir", "H42"]
[arg3] ["startup_upload_is_all", false]
[arg4] ["config_source_dir", "J:"]   ----code_context : lprint(
            "[启动参数][应用后配置]",
            ("startup_source_dir", self._startup_source_dir or "<empty>"),
            ("startup_upload_dir", self._startup_upload_dir or "<empty>"),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ("config_source_dir", self.data_center.config.backup_source_dir),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4240, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "[启动参数]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]   ----code_context : lprint(
                "[启动参数]",
                ("source_dir", self._startup_source_dir or "<使用配置>"),
                ("upload_dir", upload_dir_label),
                ("ignore_ui_state", self._ignore_ui_state),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4251, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("MuseTool 初始化参数:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4280, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "MuseTool 初始化参数:"   ----code_context : lprint("MuseTool 初始化参数:")
            lprint(f"  user_email: {user_email}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4281, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {user_email}")
            lprint(f"  organization_id: {organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4282, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {organization_id}")
            lprint(f"  asset_type: {asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4283, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {asset_type}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4284, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:07] [2026-05-07 10:20:07] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4285, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "MuseTool 初始化成功"   ----code_context : lprint("MuseTool 初始化成功")
            lprint("验证 MuseTool 运行身份:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4294, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "验证 MuseTool 运行身份:"   ----code_context : lprint("验证 MuseTool 运行身份:")
            lprint(f"  user_email: {identity.get('user_email', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4295, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {identity.get('user_email', '')}")
            lprint(f"  organization_id: {identity.get('organization_id', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4296, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {identity.get('organization_id', '')}")
            lprint(f"  asset_type: {identity.get('asset_type', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4297, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {identity.get('asset_type', '')}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4298, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "从 p4_to_muse.yaml 加载本地 source 预设: 58 个"   ----code_context : lprint(f"从 p4_to_muse.yaml 加载本地 source 预设: {len(mappings)} 个")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1535, -fn: refresh_source_mappings_from_yaml, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "正在扫描 J: 的文件夹列表..."   ----code_context : lprint(f"正在扫描 {backup_source_dir} 的文件夹列表...")
            try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4872, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "扫描到 67 个文件夹"   ----code_context : lprint(f"扫描到 {len(folders)} 个文件夹")
            except (PermissionError, OSError) as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4878, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "[upload_dir_combo][init_start]"
[arg1] ["source_dir", "J:"]
[arg2] ["preferred_upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["startup_upload_explicit", true]
[arg5] ["startup_upload_is_all", false]   ----code_context : lprint(
            "[upload_dir_combo][init_start]",
            ("source_dir", backup_source_dir),
            ("preferred_upload_dir", preferred_upload_dir or "<empty>"),
            ("ignore_ui_state", self._ignore_ui_state),
            ("startup_upload_explicit", self._startup_upload_dir_is_explicit),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4898, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "[upload_dir_combo][candidates]"
[arg1] [
    "candidate_values",
    [
        "H42"
    ]
]
[arg2] ["folder_count", 67]   ----code_context : lprint(
                "[upload_dir_combo][candidates]",
                ("candidate_values", candidate_values),
                ("folder_count", len(folders)),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4923, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "已加载 67 个文件夹到下拉框: ['00_doc', '123456', '2024风霁周会产出展示', '2025风霁周会产出展示', '2026风霁周会产出展示', '@Recycle', 'A49', 'Anim_library', 'Asset_library', 'DM139', 'DM142', 'GUI', 'GYL_Tools', 'H18', 'H42', 'H52', 'H55', 'H64', 'H65', 'H65_Dasha Taran', 'H70_临时', 'H72', 'H73', 'H74', 'H74-风霁月会产出材料', 'H75', 'H77', 'HXX(模板)', 'MA167', 'MA67', 'MA73', 'Projects', 'RigWork', 'S4', 'S7', 'SteamLibrary', 'U5', 'UE5 Demo', 'UXX', 'Vendor', 'X23', 'X33', 'X9', 'YY45', 'YY63', 'artlib_preview', 'blender', 'maya', 'origin_disk_J', 'prod_projs', 'render', 'sp', 'temp', 'work', 'zb', '临时文件', '供应商资料共享', '动捕演员资料库', '动画工具', '动画月会资料', '年度Showreel', '战斗场景——大鸭头', '游戏解包资源汇总', '竞标需求', '网易蛋仔派对', '迅雷云盘', '风雨项目集双周会产出材料']"   ----code_context : lprint(f"已加载 {len(folders)} 个文件夹到下拉框: {folders}")
        if selected_folder: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4952, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "uploadDirComboBox 自动选择: H42"   ----code_context : lprint(f"uploadDirComboBox 自动选择: {selected_folder}")
        lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4954, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "[upload_dir_combo][init_done]"
[arg1] ["selected_folder", "H42"]
[arg2] ["current_text", "H42"]
[arg3] ["business_value", "H42"]   ----code_context : lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4955, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "扫描方式初始化完成，当前方式: os.scandir (性能优化)"   ----code_context : lprint(f"扫描方式初始化完成，当前方式: {ScanMethod.get_display_name(current_method)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5225, -fn: init_scan_method_ui, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "路径设置页已加载 5 条映射"   ----code_context : lprint(f"路径设置页已加载 {len(mappings)} 条映射")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5110, -fn: load_path_mapping_table, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "[日志前缀][模式切换]"
[arg1] ["business_mode", "backup_file"]
[arg2] ["date_log_prefix", "j_disc_backup_file"]   ----code_context : lprint(
                "[日志前缀][模式切换]",
                ("business_mode", mode),
                ("date_log_prefix", log_prefix),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4537, -fn: _apply_date_log_prefix_by_mode, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2114, -fn: save_config_to_yaml_file, 打印次数: 2/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2114, -fn: save_config_to_yaml_file, 打印次数: 3/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['muse_root_category']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2040, -fn: apply_config_from_data_center, 打印次数: 2/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2114, -fn: save_config_to_yaml_file, 打印次数: 4/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "[trace][init]"
[arg1] ["enabled", true]
[arg2] ["source", "startup_arg"]   ----code_context : lprint(
            "[trace][init]",
            ("enabled", bool(self._startup_enable_trace)),
            ("source", "startup_arg"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5450, -fn: _init_trace_toggle_checkbox, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state"   ----code_context : lprint("[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4348, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "[启动缓存][候选]"
[arg1] ["current_ui_folder", "H42"]
[arg2] [
    "candidate_folders",
    [
        "H42"
    ]
]
[arg3] ["startup_upload_is_all", false]   ----code_context : lprint(
                "[启动缓存][候选]",
                ("current_ui_folder", current_ui_folder or "<empty>"),
                ("candidate_folders", candidate_folders),
                ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4570, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "发现Pickle缓存文件: L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"发现Pickle缓存文件: {pkl_cache_file}")
                lprint(f"正在自动加载缓存: folder={folder}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4586, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "正在自动加载缓存: folder=H42"   ----code_context : lprint(f"正在自动加载缓存: folder={folder}")
                success = self.data_center.load_scan_cache(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4587, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:20:08] [2026-05-07 10:20:08] {WARNING}
[arg0] "正在加载扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl, 大小: 363.96MB"   ----code_context : lprint(f"正在加载扫描缓存(Pickle): {pkl_path}, 大小: {size_mb:.2f}MB") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1396, -fn: load_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 10:20:32 ======
[2026-05-07 10:20:31] [2026-05-07 10:20:31] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:20:31] [2026-05-07 10:20:31] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.360635s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:20:31] [2026-05-07 10:20:31] {WARNING}
[arg0] "[qtree_root_node] 开始 render_root_node_change"   ----code_context : lprint("[qtree_root_node] 开始 render_root_node_change")
                    self.ui_helper.render_root_node_change(node, _from_data_center=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:925, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:20:31] [2026-05-07 10:20:31] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 238637]
[arg4] ["muse_asset_nodes", 40702]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2324, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:20:31] [2026-05-07 10:20:31] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40702]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1397, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 1/4   

[2026-05-07 10:20:32] [2026-05-07 10:20:32] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 319]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3756, -fn: _collect_selective_metrics_roots, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:20:38 ======
[2026-05-07 10:20:37] [2026-05-07 10:20:37] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3879, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 10:20:37] [2026-05-07 10:20:37] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 5.4243]
[arg2] ["folders", 51201]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3889, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 10:20:37] [2026-05-07 10:20:37] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2055421619472, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3938, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   

[2026-05-07 10:20:38] [2026-05-07 10:20:38] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51201]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3998, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:20:41 ======
[2026-05-07 10:20:41] [2026-05-07 10:20:41] {WARNING}
[arg0] "[effective_metrics] 根节点统计耗时: total=2.948382s, children_loop=2.948368s, writeback=0.000005s, children=20, attachment_total=726026, package_size_total=11909265090657"   ----code_context : lprint(
                "[effective_metrics] 根节点统计耗时: "
                f"total={total_elapsed:.6f}s, "
                f"children_loop={loop_elapsed:.6f}s, "
                f"writeback={writeback_elapsed:.6f}s, "
                f"children={len(getattr(node, 'children', []) or [])}, "
                f"attachment_total={int(node.attachment_count_total)}, "
                f"package_size_total={int(node.package_size_total)}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4127, -fn: _compute_and_set_effective_folder_metrics, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:20:44 ======
[2026-05-07 10:20:42] [2026-05-07 10:20:42] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=2055421619472, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2370, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:20:44] [2026-05-07 10:20:44] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=2055369738528, import_class_id=2055369738528, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4373, -fn: _build_folder_item, 打印次数: 1/4   

[2026-05-07 10:20:44] [2026-05-07 10:20:44] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 2.352218s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2386, -fn: update_file_tree, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:20:47 ======
[2026-05-07 10:20:46] [2026-05-07 10:20:46] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=0.规范性文档及范例, children(folder=17, other=1)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4218, -fn: _on_tree_item_expanded, 打印次数: 1/4   

[2026-05-07 10:20:46] [2026-05-07 10:20:46] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=1.过场动画, children(folder=14, other=2)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4218, -fn: _on_tree_item_expanded, 打印次数: 2/4   

[2026-05-07 10:20:46] [2026-05-07 10:20:46] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=10.原画包装, children(folder=8, other=3)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4218, -fn: _on_tree_item_expanded, 打印次数: 3/4   

[2026-05-07 10:20:46] [2026-05-07 10:20:46] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=11.AI, children(folder=2, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4218, -fn: _on_tree_item_expanded, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 41 条 @ 2026-05-07 10:20:50 ======
[2026-05-07 10:20:47] [2026-05-07 10:20:47] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 227 个 item，用时 3.115277s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2402, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:20:47] [2026-05-07 10:20:47] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40702]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2418, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "📊 统计更新: 发现 40995 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4972, -fn: update_statistics, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[qtree_root_node] 渲染完成，用时 16.627416s"   ----code_context : lprint(f"[qtree_root_node] 渲染完成，用时 {time.time() - _render_t0:.6f}s")
                    if self._startup_render_guard_enabled: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:927, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "扫描缓存已加载(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已加载(Pickle v{loaded_version}): {pkl_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1481, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "缓存加载成功，正在更新UI..."   ----code_context : lprint("缓存加载成功，正在更新UI...")
                self._apply_category_tree_cache_to_current_tree(context="auto_load_cache") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4595, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", false]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] [
    "Muse分支路径",
    [
        "备份资源包",
        "J",
        "H42"
    ]
]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分支树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分支树"), ("缓存文件", brunch_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:951, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "通过上游缓存逻辑加载分类树: L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"通过上游缓存逻辑加载分类树: {self._last_loaded_category_tree_cache_path}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:487, -fn: _try_hydrate_muse_category_tree_from_file_cache, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[分类树缓存][应用到当前树]"
[arg1] ["context", "auto_load_cache"]
[arg2] ["folder_name", "H42"]
[arg3] ["loaded", true]
[arg4] ["root_name", "H42"]
[arg5] ["root_muse_category_id", null]   ----code_context : lprint(
            "[分类树缓存][应用到当前树]",
            ("context", context or "<empty>"),
            ("folder_name", folder_name or "<empty>"),
            ("loaded", loaded),
            ("root_name", getattr(root_node, "name", "")),
            ("root_muse_category_id", getattr(root_node, "muse_category_id", None)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4856, -fn: _apply_category_tree_cache_to_current_tree, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "自动加载缓存完成"   ----code_context : lprint("自动加载缓存完成")
                self.refresh_cache_file_list() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4605, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 开始刷新缓存文件列表 - folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9604, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.01秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.11秒, folder=H42, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.14秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.21秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 获取缓存文件列表耗时: {time.time() - t1:.2f}秒，共 {len(cache_files)} 个文件, "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9612, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : lprint(
                f"目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder={folder_name}, "
                f"muse_path={getattr(target_node, 'muse_path', '')}",
                "warning",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9765, -fn: _resolve_expected_asset_cache_path, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:9970, -fn: update_cache_files_list, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] UI更新耗时: 0.058秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9666, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 总耗时: 0.27秒"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9667, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9668, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 开始刷新缓存文件列表 - folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9604, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=H42, age=0.086s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.02秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 获取缓存文件列表耗时: {time.time() - t1:.2f}秒，共 {len(cache_files)} 个文件, "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9612, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : lprint(
                f"目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder={folder_name}, "
                f"muse_path={getattr(target_node, 'muse_path', '')}",
                "warning",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9765, -fn: _resolve_expected_asset_cache_path, 打印次数: 2/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:9970, -fn: update_cache_files_list, 打印次数: 2/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] UI更新耗时: 0.057秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9666, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "[性能] 总耗时: 0.08秒"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9667, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:20:48] [2026-05-07 10:20:48] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9668, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:20:50] [2026-05-07 10:20:50] {WARNING}
[arg0] "UI 窗口已显示"   ----code_context : lprint("UI 窗口已显示")
    try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12660, -fn: main, 打印次数: 1/4   

[2026-05-07 10:20:50] [2026-05-07 10:20:50] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 10:20:50] [2026-05-07 10:20:50] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 36 条 @ 2026-05-07 10:21:15 ======
[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3797, -fn: _flush_scan_cache_after_metrics, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 2/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "从缓存加载分类树，检查目录是否已存在..."   ----code_context : lprint("从缓存加载分类树，检查目录是否已存在...")
            if self.data_center.muse_category_tree is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10910, -fn: _ensure_category_tree_ready, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
        lprint("目录状态检查完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10981, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "目录状态检查完成:"   ----code_context : lprint("目录状态检查完成:")
        lprint(f"  总目录数: {total_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10982, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "  总目录数: 14738"   ----code_context : lprint(f"  总目录数: {total_count}")
        lprint(f"  已存在: {exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10983, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "  已存在: 0"   ----code_context : lprint(f"  已存在: {exists_count}")
        lprint(f"  未创建: {not_exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10984, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "  未创建: 14738"   ----code_context : lprint(f"  未创建: {not_exists_count}")
        lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10985, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10986, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）"   ----code_context : lprint("[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）")
        self.data_center.set_qtree_root_node(
            root_node,
            update_statistics=False,
            render_ui=False,
            emit_signal=True,
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10990, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "[目录状态检查] qtree_root_node 轻量回写完成，用时 0.00s"   ----code_context : lprint(f"[目录状态检查] qtree_root_node 轻量回写完成，用时 {time.time() - _ui_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10997, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "Muse 根分类: 备份资源包/J"   ----code_context : lprint(f"Muse 根分类: {muse_root}", force_print=True)
        lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11232, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "基础路径: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11233, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "本地文件夹总数: 55907"   ----code_context : lprint(f"本地文件夹总数: {total_folders}")
        self.append_log(f"本地文件夹总数: {total_folders}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11247, -fn: sync_muse_assets, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("CategoryService 参数验证:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:470, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "CategoryService 参数验证:"   ----code_context : lprint("CategoryService 参数验证:")
            lprint(f"  organization_id: {category_service.organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:471, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {category_service.organization_id}")
            lprint(f"  asset_type: {category_service.asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:472, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {category_service.asset_type}")
            lprint(f"  base_path: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:473, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "  base_path: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"  base_path: {base_path}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:474, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:475, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "开始查询文件夹在 Muse 中的分类 ID..."   ----code_context : lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:476, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "使用调用方传入的分类树 Pydantic 模型，跳过分类树读取"   ----code_context : lprint("使用调用方传入的分类树 Pydantic 模型，跳过分类树读取")
            elif category_tree_override is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:485, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("Muse 分类树结构:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:503, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "Muse 分类树结构:"   ----code_context : lprint("Muse 分类树结构:")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:504, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:505, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "组织: rsvs"   ----code_context : lprint(f"组织: {typed_payload.organization_id}")
            lprint(f"根分类数量: {len(org_categories)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:547, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "根分类数量: 1"   ----code_context : lprint(f"根分类数量: {len(org_categories)}")
            root_names = [_node_label(cat) for cat in org_categories] 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:548, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "根分类列表: ['备份资源包']"   ----code_context : lprint(f"根分类列表: {root_names}")
            if target_root_name: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:550, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "正在搜索目标分类: '备份资源包'"   ----code_context : lprint(f"正在搜索目标分类: '{target_root_name}'")
                target_category = find_category_by_name(org_categories, target_root_name) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:552, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "✓ 找到目标分类: '备份资源包' (ID: 411365586239489)"   ----code_context : lprint(f"✓ 找到目标分类: '{target_root_name}' (ID: {target_category.id})")
                    lprint(f"仅显示 '{target_root_name}' 分类树:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:555, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "仅显示 '备份资源包' 分类树:"   ----code_context : lprint(f"仅显示 '{target_root_name}' 分类树:")
                    print_category_tree([target_category], 0) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:556, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "├─ [0] 备份资源包 (ID: 411365586239489)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 1/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "  ├─ [1] J (ID: 411512801853441)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 2/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "    ├─ [2] H42 (ID: 412614732152833)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 3/4   

[2026-05-07 10:21:13] [2026-05-07 10:21:13] {WARNING}
[arg0] "      ├─ [3] 0.规范性文档及范例 (ID: 412614732152834)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 30 条 @ 2026-05-07 10:21:18 ======
[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"配置的根分类: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:565, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "配置的根分类: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"配置的根分类: {base_path}")
            lprint(f"Muse 分类总数: {muse_category_count[0]}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:566, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "Muse 分类总数: 15272"   ----code_context : lprint(f"Muse 分类总数: {muse_category_count[0]}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:567, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:568, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "正在构建路径索引..."   ----code_context : lprint("正在构建路径索引...")
            path_to_id_map = {} 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:571, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "路径索引构建完成，共 15272 个路径"   ----code_context : lprint(f"路径索引构建完成，共 {len(path_to_id_map)} 个路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:607, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "✗ [root] 备份资源包/J/H42 → 未找到"
[arg1] "warning"   ----code_context : lprint(f"✗ [root] {root_path_str} → 未找到", "warning")
                else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:665, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "根节点有 20 个子节点"   ----code_context : lprint(f"根节点有 {len(root_node.children)} 个子节点")
            for child in root_node.children: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:670, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "✗ [0] 备份资源包/J/H42/0.规范性文档及范例 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/CG流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 2/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 3/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "    ✗ [2] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 4/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"文件夹状态更新完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:674, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "文件夹状态更新完成:"   ----code_context : lprint(f"文件夹状态更新完成:")
            lprint(f"  处理文件夹: {processed_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:675, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "  处理文件夹: 55907 个"   ----code_context : lprint(f"  处理文件夹: {processed_count[0]} 个")
            lprint(f"  匹配成功: {matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:676, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "  匹配成功: 0 个"   ----code_context : lprint(f"  匹配成功: {matched_count[0]} 个")
            lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:677, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "  未匹配: 55907 个"   ----code_context : lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个")
            if matched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:678, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "  未匹配样本(前5):"   ----code_context : lprint("  未匹配样本(前5):")
                for item in unmatched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:684, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/CG流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 2/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 3/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 4/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "  Muse分类总数: 15272 个"   ----code_context : lprint(f"  Muse分类总数: {muse_category_count[0]} 个")
            if omitted_log_count[0] > 0: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:687, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "  详细日志省略: 55877 条（已限流到前 30 条）"   ----code_context : lprint(f"  详细日志省略: {omitted_log_count[0]} 条（已限流到前 {max_detail_logs} 条）")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:689, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            # lprint.trace_start(auto_result=True, 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:690, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "[同步阶段] 已收到分类树结果，准备进入资产同步前处理"   ----code_context : lprint("[同步阶段] 已收到分类树结果，准备进入资产同步前处理")
            if not self.muse_tool or not self.data_center.qtree_root_node: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11702, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "[同步阶段] 写入分类树模型完成，用时 0.01s"   ----code_context : lprint(f"[同步阶段] 写入分类树模型完成，用时 {time.time() - stage_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11711, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）"   ----code_context : lprint("[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）")
            self.data_center.ui_helper.update_visible_tree_items_only(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11716, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:21:17] [2026-05-07 10:21:17] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40702]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1397, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 2/4   

[2026-05-07 10:21:18] [2026-05-07 10:21:18] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 319]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3756, -fn: _collect_selective_metrics_roots, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 10:21:24 ======
[2026-05-07 10:21:21] [2026-05-07 10:21:21] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3879, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 10:21:21] [2026-05-07 10:21:21] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.013016]
[arg2] ["folders", 51201]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3889, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 10:21:21] [2026-05-07 10:21:21] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2055421619472, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3938, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 10:21:21] [2026-05-07 10:21:21] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51201]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3998, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 10:21:22] [2026-05-07 10:21:22] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=5.12s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3005, -fn: update_visible_tree_items_only, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 12 条 @ 2026-05-07 10:21:35 ======
[2026-05-07 10:21:31] [2026-05-07 10:21:31] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=8.80s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3047, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 10:21:31] [2026-05-07 10:21:31] {WARNING}
[arg0] "📊 统计更新: 发现 40995 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4972, -fn: update_statistics, 打印次数: 2/4   

[2026-05-07 10:21:31] [2026-05-07 10:21:31] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.23s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3059, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 10:21:31] [2026-05-07 10:21:31] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 228 个，跳过未变化子树 0 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3060, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 10:21:31] [2026-05-07 10:21:31] {WARNING}
[arg0] "[同步阶段] 轻量刷新完成，用时 14.15s"   ----code_context : lprint(f"[同步阶段] 轻量刷新完成，用时 {time.time() - tree_t0:.2f}s")
            self.append_log("树视图已刷新，显示 Muse 路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11718, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:21:31] [2026-05-07 10:21:31] {WARNING}
[arg0] "[同步阶段] 开始更新UI统计"   ----code_context : lprint("[同步阶段] 开始更新UI统计")
                self.data_center.ui_helper.update_muse_category_stats(
                    muse_category_count=stats.get("muse_category_count", 0),
                    local_matched_count=stats.get("local_matched_count", 0),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11723, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:21:31] [2026-05-07 10:21:31] {WARNING}
[arg0] "UI 统计已更新: Muse分类=15272, 匹配=0"   ----code_context : lprint(
                    f"UI 统计已更新: Muse分类={stats.get('muse_category_count', 0)}, "
                    f"匹配={stats.get('local_matched_count', 0)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11728, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:21:31] [2026-05-07 10:21:31] {WARNING}
[arg0] "[同步阶段] UI统计更新完成，用时 0.00s"   ----code_context : lprint(f"[同步阶段] UI统计更新完成，用时 {time.time() - stats_t0:.2f}s")
            self.append_log("开始后台下载并匹配 Muse 资产...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11732, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:21:31] [2026-05-07 10:21:31] {WARNING}
[arg0] "[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 14.17s"   ----code_context : lprint(f"[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 {time.time() - stage_t0:.2f}s")
            thr = MuseAssetSyncThread(
                self.muse_tool,
                root_node,
                parent=self,
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11736, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:21:32] [2026-05-07 10:21:32] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", true]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", true]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] ["Muse分支路径", null]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 2/4   

[2026-05-07 10:21:32] [2026-05-07 10:21:32] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 10:21:32] [2026-05-07 10:21:32] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:21:38 ======
[2026-05-07 10:21:35] [2026-05-07 10:21:35] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分类树"), ("缓存文件", full_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:968, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 10:21:35] [2026-05-07 10:21:35] {WARNING}
[arg0] "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，已根据 muse_path 在全量分类树缓存上回退解析: muse_path='备份资源包/J/H42' -> id=412614732152833"
[arg1] "warning"   ----code_context : lprint(
                                    "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，"
                                    f"已根据 muse_path 在全量分类树缓存上回退解析: muse_path={mp!r} -> id={category_id}",
                                    "warning",
                                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1225, -fn: run, 打印次数: 1/4   

[2026-05-07 10:21:35] [2026-05-07 10:21:35] {WARNING}
[arg0] "[资产同步缓存检查] 分类=412614732152833, use_local_asset_cache=True, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
                        "[资产同步缓存检查] "
                        f"分类={cid}, use_local_asset_cache={self._use_local_asset_cache}, "
                        f"cache_file={cache_file_path or '<none>'}, cache_file_exists={cache_file_hit}"
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1539, -fn: run, 打印次数: 1/4   

[2026-05-07 10:21:35] [2026-05-07 10:21:35] {WARNING}
[arg0] "[asset_cache] 请求分类资产缓存: categories=1, use_cache=True, use_file_cache=True, save_to_file=False, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
            "[asset_cache] 请求分类资产缓存: "
            f"categories={len(category_ids)}, "
            f"use_cache={use_cache}, use_file_cache={use_file_cache}, save_to_file={save_to_file}, "
            f"cache_file={cache_file or '<none>'}, cache_file_exists={cache_file_exists}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:262, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:21:51 ======
[2026-05-07 10:21:50] [2026-05-07 10:21:50] {WARNING}
[arg0] "[asset_cache] 命中文件缓存并加载成功: L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl"   ----code_context : lprint(f"[asset_cache] 命中文件缓存并加载成功: {cache_file}")
                    return typed_loaded 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:312, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 8 条 @ 2026-05-07 10:22:05 ======
[2026-05-07 10:22:03] [2026-05-07 10:22:03] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 10:22:03] [2026-05-07 10:22:03] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3797, -fn: _flush_scan_cache_after_metrics, 打印次数: 2/4   

[2026-05-07 10:22:03] [2026-05-07 10:22:03] {WARNING}
[arg0] "[资产同步进度] [cache-hit] 命中资产缓存并更新UI: 分类 412614732152833 | 资产 40701"   ----code_context : lprint(f"[资产同步进度] {message}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11550, -fn: _on_muse_asset_sync_progress, 打印次数: 1/4   

[2026-05-07 10:22:03] [2026-05-07 10:22:03] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 10:22:04] [2026-05-07 10:22:04] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.378201s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 10:22:04] [2026-05-07 10:22:04] {WARNING}
[arg0] "[资产同步完成] 触发轻量树刷新（跳过整树重建）"   ----code_context : lprint("[资产同步完成] 触发轻量树刷新（跳过整树重建）")
                self.data_center.ui_helper.update_visible_tree_items_only(qtree_root) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11602, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 10:22:04] [2026-05-07 10:22:04] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40701]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1397, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 3/4   

[2026-05-07 10:22:04] [2026-05-07 10:22:04] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 319]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3756, -fn: _collect_selective_metrics_roots, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 10:22:11 ======
[2026-05-07 10:22:08] [2026-05-07 10:22:08] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3879, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 10:22:08] [2026-05-07 10:22:08] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.810781]
[arg2] ["folders", 51201]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3889, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 10:22:08] [2026-05-07 10:22:08] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2055421619472, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3938, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 10:22:09] [2026-05-07 10:22:09] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51201]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3998, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 10:22:10] [2026-05-07 10:22:10] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=6.09s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3005, -fn: update_visible_tree_items_only, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 8 条 @ 2026-05-07 10:22:14 ======
[2026-05-07 10:22:11] [2026-05-07 10:22:11] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=1.20s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3047, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:22:11] [2026-05-07 10:22:11] {WARNING}
[arg0] "📊 统计更新: 发现 40995 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4972, -fn: update_statistics, 打印次数: 3/4   

[2026-05-07 10:22:11] [2026-05-07 10:22:11] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.24s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3059, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:22:11] [2026-05-07 10:22:11] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 0 个，跳过未变化子树 1 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3060, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:22:11] [2026-05-07 10:22:11] {WARNING}
[arg0] "[资产同步完成] 轻量树刷新完成，用时 7.544872s"   ----code_context : lprint(f"[资产同步完成] 轻量树刷新完成，用时 {time.time() - _light_t0:.6f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11604, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 10:22:13] [2026-05-07 10:22:13] {WARNING}
[arg0] "[asset_sync][result]"
[arg1] ["folder_count", 55908]
[arg2] ["folders_with_category_id", 14734]
[arg3] ["category_query_count", 1]
[arg4] ["total_assets", 40701]
[arg5] ["total_matched", 0]
[arg6] ["mount_failed_count", 0]
[arg7] [
    "mount_failed_reason_counts",
    {}
]   ----code_context : lprint(
                "[asset_sync][result]",
                ("folder_count", folder_count),
                ("folders_with_category_id", folders_with_id),
                ("category_query_count", category_count),
                ("total_assets", total_assets),
                ("total_matched", total_matched),
                ("mount_failed_count", mount_failed_count),
                ("mount_failed_reason_counts", mount_failed_reason_counts),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11643, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 10:22:13] [2026-05-07 10:22:13] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 10:22:13] [2026-05-07 10:22:13] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 10:22:32 ======
[2026-05-07 10:22:32] [2026-05-07 10:22:32] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 10:22:32] [2026-05-07 10:22:32] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3797, -fn: _flush_scan_cache_after_metrics, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:22:41 ======
[2026-05-07 10:22:40] [2026-05-07 10:22:40] {WARNING}
[arg0] "[asset_sync][dialog_done]"
[arg1] ["total_matched", 0]
[arg2] ["total_assets", 40701]
[arg3] ["mount_failed_count", 0]   ----code_context : lprint(
                "[asset_sync][dialog_done]",
                ("total_matched", total_matched),
                ("total_assets", total_assets),
                ("mount_failed_count", mount_failed_count),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11683, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:22:44 ======
[2026-05-07 10:22:42] [2026-05-07 10:22:42] {WARNING}
[arg0] "已收缩所有树节点"   ----code_context : lprint("已收缩所有树节点")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9523, -fn: toggle_tree_expansion, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 10:23:35 ======
[2026-05-07 10:23:33] [2026-05-07 10:23:33] {WARNING}
[arg0] "[补全目录链接 txt] 开始批处理（并发写盘），目录数=1"
[arg1] "info"   ----code_context : lprint(f"[补全目录链接 txt] 开始批处理（并发写盘），目录数={total_dirs}", "info") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:6221, -fn: _begin_folder_link_txt_batch_flow, 打印次数: 1/4   

[2026-05-07 10:23:34] [2026-05-07 10:23:34] {WARNING}
[arg0] "用户取消补全目录链接 txt（进度条）"
[arg1] "warning"   ----code_context : lprint(msg, "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:6257, -fn: _on_cancel_clicked, 打印次数: 1/4   

[2026-05-07 10:23:34] [2026-05-07 10:23:34] {WARNING}
[arg0] "已补全目录链接 txt: J:\\H42\\3.CG\\2022\\H42_fenxiUE\\00_assets\\set\\set.txt"
[arg1] "info"   ----code_context : lprint(f"已补全目录链接 txt: {link_full}", "info") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:6369, -fn: _on_folder_link_txt_write_finished, 打印次数: 1/4   

[2026-05-07 10:23:34] [2026-05-07 10:23:34] {WARNING}
[arg0] "[补全目录链接 txt] 结束 created=1 skipped=0 skipped_zero=0 failed=0 canceled=False"
[arg1] "info"   ----code_context : lprint(
            "[补全目录链接 txt] 结束 "
            f"created={created} skipped={len(skipped)} skipped_zero={len(skipped_zero)} "
            f"failed={len(failed)} canceled={canceled}",
            "info",
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:6376, -fn: _on_folder_link_txt_write_finished, 打印次数: 1/4   

[2026-05-07 10:23:34] [2026-05-07 10:23:34] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 4/4   

[2026-05-07 10:23:34] [2026-05-07 10:23:34] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:23:53 ======
[2026-05-07 10:23:53] [2026-05-07 10:23:53] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 4/4   

[2026-05-07 10:23:53] [2026-05-07 10:23:53] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 238637]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2324, -fn: update_file_tree, 打印次数: 2/4   

[2026-05-07 10:23:53] [2026-05-07 10:23:53] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40701]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1397, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 4/4   

[2026-05-07 10:23:53] [2026-05-07 10:23:53] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 319]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3756, -fn: _collect_selective_metrics_roots, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 10:24:00 ======
[2026-05-07 10:23:57] [2026-05-07 10:23:57] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3879, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 4/4   

[2026-05-07 10:23:57] [2026-05-07 10:23:57] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.511609]
[arg2] ["folders", 51201]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3889, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 4/4   

[2026-05-07 10:23:57] [2026-05-07 10:23:57] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2055421619472, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3938, -fn: _apply_effective_metrics_by_path, 打印次数: 4/4   

[2026-05-07 10:23:57] [2026-05-07 10:23:57] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51201]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3998, -fn: _apply_effective_metrics_by_path, 打印次数: 4/4   

[2026-05-07 10:23:58] [2026-05-07 10:23:58] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=2055421619472, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2370, -fn: update_file_tree, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 10:24:03 ======
[2026-05-07 10:24:00] [2026-05-07 10:24:00] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=2055369738528, import_class_id=2055369738528, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4373, -fn: _build_folder_item, 打印次数: 2/4   

[2026-05-07 10:24:00] [2026-05-07 10:24:00] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 1.507489s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2386, -fn: update_file_tree, 打印次数: 2/4   

[2026-05-07 10:24:02] [2026-05-07 10:24:02] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 227 个 item，用时 2.263601s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2402, -fn: update_file_tree, 打印次数: 2/4   

[2026-05-07 10:24:02] [2026-05-07 10:24:02] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2418, -fn: update_file_tree, 打印次数: 2/4   

[2026-05-07 10:24:02] [2026-05-07 10:24:02] {WARNING}
[arg0] "[FILTER][START]"
[arg1] ["keyword", ""]
[arg2] ["filter_column", "全部列"]
[arg3] ["filter_column_index", -1]
[arg4] ["signal_arg_count", 0]
[arg5] ["source_count", 279338]   ----code_context : lprint(
            "[FILTER][START]",
            ("keyword", keyword_text),
            ("filter_column", filter_column_name),
            ("filter_column_index", filter_column_index),
            ("signal_arg_count", len(args)),
            ("source_count", len(self.filter_source_nodes)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11780, -fn: apply_filters, 打印次数: 1/4   

[2026-05-07 10:24:02] [2026-05-07 10:24:02] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 238637]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2324, -fn: update_file_tree, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:24:09 ======
[2026-05-07 10:24:08] [2026-05-07 10:24:08] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=2055421619472, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2370, -fn: update_file_tree, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 10:24:12 ======
[2026-05-07 10:24:10] [2026-05-07 10:24:10] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=2055369738528, import_class_id=2055369738528, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4373, -fn: _build_folder_item, 打印次数: 3/4   

[2026-05-07 10:24:10] [2026-05-07 10:24:10] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 2.169944s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2386, -fn: update_file_tree, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:24:15 ======
[2026-05-07 10:24:14] [2026-05-07 10:24:14] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 227 个 item，用时 3.375732s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2402, -fn: update_file_tree, 打印次数: 3/4   

[2026-05-07 10:24:14] [2026-05-07 10:24:14] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2418, -fn: update_file_tree, 打印次数: 3/4   

[2026-05-07 10:24:14] [2026-05-07 10:24:14] {WARNING}
[arg0] "[status_filter][tree_filter_restored]"
[arg1] ["previous_filter", "<unknown_or_already_all>"]
[arg2] ["status_text", "全部"]   ----code_context : lprint(
                        "[status_filter][tree_filter_restored]",
                        ("previous_filter", previous_filter or "<unknown_or_already_all>"),
                        ("status_text", status_text or "全部"),
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11839, -fn: apply_filters, 打印次数: 1/4   

[2026-05-07 10:24:14] [2026-05-07 10:24:14] {WARNING}
[arg0] "[FILTER][RESULT]"
[arg1] ["keyword", ""]
[arg2] ["filter_column", "全部列"]
[arg3] ["filter_column_index", -1]
[arg4] ["folder_name", "H42"]
[arg5] ["status", "全部"]
[arg6] ["matched_count", 10556]
[arg7] ["source_count", 279338]
[arg8] ["file_node_count", 238637]
[arg9] ["muse_asset_node_count", 40701]
[arg10] ["matched_tree_item_count", 0]
[arg11] ["visible_tree_item_count", 658]   ----code_context : lprint(
            "[FILTER][RESULT]",
            ("keyword", keyword),
            ("filter_column", filter_column_name),
            ("filter_column_index", filter_column_index),
            ("folder_name", str(folder_name or "").strip()),
            ("status", str(status or "").strip()),
            ("matched_count", len(filtered)),
            ("source_count", len(source_nodes)),
            ("file_node_count", len(self.all_files)),
            ("muse_asset_node_count", len(self._get_muse_asset_nodes_from_tree())),
            ("matched_tree_item_count", matched_item_count),
            ("visible_tree_item_count", visible_item_count),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11883, -fn: apply_filters, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:24:33 ======
[2026-05-07 10:24:32] [2026-05-07 10:24:32] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3797, -fn: _flush_scan_cache_after_metrics, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:24:49 ======
[2026-05-07 10:24:46] [2026-05-07 10:24:46] {WARNING}
[arg0] "[FILTER][START]"
[arg1] ["keyword", ""]
[arg2] ["filter_column", "全部列"]
[arg3] ["filter_column_index", -1]
[arg4] ["signal_arg_count", 1]
[arg5] ["source_count", 279338]   ----code_context : lprint(
            "[FILTER][START]",
            ("keyword", keyword_text),
            ("filter_column", filter_column_name),
            ("filter_column_index", filter_column_index),
            ("signal_arg_count", len(args)),
            ("source_count", len(self.filter_source_nodes)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11780, -fn: apply_filters, 打印次数: 2/4   

[2026-05-07 10:24:46] [2026-05-07 10:24:46] {WARNING}
[arg0] "[status_filter][tree_filter_selected]"
[arg1] ["status_text", "目录：仅显示挂载了多个Muse资产的目录"]   ----code_context : lprint(
                "[status_filter][tree_filter_selected]",
                ("status_text", status_text),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11804, -fn: apply_filters, 打印次数: 1/4   

[2026-05-07 10:24:46] [2026-05-07 10:24:46] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 238637]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2324, -fn: update_file_tree, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:24:55 ======
[2026-05-07 10:24:53] [2026-05-07 10:24:53] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=2055421619472, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2370, -fn: update_file_tree, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:24:58 ======
[2026-05-07 10:24:56] [2026-05-07 10:24:56] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=2055369738528, import_class_id=2055369738528, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4373, -fn: _build_folder_item, 打印次数: 4/4   

[2026-05-07 10:24:56] [2026-05-07 10:24:56] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 2.291384s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2386, -fn: update_file_tree, 打印次数: 4/4   

[2026-05-07 10:24:57] [2026-05-07 10:24:57] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 15 个 item，用时 1.890873s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2402, -fn: update_file_tree, 打印次数: 4/4   

[2026-05-07 10:24:57] [2026-05-07 10:24:57] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2418, -fn: update_file_tree, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:25:01 ======
[2026-05-07 10:24:58] [2026-05-07 10:24:58] {WARNING}
[arg0] "[FILTER][RESULT]"
[arg1] ["keyword", ""]
[arg2] ["filter_column", "全部列"]
[arg3] ["filter_column_index", -1]
[arg4] ["folder_name", "H42"]
[arg5] ["status", ""]
[arg6] ["matched_count", 10556]
[arg7] ["source_count", 279338]
[arg8] ["file_node_count", 238637]
[arg9] ["muse_asset_node_count", 40701]
[arg10] ["matched_tree_item_count", 0]
[arg11] ["visible_tree_item_count", 27]   ----code_context : lprint(
            "[FILTER][RESULT]",
            ("keyword", keyword),
            ("filter_column", filter_column_name),
            ("filter_column_index", filter_column_index),
            ("folder_name", str(folder_name or "").strip()),
            ("status", str(status or "").strip()),
            ("matched_count", len(filtered)),
            ("source_count", len(source_nodes)),
            ("file_node_count", len(self.all_files)),
            ("muse_asset_node_count", len(self._get_muse_asset_nodes_from_tree())),
            ("matched_tree_item_count", matched_item_count),
            ("visible_tree_item_count", visible_item_count),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11883, -fn: apply_filters, 打印次数: 2/4   

[2026-05-07 10:24:58] [2026-05-07 10:24:58] {WARNING}
[arg0] "[FILTER][START]"
[arg1] ["keyword", ""]
[arg2] ["filter_column", "全部列"]
[arg3] ["filter_column_index", -1]
[arg4] ["signal_arg_count", 0]
[arg5] ["source_count", 279338]   ----code_context : lprint(
            "[FILTER][START]",
            ("keyword", keyword_text),
            ("filter_column", filter_column_name),
            ("filter_column_index", filter_column_index),
            ("signal_arg_count", len(args)),
            ("source_count", len(self.filter_source_nodes)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11780, -fn: apply_filters, 打印次数: 3/4   

[2026-05-07 10:24:58] [2026-05-07 10:24:58] {WARNING}
[arg0] "[status_filter][tree_filter_selected]"
[arg1] ["status_text", "目录：仅显示挂载了多个Muse资产的目录"]   ----code_context : lprint(
                "[status_filter][tree_filter_selected]",
                ("status_text", status_text),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11804, -fn: apply_filters, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:25:10 ======
[2026-05-07 10:25:10] [2026-05-07 10:25:10] {WARNING}
[arg0] "[FILTER][RESULT]"
[arg1] ["keyword", ""]
[arg2] ["filter_column", "全部列"]
[arg3] ["filter_column_index", -1]
[arg4] ["folder_name", "H42"]
[arg5] ["status", ""]
[arg6] ["matched_count", 10556]
[arg7] ["source_count", 279338]
[arg8] ["file_node_count", 238637]
[arg9] ["muse_asset_node_count", 40701]
[arg10] ["matched_tree_item_count", 0]
[arg11] ["visible_tree_item_count", 27]   ----code_context : lprint(
            "[FILTER][RESULT]",
            ("keyword", keyword),
            ("filter_column", filter_column_name),
            ("filter_column_index", filter_column_index),
            ("folder_name", str(folder_name or "").strip()),
            ("status", str(status or "").strip()),
            ("matched_count", len(filtered)),
            ("source_count", len(source_nodes)),
            ("file_node_count", len(self.all_files)),
            ("muse_asset_node_count", len(self._get_muse_asset_nodes_from_tree())),
            ("matched_tree_item_count", matched_item_count),
            ("visible_tree_item_count", visible_item_count),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11883, -fn: apply_filters, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 50 条 @ 2026-05-07 10:28:08 ======
[2026-05-07 10:28:02] [2026-05-07 10:28:02] {WARNING}
[arg0] "[PYTRACEMP][DATE_LOG_PATH]"
[arg1] ["module_name", "j_disc_backup_ui"]
[arg2] ["log_base_dir", "D:\\Temp\\Log"]
[arg3] ["date_log_path", "D:\\Temp\\Log\\j_disc_backup_ui\\20260507.md"]
[arg4] ["cleared", true]
[arg5] ["clear_error", null]   ----code_context : lprint(
            "[PYTRACEMP][DATE_LOG_PATH]",
            ("module_name", module_name),
            ("log_base_dir", log_base_dir),
            ("date_log_path", date_log_path),
            ("cleared", cleared),
            ("clear_error", clear_error),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\@baselibs\pytracemp\__init__.py:54, -fn: _print_date_log_path_on_import, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[启动参数][argv_parse]"
[arg1] [
    "argv",
    [
        "c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py",
        "--enable-trace=True",
        "--source-dir",
        "J:",
        "--upload-dir",
        "H42",
        "--ignore-ui-state",
        "--separate-taskbar-icon"
    ]
]
[arg2] ["arg_source_dir", "J:"]
[arg3] ["arg_upload_dir", "H42"]
[arg4] ["arg_ignore_ui_state", true]
[arg5] ["arg_taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1"]
[arg6] ["arg_separate_taskbar_icon", true]   ----code_context : lprint(
        "[启动参数][argv_parse]",
        ("argv", sys.argv),
        ("arg_source_dir", args.source_dir or "<empty>"),
        ("arg_upload_dir", args.upload_dir or "<empty>"),
        ("arg_ignore_ui_state", args.ignore_ui_state),
        ("arg_taskbar_app_id", args.taskbar_app_id or "<empty>"),
        ("arg_separate_taskbar_icon", args.separate_taskbar_icon),
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12724, -fn: main, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[启动参数][final]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1.pid48816"]
[arg5] ["enable_trace", true]   ----code_context : lprint(
        "[启动参数][final]",
        ("source_dir", args.source_dir or "<empty>"),
        ("upload_dir", args.upload_dir or "<empty>"),
        ("ignore_ui_state", args.ignore_ui_state),
        ("taskbar_app_id", runtime_taskbar_app_id),
        ("enable_trace", enable_trace),
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12736, -fn: main, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
    lprint("J盘备份到Muse UI 启动") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12753, -fn: main, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "J盘备份到Muse UI 启动"   ----code_context : lprint("J盘备份到Muse UI 启动")
    lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12754, -fn: main, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12755, -fn: main, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "正在初始化 UI..."   ----code_context : lprint("正在初始化 UI...")
    window = JDiscBackupUI(
        startup_source_dir=args.source_dir,
        startup_upload_dir=args.upload_dir,
        ignore_ui_state=args.ignore_ui_state,
        enable_trace=enable_trace,
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12760, -fn: main, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "正在创建数据中心..."   ----code_context : lprint("正在创建数据中心...")
        self.data_center = BackupDataCenter(self) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4236, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "配置加载成功: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置加载成功: {config_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:682, -fn: load_default_config, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "UI已根据配置更新（全量）"   ----code_context : lprint("UI已根据配置更新（全量）")
                return 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1992, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "数据中心创建完成"   ----code_context : lprint("数据中心创建完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4238, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['backup_source_dir']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2040, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2114, -fn: save_config_to_yaml_file, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[启动参数][应用后配置]"
[arg1] ["startup_source_dir", "J:"]
[arg2] ["startup_upload_dir", "H42"]
[arg3] ["startup_upload_is_all", false]
[arg4] ["config_source_dir", "J:"]   ----code_context : lprint(
            "[启动参数][应用后配置]",
            ("startup_source_dir", self._startup_source_dir or "<empty>"),
            ("startup_upload_dir", self._startup_upload_dir or "<empty>"),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ("config_source_dir", self.data_center.config.backup_source_dir),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4251, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[启动参数]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]   ----code_context : lprint(
                "[启动参数]",
                ("source_dir", self._startup_source_dir or "<使用配置>"),
                ("upload_dir", upload_dir_label),
                ("ignore_ui_state", self._ignore_ui_state),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4262, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("MuseTool 初始化参数:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4291, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "MuseTool 初始化参数:"   ----code_context : lprint("MuseTool 初始化参数:")
            lprint(f"  user_email: {user_email}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4292, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {user_email}")
            lprint(f"  organization_id: {organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4293, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {organization_id}")
            lprint(f"  asset_type: {asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4294, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {asset_type}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4295, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4296, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "MuseTool 初始化成功"   ----code_context : lprint("MuseTool 初始化成功")
            lprint("验证 MuseTool 运行身份:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4305, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "验证 MuseTool 运行身份:"   ----code_context : lprint("验证 MuseTool 运行身份:")
            lprint(f"  user_email: {identity.get('user_email', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4306, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {identity.get('user_email', '')}")
            lprint(f"  organization_id: {identity.get('organization_id', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4307, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {identity.get('organization_id', '')}")
            lprint(f"  asset_type: {identity.get('asset_type', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4308, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {identity.get('asset_type', '')}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4309, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "从 p4_to_muse.yaml 加载本地 source 预设: 58 个"   ----code_context : lprint(f"从 p4_to_muse.yaml 加载本地 source 预设: {len(mappings)} 个")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1535, -fn: refresh_source_mappings_from_yaml, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "正在扫描 J: 的文件夹列表..."   ----code_context : lprint(f"正在扫描 {backup_source_dir} 的文件夹列表...")
            try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4883, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "扫描到 67 个文件夹"   ----code_context : lprint(f"扫描到 {len(folders)} 个文件夹")
            except (PermissionError, OSError) as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4889, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[upload_dir_combo][init_start]"
[arg1] ["source_dir", "J:"]
[arg2] ["preferred_upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["startup_upload_explicit", true]
[arg5] ["startup_upload_is_all", false]   ----code_context : lprint(
            "[upload_dir_combo][init_start]",
            ("source_dir", backup_source_dir),
            ("preferred_upload_dir", preferred_upload_dir or "<empty>"),
            ("ignore_ui_state", self._ignore_ui_state),
            ("startup_upload_explicit", self._startup_upload_dir_is_explicit),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4909, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[upload_dir_combo][candidates]"
[arg1] [
    "candidate_values",
    [
        "H42"
    ]
]
[arg2] ["folder_count", 67]   ----code_context : lprint(
                "[upload_dir_combo][candidates]",
                ("candidate_values", candidate_values),
                ("folder_count", len(folders)),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4934, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "已加载 67 个文件夹到下拉框: ['00_doc', '123456', '2024风霁周会产出展示', '2025风霁周会产出展示', '2026风霁周会产出展示', '@Recycle', 'A49', 'Anim_library', 'Asset_library', 'DM139', 'DM142', 'GUI', 'GYL_Tools', 'H18', 'H42', 'H52', 'H55', 'H64', 'H65', 'H65_Dasha Taran', 'H70_临时', 'H72', 'H73', 'H74', 'H74-风霁月会产出材料', 'H75', 'H77', 'HXX(模板)', 'MA167', 'MA67', 'MA73', 'Projects', 'RigWork', 'S4', 'S7', 'SteamLibrary', 'U5', 'UE5 Demo', 'UXX', 'Vendor', 'X23', 'X33', 'X9', 'YY45', 'YY63', 'artlib_preview', 'blender', 'maya', 'origin_disk_J', 'prod_projs', 'render', 'sp', 'temp', 'work', 'zb', '临时文件', '供应商资料共享', '动捕演员资料库', '动画工具', '动画月会资料', '年度Showreel', '战斗场景——大鸭头', '游戏解包资源汇总', '竞标需求', '网易蛋仔派对', '迅雷云盘', '风雨项目集双周会产出材料']"   ----code_context : lprint(f"已加载 {len(folders)} 个文件夹到下拉框: {folders}")
        if selected_folder: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4963, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "uploadDirComboBox 自动选择: H42"   ----code_context : lprint(f"uploadDirComboBox 自动选择: {selected_folder}")
        lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4965, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[upload_dir_combo][init_done]"
[arg1] ["selected_folder", "H42"]
[arg2] ["current_text", "H42"]
[arg3] ["business_value", "H42"]   ----code_context : lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4966, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "扫描方式初始化完成，当前方式: os.scandir (性能优化)"   ----code_context : lprint(f"扫描方式初始化完成，当前方式: {ScanMethod.get_display_name(current_method)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5236, -fn: init_scan_method_ui, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "路径设置页已加载 5 条映射"   ----code_context : lprint(f"路径设置页已加载 {len(mappings)} 条映射")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5121, -fn: load_path_mapping_table, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[日志前缀][模式切换]"
[arg1] ["business_mode", "backup_file"]
[arg2] ["date_log_prefix", "j_disc_backup_file"]   ----code_context : lprint(
                "[日志前缀][模式切换]",
                ("business_mode", mode),
                ("date_log_prefix", log_prefix),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4548, -fn: _apply_date_log_prefix_by_mode, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2114, -fn: save_config_to_yaml_file, 打印次数: 2/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2114, -fn: save_config_to_yaml_file, 打印次数: 3/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['muse_root_category']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2040, -fn: apply_config_from_data_center, 打印次数: 2/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2114, -fn: save_config_to_yaml_file, 打印次数: 4/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[trace][init]"
[arg1] ["enabled", true]
[arg2] ["source", "startup_arg"]   ----code_context : lprint(
            "[trace][init]",
            ("enabled", bool(self._startup_enable_trace)),
            ("source", "startup_arg"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5461, -fn: _init_trace_toggle_checkbox, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state"   ----code_context : lprint("[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4359, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "[启动缓存][候选]"
[arg1] ["current_ui_folder", "H42"]
[arg2] [
    "candidate_folders",
    [
        "H42"
    ]
]
[arg3] ["startup_upload_is_all", false]   ----code_context : lprint(
                "[启动缓存][候选]",
                ("current_ui_folder", current_ui_folder or "<empty>"),
                ("candidate_folders", candidate_folders),
                ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4581, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "发现Pickle缓存文件: L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"发现Pickle缓存文件: {pkl_cache_file}")
                lprint(f"正在自动加载缓存: folder={folder}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4597, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "正在自动加载缓存: folder=H42"   ----code_context : lprint(f"正在自动加载缓存: folder={folder}")
                success = self.data_center.load_scan_cache(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4598, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:28:05] [2026-05-07 10:28:05] {WARNING}
[arg0] "正在加载扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl, 大小: 363.95MB"   ----code_context : lprint(f"正在加载扫描缓存(Pickle): {pkl_path}, 大小: {size_mb:.2f}MB") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1396, -fn: load_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 10:28:30 ======
[2026-05-07 10:28:29] [2026-05-07 10:28:29] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:28:29] [2026-05-07 10:28:29] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.346650s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:28:29] [2026-05-07 10:28:29] {WARNING}
[arg0] "[qtree_root_node] 开始 render_root_node_change"   ----code_context : lprint("[qtree_root_node] 开始 render_root_node_change")
                    self.ui_helper.render_root_node_change(node, _from_data_center=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:925, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:28:29] [2026-05-07 10:28:29] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 238637]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2324, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:28:29] [2026-05-07 10:28:29] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40701]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1397, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 1/4   

[2026-05-07 10:28:30] [2026-05-07 10:28:30] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 319]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3756, -fn: _collect_selective_metrics_roots, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:28:36 ======
[2026-05-07 10:28:35] [2026-05-07 10:28:35] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3879, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 10:28:35] [2026-05-07 10:28:35] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 5.364864]
[arg2] ["folders", 51201]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3889, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 10:28:35] [2026-05-07 10:28:35] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=1383057002000, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3938, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   

[2026-05-07 10:28:36] [2026-05-07 10:28:36] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51201]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3998, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:28:39 ======
[2026-05-07 10:28:39] [2026-05-07 10:28:39] {WARNING}
[arg0] "[effective_metrics] 根节点统计耗时: total=2.750276s, children_loop=2.750264s, writeback=0.000004s, children=20, attachment_total=726025, package_size_total=11908268298167"   ----code_context : lprint(
                "[effective_metrics] 根节点统计耗时: "
                f"total={total_elapsed:.6f}s, "
                f"children_loop={loop_elapsed:.6f}s, "
                f"writeback={writeback_elapsed:.6f}s, "
                f"children={len(getattr(node, 'children', []) or [])}, "
                f"attachment_total={int(node.attachment_count_total)}, "
                f"package_size_total={int(node.package_size_total)}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4127, -fn: _compute_and_set_effective_folder_metrics, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:28:42 ======
[2026-05-07 10:28:40] [2026-05-07 10:28:40] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=1383057002000, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2370, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:28:42] [2026-05-07 10:28:42] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=1382998273536, import_class_id=1382998273536, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4371, -fn: _build_folder_item, 打印次数: 1/4   

[2026-05-07 10:28:42] [2026-05-07 10:28:42] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 2.315368s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2386, -fn: update_file_tree, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 10:28:45 ======
[2026-05-07 10:28:43] [2026-05-07 10:28:43] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=0.规范性文档及范例, children(folder=17, other=1)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4216, -fn: _on_tree_item_expanded, 打印次数: 1/4   

[2026-05-07 10:28:43] [2026-05-07 10:28:43] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=1.过场动画, children(folder=14, other=2)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4216, -fn: _on_tree_item_expanded, 打印次数: 2/4   

[2026-05-07 10:28:44] [2026-05-07 10:28:44] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=10.原画包装, children(folder=8, other=3)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4216, -fn: _on_tree_item_expanded, 打印次数: 3/4   

[2026-05-07 10:28:44] [2026-05-07 10:28:44] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=11.AI, children(folder=2, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4216, -fn: _on_tree_item_expanded, 打印次数: 4/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 227 个 item，用时 3.098817s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2402, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2418, -fn: update_file_tree, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 39 条 @ 2026-05-07 10:28:48 ======
[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "📊 统计更新: 发现 40995 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4967, -fn: update_statistics, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[qtree_root_node] 渲染完成，用时 16.062966s"   ----code_context : lprint(f"[qtree_root_node] 渲染完成，用时 {time.time() - _render_t0:.6f}s")
                    if self._startup_render_guard_enabled: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:927, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "扫描缓存已加载(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已加载(Pickle v{loaded_version}): {pkl_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1481, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "缓存加载成功，正在更新UI..."   ----code_context : lprint("缓存加载成功，正在更新UI...")
                self._apply_category_tree_cache_to_current_tree(context="auto_load_cache") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4606, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", false]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] [
    "Muse分支路径",
    [
        "备份资源包",
        "J",
        "H42"
    ]
]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分支树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分支树"), ("缓存文件", brunch_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:951, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "通过上游缓存逻辑加载分类树: L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"通过上游缓存逻辑加载分类树: {self._last_loaded_category_tree_cache_path}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:487, -fn: _try_hydrate_muse_category_tree_from_file_cache, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[分类树缓存][应用到当前树]"
[arg1] ["context", "auto_load_cache"]
[arg2] ["folder_name", "H42"]
[arg3] ["loaded", true]
[arg4] ["root_name", "H42"]
[arg5] ["root_muse_category_id", null]   ----code_context : lprint(
            "[分类树缓存][应用到当前树]",
            ("context", context or "<empty>"),
            ("folder_name", folder_name or "<empty>"),
            ("loaded", loaded),
            ("root_name", getattr(root_node, "name", "")),
            ("root_muse_category_id", getattr(root_node, "muse_category_id", None)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4867, -fn: _apply_category_tree_cache_to_current_tree, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "自动加载缓存完成"   ----code_context : lprint("自动加载缓存完成")
                self.refresh_cache_file_list() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4616, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 开始刷新缓存文件列表 - folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9712, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:28:45] [2026-05-07 10:28:45] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.01秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:28:46] [2026-05-07 10:28:46] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.77秒, folder=H42, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:28:46] [2026-05-07 10:28:46] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:28:46] [2026-05-07 10:28:46] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.80秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:28:46] [2026-05-07 10:28:46] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.86秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 获取缓存文件列表耗时: {time.time() - t1:.2f}秒，共 {len(cache_files)} 个文件, "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9720, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : lprint(
                f"目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder={folder_name}, "
                f"muse_path={getattr(target_node, 'muse_path', '')}",
                "warning",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9873, -fn: _resolve_expected_asset_cache_path, 打印次数: 1/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:9965, -fn: update_cache_files_list, 打印次数: 1/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "[性能] UI更新耗时: 0.277秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9774, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "[性能] 总耗时: 1.15秒"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9775, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9776, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 1/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 开始刷新缓存文件列表 - folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9712, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=H42, age=0.308s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.23秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 获取缓存文件列表耗时: {time.time() - t1:.2f}秒，共 {len(cache_files)} 个文件, "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9720, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : lprint(
                f"目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder={folder_name}, "
                f"muse_path={getattr(target_node, 'muse_path', '')}",
                "warning",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9873, -fn: _resolve_expected_asset_cache_path, 打印次数: 2/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:9965, -fn: update_cache_files_list, 打印次数: 2/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "[性能] UI更新耗时: 0.059秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9774, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "[性能] 总耗时: 0.29秒"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9775, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9776, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "UI 窗口已显示"   ----code_context : lprint("UI 窗口已显示")
    try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12768, -fn: main, 打印次数: 1/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 10:28:47] [2026-05-07 10:28:47] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 36 条 @ 2026-05-07 10:29:09 ======
[2026-05-07 10:29:06] [2026-05-07 10:29:06] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 10:29:06] [2026-05-07 10:29:06] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3797, -fn: _flush_scan_cache_after_metrics, 打印次数: 1/4   

[2026-05-07 10:29:06] [2026-05-07 10:29:06] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 2/4   

[2026-05-07 10:29:06] [2026-05-07 10:29:06] {WARNING}
[arg0] "从缓存加载分类树，检查目录是否已存在..."   ----code_context : lprint("从缓存加载分类树，检查目录是否已存在...")
            if self.data_center.muse_category_tree is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11018, -fn: _ensure_category_tree_ready, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
        lprint("目录状态检查完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11089, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "目录状态检查完成:"   ----code_context : lprint("目录状态检查完成:")
        lprint(f"  总目录数: {total_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11090, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "  总目录数: 14745"   ----code_context : lprint(f"  总目录数: {total_count}")
        lprint(f"  已存在: {exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11091, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "  已存在: 0"   ----code_context : lprint(f"  已存在: {exists_count}")
        lprint(f"  未创建: {not_exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11092, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "  未创建: 14745"   ----code_context : lprint(f"  未创建: {not_exists_count}")
        lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11093, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11094, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）"   ----code_context : lprint("[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）")
        self.data_center.set_qtree_root_node(
            root_node,
            update_statistics=False,
            render_ui=False,
            emit_signal=True,
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11098, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "[目录状态检查] qtree_root_node 轻量回写完成，用时 0.00s"   ----code_context : lprint(f"[目录状态检查] qtree_root_node 轻量回写完成，用时 {time.time() - _ui_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11105, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "Muse 根分类: 备份资源包/J"   ----code_context : lprint(f"Muse 根分类: {muse_root}", force_print=True)
        lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11340, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "基础路径: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11341, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "本地文件夹总数: 55907"   ----code_context : lprint(f"本地文件夹总数: {total_folders}")
        self.append_log(f"本地文件夹总数: {total_folders}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11355, -fn: sync_muse_assets, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("CategoryService 参数验证:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:470, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "CategoryService 参数验证:"   ----code_context : lprint("CategoryService 参数验证:")
            lprint(f"  organization_id: {category_service.organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:471, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {category_service.organization_id}")
            lprint(f"  asset_type: {category_service.asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:472, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {category_service.asset_type}")
            lprint(f"  base_path: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:473, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "  base_path: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"  base_path: {base_path}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:474, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:475, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "开始查询文件夹在 Muse 中的分类 ID..."   ----code_context : lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:476, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "使用调用方传入的分类树 Pydantic 模型，跳过分类树读取"   ----code_context : lprint("使用调用方传入的分类树 Pydantic 模型，跳过分类树读取")
            elif category_tree_override is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:485, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("Muse 分类树结构:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:503, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "Muse 分类树结构:"   ----code_context : lprint("Muse 分类树结构:")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:504, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:505, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "组织: rsvs"   ----code_context : lprint(f"组织: {typed_payload.organization_id}")
            lprint(f"根分类数量: {len(org_categories)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:547, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "根分类数量: 1"   ----code_context : lprint(f"根分类数量: {len(org_categories)}")
            root_names = [_node_label(cat) for cat in org_categories] 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:548, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "根分类列表: ['备份资源包']"   ----code_context : lprint(f"根分类列表: {root_names}")
            if target_root_name: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:550, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "正在搜索目标分类: '备份资源包'"   ----code_context : lprint(f"正在搜索目标分类: '{target_root_name}'")
                target_category = find_category_by_name(org_categories, target_root_name) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:552, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "✓ 找到目标分类: '备份资源包' (ID: 411365586239489)"   ----code_context : lprint(f"✓ 找到目标分类: '{target_root_name}' (ID: {target_category.id})")
                    lprint(f"仅显示 '{target_root_name}' 分类树:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:555, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "仅显示 '备份资源包' 分类树:"   ----code_context : lprint(f"仅显示 '{target_root_name}' 分类树:")
                    print_category_tree([target_category], 0) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:556, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "├─ [0] 备份资源包 (ID: 411365586239489)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 1/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "  ├─ [1] J (ID: 411512801853441)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 2/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "    ├─ [2] H42 (ID: 412614732152833)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 3/4   

[2026-05-07 10:29:07] [2026-05-07 10:29:07] {WARNING}
[arg0] "      ├─ [3] 0.规范性文档及范例 (ID: 412614732152834)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 30 条 @ 2026-05-07 10:29:12 ======
[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"配置的根分类: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:565, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "配置的根分类: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"配置的根分类: {base_path}")
            lprint(f"Muse 分类总数: {muse_category_count[0]}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:566, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "Muse 分类总数: 15272"   ----code_context : lprint(f"Muse 分类总数: {muse_category_count[0]}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:567, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:568, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "正在构建路径索引..."   ----code_context : lprint("正在构建路径索引...")
            path_to_id_map = {} 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:571, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "路径索引构建完成，共 15272 个路径"   ----code_context : lprint(f"路径索引构建完成，共 {len(path_to_id_map)} 个路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:607, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "✗ [root] 备份资源包/J/H42 → 未找到"
[arg1] "warning"   ----code_context : lprint(f"✗ [root] {root_path_str} → 未找到", "warning")
                else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:665, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "根节点有 20 个子节点"   ----code_context : lprint(f"根节点有 {len(root_node.children)} 个子节点")
            for child in root_node.children: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:670, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "✗ [0] 备份资源包/J/H42/0.规范性文档及范例 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/CG流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 2/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 3/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "    ✗ [2] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 4/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"文件夹状态更新完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:674, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "文件夹状态更新完成:"   ----code_context : lprint(f"文件夹状态更新完成:")
            lprint(f"  处理文件夹: {processed_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:675, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "  处理文件夹: 55907 个"   ----code_context : lprint(f"  处理文件夹: {processed_count[0]} 个")
            lprint(f"  匹配成功: {matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:676, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "  匹配成功: 0 个"   ----code_context : lprint(f"  匹配成功: {matched_count[0]} 个")
            lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:677, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "  未匹配: 55907 个"   ----code_context : lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个")
            if matched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:678, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "  未匹配样本(前5):"   ----code_context : lprint("  未匹配样本(前5):")
                for item in unmatched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:684, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/CG流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 2/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 3/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 4/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "  Muse分类总数: 15272 个"   ----code_context : lprint(f"  Muse分类总数: {muse_category_count[0]} 个")
            if omitted_log_count[0] > 0: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:687, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "  详细日志省略: 55877 条（已限流到前 30 条）"   ----code_context : lprint(f"  详细日志省略: {omitted_log_count[0]} 条（已限流到前 {max_detail_logs} 条）")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:689, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            # lprint.trace_start(auto_result=True, 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:690, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "[同步阶段] 已收到分类树结果，准备进入资产同步前处理"   ----code_context : lprint("[同步阶段] 已收到分类树结果，准备进入资产同步前处理")
            if not self.muse_tool or not self.data_center.qtree_root_node: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11810, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "[同步阶段] 写入分类树模型完成，用时 0.00s"   ----code_context : lprint(f"[同步阶段] 写入分类树模型完成，用时 {time.time() - stage_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11819, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）"   ----code_context : lprint("[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）")
            self.data_center.ui_helper.update_visible_tree_items_only(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11824, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40701]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1397, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 2/4   

[2026-05-07 10:29:11] [2026-05-07 10:29:11] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 319]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3756, -fn: _collect_selective_metrics_roots, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 10:29:18 ======
[2026-05-07 10:29:16] [2026-05-07 10:29:16] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3879, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 10:29:16] [2026-05-07 10:29:16] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.757764]
[arg2] ["folders", 51201]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3889, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 10:29:16] [2026-05-07 10:29:16] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=1383057002000, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3938, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 10:29:16] [2026-05-07 10:29:16] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51201]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3998, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 10:29:17] [2026-05-07 10:29:17] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=5.88s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3005, -fn: update_visible_tree_items_only, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 12 条 @ 2026-05-07 10:29:28 ======
[2026-05-07 10:29:26] [2026-05-07 10:29:26] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=8.87s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3047, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 10:29:26] [2026-05-07 10:29:26] {WARNING}
[arg0] "📊 统计更新: 发现 40995 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4967, -fn: update_statistics, 打印次数: 2/4   

[2026-05-07 10:29:26] [2026-05-07 10:29:26] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.23s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3059, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 10:29:26] [2026-05-07 10:29:26] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 228 个，跳过未变化子树 0 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3060, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 10:29:26] [2026-05-07 10:29:26] {WARNING}
[arg0] "[同步阶段] 轻量刷新完成，用时 14.99s"   ----code_context : lprint(f"[同步阶段] 轻量刷新完成，用时 {time.time() - tree_t0:.2f}s")
            self.append_log("树视图已刷新，显示 Muse 路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11826, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:29:26] [2026-05-07 10:29:26] {WARNING}
[arg0] "[同步阶段] 开始更新UI统计"   ----code_context : lprint("[同步阶段] 开始更新UI统计")
                self.data_center.ui_helper.update_muse_category_stats(
                    muse_category_count=stats.get("muse_category_count", 0),
                    local_matched_count=stats.get("local_matched_count", 0),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11831, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:29:26] [2026-05-07 10:29:26] {WARNING}
[arg0] "UI 统计已更新: Muse分类=15272, 匹配=0"   ----code_context : lprint(
                    f"UI 统计已更新: Muse分类={stats.get('muse_category_count', 0)}, "
                    f"匹配={stats.get('local_matched_count', 0)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11836, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:29:26] [2026-05-07 10:29:26] {WARNING}
[arg0] "[同步阶段] UI统计更新完成，用时 0.00s"   ----code_context : lprint(f"[同步阶段] UI统计更新完成，用时 {time.time() - stats_t0:.2f}s")
            self.append_log("开始后台下载并匹配 Muse 资产...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11840, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:29:26] [2026-05-07 10:29:26] {WARNING}
[arg0] "[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 15.00s"   ----code_context : lprint(f"[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 {time.time() - stage_t0:.2f}s")
            thr = MuseAssetSyncThread(
                self.muse_tool,
                root_node,
                parent=self,
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11844, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:29:26] [2026-05-07 10:29:26] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", true]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", true]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] ["Muse分支路径", null]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 2/4   

[2026-05-07 10:29:26] [2026-05-07 10:29:26] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 10:29:26] [2026-05-07 10:29:26] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:29:31 ======
[2026-05-07 10:29:30] [2026-05-07 10:29:30] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分类树"), ("缓存文件", full_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:968, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 10:29:30] [2026-05-07 10:29:30] {WARNING}
[arg0] "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，已根据 muse_path 在全量分类树缓存上回退解析: muse_path='备份资源包/J/H42' -> id=412614732152833"
[arg1] "warning"   ----code_context : lprint(
                                    "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，"
                                    f"已根据 muse_path 在全量分类树缓存上回退解析: muse_path={mp!r} -> id={category_id}",
                                    "warning",
                                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1225, -fn: run, 打印次数: 1/4   

[2026-05-07 10:29:30] [2026-05-07 10:29:30] {WARNING}
[arg0] "[资产同步缓存检查] 分类=412614732152833, use_local_asset_cache=True, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
                        "[资产同步缓存检查] "
                        f"分类={cid}, use_local_asset_cache={self._use_local_asset_cache}, "
                        f"cache_file={cache_file_path or '<none>'}, cache_file_exists={cache_file_hit}"
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1539, -fn: run, 打印次数: 1/4   

[2026-05-07 10:29:30] [2026-05-07 10:29:30] {WARNING}
[arg0] "[asset_cache] 请求分类资产缓存: categories=1, use_cache=True, use_file_cache=True, save_to_file=False, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
            "[asset_cache] 请求分类资产缓存: "
            f"categories={len(category_ids)}, "
            f"use_cache={use_cache}, use_file_cache={use_file_cache}, save_to_file={save_to_file}, "
            f"cache_file={cache_file or '<none>'}, cache_file_exists={cache_file_exists}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:262, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:29:53 ======
[2026-05-07 10:29:50] [2026-05-07 10:29:50] {WARNING}
[arg0] "[asset_cache] 命中文件缓存并加载成功: L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl"   ----code_context : lprint(f"[asset_cache] 命中文件缓存并加载成功: {cache_file}")
                    return typed_loaded 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:312, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 8 条 @ 2026-05-07 10:30:07 ======
[2026-05-07 10:30:05] [2026-05-07 10:30:05] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 10:30:05] [2026-05-07 10:30:05] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3797, -fn: _flush_scan_cache_after_metrics, 打印次数: 2/4   

[2026-05-07 10:30:05] [2026-05-07 10:30:05] {WARNING}
[arg0] "[资产同步进度] [cache-hit] 命中资产缓存并更新UI: 分类 412614732152833 | 资产 40701"   ----code_context : lprint(f"[资产同步进度] {message}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11658, -fn: _on_muse_asset_sync_progress, 打印次数: 1/4   

[2026-05-07 10:30:05] [2026-05-07 10:30:05] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 10:30:05] [2026-05-07 10:30:05] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.278858s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 10:30:05] [2026-05-07 10:30:05] {WARNING}
[arg0] "[资产同步完成] 触发轻量树刷新（跳过整树重建）"   ----code_context : lprint("[资产同步完成] 触发轻量树刷新（跳过整树重建）")
                self.data_center.ui_helper.update_visible_tree_items_only(qtree_root) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11710, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 10:30:05] [2026-05-07 10:30:05] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40701]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1397, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 3/4   

[2026-05-07 10:30:06] [2026-05-07 10:30:06] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 319]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3756, -fn: _collect_selective_metrics_roots, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:30:10 ======
[2026-05-07 10:30:10] [2026-05-07 10:30:10] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3879, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 10:30:10] [2026-05-07 10:30:10] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.626009]
[arg2] ["folders", 51201]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3889, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 10:30:10] [2026-05-07 10:30:10] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=1383057002000, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3938, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 10:30:10] [2026-05-07 10:30:10] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51201]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3998, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 10:30:13 ======
[2026-05-07 10:30:11] [2026-05-07 10:30:11] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=5.74s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3005, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:30:12] [2026-05-07 10:30:12] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=1.21s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3047, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:30:13] [2026-05-07 10:30:13] {WARNING}
[arg0] "📊 统计更新: 发现 40995 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4967, -fn: update_statistics, 打印次数: 3/4   

[2026-05-07 10:30:13] [2026-05-07 10:30:13] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.23s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3059, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:30:13] [2026-05-07 10:30:13] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 0 个，跳过未变化子树 1 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3060, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:30:13] [2026-05-07 10:30:13] {WARNING}
[arg0] "[资产同步完成] 轻量树刷新完成，用时 7.177755s"   ----code_context : lprint(f"[资产同步完成] 轻量树刷新完成，用时 {time.time() - _light_t0:.6f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11712, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:30:16 ======
[2026-05-07 10:30:14] [2026-05-07 10:30:14] {WARNING}
[arg0] "[asset_sync][result]"
[arg1] ["folder_count", 55908]
[arg2] ["folders_with_category_id", 14734]
[arg3] ["category_query_count", 1]
[arg4] ["total_assets", 40701]
[arg5] ["total_matched", 0]
[arg6] ["mount_failed_count", 0]
[arg7] [
    "mount_failed_reason_counts",
    {}
]   ----code_context : lprint(
                "[asset_sync][result]",
                ("folder_count", folder_count),
                ("folders_with_category_id", folders_with_id),
                ("category_query_count", category_count),
                ("total_assets", total_assets),
                ("total_matched", total_matched),
                ("mount_failed_count", mount_failed_count),
                ("mount_failed_reason_counts", mount_failed_reason_counts),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11751, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 10:30:14] [2026-05-07 10:30:14] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 10:30:14] [2026-05-07 10:30:14] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 10:30:41 ======
[2026-05-07 10:30:39] [2026-05-07 10:30:39] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 10:30:39] [2026-05-07 10:30:39] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3797, -fn: _flush_scan_cache_after_metrics, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:31:14 ======
[2026-05-07 10:31:13] [2026-05-07 10:31:13] {WARNING}
[arg0] "[asset_sync][dialog_done]"
[arg1] ["total_matched", 0]
[arg2] ["total_assets", 40701]
[arg3] ["mount_failed_count", 0]   ----code_context : lprint(
                "[asset_sync][dialog_done]",
                ("total_matched", total_matched),
                ("total_assets", total_assets),
                ("mount_failed_count", mount_failed_count),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11791, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 10:31:35 ======
[2026-05-07 10:31:33] [2026-05-07 10:31:33] {WARNING}
[arg0] "[FILTER][START]"
[arg1] ["keyword", ""]
[arg2] ["filter_column", "全部列"]
[arg3] ["filter_column_index", -1]
[arg4] ["signal_arg_count", 1]
[arg5] ["source_count", 279338]   ----code_context : lprint(
            "[FILTER][START]",
            ("keyword", keyword_text),
            ("filter_column", filter_column_name),
            ("filter_column_index", filter_column_index),
            ("signal_arg_count", len(args)),
            ("source_count", len(self.filter_source_nodes)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11888, -fn: apply_filters, 打印次数: 1/4   

[2026-05-07 10:31:33] [2026-05-07 10:31:33] {WARNING}
[arg0] "[status_filter][tree_filter_selected]"
[arg1] ["status_text", "目录：仅显示挂载了多个Muse资产的目录"]   ----code_context : lprint(
                "[status_filter][tree_filter_selected]",
                ("status_text", status_text),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11912, -fn: apply_filters, 打印次数: 1/4   

[2026-05-07 10:31:33] [2026-05-07 10:31:33] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 238637]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2324, -fn: update_file_tree, 打印次数: 2/4   

[2026-05-07 10:31:33] [2026-05-07 10:31:33] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40701]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1397, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 4/4   

[2026-05-07 10:31:33] [2026-05-07 10:31:33] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 319]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3756, -fn: _collect_selective_metrics_roots, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:31:38 ======
[2026-05-07 10:31:37] [2026-05-07 10:31:37] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3879, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 4/4   

[2026-05-07 10:31:37] [2026-05-07 10:31:37] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.064738]
[arg2] ["folders", 51201]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3889, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 4/4   

[2026-05-07 10:31:37] [2026-05-07 10:31:37] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=1383057002000, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3938, -fn: _apply_effective_metrics_by_path, 打印次数: 4/4   

[2026-05-07 10:31:37] [2026-05-07 10:31:37] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51201]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3998, -fn: _apply_effective_metrics_by_path, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:31:41 ======
[2026-05-07 10:31:38] [2026-05-07 10:31:38] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=1383057002000, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2370, -fn: update_file_tree, 打印次数: 2/4   

[2026-05-07 10:31:40] [2026-05-07 10:31:40] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=1382998273536, import_class_id=1382998273536, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4371, -fn: _build_folder_item, 打印次数: 2/4   

[2026-05-07 10:31:40] [2026-05-07 10:31:40] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 2.206451s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2386, -fn: update_file_tree, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 10:31:44 ======
[2026-05-07 10:31:42] [2026-05-07 10:31:42] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 15 个 item，用时 2.015978s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2402, -fn: update_file_tree, 打印次数: 2/4   

[2026-05-07 10:31:42] [2026-05-07 10:31:42] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2418, -fn: update_file_tree, 打印次数: 2/4   

[2026-05-07 10:31:43] [2026-05-07 10:31:43] {WARNING}
[arg0] "[FILTER][RESULT]"
[arg1] ["keyword", ""]
[arg2] ["filter_column", "全部列"]
[arg3] ["filter_column_index", -1]
[arg4] ["folder_name", "H42"]
[arg5] ["status", ""]
[arg6] ["matched_count", 10560]
[arg7] ["source_count", 279338]
[arg8] ["file_node_count", 238637]
[arg9] ["muse_asset_node_count", 40701]
[arg10] ["matched_tree_item_count", 0]
[arg11] ["visible_tree_item_count", 37]   ----code_context : lprint(
            "[FILTER][RESULT]",
            ("keyword", keyword),
            ("filter_column", filter_column_name),
            ("filter_column_index", filter_column_index),
            ("folder_name", str(folder_name or "").strip()),
            ("status", str(status or "").strip()),
            ("matched_count", len(filtered)),
            ("source_count", len(source_nodes)),
            ("file_node_count", len(self.all_files)),
            ("muse_asset_node_count", len(self._get_muse_asset_nodes_from_tree())),
            ("matched_tree_item_count", matched_item_count),
            ("visible_tree_item_count", visible_item_count),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11991, -fn: apply_filters, 打印次数: 1/4   

[2026-05-07 10:31:43] [2026-05-07 10:31:43] {WARNING}
[arg0] "[FILTER][START]"
[arg1] ["keyword", ""]
[arg2] ["filter_column", "全部列"]
[arg3] ["filter_column_index", -1]
[arg4] ["signal_arg_count", 0]
[arg5] ["source_count", 279338]   ----code_context : lprint(
            "[FILTER][START]",
            ("keyword", keyword_text),
            ("filter_column", filter_column_name),
            ("filter_column_index", filter_column_index),
            ("signal_arg_count", len(args)),
            ("source_count", len(self.filter_source_nodes)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11888, -fn: apply_filters, 打印次数: 2/4   

[2026-05-07 10:31:43] [2026-05-07 10:31:43] {WARNING}
[arg0] "[status_filter][tree_filter_selected]"
[arg1] ["status_text", "目录：仅显示挂载了多个Muse资产的目录"]   ----code_context : lprint(
                "[status_filter][tree_filter_selected]",
                ("status_text", status_text),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11912, -fn: apply_filters, 打印次数: 2/4   

[2026-05-07 10:31:43] [2026-05-07 10:31:43] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 238637]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2324, -fn: update_file_tree, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:31:54 ======
[2026-05-07 10:31:52] [2026-05-07 10:31:52] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=1383057002000, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2370, -fn: update_file_tree, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:31:57 ======
[2026-05-07 10:31:55] [2026-05-07 10:31:55] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=1382998273536, import_class_id=1382998273536, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4371, -fn: _build_folder_item, 打印次数: 3/4   

[2026-05-07 10:31:55] [2026-05-07 10:31:55] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 2.422059s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2386, -fn: update_file_tree, 打印次数: 3/4   

[2026-05-07 10:31:57] [2026-05-07 10:31:57] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 15 个 item，用时 2.135855s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2402, -fn: update_file_tree, 打印次数: 3/4   

[2026-05-07 10:31:57] [2026-05-07 10:31:57] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2418, -fn: update_file_tree, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:32:00 ======
[2026-05-07 10:31:57] [2026-05-07 10:31:57] {WARNING}
[arg0] "[FILTER][RESULT]"
[arg1] ["keyword", ""]
[arg2] ["filter_column", "全部列"]
[arg3] ["filter_column_index", -1]
[arg4] ["folder_name", "H42"]
[arg5] ["status", ""]
[arg6] ["matched_count", 10560]
[arg7] ["source_count", 279338]
[arg8] ["file_node_count", 238637]
[arg9] ["muse_asset_node_count", 40701]
[arg10] ["matched_tree_item_count", 0]
[arg11] ["visible_tree_item_count", 37]   ----code_context : lprint(
            "[FILTER][RESULT]",
            ("keyword", keyword),
            ("filter_column", filter_column_name),
            ("filter_column_index", filter_column_index),
            ("folder_name", str(folder_name or "").strip()),
            ("status", str(status or "").strip()),
            ("matched_count", len(filtered)),
            ("source_count", len(source_nodes)),
            ("file_node_count", len(self.all_files)),
            ("muse_asset_node_count", len(self._get_muse_asset_nodes_from_tree())),
            ("matched_tree_item_count", matched_item_count),
            ("visible_tree_item_count", visible_item_count),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11991, -fn: apply_filters, 打印次数: 2/4   

[2026-05-07 10:31:57] [2026-05-07 10:31:57] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 4/4   

[2026-05-07 10:31:57] [2026-05-07 10:31:57] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 10:32:21 ======
[2026-05-07 10:32:21] [2026-05-07 10:32:21] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 4/4   

[2026-05-07 10:32:21] [2026-05-07 10:32:21] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3797, -fn: _flush_scan_cache_after_metrics, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:34:00 ======
[2026-05-07 10:33:59] [2026-05-07 10:33:59] {WARNING}
[arg0] "已收缩所有树节点"   ----code_context : lprint("已收缩所有树节点")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9631, -fn: toggle_tree_expansion, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:34:09 ======
[2026-05-07 10:34:07] [2026-05-07 10:34:07] {WARNING}
[arg0] "已展开所有树节点（含最深层懒加载节点）"   ----code_context : lprint("已展开所有树节点（含最深层懒加载节点）") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9655, -fn: toggle_tree_expansion, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:36:28 ======
[2026-05-07 10:36:27] [2026-05-07 10:36:27] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67f9b8d4e86eab775c314027/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67f9b8d4e86eab775c314027/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 1/6   

[2026-05-07 10:36:27] [2026-05-07 10:36:27] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67f9c4070fa0ee14f58d0389/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67f9c4070fa0ee14f58d0389/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 2/6   

[2026-05-07 10:36:28] [2026-05-07 10:36:28] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67f9d86d0fa0ee14f58d2177/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67f9d86d0fa0ee14f58d2177/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 3/6   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:36:31 ======
[2026-05-07 10:36:28] [2026-05-07 10:36:28] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67fa21937efd750843fff485/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67fa21937efd750843fff485/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 4/6   

[2026-05-07 10:36:28] [2026-05-07 10:36:28] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67fed7497b891d70f2df8f5c/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67fed7497b891d70f2df8f5c/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 5/6   

[2026-05-07 10:36:29] [2026-05-07 10:36:29] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67fea3577efd750843022053/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67fea3577efd750843022053/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 6/6   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:38:21 ======
[2026-05-07 10:38:20] [2026-05-07 10:38:20] {WARNING}
[arg0] "删除资产后缓存同步完成: 内存缓存更新 1 项/移除 55 条, 文件缓存更新 1 个/移除 55 条"
[arg1] "info"   ----code_context : lprint(
                "删除资产后缓存同步完成: "
                f"内存缓存更新 {in_memory_updated_files} 项/移除 {in_memory_removed_assets} 条, "
                f"文件缓存更新 {file_updated_count} 个/移除 {file_removed_assets} 条",
                "info",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:8567, -fn: _sync_asset_cache_after_delete, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:38:33 ======
[2026-05-07 10:38:31] [2026-05-07 10:38:31] {WARNING}
[arg0] "删除资产完成：成功 55，失败 0"
[arg1] "info"   ----code_context : lprint(summary, "info") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:8477, -fn: _delete_muse_assets, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:40:33 ======
[2026-05-07 10:40:33] [2026-05-07 10:40:33] {WARNING}
[arg0] "窗口正在关闭..."   ----code_context : lprint("窗口正在关闭...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4633, -fn: on_window_close, 打印次数: 1/4   

[2026-05-07 10:40:33] [2026-05-07 10:40:33] {WARNING}
[arg0] "[ui_state] 已写入: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : lprint(f"[ui_state] 已写入: {self._ui_state_cache_file}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12500, -fn: save_combo_state_to_temp_file, 打印次数: 1/4   

[2026-05-07 10:40:33] [2026-05-07 10:40:33] {WARNING}
[arg0] "[ui_state] 已保存: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : lprint(f"[ui_state] 已保存: {self._ui_state_cache_file}")
        except Exception: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4638, -fn: on_window_close, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 50 条 @ 2026-05-07 10:43:33 ======
[2026-05-07 10:43:27] [2026-05-07 10:43:27] {WARNING}
[arg0] "[PYTRACEMP][DATE_LOG_PATH]"
[arg1] ["module_name", "j_disc_backup_ui"]
[arg2] ["log_base_dir", "D:\\Temp\\Log"]
[arg3] ["date_log_path", "D:\\Temp\\Log\\j_disc_backup_ui\\20260507.md"]
[arg4] ["cleared", true]
[arg5] ["clear_error", null]   ----code_context : lprint(
            "[PYTRACEMP][DATE_LOG_PATH]",
            ("module_name", module_name),
            ("log_base_dir", log_base_dir),
            ("date_log_path", date_log_path),
            ("cleared", cleared),
            ("clear_error", clear_error),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\@baselibs\pytracemp\__init__.py:54, -fn: _print_date_log_path_on_import, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[启动参数][argv_parse]"
[arg1] [
    "argv",
    [
        "c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py",
        "--enable-trace=True",
        "--source-dir",
        "J:",
        "--upload-dir",
        "H42",
        "--ignore-ui-state",
        "--separate-taskbar-icon"
    ]
]
[arg2] ["arg_source_dir", "J:"]
[arg3] ["arg_upload_dir", "H42"]
[arg4] ["arg_ignore_ui_state", true]
[arg5] ["arg_taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1"]
[arg6] ["arg_separate_taskbar_icon", true]   ----code_context : lprint(
        "[启动参数][argv_parse]",
        ("argv", sys.argv),
        ("arg_source_dir", args.source_dir or "<empty>"),
        ("arg_upload_dir", args.upload_dir or "<empty>"),
        ("arg_ignore_ui_state", args.ignore_ui_state),
        ("arg_taskbar_app_id", args.taskbar_app_id or "<empty>"),
        ("arg_separate_taskbar_icon", args.separate_taskbar_icon),
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12477, -fn: main, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[启动参数][final]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1.pid53292"]
[arg5] ["enable_trace", true]   ----code_context : lprint(
        "[启动参数][final]",
        ("source_dir", args.source_dir or "<empty>"),
        ("upload_dir", args.upload_dir or "<empty>"),
        ("ignore_ui_state", args.ignore_ui_state),
        ("taskbar_app_id", runtime_taskbar_app_id),
        ("enable_trace", enable_trace),
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12489, -fn: main, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
    lprint("J盘备份到Muse UI 启动") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12506, -fn: main, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "J盘备份到Muse UI 启动"   ----code_context : lprint("J盘备份到Muse UI 启动")
    lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12507, -fn: main, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12508, -fn: main, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "正在初始化 UI..."   ----code_context : lprint("正在初始化 UI...")
    window = JDiscBackupUI(
        startup_source_dir=args.source_dir,
        startup_upload_dir=args.upload_dir,
        ignore_ui_state=args.ignore_ui_state,
        enable_trace=enable_trace,
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12513, -fn: main, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "正在创建数据中心..."   ----code_context : lprint("正在创建数据中心...")
        self.data_center = BackupDataCenter(self) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4236, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "配置加载成功: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置加载成功: {config_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:682, -fn: load_default_config, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "UI已根据配置更新（全量）"   ----code_context : lprint("UI已根据配置更新（全量）")
                return 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2096, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "数据中心创建完成"   ----code_context : lprint("数据中心创建完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4238, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['backup_source_dir']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[启动参数][应用后配置]"
[arg1] ["startup_source_dir", "J:"]
[arg2] ["startup_upload_dir", "H42"]
[arg3] ["startup_upload_is_all", false]
[arg4] ["config_source_dir", "J:"]   ----code_context : lprint(
            "[启动参数][应用后配置]",
            ("startup_source_dir", self._startup_source_dir or "<empty>"),
            ("startup_upload_dir", self._startup_upload_dir or "<empty>"),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ("config_source_dir", self.data_center.config.backup_source_dir),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4251, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[启动参数]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]   ----code_context : lprint(
                "[启动参数]",
                ("source_dir", self._startup_source_dir or "<使用配置>"),
                ("upload_dir", upload_dir_label),
                ("ignore_ui_state", self._ignore_ui_state),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4262, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("MuseTool 初始化参数:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4291, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "MuseTool 初始化参数:"   ----code_context : lprint("MuseTool 初始化参数:")
            lprint(f"  user_email: {user_email}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4292, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {user_email}")
            lprint(f"  organization_id: {organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4293, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {organization_id}")
            lprint(f"  asset_type: {asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4294, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {asset_type}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4295, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4296, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "MuseTool 初始化成功"   ----code_context : lprint("MuseTool 初始化成功")
            lprint("验证 MuseTool 运行身份:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4305, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "验证 MuseTool 运行身份:"   ----code_context : lprint("验证 MuseTool 运行身份:")
            lprint(f"  user_email: {identity.get('user_email', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4306, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {identity.get('user_email', '')}")
            lprint(f"  organization_id: {identity.get('organization_id', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4307, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {identity.get('organization_id', '')}")
            lprint(f"  asset_type: {identity.get('asset_type', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4308, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {identity.get('asset_type', '')}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4309, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "从 p4_to_muse.yaml 加载本地 source 预设: 58 个"   ----code_context : lprint(f"从 p4_to_muse.yaml 加载本地 source 预设: {len(mappings)} 个")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1578, -fn: refresh_source_mappings_from_yaml, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "正在扫描 J: 的文件夹列表..."   ----code_context : lprint(f"正在扫描 {backup_source_dir} 的文件夹列表...")
            try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4883, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "扫描到 67 个文件夹"   ----code_context : lprint(f"扫描到 {len(folders)} 个文件夹")
            except (PermissionError, OSError) as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4889, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[upload_dir_combo][init_start]"
[arg1] ["source_dir", "J:"]
[arg2] ["preferred_upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["startup_upload_explicit", true]
[arg5] ["startup_upload_is_all", false]   ----code_context : lprint(
            "[upload_dir_combo][init_start]",
            ("source_dir", backup_source_dir),
            ("preferred_upload_dir", preferred_upload_dir or "<empty>"),
            ("ignore_ui_state", self._ignore_ui_state),
            ("startup_upload_explicit", self._startup_upload_dir_is_explicit),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4909, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[upload_dir_combo][candidates]"
[arg1] [
    "candidate_values",
    [
        "H42"
    ]
]
[arg2] ["folder_count", 67]   ----code_context : lprint(
                "[upload_dir_combo][candidates]",
                ("candidate_values", candidate_values),
                ("folder_count", len(folders)),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4934, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "已加载 67 个文件夹到下拉框: ['00_doc', '123456', '2024风霁周会产出展示', '2025风霁周会产出展示', '2026风霁周会产出展示', '@Recycle', 'A49', 'Anim_library', 'Asset_library', 'DM139', 'DM142', 'GUI', 'GYL_Tools', 'H18', 'H42', 'H52', 'H55', 'H64', 'H65', 'H65_Dasha Taran', 'H70_临时', 'H72', 'H73', 'H74', 'H74-风霁月会产出材料', 'H75', 'H77', 'HXX(模板)', 'MA167', 'MA67', 'MA73', 'Projects', 'RigWork', 'S4', 'S7', 'SteamLibrary', 'U5', 'UE5 Demo', 'UXX', 'Vendor', 'X23', 'X33', 'X9', 'YY45', 'YY63', 'artlib_preview', 'blender', 'maya', 'origin_disk_J', 'prod_projs', 'render', 'sp', 'temp', 'work', 'zb', '临时文件', '供应商资料共享', '动捕演员资料库', '动画工具', '动画月会资料', '年度Showreel', '战斗场景——大鸭头', '游戏解包资源汇总', '竞标需求', '网易蛋仔派对', '迅雷云盘', '风雨项目集双周会产出材料']"   ----code_context : lprint(f"已加载 {len(folders)} 个文件夹到下拉框: {folders}")
        if selected_folder: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4963, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "uploadDirComboBox 自动选择: H42"   ----code_context : lprint(f"uploadDirComboBox 自动选择: {selected_folder}")
        lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4965, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[upload_dir_combo][init_done]"
[arg1] ["selected_folder", "H42"]
[arg2] ["current_text", "H42"]
[arg3] ["business_value", "H42"]   ----code_context : lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4966, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "扫描方式初始化完成，当前方式: os.scandir (性能优化)"   ----code_context : lprint(f"扫描方式初始化完成，当前方式: {ScanMethod.get_display_name(current_method)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5236, -fn: init_scan_method_ui, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "路径设置页已加载 5 条映射"   ----code_context : lprint(f"路径设置页已加载 {len(mappings)} 条映射")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5121, -fn: load_path_mapping_table, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[日志前缀][模式切换]"
[arg1] ["business_mode", "backup_file"]
[arg2] ["date_log_prefix", "j_disc_backup_file"]   ----code_context : lprint(
                "[日志前缀][模式切换]",
                ("business_mode", mode),
                ("date_log_prefix", log_prefix),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4548, -fn: _apply_date_log_prefix_by_mode, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 2/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 3/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['muse_root_category']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 2/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 4/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[trace][init]"
[arg1] ["enabled", true]
[arg2] ["source", "startup_arg"]   ----code_context : lprint(
            "[trace][init]",
            ("enabled", bool(self._startup_enable_trace)),
            ("source", "startup_arg"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5461, -fn: _init_trace_toggle_checkbox, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state"   ----code_context : lprint("[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4359, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "[启动缓存][候选]"
[arg1] ["current_ui_folder", "H42"]
[arg2] [
    "candidate_folders",
    [
        "H42"
    ]
]
[arg3] ["startup_upload_is_all", false]   ----code_context : lprint(
                "[启动缓存][候选]",
                ("current_ui_folder", current_ui_folder or "<empty>"),
                ("candidate_folders", candidate_folders),
                ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4581, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "发现Pickle缓存文件: L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"发现Pickle缓存文件: {pkl_cache_file}")
                lprint(f"正在自动加载缓存: folder={folder}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4597, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "正在自动加载缓存: folder=H42"   ----code_context : lprint(f"正在自动加载缓存: folder={folder}")
                success = self.data_center.load_scan_cache(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4598, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:43:30] [2026-05-07 10:43:30] {WARNING}
[arg0] "正在加载扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl, 大小: 363.95MB"   ----code_context : lprint(f"正在加载扫描缓存(Pickle): {pkl_path}, 大小: {size_mb:.2f}MB") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1396, -fn: load_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 10:43:53 ======
[2026-05-07 10:43:50] [2026-05-07 10:43:50] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:43:50] [2026-05-07 10:43:50] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.365189s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:43:50] [2026-05-07 10:43:50] {WARNING}
[arg0] "[qtree_root_node] 开始 render_root_node_change"   ----code_context : lprint("[qtree_root_node] 开始 render_root_node_change")
                    self.ui_helper.render_root_node_change(node, _from_data_center=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:925, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:43:51] [2026-05-07 10:43:51] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 238637]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2428, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:43:51] [2026-05-07 10:43:51] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40701]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 1/4   

[2026-05-07 10:43:51] [2026-05-07 10:43:51] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 319]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:43:59 ======
[2026-05-07 10:43:57] [2026-05-07 10:43:57] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3983, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 10:43:57] [2026-05-07 10:43:57] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 4.20175]
[arg2] ["folders", 51201]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3993, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 10:43:57] [2026-05-07 10:43:57] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2835437849680, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4042, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   

[2026-05-07 10:43:57] [2026-05-07 10:43:57] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51201]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4102, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 10:44:02 ======
[2026-05-07 10:44:00] [2026-05-07 10:44:00] {WARNING}
[arg0] "[effective_metrics] 根节点统计耗时: total=2.956324s, children_loop=2.956309s, writeback=0.000007s, children=20, attachment_total=726025, package_size_total=11908268298167"   ----code_context : lprint(
                "[effective_metrics] 根节点统计耗时: "
                f"total={total_elapsed:.6f}s, "
                f"children_loop={loop_elapsed:.6f}s, "
                f"writeback={writeback_elapsed:.6f}s, "
                f"children={len(getattr(node, 'children', []) or [])}, "
                f"attachment_total={int(node.attachment_count_total)}, "
                f"package_size_total={int(node.package_size_total)}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4231, -fn: _compute_and_set_effective_folder_metrics, 打印次数: 1/4   

[2026-05-07 10:44:01] [2026-05-07 10:44:01] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=2835437849680, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2474, -fn: update_file_tree, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 10:44:05 ======
[2026-05-07 10:44:04] [2026-05-07 10:44:04] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=2835382480528, import_class_id=2835382480528, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4475, -fn: _build_folder_item, 打印次数: 1/4   

[2026-05-07 10:44:04] [2026-05-07 10:44:04] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 2.437171s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2490, -fn: update_file_tree, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 42 条 @ 2026-05-07 10:44:08 ======
[2026-05-07 10:44:05] [2026-05-07 10:44:05] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=0.规范性文档及范例, children(folder=17, other=1)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 1/4   

[2026-05-07 10:44:06] [2026-05-07 10:44:06] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=1.过场动画, children(folder=14, other=2)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 2/4   

[2026-05-07 10:44:06] [2026-05-07 10:44:06] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=10.原画包装, children(folder=8, other=3)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 3/4   

[2026-05-07 10:44:06] [2026-05-07 10:44:06] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=11.AI, children(folder=2, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 4/4   

[2026-05-07 10:44:07] [2026-05-07 10:44:07] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 227 个 item，用时 3.242100s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2506, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:44:07] [2026-05-07 10:44:07] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40701]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2522, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:44:07] [2026-05-07 10:44:07] {WARNING}
[arg0] "📊 统计更新: 发现 40995 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 1/4   

[2026-05-07 10:44:07] [2026-05-07 10:44:07] {WARNING}
[arg0] "[qtree_root_node] 渲染完成，用时 16.879677s"   ----code_context : lprint(f"[qtree_root_node] 渲染完成，用时 {time.time() - _render_t0:.6f}s")
                    if self._startup_render_guard_enabled: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:927, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:44:07] [2026-05-07 10:44:07] {WARNING}
[arg0] "扫描缓存已加载(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已加载(Pickle v{loaded_version}): {pkl_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1481, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 10:44:07] [2026-05-07 10:44:07] {WARNING}
[arg0] "缓存加载成功，正在更新UI..."   ----code_context : lprint("缓存加载成功，正在更新UI...")
                self._apply_category_tree_cache_to_current_tree(context="auto_load_cache") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4606, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:44:07] [2026-05-07 10:44:07] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", false]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] [
    "Muse分支路径",
    [
        "备份资源包",
        "J",
        "H42"
    ]
]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分支树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分支树"), ("缓存文件", brunch_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:951, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "通过上游缓存逻辑加载分类树: L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"通过上游缓存逻辑加载分类树: {self._last_loaded_category_tree_cache_path}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:487, -fn: _try_hydrate_muse_category_tree_from_file_cache, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[分类树缓存][应用到当前树]"
[arg1] ["context", "auto_load_cache"]
[arg2] ["folder_name", "H42"]
[arg3] ["loaded", true]
[arg4] ["root_name", "H42"]
[arg5] ["root_muse_category_id", null]   ----code_context : lprint(
            "[分类树缓存][应用到当前树]",
            ("context", context or "<empty>"),
            ("folder_name", folder_name or "<empty>"),
            ("loaded", loaded),
            ("root_name", getattr(root_node, "name", "")),
            ("root_muse_category_id", getattr(root_node, "muse_category_id", None)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4867, -fn: _apply_category_tree_cache_to_current_tree, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "自动加载缓存完成"   ----code_context : lprint("自动加载缓存完成")
                self.refresh_cache_file_list() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4616, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 开始刷新缓存文件列表 - folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9465, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.01秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.10秒, folder=H42, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.12秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.15秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 获取缓存文件列表耗时: {time.time() - t1:.2f}秒，共 {len(cache_files)} 个文件, "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9473, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : lprint(
                f"目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder={folder_name}, "
                f"muse_path={getattr(target_node, 'muse_path', '')}",
                "warning",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9626, -fn: _resolve_expected_asset_cache_path, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] UI更新耗时: 0.044秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9527, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 总耗时: 0.20秒"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9528, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9529, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 开始刷新缓存文件列表 - folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9465, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=H42, age=0.066s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.01秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 获取缓存文件列表耗时: {time.time() - t1:.2f}秒，共 {len(cache_files)} 个文件, "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9473, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : lprint(
                f"目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder={folder_name}, "
                f"muse_path={getattr(target_node, 'muse_path', '')}",
                "warning",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9626, -fn: _resolve_expected_asset_cache_path, 打印次数: 2/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 2/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] UI更新耗时: 0.047秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9527, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "[性能] 总耗时: 0.06秒"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9528, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:44:08] [2026-05-07 10:44:08] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9529, -fn: refresh_cache_file_list, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:44:12 ======
[2026-05-07 10:44:09] [2026-05-07 10:44:09] {WARNING}
[arg0] "UI 窗口已显示"   ----code_context : lprint("UI 窗口已显示")
    try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12521, -fn: main, 打印次数: 1/4   

[2026-05-07 10:44:09] [2026-05-07 10:44:09] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 10:44:09] [2026-05-07 10:44:09] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 36 条 @ 2026-05-07 10:44:30 ======
[2026-05-07 10:44:27] [2026-05-07 10:44:27] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 10:44:27] [2026-05-07 10:44:27] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 1/4   

[2026-05-07 10:44:27] [2026-05-07 10:44:27] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 2/4   

[2026-05-07 10:44:27] [2026-05-07 10:44:27] {WARNING}
[arg0] "从缓存加载分类树，检查目录是否已存在..."   ----code_context : lprint("从缓存加载分类树，检查目录是否已存在...")
            if self.data_center.muse_category_tree is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10771, -fn: _ensure_category_tree_ready, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
        lprint("目录状态检查完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10842, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "目录状态检查完成:"   ----code_context : lprint("目录状态检查完成:")
        lprint(f"  总目录数: {total_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10843, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "  总目录数: 14745"   ----code_context : lprint(f"  总目录数: {total_count}")
        lprint(f"  已存在: {exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10844, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "  已存在: 0"   ----code_context : lprint(f"  已存在: {exists_count}")
        lprint(f"  未创建: {not_exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10845, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "  未创建: 14745"   ----code_context : lprint(f"  未创建: {not_exists_count}")
        lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10846, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10847, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）"   ----code_context : lprint("[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）")
        self.data_center.set_qtree_root_node(
            root_node,
            update_statistics=False,
            render_ui=False,
            emit_signal=True,
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10851, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "[目录状态检查] qtree_root_node 轻量回写完成，用时 0.00s"   ----code_context : lprint(f"[目录状态检查] qtree_root_node 轻量回写完成，用时 {time.time() - _ui_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10858, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "Muse 根分类: 备份资源包/J"   ----code_context : lprint(f"Muse 根分类: {muse_root}", force_print=True)
        lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11093, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "基础路径: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11094, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "本地文件夹总数: 55907"   ----code_context : lprint(f"本地文件夹总数: {total_folders}")
        self.append_log(f"本地文件夹总数: {total_folders}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11108, -fn: sync_muse_assets, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("CategoryService 参数验证:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:470, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "CategoryService 参数验证:"   ----code_context : lprint("CategoryService 参数验证:")
            lprint(f"  organization_id: {category_service.organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:471, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {category_service.organization_id}")
            lprint(f"  asset_type: {category_service.asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:472, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {category_service.asset_type}")
            lprint(f"  base_path: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:473, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "  base_path: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"  base_path: {base_path}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:474, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:475, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "开始查询文件夹在 Muse 中的分类 ID..."   ----code_context : lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:476, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "使用调用方传入的分类树 Pydantic 模型，跳过分类树读取"   ----code_context : lprint("使用调用方传入的分类树 Pydantic 模型，跳过分类树读取")
            elif category_tree_override is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:485, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("Muse 分类树结构:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:503, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "Muse 分类树结构:"   ----code_context : lprint("Muse 分类树结构:")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:504, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:505, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "组织: rsvs"   ----code_context : lprint(f"组织: {typed_payload.organization_id}")
            lprint(f"根分类数量: {len(org_categories)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:547, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "根分类数量: 1"   ----code_context : lprint(f"根分类数量: {len(org_categories)}")
            root_names = [_node_label(cat) for cat in org_categories] 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:548, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "根分类列表: ['备份资源包']"   ----code_context : lprint(f"根分类列表: {root_names}")
            if target_root_name: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:550, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "正在搜索目标分类: '备份资源包'"   ----code_context : lprint(f"正在搜索目标分类: '{target_root_name}'")
                target_category = find_category_by_name(org_categories, target_root_name) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:552, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "✓ 找到目标分类: '备份资源包' (ID: 411365586239489)"   ----code_context : lprint(f"✓ 找到目标分类: '{target_root_name}' (ID: {target_category.id})")
                    lprint(f"仅显示 '{target_root_name}' 分类树:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:555, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "仅显示 '备份资源包' 分类树:"   ----code_context : lprint(f"仅显示 '{target_root_name}' 分类树:")
                    print_category_tree([target_category], 0) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:556, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "├─ [0] 备份资源包 (ID: 411365586239489)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 1/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "  ├─ [1] J (ID: 411512801853441)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 2/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "    ├─ [2] H42 (ID: 412614732152833)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 3/4   

[2026-05-07 10:44:28] [2026-05-07 10:44:28] {WARNING}
[arg0] "      ├─ [3] 0.规范性文档及范例 (ID: 412614732152834)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 30 条 @ 2026-05-07 10:44:33 ======
[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"配置的根分类: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:565, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "配置的根分类: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"配置的根分类: {base_path}")
            lprint(f"Muse 分类总数: {muse_category_count[0]}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:566, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "Muse 分类总数: 15272"   ----code_context : lprint(f"Muse 分类总数: {muse_category_count[0]}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:567, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:568, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "正在构建路径索引..."   ----code_context : lprint("正在构建路径索引...")
            path_to_id_map = {} 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:571, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "路径索引构建完成，共 15272 个路径"   ----code_context : lprint(f"路径索引构建完成，共 {len(path_to_id_map)} 个路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:607, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "✗ [root] 备份资源包/J/H42 → 未找到"
[arg1] "warning"   ----code_context : lprint(f"✗ [root] {root_path_str} → 未找到", "warning")
                else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:665, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "根节点有 20 个子节点"   ----code_context : lprint(f"根节点有 {len(root_node.children)} 个子节点")
            for child in root_node.children: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:670, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "✗ [0] 备份资源包/J/H42/0.规范性文档及范例 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/CG流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 2/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 3/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "    ✗ [2] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 4/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"文件夹状态更新完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:674, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "文件夹状态更新完成:"   ----code_context : lprint(f"文件夹状态更新完成:")
            lprint(f"  处理文件夹: {processed_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:675, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "  处理文件夹: 55907 个"   ----code_context : lprint(f"  处理文件夹: {processed_count[0]} 个")
            lprint(f"  匹配成功: {matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:676, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "  匹配成功: 0 个"   ----code_context : lprint(f"  匹配成功: {matched_count[0]} 个")
            lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:677, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "  未匹配: 55907 个"   ----code_context : lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个")
            if matched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:678, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "  未匹配样本(前5):"   ----code_context : lprint("  未匹配样本(前5):")
                for item in unmatched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:684, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/CG流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 2/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 3/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 4/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "  Muse分类总数: 15272 个"   ----code_context : lprint(f"  Muse分类总数: {muse_category_count[0]} 个")
            if omitted_log_count[0] > 0: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:687, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "  详细日志省略: 55877 条（已限流到前 30 条）"   ----code_context : lprint(f"  详细日志省略: {omitted_log_count[0]} 条（已限流到前 {max_detail_logs} 条）")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:689, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            # lprint.trace_start(auto_result=True, 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:690, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "[同步阶段] 已收到分类树结果，准备进入资产同步前处理"   ----code_context : lprint("[同步阶段] 已收到分类树结果，准备进入资产同步前处理")
            if not self.muse_tool or not self.data_center.qtree_root_node: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11563, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "[同步阶段] 写入分类树模型完成，用时 0.00s"   ----code_context : lprint(f"[同步阶段] 写入分类树模型完成，用时 {time.time() - stage_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11572, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）"   ----code_context : lprint("[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）")
            self.data_center.ui_helper.update_visible_tree_items_only(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11577, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40701]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 2/4   

[2026-05-07 10:44:32] [2026-05-07 10:44:32] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 319]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 10:44:39 ======
[2026-05-07 10:44:37] [2026-05-07 10:44:37] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3983, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 10:44:37] [2026-05-07 10:44:37] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 4.144918]
[arg2] ["folders", 51201]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3993, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 10:44:37] [2026-05-07 10:44:37] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2835437849680, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4042, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 10:44:37] [2026-05-07 10:44:37] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51201]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4102, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 10:44:38] [2026-05-07 10:44:38] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=6.36s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 12 条 @ 2026-05-07 10:44:48 ======
[2026-05-07 10:44:47] [2026-05-07 10:44:47] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=8.87s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 10:44:48] [2026-05-07 10:44:48] {WARNING}
[arg0] "📊 统计更新: 发现 40995 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 2/4   

[2026-05-07 10:44:48] [2026-05-07 10:44:48] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.22s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 10:44:48] [2026-05-07 10:44:48] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 228 个，跳过未变化子树 0 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 10:44:48] [2026-05-07 10:44:48] {WARNING}
[arg0] "[同步阶段] 轻量刷新完成，用时 15.47s"   ----code_context : lprint(f"[同步阶段] 轻量刷新完成，用时 {time.time() - tree_t0:.2f}s")
            self.append_log("树视图已刷新，显示 Muse 路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11579, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:44:48] [2026-05-07 10:44:48] {WARNING}
[arg0] "[同步阶段] 开始更新UI统计"   ----code_context : lprint("[同步阶段] 开始更新UI统计")
                self.data_center.ui_helper.update_muse_category_stats(
                    muse_category_count=stats.get("muse_category_count", 0),
                    local_matched_count=stats.get("local_matched_count", 0),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11584, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:44:48] [2026-05-07 10:44:48] {WARNING}
[arg0] "UI 统计已更新: Muse分类=15272, 匹配=0"   ----code_context : lprint(
                    f"UI 统计已更新: Muse分类={stats.get('muse_category_count', 0)}, "
                    f"匹配={stats.get('local_matched_count', 0)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11589, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:44:48] [2026-05-07 10:44:48] {WARNING}
[arg0] "[同步阶段] UI统计更新完成，用时 0.00s"   ----code_context : lprint(f"[同步阶段] UI统计更新完成，用时 {time.time() - stats_t0:.2f}s")
            self.append_log("开始后台下载并匹配 Muse 资产...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11593, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:44:48] [2026-05-07 10:44:48] {WARNING}
[arg0] "[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 15.47s"   ----code_context : lprint(f"[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 {time.time() - stage_t0:.2f}s")
            thr = MuseAssetSyncThread(
                self.muse_tool,
                root_node,
                parent=self,
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11597, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:44:48] [2026-05-07 10:44:48] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", true]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", true]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] ["Muse分支路径", null]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 2/4   

[2026-05-07 10:44:48] [2026-05-07 10:44:48] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 10:44:48] [2026-05-07 10:44:48] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:44:51 ======
[2026-05-07 10:44:51] [2026-05-07 10:44:51] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分类树"), ("缓存文件", full_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:968, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 10:44:51] [2026-05-07 10:44:51] {WARNING}
[arg0] "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，已根据 muse_path 在全量分类树缓存上回退解析: muse_path='备份资源包/J/H42' -> id=412614732152833"
[arg1] "warning"   ----code_context : lprint(
                                    "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，"
                                    f"已根据 muse_path 在全量分类树缓存上回退解析: muse_path={mp!r} -> id={category_id}",
                                    "warning",
                                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1225, -fn: run, 打印次数: 1/4   

[2026-05-07 10:44:51] [2026-05-07 10:44:51] {WARNING}
[arg0] "[资产同步缓存检查] 分类=412614732152833, use_local_asset_cache=True, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
                        "[资产同步缓存检查] "
                        f"分类={cid}, use_local_asset_cache={self._use_local_asset_cache}, "
                        f"cache_file={cache_file_path or '<none>'}, cache_file_exists={cache_file_hit}"
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1539, -fn: run, 打印次数: 1/4   

[2026-05-07 10:44:51] [2026-05-07 10:44:51] {WARNING}
[arg0] "[asset_cache] 请求分类资产缓存: categories=1, use_cache=True, use_file_cache=True, save_to_file=False, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
            "[asset_cache] 请求分类资产缓存: "
            f"categories={len(category_ids)}, "
            f"use_cache={use_cache}, use_file_cache={use_file_cache}, save_to_file={save_to_file}, "
            f"cache_file={cache_file or '<none>'}, cache_file_exists={cache_file_exists}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:262, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:45:07 ======
[2026-05-07 10:45:04] [2026-05-07 10:45:04] {WARNING}
[arg0] "[asset_cache] 命中文件缓存并加载成功: L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl"   ----code_context : lprint(f"[asset_cache] 命中文件缓存并加载成功: {cache_file}")
                    return typed_loaded 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:312, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 8 条 @ 2026-05-07 10:45:19 ======
[2026-05-07 10:45:17] [2026-05-07 10:45:17] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 10:45:17] [2026-05-07 10:45:17] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 2/4   

[2026-05-07 10:45:17] [2026-05-07 10:45:17] {WARNING}
[arg0] "[资产同步进度] [cache-hit] 命中资产缓存并更新UI: 分类 412614732152833 | 资产 40646"   ----code_context : lprint(f"[资产同步进度] {message}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11411, -fn: _on_muse_asset_sync_progress, 打印次数: 1/4   

[2026-05-07 10:45:17] [2026-05-07 10:45:17] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 10:45:18] [2026-05-07 10:45:18] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.369852s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 10:45:18] [2026-05-07 10:45:18] {WARNING}
[arg0] "[资产同步完成] 触发轻量树刷新（跳过整树重建）"   ----code_context : lprint("[资产同步完成] 触发轻量树刷新（跳过整树重建）")
                self.data_center.ui_helper.update_visible_tree_items_only(qtree_root) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11463, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 10:45:18] [2026-05-07 10:45:18] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40646]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 3/4   

[2026-05-07 10:45:18] [2026-05-07 10:45:18] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 319]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 10:45:25 ======
[2026-05-07 10:45:23] [2026-05-07 10:45:23] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3983, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 10:45:23] [2026-05-07 10:45:23] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.928075]
[arg2] ["folders", 51201]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3993, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 10:45:23] [2026-05-07 10:45:23] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2835437849680, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4042, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 10:45:23] [2026-05-07 10:45:23] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51201]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4102, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 10:45:24] [2026-05-07 10:45:24] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=6.29s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:45:25] [2026-05-07 10:45:25] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=1.22s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 7 条 @ 2026-05-07 10:45:29 ======
[2026-05-07 10:45:26] [2026-05-07 10:45:26] {WARNING}
[arg0] "📊 统计更新: 发现 40995 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 3/4   

[2026-05-07 10:45:26] [2026-05-07 10:45:26] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.26s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:45:26] [2026-05-07 10:45:26] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 0 个，跳过未变化子树 1 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:45:26] [2026-05-07 10:45:26] {WARNING}
[arg0] "[资产同步完成] 轻量树刷新完成，用时 7.778531s"   ----code_context : lprint(f"[资产同步完成] 轻量树刷新完成，用时 {time.time() - _light_t0:.6f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11465, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 10:45:27] [2026-05-07 10:45:27] {WARNING}
[arg0] "[asset_sync][result]"
[arg1] ["folder_count", 55908]
[arg2] ["folders_with_category_id", 14734]
[arg3] ["category_query_count", 1]
[arg4] ["total_assets", 40646]
[arg5] ["total_matched", 0]
[arg6] ["mount_failed_count", 0]
[arg7] [
    "mount_failed_reason_counts",
    {}
]   ----code_context : lprint(
                "[asset_sync][result]",
                ("folder_count", folder_count),
                ("folders_with_category_id", folders_with_id),
                ("category_query_count", category_count),
                ("total_assets", total_assets),
                ("total_matched", total_matched),
                ("mount_failed_count", mount_failed_count),
                ("mount_failed_reason_counts", mount_failed_reason_counts),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11504, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 10:45:27] [2026-05-07 10:45:27] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 10:45:27] [2026-05-07 10:45:27] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 10:45:47 ======
[2026-05-07 10:45:47] [2026-05-07 10:45:47] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 10:45:47] [2026-05-07 10:45:47] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:46:08 ======
[2026-05-07 10:46:06] [2026-05-07 10:46:06] {WARNING}
[arg0] "[asset_sync][dialog_done]"
[arg1] ["total_matched", 0]
[arg2] ["total_assets", 40646]
[arg3] ["mount_failed_count", 0]   ----code_context : lprint(
                "[asset_sync][dialog_done]",
                ("total_matched", total_matched),
                ("total_assets", total_assets),
                ("mount_failed_count", mount_failed_count),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11544, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 10:53:24 ======
[2026-05-07 10:53:24] [2026-05-07 10:53:24] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 4/4   

[2026-05-07 10:53:24] [2026-05-07 10:53:24] {WARNING}
[arg0] "统计信息: 238637 个文件, 55907 个目录, 40995 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:53:45 ======
[2026-05-07 10:53:43] [2026-05-07 10:53:43] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 50 条 @ 2026-05-07 10:57:00 ======
[2026-05-07 10:56:54] [2026-05-07 10:56:54] {WARNING}
[arg0] "[PYTRACEMP][DATE_LOG_PATH]"
[arg1] ["module_name", "j_disc_backup_ui"]
[arg2] ["log_base_dir", "D:\\Temp\\Log"]
[arg3] ["date_log_path", "D:\\Temp\\Log\\j_disc_backup_ui\\20260507.md"]
[arg4] ["cleared", true]
[arg5] ["clear_error", null]   ----code_context : lprint(
            "[PYTRACEMP][DATE_LOG_PATH]",
            ("module_name", module_name),
            ("log_base_dir", log_base_dir),
            ("date_log_path", date_log_path),
            ("cleared", cleared),
            ("clear_error", clear_error),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\@baselibs\pytracemp\__init__.py:54, -fn: _print_date_log_path_on_import, 打印次数: 1/4   

[2026-05-07 10:56:56] [2026-05-07 10:56:56] {WARNING}
[arg0] "[启动参数][argv_parse]"
[arg1] [
    "argv",
    [
        "c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py",
        "--enable-trace=True",
        "--source-dir",
        "J:",
        "--upload-dir",
        "H42",
        "--ignore-ui-state",
        "--separate-taskbar-icon"
    ]
]
[arg2] ["arg_source_dir", "J:"]
[arg3] ["arg_upload_dir", "H42"]
[arg4] ["arg_ignore_ui_state", true]
[arg5] ["arg_taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1"]
[arg6] ["arg_separate_taskbar_icon", true]   ----code_context : lprint(
        "[启动参数][argv_parse]",
        ("argv", sys.argv),
        ("arg_source_dir", args.source_dir or "<empty>"),
        ("arg_upload_dir", args.upload_dir or "<empty>"),
        ("arg_ignore_ui_state", args.ignore_ui_state),
        ("arg_taskbar_app_id", args.taskbar_app_id or "<empty>"),
        ("arg_separate_taskbar_icon", args.separate_taskbar_icon),
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12623, -fn: main, 打印次数: 1/4   

[2026-05-07 10:56:56] [2026-05-07 10:56:56] {WARNING}
[arg0] "[启动参数][final]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1.pid16756"]
[arg5] ["enable_trace", true]   ----code_context : lprint(
        "[启动参数][final]",
        ("source_dir", args.source_dir or "<empty>"),
        ("upload_dir", args.upload_dir or "<empty>"),
        ("ignore_ui_state", args.ignore_ui_state),
        ("taskbar_app_id", runtime_taskbar_app_id),
        ("enable_trace", enable_trace),
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12635, -fn: main, 打印次数: 1/4   

[2026-05-07 10:56:56] [2026-05-07 10:56:56] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
    lprint("J盘备份到Muse UI 启动") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12652, -fn: main, 打印次数: 1/4   

[2026-05-07 10:56:56] [2026-05-07 10:56:56] {WARNING}
[arg0] "J盘备份到Muse UI 启动"   ----code_context : lprint("J盘备份到Muse UI 启动")
    lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12653, -fn: main, 打印次数: 1/4   

[2026-05-07 10:56:56] [2026-05-07 10:56:56] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12654, -fn: main, 打印次数: 1/4   

[2026-05-07 10:56:56] [2026-05-07 10:56:56] {WARNING}
[arg0] "正在初始化 UI..."   ----code_context : lprint("正在初始化 UI...")
    window = JDiscBackupUI(
        startup_source_dir=args.source_dir,
        startup_upload_dir=args.upload_dir,
        ignore_ui_state=args.ignore_ui_state,
        enable_trace=enable_trace,
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12659, -fn: main, 打印次数: 1/4   

[2026-05-07 10:56:56] [2026-05-07 10:56:56] {WARNING}
[arg0] "正在创建数据中心..."   ----code_context : lprint("正在创建数据中心...")
        self.data_center = BackupDataCenter(self) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4237, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:56] [2026-05-07 10:56:56] {WARNING}
[arg0] "配置加载成功: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置加载成功: {config_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:682, -fn: load_default_config, 打印次数: 1/4   

[2026-05-07 10:56:56] [2026-05-07 10:56:56] {WARNING}
[arg0] "UI已根据配置更新（全量）"   ----code_context : lprint("UI已根据配置更新（全量）")
                return 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2096, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 10:56:56] [2026-05-07 10:56:56] {WARNING}
[arg0] "数据中心创建完成"   ----code_context : lprint("数据中心创建完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4239, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:56] [2026-05-07 10:56:56] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['backup_source_dir']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "[启动参数][应用后配置]"
[arg1] ["startup_source_dir", "J:"]
[arg2] ["startup_upload_dir", "H42"]
[arg3] ["startup_upload_is_all", false]
[arg4] ["config_source_dir", "J:"]   ----code_context : lprint(
            "[启动参数][应用后配置]",
            ("startup_source_dir", self._startup_source_dir or "<empty>"),
            ("startup_upload_dir", self._startup_upload_dir or "<empty>"),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ("config_source_dir", self.data_center.config.backup_source_dir),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4252, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "[启动参数]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]   ----code_context : lprint(
                "[启动参数]",
                ("source_dir", self._startup_source_dir or "<使用配置>"),
                ("upload_dir", upload_dir_label),
                ("ignore_ui_state", self._ignore_ui_state),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4263, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("MuseTool 初始化参数:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4292, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "MuseTool 初始化参数:"   ----code_context : lprint("MuseTool 初始化参数:")
            lprint(f"  user_email: {user_email}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4293, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {user_email}")
            lprint(f"  organization_id: {organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4294, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {organization_id}")
            lprint(f"  asset_type: {asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4295, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {asset_type}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4296, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4297, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "MuseTool 初始化成功"   ----code_context : lprint("MuseTool 初始化成功")
            lprint("验证 MuseTool 运行身份:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4306, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "验证 MuseTool 运行身份:"   ----code_context : lprint("验证 MuseTool 运行身份:")
            lprint(f"  user_email: {identity.get('user_email', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4307, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {identity.get('user_email', '')}")
            lprint(f"  organization_id: {identity.get('organization_id', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4308, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {identity.get('organization_id', '')}")
            lprint(f"  asset_type: {identity.get('asset_type', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4309, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {identity.get('asset_type', '')}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4310, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "从 p4_to_muse.yaml 加载本地 source 预设: 58 个"   ----code_context : lprint(f"从 p4_to_muse.yaml 加载本地 source 预设: {len(mappings)} 个")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1578, -fn: refresh_source_mappings_from_yaml, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "正在扫描 J: 的文件夹列表..."   ----code_context : lprint(f"正在扫描 {backup_source_dir} 的文件夹列表...")
            try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4884, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "扫描到 67 个文件夹"   ----code_context : lprint(f"扫描到 {len(folders)} 个文件夹")
            except (PermissionError, OSError) as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4890, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "[upload_dir_combo][init_start]"
[arg1] ["source_dir", "J:"]
[arg2] ["preferred_upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["startup_upload_explicit", true]
[arg5] ["startup_upload_is_all", false]   ----code_context : lprint(
            "[upload_dir_combo][init_start]",
            ("source_dir", backup_source_dir),
            ("preferred_upload_dir", preferred_upload_dir or "<empty>"),
            ("ignore_ui_state", self._ignore_ui_state),
            ("startup_upload_explicit", self._startup_upload_dir_is_explicit),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4910, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "[upload_dir_combo][candidates]"
[arg1] [
    "candidate_values",
    [
        "H42"
    ]
]
[arg2] ["folder_count", 67]   ----code_context : lprint(
                "[upload_dir_combo][candidates]",
                ("candidate_values", candidate_values),
                ("folder_count", len(folders)),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4935, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "已加载 67 个文件夹到下拉框: ['00_doc', '123456', '2024风霁周会产出展示', '2025风霁周会产出展示', '2026风霁周会产出展示', '@Recycle', 'A49', 'Anim_library', 'Asset_library', 'DM139', 'DM142', 'GUI', 'GYL_Tools', 'H18', 'H42', 'H52', 'H55', 'H64', 'H65', 'H65_Dasha Taran', 'H70_临时', 'H72', 'H73', 'H74', 'H74-风霁月会产出材料', 'H75', 'H77', 'HXX(模板)', 'MA167', 'MA67', 'MA73', 'Projects', 'RigWork', 'S4', 'S7', 'SteamLibrary', 'U5', 'UE5 Demo', 'UXX', 'Vendor', 'X23', 'X33', 'X9', 'YY45', 'YY63', 'artlib_preview', 'blender', 'maya', 'origin_disk_J', 'prod_projs', 'render', 'sp', 'temp', 'work', 'zb', '临时文件', '供应商资料共享', '动捕演员资料库', '动画工具', '动画月会资料', '年度Showreel', '战斗场景——大鸭头', '游戏解包资源汇总', '竞标需求', '网易蛋仔派对', '迅雷云盘', '风雨项目集双周会产出材料']"   ----code_context : lprint(f"已加载 {len(folders)} 个文件夹到下拉框: {folders}")
        if selected_folder: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4964, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "uploadDirComboBox 自动选择: H42"   ----code_context : lprint(f"uploadDirComboBox 自动选择: {selected_folder}")
        lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4966, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "[upload_dir_combo][init_done]"
[arg1] ["selected_folder", "H42"]
[arg2] ["current_text", "H42"]
[arg3] ["business_value", "H42"]   ----code_context : lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4967, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "扫描方式初始化完成，当前方式: os.scandir (性能优化)"   ----code_context : lprint(f"扫描方式初始化完成，当前方式: {ScanMethod.get_display_name(current_method)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5237, -fn: init_scan_method_ui, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "路径设置页已加载 5 条映射"   ----code_context : lprint(f"路径设置页已加载 {len(mappings)} 条映射")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5122, -fn: load_path_mapping_table, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "[日志前缀][模式切换]"
[arg1] ["business_mode", "backup_file"]
[arg2] ["date_log_prefix", "j_disc_backup_file"]   ----code_context : lprint(
                "[日志前缀][模式切换]",
                ("business_mode", mode),
                ("date_log_prefix", log_prefix),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4549, -fn: _apply_date_log_prefix_by_mode, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 2/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 3/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['muse_root_category']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 2/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 4/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "[trace][init]"
[arg1] ["enabled", true]
[arg2] ["source", "startup_arg"]   ----code_context : lprint(
            "[trace][init]",
            ("enabled", bool(self._startup_enable_trace)),
            ("source", "startup_arg"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5466, -fn: _init_trace_toggle_checkbox, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state"   ----code_context : lprint("[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4360, -fn: __init__, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "[启动缓存][候选]"
[arg1] ["current_ui_folder", "H42"]
[arg2] [
    "candidate_folders",
    [
        "H42"
    ]
]
[arg3] ["startup_upload_is_all", false]   ----code_context : lprint(
                "[启动缓存][候选]",
                ("current_ui_folder", current_ui_folder or "<empty>"),
                ("candidate_folders", candidate_folders),
                ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4582, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "发现Pickle缓存文件: L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"发现Pickle缓存文件: {pkl_cache_file}")
                lprint(f"正在自动加载缓存: folder={folder}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4598, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "正在自动加载缓存: folder=H42"   ----code_context : lprint(f"正在自动加载缓存: folder={folder}")
                success = self.data_center.load_scan_cache(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4599, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:56:57] [2026-05-07 10:56:57] {WARNING}
[arg0] "正在加载扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl, 大小: 361.14MB"   ----code_context : lprint(f"正在加载扫描缓存(Pickle): {pkl_path}, 大小: {size_mb:.2f}MB") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1396, -fn: load_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:57:16 ======
[2026-05-07 10:57:15] [2026-05-07 10:57:15] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 10:57:19 ======
[2026-05-07 10:57:16] [2026-05-07 10:57:16] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.335399s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:57:16] [2026-05-07 10:57:16] {WARNING}
[arg0] "[qtree_root_node] 开始 render_root_node_change"   ----code_context : lprint("[qtree_root_node] 开始 render_root_node_change")
                    self.ui_helper.render_root_node_change(node, _from_data_center=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:925, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:57:16] [2026-05-07 10:57:16] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 232304]
[arg4] ["muse_asset_nodes", 40646]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2428, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:57:16] [2026-05-07 10:57:16] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40646]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 1/4   

[2026-05-07 10:57:16] [2026-05-07 10:57:16] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 320]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:57:25 ======
[2026-05-07 10:57:22] [2026-05-07 10:57:22] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3983, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 10:57:22] [2026-05-07 10:57:22] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 4.506387]
[arg2] ["folders", 51202]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3993, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 10:57:22] [2026-05-07 10:57:22] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=1793797112784, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4042, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   

[2026-05-07 10:57:23] [2026-05-07 10:57:23] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51202]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4102, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 10:57:28 ======
[2026-05-07 10:57:26] [2026-05-07 10:57:26] {WARNING}
[arg0] "[effective_metrics] 根节点统计耗时: total=3.053281s, children_loop=3.053267s, writeback=0.000005s, children=20, attachment_total=725438, package_size_total=11904481607377"   ----code_context : lprint(
                "[effective_metrics] 根节点统计耗时: "
                f"total={total_elapsed:.6f}s, "
                f"children_loop={loop_elapsed:.6f}s, "
                f"writeback={writeback_elapsed:.6f}s, "
                f"children={len(getattr(node, 'children', []) or [])}, "
                f"attachment_total={int(node.attachment_count_total)}, "
                f"package_size_total={int(node.package_size_total)}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4231, -fn: _compute_and_set_effective_folder_metrics, 打印次数: 1/4   

[2026-05-07 10:57:27] [2026-05-07 10:57:27] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=1793797112784, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2474, -fn: update_file_tree, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 10:57:31 ======
[2026-05-07 10:57:29] [2026-05-07 10:57:29] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=1793729096096, import_class_id=1793729096096, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4475, -fn: _build_folder_item, 打印次数: 1/4   

[2026-05-07 10:57:29] [2026-05-07 10:57:29] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 2.401049s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2490, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:57:31] [2026-05-07 10:57:31] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=0.规范性文档及范例, children(folder=17, other=1)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 44 条 @ 2026-05-07 10:57:34 ======
[2026-05-07 10:57:31] [2026-05-07 10:57:31] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=1.过场动画, children(folder=14, other=2)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 2/4   

[2026-05-07 10:57:31] [2026-05-07 10:57:31] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=10.原画包装, children(folder=8, other=3)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 3/4   

[2026-05-07 10:57:31] [2026-05-07 10:57:31] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=11.AI, children(folder=2, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 4/4   

[2026-05-07 10:57:32] [2026-05-07 10:57:32] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 227 个 item，用时 3.164555s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2506, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:57:32] [2026-05-07 10:57:32] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40646]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2522, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "📊 统计更新: 发现 42190 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[qtree_root_node] 渲染完成，用时 17.130705s"   ----code_context : lprint(f"[qtree_root_node] 渲染完成，用时 {time.time() - _render_t0:.6f}s")
                    if self._startup_render_guard_enabled: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:927, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "扫描缓存已加载(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已加载(Pickle v{loaded_version}): {pkl_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1481, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "缓存加载成功，正在更新UI..."   ----code_context : lprint("缓存加载成功，正在更新UI...")
                self._apply_category_tree_cache_to_current_tree(context="auto_load_cache") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4607, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", false]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] [
    "Muse分支路径",
    [
        "备份资源包",
        "J",
        "H42"
    ]
]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分支树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分支树"), ("缓存文件", brunch_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:951, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "通过上游缓存逻辑加载分类树: L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"通过上游缓存逻辑加载分类树: {self._last_loaded_category_tree_cache_path}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:487, -fn: _try_hydrate_muse_category_tree_from_file_cache, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[分类树缓存][应用到当前树]"
[arg1] ["context", "auto_load_cache"]
[arg2] ["folder_name", "H42"]
[arg3] ["loaded", true]
[arg4] ["root_name", "H42"]
[arg5] ["root_muse_category_id", null]   ----code_context : lprint(
            "[分类树缓存][应用到当前树]",
            ("context", context or "<empty>"),
            ("folder_name", folder_name or "<empty>"),
            ("loaded", loaded),
            ("root_name", getattr(root_node, "name", "")),
            ("root_muse_category_id", getattr(root_node, "muse_category_id", None)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4868, -fn: _apply_category_tree_cache_to_current_tree, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "自动加载缓存完成"   ----code_context : lprint("自动加载缓存完成")
                self.refresh_cache_file_list() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4617, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 开始刷新缓存文件列表 - folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9611, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] listdir耗时: 0.01秒，共 1 个文件夹, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.02秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.10秒, folder=H42, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.15秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.20秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 获取缓存文件列表耗时: {time.time() - t1:.2f}秒，共 {len(cache_files)} 个文件, "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9619, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : lprint(
                f"目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder={folder_name}, "
                f"muse_path={getattr(target_node, 'muse_path', '')}",
                "warning",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9772, -fn: _resolve_expected_asset_cache_path, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] UI更新耗时: 0.064秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9673, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 总耗时: 0.28秒"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9674, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9675, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 开始刷新缓存文件列表 - folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9611, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=H42, age=0.111s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.03秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 获取缓存文件列表耗时: {time.time() - t1:.2f}秒，共 {len(cache_files)} 个文件, "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9619, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : lprint(
                f"目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder={folder_name}, "
                f"muse_path={getattr(target_node, 'muse_path', '')}",
                "warning",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9772, -fn: _resolve_expected_asset_cache_path, 打印次数: 2/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 2/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] UI更新耗时: 0.062秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9673, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "[性能] 总耗时: 0.09秒"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9674, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:57:33] [2026-05-07 10:57:33] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9675, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 10:57:34] [2026-05-07 10:57:34] {WARNING}
[arg0] "UI 窗口已显示"   ----code_context : lprint("UI 窗口已显示")
    try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12667, -fn: main, 打印次数: 1/4   

[2026-05-07 10:57:34] [2026-05-07 10:57:34] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 10:57:34] [2026-05-07 10:57:34] {WARNING}
[arg0] "统计信息: 232304 个文件, 55907 个目录, 42190 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 36 条 @ 2026-05-07 10:57:55 ======
[2026-05-07 10:57:52] [2026-05-07 10:57:52] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 10:57:52] [2026-05-07 10:57:52] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 1/4   

[2026-05-07 10:57:52] [2026-05-07 10:57:52] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 2/4   

[2026-05-07 10:57:52] [2026-05-07 10:57:52] {WARNING}
[arg0] "从缓存加载分类树，检查目录是否已存在..."   ----code_context : lprint("从缓存加载分类树，检查目录是否已存在...")
            if self.data_center.muse_category_tree is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10917, -fn: _ensure_category_tree_ready, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
        lprint("目录状态检查完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10988, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "目录状态检查完成:"   ----code_context : lprint("目录状态检查完成:")
        lprint(f"  总目录数: {total_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10989, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "  总目录数: 14745"   ----code_context : lprint(f"  总目录数: {total_count}")
        lprint(f"  已存在: {exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10990, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "  已存在: 0"   ----code_context : lprint(f"  已存在: {exists_count}")
        lprint(f"  未创建: {not_exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10991, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "  未创建: 14745"   ----code_context : lprint(f"  未创建: {not_exists_count}")
        lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10992, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10993, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）"   ----code_context : lprint("[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）")
        self.data_center.set_qtree_root_node(
            root_node,
            update_statistics=False,
            render_ui=False,
            emit_signal=True,
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10997, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "[目录状态检查] qtree_root_node 轻量回写完成，用时 0.00s"   ----code_context : lprint(f"[目录状态检查] qtree_root_node 轻量回写完成，用时 {time.time() - _ui_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11004, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "Muse 根分类: 备份资源包/J"   ----code_context : lprint(f"Muse 根分类: {muse_root}", force_print=True)
        lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11239, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "基础路径: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11240, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "本地文件夹总数: 55907"   ----code_context : lprint(f"本地文件夹总数: {total_folders}")
        self.append_log(f"本地文件夹总数: {total_folders}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11254, -fn: sync_muse_assets, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("CategoryService 参数验证:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:470, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "CategoryService 参数验证:"   ----code_context : lprint("CategoryService 参数验证:")
            lprint(f"  organization_id: {category_service.organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:471, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {category_service.organization_id}")
            lprint(f"  asset_type: {category_service.asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:472, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {category_service.asset_type}")
            lprint(f"  base_path: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:473, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "  base_path: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"  base_path: {base_path}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:474, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:475, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "开始查询文件夹在 Muse 中的分类 ID..."   ----code_context : lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:476, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "使用调用方传入的分类树 Pydantic 模型，跳过分类树读取"   ----code_context : lprint("使用调用方传入的分类树 Pydantic 模型，跳过分类树读取")
            elif category_tree_override is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:485, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("Muse 分类树结构:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:503, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "Muse 分类树结构:"   ----code_context : lprint("Muse 分类树结构:")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:504, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:505, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "组织: rsvs"   ----code_context : lprint(f"组织: {typed_payload.organization_id}")
            lprint(f"根分类数量: {len(org_categories)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:547, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "根分类数量: 1"   ----code_context : lprint(f"根分类数量: {len(org_categories)}")
            root_names = [_node_label(cat) for cat in org_categories] 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:548, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "根分类列表: ['备份资源包']"   ----code_context : lprint(f"根分类列表: {root_names}")
            if target_root_name: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:550, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "正在搜索目标分类: '备份资源包'"   ----code_context : lprint(f"正在搜索目标分类: '{target_root_name}'")
                target_category = find_category_by_name(org_categories, target_root_name) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:552, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "✓ 找到目标分类: '备份资源包' (ID: 411365586239489)"   ----code_context : lprint(f"✓ 找到目标分类: '{target_root_name}' (ID: {target_category.id})")
                    lprint(f"仅显示 '{target_root_name}' 分类树:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:555, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "仅显示 '备份资源包' 分类树:"   ----code_context : lprint(f"仅显示 '{target_root_name}' 分类树:")
                    print_category_tree([target_category], 0) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:556, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "├─ [0] 备份资源包 (ID: 411365586239489)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 1/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "  ├─ [1] J (ID: 411512801853441)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 2/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "    ├─ [2] H42 (ID: 412614732152833)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 3/4   

[2026-05-07 10:57:53] [2026-05-07 10:57:53] {WARNING}
[arg0] "      ├─ [3] 0.规范性文档及范例 (ID: 412614732152834)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 30 条 @ 2026-05-07 10:57:58 ======
[2026-05-07 10:57:57] [2026-05-07 10:57:57] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"配置的根分类: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:565, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:57] [2026-05-07 10:57:57] {WARNING}
[arg0] "配置的根分类: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"配置的根分类: {base_path}")
            lprint(f"Muse 分类总数: {muse_category_count[0]}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:566, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:57] [2026-05-07 10:57:57] {WARNING}
[arg0] "Muse 分类总数: 15272"   ----code_context : lprint(f"Muse 分类总数: {muse_category_count[0]}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:567, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:57] [2026-05-07 10:57:57] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:568, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:57] [2026-05-07 10:57:57] {WARNING}
[arg0] "正在构建路径索引..."   ----code_context : lprint("正在构建路径索引...")
            path_to_id_map = {} 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:571, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:57] [2026-05-07 10:57:57] {WARNING}
[arg0] "路径索引构建完成，共 15272 个路径"   ----code_context : lprint(f"路径索引构建完成，共 {len(path_to_id_map)} 个路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:607, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:57] [2026-05-07 10:57:57] {WARNING}
[arg0] "✗ [root] 备份资源包/J/H42 → 未找到"
[arg1] "warning"   ----code_context : lprint(f"✗ [root] {root_path_str} → 未找到", "warning")
                else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:665, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:57] [2026-05-07 10:57:57] {WARNING}
[arg0] "根节点有 20 个子节点"   ----code_context : lprint(f"根节点有 {len(root_node.children)} 个子节点")
            for child in root_node.children: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:670, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:57] [2026-05-07 10:57:57] {WARNING}
[arg0] "✗ [0] 备份资源包/J/H42/0.规范性文档及范例 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 1/4   

[2026-05-07 10:57:57] [2026-05-07 10:57:57] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/CG流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 2/4   

[2026-05-07 10:57:57] [2026-05-07 10:57:57] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 3/4   

[2026-05-07 10:57:57] [2026-05-07 10:57:57] {WARNING}
[arg0] "    ✗ [2] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 4/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"文件夹状态更新完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:674, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "文件夹状态更新完成:"   ----code_context : lprint(f"文件夹状态更新完成:")
            lprint(f"  处理文件夹: {processed_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:675, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "  处理文件夹: 55907 个"   ----code_context : lprint(f"  处理文件夹: {processed_count[0]} 个")
            lprint(f"  匹配成功: {matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:676, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "  匹配成功: 0 个"   ----code_context : lprint(f"  匹配成功: {matched_count[0]} 个")
            lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:677, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "  未匹配: 55907 个"   ----code_context : lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个")
            if matched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:678, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "  未匹配样本(前5):"   ----code_context : lprint("  未匹配样本(前5):")
                for item in unmatched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:684, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/CG流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 2/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 3/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 4/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "  Muse分类总数: 15272 个"   ----code_context : lprint(f"  Muse分类总数: {muse_category_count[0]} 个")
            if omitted_log_count[0] > 0: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:687, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "  详细日志省略: 55877 条（已限流到前 30 条）"   ----code_context : lprint(f"  详细日志省略: {omitted_log_count[0]} 条（已限流到前 {max_detail_logs} 条）")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:689, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            # lprint.trace_start(auto_result=True, 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:690, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "[同步阶段] 已收到分类树结果，准备进入资产同步前处理"   ----code_context : lprint("[同步阶段] 已收到分类树结果，准备进入资产同步前处理")
            if not self.muse_tool or not self.data_center.qtree_root_node: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11709, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "[同步阶段] 写入分类树模型完成，用时 0.00s"   ----code_context : lprint(f"[同步阶段] 写入分类树模型完成，用时 {time.time() - stage_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11718, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）"   ----code_context : lprint("[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）")
            self.data_center.ui_helper.update_visible_tree_items_only(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11723, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40646]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 2/4   

[2026-05-07 10:57:58] [2026-05-07 10:57:58] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 320]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 10:58:04 ======
[2026-05-07 10:58:03] [2026-05-07 10:58:03] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3983, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 10:58:03] [2026-05-07 10:58:03] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 4.153252]
[arg2] ["folders", 51202]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3993, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 10:58:03] [2026-05-07 10:58:03] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=1793797112784, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4042, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 10:58:03] [2026-05-07 10:58:03] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51202]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4102, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 10:58:04] [2026-05-07 10:58:04] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=6.39s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 12 条 @ 2026-05-07 10:58:14 ======
[2026-05-07 10:58:13] [2026-05-07 10:58:13] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=8.48s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 10:58:13] [2026-05-07 10:58:13] {WARNING}
[arg0] "📊 统计更新: 发现 42190 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 2/4   

[2026-05-07 10:58:13] [2026-05-07 10:58:13] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.26s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 10:58:13] [2026-05-07 10:58:13] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 228 个，跳过未变化子树 0 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 10:58:13] [2026-05-07 10:58:13] {WARNING}
[arg0] "[同步阶段] 轻量刷新完成，用时 15.25s"   ----code_context : lprint(f"[同步阶段] 轻量刷新完成，用时 {time.time() - tree_t0:.2f}s")
            self.append_log("树视图已刷新，显示 Muse 路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11725, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:58:13] [2026-05-07 10:58:13] {WARNING}
[arg0] "[同步阶段] 开始更新UI统计"   ----code_context : lprint("[同步阶段] 开始更新UI统计")
                self.data_center.ui_helper.update_muse_category_stats(
                    muse_category_count=stats.get("muse_category_count", 0),
                    local_matched_count=stats.get("local_matched_count", 0),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11730, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:58:13] [2026-05-07 10:58:13] {WARNING}
[arg0] "UI 统计已更新: Muse分类=15272, 匹配=0"   ----code_context : lprint(
                    f"UI 统计已更新: Muse分类={stats.get('muse_category_count', 0)}, "
                    f"匹配={stats.get('local_matched_count', 0)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11735, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:58:13] [2026-05-07 10:58:13] {WARNING}
[arg0] "[同步阶段] UI统计更新完成，用时 0.00s"   ----code_context : lprint(f"[同步阶段] UI统计更新完成，用时 {time.time() - stats_t0:.2f}s")
            self.append_log("开始后台下载并匹配 Muse 资产...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11739, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:58:13] [2026-05-07 10:58:13] {WARNING}
[arg0] "[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 15.25s"   ----code_context : lprint(f"[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 {time.time() - stage_t0:.2f}s")
            thr = MuseAssetSyncThread(
                self.muse_tool,
                root_node,
                parent=self,
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11743, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 10:58:13] [2026-05-07 10:58:13] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", true]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", true]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] ["Muse分支路径", null]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 2/4   

[2026-05-07 10:58:13] [2026-05-07 10:58:13] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 10:58:13] [2026-05-07 10:58:13] {WARNING}
[arg0] "统计信息: 232304 个文件, 55907 个目录, 42190 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 10:58:17 ======
[2026-05-07 10:58:16] [2026-05-07 10:58:16] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分类树"), ("缓存文件", full_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:968, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 10:58:16] [2026-05-07 10:58:16] {WARNING}
[arg0] "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，已根据 muse_path 在全量分类树缓存上回退解析: muse_path='备份资源包/J/H42' -> id=412614732152833"
[arg1] "warning"   ----code_context : lprint(
                                    "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，"
                                    f"已根据 muse_path 在全量分类树缓存上回退解析: muse_path={mp!r} -> id={category_id}",
                                    "warning",
                                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1225, -fn: run, 打印次数: 1/4   

[2026-05-07 10:58:16] [2026-05-07 10:58:16] {WARNING}
[arg0] "[资产同步缓存检查] 分类=412614732152833, use_local_asset_cache=True, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
                        "[资产同步缓存检查] "
                        f"分类={cid}, use_local_asset_cache={self._use_local_asset_cache}, "
                        f"cache_file={cache_file_path or '<none>'}, cache_file_exists={cache_file_hit}"
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1539, -fn: run, 打印次数: 1/4   

[2026-05-07 10:58:16] [2026-05-07 10:58:16] {WARNING}
[arg0] "[asset_cache] 请求分类资产缓存: categories=1, use_cache=True, use_file_cache=True, save_to_file=False, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
            "[asset_cache] 请求分类资产缓存: "
            f"categories={len(category_ids)}, "
            f"use_cache={use_cache}, use_file_cache={use_file_cache}, save_to_file={save_to_file}, "
            f"cache_file={cache_file or '<none>'}, cache_file_exists={cache_file_exists}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:262, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 10:58:33 ======
[2026-05-07 10:58:30] [2026-05-07 10:58:30] {WARNING}
[arg0] "[asset_cache] 命中文件缓存并加载成功: L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl"   ----code_context : lprint(f"[asset_cache] 命中文件缓存并加载成功: {cache_file}")
                    return typed_loaded 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:312, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 8 条 @ 2026-05-07 10:58:42 ======
[2026-05-07 10:58:41] [2026-05-07 10:58:41] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 10:58:41] [2026-05-07 10:58:41] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 2/4   

[2026-05-07 10:58:41] [2026-05-07 10:58:41] {WARNING}
[arg0] "[资产同步进度] [cache-hit] 命中资产缓存并更新UI: 分类 412614732152833 | 资产 40646"   ----code_context : lprint(f"[资产同步进度] {message}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11557, -fn: _on_muse_asset_sync_progress, 打印次数: 1/4   

[2026-05-07 10:58:41] [2026-05-07 10:58:41] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 10:58:42] [2026-05-07 10:58:42] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.309162s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 10:58:42] [2026-05-07 10:58:42] {WARNING}
[arg0] "[资产同步完成] 触发轻量树刷新（跳过整树重建）"   ----code_context : lprint("[资产同步完成] 触发轻量树刷新（跳过整树重建）")
                self.data_center.ui_helper.update_visible_tree_items_only(qtree_root) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11609, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 10:58:42] [2026-05-07 10:58:42] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40646]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 3/4   

[2026-05-07 10:58:42] [2026-05-07 10:58:42] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 320]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 10:58:48 ======
[2026-05-07 10:58:46] [2026-05-07 10:58:46] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3983, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 10:58:46] [2026-05-07 10:58:46] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.974442]
[arg2] ["folders", 51202]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3993, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 10:58:46] [2026-05-07 10:58:46] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=1793797112784, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4042, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 10:58:47] [2026-05-07 10:58:47] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51202]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4102, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 10:58:48] [2026-05-07 10:58:48] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=6.21s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 10:58:51 ======
[2026-05-07 10:58:49] [2026-05-07 10:58:49] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=1.36s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:58:49] [2026-05-07 10:58:49] {WARNING}
[arg0] "📊 统计更新: 发现 42190 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 3/4   

[2026-05-07 10:58:49] [2026-05-07 10:58:49] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.27s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:58:49] [2026-05-07 10:58:49] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 0 个，跳过未变化子树 1 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 10:58:49] [2026-05-07 10:58:49] {WARNING}
[arg0] "[资产同步完成] 轻量树刷新完成，用时 7.842959s"   ----code_context : lprint(f"[资产同步完成] 轻量树刷新完成，用时 {time.time() - _light_t0:.6f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11611, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 10:58:51] [2026-05-07 10:58:51] {WARNING}
[arg0] "[asset_sync][result]"
[arg1] ["folder_count", 55908]
[arg2] ["folders_with_category_id", 14734]
[arg3] ["category_query_count", 1]
[arg4] ["total_assets", 40646]
[arg5] ["total_matched", 0]
[arg6] ["mount_failed_count", 0]
[arg7] [
    "mount_failed_reason_counts",
    {}
]   ----code_context : lprint(
                "[asset_sync][result]",
                ("folder_count", folder_count),
                ("folders_with_category_id", folders_with_id),
                ("category_query_count", category_count),
                ("total_assets", total_assets),
                ("total_matched", total_matched),
                ("mount_failed_count", mount_failed_count),
                ("mount_failed_reason_counts", mount_failed_reason_counts),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11650, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 10:58:54 ======
[2026-05-07 10:58:51] [2026-05-07 10:58:51] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 10:58:51] [2026-05-07 10:58:51] {WARNING}
[arg0] "统计信息: 232304 个文件, 55907 个目录, 42190 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 10:59:09 ======
[2026-05-07 10:59:08] [2026-05-07 10:59:08] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 10:59:08] [2026-05-07 10:59:08] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:00:07 ======
[2026-05-07 11:00:06] [2026-05-07 11:00:06] {WARNING}
[arg0] "[asset_sync][dialog_done]"
[arg1] ["total_matched", 0]
[arg2] ["total_assets", 40646]
[arg3] ["mount_failed_count", 0]   ----code_context : lprint(
                "[asset_sync][dialog_done]",
                ("total_matched", total_matched),
                ("total_assets", total_assets),
                ("mount_failed_count", mount_failed_count),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11690, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 50 条 @ 2026-05-07 11:00:43 ======
[2026-05-07 11:00:37] [2026-05-07 11:00:37] {WARNING}
[arg0] "[PYTRACEMP][DATE_LOG_PATH]"
[arg1] ["module_name", "j_disc_backup_ui"]
[arg2] ["log_base_dir", "D:\\Temp\\Log"]
[arg3] ["date_log_path", "D:\\Temp\\Log\\j_disc_backup_ui\\20260507.md"]
[arg4] ["cleared", true]
[arg5] ["clear_error", null]   ----code_context : lprint(
            "[PYTRACEMP][DATE_LOG_PATH]",
            ("module_name", module_name),
            ("log_base_dir", log_base_dir),
            ("date_log_path", date_log_path),
            ("cleared", cleared),
            ("clear_error", clear_error),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\@baselibs\pytracemp\__init__.py:54, -fn: _print_date_log_path_on_import, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[启动参数][argv_parse]"
[arg1] [
    "argv",
    [
        "c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py",
        "--enable-trace=True",
        "--source-dir",
        "J:",
        "--upload-dir",
        "H42",
        "--ignore-ui-state",
        "--separate-taskbar-icon"
    ]
]
[arg2] ["arg_source_dir", "J:"]
[arg3] ["arg_upload_dir", "H42"]
[arg4] ["arg_ignore_ui_state", true]
[arg5] ["arg_taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1"]
[arg6] ["arg_separate_taskbar_icon", true]   ----code_context : lprint(
        "[启动参数][argv_parse]",
        ("argv", sys.argv),
        ("arg_source_dir", args.source_dir or "<empty>"),
        ("arg_upload_dir", args.upload_dir or "<empty>"),
        ("arg_ignore_ui_state", args.ignore_ui_state),
        ("arg_taskbar_app_id", args.taskbar_app_id or "<empty>"),
        ("arg_separate_taskbar_icon", args.separate_taskbar_icon),
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12645, -fn: main, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[启动参数][final]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1.pid56408"]
[arg5] ["enable_trace", true]   ----code_context : lprint(
        "[启动参数][final]",
        ("source_dir", args.source_dir or "<empty>"),
        ("upload_dir", args.upload_dir or "<empty>"),
        ("ignore_ui_state", args.ignore_ui_state),
        ("taskbar_app_id", runtime_taskbar_app_id),
        ("enable_trace", enable_trace),
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12657, -fn: main, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
    lprint("J盘备份到Muse UI 启动") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12674, -fn: main, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "J盘备份到Muse UI 启动"   ----code_context : lprint("J盘备份到Muse UI 启动")
    lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12675, -fn: main, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12676, -fn: main, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "正在初始化 UI..."   ----code_context : lprint("正在初始化 UI...")
    window = JDiscBackupUI(
        startup_source_dir=args.source_dir,
        startup_upload_dir=args.upload_dir,
        ignore_ui_state=args.ignore_ui_state,
        enable_trace=enable_trace,
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12681, -fn: main, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "正在创建数据中心..."   ----code_context : lprint("正在创建数据中心...")
        self.data_center = BackupDataCenter(self) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4237, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "配置加载成功: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置加载成功: {config_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:682, -fn: load_default_config, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "UI已根据配置更新（全量）"   ----code_context : lprint("UI已根据配置更新（全量）")
                return 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2096, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "数据中心创建完成"   ----code_context : lprint("数据中心创建完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4239, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['backup_source_dir']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[启动参数][应用后配置]"
[arg1] ["startup_source_dir", "J:"]
[arg2] ["startup_upload_dir", "H42"]
[arg3] ["startup_upload_is_all", false]
[arg4] ["config_source_dir", "J:"]   ----code_context : lprint(
            "[启动参数][应用后配置]",
            ("startup_source_dir", self._startup_source_dir or "<empty>"),
            ("startup_upload_dir", self._startup_upload_dir or "<empty>"),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ("config_source_dir", self.data_center.config.backup_source_dir),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4252, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[启动参数]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]   ----code_context : lprint(
                "[启动参数]",
                ("source_dir", self._startup_source_dir or "<使用配置>"),
                ("upload_dir", upload_dir_label),
                ("ignore_ui_state", self._ignore_ui_state),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4263, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("MuseTool 初始化参数:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4292, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "MuseTool 初始化参数:"   ----code_context : lprint("MuseTool 初始化参数:")
            lprint(f"  user_email: {user_email}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4293, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {user_email}")
            lprint(f"  organization_id: {organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4294, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {organization_id}")
            lprint(f"  asset_type: {asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4295, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {asset_type}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4296, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4297, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "MuseTool 初始化成功"   ----code_context : lprint("MuseTool 初始化成功")
            lprint("验证 MuseTool 运行身份:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4306, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "验证 MuseTool 运行身份:"   ----code_context : lprint("验证 MuseTool 运行身份:")
            lprint(f"  user_email: {identity.get('user_email', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4307, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {identity.get('user_email', '')}")
            lprint(f"  organization_id: {identity.get('organization_id', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4308, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {identity.get('organization_id', '')}")
            lprint(f"  asset_type: {identity.get('asset_type', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4309, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {identity.get('asset_type', '')}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4310, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "从 p4_to_muse.yaml 加载本地 source 预设: 58 个"   ----code_context : lprint(f"从 p4_to_muse.yaml 加载本地 source 预设: {len(mappings)} 个")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1578, -fn: refresh_source_mappings_from_yaml, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "正在扫描 J: 的文件夹列表..."   ----code_context : lprint(f"正在扫描 {backup_source_dir} 的文件夹列表...")
            try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4884, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "扫描到 67 个文件夹"   ----code_context : lprint(f"扫描到 {len(folders)} 个文件夹")
            except (PermissionError, OSError) as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4890, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[upload_dir_combo][init_start]"
[arg1] ["source_dir", "J:"]
[arg2] ["preferred_upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["startup_upload_explicit", true]
[arg5] ["startup_upload_is_all", false]   ----code_context : lprint(
            "[upload_dir_combo][init_start]",
            ("source_dir", backup_source_dir),
            ("preferred_upload_dir", preferred_upload_dir or "<empty>"),
            ("ignore_ui_state", self._ignore_ui_state),
            ("startup_upload_explicit", self._startup_upload_dir_is_explicit),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4910, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[upload_dir_combo][candidates]"
[arg1] [
    "candidate_values",
    [
        "H42"
    ]
]
[arg2] ["folder_count", 67]   ----code_context : lprint(
                "[upload_dir_combo][candidates]",
                ("candidate_values", candidate_values),
                ("folder_count", len(folders)),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4935, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "已加载 67 个文件夹到下拉框: ['00_doc', '123456', '2024风霁周会产出展示', '2025风霁周会产出展示', '2026风霁周会产出展示', '@Recycle', 'A49', 'Anim_library', 'Asset_library', 'DM139', 'DM142', 'GUI', 'GYL_Tools', 'H18', 'H42', 'H52', 'H55', 'H64', 'H65', 'H65_Dasha Taran', 'H70_临时', 'H72', 'H73', 'H74', 'H74-风霁月会产出材料', 'H75', 'H77', 'HXX(模板)', 'MA167', 'MA67', 'MA73', 'Projects', 'RigWork', 'S4', 'S7', 'SteamLibrary', 'U5', 'UE5 Demo', 'UXX', 'Vendor', 'X23', 'X33', 'X9', 'YY45', 'YY63', 'artlib_preview', 'blender', 'maya', 'origin_disk_J', 'prod_projs', 'render', 'sp', 'temp', 'work', 'zb', '临时文件', '供应商资料共享', '动捕演员资料库', '动画工具', '动画月会资料', '年度Showreel', '战斗场景——大鸭头', '游戏解包资源汇总', '竞标需求', '网易蛋仔派对', '迅雷云盘', '风雨项目集双周会产出材料']"   ----code_context : lprint(f"已加载 {len(folders)} 个文件夹到下拉框: {folders}")
        if selected_folder: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4964, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "uploadDirComboBox 自动选择: H42"   ----code_context : lprint(f"uploadDirComboBox 自动选择: {selected_folder}")
        lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4966, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[upload_dir_combo][init_done]"
[arg1] ["selected_folder", "H42"]
[arg2] ["current_text", "H42"]
[arg3] ["business_value", "H42"]   ----code_context : lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4967, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "扫描方式初始化完成，当前方式: os.scandir (性能优化)"   ----code_context : lprint(f"扫描方式初始化完成，当前方式: {ScanMethod.get_display_name(current_method)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5237, -fn: init_scan_method_ui, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "路径设置页已加载 5 条映射"   ----code_context : lprint(f"路径设置页已加载 {len(mappings)} 条映射")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5122, -fn: load_path_mapping_table, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[日志前缀][模式切换]"
[arg1] ["business_mode", "backup_file"]
[arg2] ["date_log_prefix", "j_disc_backup_file"]   ----code_context : lprint(
                "[日志前缀][模式切换]",
                ("business_mode", mode),
                ("date_log_prefix", log_prefix),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4549, -fn: _apply_date_log_prefix_by_mode, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 2/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 3/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['muse_root_category']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 2/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 4/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[trace][init]"
[arg1] ["enabled", true]
[arg2] ["source", "startup_arg"]   ----code_context : lprint(
            "[trace][init]",
            ("enabled", bool(self._startup_enable_trace)),
            ("source", "startup_arg"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5466, -fn: _init_trace_toggle_checkbox, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state"   ----code_context : lprint("[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4360, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "[启动缓存][候选]"
[arg1] ["current_ui_folder", "H42"]
[arg2] [
    "candidate_folders",
    [
        "H42"
    ]
]
[arg3] ["startup_upload_is_all", false]   ----code_context : lprint(
                "[启动缓存][候选]",
                ("current_ui_folder", current_ui_folder or "<empty>"),
                ("candidate_folders", candidate_folders),
                ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4582, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "发现Pickle缓存文件: L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"发现Pickle缓存文件: {pkl_cache_file}")
                lprint(f"正在自动加载缓存: folder={folder}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4598, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "正在自动加载缓存: folder=H42"   ----code_context : lprint(f"正在自动加载缓存: folder={folder}")
                success = self.data_center.load_scan_cache(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4599, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:00:40] [2026-05-07 11:00:40] {WARNING}
[arg0] "正在加载扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl, 大小: 361.13MB"   ----code_context : lprint(f"正在加载扫描缓存(Pickle): {pkl_path}, 大小: {size_mb:.2f}MB") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1396, -fn: load_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 11:01:01 ======
[2026-05-07 11:00:59] [2026-05-07 11:00:59] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:00:59] [2026-05-07 11:00:59] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.300941s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:00:59] [2026-05-07 11:00:59] {WARNING}
[arg0] "[qtree_root_node] 开始 render_root_node_change"   ----code_context : lprint("[qtree_root_node] 开始 render_root_node_change")
                    self.ui_helper.render_root_node_change(node, _from_data_center=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:925, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:00:59] [2026-05-07 11:00:59] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 232304]
[arg4] ["muse_asset_nodes", 40646]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2428, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:00:59] [2026-05-07 11:00:59] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40646]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 1/4   

[2026-05-07 11:00:59] [2026-05-07 11:00:59] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 320]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 11:01:07 ======
[2026-05-07 11:01:05] [2026-05-07 11:01:05] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3983, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 11:01:05] [2026-05-07 11:01:05] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 4.009881]
[arg2] ["folders", 51202]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3993, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 11:01:05] [2026-05-07 11:01:05] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2137579349008, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4042, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   

[2026-05-07 11:01:06] [2026-05-07 11:01:06] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51202]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4102, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 11:01:11 ======
[2026-05-07 11:01:08] [2026-05-07 11:01:08] {WARNING}
[arg0] "[effective_metrics] 根节点统计耗时: total=2.677874s, children_loop=2.677861s, writeback=0.000004s, children=20, attachment_total=725438, package_size_total=11904481607377"   ----code_context : lprint(
                "[effective_metrics] 根节点统计耗时: "
                f"total={total_elapsed:.6f}s, "
                f"children_loop={loop_elapsed:.6f}s, "
                f"writeback={writeback_elapsed:.6f}s, "
                f"children={len(getattr(node, 'children', []) or [])}, "
                f"attachment_total={int(node.attachment_count_total)}, "
                f"package_size_total={int(node.package_size_total)}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4231, -fn: _compute_and_set_effective_folder_metrics, 打印次数: 1/4   

[2026-05-07 11:01:09] [2026-05-07 11:01:09] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=2137579349008, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2474, -fn: update_file_tree, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 11:01:14 ======
[2026-05-07 11:01:11] [2026-05-07 11:01:11] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=2137497114272, import_class_id=2137497114272, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4475, -fn: _build_folder_item, 打印次数: 1/4   

[2026-05-07 11:01:11] [2026-05-07 11:01:11] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 2.204716s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2490, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:01:13] [2026-05-07 11:01:13] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=0.规范性文档及范例, children(folder=17, other=1)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 1/4   

[2026-05-07 11:01:13] [2026-05-07 11:01:13] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=1.过场动画, children(folder=14, other=2)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 2/4   

[2026-05-07 11:01:13] [2026-05-07 11:01:13] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=10.原画包装, children(folder=8, other=3)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 3/4   

[2026-05-07 11:01:13] [2026-05-07 11:01:13] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=11.AI, children(folder=2, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 41 条 @ 2026-05-07 11:01:17 ======
[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 227 个 item，用时 3.298257s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2506, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40646]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2522, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "📊 统计更新: 发现 42190 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[qtree_root_node] 渲染完成，用时 16.159681s"   ----code_context : lprint(f"[qtree_root_node] 渲染完成，用时 {time.time() - _render_t0:.6f}s")
                    if self._startup_render_guard_enabled: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:927, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "扫描缓存已加载(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已加载(Pickle v{loaded_version}): {pkl_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1481, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "缓存加载成功，正在更新UI..."   ----code_context : lprint("缓存加载成功，正在更新UI...")
                self._apply_category_tree_cache_to_current_tree(context="auto_load_cache") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4607, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", false]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] [
    "Muse分支路径",
    [
        "备份资源包",
        "J",
        "H42"
    ]
]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分支树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分支树"), ("缓存文件", brunch_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:951, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "通过上游缓存逻辑加载分类树: L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"通过上游缓存逻辑加载分类树: {self._last_loaded_category_tree_cache_path}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:487, -fn: _try_hydrate_muse_category_tree_from_file_cache, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[分类树缓存][应用到当前树]"
[arg1] ["context", "auto_load_cache"]
[arg2] ["folder_name", "H42"]
[arg3] ["loaded", true]
[arg4] ["root_name", "H42"]
[arg5] ["root_muse_category_id", null]   ----code_context : lprint(
            "[分类树缓存][应用到当前树]",
            ("context", context or "<empty>"),
            ("folder_name", folder_name or "<empty>"),
            ("loaded", loaded),
            ("root_name", getattr(root_node, "name", "")),
            ("root_muse_category_id", getattr(root_node, "muse_category_id", None)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4868, -fn: _apply_category_tree_cache_to_current_tree, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "自动加载缓存完成"   ----code_context : lprint("自动加载缓存完成")
                self.refresh_cache_file_list() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4617, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 开始刷新缓存文件列表 - folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9633, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.01秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.11秒, folder=H42, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.14秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.18秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 获取缓存文件列表耗时: {time.time() - t1:.2f}秒，共 {len(cache_files)} 个文件, "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9641, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : lprint(
                f"目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder={folder_name}, "
                f"muse_path={getattr(target_node, 'muse_path', '')}",
                "warning",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9794, -fn: _resolve_expected_asset_cache_path, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] UI更新耗时: 0.053秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9695, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 总耗时: 0.24秒"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9696, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9697, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 开始刷新缓存文件列表 - folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9633, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=H42, age=0.081s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:01:15] [2026-05-07 11:01:15] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.02秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] 获取缓存文件列表耗时: {time.time() - t1:.2f}秒，共 {len(cache_files)} 个文件, "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9641, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:01:16] [2026-05-07 11:01:16] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : lprint(
                f"目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder={folder_name}, "
                f"muse_path={getattr(target_node, 'muse_path', '')}",
                "warning",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9794, -fn: _resolve_expected_asset_cache_path, 打印次数: 2/4   

[2026-05-07 11:01:16] [2026-05-07 11:01:16] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 2/4   

[2026-05-07 11:01:16] [2026-05-07 11:01:16] {WARNING}
[arg0] "[性能] UI更新耗时: 0.057秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9695, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:01:16] [2026-05-07 11:01:16] {WARNING}
[arg0] "[性能] 总耗时: 0.08秒"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9696, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:01:16] [2026-05-07 11:01:16] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9697, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:01:16] [2026-05-07 11:01:16] {WARNING}
[arg0] "UI 窗口已显示"   ----code_context : lprint("UI 窗口已显示")
    try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12689, -fn: main, 打印次数: 1/4   

[2026-05-07 11:01:16] [2026-05-07 11:01:16] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:01:16] [2026-05-07 11:01:16] {WARNING}
[arg0] "统计信息: 232304 个文件, 55907 个目录, 42190 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 14 条 @ 2026-05-07 11:01:35 ======
[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 2/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "从缓存加载分类树，检查目录是否已存在..."   ----code_context : lprint("从缓存加载分类树，检查目录是否已存在...")
            if self.data_center.muse_category_tree is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10939, -fn: _ensure_category_tree_ready, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
        lprint("目录状态检查完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11010, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "目录状态检查完成:"   ----code_context : lprint("目录状态检查完成:")
        lprint(f"  总目录数: {total_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11011, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "  总目录数: 14745"   ----code_context : lprint(f"  总目录数: {total_count}")
        lprint(f"  已存在: {exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11012, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "  已存在: 0"   ----code_context : lprint(f"  已存在: {exists_count}")
        lprint(f"  未创建: {not_exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11013, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "  未创建: 14745"   ----code_context : lprint(f"  未创建: {not_exists_count}")
        lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11014, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11015, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）"   ----code_context : lprint("[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）")
        self.data_center.set_qtree_root_node(
            root_node,
            update_statistics=False,
            render_ui=False,
            emit_signal=True,
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11019, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "[目录状态检查] qtree_root_node 轻量回写完成，用时 0.00s"   ----code_context : lprint(f"[目录状态检查] qtree_root_node 轻量回写完成，用时 {time.time() - _ui_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11026, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "Muse 根分类: 备份资源包/J"   ----code_context : lprint(f"Muse 根分类: {muse_root}", force_print=True)
        lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11261, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "基础路径: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11262, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 


[LogFileHandler] ====== 批量写入 22 条 @ 2026-05-07 11:01:38 ======
[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "本地文件夹总数: 55907"   ----code_context : lprint(f"本地文件夹总数: {total_folders}")
        self.append_log(f"本地文件夹总数: {total_folders}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11276, -fn: sync_muse_assets, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("CategoryService 参数验证:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:470, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "CategoryService 参数验证:"   ----code_context : lprint("CategoryService 参数验证:")
            lprint(f"  organization_id: {category_service.organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:471, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {category_service.organization_id}")
            lprint(f"  asset_type: {category_service.asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:472, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {category_service.asset_type}")
            lprint(f"  base_path: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:473, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "  base_path: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"  base_path: {base_path}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:474, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:475, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "开始查询文件夹在 Muse 中的分类 ID..."   ----code_context : lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:476, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "使用调用方传入的分类树 Pydantic 模型，跳过分类树读取"   ----code_context : lprint("使用调用方传入的分类树 Pydantic 模型，跳过分类树读取")
            elif category_tree_override is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:485, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("Muse 分类树结构:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:503, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "Muse 分类树结构:"   ----code_context : lprint("Muse 分类树结构:")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:504, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:505, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "组织: rsvs"   ----code_context : lprint(f"组织: {typed_payload.organization_id}")
            lprint(f"根分类数量: {len(org_categories)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:547, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "根分类数量: 1"   ----code_context : lprint(f"根分类数量: {len(org_categories)}")
            root_names = [_node_label(cat) for cat in org_categories] 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:548, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "根分类列表: ['备份资源包']"   ----code_context : lprint(f"根分类列表: {root_names}")
            if target_root_name: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:550, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "正在搜索目标分类: '备份资源包'"   ----code_context : lprint(f"正在搜索目标分类: '{target_root_name}'")
                target_category = find_category_by_name(org_categories, target_root_name) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:552, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "✓ 找到目标分类: '备份资源包' (ID: 411365586239489)"   ----code_context : lprint(f"✓ 找到目标分类: '{target_root_name}' (ID: {target_category.id})")
                    lprint(f"仅显示 '{target_root_name}' 分类树:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:555, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "仅显示 '备份资源包' 分类树:"   ----code_context : lprint(f"仅显示 '{target_root_name}' 分类树:")
                    print_category_tree([target_category], 0) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:556, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "├─ [0] 备份资源包 (ID: 411365586239489)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 1/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "  ├─ [1] J (ID: 411512801853441)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 2/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "    ├─ [2] H42 (ID: 412614732152833)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 3/4   

[2026-05-07 11:01:35] [2026-05-07 11:01:35] {WARNING}
[arg0] "      ├─ [3] 0.规范性文档及范例 (ID: 412614732152834)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 30 条 @ 2026-05-07 11:01:41 ======
[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"配置的根分类: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:565, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "配置的根分类: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"配置的根分类: {base_path}")
            lprint(f"Muse 分类总数: {muse_category_count[0]}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:566, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "Muse 分类总数: 15272"   ----code_context : lprint(f"Muse 分类总数: {muse_category_count[0]}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:567, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:568, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "正在构建路径索引..."   ----code_context : lprint("正在构建路径索引...")
            path_to_id_map = {} 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:571, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "路径索引构建完成，共 15272 个路径"   ----code_context : lprint(f"路径索引构建完成，共 {len(path_to_id_map)} 个路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:607, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "✗ [root] 备份资源包/J/H42 → 未找到"
[arg1] "warning"   ----code_context : lprint(f"✗ [root] {root_path_str} → 未找到", "warning")
                else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:665, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "根节点有 20 个子节点"   ----code_context : lprint(f"根节点有 {len(root_node.children)} 个子节点")
            for child in root_node.children: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:670, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "✗ [0] 备份资源包/J/H42/0.规范性文档及范例 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/CG流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 2/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 3/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "    ✗ [2] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 4/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"文件夹状态更新完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:674, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "文件夹状态更新完成:"   ----code_context : lprint(f"文件夹状态更新完成:")
            lprint(f"  处理文件夹: {processed_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:675, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "  处理文件夹: 55907 个"   ----code_context : lprint(f"  处理文件夹: {processed_count[0]} 个")
            lprint(f"  匹配成功: {matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:676, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "  匹配成功: 0 个"   ----code_context : lprint(f"  匹配成功: {matched_count[0]} 个")
            lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:677, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "  未匹配: 55907 个"   ----code_context : lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个")
            if matched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:678, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "  未匹配样本(前5):"   ----code_context : lprint("  未匹配样本(前5):")
                for item in unmatched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:684, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/CG流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 2/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 3/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 4/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "  Muse分类总数: 15272 个"   ----code_context : lprint(f"  Muse分类总数: {muse_category_count[0]} 个")
            if omitted_log_count[0] > 0: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:687, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "  详细日志省略: 55877 条（已限流到前 30 条）"   ----code_context : lprint(f"  详细日志省略: {omitted_log_count[0]} 条（已限流到前 {max_detail_logs} 条）")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:689, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            # lprint.trace_start(auto_result=True, 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:690, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "[同步阶段] 已收到分类树结果，准备进入资产同步前处理"   ----code_context : lprint("[同步阶段] 已收到分类树结果，准备进入资产同步前处理")
            if not self.muse_tool or not self.data_center.qtree_root_node: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11731, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "[同步阶段] 写入分类树模型完成，用时 0.01s"   ----code_context : lprint(f"[同步阶段] 写入分类树模型完成，用时 {time.time() - stage_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11740, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）"   ----code_context : lprint("[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）")
            self.data_center.ui_helper.update_visible_tree_items_only(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11745, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40646]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 2/4   

[2026-05-07 11:01:39] [2026-05-07 11:01:39] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 320]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 11:01:44 ======
[2026-05-07 11:01:43] [2026-05-07 11:01:43] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3983, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 11:01:43] [2026-05-07 11:01:43] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.602091]
[arg2] ["folders", 51202]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3993, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 11:01:43] [2026-05-07 11:01:43] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2137579349008, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4042, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 11:01:44] [2026-05-07 11:01:44] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51202]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4102, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:01:47 ======
[2026-05-07 11:01:45] [2026-05-07 11:01:45] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=5.52s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:01:54 ======
[2026-05-07 11:01:53] [2026-05-07 11:01:53] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=8.68s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 11 条 @ 2026-05-07 11:01:57 ======
[2026-05-07 11:01:54] [2026-05-07 11:01:54] {WARNING}
[arg0] "📊 统计更新: 发现 42190 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 2/4   

[2026-05-07 11:01:54] [2026-05-07 11:01:54] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.23s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:01:54] [2026-05-07 11:01:54] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 228 个，跳过未变化子树 0 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:01:54] [2026-05-07 11:01:54] {WARNING}
[arg0] "[同步阶段] 轻量刷新完成，用时 14.44s"   ----code_context : lprint(f"[同步阶段] 轻量刷新完成，用时 {time.time() - tree_t0:.2f}s")
            self.append_log("树视图已刷新，显示 Muse 路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11747, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:01:54] [2026-05-07 11:01:54] {WARNING}
[arg0] "[同步阶段] 开始更新UI统计"   ----code_context : lprint("[同步阶段] 开始更新UI统计")
                self.data_center.ui_helper.update_muse_category_stats(
                    muse_category_count=stats.get("muse_category_count", 0),
                    local_matched_count=stats.get("local_matched_count", 0),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11752, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:01:54] [2026-05-07 11:01:54] {WARNING}
[arg0] "UI 统计已更新: Muse分类=15272, 匹配=0"   ----code_context : lprint(
                    f"UI 统计已更新: Muse分类={stats.get('muse_category_count', 0)}, "
                    f"匹配={stats.get('local_matched_count', 0)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11757, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:01:54] [2026-05-07 11:01:54] {WARNING}
[arg0] "[同步阶段] UI统计更新完成，用时 0.00s"   ----code_context : lprint(f"[同步阶段] UI统计更新完成，用时 {time.time() - stats_t0:.2f}s")
            self.append_log("开始后台下载并匹配 Muse 资产...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11761, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:01:54] [2026-05-07 11:01:54] {WARNING}
[arg0] "[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 14.44s"   ----code_context : lprint(f"[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 {time.time() - stage_t0:.2f}s")
            thr = MuseAssetSyncThread(
                self.muse_tool,
                root_node,
                parent=self,
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11765, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:01:54] [2026-05-07 11:01:54] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", true]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", true]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] ["Muse分支路径", null]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 2/4   

[2026-05-07 11:01:54] [2026-05-07 11:01:54] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 11:01:54] [2026-05-07 11:01:54] {WARNING}
[arg0] "统计信息: 232304 个文件, 55907 个目录, 42190 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 11:02:00 ======
[2026-05-07 11:01:57] [2026-05-07 11:01:57] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分类树"), ("缓存文件", full_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:968, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:01:57] [2026-05-07 11:01:57] {WARNING}
[arg0] "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，已根据 muse_path 在全量分类树缓存上回退解析: muse_path='备份资源包/J/H42' -> id=412614732152833"
[arg1] "warning"   ----code_context : lprint(
                                    "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，"
                                    f"已根据 muse_path 在全量分类树缓存上回退解析: muse_path={mp!r} -> id={category_id}",
                                    "warning",
                                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1225, -fn: run, 打印次数: 1/4   

[2026-05-07 11:01:57] [2026-05-07 11:01:57] {WARNING}
[arg0] "[资产同步缓存检查] 分类=412614732152833, use_local_asset_cache=True, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
                        "[资产同步缓存检查] "
                        f"分类={cid}, use_local_asset_cache={self._use_local_asset_cache}, "
                        f"cache_file={cache_file_path or '<none>'}, cache_file_exists={cache_file_hit}"
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1539, -fn: run, 打印次数: 1/4   

[2026-05-07 11:01:57] [2026-05-07 11:01:57] {WARNING}
[arg0] "[asset_cache] 请求分类资产缓存: categories=1, use_cache=True, use_file_cache=True, save_to_file=False, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
            "[asset_cache] 请求分类资产缓存: "
            f"categories={len(category_ids)}, "
            f"use_cache={use_cache}, use_file_cache={use_file_cache}, save_to_file={save_to_file}, "
            f"cache_file={cache_file or '<none>'}, cache_file_exists={cache_file_exists}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:262, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:02:14 ======
[2026-05-07 11:02:11] [2026-05-07 11:02:11] {WARNING}
[arg0] "[asset_cache] 命中文件缓存并加载成功: L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl"   ----code_context : lprint(f"[asset_cache] 命中文件缓存并加载成功: {cache_file}")
                    return typed_loaded 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:312, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 8 条 @ 2026-05-07 11:02:23 ======
[2026-05-07 11:02:22] [2026-05-07 11:02:22] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 11:02:22] [2026-05-07 11:02:22] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 2/4   

[2026-05-07 11:02:22] [2026-05-07 11:02:22] {WARNING}
[arg0] "[资产同步进度] [cache-hit] 命中资产缓存并更新UI: 分类 412614732152833 | 资产 40646"   ----code_context : lprint(f"[资产同步进度] {message}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11579, -fn: _on_muse_asset_sync_progress, 打印次数: 1/4   

[2026-05-07 11:02:22] [2026-05-07 11:02:22] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:02:22] [2026-05-07 11:02:22] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.297846s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:02:22] [2026-05-07 11:02:22] {WARNING}
[arg0] "[资产同步完成] 触发轻量树刷新（跳过整树重建）"   ----code_context : lprint("[资产同步完成] 触发轻量树刷新（跳过整树重建）")
                self.data_center.ui_helper.update_visible_tree_items_only(qtree_root) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11631, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:02:22] [2026-05-07 11:02:22] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40646]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 3/4   

[2026-05-07 11:02:23] [2026-05-07 11:02:23] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 320]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 10 条 @ 2026-05-07 11:02:29 ======
[2026-05-07 11:02:26] [2026-05-07 11:02:26] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3983, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 11:02:26] [2026-05-07 11:02:26] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.430823]
[arg2] ["folders", 51202]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3993, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 11:02:26] [2026-05-07 11:02:26] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2137579349008, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4042, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 11:02:27] [2026-05-07 11:02:27] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51202]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4102, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 11:02:28] [2026-05-07 11:02:28] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=5.36s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:02:29] [2026-05-07 11:02:29] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=1.24s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:02:29] [2026-05-07 11:02:29] {WARNING}
[arg0] "📊 统计更新: 发现 42190 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 3/4   

[2026-05-07 11:02:29] [2026-05-07 11:02:29] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.25s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:02:29] [2026-05-07 11:02:29] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 0 个，跳过未变化子树 1 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:02:29] [2026-05-07 11:02:29] {WARNING}
[arg0] "[资产同步完成] 轻量树刷新完成，用时 6.848407s"   ----code_context : lprint(f"[资产同步完成] 轻量树刷新完成，用时 {time.time() - _light_t0:.6f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11633, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 11:02:32 ======
[2026-05-07 11:02:31] [2026-05-07 11:02:31] {WARNING}
[arg0] "[asset_sync][result]"
[arg1] ["folder_count", 55908]
[arg2] ["folders_with_category_id", 14734]
[arg3] ["category_query_count", 1]
[arg4] ["total_assets", 40646]
[arg5] ["total_matched", 0]
[arg6] ["mount_failed_count", 0]
[arg7] [
    "mount_failed_reason_counts",
    {}
]   ----code_context : lprint(
                "[asset_sync][result]",
                ("folder_count", folder_count),
                ("folders_with_category_id", folders_with_id),
                ("category_query_count", category_count),
                ("total_assets", total_assets),
                ("total_matched", total_matched),
                ("mount_failed_count", mount_failed_count),
                ("mount_failed_reason_counts", mount_failed_reason_counts),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11672, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:02:31] [2026-05-07 11:02:31] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 11:02:31] [2026-05-07 11:02:31] {WARNING}
[arg0] "统计信息: 232304 个文件, 55907 个目录, 42190 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 11:02:50 ======
[2026-05-07 11:02:48] [2026-05-07 11:02:48] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 11:02:48] [2026-05-07 11:02:48] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:03:14 ======
[2026-05-07 11:03:14] [2026-05-07 11:03:14] {WARNING}
[arg0] "[asset_sync][dialog_done]"
[arg1] ["total_matched", 0]
[arg2] ["total_assets", 40646]
[arg3] ["mount_failed_count", 0]   ----code_context : lprint(
                "[asset_sync][dialog_done]",
                ("total_matched", total_matched),
                ("total_assets", total_assets),
                ("mount_failed_count", mount_failed_count),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11712, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 11:03:27 ======
[2026-05-07 11:03:27] [2026-05-07 11:03:27] {WARNING}
[arg0] "窗口正在关闭..."   ----code_context : lprint("窗口正在关闭...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4634, -fn: on_window_close, 打印次数: 1/4   

[2026-05-07 11:03:27] [2026-05-07 11:03:27] {WARNING}
[arg0] "[ui_state] 已写入: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : lprint(f"[ui_state] 已写入: {self._ui_state_cache_file}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12421, -fn: save_combo_state_to_temp_file, 打印次数: 1/4   

[2026-05-07 11:03:27] [2026-05-07 11:03:27] {WARNING}
[arg0] "[ui_state] 已保存: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : lprint(f"[ui_state] 已保存: {self._ui_state_cache_file}")
        except Exception: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4639, -fn: on_window_close, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 51 条 @ 2026-05-07 11:04:16 ======
[2026-05-07 11:04:10] [2026-05-07 11:04:10] {WARNING}
[arg0] "[PYTRACEMP][DATE_LOG_PATH]"
[arg1] ["module_name", "j_disc_backup_ui"]
[arg2] ["log_base_dir", "D:\\Temp\\Log"]
[arg3] ["date_log_path", "D:\\Temp\\Log\\j_disc_backup_ui\\20260507.md"]
[arg4] ["cleared", true]
[arg5] ["clear_error", null]   ----code_context : lprint(
            "[PYTRACEMP][DATE_LOG_PATH]",
            ("module_name", module_name),
            ("log_base_dir", log_base_dir),
            ("date_log_path", date_log_path),
            ("cleared", cleared),
            ("clear_error", clear_error),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\@baselibs\pytracemp\__init__.py:54, -fn: _print_date_log_path_on_import, 打印次数: 1/4   

[2026-05-07 11:04:11] [2026-05-07 11:04:11] {WARNING}
[arg0] "[AST自动修复] 已修复 j_disc_backup_ui.py: inserted=1, file=c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py"
[arg1] "warning"   ----code_context : lprint(message, "warning")
    return None 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:112, -fn: _policy_warn, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "[启动参数][argv_parse]"
[arg1] [
    "argv",
    [
        "c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py",
        "--enable-trace=True",
        "--source-dir",
        "J:",
        "--upload-dir",
        "H42",
        "--ignore-ui-state",
        "--separate-taskbar-icon"
    ]
]
[arg2] ["arg_source_dir", "J:"]
[arg3] ["arg_upload_dir", "H42"]
[arg4] ["arg_ignore_ui_state", true]
[arg5] ["arg_taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1"]
[arg6] ["arg_separate_taskbar_icon", true]   ----code_context : enable_trace = _to_bool(args.enable_trace) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12671, -fn: main, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "[启动参数][final]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1.pid45888"]
[arg5] ["enable_trace", true]   ----code_context : runtime_taskbar_app_id = f"{runtime_taskbar_app_id}.pid{os.getpid()}" 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12683, -fn: main, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "============================================================"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12700, -fn: main, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "J盘备份到Muse UI 启动"   ----code_context : lprint("=" * 60)
    lprint("J盘备份到Muse UI 启动") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12701, -fn: main, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("J盘备份到Muse UI 启动")
    lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12702, -fn: main, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "正在初始化 UI..."   ----code_context : lprint.trace_max_result_per_function = 4 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12707, -fn: main, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "正在创建数据中心..."   ----code_context : lprint("正在创建数据中心...")
        self.data_center = BackupDataCenter(self) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4238, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "配置加载成功: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置加载成功: {config_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:682, -fn: load_default_config, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "UI已根据配置更新（全量）"   ----code_context : lprint("UI已根据配置更新（全量）")
                return 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2096, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "数据中心创建完成"   ----code_context : lprint("数据中心创建完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4240, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['backup_source_dir']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "[启动参数][应用后配置]"
[arg1] ["startup_source_dir", "J:"]
[arg2] ["startup_upload_dir", "H42"]
[arg3] ["startup_upload_is_all", false]
[arg4] ["config_source_dir", "J:"]   ----code_context : lprint(
            "[启动参数][应用后配置]",
            ("startup_source_dir", self._startup_source_dir or "<empty>"),
            ("startup_upload_dir", self._startup_upload_dir or "<empty>"),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ("config_source_dir", self.data_center.config.backup_source_dir),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4253, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "[启动参数]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]   ----code_context : lprint(
                "[启动参数]",
                ("source_dir", self._startup_source_dir or "<使用配置>"),
                ("upload_dir", upload_dir_label),
                ("ignore_ui_state", self._ignore_ui_state),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4264, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("MuseTool 初始化参数:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4293, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "MuseTool 初始化参数:"   ----code_context : lprint("MuseTool 初始化参数:")
            lprint(f"  user_email: {user_email}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4294, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {user_email}")
            lprint(f"  organization_id: {organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4295, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {organization_id}")
            lprint(f"  asset_type: {asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4296, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {asset_type}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4297, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:12] [2026-05-07 11:04:12] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4298, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "MuseTool 初始化成功"   ----code_context : lprint("MuseTool 初始化成功")
            lprint("验证 MuseTool 运行身份:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4307, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "验证 MuseTool 运行身份:"   ----code_context : lprint("验证 MuseTool 运行身份:")
            lprint(f"  user_email: {identity.get('user_email', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4308, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {identity.get('user_email', '')}")
            lprint(f"  organization_id: {identity.get('organization_id', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4309, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {identity.get('organization_id', '')}")
            lprint(f"  asset_type: {identity.get('asset_type', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4310, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {identity.get('asset_type', '')}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4311, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "从 p4_to_muse.yaml 加载本地 source 预设: 58 个"   ----code_context : lprint(f"从 p4_to_muse.yaml 加载本地 source 预设: {len(mappings)} 个")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1578, -fn: refresh_source_mappings_from_yaml, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "正在扫描 J: 的文件夹列表..."   ----code_context : lprint(f"正在扫描 {backup_source_dir} 的文件夹列表...")
            try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4885, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "扫描到 67 个文件夹"   ----code_context : lprint(f"扫描到 {len(folders)} 个文件夹")
            except (PermissionError, OSError) as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4891, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "[upload_dir_combo][init_start]"
[arg1] ["source_dir", "J:"]
[arg2] ["preferred_upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["startup_upload_explicit", true]
[arg5] ["startup_upload_is_all", false]   ----code_context : lprint(
            "[upload_dir_combo][init_start]",
            ("source_dir", backup_source_dir),
            ("preferred_upload_dir", preferred_upload_dir or "<empty>"),
            ("ignore_ui_state", self._ignore_ui_state),
            ("startup_upload_explicit", self._startup_upload_dir_is_explicit),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4911, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "[upload_dir_combo][candidates]"
[arg1] [
    "candidate_values",
    [
        "H42"
    ]
]
[arg2] ["folder_count", 67]   ----code_context : lprint(
                "[upload_dir_combo][candidates]",
                ("candidate_values", candidate_values),
                ("folder_count", len(folders)),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4936, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "已加载 67 个文件夹到下拉框: ['00_doc', '123456', '2024风霁周会产出展示', '2025风霁周会产出展示', '2026风霁周会产出展示', '@Recycle', 'A49', 'Anim_library', 'Asset_library', 'DM139', 'DM142', 'GUI', 'GYL_Tools', 'H18', 'H42', 'H52', 'H55', 'H64', 'H65', 'H65_Dasha Taran', 'H70_临时', 'H72', 'H73', 'H74', 'H74-风霁月会产出材料', 'H75', 'H77', 'HXX(模板)', 'MA167', 'MA67', 'MA73', 'Projects', 'RigWork', 'S4', 'S7', 'SteamLibrary', 'U5', 'UE5 Demo', 'UXX', 'Vendor', 'X23', 'X33', 'X9', 'YY45', 'YY63', 'artlib_preview', 'blender', 'maya', 'origin_disk_J', 'prod_projs', 'render', 'sp', 'temp', 'work', 'zb', '临时文件', '供应商资料共享', '动捕演员资料库', '动画工具', '动画月会资料', '年度Showreel', '战斗场景——大鸭头', '游戏解包资源汇总', '竞标需求', '网易蛋仔派对', '迅雷云盘', '风雨项目集双周会产出材料']"   ----code_context : lprint(f"已加载 {len(folders)} 个文件夹到下拉框: {folders}")
        if selected_folder: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4965, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "uploadDirComboBox 自动选择: H42"   ----code_context : lprint(f"uploadDirComboBox 自动选择: {selected_folder}")
        lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4967, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "[upload_dir_combo][init_done]"
[arg1] ["selected_folder", "H42"]
[arg2] ["current_text", "H42"]
[arg3] ["business_value", "H42"]   ----code_context : lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4968, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "扫描方式初始化完成，当前方式: os.scandir (性能优化)"   ----code_context : lprint(f"扫描方式初始化完成，当前方式: {ScanMethod.get_display_name(current_method)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5238, -fn: init_scan_method_ui, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "路径设置页已加载 5 条映射"   ----code_context : lprint(f"路径设置页已加载 {len(mappings)} 条映射")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5123, -fn: load_path_mapping_table, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "[日志前缀][模式切换]"
[arg1] ["business_mode", "backup_file"]
[arg2] ["date_log_prefix", "j_disc_backup_file"]   ----code_context : lprint(
                "[日志前缀][模式切换]",
                ("business_mode", mode),
                ("date_log_prefix", log_prefix),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4550, -fn: _apply_date_log_prefix_by_mode, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 2/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 3/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['muse_root_category']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 2/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 4/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "[trace][init]"
[arg1] ["enabled", true]
[arg2] ["source", "startup_arg"]   ----code_context : lprint(
            "[trace][init]",
            ("enabled", bool(self._startup_enable_trace)),
            ("source", "startup_arg"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5467, -fn: _init_trace_toggle_checkbox, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state"   ----code_context : lprint("[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4361, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "[启动缓存][候选]"
[arg1] ["current_ui_folder", "H42"]
[arg2] [
    "candidate_folders",
    [
        "H42"
    ]
]
[arg3] ["startup_upload_is_all", false]   ----code_context : lprint(
                "[启动缓存][候选]",
                ("current_ui_folder", current_ui_folder or "<empty>"),
                ("candidate_folders", candidate_folders),
                ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4583, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "发现Pickle缓存文件: L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"发现Pickle缓存文件: {pkl_cache_file}")
                lprint(f"正在自动加载缓存: folder={folder}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4599, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "正在自动加载缓存: folder=H42"   ----code_context : lprint(f"正在自动加载缓存: folder={folder}")
                success = self.data_center.load_scan_cache(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4600, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:04:13] [2026-05-07 11:04:13] {WARNING}
[arg0] "正在加载扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl, 大小: 361.13MB"   ----code_context : lprint(f"正在加载扫描缓存(Pickle): {pkl_path}, 大小: {size_mb:.2f}MB") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1396, -fn: load_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 11:04:34 ======
[2026-05-07 11:04:32] [2026-05-07 11:04:32] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:04:32] [2026-05-07 11:04:32] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.352963s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:04:32] [2026-05-07 11:04:32] {WARNING}
[arg0] "[qtree_root_node] 开始 render_root_node_change"   ----code_context : lprint("[qtree_root_node] 开始 render_root_node_change")
                    self.ui_helper.render_root_node_change(node, _from_data_center=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:925, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:04:32] [2026-05-07 11:04:32] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 232304]
[arg4] ["muse_asset_nodes", 40646]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2428, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:04:33] [2026-05-07 11:04:33] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40646]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 1/4   

[2026-05-07 11:04:33] [2026-05-07 11:04:33] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 320]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 11:04:41 ======
[2026-05-07 11:04:39] [2026-05-07 11:04:39] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3983, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 11:04:39] [2026-05-07 11:04:39] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 4.213395]
[arg2] ["folders", 51202]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3993, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 11:04:39] [2026-05-07 11:04:39] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2959698618448, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4042, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   

[2026-05-07 11:04:39] [2026-05-07 11:04:39] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51202]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4102, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 11:04:44 ======
[2026-05-07 11:04:42] [2026-05-07 11:04:42] {WARNING}
[arg0] "[effective_metrics] 根节点统计耗时: total=3.110782s, children_loop=3.110768s, writeback=0.000005s, children=20, attachment_total=725438, package_size_total=11904481607377"   ----code_context : lprint(
                "[effective_metrics] 根节点统计耗时: "
                f"total={total_elapsed:.6f}s, "
                f"children_loop={loop_elapsed:.6f}s, "
                f"writeback={writeback_elapsed:.6f}s, "
                f"children={len(getattr(node, 'children', []) or [])}, "
                f"attachment_total={int(node.attachment_count_total)}, "
                f"package_size_total={int(node.package_size_total)}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4231, -fn: _compute_and_set_effective_folder_metrics, 打印次数: 1/4   

[2026-05-07 11:04:43] [2026-05-07 11:04:43] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=2959698618448, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2474, -fn: update_file_tree, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 11:04:47 ======
[2026-05-07 11:04:46] [2026-05-07 11:04:46] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=2959671235312, import_class_id=2959671235312, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4475, -fn: _build_folder_item, 打印次数: 1/4   

[2026-05-07 11:04:46] [2026-05-07 11:04:46] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 2.422831s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2490, -fn: update_file_tree, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 42 条 @ 2026-05-07 11:04:50 ======
[2026-05-07 11:04:47] [2026-05-07 11:04:47] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=0.规范性文档及范例, children(folder=17, other=1)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 1/4   

[2026-05-07 11:04:48] [2026-05-07 11:04:48] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=1.过场动画, children(folder=14, other=2)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 2/4   

[2026-05-07 11:04:48] [2026-05-07 11:04:48] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=10.原画包装, children(folder=8, other=3)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 3/4   

[2026-05-07 11:04:48] [2026-05-07 11:04:48] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=11.AI, children(folder=2, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 4/4   

[2026-05-07 11:04:49] [2026-05-07 11:04:49] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 227 个 item，用时 3.256186s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2506, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:04:49] [2026-05-07 11:04:49] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40646]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2522, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:04:49] [2026-05-07 11:04:49] {WARNING}
[arg0] "📊 统计更新: 发现 42190 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 1/4   

[2026-05-07 11:04:49] [2026-05-07 11:04:49] {WARNING}
[arg0] "[qtree_root_node] 渲染完成，用时 17.089973s"   ----code_context : lprint(f"[qtree_root_node] 渲染完成，用时 {time.time() - _render_t0:.6f}s")
                    if self._startup_render_guard_enabled: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:927, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:04:49] [2026-05-07 11:04:49] {WARNING}
[arg0] "扫描缓存已加载(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已加载(Pickle v{loaded_version}): {pkl_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1481, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 11:04:49] [2026-05-07 11:04:49] {WARNING}
[arg0] "缓存加载成功，正在更新UI..."   ----code_context : lprint("缓存加载成功，正在更新UI...")
                self._apply_category_tree_cache_to_current_tree(context="auto_load_cache") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4608, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:04:49] [2026-05-07 11:04:49] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", false]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] [
    "Muse分支路径",
    [
        "备份资源包",
        "J",
        "H42"
    ]
]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分支树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分支树"), ("缓存文件", brunch_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:951, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "通过上游缓存逻辑加载分类树: L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"通过上游缓存逻辑加载分类树: {self._last_loaded_category_tree_cache_path}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:487, -fn: _try_hydrate_muse_category_tree_from_file_cache, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[分类树缓存][应用到当前树]"
[arg1] ["context", "auto_load_cache"]
[arg2] ["folder_name", "H42"]
[arg3] ["loaded", true]
[arg4] ["root_name", "H42"]
[arg5] ["root_muse_category_id", null]   ----code_context : lprint(
            "[分类树缓存][应用到当前树]",
            ("context", context or "<empty>"),
            ("folder_name", folder_name or "<empty>"),
            ("loaded", loaded),
            ("root_name", getattr(root_node, "name", "")),
            ("root_muse_category_id", getattr(root_node, "muse_category_id", None)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4869, -fn: _apply_category_tree_cache_to_current_tree, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "自动加载缓存完成"   ----code_context : lprint("自动加载缓存完成")
                self.refresh_cache_file_list() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4618, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9659, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.01秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.09秒, folder=H42, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.12秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.14秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9667, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9820, -fn: _resolve_expected_asset_cache_path, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] UI更新耗时: 0.053秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9721, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 总耗时: 0.20秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9722, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9723, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9659, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=H42, age=0.083s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.01秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9667, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9820, -fn: _resolve_expected_asset_cache_path, 打印次数: 2/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 2/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] UI更新耗时: 0.041秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9721, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "[性能] 总耗时: 0.07秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9722, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9723, -fn: refresh_cache_file_list, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 11:04:53 ======
[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "UI 窗口已显示"   ----code_context : window.show() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12715, -fn: main, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:04:50] [2026-05-07 11:04:50] {WARNING}
[arg0] "统计信息: 232304 个文件, 55907 个目录, 42190 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 36 条 @ 2026-05-07 11:05:11 ======
[2026-05-07 11:05:09] [2026-05-07 11:05:09] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:05:09] [2026-05-07 11:05:09] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 1/4   

[2026-05-07 11:05:09] [2026-05-07 11:05:09] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 2/4   

[2026-05-07 11:05:09] [2026-05-07 11:05:09] {WARNING}
[arg0] "从缓存加载分类树，检查目录是否已存在..."   ----code_context : if self.data_center.try_hydrate_muse_category_tree_from_file_cache(folder_name): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10965, -fn: _ensure_category_tree_ready, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "============================================================"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11036, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "目录状态检查完成:"   ----code_context : lprint("=" * 60)
        lprint("目录状态检查完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11037, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "  总目录数: 14745"   ----code_context : lprint("目录状态检查完成:")
        lprint(f"  总目录数: {total_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11038, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "  已存在: 0"   ----code_context : lprint(f"  总目录数: {total_count}")
        lprint(f"  已存在: {exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11039, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "  未创建: 14745"   ----code_context : lprint(f"  已存在: {exists_count}")
        lprint(f"  未创建: {not_exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11040, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "============================================================"   ----code_context : lprint(f"  未创建: {not_exists_count}")
        lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11041, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）"   ----code_context : _ui_refresh_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11045, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "[目录状态检查] qtree_root_node 轻量回写完成，用时 0.00s"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11052, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "Muse 根分类: 备份资源包/J"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11287, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "基础路径: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"Muse 根分类: {muse_root}", force_print=True)
        lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11288, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "本地文件夹总数: 55907"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11302, -fn: sync_muse_assets, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("CategoryService 参数验证:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:470, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "CategoryService 参数验证:"   ----code_context : lprint("CategoryService 参数验证:")
            lprint(f"  organization_id: {category_service.organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:471, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {category_service.organization_id}")
            lprint(f"  asset_type: {category_service.asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:472, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {category_service.asset_type}")
            lprint(f"  base_path: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:473, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "  base_path: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"  base_path: {base_path}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:474, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:475, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "开始查询文件夹在 Muse 中的分类 ID..."   ----code_context : lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:476, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "使用调用方传入的分类树 Pydantic 模型，跳过分类树读取"   ----code_context : lprint("使用调用方传入的分类树 Pydantic 模型，跳过分类树读取")
            elif category_tree_override is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:485, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("Muse 分类树结构:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:503, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "Muse 分类树结构:"   ----code_context : lprint("Muse 分类树结构:")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:504, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:505, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "组织: rsvs"   ----code_context : lprint(f"组织: {typed_payload.organization_id}")
            lprint(f"根分类数量: {len(org_categories)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:547, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "根分类数量: 1"   ----code_context : lprint(f"根分类数量: {len(org_categories)}")
            root_names = [_node_label(cat) for cat in org_categories] 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:548, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "根分类列表: ['备份资源包']"   ----code_context : lprint(f"根分类列表: {root_names}")
            if target_root_name: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:550, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "正在搜索目标分类: '备份资源包'"   ----code_context : lprint(f"正在搜索目标分类: '{target_root_name}'")
                target_category = find_category_by_name(org_categories, target_root_name) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:552, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "✓ 找到目标分类: '备份资源包' (ID: 411365586239489)"   ----code_context : lprint(f"✓ 找到目标分类: '{target_root_name}' (ID: {target_category.id})")
                    lprint(f"仅显示 '{target_root_name}' 分类树:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:555, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "仅显示 '备份资源包' 分类树:"   ----code_context : lprint(f"仅显示 '{target_root_name}' 分类树:")
                    print_category_tree([target_category], 0) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:556, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "├─ [0] 备份资源包 (ID: 411365586239489)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 1/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "  ├─ [1] J (ID: 411512801853441)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 2/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "    ├─ [2] H42 (ID: 412614732152833)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 3/4   

[2026-05-07 11:05:10] [2026-05-07 11:05:10] {WARNING}
[arg0] "      ├─ [3] 0.规范性文档及范例 (ID: 412614732152834)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 30 条 @ 2026-05-07 11:05:14 ======
[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"配置的根分类: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:565, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "配置的根分类: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"配置的根分类: {base_path}")
            lprint(f"Muse 分类总数: {muse_category_count[0]}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:566, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "Muse 分类总数: 15272"   ----code_context : lprint(f"Muse 分类总数: {muse_category_count[0]}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:567, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:568, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "正在构建路径索引..."   ----code_context : lprint("正在构建路径索引...")
            path_to_id_map = {} 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:571, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "路径索引构建完成，共 15272 个路径"   ----code_context : lprint(f"路径索引构建完成，共 {len(path_to_id_map)} 个路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:607, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "✗ [root] 备份资源包/J/H42 → 未找到"
[arg1] "warning"   ----code_context : lprint(f"✗ [root] {root_path_str} → 未找到", "warning")
                else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:665, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "根节点有 20 个子节点"   ----code_context : lprint(f"根节点有 {len(root_node.children)} 个子节点")
            for child in root_node.children: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:670, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "✗ [0] 备份资源包/J/H42/0.规范性文档及范例 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/CG流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 2/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 3/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "    ✗ [2] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 4/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"文件夹状态更新完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:674, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "文件夹状态更新完成:"   ----code_context : lprint(f"文件夹状态更新完成:")
            lprint(f"  处理文件夹: {processed_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:675, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "  处理文件夹: 55907 个"   ----code_context : lprint(f"  处理文件夹: {processed_count[0]} 个")
            lprint(f"  匹配成功: {matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:676, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "  匹配成功: 0 个"   ----code_context : lprint(f"  匹配成功: {matched_count[0]} 个")
            lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:677, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "  未匹配: 55907 个"   ----code_context : lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个")
            if matched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:678, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "  未匹配样本(前5):"   ----code_context : lprint("  未匹配样本(前5):")
                for item in unmatched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:684, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/CG流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 2/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 3/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 4/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "  Muse分类总数: 15272 个"   ----code_context : lprint(f"  Muse分类总数: {muse_category_count[0]} 个")
            if omitted_log_count[0] > 0: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:687, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "  详细日志省略: 55877 条（已限流到前 30 条）"   ----code_context : lprint(f"  详细日志省略: {omitted_log_count[0]} 条（已限流到前 {max_detail_logs} 条）")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:689, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            # lprint.trace_start(auto_result=True, 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:690, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "[同步阶段] 已收到分类树结果，准备进入资产同步前处理"   ----code_context : stage_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11757, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "[同步阶段] 写入分类树模型完成，用时 0.00s"   ----code_context : self.data_center.muse_category_tree = stats.get("category_tree_model") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11766, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）"   ----code_context : tree_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11771, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40646]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 2/4   

[2026-05-07 11:05:14] [2026-05-07 11:05:14] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 320]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 11:05:21 ======
[2026-05-07 11:05:19] [2026-05-07 11:05:19] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3983, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 11:05:19] [2026-05-07 11:05:19] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.960093]
[arg2] ["folders", 51202]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3993, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 11:05:19] [2026-05-07 11:05:19] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2959698618448, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4042, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 11:05:19] [2026-05-07 11:05:19] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51202]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4102, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 11:05:20] [2026-05-07 11:05:20] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=6.33s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 12 条 @ 2026-05-07 11:05:30 ======
[2026-05-07 11:05:29] [2026-05-07 11:05:29] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=8.93s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:05:30] [2026-05-07 11:05:30] {WARNING}
[arg0] "📊 统计更新: 发现 42190 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 2/4   

[2026-05-07 11:05:30] [2026-05-07 11:05:30] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.25s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:05:30] [2026-05-07 11:05:30] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 228 个，跳过未变化子树 0 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:05:30] [2026-05-07 11:05:30] {WARNING}
[arg0] "[同步阶段] 轻量刷新完成，用时 15.51s"   ----code_context : self.data_center.ui_helper.update_visible_tree_items_only(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11773, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:05:30] [2026-05-07 11:05:30] {WARNING}
[arg0] "[同步阶段] 开始更新UI统计"   ----code_context : stats_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11778, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:05:30] [2026-05-07 11:05:30] {WARNING}
[arg0] "UI 统计已更新: Muse分类=15272, 匹配=0"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11783, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:05:30] [2026-05-07 11:05:30] {WARNING}
[arg0] "[同步阶段] UI统计更新完成，用时 0.00s"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11787, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:05:30] [2026-05-07 11:05:30] {WARNING}
[arg0] "[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 15.52s"   ----code_context : self.ui.statusLabel.setText("正在后台同步 Muse 资产...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11791, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:05:30] [2026-05-07 11:05:30] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", true]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", true]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] ["Muse分支路径", null]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 2/4   

[2026-05-07 11:05:30] [2026-05-07 11:05:30] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 11:05:30] [2026-05-07 11:05:30] {WARNING}
[arg0] "统计信息: 232304 个文件, 55907 个目录, 42190 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 11:05:33 ======
[2026-05-07 11:05:33] [2026-05-07 11:05:33] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分类树"), ("缓存文件", full_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:968, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:05:33] [2026-05-07 11:05:33] {WARNING}
[arg0] "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，已根据 muse_path 在全量分类树缓存上回退解析: muse_path='备份资源包/J/H42' -> id=412614732152833"
[arg1] "warning"   ----code_context : lprint(
                                    "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，"
                                    f"已根据 muse_path 在全量分类树缓存上回退解析: muse_path={mp!r} -> id={category_id}",
                                    "warning",
                                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1225, -fn: run, 打印次数: 1/4   

[2026-05-07 11:05:33] [2026-05-07 11:05:33] {WARNING}
[arg0] "[资产同步缓存检查] 分类=412614732152833, use_local_asset_cache=True, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
                        "[资产同步缓存检查] "
                        f"分类={cid}, use_local_asset_cache={self._use_local_asset_cache}, "
                        f"cache_file={cache_file_path or '<none>'}, cache_file_exists={cache_file_hit}"
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1539, -fn: run, 打印次数: 1/4   

[2026-05-07 11:05:33] [2026-05-07 11:05:33] {WARNING}
[arg0] "[asset_cache] 请求分类资产缓存: categories=1, use_cache=True, use_file_cache=True, save_to_file=False, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
            "[asset_cache] 请求分类资产缓存: "
            f"categories={len(category_ids)}, "
            f"use_cache={use_cache}, use_file_cache={use_file_cache}, save_to_file={save_to_file}, "
            f"cache_file={cache_file or '<none>'}, cache_file_exists={cache_file_exists}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:262, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:05:50 ======
[2026-05-07 11:05:47] [2026-05-07 11:05:47] {WARNING}
[arg0] "[asset_cache] 命中文件缓存并加载成功: L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl"   ----code_context : lprint(f"[asset_cache] 命中文件缓存并加载成功: {cache_file}")
                    return typed_loaded 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:312, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 8 条 @ 2026-05-07 11:05:59 ======
[2026-05-07 11:05:57] [2026-05-07 11:05:57] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 11:05:57] [2026-05-07 11:05:57] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 2/4   

[2026-05-07 11:05:57] [2026-05-07 11:05:57] {WARNING}
[arg0] "[资产同步进度] [cache-hit] 命中资产缓存并更新UI: 分类 412614732152833 | 资产 40646"   ----code_context : if "缓存" in str(message): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11605, -fn: _on_muse_asset_sync_progress, 打印次数: 1/4   

[2026-05-07 11:05:57] [2026-05-07 11:05:57] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:05:58] [2026-05-07 11:05:58] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.365393s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:05:58] [2026-05-07 11:05:58] {WARNING}
[arg0] "[资产同步完成] 触发轻量树刷新（跳过整树重建）"   ----code_context : _light_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11657, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:05:58] [2026-05-07 11:05:58] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40646]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 3/4   

[2026-05-07 11:05:58] [2026-05-07 11:05:58] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 320]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 11:06:05 ======
[2026-05-07 11:06:02] [2026-05-07 11:06:02] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3983, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 11:06:02] [2026-05-07 11:06:02] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 4.003061]
[arg2] ["folders", 51202]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3993, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 11:06:02] [2026-05-07 11:06:02] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2959698618448, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4042, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 11:06:03] [2026-05-07 11:06:03] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51202]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4102, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 11:06:04] [2026-05-07 11:06:04] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=6.22s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 8 条 @ 2026-05-07 11:06:08 ======
[2026-05-07 11:06:05] [2026-05-07 11:06:05] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=1.29s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:06:05] [2026-05-07 11:06:05] {WARNING}
[arg0] "📊 统计更新: 发现 42190 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 3/4   

[2026-05-07 11:06:05] [2026-05-07 11:06:05] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.25s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:06:05] [2026-05-07 11:06:05] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 0 个，跳过未变化子树 1 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:06:05] [2026-05-07 11:06:05] {WARNING}
[arg0] "[资产同步完成] 轻量树刷新完成，用时 7.765635s"   ----code_context : self.data_center.ui_helper.update_visible_tree_items_only(qtree_root) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11659, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:06:07] [2026-05-07 11:06:07] {WARNING}
[arg0] "[asset_sync][result]"
[arg1] ["folder_count", 55908]
[arg2] ["folders_with_category_id", 14734]
[arg3] ["category_query_count", 1]
[arg4] ["total_assets", 40646]
[arg5] ["total_matched", 0]
[arg6] ["mount_failed_count", 0]
[arg7] [
    "mount_failed_reason_counts",
    {}
]   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11698, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:06:07] [2026-05-07 11:06:07] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 11:06:07] [2026-05-07 11:06:07] {WARNING}
[arg0] "统计信息: 232304 个文件, 55907 个目录, 42190 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 11:06:26 ======
[2026-05-07 11:06:26] [2026-05-07 11:06:26] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 11:06:26] [2026-05-07 11:06:26] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:07:59 ======
[2026-05-07 11:07:57] [2026-05-07 11:07:57] {WARNING}
[arg0] "[asset_sync][dialog_done]"
[arg1] ["total_matched", 0]
[arg2] ["total_assets", 40646]
[arg3] ["mount_failed_count", 0]   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11738, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 11:08:23 ======
[2026-05-07 11:08:22] [2026-05-07 11:08:22] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67f9bf1be86eab775c3148bc/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67f9bf1be86eab775c3148bc/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 1/6   

[2026-05-07 11:08:22] [2026-05-07 11:08:22] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67f942f85928c679e254ac65/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67f942f85928c679e254ac65/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 2/6   

[2026-05-07 11:08:22] [2026-05-07 11:08:22] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67f96b9ae86eab775c30ddda/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67f96b9ae86eab775c30ddda/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 3/6   

[2026-05-07 11:08:23] [2026-05-07 11:08:23] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67fe80850eb68e1c6d1c072a/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67fe80850eb68e1c6d1c072a/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 4/6   

[2026-05-07 11:08:23] [2026-05-07 11:08:23] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67fef1507efd750843027365/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67fef1507efd750843027365/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 5/6   

[2026-05-07 11:08:23] [2026-05-07 11:08:23] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "DELETE"]
[arg2] ["请求路径", "/api/open/v1/asset/rsvs/engineering/67ff42ea0eb68e1c6d1cc9fc/delete"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/open/v1/asset/rsvs/engineering/67ff42ea0eb68e1c6d1cc9fc/delete"]
[arg4] ["接口名", "delete_asset"]
[arg5] ["接口用途", "删除单个资产"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {}
]
[arg8] [
    "返回结果",
    {}
]   ----code_context : lprint(
                    "[muse_api][请求成功]",
                    ("请求方法", method),
                    ("请求路径", url),
                    ("完整链接", cls._muse_full_url_from_client(self, url)),
                    ("接口名", endpoint_meta.get("name", "")),
                    ("接口用途", endpoint_meta.get("purpose", "")),
                    ("接口来源", endpoint_meta.get("source", "")),
                    ("请求参数", kwargs),
                    ("返回结果", result),
                    max_prints_per_line=6,
                    max_length=800,
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\base_service.py:461, -fn: _patched_request, 打印次数: 6/6   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:12:21 ======
[2026-05-07 11:12:19] [2026-05-07 11:12:19] {WARNING}
[arg0] "删除资产后缓存同步完成: 内存缓存更新 1 项/移除 384 条, 文件缓存更新 1 个/移除 384 条"
[arg1] "info"   ----code_context : lprint(
                "删除资产后缓存同步完成: "
                f"内存缓存更新 {in_memory_updated_files} 项/移除 {in_memory_removed_assets} 条, "
                f"文件缓存更新 {file_updated_count} 个/移除 {file_removed_assets} 条",
                "info",
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:8671, -fn: _sync_asset_cache_after_delete, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:12:24 ======
[2026-05-07 11:12:22] [2026-05-07 11:12:22] {WARNING}
[arg0] "删除资产完成：成功 384，失败 0"
[arg1] "info"   ----code_context : lprint(summary, "info") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:8581, -fn: _delete_muse_assets, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 9 条 @ 2026-05-07 11:27:02 ======
[2026-05-07 11:27:00] [2026-05-07 11:27:00] {WARNING}
[arg0] "[补全目录链接 txt] 开始批处理（并发写盘），目录数=55908"
[arg1] "info"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:6077, -fn: _begin_folder_link_txt_batch_flow, 打印次数: 1/4   

[2026-05-07 11:27:00] [2026-05-07 11:27:00] {WARNING}
[arg0] "[跳过] 未解析到 Muse 资产节点（仅从子节点推断）：J:\\H42"
[arg1] "warning"   ----code_context : muse_node = self._resolve_folder_muse_asset_node(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5991, -fn: _prepare_folder_link_txt_write_jobs, 打印次数: 1/4   

[2026-05-07 11:27:00] [2026-05-07 11:27:00] {WARNING}
[arg0] "[跳过] 已有目录链接 txt：J:\\H42\\0.规范性文档及范例\\0.规范性文档及范例.txt"
[arg1] "info"   ----code_context : continue 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5983, -fn: _prepare_folder_link_txt_write_jobs, 打印次数: 1/4   

[2026-05-07 11:27:00] [2026-05-07 11:27:00] {WARNING}
[arg0] "[跳过] 已有目录链接 txt：J:\\H42\\0.规范性文档及范例\\CG流程\\CG流程.txt"
[arg1] "info"   ----code_context : continue 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5983, -fn: _prepare_folder_link_txt_write_jobs, 打印次数: 2/4   

[2026-05-07 11:27:00] [2026-05-07 11:27:00] {WARNING}
[arg0] "[跳过] 已有目录链接 txt：J:\\H42\\0.规范性文档及范例\\个画申请外放流程\\个画申请外放流程.txt"
[arg1] "info"   ----code_context : continue 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5983, -fn: _prepare_folder_link_txt_write_jobs, 打印次数: 3/4   

[2026-05-07 11:27:00] [2026-05-07 11:27:00] {WARNING}
[arg0] "[跳过] 已有目录链接 txt：J:\\H42\\0.规范性文档及范例\\个画申请外放流程\\已申请的个画\\已申请的个画.txt"
[arg1] "info"   ----code_context : continue 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5983, -fn: _prepare_folder_link_txt_write_jobs, 打印次数: 4/4   

[2026-05-07 11:27:00] [2026-05-07 11:27:00] {WARNING}
[arg0] "[跳过] 未解析到 Muse 资产节点（仅从子节点推断）：J:\\H42\\0.规范性文档及范例\\字体使用规范"
[arg1] "warning"   ----code_context : muse_node = self._resolve_folder_muse_asset_node(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5991, -fn: _prepare_folder_link_txt_write_jobs, 打印次数: 2/4   

[2026-05-07 11:27:00] [2026-05-07 11:27:00] {WARNING}
[arg0] "[跳过] 未解析到 Muse 资产节点（仅从子节点推断）：J:\\H42\\0.规范性文档及范例\\视频使用字体要求\\宣传片字幕字体\\方正隶变简体"
[arg1] "warning"   ----code_context : muse_node = self._resolve_folder_muse_asset_node(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5991, -fn: _prepare_folder_link_txt_write_jobs, 打印次数: 3/4   

[2026-05-07 11:27:00] [2026-05-07 11:27:00] {WARNING}
[arg0] "[跳过] 未解析到 Muse 资产节点（仅从子节点推断）：J:\\H42\\0.规范性文档及范例\\视频使用字体要求\\过场动画"
[arg1] "warning"   ----code_context : muse_node = self._resolve_folder_muse_asset_node(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5991, -fn: _prepare_folder_link_txt_write_jobs, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:27:20 ======
[2026-05-07 11:27:19] [2026-05-07 11:27:19] {WARNING}
[arg0] "[跳过] Muse 资产大小为 0（主文件+附件字节合计≤0），不创建目录链接 txt：J:\\H42\\1.过场动画\\2021\\19.泠音门派主线\\B动画文件\\0美术资产\\人物资产\\【0】X-过期\\泠音正太"
[arg1] "warning"   ----code_context : skipped_zero.append(fp) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:6006, -fn: _prepare_folder_link_txt_write_jobs, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 11:27:23 ======
[2026-05-07 11:27:20] [2026-05-07 11:27:20] {WARNING}
[arg0] "[跳过] Muse 资产大小为 0（主文件+附件字节合计≤0），不创建目录链接 txt：J:\\H42\\1.过场动画\\2021\\19.泠音门派主线\\B动画文件\\1发包资产\\6.7-资产更新\\泠音正太"
[arg1] "warning"   ----code_context : skipped_zero.append(fp) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:6006, -fn: _prepare_folder_link_txt_write_jobs, 打印次数: 2/4   

[2026-05-07 11:27:21] [2026-05-07 11:27:21] {WARNING}
[arg0] "[跳过] Muse 资产大小为 0（主文件+附件字节合计≤0），不创建目录链接 txt：J:\\H42\\1.过场动画\\2021\\19.泠音门派主线\\B动画文件\\2动画收包\\10_拜入泠音\\ly10_brly_ani_bz_v01_05.26\\ly10_brlm_lay_bz_v01_05.26_反馈"
[arg1] "warning"   ----code_context : skipped_zero.append(fp) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:6006, -fn: _prepare_folder_link_txt_write_jobs, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:28:14 ======
[2026-05-07 11:28:14] [2026-05-07 11:28:14] {WARNING}
[arg0] "[跳过] Muse 资产大小为 0（主文件+附件字节合计≤0），不创建目录链接 txt：J:\\H42\\1.过场动画\\2022\\34.互市\\01_assets\\prop\\xxxxxa\\rig"
[arg1] "warning"   ----code_context : skipped_zero.append(fp) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:6006, -fn: _prepare_folder_link_txt_write_jobs, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 51 条 @ 2026-05-07 11:36:14 ======
[2026-05-07 11:36:08] [2026-05-07 11:36:08] {WARNING}
[arg0] "[PYTRACEMP][DATE_LOG_PATH]"
[arg1] ["module_name", "j_disc_backup_ui"]
[arg2] ["log_base_dir", "D:\\Temp\\Log"]
[arg3] ["date_log_path", "D:\\Temp\\Log\\j_disc_backup_ui\\20260507.md"]
[arg4] ["cleared", true]
[arg5] ["clear_error", null]   ----code_context : lprint(
            "[PYTRACEMP][DATE_LOG_PATH]",
            ("module_name", module_name),
            ("log_base_dir", log_base_dir),
            ("date_log_path", date_log_path),
            ("cleared", cleared),
            ("clear_error", clear_error),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\@baselibs\pytracemp\__init__.py:54, -fn: _print_date_log_path_on_import, 打印次数: 1/4   

[2026-05-07 11:36:10] [2026-05-07 11:36:10] {WARNING}
[arg0] "[AST自动修复] 已修复 j_disc_backup_ui.py: inserted=1, file=c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py"
[arg1] "warning"   ----code_context : lprint(message, "warning")
    return None 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:112, -fn: _policy_warn, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[启动参数][argv_parse]"
[arg1] [
    "argv",
    [
        "c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py",
        "--enable-trace=True",
        "--source-dir",
        "J:",
        "--upload-dir",
        "H42",
        "--ignore-ui-state",
        "--separate-taskbar-icon"
    ]
]
[arg2] ["arg_source_dir", "J:"]
[arg3] ["arg_upload_dir", "H42"]
[arg4] ["arg_ignore_ui_state", true]
[arg5] ["arg_taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1"]
[arg6] ["arg_separate_taskbar_icon", true]   ----code_context : enable_trace = _to_bool(args.enable_trace) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12842, -fn: main, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[启动参数][final]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1.pid65968"]
[arg5] ["enable_trace", true]   ----code_context : runtime_taskbar_app_id = f"{runtime_taskbar_app_id}.pid{os.getpid()}" 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12854, -fn: main, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "============================================================"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12871, -fn: main, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "J盘备份到Muse UI 启动"   ----code_context : lprint("=" * 60)
    lprint("J盘备份到Muse UI 启动") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12872, -fn: main, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("J盘备份到Muse UI 启动")
    lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12873, -fn: main, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "正在初始化 UI..."   ----code_context : lprint.trace_max_result_per_function = 4 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12878, -fn: main, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "正在创建数据中心..."   ----code_context : lprint("正在创建数据中心...")
        self.data_center = BackupDataCenter(self) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4239, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "配置加载成功: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置加载成功: {config_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:682, -fn: load_default_config, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "UI已根据配置更新（全量）"   ----code_context : lprint("UI已根据配置更新（全量）")
                return 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2096, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "数据中心创建完成"   ----code_context : lprint("数据中心创建完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4241, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['backup_source_dir']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[启动参数][应用后配置]"
[arg1] ["startup_source_dir", "J:"]
[arg2] ["startup_upload_dir", "H42"]
[arg3] ["startup_upload_is_all", false]
[arg4] ["config_source_dir", "J:"]   ----code_context : lprint(
            "[启动参数][应用后配置]",
            ("startup_source_dir", self._startup_source_dir or "<empty>"),
            ("startup_upload_dir", self._startup_upload_dir or "<empty>"),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ("config_source_dir", self.data_center.config.backup_source_dir),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4254, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[启动参数]"
[arg1] ["source_dir", "J:"]
[arg2] ["upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]   ----code_context : lprint(
                "[启动参数]",
                ("source_dir", self._startup_source_dir or "<使用配置>"),
                ("upload_dir", upload_dir_label),
                ("ignore_ui_state", self._ignore_ui_state),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4265, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("MuseTool 初始化参数:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4294, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "MuseTool 初始化参数:"   ----code_context : lprint("MuseTool 初始化参数:")
            lprint(f"  user_email: {user_email}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4295, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {user_email}")
            lprint(f"  organization_id: {organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4296, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {organization_id}")
            lprint(f"  asset_type: {asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4297, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {asset_type}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4298, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4299, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "MuseTool 初始化成功"   ----code_context : lprint("MuseTool 初始化成功")
            lprint("验证 MuseTool 运行身份:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4308, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "验证 MuseTool 运行身份:"   ----code_context : lprint("验证 MuseTool 运行身份:")
            lprint(f"  user_email: {identity.get('user_email', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4309, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {identity.get('user_email', '')}")
            lprint(f"  organization_id: {identity.get('organization_id', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4310, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {identity.get('organization_id', '')}")
            lprint(f"  asset_type: {identity.get('asset_type', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4311, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {identity.get('asset_type', '')}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4312, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "从 p4_to_muse.yaml 加载本地 source 预设: 58 个"   ----code_context : lprint(f"从 p4_to_muse.yaml 加载本地 source 预设: {len(mappings)} 个")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1578, -fn: refresh_source_mappings_from_yaml, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "正在扫描 J: 的文件夹列表..."   ----code_context : lprint(f"正在扫描 {backup_source_dir} 的文件夹列表...")
            try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4887, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "扫描到 67 个文件夹"   ----code_context : lprint(f"扫描到 {len(folders)} 个文件夹")
            except (PermissionError, OSError) as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4893, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[upload_dir_combo][init_start]"
[arg1] ["source_dir", "J:"]
[arg2] ["preferred_upload_dir", "H42"]
[arg3] ["ignore_ui_state", true]
[arg4] ["startup_upload_explicit", true]
[arg5] ["startup_upload_is_all", false]   ----code_context : lprint(
            "[upload_dir_combo][init_start]",
            ("source_dir", backup_source_dir),
            ("preferred_upload_dir", preferred_upload_dir or "<empty>"),
            ("ignore_ui_state", self._ignore_ui_state),
            ("startup_upload_explicit", self._startup_upload_dir_is_explicit),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4913, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[upload_dir_combo][candidates]"
[arg1] [
    "candidate_values",
    [
        "H42"
    ]
]
[arg2] ["folder_count", 67]   ----code_context : lprint(
                "[upload_dir_combo][candidates]",
                ("candidate_values", candidate_values),
                ("folder_count", len(folders)),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4938, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "已加载 67 个文件夹到下拉框: ['00_doc', '123456', '2024风霁周会产出展示', '2025风霁周会产出展示', '2026风霁周会产出展示', '@Recycle', 'A49', 'Anim_library', 'Asset_library', 'DM139', 'DM142', 'GUI', 'GYL_Tools', 'H18', 'H42', 'H52', 'H55', 'H64', 'H65', 'H65_Dasha Taran', 'H70_临时', 'H72', 'H73', 'H74', 'H74-风霁月会产出材料', 'H75', 'H77', 'HXX(模板)', 'MA167', 'MA67', 'MA73', 'Projects', 'RigWork', 'S4', 'S7', 'SteamLibrary', 'U5', 'UE5 Demo', 'UXX', 'Vendor', 'X23', 'X33', 'X9', 'YY45', 'YY63', 'artlib_preview', 'blender', 'maya', 'origin_disk_J', 'prod_projs', 'render', 'sp', 'temp', 'work', 'zb', '临时文件', '供应商资料共享', '动捕演员资料库', '动画工具', '动画月会资料', '年度Showreel', '战斗场景——大鸭头', '游戏解包资源汇总', '竞标需求', '网易蛋仔派对', '迅雷云盘', '风雨项目集双周会产出材料']"   ----code_context : lprint(f"已加载 {len(folders)} 个文件夹到下拉框: {folders}")
        if selected_folder: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4967, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "uploadDirComboBox 自动选择: H42"   ----code_context : lprint(f"uploadDirComboBox 自动选择: {selected_folder}")
        lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4969, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[upload_dir_combo][init_done]"
[arg1] ["selected_folder", "H42"]
[arg2] ["current_text", "H42"]
[arg3] ["business_value", "H42"]   ----code_context : lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4970, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "扫描方式初始化完成，当前方式: os.scandir (性能优化)"   ----code_context : lprint(f"扫描方式初始化完成，当前方式: {ScanMethod.get_display_name(current_method)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5240, -fn: init_scan_method_ui, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "路径设置页已加载 5 条映射"   ----code_context : lprint(f"路径设置页已加载 {len(mappings)} 条映射")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5125, -fn: load_path_mapping_table, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[日志前缀][模式切换]"
[arg1] ["business_mode", "backup_file"]
[arg2] ["date_log_prefix", "j_disc_backup_file"]   ----code_context : lprint(
                "[日志前缀][模式切换]",
                ("business_mode", mode),
                ("date_log_prefix", log_prefix),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4551, -fn: _apply_date_log_prefix_by_mode, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 2/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 3/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['muse_root_category']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 2/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 4/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[trace][init]"
[arg1] ["enabled", true]
[arg2] ["source", "startup_arg"]   ----code_context : lprint(
            "[trace][init]",
            ("enabled", bool(self._startup_enable_trace)),
            ("source", "startup_arg"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5478, -fn: _init_trace_toggle_checkbox, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state"   ----code_context : lprint("[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4362, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "[启动缓存][候选]"
[arg1] ["current_ui_folder", "H42"]
[arg2] [
    "candidate_folders",
    [
        "H42"
    ]
]
[arg3] ["startup_upload_is_all", false]   ----code_context : lprint(
                "[启动缓存][候选]",
                ("current_ui_folder", current_ui_folder or "<empty>"),
                ("candidate_folders", candidate_folders),
                ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4584, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "发现Pickle缓存文件: L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"发现Pickle缓存文件: {pkl_cache_file}")
                lprint(f"正在自动加载缓存: folder={folder}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4600, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "正在自动加载缓存: folder=H42"   ----code_context : lprint(f"正在自动加载缓存: folder={folder}")
                success = self.data_center.load_scan_cache(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4601, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:36:11] [2026-05-07 11:36:11] {WARNING}
[arg0] "正在加载扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl, 大小: 361.13MB"   ----code_context : lprint(f"正在加载扫描缓存(Pickle): {pkl_path}, 大小: {size_mb:.2f}MB") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1396, -fn: load_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 11:36:35 ======
[2026-05-07 11:36:32] [2026-05-07 11:36:32] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:36:33] [2026-05-07 11:36:33] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.344254s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:36:33] [2026-05-07 11:36:33] {WARNING}
[arg0] "[qtree_root_node] 开始 render_root_node_change"   ----code_context : lprint("[qtree_root_node] 开始 render_root_node_change")
                    self.ui_helper.render_root_node_change(node, _from_data_center=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:925, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:36:33] [2026-05-07 11:36:33] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 55908]
[arg3] ["file_nodes", 232304]
[arg4] ["muse_asset_nodes", 40646]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2428, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:36:33] [2026-05-07 11:36:33] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40646]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 1/4   

[2026-05-07 11:36:33] [2026-05-07 11:36:33] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 320]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3863, -fn: _collect_selective_metrics_roots, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 11:36:41 ======
[2026-05-07 11:36:40] [2026-05-07 11:36:40] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3986, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 11:36:40] [2026-05-07 11:36:40] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 4.58632]
[arg2] ["folders", 51202]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3996, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 1/4   

[2026-05-07 11:36:40] [2026-05-07 11:36:40] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2209606708624, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4045, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   

[2026-05-07 11:36:40] [2026-05-07 11:36:40] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51202]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4105, -fn: _apply_effective_metrics_by_path, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:36:44 ======
[2026-05-07 11:36:43] [2026-05-07 11:36:43] {WARNING}
[arg0] "[effective_metrics] 根节点统计耗时: total=3.048339s, children_loop=3.048329s, writeback=0.000003s, children=20, attachment_total=725438, package_size_total=11904481607377"   ----code_context : lprint(
                "[effective_metrics] 根节点统计耗时: "
                f"total={total_elapsed:.6f}s, "
                f"children_loop={loop_elapsed:.6f}s, "
                f"writeback={writeback_elapsed:.6f}s, "
                f"children={len(getattr(node, 'children', []) or [])}, "
                f"attachment_total={int(node.attachment_count_total)}, "
                f"package_size_total={int(node.package_size_total)}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4234, -fn: _compute_and_set_effective_folder_metrics, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 11:36:47 ======
[2026-05-07 11:36:45] [2026-05-07 11:36:45] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=2209606708624, root_name=H42, total=20, types={'FolderNode': 20}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2474, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:36:47] [2026-05-07 11:36:47] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=20, child_types={'FolderNode': 20}, class_identity=isinstance=True, child_class_id=2209597859296, import_class_id=2209597859296, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4478, -fn: _build_folder_item, 打印次数: 1/4   

[2026-05-07 11:36:47] [2026-05-07 11:36:47] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 2.322597s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2490, -fn: update_file_tree, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 11 条 @ 2026-05-07 11:36:50 ======
[2026-05-07 11:36:48] [2026-05-07 11:36:48] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=0.规范性文档及范例, children(folder=17, other=1)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4323, -fn: _on_tree_item_expanded, 打印次数: 1/4   

[2026-05-07 11:36:49] [2026-05-07 11:36:49] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=1.过场动画, children(folder=14, other=2)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4323, -fn: _on_tree_item_expanded, 打印次数: 2/4   

[2026-05-07 11:36:49] [2026-05-07 11:36:49] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=10.原画包装, children(folder=8, other=3)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4323, -fn: _on_tree_item_expanded, 打印次数: 3/4   

[2026-05-07 11:36:49] [2026-05-07 11:36:49] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=11.AI, children(folder=2, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4323, -fn: _on_tree_item_expanded, 打印次数: 4/4   

[2026-05-07 11:36:50] [2026-05-07 11:36:50] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 227 个 item，用时 3.307361s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2506, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:36:50] [2026-05-07 11:36:50] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 12]
[arg3] ["folder_nodes", 55908]
[arg4] ["muse_asset_nodes", 40646]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2522, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:36:50] [2026-05-07 11:36:50] {WARNING}
[arg0] "📊 统计更新: 发现 42190 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5074, -fn: update_statistics, 打印次数: 1/4   

[2026-05-07 11:36:50] [2026-05-07 11:36:50] {WARNING}
[arg0] "[qtree_root_node] 渲染完成，用时 17.618672s"   ----code_context : lprint(f"[qtree_root_node] 渲染完成，用时 {time.time() - _render_t0:.6f}s")
                    if self._startup_render_guard_enabled: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:927, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:36:50] [2026-05-07 11:36:50] {WARNING}
[arg0] "扫描缓存已加载(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已加载(Pickle v{loaded_version}): {pkl_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1481, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 11:36:50] [2026-05-07 11:36:50] {WARNING}
[arg0] "缓存加载成功，正在更新UI..."   ----code_context : lprint("缓存加载成功，正在更新UI...")
                self._apply_category_tree_cache_to_current_tree(context="auto_load_cache") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4609, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:36:50] [2026-05-07 11:36:50] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", false]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] [
    "Muse分支路径",
    [
        "备份资源包",
        "J",
        "H42"
    ]
]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 34 条 @ 2026-05-07 11:36:53 ======
[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分支树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分支树"), ("缓存文件", brunch_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:951, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "通过上游缓存逻辑加载分类树: L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"通过上游缓存逻辑加载分类树: {self._last_loaded_category_tree_cache_path}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:487, -fn: _try_hydrate_muse_category_tree_from_file_cache, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[分类树缓存][应用到当前树]"
[arg1] ["context", "auto_load_cache"]
[arg2] ["folder_name", "H42"]
[arg3] ["loaded", true]
[arg4] ["root_name", "H42"]
[arg5] ["root_muse_category_id", null]   ----code_context : lprint(
            "[分类树缓存][应用到当前树]",
            ("context", context or "<empty>"),
            ("folder_name", folder_name or "<empty>"),
            ("loaded", loaded),
            ("root_name", getattr(root_node, "name", "")),
            ("root_muse_category_id", getattr(root_node, "muse_category_id", None)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4871, -fn: _apply_category_tree_cache_to_current_tree, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "自动加载缓存完成"   ----code_context : lprint("自动加载缓存完成")
                self.refresh_cache_file_list() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4619, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9792, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_H42(md5_b38a55d5)_muse_category_tree_rsvs_engineering.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.01秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.13秒, folder=H42, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.16秒, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.19秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9800, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9953, -fn: _resolve_expected_asset_cache_path, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10072, -fn: update_cache_files_list, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] UI更新耗时: 0.047秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9854, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 总耗时: 0.25秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9855, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9856, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9792, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=H42, age=0.075s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.01秒，共 3 个文件, folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9800, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=H42, muse_path=备份资源包/J/H42"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9953, -fn: _resolve_expected_asset_cache_path, 打印次数: 2/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10072, -fn: update_cache_files_list, 打印次数: 2/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] UI更新耗时: 0.057秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9854, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "[性能] 总耗时: 0.09秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9855, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:36:51] [2026-05-07 11:36:51] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=H42, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9856, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:36:52] [2026-05-07 11:36:52] {WARNING}
[arg0] "UI 窗口已显示"   ----code_context : window.show() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12886, -fn: main, 打印次数: 1/4   

[2026-05-07 11:36:52] [2026-05-07 11:36:52] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:36:52] [2026-05-07 11:36:52] {WARNING}
[arg0] "统计信息: 232304 个文件, 55907 个目录, 42190 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 36 条 @ 2026-05-07 11:37:15 ======
[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3904, -fn: _flush_scan_cache_after_metrics, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 2/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "从缓存加载分类树，检查目录是否已存在..."   ----code_context : if self.data_center.try_hydrate_muse_category_tree_from_file_cache(folder_name): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11136, -fn: _ensure_category_tree_ready, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "============================================================"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11207, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "目录状态检查完成:"   ----code_context : lprint("=" * 60)
        lprint("目录状态检查完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11208, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "  总目录数: 14745"   ----code_context : lprint("目录状态检查完成:")
        lprint(f"  总目录数: {total_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11209, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "  已存在: 0"   ----code_context : lprint(f"  总目录数: {total_count}")
        lprint(f"  已存在: {exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11210, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "  未创建: 14745"   ----code_context : lprint(f"  已存在: {exists_count}")
        lprint(f"  未创建: {not_exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11211, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "============================================================"   ----code_context : lprint(f"  未创建: {not_exists_count}")
        lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11212, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）"   ----code_context : _ui_refresh_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11216, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "[目录状态检查] qtree_root_node 轻量回写完成，用时 0.00s"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11223, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "Muse 根分类: 备份资源包/J"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11458, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "基础路径: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"Muse 根分类: {muse_root}", force_print=True)
        lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11459, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "本地文件夹总数: 55907"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11473, -fn: sync_muse_assets, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("CategoryService 参数验证:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:470, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "CategoryService 参数验证:"   ----code_context : lprint("CategoryService 参数验证:")
            lprint(f"  organization_id: {category_service.organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:471, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {category_service.organization_id}")
            lprint(f"  asset_type: {category_service.asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:472, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {category_service.asset_type}")
            lprint(f"  base_path: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:473, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "  base_path: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"  base_path: {base_path}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:474, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:475, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "开始查询文件夹在 Muse 中的分类 ID..."   ----code_context : lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:476, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "使用调用方传入的分类树 Pydantic 模型，跳过分类树读取"   ----code_context : lprint("使用调用方传入的分类树 Pydantic 模型，跳过分类树读取")
            elif category_tree_override is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:485, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("Muse 分类树结构:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:503, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "Muse 分类树结构:"   ----code_context : lprint("Muse 分类树结构:")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:504, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:505, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "组织: rsvs"   ----code_context : lprint(f"组织: {typed_payload.organization_id}")
            lprint(f"根分类数量: {len(org_categories)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:547, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "根分类数量: 1"   ----code_context : lprint(f"根分类数量: {len(org_categories)}")
            root_names = [_node_label(cat) for cat in org_categories] 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:548, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "根分类列表: ['备份资源包']"   ----code_context : lprint(f"根分类列表: {root_names}")
            if target_root_name: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:550, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "正在搜索目标分类: '备份资源包'"   ----code_context : lprint(f"正在搜索目标分类: '{target_root_name}'")
                target_category = find_category_by_name(org_categories, target_root_name) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:552, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "✓ 找到目标分类: '备份资源包' (ID: 411365586239489)"   ----code_context : lprint(f"✓ 找到目标分类: '{target_root_name}' (ID: {target_category.id})")
                    lprint(f"仅显示 '{target_root_name}' 分类树:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:555, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "仅显示 '备份资源包' 分类树:"   ----code_context : lprint(f"仅显示 '{target_root_name}' 分类树:")
                    print_category_tree([target_category], 0) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:556, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "├─ [0] 备份资源包 (ID: 411365586239489)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 1/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "  ├─ [1] J (ID: 411512801853441)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 2/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "    ├─ [2] H42 (ID: 412614732152833)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 3/4   

[2026-05-07 11:37:12] [2026-05-07 11:37:12] {WARNING}
[arg0] "      ├─ [3] 0.规范性文档及范例 (ID: 412614732152834)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 30 条 @ 2026-05-07 11:37:18 ======
[2026-05-07 11:37:16] [2026-05-07 11:37:16] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"配置的根分类: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:565, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:16] [2026-05-07 11:37:16] {WARNING}
[arg0] "配置的根分类: ['备份资源包', 'J', 'H42']"   ----code_context : lprint(f"配置的根分类: {base_path}")
            lprint(f"Muse 分类总数: {muse_category_count[0]}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:566, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:16] [2026-05-07 11:37:16] {WARNING}
[arg0] "Muse 分类总数: 15272"   ----code_context : lprint(f"Muse 分类总数: {muse_category_count[0]}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:567, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:16] [2026-05-07 11:37:16] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:568, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:16] [2026-05-07 11:37:16] {WARNING}
[arg0] "正在构建路径索引..."   ----code_context : lprint("正在构建路径索引...")
            path_to_id_map = {} 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:571, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:16] [2026-05-07 11:37:16] {WARNING}
[arg0] "路径索引构建完成，共 15272 个路径"   ----code_context : lprint(f"路径索引构建完成，共 {len(path_to_id_map)} 个路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:607, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:16] [2026-05-07 11:37:16] {WARNING}
[arg0] "✗ [root] 备份资源包/J/H42 → 未找到"
[arg1] "warning"   ----code_context : lprint(f"✗ [root] {root_path_str} → 未找到", "warning")
                else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:665, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:16] [2026-05-07 11:37:16] {WARNING}
[arg0] "根节点有 20 个子节点"   ----code_context : lprint(f"根节点有 {len(root_node.children)} 个子节点")
            for child in root_node.children: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:670, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:16] [2026-05-07 11:37:16] {WARNING}
[arg0] "✗ [0] 备份资源包/J/H42/0.规范性文档及范例 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 1/4   

[2026-05-07 11:37:16] [2026-05-07 11:37:16] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/CG流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 2/4   

[2026-05-07 11:37:16] [2026-05-07 11:37:16] {WARNING}
[arg0] "  ✗ [1] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 3/4   

[2026-05-07 11:37:16] [2026-05-07 11:37:16] {WARNING}
[arg0] "    ✗ [2] 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 4/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"文件夹状态更新完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:674, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "文件夹状态更新完成:"   ----code_context : lprint(f"文件夹状态更新完成:")
            lprint(f"  处理文件夹: {processed_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:675, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "  处理文件夹: 55907 个"   ----code_context : lprint(f"  处理文件夹: {processed_count[0]} 个")
            lprint(f"  匹配成功: {matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:676, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "  匹配成功: 0 个"   ----code_context : lprint(f"  匹配成功: {matched_count[0]} 个")
            lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:677, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "  未匹配: 55907 个"   ----code_context : lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个")
            if matched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:678, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "  未匹配样本(前5):"   ----code_context : lprint("  未匹配样本(前5):")
                for item in unmatched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:684, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/CG流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 2/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 3/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "    - 备份资源包/J/H42/0.规范性文档及范例/个画申请外放流程/已申请的个画"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 4/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "  Muse分类总数: 15272 个"   ----code_context : lprint(f"  Muse分类总数: {muse_category_count[0]} 个")
            if omitted_log_count[0] > 0: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:687, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "  详细日志省略: 55877 条（已限流到前 30 条）"   ----code_context : lprint(f"  详细日志省略: {omitted_log_count[0]} 条（已限流到前 {max_detail_logs} 条）")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:689, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            # lprint.trace_start(auto_result=True, 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:690, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "[同步阶段] 已收到分类树结果，准备进入资产同步前处理"   ----code_context : stage_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11928, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "[同步阶段] 写入分类树模型完成，用时 0.00s"   ----code_context : self.data_center.muse_category_tree = stats.get("category_tree_model") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11937, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）"   ----code_context : tree_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11942, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40646]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 2/4   

[2026-05-07 11:37:17] [2026-05-07 11:37:17] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 320]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3863, -fn: _collect_selective_metrics_roots, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 11:37:24 ======
[2026-05-07 11:37:21] [2026-05-07 11:37:21] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3986, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 11:37:21] [2026-05-07 11:37:21] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.79098]
[arg2] ["folders", 51202]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3996, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 2/4   

[2026-05-07 11:37:21] [2026-05-07 11:37:21] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2209606708624, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4045, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 11:37:22] [2026-05-07 11:37:22] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51202]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4105, -fn: _apply_effective_metrics_by_path, 打印次数: 2/4   

[2026-05-07 11:37:23] [2026-05-07 11:37:23] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=5.94s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 12 条 @ 2026-05-07 11:37:34 ======
[2026-05-07 11:37:31] [2026-05-07 11:37:31] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=8.41s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:37:31] [2026-05-07 11:37:31] {WARNING}
[arg0] "📊 统计更新: 发现 42190 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5074, -fn: update_statistics, 打印次数: 2/4   

[2026-05-07 11:37:31] [2026-05-07 11:37:31] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.21s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:37:31] [2026-05-07 11:37:31] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 228 个，跳过未变化子树 0 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:37:31] [2026-05-07 11:37:31] {WARNING}
[arg0] "[同步阶段] 轻量刷新完成，用时 14.57s"   ----code_context : self.data_center.ui_helper.update_visible_tree_items_only(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11944, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:37:31] [2026-05-07 11:37:31] {WARNING}
[arg0] "[同步阶段] 开始更新UI统计"   ----code_context : stats_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11949, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:37:31] [2026-05-07 11:37:31] {WARNING}
[arg0] "UI 统计已更新: Muse分类=15272, 匹配=0"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11954, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:37:31] [2026-05-07 11:37:31] {WARNING}
[arg0] "[同步阶段] UI统计更新完成，用时 0.00s"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11958, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:37:31] [2026-05-07 11:37:31] {WARNING}
[arg0] "[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 14.57s"   ----code_context : self.ui.statusLabel.setText("正在后台同步 Muse 资产...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11962, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:37:31] [2026-05-07 11:37:31] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", true]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", true]
[arg4] ["组织", "rsvs"]
[arg5] ["资产类型", "engineering"]
[arg6] ["Muse分支路径", null]   ----code_context : lprint(
            "[分类树缓存]",
            ("使用内存缓存", use_cache),
            ("使用文件缓存", use_file_cache),
            ("保存到文件", save_to_file),
            ("组织", self.organization_id),
            ("资产类型", self.asset_type),
            ("Muse分支路径", muse_base_path_segments),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 2/4   

[2026-05-07 11:37:31] [2026-05-07 11:37:31] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 11:37:31] [2026-05-07 11:37:31] {WARNING}
[arg0] "统计信息: 232304 个文件, 55907 个目录, 42190 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 11:37:37 ======
[2026-05-07 11:37:34] [2026-05-07 11:37:34] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分类树"), ("缓存文件", full_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:968, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:37:34] [2026-05-07 11:37:34] {WARNING}
[arg0] "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，已根据 muse_path 在全量分类树缓存上回退解析: muse_path='备份资源包/J/H42' -> id=412614732152833"
[arg1] "warning"   ----code_context : lprint(
                                    "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，"
                                    f"已根据 muse_path 在全量分类树缓存上回退解析: muse_path={mp!r} -> id={category_id}",
                                    "warning",
                                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1225, -fn: run, 打印次数: 1/4   

[2026-05-07 11:37:35] [2026-05-07 11:37:35] {WARNING}
[arg0] "[资产同步缓存检查] 分类=412614732152833, use_local_asset_cache=True, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
                        "[资产同步缓存检查] "
                        f"分类={cid}, use_local_asset_cache={self._use_local_asset_cache}, "
                        f"cache_file={cache_file_path or '<none>'}, cache_file_exists={cache_file_hit}"
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1539, -fn: run, 打印次数: 1/4   

[2026-05-07 11:37:35] [2026-05-07 11:37:35] {WARNING}
[arg0] "[asset_cache] 请求分类资产缓存: categories=1, use_cache=True, use_file_cache=True, save_to_file=False, cache_file=L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl, cache_file_exists=True"   ----code_context : lprint(
            "[asset_cache] 请求分类资产缓存: "
            f"categories={len(category_ids)}, "
            f"use_cache={use_cache}, use_file_cache={use_file_cache}, save_to_file={save_to_file}, "
            f"cache_file={cache_file or '<none>'}, cache_file_exists={cache_file_exists}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:262, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:37:54 ======
[2026-05-07 11:37:51] [2026-05-07 11:37:51] {WARNING}
[arg0] "[asset_cache] 命中文件缓存并加载成功: L:\\temp\\j_muse_backup_new\\H42\\muse_asset_cache_H42.pkl"   ----code_context : lprint(f"[asset_cache] 命中文件缓存并加载成功: {cache_file}")
                    return typed_loaded 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:312, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 8 条 @ 2026-05-07 11:38:03 ======
[2026-05-07 11:38:02] [2026-05-07 11:38:02] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 2/4   

[2026-05-07 11:38:02] [2026-05-07 11:38:02] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3904, -fn: _flush_scan_cache_after_metrics, 打印次数: 2/4   

[2026-05-07 11:38:02] [2026-05-07 11:38:02] {WARNING}
[arg0] "[资产同步进度] [cache-hit] 命中资产缓存并更新UI: 分类 412614732152833 | 资产 40262"   ----code_context : if "缓存" in str(message): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11776, -fn: _on_muse_asset_sync_progress, 打印次数: 1/4   

[2026-05-07 11:38:02] [2026-05-07 11:38:02] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:38:02] [2026-05-07 11:38:02] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.339434s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:38:02] [2026-05-07 11:38:02] {WARNING}
[arg0] "[资产同步完成] 触发轻量树刷新（跳过整树重建）"   ----code_context : _light_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11828, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:38:03] [2026-05-07 11:38:03] {WARNING}
[arg0] "[7z元数据][分卷预热汇总]"
[arg1] ["扫描资产数", 40262]
[arg2] ["分卷资产数", 29]
[arg3] ["待统计资产数", 29]
[arg4] ["并行数", 5]
[arg5] ["新增元数据资产数", 0]
[arg6] ["仍缺元数据资产数", 29]   ----code_context : lprint(
                "[7z元数据][分卷预热汇总]",
                ("扫描资产数", scanned_assets),
                ("分卷资产数", split_assets),
                ("待统计资产数", len(candidate_assets)),
                ("并行数", worker_count),
                ("新增元数据资产数", updated_assets),
                ("仍缺元数据资产数", missing_metadata_assets),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1440, -fn: _ensure_split_volume_archive_metadata_for_folder_tree, 打印次数: 3/4   

[2026-05-07 11:38:03] [2026-05-07 11:38:03] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 320]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3863, -fn: _collect_selective_metrics_roots, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 11:38:09 ======
[2026-05-07 11:38:07] [2026-05-07 11:38:07] {WARNING}
[arg0] "[effective_metrics][split_volume][summary]"
[arg1] ["mode", "selective"]
[arg2] ["folders_with_split", 0]
[arg3] ["group_count", 0]
[arg4] ["part_count", 0]
[arg5] [
    "top_groups",
    []
]
[arg6] [
    "folder_samples",
    []
]   ----code_context : lprint(
                    "[effective_metrics][split_volume][summary]",
                    ("mode", mode_label),
                    ("folders_with_split", folders_with_split),
                    ("group_count", group_count),
                    ("part_count", part_count),
                    ("top_groups", top_groups),
                    ("folder_samples", folder_samples),
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3986, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 11:38:07] [2026-05-07 11:38:07] {WARNING}
[arg0] "[effective_metrics] 子进程统计完成"
[arg1] ["elapsed_s", 3.698322]
[arg2] ["folders", 51199]
[arg3] ["mode", "selective"]   ----code_context : lprint(
                "[effective_metrics] 子进程统计完成",
                ("elapsed_s", round(time.perf_counter() - t0, 6)),
                ("folders", len(metrics_by_path)),
                ("mode", mode_label),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3996, -fn: _compute_effective_metrics_in_subprocess, 打印次数: 3/4   

[2026-05-07 11:38:07] [2026-05-07 11:38:07] {WARNING}
[arg0] "[effective_metrics] apply开始: root_id=2209606708624, root_name=H42, children=20, folder_children=20"   ----code_context : lprint(
            f"[effective_metrics] apply开始: root_id={id(root_node)}, "
            f"root_name={getattr(root_node, 'name', '?')}, "
            f"children={_root_child_count}, folder_children={_root_folder_children}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4045, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 11:38:07] [2026-05-07 11:38:07] {WARNING}
[arg0] "[effective_metrics] 主进程回写完成"
[arg1] ["applied", 51199]
[arg2] ["folder_nodes_seen", 55908]
[arg3] ["partial", true]   ----code_context : lprint(
            "[effective_metrics] 主进程回写完成",
            ("applied", applied),
            ("folder_nodes_seen", folder_nodes_seen),
            ("partial", partial),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4105, -fn: _apply_effective_metrics_by_path, 打印次数: 3/4   

[2026-05-07 11:38:08] [2026-05-07 11:38:08] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=5.86s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 8 条 @ 2026-05-07 11:38:19 ======
[2026-05-07 11:38:16] [2026-05-07 11:38:16] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=7.61s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:38:16] [2026-05-07 11:38:16] {WARNING}
[arg0] "📊 统计更新: 发现 42190 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5074, -fn: update_statistics, 打印次数: 3/4   

[2026-05-07 11:38:16] [2026-05-07 11:38:16] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.25s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:38:16] [2026-05-07 11:38:16] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 11 个，跳过未变化子树 43 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:38:16] [2026-05-07 11:38:16] {WARNING}
[arg0] "[资产同步完成] 轻量树刷新完成，用时 13.734206s"   ----code_context : self.data_center.ui_helper.update_visible_tree_items_only(qtree_root) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11830, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:38:18] [2026-05-07 11:38:18] {WARNING}
[arg0] "[asset_sync][result]"
[arg1] ["folder_count", 55908]
[arg2] ["folders_with_category_id", 14734]
[arg3] ["category_query_count", 1]
[arg4] ["total_assets", 40262]
[arg5] ["total_matched", 0]
[arg6] ["mount_failed_count", 0]
[arg7] [
    "mount_failed_reason_counts",
    {}
]   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11869, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:38:18] [2026-05-07 11:38:18] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 11:38:18] [2026-05-07 11:38:18] {WARNING}
[arg0] "统计信息: 232304 个文件, 55907 个目录, 42190 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 11:38:37 ======
[2026-05-07 11:38:35] [2026-05-07 11:38:35] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\H42\\H42_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 3/4   

[2026-05-07 11:38:35] [2026-05-07 11:38:35] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=H42"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3904, -fn: _flush_scan_cache_after_metrics, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:43:22 ======
[2026-05-07 11:43:21] [2026-05-07 11:43:21] {WARNING}
[arg0] "[asset_sync][dialog_done]"
[arg1] ["total_matched", 0]
[arg2] ["total_assets", 40262]
[arg3] ["mount_failed_count", 0]   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11909, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

