# 返回调用链按钮位置调整

## 修改描述
将"返回调用链"按钮从代码块内部移动到调用树视图标题栏中"问AI"按钮的右边。

## 修改前后对比

### 修改前
按钮位于每个展开的代码块右上角：
```
┌─────────────────────────────────────────┐
│ ⬅️ 返回值:        [返回调用链]        │
│                                         │
│ (返回值内容)                            │
└─────────────────────────────────────────┘
```

### 修改后
按钮位于调用树视图标题栏：
```
┌─────────────────────────────────────────────────────────┐
│ [▶] 📂 调用树视图  [🤖 问AI]  [返回调用链]            │
├─────────────────────────────────────────────────────────┤
│ 调用树内容...                                           │
└─────────────────────────────────────────────────────────┘
```

展开的代码块现在更简洁：
```
┌─────────────────────────────────────────┐
│ 函数调用详情                            │
│                                         │
│ ⬅️ 函数参数:                           │
│ x=1, data=[1, 2, 3, 4, 5]             │
│                                         │
│ ⬅️ 返回值:                             │
│ 25                                     │
└─────────────────────────────────────────┘
```

## 技术实现

### 1. HTML结构调整

#### 调用树视图标题栏
```html
<div style="display:flex;align-items:center;gap:10px;">
    <button id="toggle-tree-view-btn">▶/▼</button>
    <h3>📂 调用树视图</h3>
    <button id="ask-ai-tree-btn">🤖 问AI</button>
    <button id="back-to-tree-main-btn" style="display:none;">返回调用链</button>
</div>
```

#### 代码块结构简化
```html
<div class="return-value-block">
    <div style="color:#aaa;font-size:0.9em;font-weight:500;margin-bottom:4px;">
        函数调用详情
    </div>
    <div style="color:#888;font-size:0.85em;margin-bottom:4px;">⬅️ 函数参数:</div>
    <div style="color:#61afef;margin-bottom:8px;">参数内容</div>
    <div style="color:#888;font-size:0.85em;margin-bottom:4px;">⬅️ 返回值:</div>
    <div style="color:#98c379;">返回值内容</div>
</div>
```

### 2. 按钮显示逻辑

#### 展开时显示按钮
```javascript
// 显示"返回调用链"按钮
var backToTreeMainBtn = document.getElementById('back-to-tree-main-btn');
if (backToTreeMainBtn) {
    backToTreeMainBtn.style.display = 'inline-block';
    console.log('[展开] 显示返回调用链按钮');
}
```

#### 收起时隐藏按钮
```javascript
// 检查是否还有其他展开的代码块
var remainingBlocks = container.querySelectorAll('.return-value-block');
if (remainingBlocks.length === 0) {
    var backToTreeMainBtn = document.getElementById('back-to-tree-main-btn');
    if (backToTreeMainBtn) {
        backToTreeMainBtn.style.display = 'none';
        console.log('[收起] 隐藏返回调用链按钮（无展开的代码块）');
    }
}
```

### 3. 事件处理

#### 主按钮点击事件
```javascript
var backToTreeMainBtn = container.querySelector('#back-to-tree-main-btn');
if (backToTreeMainBtn) {
    backToTreeMainBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        // 滚动到调用链视图的顶部
        var treeContainer = document.getElementById('tree-container');
        if (treeContainer) {
            treeContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // 高亮效果
        setTimeout(function() {
            if (treeContainer) {
                treeContainer.style.transition = 'background-color 0.3s';
                treeContainer.style.backgroundColor = 'rgba(24, 144, 255, 0.1)';
                setTimeout(function() {
                    treeContainer.style.backgroundColor = '';
                }, 1000);
            }
        }, 500);
    });
}
```

## 用户体验改进

### 优势
1. **界面更简洁**：代码块专注于显示内容，没有多余的按钮
2. **位置更合理**：返回按钮在全局标题栏，更符合用户预期
3. **状态更清晰**：按钮的显示/隐藏直接反映是否有展开的代码块
4. **操作更便捷**：固定位置的按钮更容易点击

### 交互流程
1. 用户点击返回值"展开"按钮
2. 代码块展开，同时标题栏显示"返回调用链"按钮
3. 用户可以点击"返回调用链"按钮快速返回顶部
4. 当所有代码块都收起时，按钮自动隐藏

### 视觉设计
- **按钮样式**：与"问AI"按钮保持一致的设计风格
- **显示逻辑**：只在有展开内容时显示，避免界面混乱
- **动画效果**：平滑滚动和高亮效果提供良好的视觉反馈

## 兼容性
- 保持原有的滚动和高亮功能
- 不影响"问AI"按钮的正常使用
- 向后兼容，不破坏现有功能

## 测试场景
1. **展开单个代码块**：按钮显示，点击可返回顶部
2. **展开多个代码块**：按钮保持显示
3. **收起所有代码块**：按钮自动隐藏
4. **部分收起**：只要有展开的代码块就保持显示

这个调整让界面更加整洁和用户友好！
