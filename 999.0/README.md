# 日志查看器 v2.0

基于 PyQt6 + pywebview + FastAPI 的现代化日志查看器。

## 特性

- ✅ **轻量级**: 使用 pywebview 6.1，体积小，启动快
- ✅ **标签页管理**: Web端多日志文件标签页切换
- ✅ **语法高亮**: Shiki 高质量代码高亮
- ✅ **跨平台**: Windows/macOS/Linux
- ✅ **移动端友好**: 响应式设计
- ✅ **系统集成**: PyQt托盘、菜单、文件对话框

## 技术栈

### 后端
- **FastAPI**: Web服务框架
- **Shiki**: 语法高亮（Node.js微服务）
- **Jinja2**: 模板引擎

### 前端
- **HTML/CSS/JS**: 标签页和UI
- **复用组件**: trace_tree_view.js, function_call_highlight.js

### 桌面
- **PyQt6**: 系统托盘和菜单
- **pywebview 6.1**: Web视图

## 安装

### 1. Python依赖
```bash
pip install -r requirements.txt
```

### 2. Node.js依赖
```bash
cd backend/shiki_service
npm install
```

## 运行

### Windows
```bash
start.bat
```

### 手动启动

#### 1. 启动Shiki服务
```bash
cd backend/shiki_service
npm start
```

#### 2. 启动主程序
```bash
python main.py
```

## 目录结构

```
Lib/l_log/
├── main.py              # 主程序入口
├── backend/             # FastAPI后端
│   ├── app.py           # FastAPI应用
│   ├── parser.py        # 日志解析
│   ├── config.py        # 配置
│   ├── shiki_service/   # Shiki微服务
│   ├── static/          # 静态资源
│   │   ├── css/         # CSS文件
│   │   └── js/          # JavaScript文件
│   ├── templates/       # HTML模板
│   └── logs_cache/      # 日志缓存
├── requirements.txt     # Python依赖
├── start.bat            # 启动脚本
└── README.md            # 说明文档
```

## 使用说明

1. **启动应用**: 运行 `start.bat` 或 `python main.py`
2. **上传日志**: 点击 "+" 按钮选择日志文件
3. **查看日志**: 在标签页中查看日志内容
4. **切换标签**: 点击标签页头部切换
5. **关闭标签**: 点击标签页的 "×" 按钮

## pywebview 6.1 新特性

- **WebView2打包**: 可将WebView2运行时打包到应用
- **拖拽控制**: 精确控制窗口拖拽区域
- **状态管理**: Python-JavaScript自动状态同步
- **网络监听**: 监控HTTP请求和响应

## 与旧版本的关系

- **完全隔离**: 新版本在 `Lib/l_log`，旧版本在 `src/l_log`
- **资源复用**: 复用JavaScript和CSS资源
- **并行运行**: 可同时运行新旧版本对比

## 开发

### 添加新功能
1. 后端API: 编辑 `backend/app.py`
2. 前端UI: 编辑 `backend/templates/` 和 `backend/static/`
3. 解析逻辑: 编辑 `backend/parser.py`

### 调试
- FastAPI文档: http://localhost:8000/docs
- Shiki服务: http://localhost:3000/health

## 许可证

内部使用
