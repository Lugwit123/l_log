# 安装和运行指南

## 前置要求

1. **Python 3.8+** (推荐使用项目现有的Python环境)
2. **Node.js 18+** (用于Shiki语法高亮服务)

## 安装步骤

### 1. 安装Python依赖

打开命令提示符(cmd)或PowerShell，进入项目目录：

```bash
cd d:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\trayapp\Lib\l_log
```

安装依赖：

```bash
# 如果使用项目的Python环境
d:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\trayapp\python.exe -m pip install -r requirements.txt

# 或使用系统Python
python -m pip install -r requirements.txt
```

### 2. 安装Node.js依赖

```bash
cd backend\shiki_service
npm install
cd ..\..
```

## 运行方式

### 方式1：使用启动脚本（推荐）

双击运行 `start.bat`

### 方式2：手动启动

#### 步骤1：启动Shiki服务

打开第一个命令窗口：
```bash
cd backend\shiki_service
npm start
```

#### 步骤2：启动主程序

打开第二个命令窗口：
```bash
# 使用项目Python
d:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\trayapp\python.exe main.py

# 或使用系统Python
python main.py
```

### 方式3：仅启动后端服务（用于测试）

```bash
# 使用项目Python
d:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\trayapp\python.exe -m uvicorn backend.app:app --host 127.0.0.1 --port 8000

# 然后在浏览器访问
# http://localhost:8000
```

## 验证安装

运行测试脚本检查依赖：

```bash
python test_env.py
```

应该看到所有依赖都标记为 ✓

## 常见问题

### Q: 提示找不到模块
A: 确保使用正确的Python环境，项目Python位于：
   `d:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\trayapp\python.exe`

### Q: pywebview启动失败
A: Windows需要安装WebView2运行时，通常Windows 10/11已自带

### Q: 端口被占用
A: 修改 `backend/config.py` 中的端口号

### Q: Shiki服务启动失败
A: 确保Node.js已安装，运行 `node --version` 检查

## 目录说明

- `main.py` - 主程序入口
- `backend/` - FastAPI后端
- `start.bat` - Windows启动脚本
- `test_env.py` - 环境测试脚本
- `requirements.txt` - Python依赖列表
