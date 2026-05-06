"""
日志查看器 v2.0 主程序
使用 PyQt6 + pywebview + FastAPI 架构
"""
import sys
import os
import threading
import time
from PyQt6.QtWidgets import QApplication, QSystemTrayIcon, QMenu, QFileDialog
from PyQt6.QtGui import QIcon, QAction
from PyQt6.QtCore import QTimer

# 添加backend到路径
BACKEND_DIR = os.path.join(os.path.dirname(__file__), 'backend')
sys.path.insert(0, BACKEND_DIR)


class LogViewerApp:
    def __init__(self):
        # PyQt应用
        self.app = QApplication(sys.argv)
        
        # 系统托盘图标（使用默认图标）
        self.tray = QSystemTrayIcon()
        self.tray.setToolTip('日志查看器 v2.0')
        
        # 托盘菜单
        menu = QMenu()
        
        open_action = QAction('打开日志查看器', None)
        open_action.triggered.connect(self.show_viewer)
        menu.addAction(open_action)
        
        upload_action = QAction('上传日志文件', None)
        upload_action.triggered.connect(self.upload_file)
        menu.addAction(upload_action)
        
        menu.addSeparator()
        
        quit_action = QAction('退出', None)
        quit_action.triggered.connect(self.quit)
        menu.addAction(quit_action)
        
        self.tray.setContextMenu(menu)
        self.tray.show()
        
        # 启动FastAPI后端（后台线程）
        self.backend_thread = threading.Thread(target=self.start_backend, daemon=True)
        self.backend_thread.start()
        
        # 等待后端启动
        print("等待后端服务启动...")
        time.sleep(2)
        
        # pywebview窗口
        self.window = None
        
        # 自动显示主窗口
        QTimer.singleShot(100, self.show_viewer)
    
    def start_backend(self):
        """启动FastAPI后端"""
        try:
            import uvicorn
            from backend.app import app
            from backend import config
            
            print(f"FastAPI服务启动在 http://{config.HOST}:{config.PORT}")
            uvicorn.run(
                app, 
                host=config.HOST, 
                port=config.PORT, 
                log_level='info'
            )
        except Exception as e:
            print(f"后端启动失败: {e}")
    
    def show_viewer(self):
        """显示日志查看器窗口"""
        if self.window is not None:
            return
        
        try:
            import webview
            from backend import config
            
            # 创建API桥接
            api = LogViewerApi(self)
            
            # pywebview 6.1 配置
            webview.settings['DRAG_REGION_DIRECT_TARGET_ONLY'] = True
            
            # 创建窗口
            self.window = webview.create_window(
                '日志查看器 v2.0',
                f'http://{config.HOST}:{config.PORT}',
                width=1200,
                height=800,
                resizable=True,
                js_api=api
            )
            
            # 启动webview（使用EdgeChromium渲染器，避免.NET依赖）
            webview.start(gui='edgechromium', debug=True)
            
        except Exception as e:
            print(f"窗口创建失败: {e}")
            print("尝试在浏览器中打开...")
            import webbrowser
            webbrowser.open(f'http://{config.HOST}:{config.PORT}')
            import traceback
            traceback.print_exc()
    
    def upload_file(self):
        """打开文件对话框上传日志"""
        filename, _ = QFileDialog.getOpenFileName(
            None,
            '选择日志文件',
            '',
            '日志文件 (*.md *.log *.txt);;所有文件 (*.*)'
        )
        
        if filename:
            print(f"选择文件: {filename}")
            # TODO: 自动上传到后端
    
    def quit(self):
        """退出应用"""
        self.app.quit()
        sys.exit(0)
    
    def run(self):
        """运行应用"""
        return self.app.exec()


class LogViewerApi:
    """Python-JavaScript桥接API"""
    def __init__(self, app):
        self.app = app
        self.state = LogViewerState()
    
    def open_file_dialog(self):
        """打开文件对话框"""
        filename, _ = QFileDialog.getOpenFileName(
            None,
            '选择日志文件',
            '',
            '日志文件 (*.md *.log *.txt);;所有文件 (*.*)'
        )
        return filename
    
    def show_notification(self, title, message):
        """显示系统通知"""
        self.app.tray.showMessage(title, message)
        return True


class LogViewerState:
    """共享状态对象（pywebview 6.0+）"""
    def __init__(self):
        self.tabs = []
        self.current_tab = None
        self.theme = 'dark'
        self.recent_logs = []


if __name__ == '__main__':
    print("=" * 60)
    print("日志查看器 v2.0")
    print("PyQt6 + pywebview + FastAPI")
    print("=" * 60)
    
    app = LogViewerApp()
    sys.exit(app.run())
