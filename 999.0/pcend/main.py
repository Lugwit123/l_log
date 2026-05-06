"""
PC端主程序 - 使用pywebview创建原生窗口
"""
import sys
import os
import threading
import time
import webview

# 添加backend路径
BACKEND_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'backend')
sys.path.insert(0, BACKEND_DIR)


def start_backend_server():
    """启动FastAPI后端服务（后台线程）"""
    import uvicorn
    
    # 直接导入backend模块
    sys.path.insert(0, BACKEND_DIR)
    import app as backend_app
    import config as backend_config
    
    print(f"[后端] 启动FastAPI服务: http://{backend_config.HOST}:{backend_config.PORT}")
    uvicorn.run(backend_app.app, host=backend_config.HOST, port=backend_config.PORT, log_level="info")


def wait_for_server(host='127.0.0.1', port=8000, timeout=10):
    """等待后端服务启动"""
    import socket
    start_time = time.time()
    
    while time.time() - start_time < timeout:
        try:
            sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
            sock.settimeout(1)
            result = sock.connect_ex((host, port))
            sock.close()
            
            if result == 0:
                print(f"[PC端] 后端服务已就绪")
                return True
        except:
            pass
        
        time.sleep(0.5)
    
    return False


class FileSystemBridge:
    """Python-JavaScript桥接：提供文件系统访问"""
    
    def select_file(self):
        """打开文件选择对话框"""
        try:
            from PyQt6.QtWidgets import QApplication, QFileDialog
            
            if not QApplication.instance():
                app = QApplication(sys.argv)
            
            filename, _ = QFileDialog.getOpenFileName(
                None,
                '选择日志文件',
                '',
                '日志文件 (*.md *.log *.txt);;所有文件 (*.*)'
            )
            
            return filename if filename else None
        except Exception as e:
            print(f"[桥接] 文件选择失败: {e}")
            return None
    
    def select_folder(self):
        """打开文件夹选择对话框"""
        try:
            from PyQt6.QtWidgets import QApplication, QFileDialog
            
            if not QApplication.instance():
                app = QApplication(sys.argv)
            
            folder = QFileDialog.getExistingDirectory(
                None,
                '选择文件夹',
                ''
            )
            
            return folder if folder else None
        except Exception as e:
            print(f"[桥接] 文件夹选择失败: {e}")
            return None
    
    def save_file(self, content, default_name='export.txt'):
        """保存文件对话框"""
        try:
            from PyQt6.QtWidgets import QApplication, QFileDialog
            
            if not QApplication.instance():
                app = QApplication(sys.argv)
            
            filename, _ = QFileDialog.getSaveFileName(
                None,
                '保存文件',
                default_name,
                '文本文件 (*.txt);;Markdown文件 (*.md);;所有文件 (*.*)'
            )
            
            if filename:
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(content)
                return filename
            
            return None
        except Exception as e:
            print(f"[桥接] 文件保存失败: {e}")
            return None


def main():
    """主函数"""
    print("=" * 60)
    print("日志查看器 v2.0 - PC端启动")
    print("=" * 60)
    
    # 配置
    HOST = '127.0.0.1'
    PORT = 8000
    URL = f'http://{HOST}:{PORT}'
    
    # 检查后端是否已经在运行
    print("[PC端] 检查后端服务状态...")
    if wait_for_server(HOST, PORT, timeout=2):
        print("[PC端] 检测到后端服务已运行，直接连接")
    else:
        print("[PC端] 后端服务未运行，正在启动...")
        backend_thread = threading.Thread(target=start_backend_server, daemon=True)
        backend_thread.start()
        
        # 等待后端服务就绪
        print("[PC端] 等待后端服务启动...")
        if not wait_for_server(HOST, PORT, timeout=10):
            print("[错误] 后端服务启动超时")
            print("[提示] 请手动启动后端服务:")
            print(f"        cd {BACKEND_DIR}")
            print("        python start_backend.py")
            return
    
    # 创建文件系统桥接
    api = FileSystemBridge()
    
    # 创建pywebview窗口
    print(f"[PC端] 创建窗口: {URL}")
    window = webview.create_window(
        '日志查看器 v2.0',
        URL,
        width=1400,
        height=900,
        resizable=True,
        frameless=False,  # 使用系统窗口框架
        js_api=api
    )
    
    # 使用Qt渲染引擎启动pywebview
    print("[PC端] 使用Qt引擎启动原生窗口...")
    
    try:
        # 使用Qt作为GUI引擎（需要PyQt6）
        webview.start(gui='qt', debug=False)
    except Exception as e:
        print(f"[警告] Qt引擎启动失败: {e}")
        print("[提示] 降级到浏览器模式...")
        
        import webbrowser
        webbrowser.open(URL)
        print(f"[成功] 浏览器已打开: {URL}")
        print("[提示] 后端服务正在运行，按Ctrl+C停止")
        print("")
        
        try:
            # 保持程序运行
            while True:
                time.sleep(1)
        except KeyboardInterrupt:
            print("\n[退出] 程序已停止")


if __name__ == '__main__':
    main()
