# 返回调用链按钮功能

## 功能描述
在代码块中添加"返回调用链"按钮，让用户在查看详细返回值时可以快速返回到调用链视图。

## 实现细节

### 1. 按钮位置
按钮位于返回值代码块的右上角，与"⬅️ 返回值:"标题在同一行：

```
┌─────────────────────────────────────────┐
│ ⬅️ 返回值:        [返回调用链]        │
│                                         │
│ (完整返回值内容)                        │
└─────────────────────────────────────────┘
```

### 2. 按钮样式
- **颜色**: 蓝色背景 (#1890ff)
- **大小**: 小尺寸 (font-size: 0.8em)
- **交互**: 悬停时变浅，点击时变深
- **动画**: 平滑过渡效果

### 3. 功能行为
点击按钮后：
1. **平滑滚动**: 自动滚动到调用链视图顶部
2. **视觉反馈**: 调用链视图短暂高亮显示
3. **控制台日志**: 记录操作行为

### 4. 技术实现

#### HTML结构
```html
<div class="return-value-block">
    <div style="display:flex;justify-content:space-between;align-items:center;">
        <div style="color:#888;font-size:0.85em;">⬅️ 返回值:</div>
        <button class="back-to-tree-btn" title="返回调用链视图">返回调用链</button>
    </div>
    <div style="color:#98c379;">返回值内容</div>
</div>
```

#### CSS样式
```css
.back-to-tree-btn {
    flex-shrink: 0 !important;
    padding: 2px 8px !important;
    font-size: 0.8em !important;
    background: #1890ff !important;
    color: white !important;
    border: none !important;
    border-radius: 3px !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
}
.back-to-tree-btn:hover {
    background: #40a9ff !important;
    transform: translateY(-1px) !important;
}
.back-to-tree-btn:active {
    background: #096dd9 !important;
    transform: translateY(0) !important;
}
```

#### JavaScript事件处理
```javascript
// 使用事件委托处理动态创建的按钮
container.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('back-to-tree-btn')) {
        e.stopPropagation();
        
        // 滚动到调用链视图
        var treeContainer = document.getElementById('tree-container');
        if (treeContainer) {
            treeContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            // 高亮效果
            setTimeout(function() {
                treeContainer.style.transition = 'background-color 0.3s';
                treeContainer.style.backgroundColor = 'rgba(24, 144, 255, 0.1)';
                setTimeout(function() {
                    treeContainer.style.backgroundColor = '';
                }, 1000);
            }, 500);
        }
    }
});
```

## 用户体验

### 使用场景
1. 用户在调用链中点击"展开"按钮查看完整返回值
2. 查看完详细的返回值后，想要返回调用链继续浏览
3. 点击"返回调用链"按钮，快速返回到调用链视图

### 优势
- **便捷性**: 一键返回，无需手动滚动
- **视觉提示**: 高亮效果帮助用户定位
- **一致性**: 与整体UI风格保持一致
- **响应性**: 平滑动画提升用户体验

## 兼容性
- 支持动态创建的代码块（使用事件委托）
- 兼容现有的返回值展开功能
- 不影响其他按钮的正常工作

## 测试建议
1. 展开多个返回值代码块
2. 测试每个"返回调用链"按钮的功能
3. 验证滚动和高亮效果
4. 确认按钮样式和交互正常

## 未来改进
- 可以考虑添加快捷键支持
- 可以记录用户的浏览历史
- 可以添加"返回上一个位置"功能
