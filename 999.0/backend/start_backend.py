"""
后端服务启动器 - 独立运行
"""
import os
import uvicorn
import config

if __name__ == '__main__':
    print("=" * 60)
    print("日志查看器 v2.0 - 后端服务")
    print("=" * 60)
    print(f"启动地址: http://{config.HOST}:{config.PORT}")
    print(f"日志目录: {config.LOGS_DIR}")
    print(f"缓存目录: {config.LOGS_CACHE_DIR}")
    print("自动重载: 已启用（文件修改后自动重启）")
    print("按 Ctrl+C 停止服务")
    print("=" * 60)
    
    uvicorn.run(
        "app:app",  # 使用字符串路径而不是app对象，以支持reload
        host=config.HOST, 
        port=config.PORT, 
        reload=True,  # 启用自动重载
        reload_dirs=["./"],  # 监控当前目录
        log_level="info"
    )
