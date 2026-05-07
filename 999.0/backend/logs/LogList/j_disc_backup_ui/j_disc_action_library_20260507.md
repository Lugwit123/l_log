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


[LogFileHandler] ====== 批量写入 192 条 @ 2026-05-07 11:16:28 ======
[2026-05-07 11:16:23] [2026-05-07 11:16:23] {WARNING}
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

[2026-05-07 11:16:24] [2026-05-07 11:16:24] {WARNING}
[arg0] "[AST自动修复] 已修复 j_disc_backup_ui.py: inserted=1, file=c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py"
[arg1] "warning"   ----code_context : lprint(message, "warning")
    return None 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:112, -fn: _policy_warn, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[启动参数][argv_parse]"
[arg1] [
    "argv",
    [
        "c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py",
        "--enable-trace=True",
        "--source-dir",
        "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑",
        "--upload-dir",
        "__ALL__",
        "--ignore-ui-state",
        "--separate-taskbar-icon"
    ]
]
[arg2] ["arg_source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]
[arg3] ["arg_upload_dir", "__ALL__"]
[arg4] ["arg_ignore_ui_state", true]
[arg5] ["arg_taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1"]
[arg6] ["arg_separate_taskbar_icon", true]   ----code_context : enable_trace = _to_bool(args.enable_trace) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12671, -fn: main, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[启动参数][final]"
[arg1] ["source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]
[arg2] ["upload_dir", "__ALL__"]
[arg3] ["ignore_ui_state", true]
[arg4] ["taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1.pid64992"]
[arg5] ["enable_trace", true]   ----code_context : runtime_taskbar_app_id = f"{runtime_taskbar_app_id}.pid{os.getpid()}" 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12683, -fn: main, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "============================================================"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12700, -fn: main, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "J盘备份到Muse UI 启动"   ----code_context : lprint("=" * 60)
    lprint("J盘备份到Muse UI 启动") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12701, -fn: main, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("J盘备份到Muse UI 启动")
    lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12702, -fn: main, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "正在初始化 UI..."   ----code_context : lprint.trace_max_result_per_function = 4 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12707, -fn: main, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "正在创建数据中心..."   ----code_context : lprint("正在创建数据中心...")
        self.data_center = BackupDataCenter(self) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4238, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "配置加载成功: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置加载成功: {config_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:682, -fn: load_default_config, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "UI已根据配置更新（全量）"   ----code_context : lprint("UI已根据配置更新（全量）")
                return 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2096, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "数据中心创建完成"   ----code_context : lprint("数据中心创建完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4240, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['backup_source_dir']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[启动参数][应用后配置]"
[arg1] ["startup_source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]
[arg2] ["startup_upload_dir", "<empty>"]
[arg3] ["startup_upload_is_all", true]
[arg4] ["config_source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]   ----code_context : lprint(
            "[启动参数][应用后配置]",
            ("startup_source_dir", self._startup_source_dir or "<empty>"),
            ("startup_upload_dir", self._startup_upload_dir or "<empty>"),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ("config_source_dir", self.data_center.config.backup_source_dir),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4253, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[启动参数]"
[arg1] ["source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]
[arg2] ["upload_dir", "<全部>"]
[arg3] ["ignore_ui_state", true]   ----code_context : lprint(
                "[启动参数]",
                ("source_dir", self._startup_source_dir or "<使用配置>"),
                ("upload_dir", upload_dir_label),
                ("ignore_ui_state", self._ignore_ui_state),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4264, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("MuseTool 初始化参数:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4293, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "MuseTool 初始化参数:"   ----code_context : lprint("MuseTool 初始化参数:")
            lprint(f"  user_email: {user_email}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4294, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {user_email}")
            lprint(f"  organization_id: {organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4295, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {organization_id}")
            lprint(f"  asset_type: {asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4296, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {asset_type}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4297, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4298, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "MuseTool 初始化成功"   ----code_context : lprint("MuseTool 初始化成功")
            lprint("验证 MuseTool 运行身份:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4307, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "验证 MuseTool 运行身份:"   ----code_context : lprint("验证 MuseTool 运行身份:")
            lprint(f"  user_email: {identity.get('user_email', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4308, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {identity.get('user_email', '')}")
            lprint(f"  organization_id: {identity.get('organization_id', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4309, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {identity.get('organization_id', '')}")
            lprint(f"  asset_type: {identity.get('asset_type', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4310, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {identity.get('asset_type', '')}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4311, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "从 p4_to_muse.yaml 加载本地 source 预设: 58 个"   ----code_context : lprint(f"从 p4_to_muse.yaml 加载本地 source 预设: {len(mappings)} 个")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1578, -fn: refresh_source_mappings_from_yaml, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "正在扫描 D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_坐骑 的文件夹列表..."   ----code_context : lprint(f"正在扫描 {backup_source_dir} 的文件夹列表...")
            try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4885, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "扫描到 71 个文件夹"   ----code_context : lprint(f"扫描到 {len(folders)} 个文件夹")
            except (PermissionError, OSError) as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4891, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[upload_dir_combo][init_start]"
[arg1] ["source_dir", "D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_坐骑"]
[arg2] ["preferred_upload_dir", "<empty>"]
[arg3] ["ignore_ui_state", true]
[arg4] ["startup_upload_explicit", true]
[arg5] ["startup_upload_is_all", true]   ----code_context : lprint(
            "[upload_dir_combo][init_start]",
            ("source_dir", backup_source_dir),
            ("preferred_upload_dir", preferred_upload_dir or "<empty>"),
            ("ignore_ui_state", self._ignore_ui_state),
            ("startup_upload_explicit", self._startup_upload_dir_is_explicit),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4911, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[upload_dir_combo][select_all_by_startup]"   ----code_context : lprint("[upload_dir_combo][select_all_by_startup]")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4922, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "已加载 71 个文件夹到下拉框: ['一勺春', '七夕浪漫坐骑（寒漪照梦）', '下马牵马', '兔子瑜伽球', '冰狮坐骑（凛风鸣霜）', '冰鹿', '凤凰坐骑（涅羽冲霄）', '单人划船', '卡皮巴拉', '卧云端牦牛', '双人坐骑', '双人坐骑狼', '双人坐骑白狼', '双峰骆驼', '双熊坐骑（瑶光团团和瑶光团）', '团驼驼', '地宫九尾狐', '大兔摩托坐骑', '天鹅坐骑', '孔明灯', '孔明灯_兔子', '孔明灯_飞船', '寄居蟹', '小肥啾坐骑动画', '悬镜灵照（狴犴白虎坐骑）', '摇啊摇轿子', '春节小红马车', '晴雪仙气坐骑', '来玩鸭', '毛驴', '水牛', '海马气球', '温泉小象坐骑', '满星河_双人船', '满都海驯鹿坐骑（离尘鞅）', '火锅车', '灵牙仙', '灵纪', '熊猫坐骑', '狻猊王座', '白泽', '白鹿双人坐骑', '白鹿坐骑', '百花步舆', '百里来摩托', '睚眦-红狼', '秋千', '筋斗云', '签到福利蝠鲼悠游-蝠运齐天', '粽子船', '芙蓉帐', '花船', '蔓萝纤', '蛇鹫云鹫绝影', '走地叽坐骑动作', '逍遥游海龟', '酷羊羊', '金陵画舫（锦芳行斋）坐骑', '长颈鹿坐骑动画', '闲踪青牛', '雪上飞', '风筝坐骑', '风迎香', '马啥拉地', '骆驼双人坐骑', '骑猪玩法动画', '骑马动画', '鸭鸭车', '鸱吻鱼双人坐骑（浩漾天潮）', '龙年小猪', '龙舟']"   ----code_context : lprint(f"已加载 {len(folders)} 个文件夹到下拉框: {folders}")
        if selected_folder: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4965, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[upload_dir_combo][init_done]"
[arg1] ["selected_folder", "<empty>"]
[arg2] ["current_text", "全部"]
[arg3] ["business_value", "<empty>"]   ----code_context : lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4968, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "扫描方式初始化完成，当前方式: os.scandir (性能优化)"   ----code_context : lprint(f"扫描方式初始化完成，当前方式: {ScanMethod.get_display_name(current_method)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5238, -fn: init_scan_method_ui, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "路径设置页已加载 5 条映射"   ----code_context : lprint(f"路径设置页已加载 {len(mappings)} 条映射")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5123, -fn: load_path_mapping_table, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[日志前缀][模式切换]"
[arg1] ["business_mode", "action_library"]
[arg2] ["date_log_prefix", "j_disc_action_library"]   ----code_context : lprint(
                "[日志前缀][模式切换]",
                ("business_mode", mode),
                ("date_log_prefix", log_prefix),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4550, -fn: _apply_date_log_prefix_by_mode, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['organization_id']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 2/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 2/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['asset_type']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 3/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 3/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['muse_root_category']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 4/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 4/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[MuseTool][重建]"
[arg1] ["reason", "source_mapping"]
[arg2] ["old_user_email", "wb.fengqingqing@mesg.corp.netease.com"]
[arg3] ["old_organization_id", "rsvs"]
[arg4] ["old_asset_type", "engineering"]
[arg5] ["new_user_email", "wb.fengqingqing@mesg.corp.netease.com"]
[arg6] ["new_organization_id", "h42"]
[arg7] ["new_asset_type", "simpleaction"]   ----code_context : lprint(
            "[MuseTool][重建]",
            ("reason", reason),
            ("old_user_email", current_user or "<empty>"),
            ("old_organization_id", current_org or "<empty>"),
            ("old_asset_type", current_asset_type or "<empty>"),
            ("new_user_email", user_email),
            ("new_organization_id", organization_id),
            ("new_asset_type", asset_type),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4408, -fn: _ensure_muse_tool_matches_config, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 2/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 2/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 2/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[trace][init]"
[arg1] ["enabled", true]
[arg2] ["source", "startup_arg"]   ----code_context : lprint(
            "[trace][init]",
            ("enabled", bool(self._startup_enable_trace)),
            ("source", "startup_arg"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5467, -fn: _init_trace_toggle_checkbox, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state"   ----code_context : lprint("[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4361, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[启动缓存][候选]"
[arg1] ["current_ui_folder", "<empty>"]
[arg2] [
    "candidate_folders",
    [
        "主角_坐骑"
    ]
]
[arg3] ["startup_upload_is_all", true]   ----code_context : lprint(
                "[启动缓存][候选]",
                ("current_ui_folder", current_ui_folder or "<empty>"),
                ("candidate_folders", candidate_folders),
                ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4583, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "发现Pickle缓存文件: L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"发现Pickle缓存文件: {pkl_cache_file}")
                lprint(f"正在自动加载缓存: folder={folder}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4599, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "正在自动加载缓存: folder=主角_坐骑"   ----code_context : lprint(f"正在自动加载缓存: folder={folder}")
                success = self.data_center.load_scan_cache(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4600, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "正在加载扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl, 大小: 0.98MB"   ----code_context : lprint(f"正在加载扫描缓存(Pickle): {pkl_path}, 大小: {size_mb:.2f}MB") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1396, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.005089s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[qtree_root_node] 开始 render_root_node_change"   ----code_context : lprint("[qtree_root_node] 开始 render_root_node_change")
                    self.ui_helper.render_root_node_change(node, _from_data_center=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:925, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 394]
[arg3] ["file_nodes", 2934]
[arg4] ["muse_asset_nodes", 0]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2428, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 0]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 1/4   

[2026-05-07 11:16:25] [2026-05-07 11:16:25] {WARNING}
[arg0] "[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算"   ----code_context : lprint("[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算")
            self._recompute_subtree_mismatch_bubble_from_root(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3757, -fn: _refresh_effective_folder_metrics, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=2586450731472, root_name=主角_坐骑, total=75, types={'FolderNode': 71, 'FileNode': 4}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2474, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=75, child_types={'FolderNode': 71, 'FileNode': 4}, class_identity=isinstance=True, child_class_id=2586363903952, import_class_id=2586363903952, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4475, -fn: _build_folder_item, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 0.017529s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2490, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=一勺春, children(folder=4, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=七夕浪漫坐骑（寒漪照梦）, children(folder=9, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 2/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=凤凰坐骑（涅羽冲霄）, children(folder=5, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 3/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=单人划船, children(folder=2, other=1)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 4/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 306 个 item，用时 0.169935s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2506, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 10]
[arg3] ["folder_nodes", 394]
[arg4] ["muse_asset_nodes", 0]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2522, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "📊 统计更新: 发现 3 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[qtree_root_node] 渲染完成，用时 0.224261s"   ----code_context : lprint(f"[qtree_root_node] 渲染完成，用时 {time.time() - _render_t0:.6f}s")
                    if self._startup_render_guard_enabled: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:927, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "扫描缓存已加载(Pickle v10): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已加载(Pickle v{loaded_version}): {pkl_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1481, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "缓存加载成功，正在更新UI..."   ----code_context : lprint("缓存加载成功，正在更新UI...")
                self._apply_category_tree_cache_to_current_tree(context="auto_load_cache") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4608, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", false]
[arg4] ["组织", "h42"]
[arg5] ["资产类型", "simpleaction"]
[arg6] [
    "Muse分支路径",
    [
        "动作资源",
        "坐骑",
        "主角_坐骑"
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

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分支树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分支树"), ("缓存文件", brunch_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:951, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "通过上游缓存逻辑加载分类树: L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"通过上游缓存逻辑加载分类树: {self._last_loaded_category_tree_cache_path}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:487, -fn: _try_hydrate_muse_category_tree_from_file_cache, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[分类树缓存][应用到当前树]"
[arg1] ["context", "auto_load_cache"]
[arg2] ["folder_name", "主角_坐骑"]
[arg3] ["loaded", true]
[arg4] ["root_name", "主角_坐骑"]
[arg5] ["root_muse_category_id", null]   ----code_context : lprint(
            "[分类树缓存][应用到当前树]",
            ("context", context or "<empty>"),
            ("folder_name", folder_name or "<empty>"),
            ("loaded", loaded),
            ("root_name", getattr(root_node, "name", "")),
            ("root_muse_category_id", getattr(root_node, "muse_category_id", None)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4869, -fn: _apply_category_tree_cache_to_current_tree, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "自动加载缓存完成"   ----code_context : lprint("自动加载缓存完成")
                self.refresh_cache_file_list() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4618, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9659, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.01秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.09秒, folder=主角_坐骑, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.11秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.13秒，共 3 个文件, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9667, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=主角_坐骑, muse_path=动作资源/坐骑/主角_坐骑"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9820, -fn: _resolve_expected_asset_cache_path, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] UI更新耗时: 0.041秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9721, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 总耗时: 0.18秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9722, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9723, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9659, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=主角_坐骑, age=0.063s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.01秒，共 3 个文件, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9667, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=主角_坐骑, muse_path=动作资源/坐骑/主角_坐骑"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9820, -fn: _resolve_expected_asset_cache_path, 打印次数: 2/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 2/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] UI更新耗时: 0.038秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9721, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "[性能] 总耗时: 0.06秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9722, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:16:26] [2026-05-07 11:16:26] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9723, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "UI 窗口已显示"   ----code_context : window.show() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12715, -fn: main, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 2/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "从缓存加载分类树，检查目录是否已存在..."   ----code_context : if self.data_center.try_hydrate_muse_category_tree_from_file_cache(folder_name): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10965, -fn: _ensure_category_tree_ready, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "============================================================"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11036, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "目录状态检查完成:"   ----code_context : lprint("=" * 60)
        lprint("目录状态检查完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11037, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  总目录数: 307"   ----code_context : lprint("目录状态检查完成:")
        lprint(f"  总目录数: {total_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11038, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  已存在: 0"   ----code_context : lprint(f"  总目录数: {total_count}")
        lprint(f"  已存在: {exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11039, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  未创建: 307"   ----code_context : lprint(f"  已存在: {exists_count}")
        lprint(f"  未创建: {not_exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11040, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "============================================================"   ----code_context : lprint(f"  未创建: {not_exists_count}")
        lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11041, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）"   ----code_context : _ui_refresh_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11045, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[目录状态检查] qtree_root_node 轻量回写完成，用时 0.00s"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11052, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "Muse 根分类: 动作资源/坐骑/主角_坐骑"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11287, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "基础路径: ['动作资源', '坐骑', '主角_坐骑']"   ----code_context : lprint(f"Muse 根分类: {muse_root}", force_print=True)
        lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11288, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "本地文件夹总数: 393"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11302, -fn: sync_muse_assets, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("CategoryService 参数验证:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:470, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "CategoryService 参数验证:"   ----code_context : lprint("CategoryService 参数验证:")
            lprint(f"  organization_id: {category_service.organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:471, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  organization_id: h42"   ----code_context : lprint(f"  organization_id: {category_service.organization_id}")
            lprint(f"  asset_type: {category_service.asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:472, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  asset_type: simpleaction"   ----code_context : lprint(f"  asset_type: {category_service.asset_type}")
            lprint(f"  base_path: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:473, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  base_path: ['动作资源', '坐骑', '主角_坐骑']"   ----code_context : lprint(f"  base_path: {base_path}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:474, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:475, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "开始查询文件夹在 Muse 中的分类 ID..."   ----code_context : lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:476, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "使用调用方传入的分类树 Pydantic 模型，跳过分类树读取"   ----code_context : lprint("使用调用方传入的分类树 Pydantic 模型，跳过分类树读取")
            elif category_tree_override is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:485, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("Muse 分类树结构:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:503, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "Muse 分类树结构:"   ----code_context : lprint("Muse 分类树结构:")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:504, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:505, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "组织: h42"   ----code_context : lprint(f"组织: {typed_payload.organization_id}")
            lprint(f"根分类数量: {len(org_categories)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:547, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "根分类数量: 1"   ----code_context : lprint(f"根分类数量: {len(org_categories)}")
            root_names = [_node_label(cat) for cat in org_categories] 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:548, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "根分类列表: ['动作资源']"   ----code_context : lprint(f"根分类列表: {root_names}")
            if target_root_name: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:550, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "正在搜索目标分类: '动作资源'"   ----code_context : lprint(f"正在搜索目标分类: '{target_root_name}'")
                target_category = find_category_by_name(org_categories, target_root_name) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:552, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "✓ 找到目标分类: '动作资源' (ID: 482174690918401)"   ----code_context : lprint(f"✓ 找到目标分类: '{target_root_name}' (ID: {target_category.id})")
                    lprint(f"仅显示 '{target_root_name}' 分类树:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:555, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "仅显示 '动作资源' 分类树:"   ----code_context : lprint(f"仅显示 '{target_root_name}' 分类树:")
                    print_category_tree([target_category], 0) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:556, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "├─ [0] 动作资源 (ID: 482174690918401)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  ├─ [1] 坐骑 (ID: 482174795513857)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 2/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "    ├─ [2] 主角_坐骑 (ID: 482179145269249)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 3/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "      ├─ [3] 风迎香 (ID: 483380737343489)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 4/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"配置的根分类: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:565, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "配置的根分类: ['动作资源', '坐骑', '主角_坐骑']"   ----code_context : lprint(f"配置的根分类: {base_path}")
            lprint(f"Muse 分类总数: {muse_category_count[0]}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:566, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "Muse 分类总数: 393"   ----code_context : lprint(f"Muse 分类总数: {muse_category_count[0]}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:567, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:568, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "正在构建路径索引..."   ----code_context : lprint("正在构建路径索引...")
            path_to_id_map = {} 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:571, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "路径索引构建完成，共 393 个路径"   ----code_context : lprint(f"路径索引构建完成，共 {len(path_to_id_map)} 个路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:607, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "✗ [root] 动作资源/坐骑/主角_坐骑 → 未找到"
[arg1] "warning"   ----code_context : lprint(f"✗ [root] {root_path_str} → 未找到", "warning")
                else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:665, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "根节点有 75 个子节点"   ----code_context : lprint(f"根节点有 {len(root_node.children)} 个子节点")
            for child in root_node.children: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:670, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "✗ [0] 动作资源/坐骑/主角_坐骑/一勺春 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  ✗ [1] 动作资源/坐骑/主角_坐骑/一勺春/成女 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 2/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  ✗ [1] 动作资源/坐骑/主角_坐骑/一勺春/成男 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 3/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  ✗ [1] 动作资源/坐骑/主角_坐骑/一勺春/正太 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 4/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"文件夹状态更新完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:674, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "文件夹状态更新完成:"   ----code_context : lprint(f"文件夹状态更新完成:")
            lprint(f"  处理文件夹: {processed_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:675, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  处理文件夹: 393 个"   ----code_context : lprint(f"  处理文件夹: {processed_count[0]} 个")
            lprint(f"  匹配成功: {matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:676, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  匹配成功: 0 个"   ----code_context : lprint(f"  匹配成功: {matched_count[0]} 个")
            lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:677, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  未匹配: 393 个"   ----code_context : lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个")
            if matched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:678, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  未匹配样本(前5):"   ----code_context : lprint("  未匹配样本(前5):")
                for item in unmatched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:684, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春/成女"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 2/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春/成男"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 3/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春/正太"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 4/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  Muse分类总数: 393 个"   ----code_context : lprint(f"  Muse分类总数: {muse_category_count[0]} 个")
            if omitted_log_count[0] > 0: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:687, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "  详细日志省略: 363 条（已限流到前 30 条）"   ----code_context : lprint(f"  详细日志省略: {omitted_log_count[0]} 条（已限流到前 {max_detail_logs} 条）")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:689, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            # lprint.trace_start(auto_result=True, 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:690, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[同步阶段] 已收到分类树结果，准备进入资产同步前处理"   ----code_context : stage_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11757, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[同步阶段] 写入分类树模型完成，用时 0.01s"   ----code_context : self.data_center.muse_category_tree = stats.get("category_tree_model") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11766, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）"   ----code_context : tree_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11771, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 0]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 2/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算"   ----code_context : lprint("[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算")
            self._recompute_subtree_mismatch_bubble_from_root(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3757, -fn: _refresh_effective_folder_metrics, 打印次数: 2/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=0.03s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=0.25s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "📊 统计更新: 发现 3 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 2/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.00s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 307 个，跳过未变化子树 0 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[同步阶段] 轻量刷新完成，用时 0.29s"   ----code_context : self.data_center.ui_helper.update_visible_tree_items_only(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11773, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[同步阶段] 开始更新UI统计"   ----code_context : stats_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11778, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "UI 统计已更新: Muse分类=393, 匹配=0"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11783, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[同步阶段] UI统计更新完成，用时 0.00s"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11787, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 0.30s"   ----code_context : self.ui.statusLabel.setText("正在后台同步 Muse 资产...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11791, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", true]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", true]
[arg4] ["组织", "h42"]
[arg5] ["资产类型", "simpleaction"]
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

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分类树"), ("缓存文件", full_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:968, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，已根据 muse_path 在全量分类树缓存上回退解析: muse_path='动作资源/坐骑/主角_坐骑' -> id=482179145269249"
[arg1] "warning"   ----code_context : lprint(
                                    "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，"
                                    f"已根据 muse_path 在全量分类树缓存上回退解析: muse_path={mp!r} -> id={category_id}",
                                    "warning",
                                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1225, -fn: run, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[资产同步缓存检查] 分类=482179145269249, use_local_asset_cache=True, cache_file=L:\\temp\\j_muse_backup_new\\主角_坐骑\\muse_asset_cache_主角_坐骑.pkl, cache_file_exists=True"   ----code_context : lprint(
                        "[资产同步缓存检查] "
                        f"分类={cid}, use_local_asset_cache={self._use_local_asset_cache}, "
                        f"cache_file={cache_file_path or '<none>'}, cache_file_exists={cache_file_hit}"
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1539, -fn: run, 打印次数: 1/4   

[2026-05-07 11:16:27] [2026-05-07 11:16:27] {WARNING}
[arg0] "[asset_cache] 请求分类资产缓存: categories=1, use_cache=True, use_file_cache=True, save_to_file=False, cache_file=L:\\temp\\j_muse_backup_new\\主角_坐骑\\muse_asset_cache_主角_坐骑.pkl, cache_file_exists=True"   ----code_context : lprint(
            "[asset_cache] 请求分类资产缓存: "
            f"categories={len(category_ids)}, "
            f"use_cache={use_cache}, use_file_cache={use_file_cache}, save_to_file={save_to_file}, "
            f"cache_file={cache_file or '<none>'}, cache_file_exists={cache_file_exists}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:262, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[asset_cache] 命中文件缓存并加载成功: L:\\temp\\j_muse_backup_new\\主角_坐骑\\muse_asset_cache_主角_坐骑.pkl"   ----code_context : lprint(f"[asset_cache] 命中文件缓存并加载成功: {cache_file}")
                    return typed_loaded 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:312, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eec27969e8381103f6bb"]
[arg2] ["asset_name", "up_double"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380764606465/483381381496833"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380764606465",
        "483381381496833"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 1/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eebddcdb913e04f78fb8"]
[arg2] ["asset_name", "正太_tzyjq_run_f"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380739571713"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380739571713"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 2/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eebbdcdb913e04f78fae"]
[arg2] ["asset_name", "g_g_wolf_idle"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380764606465/483381192556546"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380764606465",
        "483381192556546"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 3/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eebb9fac8b038a9b988d"]
[arg2] ["asset_name", "wolf_idle_male"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380812840962/483381545074689/483382040002561"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380812840962",
        "483381545074689",
        "483382040002561"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 21 条 @ 2026-05-07 11:16:31 ======
[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[asset_mount][summary]"
[arg1] ["failed_count", 5166]
[arg2] [
    "failure_reasons",
    {
        "category_id_not_found": 5166
    }
]
[arg3] ["sample_count", 10]   ----code_context : lprint(
                    "[asset_mount][summary]",
                    ("failed_count", mount_failed_count),
                    ("failure_reasons", mount_failed_reason_counts),
                    ("sample_count", len(mount_failed_samples)),
                    level="WARNING",
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1692, -fn: run, 打印次数: 1/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[资产同步进度] [cache-hit] 命中资产缓存并更新UI: 分类 482179145269249 | 资产 5166"   ----code_context : if "缓存" in str(message): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11605, -fn: _on_muse_asset_sync_progress, 打印次数: 1/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[资产挂载失败] 原因统计: category_id_not_found=5166"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 原因统计: {reason_summary}", "warning")
                for sample in mount_failed_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1703, -fn: run, 打印次数: 1/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eec27969e8381103f6bb, asset_name=up_double, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381381496833, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381381496833']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 1/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eebddcdb913e04f78fb8, asset_name=正太_tzyjq_run_f, category_path=482174690918401/482174795513857/482179145269249/483380739571713, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380739571713']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 2/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eebbdcdb913e04f78fae, asset_name=g_g_wolf_idle, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381192556546, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381192556546']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 3/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eebb9fac8b038a9b988d, asset_name=wolf_idle_male, category_path=482174690918401/482174795513857/482179145269249/483380812840962/483381545074689/483382040002561, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380812840962', '483381545074689', '483382040002561']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 4/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.003004s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[资产同步完成] 触发轻量树刷新（跳过整树重建）"   ----code_context : _light_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11657, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 0]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 3/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算"   ----code_context : lprint("[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算")
            self._recompute_subtree_mismatch_bubble_from_root(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3757, -fn: _refresh_effective_folder_metrics, 打印次数: 3/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=0.03s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=0.01s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "📊 统计更新: 发现 3 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 3/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.00s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 0 个，跳过未变化子树 1 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[资产同步完成] 轻量树刷新完成，用时 0.039054s"   ----code_context : self.data_center.ui_helper.update_visible_tree_items_only(qtree_root) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11659, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[asset_sync][result]"
[arg1] ["folder_count", 394]
[arg2] ["folders_with_category_id", 0]
[arg3] ["category_query_count", 1]
[arg4] ["total_assets", 0]
[arg5] ["total_matched", 0]
[arg6] ["mount_failed_count", 5166]
[arg7] [
    "mount_failed_reason_counts",
    {
        "category_id_not_found": 5166
    }
]   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11698, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:16:28] [2026-05-07 11:16:28] {WARNING}
[arg0] "[asset_sync][mount_failed_samples]"
[arg1] ["sample_count", 10]
[arg2] [
    "samples",
    [
        "asset_id=69e9eec27969e8381103f6bb, asset_name=up_double, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381381496833, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381381496833']",
        "asset_id=69e9eebddcdb913e04f78fb8, asset_name=正太_tzyjq_run_f, category_path=482174690918401/482174795513857/482179145269249/483380739571713, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380739571713']",
        "asset_id=69e9eebbdcdb913e04f78fae, asset_name=g_g_wolf_idle, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381192556546, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381192556546']",
        "asset_id=69e9eebb9fac8b038a9b988d, asset_name=wolf_idle_male, category_path=482174690918401/482174795513857/482179145269249/483380812840962/483381545074689/483382040002561, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380812840962', '483381545074689', '483382040002561']",
        "asset_id=69e9eebbdcdb913e04f78fa8, asset_name=ma_01_skin_horse, category_path=482174690918401/482174795513857/482179145269249/483380821557249/483381693775873, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380821557249', '483381693775873']",
        "asset_id=69e9eeba7969e8381103f6b0, asset_name=移动上车_mobile_up_jlhf_girl, category_path=482174690918401/482174795513857/482179145269249/483380760281089/483381028716545, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380760281089', '483381028716545']",
        "asset_id=69e9eeba7969e8381103f6ac, asset_name=ljzsnwz_skin, category_path=482174690918401/482174795513857/482179145269249/483380915929089/483381441855489, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380915929089', '483381441855489']",
        "asset_id=69e9eeba14c0d028e24757bc, asset_name=萝莉_主驾待机_xxwq_mobile_up, category_path=482174690918401/482174795513857/482179145269249/483380823654401, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380823654401']",
        "asset_id=69e9eeb914c0d028e24757b2, asset_name=陆地待机_idle_jlhf_boy_01, category_path=482174690918401/482174795513857/482179145269249/483380760281089/483381534130177, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380760281089', '483381534130177']",
        "asset_id=69e9eeb89fac8b038a9b9882, asset_name=xz_end, category_path=482174690918401/482174795513857/482179145269249/483380985135105/483381859188737, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380985135105', '483381859188737']"
    ]
]   ----code_context : if mount_failed_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11709, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:16:30] [2026-05-07 11:16:30] {WARNING}
[arg0] "[asset_sync][dialog_done]"
[arg1] ["total_matched", 0]
[arg2] ["total_assets", 0]
[arg3] ["mount_failed_count", 5166]   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11738, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 11:16:34 ======
[2026-05-07 11:16:31] [2026-05-07 11:16:31] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:16:31] [2026-05-07 11:16:31] {WARNING}
[arg0] "统计信息: 2934 个文件, 393 个目录, 3 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:16:32] [2026-05-07 11:16:32] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:16:32] [2026-05-07 11:16:32] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=主角_坐骑"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 17 条 @ 2026-05-07 11:19:29 ======
[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9659, -fn: refresh_cache_file_list, 打印次数: 3/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 3/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.01秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.08秒, folder=主角_坐骑, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.10秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.13秒，共 3 个文件, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9667, -fn: refresh_cache_file_list, 打印次数: 3/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=主角_坐骑, muse_path=动作资源/坐骑/主角_坐骑"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9820, -fn: _resolve_expected_asset_cache_path, 打印次数: 3/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 3/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] UI更新耗时: 0.038秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9721, -fn: refresh_cache_file_list, 打印次数: 3/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "[性能] 总耗时: 0.17秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9722, -fn: refresh_cache_file_list, 打印次数: 3/4   

[2026-05-07 11:19:26] [2026-05-07 11:19:26] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9723, -fn: refresh_cache_file_list, 打印次数: 3/4   


[LogFileHandler] ====== 批量写入 12 条 @ 2026-05-07 11:19:32 ======
[2026-05-07 11:19:30] [2026-05-07 11:19:30] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 4/4   

[2026-05-07 11:19:30] [2026-05-07 11:19:30] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 3/4   

[2026-05-07 11:19:30] [2026-05-07 11:19:30] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 3/4   

[2026-05-07 11:19:30] [2026-05-07 11:19:30] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 3/4   

[2026-05-07 11:19:30] [2026-05-07 11:19:30] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 3/4   

[2026-05-07 11:19:30] [2026-05-07 11:19:30] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 3/4   

[2026-05-07 11:19:30] [2026-05-07 11:19:30] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.01秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 3/4   

[2026-05-07 11:19:30] [2026-05-07 11:19:30] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.06秒, folder=主角_坐骑, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 3/4   

[2026-05-07 11:19:30] [2026-05-07 11:19:30] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 3/4   

[2026-05-07 11:19:30] [2026-05-07 11:19:30] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.08秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 3/4   

[2026-05-07 11:19:30] [2026-05-07 11:19:30] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=主角_坐骑, muse_path=动作资源/坐骑/主角_坐骑"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9820, -fn: _resolve_expected_asset_cache_path, 打印次数: 4/4   

[2026-05-07 11:19:31] [2026-05-07 11:19:31] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=主角_坐骑, age=1.265s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 11 条 @ 2026-05-07 11:19:35 ======
[2026-05-07 11:19:32] [2026-05-07 11:19:32] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=主角_坐骑, age=1.944s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 3/4   

[2026-05-07 11:19:33] [2026-05-07 11:19:33] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=主角_坐骑, age=2.786s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 4/4   

[2026-05-07 11:19:34] [2026-05-07 11:19:34] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 4/4   

[2026-05-07 11:19:34] [2026-05-07 11:19:34] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 4/4   

[2026-05-07 11:19:34] [2026-05-07 11:19:34] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 4/4   

[2026-05-07 11:19:34] [2026-05-07 11:19:34] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 4/4   

[2026-05-07 11:19:34] [2026-05-07 11:19:34] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 4/4   

[2026-05-07 11:19:34] [2026-05-07 11:19:34] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.01秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 4/4   

[2026-05-07 11:19:34] [2026-05-07 11:19:34] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.06秒, folder=主角_坐骑, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 4/4   

[2026-05-07 11:19:34] [2026-05-07 11:19:34] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 4/4   

[2026-05-07 11:19:34] [2026-05-07 11:19:34] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.08秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 11:21:13 ======
[2026-05-07 11:21:13] [2026-05-07 11:21:13] {WARNING}
[arg0] "窗口正在关闭..."   ----code_context : lprint("窗口正在关闭...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4635, -fn: on_window_close, 打印次数: 1/4   

[2026-05-07 11:21:13] [2026-05-07 11:21:13] {WARNING}
[arg0] "[ui_state] 已写入: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : # 成功也打一条日志，便于排查“未保存/未触发”的问题（避免只在异常时才有日志）。 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12447, -fn: save_combo_state_to_temp_file, 打印次数: 1/4   

[2026-05-07 11:21:13] [2026-05-07 11:21:13] {WARNING}
[arg0] "[ui_state] 已保存: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : lprint(f"[ui_state] 已保存: {self._ui_state_cache_file}")
        except Exception: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4640, -fn: on_window_close, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 162 条 @ 2026-05-07 11:21:40 ======
[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "从 p4_to_muse.yaml 加载本地 source 预设: 58 个"   ----code_context : lprint(f"从 p4_to_muse.yaml 加载本地 source 预设: {len(mappings)} 个")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1578, -fn: refresh_source_mappings_from_yaml, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "正在扫描 D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_坐骑 的文件夹列表..."   ----code_context : lprint(f"正在扫描 {backup_source_dir} 的文件夹列表...")
            try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4885, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "扫描到 71 个文件夹"   ----code_context : lprint(f"扫描到 {len(folders)} 个文件夹")
            except (PermissionError, OSError) as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4891, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[upload_dir_combo][init_start]"
[arg1] ["source_dir", "D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_坐骑"]
[arg2] ["preferred_upload_dir", "<empty>"]
[arg3] ["ignore_ui_state", true]
[arg4] ["startup_upload_explicit", true]
[arg5] ["startup_upload_is_all", true]   ----code_context : lprint(
            "[upload_dir_combo][init_start]",
            ("source_dir", backup_source_dir),
            ("preferred_upload_dir", preferred_upload_dir or "<empty>"),
            ("ignore_ui_state", self._ignore_ui_state),
            ("startup_upload_explicit", self._startup_upload_dir_is_explicit),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4911, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[upload_dir_combo][select_all_by_startup]"   ----code_context : lprint("[upload_dir_combo][select_all_by_startup]")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4922, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "已加载 71 个文件夹到下拉框: ['一勺春', '七夕浪漫坐骑（寒漪照梦）', '下马牵马', '兔子瑜伽球', '冰狮坐骑（凛风鸣霜）', '冰鹿', '凤凰坐骑（涅羽冲霄）', '单人划船', '卡皮巴拉', '卧云端牦牛', '双人坐骑', '双人坐骑狼', '双人坐骑白狼', '双峰骆驼', '双熊坐骑（瑶光团团和瑶光团）', '团驼驼', '地宫九尾狐', '大兔摩托坐骑', '天鹅坐骑', '孔明灯', '孔明灯_兔子', '孔明灯_飞船', '寄居蟹', '小肥啾坐骑动画', '悬镜灵照（狴犴白虎坐骑）', '摇啊摇轿子', '春节小红马车', '晴雪仙气坐骑', '来玩鸭', '毛驴', '水牛', '海马气球', '温泉小象坐骑', '满星河_双人船', '满都海驯鹿坐骑（离尘鞅）', '火锅车', '灵牙仙', '灵纪', '熊猫坐骑', '狻猊王座', '白泽', '白鹿双人坐骑', '白鹿坐骑', '百花步舆', '百里来摩托', '睚眦-红狼', '秋千', '筋斗云', '签到福利蝠鲼悠游-蝠运齐天', '粽子船', '芙蓉帐', '花船', '蔓萝纤', '蛇鹫云鹫绝影', '走地叽坐骑动作', '逍遥游海龟', '酷羊羊', '金陵画舫（锦芳行斋）坐骑', '长颈鹿坐骑动画', '闲踪青牛', '雪上飞', '风筝坐骑', '风迎香', '马啥拉地', '骆驼双人坐骑', '骑猪玩法动画', '骑马动画', '鸭鸭车', '鸱吻鱼双人坐骑（浩漾天潮）', '龙年小猪', '龙舟']"   ----code_context : lprint(f"已加载 {len(folders)} 个文件夹到下拉框: {folders}")
        if selected_folder: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4965, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[upload_dir_combo][init_done]"
[arg1] ["selected_folder", "<empty>"]
[arg2] ["current_text", "全部"]
[arg3] ["business_value", "<empty>"]   ----code_context : lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4968, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "扫描方式初始化完成，当前方式: os.scandir (性能优化)"   ----code_context : lprint(f"扫描方式初始化完成，当前方式: {ScanMethod.get_display_name(current_method)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5238, -fn: init_scan_method_ui, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "路径设置页已加载 5 条映射"   ----code_context : lprint(f"路径设置页已加载 {len(mappings)} 条映射")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5123, -fn: load_path_mapping_table, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[日志前缀][模式切换]"
[arg1] ["business_mode", "action_library"]
[arg2] ["date_log_prefix", "j_disc_action_library"]   ----code_context : lprint(
                "[日志前缀][模式切换]",
                ("business_mode", mode),
                ("date_log_prefix", log_prefix),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4550, -fn: _apply_date_log_prefix_by_mode, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['organization_id']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 2/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 2/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['asset_type']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 3/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 3/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['muse_root_category']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 4/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 4/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[MuseTool][重建]"
[arg1] ["reason", "source_mapping"]
[arg2] ["old_user_email", "wb.fengqingqing@mesg.corp.netease.com"]
[arg3] ["old_organization_id", "rsvs"]
[arg4] ["old_asset_type", "engineering"]
[arg5] ["new_user_email", "wb.fengqingqing@mesg.corp.netease.com"]
[arg6] ["new_organization_id", "h42"]
[arg7] ["new_asset_type", "simpleaction"]   ----code_context : lprint(
            "[MuseTool][重建]",
            ("reason", reason),
            ("old_user_email", current_user or "<empty>"),
            ("old_organization_id", current_org or "<empty>"),
            ("old_asset_type", current_asset_type or "<empty>"),
            ("new_user_email", user_email),
            ("new_organization_id", organization_id),
            ("new_asset_type", asset_type),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4408, -fn: _ensure_muse_tool_matches_config, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 2/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 2/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 2/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[trace][init]"
[arg1] ["enabled", true]
[arg2] ["source", "startup_arg"]   ----code_context : lprint(
            "[trace][init]",
            ("enabled", bool(self._startup_enable_trace)),
            ("source", "startup_arg"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5472, -fn: _init_trace_toggle_checkbox, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state"   ----code_context : lprint("[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4361, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[启动缓存][候选]"
[arg1] ["current_ui_folder", "<empty>"]
[arg2] [
    "candidate_folders",
    [
        "主角_坐骑"
    ]
]
[arg3] ["startup_upload_is_all", true]   ----code_context : lprint(
                "[启动缓存][候选]",
                ("current_ui_folder", current_ui_folder or "<empty>"),
                ("candidate_folders", candidate_folders),
                ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4583, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "发现Pickle缓存文件: L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"发现Pickle缓存文件: {pkl_cache_file}")
                lprint(f"正在自动加载缓存: folder={folder}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4599, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "正在自动加载缓存: folder=主角_坐骑"   ----code_context : lprint(f"正在自动加载缓存: folder={folder}")
                success = self.data_center.load_scan_cache(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4600, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "正在加载扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl, 大小: 0.98MB"   ----code_context : lprint(f"正在加载扫描缓存(Pickle): {pkl_path}, 大小: {size_mb:.2f}MB") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1396, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.004001s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[qtree_root_node] 开始 render_root_node_change"   ----code_context : lprint("[qtree_root_node] 开始 render_root_node_change")
                    self.ui_helper.render_root_node_change(node, _from_data_center=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:925, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 394]
[arg3] ["file_nodes", 2934]
[arg4] ["muse_asset_nodes", 0]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2428, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 0]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算"   ----code_context : lprint("[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算")
            self._recompute_subtree_mismatch_bubble_from_root(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3757, -fn: _refresh_effective_folder_metrics, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=2598493948944, root_name=主角_坐骑, total=75, types={'FolderNode': 71, 'FileNode': 4}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2474, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=75, child_types={'FolderNode': 71, 'FileNode': 4}, class_identity=isinstance=True, child_class_id=2598483720720, import_class_id=2598483720720, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4475, -fn: _build_folder_item, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 0.027308s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2490, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=一勺春, children(folder=4, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=七夕浪漫坐骑（寒漪照梦）, children(folder=9, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 2/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=凤凰坐骑（涅羽冲霄）, children(folder=5, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 3/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=单人划船, children(folder=2, other=1)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4320, -fn: _on_tree_item_expanded, 打印次数: 4/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 306 个 item，用时 0.224145s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2506, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 10]
[arg3] ["folder_nodes", 394]
[arg4] ["muse_asset_nodes", 0]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2522, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "📊 统计更新: 发现 3 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[qtree_root_node] 渲染完成，用时 0.295888s"   ----code_context : lprint(f"[qtree_root_node] 渲染完成，用时 {time.time() - _render_t0:.6f}s")
                    if self._startup_render_guard_enabled: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:927, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "扫描缓存已加载(Pickle v10): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已加载(Pickle v{loaded_version}): {pkl_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1481, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "缓存加载成功，正在更新UI..."   ----code_context : lprint("缓存加载成功，正在更新UI...")
                self._apply_category_tree_cache_to_current_tree(context="auto_load_cache") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4608, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", false]
[arg4] ["组织", "h42"]
[arg5] ["资产类型", "simpleaction"]
[arg6] [
    "Muse分支路径",
    [
        "动作资源",
        "坐骑",
        "主角_坐骑"
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

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分支树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分支树"), ("缓存文件", brunch_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:951, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "通过上游缓存逻辑加载分类树: L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"通过上游缓存逻辑加载分类树: {self._last_loaded_category_tree_cache_path}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:487, -fn: _try_hydrate_muse_category_tree_from_file_cache, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[分类树缓存][应用到当前树]"
[arg1] ["context", "auto_load_cache"]
[arg2] ["folder_name", "主角_坐骑"]
[arg3] ["loaded", true]
[arg4] ["root_name", "主角_坐骑"]
[arg5] ["root_muse_category_id", null]   ----code_context : lprint(
            "[分类树缓存][应用到当前树]",
            ("context", context or "<empty>"),
            ("folder_name", folder_name or "<empty>"),
            ("loaded", loaded),
            ("root_name", getattr(root_node, "name", "")),
            ("root_muse_category_id", getattr(root_node, "muse_category_id", None)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4869, -fn: _apply_category_tree_cache_to_current_tree, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "自动加载缓存完成"   ----code_context : lprint("自动加载缓存完成")
                self.refresh_cache_file_list() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4618, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9664, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.02秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.16秒, folder=主角_坐骑, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.20秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.23秒，共 3 个文件, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9672, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=主角_坐骑, muse_path=动作资源/坐骑/主角_坐骑"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9825, -fn: _resolve_expected_asset_cache_path, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] UI更新耗时: 0.056秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9726, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[性能] 总耗时: 0.30秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9727, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9728, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:21:37] [2026-05-07 11:21:37] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9664, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=主角_坐骑, age=0.091s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.02秒，共 3 个文件, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9672, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=主角_坐骑, muse_path=动作资源/坐骑/主角_坐骑"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9825, -fn: _resolve_expected_asset_cache_path, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10069, -fn: update_cache_files_list, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[性能] UI更新耗时: 0.052秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9726, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[性能] 总耗时: 0.08秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9727, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9728, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "UI 窗口已显示"   ----code_context : window.show() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12758, -fn: main, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "从缓存加载分类树，检查目录是否已存在..."   ----code_context : if self.data_center.try_hydrate_muse_category_tree_from_file_cache(folder_name): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11008, -fn: _ensure_category_tree_ready, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "============================================================"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11079, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "目录状态检查完成:"   ----code_context : lprint("=" * 60)
        lprint("目录状态检查完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11080, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  总目录数: 307"   ----code_context : lprint("目录状态检查完成:")
        lprint(f"  总目录数: {total_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11081, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  已存在: 0"   ----code_context : lprint(f"  总目录数: {total_count}")
        lprint(f"  已存在: {exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11082, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  未创建: 307"   ----code_context : lprint(f"  已存在: {exists_count}")
        lprint(f"  未创建: {not_exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11083, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "============================================================"   ----code_context : lprint(f"  未创建: {not_exists_count}")
        lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11084, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）"   ----code_context : _ui_refresh_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11088, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[目录状态检查] qtree_root_node 轻量回写完成，用时 0.00s"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11095, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "Muse 根分类: 动作资源/坐骑/主角_坐骑"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11330, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "基础路径: ['动作资源', '坐骑', '主角_坐骑']"   ----code_context : lprint(f"Muse 根分类: {muse_root}", force_print=True)
        lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11331, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "本地文件夹总数: 393"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11345, -fn: sync_muse_assets, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("CategoryService 参数验证:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:470, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "CategoryService 参数验证:"   ----code_context : lprint("CategoryService 参数验证:")
            lprint(f"  organization_id: {category_service.organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:471, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  organization_id: h42"   ----code_context : lprint(f"  organization_id: {category_service.organization_id}")
            lprint(f"  asset_type: {category_service.asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:472, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  asset_type: simpleaction"   ----code_context : lprint(f"  asset_type: {category_service.asset_type}")
            lprint(f"  base_path: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:473, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  base_path: ['动作资源', '坐骑', '主角_坐骑']"   ----code_context : lprint(f"  base_path: {base_path}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:474, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:475, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "开始查询文件夹在 Muse 中的分类 ID..."   ----code_context : lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:476, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "使用调用方传入的分类树 Pydantic 模型，跳过分类树读取"   ----code_context : lprint("使用调用方传入的分类树 Pydantic 模型，跳过分类树读取")
            elif category_tree_override is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:485, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("Muse 分类树结构:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:503, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "Muse 分类树结构:"   ----code_context : lprint("Muse 分类树结构:")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:504, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:505, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "组织: h42"   ----code_context : lprint(f"组织: {typed_payload.organization_id}")
            lprint(f"根分类数量: {len(org_categories)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:547, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "根分类数量: 1"   ----code_context : lprint(f"根分类数量: {len(org_categories)}")
            root_names = [_node_label(cat) for cat in org_categories] 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:548, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "根分类列表: ['动作资源']"   ----code_context : lprint(f"根分类列表: {root_names}")
            if target_root_name: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:550, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "正在搜索目标分类: '动作资源'"   ----code_context : lprint(f"正在搜索目标分类: '{target_root_name}'")
                target_category = find_category_by_name(org_categories, target_root_name) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:552, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "✓ 找到目标分类: '动作资源' (ID: 482174690918401)"   ----code_context : lprint(f"✓ 找到目标分类: '{target_root_name}' (ID: {target_category.id})")
                    lprint(f"仅显示 '{target_root_name}' 分类树:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:555, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "仅显示 '动作资源' 分类树:"   ----code_context : lprint(f"仅显示 '{target_root_name}' 分类树:")
                    print_category_tree([target_category], 0) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:556, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "├─ [0] 动作资源 (ID: 482174690918401)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  ├─ [1] 坐骑 (ID: 482174795513857)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "    ├─ [2] 主角_坐骑 (ID: 482179145269249)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 3/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "      ├─ [3] 风迎香 (ID: 483380737343489)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 4/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"配置的根分类: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:565, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "配置的根分类: ['动作资源', '坐骑', '主角_坐骑']"   ----code_context : lprint(f"配置的根分类: {base_path}")
            lprint(f"Muse 分类总数: {muse_category_count[0]}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:566, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "Muse 分类总数: 393"   ----code_context : lprint(f"Muse 分类总数: {muse_category_count[0]}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:567, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:568, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "正在构建路径索引..."   ----code_context : lprint("正在构建路径索引...")
            path_to_id_map = {} 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:571, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "路径索引构建完成，共 393 个路径"   ----code_context : lprint(f"路径索引构建完成，共 {len(path_to_id_map)} 个路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:607, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "✗ [root] 动作资源/坐骑/主角_坐骑 → 未找到"
[arg1] "warning"   ----code_context : lprint(f"✗ [root] {root_path_str} → 未找到", "warning")
                else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:665, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "根节点有 75 个子节点"   ----code_context : lprint(f"根节点有 {len(root_node.children)} 个子节点")
            for child in root_node.children: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:670, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "✗ [0] 动作资源/坐骑/主角_坐骑/一勺春 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  ✗ [1] 动作资源/坐骑/主角_坐骑/一勺春/成女 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  ✗ [1] 动作资源/坐骑/主角_坐骑/一勺春/成男 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 3/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  ✗ [1] 动作资源/坐骑/主角_坐骑/一勺春/正太 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 4/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"文件夹状态更新完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:674, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "文件夹状态更新完成:"   ----code_context : lprint(f"文件夹状态更新完成:")
            lprint(f"  处理文件夹: {processed_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:675, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  处理文件夹: 393 个"   ----code_context : lprint(f"  处理文件夹: {processed_count[0]} 个")
            lprint(f"  匹配成功: {matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:676, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  匹配成功: 0 个"   ----code_context : lprint(f"  匹配成功: {matched_count[0]} 个")
            lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:677, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  未匹配: 393 个"   ----code_context : lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个")
            if matched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:678, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  未匹配样本(前5):"   ----code_context : lprint("  未匹配样本(前5):")
                for item in unmatched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:684, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春/成女"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春/成男"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 3/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春/正太"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 4/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  Muse分类总数: 393 个"   ----code_context : lprint(f"  Muse分类总数: {muse_category_count[0]} 个")
            if omitted_log_count[0] > 0: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:687, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "  详细日志省略: 363 条（已限流到前 30 条）"   ----code_context : lprint(f"  详细日志省略: {omitted_log_count[0]} 条（已限流到前 {max_detail_logs} 条）")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:689, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            # lprint.trace_start(auto_result=True, 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:690, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[同步阶段] 已收到分类树结果，准备进入资产同步前处理"   ----code_context : stage_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11800, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[同步阶段] 写入分类树模型完成，用时 0.01s"   ----code_context : self.data_center.muse_category_tree = stats.get("category_tree_model") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11809, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）"   ----code_context : tree_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11814, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 0]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算"   ----code_context : lprint("[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算")
            self._recompute_subtree_mismatch_bubble_from_root(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3757, -fn: _refresh_effective_folder_metrics, 打印次数: 2/4   

[2026-05-07 11:21:38] [2026-05-07 11:21:38] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=0.03s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=0.31s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "📊 统计更新: 发现 3 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 2/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.00s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 307 个，跳过未变化子树 0 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[同步阶段] 轻量刷新完成，用时 0.35s"   ----code_context : self.data_center.ui_helper.update_visible_tree_items_only(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11816, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[同步阶段] 开始更新UI统计"   ----code_context : stats_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11821, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "UI 统计已更新: Muse分类=393, 匹配=0"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11826, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[同步阶段] UI统计更新完成，用时 0.00s"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11830, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 0.37s"   ----code_context : self.ui.statusLabel.setText("正在后台同步 Muse 资产...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11834, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", true]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", true]
[arg4] ["组织", "h42"]
[arg5] ["资产类型", "simpleaction"]
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

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分类树"), ("缓存文件", full_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:968, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，已根据 muse_path 在全量分类树缓存上回退解析: muse_path='动作资源/坐骑/主角_坐骑' -> id=482179145269249"
[arg1] "warning"   ----code_context : lprint(
                                    "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，"
                                    f"已根据 muse_path 在全量分类树缓存上回退解析: muse_path={mp!r} -> id={category_id}",
                                    "warning",
                                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1225, -fn: run, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[资产同步缓存检查] 分类=482179145269249, use_local_asset_cache=True, cache_file=L:\\temp\\j_muse_backup_new\\主角_坐骑\\muse_asset_cache_主角_坐骑.pkl, cache_file_exists=True"   ----code_context : lprint(
                        "[资产同步缓存检查] "
                        f"分类={cid}, use_local_asset_cache={self._use_local_asset_cache}, "
                        f"cache_file={cache_file_path or '<none>'}, cache_file_exists={cache_file_hit}"
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1539, -fn: run, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[asset_cache] 请求分类资产缓存: categories=1, use_cache=True, use_file_cache=True, save_to_file=False, cache_file=L:\\temp\\j_muse_backup_new\\主角_坐骑\\muse_asset_cache_主角_坐骑.pkl, cache_file_exists=True"   ----code_context : lprint(
            "[asset_cache] 请求分类资产缓存: "
            f"categories={len(category_ids)}, "
            f"use_cache={use_cache}, use_file_cache={use_file_cache}, save_to_file={save_to_file}, "
            f"cache_file={cache_file or '<none>'}, cache_file_exists={cache_file_exists}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:262, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[asset_cache] 命中文件缓存并加载成功: L:\\temp\\j_muse_backup_new\\主角_坐骑\\muse_asset_cache_主角_坐骑.pkl"   ----code_context : lprint(f"[asset_cache] 命中文件缓存并加载成功: {cache_file}")
                    return typed_loaded 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:312, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eec27969e8381103f6bb"]
[arg2] ["asset_name", "up_double"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380764606465/483381381496833"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380764606465",
        "483381381496833"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 1/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eebddcdb913e04f78fb8"]
[arg2] ["asset_name", "正太_tzyjq_run_f"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380739571713"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380739571713"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 2/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eebbdcdb913e04f78fae"]
[arg2] ["asset_name", "g_g_wolf_idle"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380764606465/483381192556546"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380764606465",
        "483381192556546"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 3/4   

[2026-05-07 11:21:39] [2026-05-07 11:21:39] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eebb9fac8b038a9b988d"]
[arg2] ["asset_name", "wolf_idle_male"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380812840962/483381545074689/483382040002561"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380812840962",
        "483381545074689",
        "483382040002561"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 20 条 @ 2026-05-07 11:21:43 ======
[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[asset_mount][summary]"
[arg1] ["failed_count", 5166]
[arg2] [
    "failure_reasons",
    {
        "category_id_not_found": 5166
    }
]
[arg3] ["sample_count", 10]   ----code_context : lprint(
                    "[asset_mount][summary]",
                    ("failed_count", mount_failed_count),
                    ("failure_reasons", mount_failed_reason_counts),
                    ("sample_count", len(mount_failed_samples)),
                    level="WARNING",
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1692, -fn: run, 打印次数: 1/4   

[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[资产同步进度] [cache-hit] 命中资产缓存并更新UI: 分类 482179145269249 | 资产 5166"   ----code_context : if "缓存" in str(message): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11648, -fn: _on_muse_asset_sync_progress, 打印次数: 1/4   

[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[资产挂载失败] 原因统计: category_id_not_found=5166"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 原因统计: {reason_summary}", "warning")
                for sample in mount_failed_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1703, -fn: run, 打印次数: 1/4   

[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eec27969e8381103f6bb, asset_name=up_double, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381381496833, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381381496833']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 1/4   

[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eebddcdb913e04f78fb8, asset_name=正太_tzyjq_run_f, category_path=482174690918401/482174795513857/482179145269249/483380739571713, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380739571713']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 2/4   

[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eebbdcdb913e04f78fae, asset_name=g_g_wolf_idle, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381192556546, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381192556546']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 3/4   

[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eebb9fac8b038a9b988d, asset_name=wolf_idle_male, category_path=482174690918401/482174795513857/482179145269249/483380812840962/483381545074689/483382040002561, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380812840962', '483381545074689', '483382040002561']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 4/4   

[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.003054s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[资产同步完成] 触发轻量树刷新（跳过整树重建）"   ----code_context : _light_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11700, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 0]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3860, -fn: _collect_selective_metrics_roots, 打印次数: 3/4   

[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算"   ----code_context : lprint("[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算")
            self._recompute_subtree_mismatch_bubble_from_root(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3757, -fn: _refresh_effective_folder_metrics, 打印次数: 3/4   

[2026-05-07 11:21:40] [2026-05-07 11:21:40] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=0.04s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:21:41] [2026-05-07 11:21:41] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=0.01s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:21:41] [2026-05-07 11:21:41] {WARNING}
[arg0] "📊 统计更新: 发现 3 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5071, -fn: update_statistics, 打印次数: 3/4   

[2026-05-07 11:21:41] [2026-05-07 11:21:41] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.00s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:21:41] [2026-05-07 11:21:41] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 0 个，跳过未变化子树 1 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:21:41] [2026-05-07 11:21:41] {WARNING}
[arg0] "[资产同步完成] 轻量树刷新完成，用时 0.055864s"   ----code_context : self.data_center.ui_helper.update_visible_tree_items_only(qtree_root) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11702, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:21:41] [2026-05-07 11:21:41] {WARNING}
[arg0] "[asset_sync][result]"
[arg1] ["folder_count", 394]
[arg2] ["folders_with_category_id", 0]
[arg3] ["category_query_count", 1]
[arg4] ["total_assets", 0]
[arg5] ["total_matched", 0]
[arg6] ["mount_failed_count", 5166]
[arg7] [
    "mount_failed_reason_counts",
    {
        "category_id_not_found": 5166
    }
]   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11741, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:21:41] [2026-05-07 11:21:41] {WARNING}
[arg0] "[asset_sync][mount_failed_samples]"
[arg1] ["sample_count", 10]
[arg2] [
    "samples",
    [
        "asset_id=69e9eec27969e8381103f6bb, asset_name=up_double, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381381496833, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381381496833']",
        "asset_id=69e9eebddcdb913e04f78fb8, asset_name=正太_tzyjq_run_f, category_path=482174690918401/482174795513857/482179145269249/483380739571713, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380739571713']",
        "asset_id=69e9eebbdcdb913e04f78fae, asset_name=g_g_wolf_idle, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381192556546, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381192556546']",
        "asset_id=69e9eebb9fac8b038a9b988d, asset_name=wolf_idle_male, category_path=482174690918401/482174795513857/482179145269249/483380812840962/483381545074689/483382040002561, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380812840962', '483381545074689', '483382040002561']",
        "asset_id=69e9eebbdcdb913e04f78fa8, asset_name=ma_01_skin_horse, category_path=482174690918401/482174795513857/482179145269249/483380821557249/483381693775873, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380821557249', '483381693775873']",
        "asset_id=69e9eeba7969e8381103f6b0, asset_name=移动上车_mobile_up_jlhf_girl, category_path=482174690918401/482174795513857/482179145269249/483380760281089/483381028716545, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380760281089', '483381028716545']",
        "asset_id=69e9eeba7969e8381103f6ac, asset_name=ljzsnwz_skin, category_path=482174690918401/482174795513857/482179145269249/483380915929089/483381441855489, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380915929089', '483381441855489']",
        "asset_id=69e9eeba14c0d028e24757bc, asset_name=萝莉_主驾待机_xxwq_mobile_up, category_path=482174690918401/482174795513857/482179145269249/483380823654401, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380823654401']",
        "asset_id=69e9eeb914c0d028e24757b2, asset_name=陆地待机_idle_jlhf_boy_01, category_path=482174690918401/482174795513857/482179145269249/483380760281089/483381534130177, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380760281089', '483381534130177']",
        "asset_id=69e9eeb89fac8b038a9b9882, asset_name=xz_end, category_path=482174690918401/482174795513857/482179145269249/483380985135105/483381859188737, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380985135105', '483381859188737']"
    ]
]   ----code_context : if mount_failed_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11752, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 11:21:46 ======
[2026-05-07 11:21:44] [2026-05-07 11:21:44] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:21:44] [2026-05-07 11:21:44] {WARNING}
[arg0] "统计信息: 2934 个文件, 393 个目录, 3 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:21:44] [2026-05-07 11:21:44] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:21:44] [2026-05-07 11:21:44] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=主角_坐骑"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3901, -fn: _flush_scan_cache_after_metrics, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:22:22 ======
[2026-05-07 11:22:20] [2026-05-07 11:22:20] {WARNING}
[arg0] "[asset_sync][dialog_done]"
[arg1] ["total_matched", 0]
[arg2] ["total_assets", 0]
[arg3] ["mount_failed_count", 5166]   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11781, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 6 条 @ 2026-05-07 11:22:24 ======
[2026-05-07 11:22:24] [2026-05-07 11:22:24] {WARNING}
[arg0] "正在重启程序..."   ----code_context : """重启程序""" 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10173, -fn: restart_program, 打印次数: 1/4   

[2026-05-07 11:22:24] [2026-05-07 11:22:24] {WARNING}
[arg0] "启动脚本路径: D:\\TD_Depot\\Wuzu_dev\\anim_upload_muse_tool\\run_j_disc_backup_ui.bat"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10178, -fn: restart_program, 打印次数: 1/4   

[2026-05-07 11:22:24] [2026-05-07 11:22:24] {WARNING}
[arg0] "新进程已启动，即将关闭当前程序"   ----code_context : subprocess.Popen([bat_file], shell=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:10184, -fn: restart_program, 打印次数: 1/4   

[2026-05-07 11:22:24] [2026-05-07 11:22:24] {WARNING}
[arg0] "窗口正在关闭..."   ----code_context : lprint("窗口正在关闭...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4635, -fn: on_window_close, 打印次数: 1/4   

[2026-05-07 11:22:24] [2026-05-07 11:22:24] {WARNING}
[arg0] "[ui_state] 已写入: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : lprint(f"[ui_state] 已写入: {self._ui_state_cache_file}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12490, -fn: save_combo_state_to_temp_file, 打印次数: 1/4   

[2026-05-07 11:22:24] [2026-05-07 11:22:24] {WARNING}
[arg0] "[ui_state] 已保存: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : lprint(f"[ui_state] 已保存: {self._ui_state_cache_file}")
        except Exception: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4640, -fn: on_window_close, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 192 条 @ 2026-05-07 11:23:02 ======
[2026-05-07 11:22:57] [2026-05-07 11:22:57] {WARNING}
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

[2026-05-07 11:22:58] [2026-05-07 11:22:58] {WARNING}
[arg0] "[AST自动修复] 已修复 j_disc_backup_ui.py: inserted=1, file=c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py"
[arg1] "warning"   ----code_context : lprint(message, "warning")
    return None 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:112, -fn: _policy_warn, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[启动参数][argv_parse]"
[arg1] [
    "argv",
    [
        "c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py",
        "--enable-trace=True",
        "--source-dir",
        "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑",
        "--upload-dir",
        "__ALL__",
        "--ignore-ui-state",
        "--separate-taskbar-icon"
    ]
]
[arg2] ["arg_source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]
[arg3] ["arg_upload_dir", "__ALL__"]
[arg4] ["arg_ignore_ui_state", true]
[arg5] ["arg_taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1"]
[arg6] ["arg_separate_taskbar_icon", true]   ----code_context : enable_trace = _to_bool(args.enable_trace) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12714, -fn: main, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[启动参数][final]"
[arg1] ["source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]
[arg2] ["upload_dir", "__ALL__"]
[arg3] ["ignore_ui_state", true]
[arg4] ["taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1.pid54384"]
[arg5] ["enable_trace", true]   ----code_context : runtime_taskbar_app_id = f"{runtime_taskbar_app_id}.pid{os.getpid()}" 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12726, -fn: main, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "============================================================"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12743, -fn: main, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "J盘备份到Muse UI 启动"   ----code_context : lprint("=" * 60)
    lprint("J盘备份到Muse UI 启动") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12744, -fn: main, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("J盘备份到Muse UI 启动")
    lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12745, -fn: main, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "正在初始化 UI..."   ----code_context : lprint.trace_max_result_per_function = 4 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12750, -fn: main, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "正在创建数据中心..."   ----code_context : lprint("正在创建数据中心...")
        self.data_center = BackupDataCenter(self) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4238, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "配置加载成功: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置加载成功: {config_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:682, -fn: load_default_config, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "UI已根据配置更新（全量）"   ----code_context : lprint("UI已根据配置更新（全量）")
                return 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2096, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "数据中心创建完成"   ----code_context : lprint("数据中心创建完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4240, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['backup_source_dir']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[启动参数][应用后配置]"
[arg1] ["startup_source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]
[arg2] ["startup_upload_dir", "<empty>"]
[arg3] ["startup_upload_is_all", true]
[arg4] ["config_source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]   ----code_context : lprint(
            "[启动参数][应用后配置]",
            ("startup_source_dir", self._startup_source_dir or "<empty>"),
            ("startup_upload_dir", self._startup_upload_dir or "<empty>"),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ("config_source_dir", self.data_center.config.backup_source_dir),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4253, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[启动参数]"
[arg1] ["source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]
[arg2] ["upload_dir", "<全部>"]
[arg3] ["ignore_ui_state", true]   ----code_context : lprint(
                "[启动参数]",
                ("source_dir", self._startup_source_dir or "<使用配置>"),
                ("upload_dir", upload_dir_label),
                ("ignore_ui_state", self._ignore_ui_state),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4264, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("MuseTool 初始化参数:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4293, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "MuseTool 初始化参数:"   ----code_context : lprint("MuseTool 初始化参数:")
            lprint(f"  user_email: {user_email}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4294, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {user_email}")
            lprint(f"  organization_id: {organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4295, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {organization_id}")
            lprint(f"  asset_type: {asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4296, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {asset_type}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4297, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4298, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "MuseTool 初始化成功"   ----code_context : lprint("MuseTool 初始化成功")
            lprint("验证 MuseTool 运行身份:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4307, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "验证 MuseTool 运行身份:"   ----code_context : lprint("验证 MuseTool 运行身份:")
            lprint(f"  user_email: {identity.get('user_email', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4308, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {identity.get('user_email', '')}")
            lprint(f"  organization_id: {identity.get('organization_id', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4309, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {identity.get('organization_id', '')}")
            lprint(f"  asset_type: {identity.get('asset_type', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4310, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {identity.get('asset_type', '')}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4311, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "从 p4_to_muse.yaml 加载本地 source 预设: 58 个"   ----code_context : lprint(f"从 p4_to_muse.yaml 加载本地 source 预设: {len(mappings)} 个")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1578, -fn: refresh_source_mappings_from_yaml, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "正在扫描 D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_坐骑 的文件夹列表..."   ----code_context : lprint(f"正在扫描 {backup_source_dir} 的文件夹列表...")
            try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4885, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "扫描到 71 个文件夹"   ----code_context : lprint(f"扫描到 {len(folders)} 个文件夹")
            except (PermissionError, OSError) as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4891, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[upload_dir_combo][init_start]"
[arg1] ["source_dir", "D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_坐骑"]
[arg2] ["preferred_upload_dir", "<empty>"]
[arg3] ["ignore_ui_state", true]
[arg4] ["startup_upload_explicit", true]
[arg5] ["startup_upload_is_all", true]   ----code_context : lprint(
            "[upload_dir_combo][init_start]",
            ("source_dir", backup_source_dir),
            ("preferred_upload_dir", preferred_upload_dir or "<empty>"),
            ("ignore_ui_state", self._ignore_ui_state),
            ("startup_upload_explicit", self._startup_upload_dir_is_explicit),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4911, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[upload_dir_combo][select_all_by_startup]"   ----code_context : lprint("[upload_dir_combo][select_all_by_startup]")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4922, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "已加载 71 个文件夹到下拉框: ['一勺春', '七夕浪漫坐骑（寒漪照梦）', '下马牵马', '兔子瑜伽球', '冰狮坐骑（凛风鸣霜）', '冰鹿', '凤凰坐骑（涅羽冲霄）', '单人划船', '卡皮巴拉', '卧云端牦牛', '双人坐骑', '双人坐骑狼', '双人坐骑白狼', '双峰骆驼', '双熊坐骑（瑶光团团和瑶光团）', '团驼驼', '地宫九尾狐', '大兔摩托坐骑', '天鹅坐骑', '孔明灯', '孔明灯_兔子', '孔明灯_飞船', '寄居蟹', '小肥啾坐骑动画', '悬镜灵照（狴犴白虎坐骑）', '摇啊摇轿子', '春节小红马车', '晴雪仙气坐骑', '来玩鸭', '毛驴', '水牛', '海马气球', '温泉小象坐骑', '满星河_双人船', '满都海驯鹿坐骑（离尘鞅）', '火锅车', '灵牙仙', '灵纪', '熊猫坐骑', '狻猊王座', '白泽', '白鹿双人坐骑', '白鹿坐骑', '百花步舆', '百里来摩托', '睚眦-红狼', '秋千', '筋斗云', '签到福利蝠鲼悠游-蝠运齐天', '粽子船', '芙蓉帐', '花船', '蔓萝纤', '蛇鹫云鹫绝影', '走地叽坐骑动作', '逍遥游海龟', '酷羊羊', '金陵画舫（锦芳行斋）坐骑', '长颈鹿坐骑动画', '闲踪青牛', '雪上飞', '风筝坐骑', '风迎香', '马啥拉地', '骆驼双人坐骑', '骑猪玩法动画', '骑马动画', '鸭鸭车', '鸱吻鱼双人坐骑（浩漾天潮）', '龙年小猪', '龙舟']"   ----code_context : lprint(f"已加载 {len(folders)} 个文件夹到下拉框: {folders}")
        if selected_folder: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4965, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[upload_dir_combo][init_done]"
[arg1] ["selected_folder", "<empty>"]
[arg2] ["current_text", "全部"]
[arg3] ["business_value", "<empty>"]   ----code_context : lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4968, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "扫描方式初始化完成，当前方式: os.scandir (性能优化)"   ----code_context : lprint(f"扫描方式初始化完成，当前方式: {ScanMethod.get_display_name(current_method)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5238, -fn: init_scan_method_ui, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "路径设置页已加载 5 条映射"   ----code_context : lprint(f"路径设置页已加载 {len(mappings)} 条映射")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5123, -fn: load_path_mapping_table, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[日志前缀][模式切换]"
[arg1] ["business_mode", "action_library"]
[arg2] ["date_log_prefix", "j_disc_action_library"]   ----code_context : lprint(
                "[日志前缀][模式切换]",
                ("business_mode", mode),
                ("date_log_prefix", log_prefix),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4550, -fn: _apply_date_log_prefix_by_mode, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['organization_id']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 2/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 2/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['asset_type']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 3/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 3/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['muse_root_category']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 4/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 4/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[MuseTool][重建]"
[arg1] ["reason", "source_mapping"]
[arg2] ["old_user_email", "wb.fengqingqing@mesg.corp.netease.com"]
[arg3] ["old_organization_id", "rsvs"]
[arg4] ["old_asset_type", "engineering"]
[arg5] ["new_user_email", "wb.fengqingqing@mesg.corp.netease.com"]
[arg6] ["new_organization_id", "h42"]
[arg7] ["new_asset_type", "simpleaction"]   ----code_context : lprint(
            "[MuseTool][重建]",
            ("reason", reason),
            ("old_user_email", current_user or "<empty>"),
            ("old_organization_id", current_org or "<empty>"),
            ("old_asset_type", current_asset_type or "<empty>"),
            ("new_user_email", user_email),
            ("new_organization_id", organization_id),
            ("new_asset_type", asset_type),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4408, -fn: _ensure_muse_tool_matches_config, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 2/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 2/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 2/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[trace][init]"
[arg1] ["enabled", true]
[arg2] ["source", "startup_arg"]   ----code_context : lprint(
            "[trace][init]",
            ("enabled", bool(self._startup_enable_trace)),
            ("source", "startup_arg"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5472, -fn: _init_trace_toggle_checkbox, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state"   ----code_context : lprint("[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4361, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "[启动缓存][候选]"
[arg1] ["current_ui_folder", "<empty>"]
[arg2] [
    "candidate_folders",
    [
        "主角_坐骑"
    ]
]
[arg3] ["startup_upload_is_all", true]   ----code_context : lprint(
                "[启动缓存][候选]",
                ("current_ui_folder", current_ui_folder or "<empty>"),
                ("candidate_folders", candidate_folders),
                ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4583, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "发现Pickle缓存文件: L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"发现Pickle缓存文件: {pkl_cache_file}")
                lprint(f"正在自动加载缓存: folder={folder}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4599, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "正在自动加载缓存: folder=主角_坐骑"   ----code_context : lprint(f"正在自动加载缓存: folder={folder}")
                success = self.data_center.load_scan_cache(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4600, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:22:59] [2026-05-07 11:22:59] {WARNING}
[arg0] "正在加载扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl, 大小: 0.98MB"   ----code_context : lprint(f"正在加载扫描缓存(Pickle): {pkl_path}, 大小: {size_mb:.2f}MB") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1396, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.007508s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[qtree_root_node] 开始 render_root_node_change"   ----code_context : lprint("[qtree_root_node] 开始 render_root_node_change")
                    self.ui_helper.render_root_node_change(node, _from_data_center=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:925, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 394]
[arg3] ["file_nodes", 2934]
[arg4] ["muse_asset_nodes", 0]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2428, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 0]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3863, -fn: _collect_selective_metrics_roots, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算"   ----code_context : lprint("[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算")
            self._recompute_subtree_mismatch_bubble_from_root(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3760, -fn: _refresh_effective_folder_metrics, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=1477107739920, root_name=主角_坐骑, total=75, types={'FolderNode': 71, 'FileNode': 4}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2474, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=75, child_types={'FolderNode': 71, 'FileNode': 4}, class_identity=isinstance=True, child_class_id=1477096997984, import_class_id=1477096997984, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4478, -fn: _build_folder_item, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 0.016553s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2490, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=一勺春, children(folder=4, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4323, -fn: _on_tree_item_expanded, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=七夕浪漫坐骑（寒漪照梦）, children(folder=9, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4323, -fn: _on_tree_item_expanded, 打印次数: 2/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=凤凰坐骑（涅羽冲霄）, children(folder=5, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4323, -fn: _on_tree_item_expanded, 打印次数: 3/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=单人划船, children(folder=2, other=1)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4323, -fn: _on_tree_item_expanded, 打印次数: 4/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 306 个 item，用时 0.212612s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2506, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 10]
[arg3] ["folder_nodes", 394]
[arg4] ["muse_asset_nodes", 0]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2522, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "📊 统计更新: 发现 3 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5074, -fn: update_statistics, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[qtree_root_node] 渲染完成，用时 0.280525s"   ----code_context : lprint(f"[qtree_root_node] 渲染完成，用时 {time.time() - _render_t0:.6f}s")
                    if self._startup_render_guard_enabled: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:927, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "扫描缓存已加载(Pickle v10): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已加载(Pickle v{loaded_version}): {pkl_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1481, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "缓存加载成功，正在更新UI..."   ----code_context : lprint("缓存加载成功，正在更新UI...")
                self._apply_category_tree_cache_to_current_tree(context="auto_load_cache") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4608, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", false]
[arg4] ["组织", "h42"]
[arg5] ["资产类型", "simpleaction"]
[arg6] [
    "Muse分支路径",
    [
        "动作资源",
        "坐骑",
        "主角_坐骑"
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

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分支树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分支树"), ("缓存文件", brunch_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:951, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "通过上游缓存逻辑加载分类树: L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"通过上游缓存逻辑加载分类树: {self._last_loaded_category_tree_cache_path}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:487, -fn: _try_hydrate_muse_category_tree_from_file_cache, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[分类树缓存][应用到当前树]"
[arg1] ["context", "auto_load_cache"]
[arg2] ["folder_name", "主角_坐骑"]
[arg3] ["loaded", true]
[arg4] ["root_name", "主角_坐骑"]
[arg5] ["root_muse_category_id", null]   ----code_context : lprint(
            "[分类树缓存][应用到当前树]",
            ("context", context or "<empty>"),
            ("folder_name", folder_name or "<empty>"),
            ("loaded", loaded),
            ("root_name", getattr(root_node, "name", "")),
            ("root_muse_category_id", getattr(root_node, "muse_category_id", None)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4869, -fn: _apply_category_tree_cache_to_current_tree, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "自动加载缓存完成"   ----code_context : lprint("自动加载缓存完成")
                self.refresh_cache_file_list() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4618, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9664, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.01秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.11秒, folder=主角_坐骑, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.13秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.16秒，共 3 个文件, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9672, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=主角_坐骑, muse_path=动作资源/坐骑/主角_坐骑"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9825, -fn: _resolve_expected_asset_cache_path, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10072, -fn: update_cache_files_list, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] UI更新耗时: 0.046秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9726, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 总耗时: 0.21秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9727, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9728, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9664, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=主角_坐骑, age=0.070s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.02秒，共 3 个文件, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9672, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=主角_坐骑, muse_path=动作资源/坐骑/主角_坐骑"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9825, -fn: _resolve_expected_asset_cache_path, 打印次数: 2/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10072, -fn: update_cache_files_list, 打印次数: 2/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] UI更新耗时: 0.045秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9726, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "[性能] 总耗时: 0.07秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9727, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:23:00] [2026-05-07 11:23:00] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9728, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "UI 窗口已显示"   ----code_context : window.show() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12758, -fn: main, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 2/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "从缓存加载分类树，检查目录是否已存在..."   ----code_context : if self.data_center.try_hydrate_muse_category_tree_from_file_cache(folder_name): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11008, -fn: _ensure_category_tree_ready, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "============================================================"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11079, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "目录状态检查完成:"   ----code_context : lprint("=" * 60)
        lprint("目录状态检查完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11080, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  总目录数: 307"   ----code_context : lprint("目录状态检查完成:")
        lprint(f"  总目录数: {total_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11081, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  已存在: 0"   ----code_context : lprint(f"  总目录数: {total_count}")
        lprint(f"  已存在: {exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11082, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  未创建: 307"   ----code_context : lprint(f"  已存在: {exists_count}")
        lprint(f"  未创建: {not_exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11083, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "============================================================"   ----code_context : lprint(f"  未创建: {not_exists_count}")
        lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11084, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）"   ----code_context : _ui_refresh_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11088, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[目录状态检查] qtree_root_node 轻量回写完成，用时 0.00s"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11095, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "Muse 根分类: 动作资源/坐骑/主角_坐骑"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11330, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "基础路径: ['动作资源', '坐骑', '主角_坐骑']"   ----code_context : lprint(f"Muse 根分类: {muse_root}", force_print=True)
        lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11331, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "本地文件夹总数: 393"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11345, -fn: sync_muse_assets, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("CategoryService 参数验证:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:470, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "CategoryService 参数验证:"   ----code_context : lprint("CategoryService 参数验证:")
            lprint(f"  organization_id: {category_service.organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:471, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  organization_id: h42"   ----code_context : lprint(f"  organization_id: {category_service.organization_id}")
            lprint(f"  asset_type: {category_service.asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:472, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  asset_type: simpleaction"   ----code_context : lprint(f"  asset_type: {category_service.asset_type}")
            lprint(f"  base_path: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:473, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  base_path: ['动作资源', '坐骑', '主角_坐骑']"   ----code_context : lprint(f"  base_path: {base_path}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:474, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:475, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "开始查询文件夹在 Muse 中的分类 ID..."   ----code_context : lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:476, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "使用调用方传入的分类树 Pydantic 模型，跳过分类树读取"   ----code_context : lprint("使用调用方传入的分类树 Pydantic 模型，跳过分类树读取")
            elif category_tree_override is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:485, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("Muse 分类树结构:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:503, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "Muse 分类树结构:"   ----code_context : lprint("Muse 分类树结构:")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:504, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:505, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "组织: h42"   ----code_context : lprint(f"组织: {typed_payload.organization_id}")
            lprint(f"根分类数量: {len(org_categories)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:547, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "根分类数量: 1"   ----code_context : lprint(f"根分类数量: {len(org_categories)}")
            root_names = [_node_label(cat) for cat in org_categories] 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:548, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "根分类列表: ['动作资源']"   ----code_context : lprint(f"根分类列表: {root_names}")
            if target_root_name: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:550, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "正在搜索目标分类: '动作资源'"   ----code_context : lprint(f"正在搜索目标分类: '{target_root_name}'")
                target_category = find_category_by_name(org_categories, target_root_name) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:552, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "✓ 找到目标分类: '动作资源' (ID: 482174690918401)"   ----code_context : lprint(f"✓ 找到目标分类: '{target_root_name}' (ID: {target_category.id})")
                    lprint(f"仅显示 '{target_root_name}' 分类树:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:555, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "仅显示 '动作资源' 分类树:"   ----code_context : lprint(f"仅显示 '{target_root_name}' 分类树:")
                    print_category_tree([target_category], 0) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:556, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "├─ [0] 动作资源 (ID: 482174690918401)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  ├─ [1] 坐骑 (ID: 482174795513857)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 2/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "    ├─ [2] 主角_坐骑 (ID: 482179145269249)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 3/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "      ├─ [3] 风迎香 (ID: 483380737343489)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 4/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"配置的根分类: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:565, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "配置的根分类: ['动作资源', '坐骑', '主角_坐骑']"   ----code_context : lprint(f"配置的根分类: {base_path}")
            lprint(f"Muse 分类总数: {muse_category_count[0]}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:566, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "Muse 分类总数: 393"   ----code_context : lprint(f"Muse 分类总数: {muse_category_count[0]}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:567, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:568, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "正在构建路径索引..."   ----code_context : lprint("正在构建路径索引...")
            path_to_id_map = {} 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:571, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "路径索引构建完成，共 393 个路径"   ----code_context : lprint(f"路径索引构建完成，共 {len(path_to_id_map)} 个路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:607, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "✗ [root] 动作资源/坐骑/主角_坐骑 → 未找到"
[arg1] "warning"   ----code_context : lprint(f"✗ [root] {root_path_str} → 未找到", "warning")
                else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:665, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "根节点有 75 个子节点"   ----code_context : lprint(f"根节点有 {len(root_node.children)} 个子节点")
            for child in root_node.children: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:670, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "✗ [0] 动作资源/坐骑/主角_坐骑/一勺春 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  ✗ [1] 动作资源/坐骑/主角_坐骑/一勺春/成女 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 2/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  ✗ [1] 动作资源/坐骑/主角_坐骑/一勺春/成男 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 3/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  ✗ [1] 动作资源/坐骑/主角_坐骑/一勺春/正太 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 4/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"文件夹状态更新完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:674, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "文件夹状态更新完成:"   ----code_context : lprint(f"文件夹状态更新完成:")
            lprint(f"  处理文件夹: {processed_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:675, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  处理文件夹: 393 个"   ----code_context : lprint(f"  处理文件夹: {processed_count[0]} 个")
            lprint(f"  匹配成功: {matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:676, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  匹配成功: 0 个"   ----code_context : lprint(f"  匹配成功: {matched_count[0]} 个")
            lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:677, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  未匹配: 393 个"   ----code_context : lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个")
            if matched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:678, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  未匹配样本(前5):"   ----code_context : lprint("  未匹配样本(前5):")
                for item in unmatched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:684, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春/成女"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 2/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春/成男"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 3/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春/正太"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 4/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  Muse分类总数: 393 个"   ----code_context : lprint(f"  Muse分类总数: {muse_category_count[0]} 个")
            if omitted_log_count[0] > 0: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:687, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "  详细日志省略: 363 条（已限流到前 30 条）"   ----code_context : lprint(f"  详细日志省略: {omitted_log_count[0]} 条（已限流到前 {max_detail_logs} 条）")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:689, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            # lprint.trace_start(auto_result=True, 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:690, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[同步阶段] 已收到分类树结果，准备进入资产同步前处理"   ----code_context : stage_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11800, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[同步阶段] 写入分类树模型完成，用时 0.00s"   ----code_context : self.data_center.muse_category_tree = stats.get("category_tree_model") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11809, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）"   ----code_context : tree_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11814, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 0]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3863, -fn: _collect_selective_metrics_roots, 打印次数: 2/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算"   ----code_context : lprint("[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算")
            self._recompute_subtree_mismatch_bubble_from_root(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3760, -fn: _refresh_effective_folder_metrics, 打印次数: 2/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=0.04s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=0.34s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "📊 统计更新: 发现 3 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5074, -fn: update_statistics, 打印次数: 2/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.00s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 307 个，跳过未变化子树 0 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[同步阶段] 轻量刷新完成，用时 0.39s"   ----code_context : self.data_center.ui_helper.update_visible_tree_items_only(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11816, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[同步阶段] 开始更新UI统计"   ----code_context : stats_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11821, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "UI 统计已更新: Muse分类=393, 匹配=0"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11826, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[同步阶段] UI统计更新完成，用时 0.00s"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11830, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 0.39s"   ----code_context : self.ui.statusLabel.setText("正在后台同步 Muse 资产...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11834, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", true]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", true]
[arg4] ["组织", "h42"]
[arg5] ["资产类型", "simpleaction"]
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

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分类树"), ("缓存文件", full_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:968, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，已根据 muse_path 在全量分类树缓存上回退解析: muse_path='动作资源/坐骑/主角_坐骑' -> id=482179145269249"
[arg1] "warning"   ----code_context : lprint(
                                    "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，"
                                    f"已根据 muse_path 在全量分类树缓存上回退解析: muse_path={mp!r} -> id={category_id}",
                                    "warning",
                                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1225, -fn: run, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[资产同步缓存检查] 分类=482179145269249, use_local_asset_cache=True, cache_file=L:\\temp\\j_muse_backup_new\\主角_坐骑\\muse_asset_cache_主角_坐骑.pkl, cache_file_exists=True"   ----code_context : lprint(
                        "[资产同步缓存检查] "
                        f"分类={cid}, use_local_asset_cache={self._use_local_asset_cache}, "
                        f"cache_file={cache_file_path or '<none>'}, cache_file_exists={cache_file_hit}"
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1539, -fn: run, 打印次数: 1/4   

[2026-05-07 11:23:01] [2026-05-07 11:23:01] {WARNING}
[arg0] "[asset_cache] 请求分类资产缓存: categories=1, use_cache=True, use_file_cache=True, save_to_file=False, cache_file=L:\\temp\\j_muse_backup_new\\主角_坐骑\\muse_asset_cache_主角_坐骑.pkl, cache_file_exists=True"   ----code_context : lprint(
            "[asset_cache] 请求分类资产缓存: "
            f"categories={len(category_ids)}, "
            f"use_cache={use_cache}, use_file_cache={use_file_cache}, save_to_file={save_to_file}, "
            f"cache_file={cache_file or '<none>'}, cache_file_exists={cache_file_exists}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:262, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   

[2026-05-07 11:23:02] [2026-05-07 11:23:02] {WARNING}
[arg0] "[asset_cache] 命中文件缓存并加载成功: L:\\temp\\j_muse_backup_new\\主角_坐骑\\muse_asset_cache_主角_坐骑.pkl"   ----code_context : lprint(f"[asset_cache] 命中文件缓存并加载成功: {cache_file}")
                    return typed_loaded 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:312, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   

[2026-05-07 11:23:02] [2026-05-07 11:23:02] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eec27969e8381103f6bb"]
[arg2] ["asset_name", "up_double"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380764606465/483381381496833"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380764606465",
        "483381381496833"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 1/4   

[2026-05-07 11:23:02] [2026-05-07 11:23:02] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eebddcdb913e04f78fb8"]
[arg2] ["asset_name", "正太_tzyjq_run_f"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380739571713"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380739571713"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 2/4   

[2026-05-07 11:23:02] [2026-05-07 11:23:02] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eebbdcdb913e04f78fae"]
[arg2] ["asset_name", "g_g_wolf_idle"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380764606465/483381192556546"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380764606465",
        "483381192556546"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 3/4   

[2026-05-07 11:23:02] [2026-05-07 11:23:02] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eebb9fac8b038a9b988d"]
[arg2] ["asset_name", "wolf_idle_male"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380812840962/483381545074689/483382040002561"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380812840962",
        "483381545074689",
        "483382040002561"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 20 条 @ 2026-05-07 11:23:05 ======
[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[资产同步进度] [cache-hit] 命中资产缓存并更新UI: 分类 482179145269249 | 资产 5166"   ----code_context : if "缓存" in str(message): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11648, -fn: _on_muse_asset_sync_progress, 打印次数: 1/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[asset_mount][summary]"
[arg1] ["failed_count", 5166]
[arg2] [
    "failure_reasons",
    {
        "category_id_not_found": 5166
    }
]
[arg3] ["sample_count", 10]   ----code_context : lprint(
                    "[asset_mount][summary]",
                    ("failed_count", mount_failed_count),
                    ("failure_reasons", mount_failed_reason_counts),
                    ("sample_count", len(mount_failed_samples)),
                    level="WARNING",
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1692, -fn: run, 打印次数: 1/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[资产挂载失败] 原因统计: category_id_not_found=5166"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 原因统计: {reason_summary}", "warning")
                for sample in mount_failed_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1703, -fn: run, 打印次数: 1/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eec27969e8381103f6bb, asset_name=up_double, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381381496833, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381381496833']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 1/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eebddcdb913e04f78fb8, asset_name=正太_tzyjq_run_f, category_path=482174690918401/482174795513857/482179145269249/483380739571713, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380739571713']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 2/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eebbdcdb913e04f78fae, asset_name=g_g_wolf_idle, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381192556546, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381192556546']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 3/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eebb9fac8b038a9b988d, asset_name=wolf_idle_male, category_path=482174690918401/482174795513857/482179145269249/483380812840962/483381545074689/483382040002561, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380812840962', '483381545074689', '483382040002561']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 4/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.005000s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[资产同步完成] 触发轻量树刷新（跳过整树重建）"   ----code_context : _light_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11700, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 0]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3863, -fn: _collect_selective_metrics_roots, 打印次数: 3/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算"   ----code_context : lprint("[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算")
            self._recompute_subtree_mismatch_bubble_from_root(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3760, -fn: _refresh_effective_folder_metrics, 打印次数: 3/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=0.04s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=0.01s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "📊 统计更新: 发现 3 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5074, -fn: update_statistics, 打印次数: 3/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.00s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 0 个，跳过未变化子树 1 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[资产同步完成] 轻量树刷新完成，用时 0.064332s"   ----code_context : self.data_center.ui_helper.update_visible_tree_items_only(qtree_root) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11702, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[asset_sync][result]"
[arg1] ["folder_count", 394]
[arg2] ["folders_with_category_id", 0]
[arg3] ["category_query_count", 1]
[arg4] ["total_assets", 0]
[arg5] ["total_matched", 0]
[arg6] ["mount_failed_count", 5166]
[arg7] [
    "mount_failed_reason_counts",
    {
        "category_id_not_found": 5166
    }
]   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11741, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:23:03] [2026-05-07 11:23:03] {WARNING}
[arg0] "[asset_sync][mount_failed_samples]"
[arg1] ["sample_count", 10]
[arg2] [
    "samples",
    [
        "asset_id=69e9eec27969e8381103f6bb, asset_name=up_double, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381381496833, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381381496833']",
        "asset_id=69e9eebddcdb913e04f78fb8, asset_name=正太_tzyjq_run_f, category_path=482174690918401/482174795513857/482179145269249/483380739571713, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380739571713']",
        "asset_id=69e9eebbdcdb913e04f78fae, asset_name=g_g_wolf_idle, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381192556546, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381192556546']",
        "asset_id=69e9eebb9fac8b038a9b988d, asset_name=wolf_idle_male, category_path=482174690918401/482174795513857/482179145269249/483380812840962/483381545074689/483382040002561, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380812840962', '483381545074689', '483382040002561']",
        "asset_id=69e9eebbdcdb913e04f78fa8, asset_name=ma_01_skin_horse, category_path=482174690918401/482174795513857/482179145269249/483380821557249/483381693775873, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380821557249', '483381693775873']",
        "asset_id=69e9eeba7969e8381103f6b0, asset_name=移动上车_mobile_up_jlhf_girl, category_path=482174690918401/482174795513857/482179145269249/483380760281089/483381028716545, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380760281089', '483381028716545']",
        "asset_id=69e9eeba7969e8381103f6ac, asset_name=ljzsnwz_skin, category_path=482174690918401/482174795513857/482179145269249/483380915929089/483381441855489, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380915929089', '483381441855489']",
        "asset_id=69e9eeba14c0d028e24757bc, asset_name=萝莉_主驾待机_xxwq_mobile_up, category_path=482174690918401/482174795513857/482179145269249/483380823654401, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380823654401']",
        "asset_id=69e9eeb914c0d028e24757b2, asset_name=陆地待机_idle_jlhf_boy_01, category_path=482174690918401/482174795513857/482179145269249/483380760281089/483381534130177, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380760281089', '483381534130177']",
        "asset_id=69e9eeb89fac8b038a9b9882, asset_name=xz_end, category_path=482174690918401/482174795513857/482179145269249/483380985135105/483381859188737, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380985135105', '483381859188737']"
    ]
]   ----code_context : if mount_failed_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11752, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 11:23:08 ======
[2026-05-07 11:23:06] [2026-05-07 11:23:06] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:23:06] [2026-05-07 11:23:06] {WARNING}
[arg0] "统计信息: 2934 个文件, 393 个目录, 3 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:23:06] [2026-05-07 11:23:06] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:23:06] [2026-05-07 11:23:06] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=主角_坐骑"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3904, -fn: _flush_scan_cache_after_metrics, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:24:21 ======
[2026-05-07 11:24:21] [2026-05-07 11:24:21] {WARNING}
[arg0] "[asset_sync][dialog_done]"
[arg1] ["total_matched", 0]
[arg2] ["total_assets", 0]
[arg3] ["mount_failed_count", 5166]   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11781, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 192 条 @ 2026-05-07 11:31:03 ======
[2026-05-07 11:30:57] [2026-05-07 11:30:57] {WARNING}
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

[2026-05-07 11:30:59] [2026-05-07 11:30:59] {WARNING}
[arg0] "[AST自动修复] 已修复 j_disc_backup_ui.py: inserted=1, file=c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py"
[arg1] "warning"   ----code_context : lprint(message, "warning")
    return None 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:112, -fn: _policy_warn, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[启动参数][argv_parse]"
[arg1] [
    "argv",
    [
        "c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\j_disc_backup_ui.py",
        "--enable-trace=True",
        "--source-dir",
        "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑",
        "--upload-dir",
        "__ALL__",
        "--ignore-ui-state",
        "--separate-taskbar-icon"
    ]
]
[arg2] ["arg_source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]
[arg3] ["arg_upload_dir", "__ALL__"]
[arg4] ["arg_ignore_ui_state", true]
[arg5] ["arg_taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1"]
[arg6] ["arg_separate_taskbar_icon", true]   ----code_context : enable_trace = _to_bool(args.enable_trace) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12842, -fn: main, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[启动参数][final]"
[arg1] ["source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]
[arg2] ["upload_dir", "__ALL__"]
[arg3] ["ignore_ui_state", true]
[arg4] ["taskbar_app_id", "AnimUploadMuseTool.JDiscBackupToMuse.1.pid48776"]
[arg5] ["enable_trace", true]   ----code_context : runtime_taskbar_app_id = f"{runtime_taskbar_app_id}.pid{os.getpid()}" 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12854, -fn: main, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "============================================================"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12871, -fn: main, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "J盘备份到Muse UI 启动"   ----code_context : lprint("=" * 60)
    lprint("J盘备份到Muse UI 启动") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12872, -fn: main, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("J盘备份到Muse UI 启动")
    lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12873, -fn: main, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "正在初始化 UI..."   ----code_context : lprint.trace_max_result_per_function = 4 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12878, -fn: main, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "正在创建数据中心..."   ----code_context : lprint("正在创建数据中心...")
        self.data_center = BackupDataCenter(self) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4239, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "配置加载成功: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置加载成功: {config_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:682, -fn: load_default_config, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "UI已根据配置更新（全量）"   ----code_context : lprint("UI已根据配置更新（全量）")
                return 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2096, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "数据中心创建完成"   ----code_context : lprint("数据中心创建完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4241, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['backup_source_dir']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[启动参数][应用后配置]"
[arg1] ["startup_source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]
[arg2] ["startup_upload_dir", "<empty>"]
[arg3] ["startup_upload_is_all", true]
[arg4] ["config_source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]   ----code_context : lprint(
            "[启动参数][应用后配置]",
            ("startup_source_dir", self._startup_source_dir or "<empty>"),
            ("startup_upload_dir", self._startup_upload_dir or "<empty>"),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ("config_source_dir", self.data_center.config.backup_source_dir),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4254, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[启动参数]"
[arg1] ["source_dir", "D:/PTrack/hangzhou/H42项目美术资源/正式资源/03角色动画/主角_坐骑"]
[arg2] ["upload_dir", "<全部>"]
[arg3] ["ignore_ui_state", true]   ----code_context : lprint(
                "[启动参数]",
                ("source_dir", self._startup_source_dir or "<使用配置>"),
                ("upload_dir", upload_dir_label),
                ("ignore_ui_state", self._ignore_ui_state),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4265, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("MuseTool 初始化参数:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4294, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "MuseTool 初始化参数:"   ----code_context : lprint("MuseTool 初始化参数:")
            lprint(f"  user_email: {user_email}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4295, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {user_email}")
            lprint(f"  organization_id: {organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4296, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {organization_id}")
            lprint(f"  asset_type: {asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4297, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {asset_type}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4298, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4299, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "MuseTool 初始化成功"   ----code_context : lprint("MuseTool 初始化成功")
            lprint("验证 MuseTool 运行身份:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4308, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "验证 MuseTool 运行身份:"   ----code_context : lprint("验证 MuseTool 运行身份:")
            lprint(f"  user_email: {identity.get('user_email', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4309, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "  user_email: wb.fengqingqing@mesg.corp.netease.com"   ----code_context : lprint(f"  user_email: {identity.get('user_email', '')}")
            lprint(f"  organization_id: {identity.get('organization_id', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4310, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "  organization_id: rsvs"   ----code_context : lprint(f"  organization_id: {identity.get('organization_id', '')}")
            lprint(f"  asset_type: {identity.get('asset_type', '')}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4311, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "  asset_type: engineering"   ----code_context : lprint(f"  asset_type: {identity.get('asset_type', '')}")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4312, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "从 p4_to_muse.yaml 加载本地 source 预设: 58 个"   ----code_context : lprint(f"从 p4_to_muse.yaml 加载本地 source 预设: {len(mappings)} 个")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:1578, -fn: refresh_source_mappings_from_yaml, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "正在扫描 D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_坐骑 的文件夹列表..."   ----code_context : lprint(f"正在扫描 {backup_source_dir} 的文件夹列表...")
            try: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4887, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "扫描到 71 个文件夹"   ----code_context : lprint(f"扫描到 {len(folders)} 个文件夹")
            except (PermissionError, OSError) as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4893, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[upload_dir_combo][init_start]"
[arg1] ["source_dir", "D:\\PTrack\\hangzhou\\H42项目美术资源\\正式资源\\03角色动画\\主角_坐骑"]
[arg2] ["preferred_upload_dir", "<empty>"]
[arg3] ["ignore_ui_state", true]
[arg4] ["startup_upload_explicit", true]
[arg5] ["startup_upload_is_all", true]   ----code_context : lprint(
            "[upload_dir_combo][init_start]",
            ("source_dir", backup_source_dir),
            ("preferred_upload_dir", preferred_upload_dir or "<empty>"),
            ("ignore_ui_state", self._ignore_ui_state),
            ("startup_upload_explicit", self._startup_upload_dir_is_explicit),
            ("startup_upload_is_all", self._startup_upload_dir_is_all),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4913, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[upload_dir_combo][select_all_by_startup]"   ----code_context : lprint("[upload_dir_combo][select_all_by_startup]")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4924, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "已加载 71 个文件夹到下拉框: ['一勺春', '七夕浪漫坐骑（寒漪照梦）', '下马牵马', '兔子瑜伽球', '冰狮坐骑（凛风鸣霜）', '冰鹿', '凤凰坐骑（涅羽冲霄）', '单人划船', '卡皮巴拉', '卧云端牦牛', '双人坐骑', '双人坐骑狼', '双人坐骑白狼', '双峰骆驼', '双熊坐骑（瑶光团团和瑶光团）', '团驼驼', '地宫九尾狐', '大兔摩托坐骑', '天鹅坐骑', '孔明灯', '孔明灯_兔子', '孔明灯_飞船', '寄居蟹', '小肥啾坐骑动画', '悬镜灵照（狴犴白虎坐骑）', '摇啊摇轿子', '春节小红马车', '晴雪仙气坐骑', '来玩鸭', '毛驴', '水牛', '海马气球', '温泉小象坐骑', '满星河_双人船', '满都海驯鹿坐骑（离尘鞅）', '火锅车', '灵牙仙', '灵纪', '熊猫坐骑', '狻猊王座', '白泽', '白鹿双人坐骑', '白鹿坐骑', '百花步舆', '百里来摩托', '睚眦-红狼', '秋千', '筋斗云', '签到福利蝠鲼悠游-蝠运齐天', '粽子船', '芙蓉帐', '花船', '蔓萝纤', '蛇鹫云鹫绝影', '走地叽坐骑动作', '逍遥游海龟', '酷羊羊', '金陵画舫（锦芳行斋）坐骑', '长颈鹿坐骑动画', '闲踪青牛', '雪上飞', '风筝坐骑', '风迎香', '马啥拉地', '骆驼双人坐骑', '骑猪玩法动画', '骑马动画', '鸭鸭车', '鸱吻鱼双人坐骑（浩漾天潮）', '龙年小猪', '龙舟']"   ----code_context : lprint(f"已加载 {len(folders)} 个文件夹到下拉框: {folders}")
        if selected_folder: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4967, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[upload_dir_combo][init_done]"
[arg1] ["selected_folder", "<empty>"]
[arg2] ["current_text", "全部"]
[arg3] ["business_value", "<empty>"]   ----code_context : lprint(
            "[upload_dir_combo][init_done]",
            ("selected_folder", selected_folder or "<empty>"),
            ("current_text", self.ui.uploadDirComboBox.currentText() or "<empty>"),
            ("business_value", self.data_center.source_scope.get_sub_source() or "<empty>"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4970, -fn: init_uploadDirComboBox, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "扫描方式初始化完成，当前方式: os.scandir (性能优化)"   ----code_context : lprint(f"扫描方式初始化完成，当前方式: {ScanMethod.get_display_name(current_method)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5240, -fn: init_scan_method_ui, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "路径设置页已加载 5 条映射"   ----code_context : lprint(f"路径设置页已加载 {len(mappings)} 条映射")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5125, -fn: load_path_mapping_table, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[日志前缀][模式切换]"
[arg1] ["business_mode", "action_library"]
[arg2] ["date_log_prefix", "j_disc_action_library"]   ----code_context : lprint(
                "[日志前缀][模式切换]",
                ("business_mode", mode),
                ("date_log_prefix", log_prefix),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4551, -fn: _apply_date_log_prefix_by_mode, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['organization_id']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 2/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 2/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['asset_type']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 3/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 3/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "UI已根据配置更新（差异字段: ['muse_root_category']）"   ----code_context : lprint(f"UI已根据配置更新（差异字段: {sorted(changed)}）")
        except Exception as e: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2144, -fn: apply_config_from_data_center, 打印次数: 4/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "配置已保存到: c:\\users\\wb.fengqingqing\\packages\\anim_upload_muse_tool\\999.0.0\\src\\anim_upload_muse_tool\\j_disc_backtomuse\\default_seting.yaml"   ----code_context : lprint(f"配置已保存到: {data_center.config_file_path}")
            data_center.mark_config_persisted() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2218, -fn: save_config_to_yaml_file, 打印次数: 4/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[MuseTool][重建]"
[arg1] ["reason", "source_mapping"]
[arg2] ["old_user_email", "wb.fengqingqing@mesg.corp.netease.com"]
[arg3] ["old_organization_id", "rsvs"]
[arg4] ["old_asset_type", "engineering"]
[arg5] ["new_user_email", "wb.fengqingqing@mesg.corp.netease.com"]
[arg6] ["new_organization_id", "h42"]
[arg7] ["new_asset_type", "simpleaction"]   ----code_context : lprint(
            "[MuseTool][重建]",
            ("reason", reason),
            ("old_user_email", current_user or "<empty>"),
            ("old_organization_id", current_org or "<empty>"),
            ("old_asset_type", current_asset_type or "<empty>"),
            ("new_user_email", user_email),
            ("new_organization_id", organization_id),
            ("new_asset_type", asset_type),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4409, -fn: _ensure_muse_tool_matches_config, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[MuseHelper] 创建新的 MuseClient 实例"   ----code_context : lprint(f'[MuseHelper] 创建新的 MuseClient 实例') 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\main.py:117, -fn: __init__, 打印次数: 2/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "AssetService 初始化完成"   ----code_context : lprint("AssetService 初始化完成") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:109, -fn: initialize, 打印次数: 2/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[分类服务]"
[arg1] ["状态", "初始化完成"]   ----code_context : lprint("[分类服务]", ("状态", "初始化完成")) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:107, -fn: initialize, 打印次数: 2/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[trace][init]"
[arg1] ["enabled", true]
[arg2] ["source", "startup_arg"]   ----code_context : lprint(
            "[trace][init]",
            ("enabled", bool(self._startup_enable_trace)),
            ("source", "startup_arg"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5478, -fn: _init_trace_toggle_checkbox, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state"   ----code_context : lprint("[ui_state] 已跳过恢复：启动参数指定 ignore_ui_state")
        else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4362, -fn: __init__, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[启动缓存][候选]"
[arg1] ["current_ui_folder", "<empty>"]
[arg2] [
    "candidate_folders",
    [
        "主角_坐骑"
    ]
]
[arg3] ["startup_upload_is_all", true]   ----code_context : lprint(
                "[启动缓存][候选]",
                ("current_ui_folder", current_ui_folder or "<empty>"),
                ("candidate_folders", candidate_folders),
                ("startup_upload_is_all", self._startup_upload_dir_is_all),
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4584, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "发现Pickle缓存文件: L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"发现Pickle缓存文件: {pkl_cache_file}")
                lprint(f"正在自动加载缓存: folder={folder}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4600, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "正在自动加载缓存: folder=主角_坐骑"   ----code_context : lprint(f"正在自动加载缓存: folder={folder}")
                success = self.data_center.load_scan_cache(folder) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4601, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "正在加载扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl, 大小: 0.98MB"   ----code_context : lprint(f"正在加载扫描缓存(Pickle): {pkl_path}, 大小: {size_mb:.2f}MB") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1396, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.005000s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[qtree_root_node] 开始 render_root_node_change"   ----code_context : lprint("[qtree_root_node] 开始 render_root_node_change")
                    self.ui_helper.render_root_node_change(node, _from_data_center=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:925, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[tree_view][render_start]"
[arg1] ["from_data_center", true]
[arg2] ["folder_nodes", 394]
[arg3] ["file_nodes", 2934]
[arg4] ["muse_asset_nodes", 0]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_start]",
            ("from_data_center", bool(_from_data_center)),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("file_nodes", render_stats.get("file_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2428, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:31:00] [2026-05-07 11:31:00] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 0]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3863, -fn: _collect_selective_metrics_roots, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算"   ----code_context : lprint("[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算")
            self._recompute_subtree_mismatch_bubble_from_root(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3760, -fn: _refresh_effective_folder_metrics, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[树视图] 根节点 children 统计: root_id=3189995856208, root_name=主角_坐骑, total=75, types={'FolderNode': 71, 'FileNode': 4}"   ----code_context : lprint(
                f"[树视图] 根节点 children 统计: root_id={id(root_node)}, "
                f"root_name={getattr(root_node, 'name', '?')}, "
                f"total={len(_children) if _children else 0}, types={_child_types}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2474, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[树视图] 根节点占位符检查: has_folder_child=True, children_count=75, child_types={'FolderNode': 71, 'FileNode': 4}, class_identity=isinstance=True, child_class_id=3189928813056, import_class_id=3189928813056, child_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures, import_module=anim_upload_muse_tool.j_disc_backtomuse.backup_data_structures"   ----code_context : lprint(
                f"[树视图] 根节点占位符检查: has_folder_child={has_folder_child}, "
                f"children_count={_n_children}, child_types={_child_type_counts}, "
                f"class_identity={_class_match}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4478, -fn: _build_folder_item, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[树视图] 根节点 item 创建完成，用时 0.017035s，topLevelItemCount=1"   ----code_context : lprint(
                    f"[树视图] 根节点 item 创建完成，用时 {time.time() - _build_t0:.6f}s，"
                    f"topLevelItemCount={tree.topLevelItemCount()}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2490, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=一勺春, children(folder=4, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4323, -fn: _on_tree_item_expanded, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=七夕浪漫坐骑（寒漪照梦）, children(folder=9, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4323, -fn: _on_tree_item_expanded, 打印次数: 2/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=凤凰坐骑（涅羽冲霄）, children(folder=5, other=0)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4323, -fn: _on_tree_item_expanded, 打印次数: 3/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[树视图-懒加载] 展开触发深层节点创建: depth=4, folder=单人划船, children(folder=2, other=1)"   ----code_context : lprint(
                "[树视图-懒加载] 展开触发深层节点创建: "
                f"depth={expanded_depth}, folder={node.name}, "
                f"children(folder={built_child_folders}, other={built_child_non_folders})"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:4323, -fn: _on_tree_item_expanded, 打印次数: 4/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[树视图] 初始预构建完成：最多 3 层，共创建 306 个 item，用时 0.242333s，更深层级在展开时懒加载"   ----code_context : lprint(
                    f"[树视图] 初始预构建完成：最多 {self._INITIAL_PREBUILD_LEVELS} 层，"
                    f"共创建 {prebuild_count} 个 item，用时 {time.time() - _prebuild_t0:.6f}s，"
                    "更深层级在展开时懒加载"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2506, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[tree_view][render_done]"
[arg1] ["top_level_item_count", 1]
[arg2] ["column_count", 10]
[arg3] ["folder_nodes", 394]
[arg4] ["muse_asset_nodes", 0]
[arg5] ["muse_asset_without_id", 0]   ----code_context : lprint(
            "[tree_view][render_done]",
            ("top_level_item_count", tree.topLevelItemCount()),
            ("column_count", tree.columnCount()),
            ("folder_nodes", render_stats.get("folder_nodes", 0)),
            ("muse_asset_nodes", render_stats.get("muse_asset_nodes", 0)),
            ("muse_asset_without_id", render_stats.get("muse_asset_without_id", 0)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:2522, -fn: update_file_tree, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "📊 统计更新: 发现 3 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5074, -fn: update_statistics, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[qtree_root_node] 渲染完成，用时 0.310924s"   ----code_context : lprint(f"[qtree_root_node] 渲染完成，用时 {time.time() - _render_t0:.6f}s")
                    if self._startup_render_guard_enabled: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:927, -fn: set_qtree_root_node, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "扫描缓存已加载(Pickle v10): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已加载(Pickle v{loaded_version}): {pkl_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1481, -fn: load_scan_cache, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "缓存加载成功，正在更新UI..."   ----code_context : lprint("缓存加载成功，正在更新UI...")
                self._apply_category_tree_cache_to_current_tree(context="auto_load_cache") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4609, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", false]
[arg4] ["组织", "h42"]
[arg5] ["资产类型", "simpleaction"]
[arg6] [
    "Muse分支路径",
    [
        "动作资源",
        "坐骑",
        "主角_坐骑"
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

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分支树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分支树"), ("缓存文件", brunch_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:951, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "通过上游缓存逻辑加载分类树: L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"通过上游缓存逻辑加载分类树: {self._last_loaded_category_tree_cache_path}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:487, -fn: _try_hydrate_muse_category_tree_from_file_cache, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[分类树缓存][应用到当前树]"
[arg1] ["context", "auto_load_cache"]
[arg2] ["folder_name", "主角_坐骑"]
[arg3] ["loaded", true]
[arg4] ["root_name", "主角_坐骑"]
[arg5] ["root_muse_category_id", null]   ----code_context : lprint(
            "[分类树缓存][应用到当前树]",
            ("context", context or "<empty>"),
            ("folder_name", folder_name or "<empty>"),
            ("loaded", loaded),
            ("root_name", getattr(root_node, "name", "")),
            ("root_muse_category_id", getattr(root_node, "muse_category_id", None)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4871, -fn: _apply_category_tree_cache_to_current_tree, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "自动加载缓存完成"   ----code_context : lprint("自动加载缓存完成")
                self.refresh_cache_file_list() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4619, -fn: auto_load_cache, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9792, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 指定文件夹扫描: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 指定文件夹扫描: folder={folder_name}, cache_dir={cache_dir}")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1621, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] listdir耗时: 0.00秒，共 1 个文件夹, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] listdir耗时: {time.time() - t1:.2f}秒，共 {len(folder_list)} 个文件夹, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1630, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 缓存目录扫描完成，开始查找分类树缓存: cache_dir={cache_dir}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1682, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 找到完整分类树缓存: path=L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到完整分类树缓存: path={file_path}")
                        except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1715, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 找到分支分类树缓存: path=L:\\temp\\j_muse_backup_new\\brunch_主角_坐骑(md5_1680aa61)_muse_category_tree_h42_simpleaction.pkl"   ----code_context : lprint(f"[性能] 找到分支分类树缓存: path={branch_file_path}")
                            except (OSError, FileNotFoundError): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1747, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 查找分类树缓存耗时: 0.01秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找分类树缓存耗时: {time.time() - t2:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1751, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 查找资产缓存耗时: 0.17秒, folder=主角_坐骑, cache_root=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                    f"[性能] 查找资产缓存耗时: {time.time() - t_asset:.2f}秒, "
                    f"folder={folder_name or '<all>'}, cache_root={cache_root if 'cache_root' in locals() else cache_dir}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1811, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 排序耗时: 0.000秒，共 3 个文件"   ----code_context : lprint(f"[性能] 排序耗时: {time.time() - t3:.3f}秒，共 {len(cache_files)} 个文件")
            else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1829, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] get_all_cache_files总耗时: 0.19秒, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(
                f"[性能] get_all_cache_files总耗时: {time.time() - t_start:.2f}秒, "
                f"folder={folder_name or '<all>'}, cache_dir={cache_dir}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1832, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.22秒，共 3 个文件, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9800, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=主角_坐骑, muse_path=动作资源/坐骑/主角_坐骑"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9953, -fn: _resolve_expected_asset_cache_path, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10072, -fn: update_cache_files_list, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] UI更新耗时: 0.041秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9854, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 总耗时: 0.27秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9855, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9856, -fn: refresh_cache_file_list, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 开始刷新缓存文件列表 - folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9792, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "分类树已在内存中，跳过重复加载"   ----code_context : lprint("分类树已在内存中，跳过重复加载") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1580, -fn: cache_files, 打印次数: 2/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 命中内存层缓存: folder=主角_坐骑, age=0.069s, files=3"   ----code_context : lprint(
                    f"[性能] 命中内存层缓存: folder={folder_name or '<all>'}, "
                    f"age={age_seconds:.3f}s, files={len(cached_files)}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1592, -fn: cache_files, 打印次数: 1/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 获取缓存文件列表耗时: 0.01秒，共 3 个文件, folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : cache_files = self.data_center.cache_files(current_folder, use_cache=False) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9800, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "目录尚未匹配到 muse_category_id，无法推导资产缓存路径: folder=主角_坐骑, muse_path=动作资源/坐骑/主角_坐骑"
[arg1] "warning"   ----code_context : if not category_id: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9953, -fn: _resolve_expected_asset_cache_path, 打印次数: 2/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "UI缓存文件列表已更新，共 5 个文件"   ----code_context : lprint(f"UI缓存文件列表已更新，共 {len(cache_files)} 个文件") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:10072, -fn: update_cache_files_list, 打印次数: 2/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] UI更新耗时: 0.045秒"   ----code_context : self.data_center.ui_helper.update_cache_files_list(cache_files) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9854, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "[性能] 总耗时: 0.07秒"   ----code_context : lprint(f"[性能] UI更新耗时: {time.time() - t2:.3f}秒")
            lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9855, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:31:01] [2026-05-07 11:31:01] {WARNING}
[arg0] "缓存文件列表已刷新，共 5 个文件: folder=主角_坐骑, cache_dir=L:\\temp\\j_muse_backup_new"   ----code_context : lprint(f"[性能] 总耗时: {time.time() - start_time:.2f}秒")
            lprint(
                f"缓存文件列表已刷新，共 {len(cache_files)} 个文件: "
                f"folder={current_folder}, cache_dir={cache_root}"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:9856, -fn: refresh_cache_file_list, 打印次数: 2/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "UI 窗口已显示"   ----code_context : window.show() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12886, -fn: main, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染"   ----code_context : lprint("[qtree_root_node] 启动阶段渲染守卫已开启：仅允许一次整树渲染") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:958, -fn: begin_startup_render_guard, 打印次数: 2/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "从缓存加载分类树，检查目录是否已存在..."   ----code_context : if self.data_center.try_hydrate_muse_category_tree_from_file_cache(folder_name): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11136, -fn: _ensure_category_tree_ready, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "============================================================"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11207, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "目录状态检查完成:"   ----code_context : lprint("=" * 60)
        lprint("目录状态检查完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11208, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  总目录数: 307"   ----code_context : lprint("目录状态检查完成:")
        lprint(f"  总目录数: {total_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11209, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  已存在: 0"   ----code_context : lprint(f"  总目录数: {total_count}")
        lprint(f"  已存在: {exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11210, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  未创建: 307"   ----code_context : lprint(f"  已存在: {exists_count}")
        lprint(f"  未创建: {not_exists_count}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11211, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "============================================================"   ----code_context : lprint(f"  未创建: {not_exists_count}")
        lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11212, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[目录状态检查] 开始回写 qtree_root_node（轻量：不触发整树重渲染）"   ----code_context : _ui_refresh_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11216, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[目录状态检查] qtree_root_node 轻量回写完成，用时 0.00s"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11223, -fn: _check_all_directories_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "Muse 根分类: 动作资源/坐骑/主角_坐骑"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11458, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "基础路径: ['动作资源', '坐骑', '主角_坐骑']"   ----code_context : lprint(f"Muse 根分类: {muse_root}", force_print=True)
        lprint(f"基础路径: {base_path}", force_print=True) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11459, -fn: sync_muse_assets, 打印次数: 1/4  [强制打印] 

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "本地文件夹总数: 393"   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11473, -fn: sync_muse_assets, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("CategoryService 参数验证:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:470, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "CategoryService 参数验证:"   ----code_context : lprint("CategoryService 参数验证:")
            lprint(f"  organization_id: {category_service.organization_id}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:471, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  organization_id: h42"   ----code_context : lprint(f"  organization_id: {category_service.organization_id}")
            lprint(f"  asset_type: {category_service.asset_type}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:472, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  asset_type: simpleaction"   ----code_context : lprint(f"  asset_type: {category_service.asset_type}")
            lprint(f"  base_path: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:473, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  base_path: ['动作资源', '坐骑', '主角_坐骑']"   ----code_context : lprint(f"  base_path: {base_path}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:474, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:475, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "开始查询文件夹在 Muse 中的分类 ID..."   ----code_context : lprint("开始查询文件夹在 Muse 中的分类 ID...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:476, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "使用调用方传入的分类树 Pydantic 模型，跳过分类树读取"   ----code_context : lprint("使用调用方传入的分类树 Pydantic 模型，跳过分类树读取")
            elif category_tree_override is not None: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:485, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint("Muse 分类树结构:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:503, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "Muse 分类树结构:"   ----code_context : lprint("Muse 分类树结构:")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:504, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:505, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "组织: h42"   ----code_context : lprint(f"组织: {typed_payload.organization_id}")
            lprint(f"根分类数量: {len(org_categories)}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:547, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "根分类数量: 1"   ----code_context : lprint(f"根分类数量: {len(org_categories)}")
            root_names = [_node_label(cat) for cat in org_categories] 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:548, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "根分类列表: ['动作资源']"   ----code_context : lprint(f"根分类列表: {root_names}")
            if target_root_name: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:550, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "正在搜索目标分类: '动作资源'"   ----code_context : lprint(f"正在搜索目标分类: '{target_root_name}'")
                target_category = find_category_by_name(org_categories, target_root_name) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:552, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "✓ 找到目标分类: '动作资源' (ID: 482174690918401)"   ----code_context : lprint(f"✓ 找到目标分类: '{target_root_name}' (ID: {target_category.id})")
                    lprint(f"仅显示 '{target_root_name}' 分类树:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:555, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "仅显示 '动作资源' 分类树:"   ----code_context : lprint(f"仅显示 '{target_root_name}' 分类树:")
                    print_category_tree([target_category], 0) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:556, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "├─ [0] 动作资源 (ID: 482174690918401)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  ├─ [1] 坐骑 (ID: 482174795513857)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 2/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "    ├─ [2] 主角_坐骑 (ID: 482179145269249)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 3/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "      ├─ [3] 风迎香 (ID: 483380737343489)"   ----code_context : lprint(f"{indent}├─ [{depth}] {name} (ID: {cat_id})") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:523, -fn: print_category_tree, 打印次数: 4/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"配置的根分类: {base_path}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:565, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "配置的根分类: ['动作资源', '坐骑', '主角_坐骑']"   ----code_context : lprint(f"配置的根分类: {base_path}")
            lprint(f"Muse 分类总数: {muse_category_count[0]}") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:566, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "Muse 分类总数: 393"   ----code_context : lprint(f"Muse 分类总数: {muse_category_count[0]}")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:567, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:568, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "正在构建路径索引..."   ----code_context : lprint("正在构建路径索引...")
            path_to_id_map = {} 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:571, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "路径索引构建完成，共 393 个路径"   ----code_context : lprint(f"路径索引构建完成，共 {len(path_to_id_map)} 个路径") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:607, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "✗ [root] 动作资源/坐骑/主角_坐骑 → 未找到"
[arg1] "warning"   ----code_context : lprint(f"✗ [root] {root_path_str} → 未找到", "warning")
                else: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:665, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "根节点有 75 个子节点"   ----code_context : lprint(f"根节点有 {len(root_node.children)} 个子节点")
            for child in root_node.children: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:670, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "✗ [0] 动作资源/坐骑/主角_坐骑/一勺春 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  ✗ [1] 动作资源/坐骑/主角_坐骑/一勺春/成女 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 2/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  ✗ [1] 动作资源/坐骑/主角_坐骑/一勺春/成男 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 3/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  ✗ [1] 动作资源/坐骑/主角_坐骑/一勺春/正太 → 未找到"   ----code_context : lprint(f"{indent}✗ [{depth}] {path_str} → 未找到")
                                detail_log_count[0] += 1 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:645, -fn: update_node_status, 打印次数: 4/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            lprint(f"文件夹状态更新完成:") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:674, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "文件夹状态更新完成:"   ----code_context : lprint(f"文件夹状态更新完成:")
            lprint(f"  处理文件夹: {processed_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:675, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  处理文件夹: 393 个"   ----code_context : lprint(f"  处理文件夹: {processed_count[0]} 个")
            lprint(f"  匹配成功: {matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:676, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  匹配成功: 0 个"   ----code_context : lprint(f"  匹配成功: {matched_count[0]} 个")
            lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:677, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  未匹配: 393 个"   ----code_context : lprint(f"  未匹配: {processed_count[0] - matched_count[0]} 个")
            if matched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:678, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  未匹配样本(前5):"   ----code_context : lprint("  未匹配样本(前5):")
                for item in unmatched_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:684, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春/成女"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 2/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春/成男"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 3/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "    - 动作资源/坐骑/主角_坐骑/一勺春/正太"   ----code_context : lprint(f"    - {item}")
            lprint(f"  Muse分类总数: {muse_category_count[0]} 个") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:686, -fn: update_folder_muse_status, 打印次数: 4/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  Muse分类总数: 393 个"   ----code_context : lprint(f"  Muse分类总数: {muse_category_count[0]} 个")
            if omitted_log_count[0] > 0: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:687, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "  详细日志省略: 363 条（已限流到前 30 条）"   ----code_context : lprint(f"  详细日志省略: {omitted_log_count[0]} 条（已限流到前 {max_detail_logs} 条）")
            lprint("=" * 60) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:689, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "============================================================"   ----code_context : lprint("=" * 60)
            # lprint.trace_start(auto_result=True, 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\muse_tool.py:690, -fn: update_folder_muse_status, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[同步阶段] 已收到分类树结果，准备进入资产同步前处理"   ----code_context : stage_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11928, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[同步阶段] 写入分类树模型完成，用时 0.00s"   ----code_context : self.data_center.muse_category_tree = stats.get("category_tree_model") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11937, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[同步阶段] 开始轻量刷新树视图（仅更新可见节点与统计，不重建整树item）"   ----code_context : tree_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11942, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 0]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3863, -fn: _collect_selective_metrics_roots, 打印次数: 2/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算"   ----code_context : lprint("[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算")
            self._recompute_subtree_mismatch_bubble_from_root(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3760, -fn: _refresh_effective_folder_metrics, 打印次数: 2/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=0.03s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=0.25s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "📊 统计更新: 发现 3 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5074, -fn: update_statistics, 打印次数: 2/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.00s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 307 个，跳过未变化子树 0 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[同步阶段] 轻量刷新完成，用时 0.29s"   ----code_context : self.data_center.ui_helper.update_visible_tree_items_only(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11944, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[同步阶段] 开始更新UI统计"   ----code_context : stats_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11949, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "UI 统计已更新: Muse分类=393, 匹配=0"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11954, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[同步阶段] UI统计更新完成，用时 0.00s"   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11958, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[同步阶段] 即将启动 MuseAssetSyncThread，总前置耗时 0.29s"   ----code_context : self.ui.statusLabel.setText("正在后台同步 Muse 资产...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11962, -fn: _on_folder_muse_status_finished, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", true]
[arg2] ["使用文件缓存", true]
[arg3] ["保存到文件", true]
[arg4] ["组织", "h42"]
[arg5] ["资产类型", "simpleaction"]
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

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[分类树缓存][文件加载]"
[arg1] ["缓存内容", "分类树"]
[arg2] ["缓存文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"]   ----code_context : lprint("[分类树缓存][文件加载]", ("缓存内容", "分类树"), ("缓存文件", full_cache_file))
                        if self.enable_memory_cache: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:968, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，已根据 muse_path 在全量分类树缓存上回退解析: muse_path='动作资源/坐骑/主角_坐骑' -> id=482179145269249"
[arg1] "warning"   ----code_context : lprint(
                                    "[MuseAssetSyncThread] 作用域根缺少 muse_category_id，"
                                    f"已根据 muse_path 在全量分类树缓存上回退解析: muse_path={mp!r} -> id={category_id}",
                                    "warning",
                                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1225, -fn: run, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[资产同步缓存检查] 分类=482179145269249, use_local_asset_cache=True, cache_file=L:\\temp\\j_muse_backup_new\\主角_坐骑\\muse_asset_cache_主角_坐骑.pkl, cache_file_exists=True"   ----code_context : lprint(
                        "[资产同步缓存检查] "
                        f"分类={cid}, use_local_asset_cache={self._use_local_asset_cache}, "
                        f"cache_file={cache_file_path or '<none>'}, cache_file_exists={cache_file_hit}"
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1539, -fn: run, 打印次数: 1/4   

[2026-05-07 11:31:02] [2026-05-07 11:31:02] {WARNING}
[arg0] "[asset_cache] 请求分类资产缓存: categories=1, use_cache=True, use_file_cache=True, save_to_file=False, cache_file=L:\\temp\\j_muse_backup_new\\主角_坐骑\\muse_asset_cache_主角_坐骑.pkl, cache_file_exists=True"   ----code_context : lprint(
            "[asset_cache] 请求分类资产缓存: "
            f"categories={len(category_ids)}, "
            f"use_cache={use_cache}, use_file_cache={use_file_cache}, save_to_file={save_to_file}, "
            f"cache_file={cache_file or '<none>'}, cache_file_exists={cache_file_exists}"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:262, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   

[2026-05-07 11:31:03] [2026-05-07 11:31:03] {WARNING}
[arg0] "[asset_cache] 命中文件缓存并加载成功: L:\\temp\\j_muse_backup_new\\主角_坐骑\\muse_asset_cache_主角_坐骑.pkl"   ----code_context : lprint(f"[asset_cache] 命中文件缓存并加载成功: {cache_file}")
                    return typed_loaded 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\asset_service.py:312, -fn: batch_get_assets_by_categories_cache, 打印次数: 1/4   

[2026-05-07 11:31:03] [2026-05-07 11:31:03] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eec27969e8381103f6bb"]
[arg2] ["asset_name", "up_double"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380764606465/483381381496833"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380764606465",
        "483381381496833"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 1/4   

[2026-05-07 11:31:03] [2026-05-07 11:31:03] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eebddcdb913e04f78fb8"]
[arg2] ["asset_name", "正太_tzyjq_run_f"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380739571713"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380739571713"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 2/4   

[2026-05-07 11:31:03] [2026-05-07 11:31:03] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eebbdcdb913e04f78fae"]
[arg2] ["asset_name", "g_g_wolf_idle"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380764606465/483381192556546"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380764606465",
        "483381192556546"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 3/4   

[2026-05-07 11:31:03] [2026-05-07 11:31:03] {WARNING}
[arg0] "[asset_mount][action_library][failed]"
[arg1] ["asset_id", "69e9eebb9fac8b038a9b988d"]
[arg2] ["asset_name", "wolf_idle_male"]
[arg3] ["category_path", "482174690918401/482174795513857/482179145269249/483380812840962/483381545074689/483382040002561"]
[arg4] ["reason", "category_id_not_found"]
[arg5] [
    "asset_category_ids",
    [
        "482174690918401",
        "482174795513857",
        "482179145269249",
        "483380812840962",
        "483381545074689",
        "483382040002561"
    ]
]   ----code_context : lprint(
                        "[asset_mount][action_library][failed]",
                        ("asset_id", record_id or "<none>"),
                        ("asset_name", record_name or "<empty>"),
                        ("category_path", category_path or "<none>"),
                        ("reason", "category_id_not_found"),
                        ("asset_category_ids", cat_ids if cat_ids else ["<none>"]),
                        level="WARNING",
                    ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1350, -fn: _apply_asset_to_bucket, 打印次数: 4/4   


[LogFileHandler] ====== 批量写入 21 条 @ 2026-05-07 11:31:06 ======
[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[asset_mount][summary]"
[arg1] ["failed_count", 5166]
[arg2] [
    "failure_reasons",
    {
        "category_id_not_found": 5166
    }
]
[arg3] ["sample_count", 10]   ----code_context : lprint(
                    "[asset_mount][summary]",
                    ("failed_count", mount_failed_count),
                    ("failure_reasons", mount_failed_reason_counts),
                    ("sample_count", len(mount_failed_samples)),
                    level="WARNING",
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1692, -fn: run, 打印次数: 1/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[资产同步进度] [cache-hit] 命中资产缓存并更新UI: 分类 482179145269249 | 资产 5166"   ----code_context : if "缓存" in str(message): 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11776, -fn: _on_muse_asset_sync_progress, 打印次数: 1/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[资产挂载失败] 原因统计: category_id_not_found=5166"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 原因统计: {reason_summary}", "warning")
                for sample in mount_failed_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1703, -fn: run, 打印次数: 1/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eec27969e8381103f6bb, asset_name=up_double, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381381496833, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381381496833']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 1/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eebddcdb913e04f78fb8, asset_name=正太_tzyjq_run_f, category_path=482174690918401/482174795513857/482179145269249/483380739571713, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380739571713']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 2/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eebbdcdb913e04f78fae, asset_name=g_g_wolf_idle, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381192556546, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381192556546']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 3/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[资产挂载失败] 样本: asset_id=69e9eebb9fac8b038a9b988d, asset_name=wolf_idle_male, category_path=482174690918401/482174795513857/482179145269249/483380812840962/483381545074689/483382040002561, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380812840962', '483381545074689', '483382040002561']"
[arg1] "warning"   ----code_context : lprint(f"[资产挂载失败] 样本: {sample}", "warning") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:1705, -fn: run, 打印次数: 4/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[qtree_root_node] 开始 update_statistics"   ----code_context : lprint("[qtree_root_node] 开始 update_statistics")
            node.update_statistics() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:883, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[qtree_root_node] update_statistics 完成，用时 0.003000s"   ----code_context : lprint(f"[qtree_root_node] update_statistics 完成，用时 {time.time() - _stat_t0:.6f}s")
        if node and render_ui: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:885, -fn: set_qtree_root_node, 打印次数: 2/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[资产同步完成] 触发轻量树刷新（跳过整树重建）"   ----code_context : _light_t0 = time.time() 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11828, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[effective_metrics][selective] 候选目录收集完成"
[arg1] ["candidate_roots", 0]   ----code_context : lprint(
            "[effective_metrics][selective] 候选目录收集完成",
            ("candidate_roots", len(roots)),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3863, -fn: _collect_selective_metrics_roots, 打印次数: 3/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算"   ----code_context : lprint("[effective_metrics][selective] 无候选目录，跳过 metrics 子进程重算")
            self._recompute_subtree_mismatch_bubble_from_root(root_node) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3760, -fn: _refresh_effective_folder_metrics, 打印次数: 3/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：effective_metrics=0.03s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：effective_metrics={time.time() - metrics_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3109, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：item_refresh=0.01s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：item_refresh={time.time() - item_refresh_t0:.2f}s") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3151, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "📊 统计更新: 发现 3 个无文件目录，已保存到缓存"   ----code_context : lprint(f"📊 统计更新: 发现 {empty_folder_count} 个无文件目录，已保存到缓存") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:5074, -fn: update_statistics, 打印次数: 3/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[树视图] 轻量刷新阶段耗时：ui_statistics=0.00s"   ----code_context : lprint(f"[树视图] 轻量刷新阶段耗时：ui_statistics={time.time() - stats_t0:.2f}s")
        lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3163, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[树视图] 轻量刷新完成：dirty更新 0 个，跳过未变化子树 1 个"   ----code_context : lprint(
            f"[树视图] 轻量刷新完成：dirty更新 {refreshed_count} 个，"
            f"跳过未变化子树 {skipped_subtree_count} 个"
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3164, -fn: update_visible_tree_items_only, 打印次数: 2/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[资产同步完成] 轻量树刷新完成，用时 0.040103s"   ----code_context : self.data_center.ui_helper.update_visible_tree_items_only(qtree_root) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11830, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[asset_sync][result]"
[arg1] ["folder_count", 394]
[arg2] ["folders_with_category_id", 0]
[arg3] ["category_query_count", 1]
[arg4] ["total_assets", 0]
[arg5] ["total_matched", 0]
[arg6] ["mount_failed_count", 5166]
[arg7] [
    "mount_failed_reason_counts",
    {
        "category_id_not_found": 5166
    }
]   ----code_context :  
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11869, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:31:04] [2026-05-07 11:31:04] {WARNING}
[arg0] "[asset_sync][mount_failed_samples]"
[arg1] ["sample_count", 10]
[arg2] [
    "samples",
    [
        "asset_id=69e9eec27969e8381103f6bb, asset_name=up_double, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381381496833, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381381496833']",
        "asset_id=69e9eebddcdb913e04f78fb8, asset_name=正太_tzyjq_run_f, category_path=482174690918401/482174795513857/482179145269249/483380739571713, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380739571713']",
        "asset_id=69e9eebbdcdb913e04f78fae, asset_name=g_g_wolf_idle, category_path=482174690918401/482174795513857/482179145269249/483380764606465/483381192556546, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380764606465', '483381192556546']",
        "asset_id=69e9eebb9fac8b038a9b988d, asset_name=wolf_idle_male, category_path=482174690918401/482174795513857/482179145269249/483380812840962/483381545074689/483382040002561, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380812840962', '483381545074689', '483382040002561']",
        "asset_id=69e9eebbdcdb913e04f78fa8, asset_name=ma_01_skin_horse, category_path=482174690918401/482174795513857/482179145269249/483380821557249/483381693775873, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380821557249', '483381693775873']",
        "asset_id=69e9eeba7969e8381103f6b0, asset_name=移动上车_mobile_up_jlhf_girl, category_path=482174690918401/482174795513857/482179145269249/483380760281089/483381028716545, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380760281089', '483381028716545']",
        "asset_id=69e9eeba7969e8381103f6ac, asset_name=ljzsnwz_skin, category_path=482174690918401/482174795513857/482179145269249/483380915929089/483381441855489, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380915929089', '483381441855489']",
        "asset_id=69e9eeba14c0d028e24757bc, asset_name=萝莉_主驾待机_xxwq_mobile_up, category_path=482174690918401/482174795513857/482179145269249/483380823654401, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380823654401']",
        "asset_id=69e9eeb914c0d028e24757b2, asset_name=陆地待机_idle_jlhf_boy_01, category_path=482174690918401/482174795513857/482179145269249/483380760281089/483381534130177, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380760281089', '483381534130177']",
        "asset_id=69e9eeb89fac8b038a9b9882, asset_name=xz_end, category_path=482174690918401/482174795513857/482179145269249/483380985135105/483381859188737, reason=category_id_not_found, asset_category_ids=['482174690918401', '482174795513857', '482179145269249', '483380985135105', '483381859188737']"
    ]
]   ----code_context : if mount_failed_samples: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11880, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   

[2026-05-07 11:31:06] [2026-05-07 11:31:06] {WARNING}
[arg0] "[asset_sync][dialog_done]"
[arg1] ["total_matched", 0]
[arg2] ["total_assets", 0]
[arg3] ["mount_failed_count", 5166]   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11909, -fn: _on_muse_asset_sync_finished, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 11:31:09 ======
[2026-05-07 11:31:07] [2026-05-07 11:31:07] {WARNING}
[arg0] "正在保存扫描缓存(Pickle): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"正在保存扫描缓存(Pickle): {cache_path}")
            lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1231, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:31:07] [2026-05-07 11:31:07] {WARNING}
[arg0] "统计信息: 2934 个文件, 393 个目录, 3 个空目录"   ----code_context : lprint(
                f"统计信息: {self._qtree_root_node.file_count} 个文件, "
                f"{self._qtree_root_node.folder_count} 个目录, "
                f"{self._qtree_root_node.empty_folder_count} 个空目录"
            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1232, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:31:07] [2026-05-07 11:31:07] {WARNING}
[arg0] "扫描缓存已保存(Pickle v10): L:\\temp\\j_muse_backup_new\\主角_坐骑\\主角_坐骑_local_fileList.pkl"   ----code_context : lprint(f"扫描缓存已保存(Pickle v{SCAN_CACHE_SCHEMA_VERSION}): {cache_path}")
            return True 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_data_center.py:1254, -fn: save_scan_cache, 打印次数: 1/4   

[2026-05-07 11:31:07] [2026-05-07 11:31:07] {WARNING}
[arg0] "[扫描缓存] 目录统计已回写本地 scan 缓存（schema v10）: folder=主角_坐骑"   ----code_context : lprint(
                    f"[扫描缓存] 目录统计已回写本地 scan 缓存（schema v{SCAN_CACHE_SCHEMA_VERSION}）: folder={folder}"
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\backup_ui_helper.py:3904, -fn: _flush_scan_cache_after_metrics, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:31:18 ======
[2026-05-07 11:31:15] [2026-05-07 11:31:15] {WARNING}
[arg0] "[分类树缓存][点击刷新按钮]"
[arg1] ["cache_file", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"]
[arg2] ["exists_now", true]   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11528, -fn: refresh_muse_category_tree, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 11:31:21 ======
[2026-05-07 11:31:20] [2026-05-07 11:31:20] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", false]
[arg3] ["保存到文件", true]
[arg4] ["组织", "h42"]
[arg5] ["资产类型", "simpleaction"]
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

[2026-05-07 11:31:20] [2026-05-07 11:31:20] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["动作", "从 API 获取分类树"]   ----code_context : lprint("[分类树缓存]", ("动作", "从 API 获取分类树"))
                # 注意：get_category_tree 内部会触发 token 获取与网络请求； 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:984, -fn: get_category_tree_cache, 打印次数: 1/4   

[2026-05-07 11:31:21] [2026-05-07 11:31:21] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "GET"]
[arg2] ["请求路径", "/api/category/trees/h42/simpleaction"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/category/trees/h42/simpleaction"]
[arg4] ["接口名", "organization_dir"]
[arg5] ["接口用途", "拉取组织下某资产类型的完整目录树"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {
        "json": {
            "queryNone": true,
            "uploadPermit": false
        }
    }
]
[arg8] (
    "返回结果",
    {
        "h42": [
            {
                "asset_count": 0,
                "asset_type": "simpleaction",
                "created_at": "2026-04-15 10:20:09",
                "created_by": "wb.fengqingqing@mesg.corp.netease.com",
                "depth": 0,
                "destroy": false,
                "id": 222200655642629,
                "name": "四足（蹄类）",
                "name_multil": {
                    "en_US": "tetrapods",
                    "ja_JP": "四足(ひづめ)です",
                    "zh_CN": "四足（蹄类）"
                },
                "share_id": 190897805656067,
                "updated_at": "2026-04-15 10:55:33",
                "updated_by": "wb.fengqingqing@mesg.corp.netease.com",
                "value": 222200655642629
            },
            {
                "asset_count": 1,
                "asset_type": "simpleaction",
                "created_at": "2026-04-15 10:20:09",
                "created_by": "wb.fengqingqing@mesg.corp.netease.com",
                "depth": 0,
                "destroy": false,
                "id": 222200655642628,
                "name": "二足",
                "name_multil": {
                    "en_US": "biped",
                    "ja_JP": "二本足です",
                    "zh_CN": "二足"
                },
                "share_id": 190897805656066,
                "updated_at": "2026-04-15 10:55:33",
                "updated_by": "wb.fengqingqing@mesg.corp.netease.com",
                "value": 222200655642628
            },
            {
                "asset_count": 0,
                "asset_type": "simpleaction",
                "created_at": "2026-04-15 10:20:09",
                "created_by": "wb.fengqingqing@mesg.corp.netease.com",
                "depth": 0,
                "destroy": false,
                "id": 222200655642630,
                "name": "四足（猫犬）",
                "name_multil": {
                    "en_US": "Quadruped",
                    "ja_JP": "四足(犬猫)です",
                    "zh_CN": "四足（猫犬）"
                },
                "share_id": 190897805656068,
                "updated_at": "2026-04-15 10:55:33",
                "updated_by": "wb.fengqingqing@mesg.corp.netease.com",
                "value": 222200655642630
            },
            {
                "asset_count": 0,
                "asset_type": "simpleaction",
                "created_at": "2026-04-15 10:20:09",
                "created_by": "wb.fengqingqing@mesg.corp.netease.com",
                "depth": 0,
                "destroy": false,
                "id": 222200655642631,
                "name": "怪物",
                "name_multil": {
                    "en_US": "Monster",
                    "ja_JP": "怪物です",
                    "zh_CN": "怪物"
                },
                "share_id": 190897805656069,
                "updated_at": "2026-04-15 10:55:33",
                "updated_by": "wb.fengqingqing@mesg.corp.netease.com",
                "value": 222200655642631
            },
            {
                "asset_count": 0,
                "asset_type": "simpleaction",
                "created_at": "2026-04-15 10:20:09",
...（已省略，共 75223 行）   ----code_context : lprint(
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


[LogFileHandler] ====== 批量写入 2 条 @ 2026-05-07 11:31:24 ======
[2026-05-07 11:31:21] [2026-05-07 11:31:21] {WARNING}
[arg0] "[分类树缓存][备份]"
[arg1] ["源文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"]
[arg2] ["备份文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction\\.bak\\muse_category_tree_h42_simpleaction.bak.20260507_113121_739.pkl"]
[arg3] ["原因", "before_overwrite_full_cache"]   ----code_context : lprint(
                    "[分类树缓存][备份]",
                    ("源文件", path),
                    ("备份文件", backup_path),
                    ("原因", reason),
                    level="INFO",
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:788, -fn: _backup_existing_cache_file, 打印次数: 1/4   

[2026-05-07 11:31:22] [2026-05-07 11:31:22] {WARNING}
[arg0] "[分类树缓存][全量保存]"
[arg1] ["缓存文件路径", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"]
[arg2] ["备份文件路径", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction\\.bak\\muse_category_tree_h42_simpleaction.bak.20260507_113121_739.pkl"]
[arg3] ["根目录数量", 6]
[arg4] ["无目录资源数量", 0]   ----code_context : lprint(
                                "[分类树缓存][全量保存]",
                                ("缓存文件路径", full_cache_file),
                                ("备份文件路径", backup_path),
                                ("根目录数量", len(full_model.categories or [])),
                                ("无目录资源数量", int(getattr(full_model, "no_category_count", 0) or 0)),
                                level="INFO",
                            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:1035, -fn: get_category_tree_cache, 打印次数: 1/4   


[LogFileHandler] ====== 批量写入 4 条 @ 2026-05-07 11:37:52 ======
[2026-05-07 11:37:48] [2026-05-07 11:37:48] {WARNING}
[arg0] "[trace][toggle]"
[arg1] ["enabled", false]
[arg2] ["source", "settings_checkbox"]   ----code_context : lprint(
            "[trace][toggle]",
            ("enabled", enabled),
            ("source", "settings_checkbox"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5488, -fn: on_trace_checkbox_changed, 打印次数: 1/4   

[2026-05-07 11:37:48] [2026-05-07 11:37:48] {WARNING}
[arg0] "[ui_state] 已写入: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : # 成功也打一条日志，便于排查“未保存/未触发”的问题（避免只在异常时才有日志）。 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12618, -fn: save_combo_state_to_temp_file, 打印次数: 1/4   

[2026-05-07 11:37:49] [2026-05-07 11:37:49] {WARNING}
[arg0] "[trace][toggle]"
[arg1] ["enabled", true]
[arg2] ["source", "settings_checkbox"]   ----code_context : lprint(
            "[trace][toggle]",
            ("enabled", enabled),
            ("source", "settings_checkbox"),
        ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:5488, -fn: on_trace_checkbox_changed, 打印次数: 2/4   

[2026-05-07 11:37:49] [2026-05-07 11:37:49] {WARNING}
[arg0] "[ui_state] 已写入: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : # 成功也打一条日志，便于排查“未保存/未触发”的问题（避免只在异常时才有日志）。 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12618, -fn: save_combo_state_to_temp_file, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 1 条 @ 2026-05-07 11:37:58 ======
[2026-05-07 11:37:56] [2026-05-07 11:37:56] {WARNING}
[arg0] "[分类树缓存][点击刷新按钮]"
[arg1] ["cache_file", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"]
[arg2] ["exists_now", true]   ----code_context : ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:11528, -fn: refresh_muse_category_tree, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 5 条 @ 2026-05-07 11:38:01 ======
[2026-05-07 11:37:58] [2026-05-07 11:37:58] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["使用内存缓存", false]
[arg2] ["使用文件缓存", false]
[arg3] ["保存到文件", true]
[arg4] ["组织", "h42"]
[arg5] ["资产类型", "simpleaction"]
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

[2026-05-07 11:37:58] [2026-05-07 11:37:58] {WARNING}
[arg0] "[分类树缓存]"
[arg1] ["动作", "从 API 获取分类树"]   ----code_context : lprint("[分类树缓存]", ("动作", "从 API 获取分类树"))
                # 注意：get_category_tree 内部会触发 token 获取与网络请求； 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:984, -fn: get_category_tree_cache, 打印次数: 2/4   

[2026-05-07 11:37:59] [2026-05-07 11:37:59] {WARNING}
[arg0] "[muse_api][请求成功]"
[arg1] ["请求方法", "GET"]
[arg2] ["请求路径", "/api/category/trees/h42/simpleaction"]
[arg3] ["完整链接", "https://muse-open.netease.com/muse-service/api/category/trees/h42/simpleaction"]
[arg4] ["接口名", "organization_dir"]
[arg5] ["接口用途", "拉取组织下某资产类型的完整目录树"]
[arg6] ["接口来源", "MuseInterface"]
[arg7] [
    "请求参数",
    {
        "json": {
            "queryNone": true,
            "uploadPermit": false
        }
    }
]
[arg8] (
    "返回结果",
    {
        "h42": [
            {
                "asset_count": 0,
                "asset_type": "simpleaction",
                "created_at": "2026-04-15 10:20:09",
                "created_by": "wb.fengqingqing@mesg.corp.netease.com",
                "depth": 0,
                "destroy": false,
                "id": 222200655642629,
                "name": "四足（蹄类）",
                "name_multil": {
                    "en_US": "tetrapods",
                    "ja_JP": "四足(ひづめ)です",
                    "zh_CN": "四足（蹄类）"
                },
                "share_id": 190897805656067,
                "updated_at": "2026-04-15 10:55:33",
                "updated_by": "wb.fengqingqing@mesg.corp.netease.com",
                "value": 222200655642629
            },
            {
                "asset_count": 1,
                "asset_type": "simpleaction",
                "created_at": "2026-04-15 10:20:09",
                "created_by": "wb.fengqingqing@mesg.corp.netease.com",
                "depth": 0,
                "destroy": false,
                "id": 222200655642628,
                "name": "二足",
                "name_multil": {
                    "en_US": "biped",
                    "ja_JP": "二本足です",
                    "zh_CN": "二足"
                },
                "share_id": 190897805656066,
                "updated_at": "2026-04-15 10:55:33",
                "updated_by": "wb.fengqingqing@mesg.corp.netease.com",
                "value": 222200655642628
            },
            {
                "asset_count": 0,
                "asset_type": "simpleaction",
                "created_at": "2026-04-15 10:20:09",
                "created_by": "wb.fengqingqing@mesg.corp.netease.com",
                "depth": 0,
                "destroy": false,
                "id": 222200655642630,
                "name": "四足（猫犬）",
                "name_multil": {
                    "en_US": "Quadruped",
                    "ja_JP": "四足(犬猫)です",
                    "zh_CN": "四足（猫犬）"
                },
                "share_id": 190897805656068,
                "updated_at": "2026-04-15 10:55:33",
                "updated_by": "wb.fengqingqing@mesg.corp.netease.com",
                "value": 222200655642630
            },
            {
                "asset_count": 0,
                "asset_type": "simpleaction",
                "created_at": "2026-04-15 10:20:09",
                "created_by": "wb.fengqingqing@mesg.corp.netease.com",
                "depth": 0,
                "destroy": false,
                "id": 222200655642631,
                "name": "怪物",
                "name_multil": {
                    "en_US": "Monster",
                    "ja_JP": "怪物です",
                    "zh_CN": "怪物"
                },
                "share_id": 190897805656069,
                "updated_at": "2026-04-15 10:55:33",
                "updated_by": "wb.fengqingqing@mesg.corp.netease.com",
                "value": 222200655642631
            },
            {
                "asset_count": 0,
                "asset_type": "simpleaction",
                "created_at": "2026-04-15 10:20:09",
...（已省略，共 75223 行）   ----code_context : lprint(
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

[2026-05-07 11:38:00] [2026-05-07 11:38:00] {WARNING}
[arg0] "[分类树缓存][备份]"
[arg1] ["源文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"]
[arg2] ["备份文件", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction\\.bak\\muse_category_tree_h42_simpleaction.bak.20260507_113759_990.pkl"]
[arg3] ["原因", "before_overwrite_full_cache"]   ----code_context : lprint(
                    "[分类树缓存][备份]",
                    ("源文件", path),
                    ("备份文件", backup_path),
                    ("原因", reason),
                    level="INFO",
                ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:788, -fn: _backup_existing_cache_file, 打印次数: 2/4   

[2026-05-07 11:38:00] [2026-05-07 11:38:00] {WARNING}
[arg0] "[分类树缓存][全量保存]"
[arg1] ["缓存文件路径", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction.pkl"]
[arg2] ["备份文件路径", "L:\\temp\\j_muse_backup_new\\muse_category_tree_h42_simpleaction\\.bak\\muse_category_tree_h42_simpleaction.bak.20260507_113759_990.pkl"]
[arg3] ["根目录数量", 6]
[arg4] ["无目录资源数量", 0]   ----code_context : lprint(
                                "[分类树缓存][全量保存]",
                                ("缓存文件路径", full_cache_file),
                                ("备份文件路径", backup_path),
                                ("根目录数量", len(full_model.categories or [])),
                                ("无目录资源数量", int(getattr(full_model, "no_category_count", 0) or 0)),
                                level="INFO",
                            ) 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\muse_helper\services\category_service.py:1035, -fn: get_category_tree_cache, 打印次数: 2/4   


[LogFileHandler] ====== 批量写入 3 条 @ 2026-05-07 11:38:18 ======
[2026-05-07 11:38:18] [2026-05-07 11:38:18] {WARNING}
[arg0] "窗口正在关闭..."   ----code_context : lprint("窗口正在关闭...") 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4636, -fn: on_window_close, 打印次数: 1/4   

[2026-05-07 11:38:18] [2026-05-07 11:38:18] {WARNING}
[arg0] "[ui_state] 已写入: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : # 成功也打一条日志，便于排查“未保存/未触发”的问题（避免只在异常时才有日志）。 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:12618, -fn: save_combo_state_to_temp_file, 打印次数: 3/4   

[2026-05-07 11:38:18] [2026-05-07 11:38:18] {WARNING}
[arg0] "[ui_state] 已保存: L:\\temp\\j_muse_backup_new\\ui_state_cache.json"   ----code_context : lprint(f"[ui_state] 已保存: {self._ui_state_cache_file}")
        except Exception: 
File: c:\users\wb.fengqingqing\packages\anim_upload_muse_tool\999.0.0\src\anim_upload_muse_tool\j_disc_backtomuse\j_disc_backup_ui.py:4641, -fn: on_window_close, 打印次数: 1/4   

