# 容器ID修复

## 问题描述
"返回调用链"按钮点击后显示错误：`[返回调用链] 未找到调用链容器`

## 根本原因
代码中使用了错误的容器ID：
- **错误ID**: `tree-container`
- **正确ID**: `trace-tree-view-container`

## 修复内容

### 修复的文件
1. **`code-block-ai.js`** - 代码块中的返回调用链按钮
2. **`trace_tree_view.js`** - 事件委托中的返回调用链按钮

### 修复代码

#### `code-block-ai.js` 第79行
```javascript
// 修复前
const treeContainer = document.getElementById('tree-container');

// 修复后  
const treeContainer = document.getElementById('trace-tree-view-container');
```

#### `trace_tree_view.js` 第632行
```javascript
// 修复前
var treeContainer = document.getElementById('tree-container');

// 修复后
var treeContainer = document.getElementById('trace-tree-view-container');
```

## 验证方法
1. 点击任意函数代码块旁边的"返回调用链"按钮
2. 检查控制台日志：
   - ✅ `[返回调用链] 已滚动到调用链视图`
   - ❌ `[返回调用链] 未找到调用链容器`

## 预期结果
修复后，点击"返回调用链"按钮应该：
1. 平滑滚动到调用链视图顶部
2. 调用链视图短暂高亮显示
3. 控制台显示成功日志

## 技术说明
`trace-tree-view-container` 是在 `buildTraceTreeView` 函数中定义的实际容器ID：
```javascript
var container = root.getElementById ? 
    root.getElementById('trace-tree-view-container') : 
    root.querySelector('#trace-tree-view-container');
```

这个简单的ID修复确保了"返回调用链"按钮能够正确找到目标容器并执行滚动操作。
