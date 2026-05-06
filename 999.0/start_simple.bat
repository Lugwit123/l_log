@echo off
chcp 65001 >nul
echo ========================================
echo 日志查看器 v2.0
echo ========================================
echo.

echo [提示] 请确保已安装以下依赖：
echo   - Python 3.8+
echo   - PyQt6, pywebview, fastapi, uvicorn
echo   - Node.js 18+
echo.

echo [1/2] 启动Shiki语法高亮服务...
cd backend\shiki_service
if not exist node_modules (
    echo 正在安装Node.js依赖...
    call npm install
)
start /B cmd /c "npm start"
cd ..\..

echo [2/2] 等待3秒后启动主程序...
timeout /t 3 /nobreak >nul

echo 启动主程序...
python main.py

echo.
echo 程序已退出
pause
