@echo off

echo ========================================
echo 日志查看器 v2.0 - 后端服务
echo ========================================
echo.

@REM 切换到backend目录
cd /d "%~dp0"

@REM 使用项目的Python环境
set PYTHON_EXE=D:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\python_env\lugwit_python.exe

@REM 检查端口8000是否被占用
echo [检查] 检查端口8000占用情况...
netstat -ano | findstr ":8000" | findstr "LISTENING" >nul 2>&1
if %errorlevel% equ 0 (
    echo [发现] 端口8000已被占用，正在关闭旧进程...
    
    @REM 查找占用8000端口的进程ID
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":8000" ^| findstr "LISTENING"') do (
        echo [关闭] 正在终止进程 PID: %%a
        taskkill /F /PID %%a >nul 2>&1
    )
    
    @REM 额外尝试关闭所有lugwit_python.exe进程
    tasklist | findstr "lugwit_python.exe" >nul 2>&1
    if %errorlevel% equ 0 (
        echo [清理] 关闭所有旧的后端进程...
        taskkill /F /IM lugwit_python.exe >nul 2>&1
    )
    
    echo [等待] 等待端口释放...
    timeout /t 2 /nobreak >nul
    echo [完成] 旧进程已清理
    echo.
) else (
    echo [检查] 端口8000空闲，可以启动
    echo.
)

echo [后端] 正在启动FastAPI服务...
echo [目录] %CD%
echo.

@REM 设置日志目录（优先使用环境变量，否则用默认的 D:\Temp\Log）
if "%L_LOG_LOGS_DIR%"=="" set L_LOG_LOGS_DIR=D:\Temp\Log
echo [日志目录] %L_LOG_LOGS_DIR%
echo.

"%PYTHON_EXE%" start_backend.py

if errorlevel 1 (
    echo.
    echo [错误] 启动失败
    pause
)
