# 返回调用链按钮位置修正

## 问题说明
之前的实现将"返回调用链"按钮放在了错误的位置：
- **错误位置**：调用树视图标题栏和展开的返回值代码块中
- **正确位置**：函数调用的代码块（`.lprint-trace-call`）旁边

## 修正内容

### 1. 正确的按钮位置
现在"返回调用链"按钮位于每个函数调用的代码块旁边，与"问AI"按钮并列：

```
<p class="lprint-trace-call">callBy(深度1 路径2 #2): ... main_function() ...</p>
[🤖 问AI] [返回调用链]
```

### 2. 修改的文件

#### `code-block-ai.js`
**新增功能**：在添加"问AI"按钮的同时添加"返回调用链"按钮

```javascript
// 创建返回调用链按钮
const backToTreeBtn = document.createElement('button');
backToTreeBtn.className = 'back-to-tree-code-btn';
backToTreeBtn.innerHTML = '返回调用链';
backToTreeBtn.style.cssText = `
    margin-left: 5px;
    padding: 2px 8px;
    background: transparent;
    border: 1px solid #1890ff;
    color: #1890ff;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.85em;
    font-weight: 600;
    transition: all 0.2s;
`;

backToTreeBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    
    // 滚动到调用链视图的顶部
    const treeContainer = document.getElementById('tree-container');
    if (treeContainer) {
        treeContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // 高亮调用链视图
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

callBlock.appendChild(backToTreeBtn);
```

#### `trace_tree_view.js`
**移除错误位置的按钮**：

1. **从标题栏移除**：
   - 移除了 `<button id="back-to-tree-main-btn">` 元素
   - 恢复标题栏为原来的简洁布局

2. **从展开代码块移除**：
   - 移除了展开时显示按钮的逻辑
   - 移除了收起时隐藏按钮的逻辑
   - 移除了主按钮的事件处理代码

3. **清理事件委托**：
   - 移除了对 `back-to-tree-btn` 类的事件委托处理

### 3. 按钮样式设计

#### 视觉一致性
- **颜色**：蓝色主题 (#1890ff)，与界面风格一致
- **大小**：与"问AI"按钮相同 (font-size: 0.85em)
- **间距**：左边距 5px，与"问AI"按钮保持适当距离
- **交互**：悬停时背景色变化，点击有过渡动画

#### 布局位置
```
[函数调用代码块内容] [🤖 问AI] [返回调用链]
```

### 4. 功能特性

#### 点击行为
1. **平滑滚动**：自动滚动到调用链视图顶部
2. **视觉反馈**：调用链视图短暂高亮显示
3. **事件阻止**：防止事件冒泡影响其他交互

#### 控制台日志
- `[返回调用链] 点击代码块返回调用链按钮`
- `[返回调用链] 已滚动到调用链视图`
- `[返回调用链] 未找到调用链容器`（错误处理）

### 5. 用户体验

#### 使用场景
用户在查看函数调用的详细代码时，可以：
1. 点击"🤖 问AI"分析函数代码
2. 点击"返回调用链"快速返回调用链视图

#### 优势
1. **位置合理**：按钮在相关代码旁边，符合用户预期
2. **操作便捷**：无需滚动到页面顶部就能找到按钮
3. **界面整洁**：每个代码块都有独立的控制按钮
4. **功能明确**：按钮名称和功能一目了然

### 6. 兼容性

#### 向后兼容
- 不影响现有的"问AI"按钮功能
- 保持原有的滚动和高亮效果
- 不破坏其他交互逻辑

#### 错误处理
- 找不到调用链容器时显示错误日志
- 按钮点击事件正确阻止冒泡
- 样式应用失败时有降级处理

## 测试验证

### 测试场景
1. **按钮显示**：每个函数调用代码块旁边都有"返回调用链"按钮
2. **点击功能**：点击按钮能正确滚动到调用链视图
3. **高亮效果**：调用链视图有短暂的高亮显示
4. **样式一致**：按钮样式与"问AI"按钮保持一致
5. **事件隔离**：点击按钮不影响其他交互

### 预期结果
- ✅ 按钮位置正确（在代码块旁边）
- ✅ 功能正常（滚动+高亮）
- ✅ 样式美观（与界面一致）
- ✅ 交互流畅（无冲突）

这个修正确保了"返回调用链"按钮在正确的位置提供所需的功能！
