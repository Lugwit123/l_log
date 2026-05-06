@echo off
chcp 65001 >nul
echo ========================================
echo 日志查看器 v2.0 - PC端启动
echo ========================================
echo.

REM 切换到pcend目录
cd /d "%~dp0"

REM 使用项目的Python环境
set PYTHON_EXE=D:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\python_env\lugwit_python.exe

echo [启动] 正在启动PC端窗口...
echo [目录] %CD%
echo.

"%PYTHON_EXE%" main.py

if errorlevel 1 (
    echo.
    echo [错误] 启动失败
    pause
)
