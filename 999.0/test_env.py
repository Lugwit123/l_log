"""
测试环境和依赖
"""
import sys
print("Python版本:", sys.version)
print("Python路径:", sys.executable)

# 测试导入
try:
    from PyQt6.QtWidgets import QApplication
    print("✓ PyQt6 已安装")
except ImportError as e:
    print("✗ PyQt6 未安装:", e)

try:
    import webview
    print("✓ pywebview 已安装, 版本:", webview.__version__)
except ImportError as e:
    print("✗ pywebview 未安装:", e)

try:
    import fastapi
    print("✓ FastAPI 已安装")
except ImportError as e:
    print("✗ FastAPI 未安装:", e)

try:
    import uvicorn
    print("✓ uvicorn 已安装")
except ImportError as e:
    print("✗ uvicorn 未安装:", e)

try:
    import jinja2
    print("✓ jinja2 已安装")
except ImportError as e:
    print("✗ jinja2 未安装:", e)

print("\n如果有缺失的包，请运行:")
print("python -m pip install pywebview fastapi uvicorn jinja2")
