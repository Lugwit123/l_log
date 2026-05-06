# PC端启动器

## 说明

这个目录包含PC端的pywebview启动器代码，用于创建原生窗口来显示Web界面。

## 文件结构

```
pcend/
├── __init__.py          # 包初始化
├── main.py              # 主程序（pywebview启动器）
├── start.bat            # Windows启动脚本
└── README.md            # 本文件
```

## 功能特性

### 1. pywebview窗口
- 使用EdgeChromium渲染器
- 原生窗口体验
- 系统窗口框架（最小化、最大化、关闭）

### 2. Python-JavaScript桥接
提供以下API供Web端调用：
- `select_file()` - 打开文件选择对话框
- `select_folder()` - 打开文件夹选择对话框
- `save_file(content, default_name)` - 保存文件对话框

### 3. 后端服务管理
- 自动启动FastAPI后端（后台线程）
- 等待服务就绪
- 自动连接到后端

## 使用方法

### 方式1：使用启动脚本（推荐）
双击运行 `start.bat`

### 方式2：命令行启动
```bash
cd D:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\trayapp\Lib\l_log\pcend
D:\TD_Depot\Software\Lugwit_syncPlug\lugwit_insapp\python_env\lugwit_python.exe main.py
```

### 方式3：Python启动
```python
import sys
sys.path.append('D:/TD_Depot/Software/Lugwit_syncPlug/lugwit_insapp/trayapp/Lib/l_log/pcend')
from main import main
main()
```

## 依赖要求

### Python包
- pywebview >= 6.1
- PyQt6（用于文件对话框）
- uvicorn
- fastapi

### 系统要求
- Windows 10/11
- WebView2运行时（通常已预装）

## 配置

默认配置在 `main.py` 中：
```python
HOST = '127.0.0.1'
PORT = 8000
```

如需修改，编辑 `main.py` 文件。

## JavaScript调用示例

在Web端JavaScript中调用PC端功能：

```javascript
// 选择文件
async function openFile() {
    const filename = await window.pywebview.api.select_file();
    if (filename) {
        console.log('选择的文件:', filename);
        // 处理文件...
    }
}

// 保存文件
async function saveFile() {
    const content = "文件内容...";
    const filename = await window.pywebview.api.save_file(content, 'export.txt');
    if (filename) {
        console.log('文件已保存:', filename);
    }
}
```

## 故障排除

### 问题1：pywebview启动失败
**解决方案**：
- 确保已安装pywebview 6.1+
- 检查WebView2运行时是否安装
- 查看错误信息，可能需要安装.NET运行时

### 问题2：后端服务启动超时
**解决方案**：
- 检查端口8000是否被占用
- 查看backend目录是否存在
- 确认Python依赖已安装

### 问题3：文件对话框无法打开
**解决方案**：
- 确保已安装PyQt6
- 检查是否有权限访问文件系统

## 与Web端的关系

```
┌─────────────────────────────────────────┐
│  PC端 (pcend/main.py)                   │
│  ├─ pywebview窗口                       │
│  ├─ 启动后端服务                        │
│  └─ 提供文件系统桥接                    │
└─────────────────┬───────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────┐
│  后端 (backend/)                        │
│  ├─ FastAPI服务                         │
│  ├─ 日志解析                            │
│  └─ 静态文件服务                        │
└─────────────────┬───────────────────────┘
                  │
                  ↓
┌─────────────────────────────────────────┐
│  Web界面 (backend/templates/)           │
│  ├─ HTML模板                            │
│  ├─ CSS样式                             │
│  └─ JavaScript逻辑                      │
└─────────────────────────────────────────┘
```

## 开发说明

### 添加新的桥接API
在 `FileSystemBridge` 类中添加新方法：

```python
class FileSystemBridge:
    def your_new_api(self, param1, param2):
        """新的API功能"""
        # 实现代码
        return result
```

然后在Web端调用：
```javascript
const result = await window.pywebview.api.your_new_api(param1, param2);
```

## 版本信息

- **版本**：2.0.0
- **最后更新**：2026-03-15
- **Python版本**：3.11+
- **pywebview版本**：6.1+

## 许可

与主项目相同
