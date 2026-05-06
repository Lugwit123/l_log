<<<LPRINT_DATE_LOG_META>>>
```json
{
  "log_kind": "lprint_date_log",
  "schema_version": "1.0",
  "module_name": "test_performance_cli",
  "extension": "md",
  "generated_by": "pytracemp.LogFileHandler"
}
```
<<</LPRINT_DATE_LOG_META>>>


[LogFileHandler] ====== 批量写入 14 条 @ 2026-04-30 16:59:11 ======
[2026-04-30 16:59:08] [2026-04-30 16:59:08] {WARNING}
[arg0] "[PYTRACEMP][DATE_LOG_PATH]"
[arg1] ["module_name", "test_performance_cli"]
[arg2] ["log_base_dir", "D:\\Temp\\Log"]
[arg3] ["date_log_path", "D:\\Temp\\Log\\test_performance_cli\\20260430.md"]
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

[2026-04-30 16:59:08] [2026-04-30 16:59:08] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 1/4   

[2026-04-30 16:59:08] [2026-04-30 16:59:08] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 1/4   

[2026-04-30 16:59:08] [2026-04-30 16:59:08] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 1/4   

[2026-04-30 16:59:08] [2026-04-30 16:59:08] {WARNING}
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
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-04-30 16:59:10] [2026-04-30 16:59:10] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["缓存文件", "D:/Temp/Cache/Muse\\muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分类树"), ("缓存文件", full_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:926, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-04-30 16:59:10] [2026-04-30 16:59:10] {WARNING}
[arg0] "[PERF][CATEGORY_REF_BY_ID][SAMPLE]"
[arg1] ["category_id", 483434248273921]
[arg2] ["found", true]
[arg3] ["leaf_id", 483434248273921]
[arg4] ["display_name", "Assets"]
[arg5] [
    "id_chain",
    [
        411365586239489,
        411512801853441,
        412614732152833,
        415379051380738,
        415402824564737,
        415458385985537,
        483396348411905,
        483434248273921
    ]
]
[arg6] [
    "path_segments",
    [
        "备份资源包",
        "J",
        "H42",
        "3.CG",
        "2020及以前",
        "水墨抽卡",
        "Production",
        "Assets"
    ]
]   ----code_context : lprint(
            "[PERF][CATEGORY_REF_BY_ID][SAMPLE]",
            ("category_id", category_id),
            ("found", True),
            ("leaf_id", warm_ref.leaf_id),
            ("display_name", warm_ref.display_name),
            ("id_chain", list(warm_ref.id_chain or [])),
            ("path_segments", list(warm_ref.path_segments or [])),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\muse_tool\test_performance_cli.py:120, -fn: main, 打印次数: 1/4   

[2026-04-30 16:59:10] [2026-04-30 16:59:10] {WARNING}
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

[2026-04-30 16:59:10] [2026-04-30 16:59:10] {WARNING}
[arg0] "[分类树缓存][内存命中]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["是否读取文件", false]
[arg3] ["关联文件缓存路径", "D:/Temp/Cache/Muse\\muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint(
                        "[分类树缓存][内存命中]",
                        ("缓存内容", "分类树"),
                        ("是否读取文件", False),
                        ("关联文件缓存路径", full_cache_file or "<仅内存>"),
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:895, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-04-30 16:59:10] [2026-04-30 16:59:10] {WARNING}
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
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 3/4   

[2026-04-30 16:59:10] [2026-04-30 16:59:10] {WARNING}
[arg0] "[分类树缓存][内存命中]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["是否读取文件", false]
[arg3] ["关联文件缓存路径", "D:/Temp/Cache/Muse\\muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint(
                        "[分类树缓存][内存命中]",
                        ("缓存内容", "分类树"),
                        ("是否读取文件", False),
                        ("关联文件缓存路径", full_cache_file or "<仅内存>"),
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:895, -fn: get_category_tree_cache, 打印次数: 2/4   

[2026-04-30 16:59:10] [2026-04-30 16:59:10] {WARNING}
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
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:645, -fn: get_category_tree_cache, 打印次数: 4/4   

[2026-04-30 16:59:10] [2026-04-30 16:59:10] {WARNING}
[arg0] "[分类树缓存][内存命中]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["是否读取文件", false]
[arg3] ["关联文件缓存路径", "D:/Temp/Cache/Muse\\muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint(
                        "[分类树缓存][内存命中]",
                        ("缓存内容", "分类树"),
                        ("是否读取文件", False),
                        ("关联文件缓存路径", full_cache_file or "<仅内存>"),
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:895, -fn: get_category_tree_cache, 打印次数: 3/4   

[2026-04-30 16:59:10] [2026-04-30 16:59:10] {WARNING}
[arg0] "[分类树缓存][内存命中]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["是否读取文件", false]
[arg3] ["关联文件缓存路径", "D:/Temp/Cache/Muse\\muse_category_tree_rsvs_engineering.pkl"]   ----code_context : lprint(
                        "[分类树缓存][内存命中]",
                        ("缓存内容", "分类树"),
                        ("是否读取文件", False),
                        ("关联文件缓存路径", full_cache_file or "<仅内存>"),
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:895, -fn: get_category_tree_cache, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-04-30 16:59:13 ======
[2026-04-30 16:59:13] [2026-04-30 16:59:13] {WARNING}
[arg0] "[PERF][CATEGORY_REF_BY_ID][START]"
[arg1] ["organization_id", "rsvs"]
[arg2] ["asset_type", "engineering"]
[arg3] ["category_id", 483434248273921]
[arg4] ["rounds", 30]   ----code_context : lprint(
        "[PERF][CATEGORY_REF_BY_ID][START]",
        ("organization_id", str(args.organization_id)),
        ("asset_type", str(args.asset_type)),
        ("category_id", category_id),
        ("rounds", rounds),
    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\muse_tool\test_performance_cli.py:147, -fn: main, 打印次数: 1/4   

[2026-04-30 16:59:13] [2026-04-30 16:59:13] {WARNING}
[arg0] "[PERF][CATEGORY_REF_BY_ID][CASE]"
[arg1] ["case_name", "first_lookup"]
[arg2] ["count", 30]
[arg3] ["hit", 30]
[arg4] ["miss", 0]
[arg5] ["avg_ms", 86.56]
[arg6] ["p50_ms", 83.107]
[arg7] ["p95_ms", 98.925]
[arg8] ["max_ms", 103.678]   ----code_context : lprint(
            "[PERF][CATEGORY_REF_BY_ID][CASE]",
            ("case_name", name),
            ("count", int(s["count"])),
            ("hit", int(result["hit_count"])),
            ("miss", int(result["miss_count"])),
            ("avg_ms", round(float(s["avg_ms"]), 3)),
            ("p50_ms", round(float(s["p50_ms"]), 3)),
            ("p95_ms", round(float(s["p95_ms"]), 3)),
            ("max_ms", round(float(s["max_ms"]), 3)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\muse_tool\test_performance_cli.py:159, -fn: main, 打印次数: 1/4   

[2026-04-30 16:59:13] [2026-04-30 16:59:13] {WARNING}
[arg0] "[PERF][CATEGORY_REF_BY_ID][CASE]"
[arg1] ["case_name", "hot_lookup"]
[arg2] ["count", 30]
[arg3] ["hit", 30]
[arg4] ["miss", 0]
[arg5] ["avg_ms", 0.001]
[arg6] ["p50_ms", 0.001]
[arg7] ["p95_ms", 0.001]
[arg8] ["max_ms", 0.001]   ----code_context : lprint(
            "[PERF][CATEGORY_REF_BY_ID][CASE]",
            ("case_name", name),
            ("count", int(s["count"])),
            ("hit", int(result["hit_count"])),
            ("miss", int(result["miss_count"])),
            ("avg_ms", round(float(s["avg_ms"]), 3)),
            ("p50_ms", round(float(s["p50_ms"]), 3)),
            ("p95_ms", round(float(s["p95_ms"]), 3)),
            ("max_ms", round(float(s["max_ms"]), 3)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\muse_tool\test_performance_cli.py:159, -fn: main, 打印次数: 2/4   

