# 完整Web界面迁移方案

## 目标

将PyQt日志查看器的完整界面迁移到Web端，包括：
- 左侧文件列表面板
- 顶部菜单栏和工具栏
- 搜索和过滤功能
- 右侧内容区域（标签页+日志显示）
- 使用pywebview作为PC端窗口容器

## 界面布局

```
┌─────────────────────────────────────────────────────────┐
│  菜单栏: 文件(F) | 编辑(E) | 视图(V) | 工具(T)           │
├─────────────────────────────────────────────────────────┤
│  工具栏: 搜索框 | 过滤选项 | 导出按钮 | 设置按钮        │
├──────────┬──────────────────────────────────────────────┤
│          │  标签页: [test_trace_simple.md] [+]          │
│  文件    ├──────────────────────────────────────────────┤
│  列表    │                                              │
│          │                                              │
│  📄 file1│          日志内容显示区域                     │
│  📄 file2│                                              │
│  📄 file3│                                              │
│          │                                              │
│          │                                              │
└──────────┴──────────────────────────────────────────────┘
```

## 实施步骤

### 1. 后端API扩展

#### 新增API接口
```python
GET  /api/files              # 获取文件列表
GET  /api/files/{path}       # 获取指定目录的文件
POST /api/files/open         # 打开文件
POST /api/files/export       # 导出文件
GET  /api/search?q=xxx       # 搜索日志内容
```

### 2. 前端组件

#### 2.1 文件列表组件 (file-list.js)
- 显示日志文件树
- 文件选择和高亮
- 文件大小和时间显示
- 右键菜单（打开、导出、删除）

#### 2.2 菜单栏组件 (menubar.js)
- 文件菜单：打开、导出、退出
- 编辑菜单：搜索、替换
- 视图菜单：显示/隐藏面板
- 工具菜单：设置、清理缓存

#### 2.3 工具栏组件 (toolbar.js)
- 搜索框（实时搜索）
- 过滤选项（正则表达式、大小写）
- 导出按钮
- 设置按钮

#### 2.4 搜索组件 (search.js)
- 全文搜索
- 正则表达式支持
- 结果高亮
- 上一个/下一个导航

### 3. CSS样式

#### 3.1 布局样式 (layout.css)
- 三栏布局（菜单栏、侧边栏、内容区）
- 可调整侧边栏宽度
- 响应式设计

#### 3.2 文件列表样式 (file-list.css)
- 文件图标
- 选中状态
- 悬停效果

#### 3.3 菜单栏样式 (menubar.css)
- 下拉菜单
- 快捷键显示
- 分隔线

### 4. pywebview集成

#### 4.1 简化main.py
```python
import webview
from backend import config

def main():
    # 启动FastAPI后端（后台线程）
    start_backend()
    
    # 创建pywebview窗口
    window = webview.create_window(
        '日志查看器 v2.0',
        f'http://{config.HOST}:{config.PORT}',
        width=1400,
        height=900,
        resizable=True,
        frameless=False  # 使用系统窗口框架
    )
    
    webview.start(gui='edgechromium')

if __name__ == '__main__':
    main()
```

#### 4.2 Python-JavaScript桥接
```python
class FileSystemBridge:
    def select_file(self):
        """打开文件选择对话框"""
        return QFileDialog.getOpenFileName()
    
    def select_folder(self):
        """打开文件夹选择对话框"""
        return QFileDialog.getExistingDirectory()
    
    def export_file(self, content, filename):
        """导出文件"""
        path = QFileDialog.getSaveFileName()
        with open(path, 'w') as f:
            f.write(content)
```

### 5. 功能对比

| 功能 | PyQt版本 | Web版本 | 状态 |
|------|---------|---------|------|
| 文件列表 | QTreeWidget | HTML+CSS+JS | ✅ 计划中 |
| 标签页 | QTabWidget | 已实现 | ✅ 已完成 |
| 菜单栏 | QMenuBar | HTML菜单 | ✅ 计划中 |
| 搜索 | QLineEdit | HTML输入框 | ✅ 计划中 |
| 日志显示 | QWebEngineView | Markdown渲染 | ✅ 已完成 |
| 文件对话框 | QFileDialog | pywebview桥接 | ✅ 计划中 |
| 系统托盘 | QSystemTrayIcon | 移除 | ⚠️ 可选 |

### 6. 优势

#### Web版本优势
- ✅ 跨平台一致性
- ✅ 更容易维护和更新
- ✅ 可以直接在浏览器中使用
- ✅ 移动端友好
- ✅ 更现代的UI/UX

#### pywebview优势
- ✅ 原生窗口体验
- ✅ 文件系统访问
- ✅ 系统集成（可选）
- ✅ 轻量级（vs QWebEngine）

### 7. 实施优先级

#### 阶段1：核心界面（1-2小时）
- [x] 创建完整布局HTML
- [ ] 实现文件列表组件
- [ ] 实现菜单栏
- [ ] 集成现有标签页功能

#### 阶段2：交互功能（1-2小时）
- [ ] 实现搜索功能
- [ ] 实现文件操作
- [ ] Python-JS桥接

#### 阶段3：优化和测试（1小时）
- [ ] 性能优化
- [ ] 样式调整
- [ ] 功能测试

## 技术栈

- **后端**: FastAPI + Python 3.11
- **前端**: HTML5 + CSS3 + Vanilla JavaScript
- **桌面**: pywebview 6.1
- **渲染**: Markdown库
- **主题**: 暗色主题（已完成）

## 开始实施？

确认后我将开始实施，预计2-4小时完成完整迁移。
