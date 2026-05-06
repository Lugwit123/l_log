# Toast通知调试指南

## 问题描述
用户反馈点击"返回调用链"按钮后看不到toast通知。

## 排查步骤

### 1. 检查Toast系统是否加载
**检查项目**：
- ✅ `toast.js` 已在 `app.html.j2` 中加载
- ✅ `toast.css` 已在 `app.html.j2` 中加载
- ✅ `window.toast` 全局实例应该存在

**调试代码**：
```javascript
console.log('[返回调用链] 准备显示toast，window.toast存在:', !!window.toast);
```

### 2. 检查Toast调用
**调试代码**：
```javascript
if (window.toast) {
    console.log('[返回调用链] 调用toast.success');
    window.toast.success('已返回调用链视图');
    console.log('[返回调用链] toast.success已调用');
} else {
    console.log('[返回调用链] window.toast不存在，使用备用toast');
}
```

### 3. 备用Toast实现
如果主toast系统有问题，已添加备用实现：

```javascript
// 备用toast实现
const fallbackToast = document.createElement('div');
fallbackToast.textContent = '✓ 已返回调用链视图';
fallbackToast.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: #52c41a;
    color: white;
    padding: 12px 16px;
    border-radius: 4px;
    z-index: 99999;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    transform: translateX(400px);
`;
document.body.appendChild(fallbackToast);

// 触发动画
setTimeout(() => {
    fallbackToast.style.transform = 'translateX(0)';
}, 10);

// 自动移除
setTimeout(() => {
    fallbackToast.style.transform = 'translateX(400px)';
    setTimeout(() => {
        if (fallbackToast.parentNode) {
            fallbackToast.parentNode.removeChild(fallbackToast);
        }
    }, 300);
}, 3000);
```

## 可能的原因

### 1. CSS样式冲突
- **检查**：其他CSS是否覆盖了toast样式
- **解决**：备用toast使用更高的z-index (99999)

### 2. JavaScript加载顺序
- **检查**：toast.js是否在正确的时间加载
- **解决**：备用toast不依赖外部系统

### 3. 视口位置问题
- **检查**：toast是否在屏幕可视范围外
- **解决**：备用toast使用固定位置 (top: 80px, right: 20px)

### 4. 动画问题
- **检查**：CSS动画是否正常工作
- **解决**：备用toast使用简单的transform动画

## 测试验证

### 手动测试步骤
1. 打开浏览器开发者工具
2. 点击任意函数代码块旁边的"返回调用链"按钮
3. 查看控制台日志：
   - `[返回调用链] 点击代码块返回调用链按钮`
   - `[返回调用链] 已滚动到调用链视图`
   - `[返回调用链] 准备显示toast，window.toast存在: true/false`
   - `[返回调用链] 调用toast.success` 或 `[返回调用链] window.toast不存在，使用备用toast`

### 预期结果
- **主toast工作**：看到绿色toast通知
- **备用toast工作**：看到简单的绿色通知框
- **都不工作**：检查控制台错误信息

## 调试命令

### 在浏览器控制台中手动测试
```javascript
// 测试主toast系统
if (window.toast) {
    window.toast.success('测试toast');
} else {
    console.log('window.toast不存在');
}

// 测试备用toast
const testToast = document.createElement('div');
testToast.textContent = '✓ 测试备用toast';
testToast.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background: #52c41a;
    color: white;
    padding: 12px 16px;
    border-radius: 4px;
    z-index: 99999;
`;
document.body.appendChild(testToast);
setTimeout(() => testToast.remove(), 3000);
```

## 常见问题解决

### Q: 看不到任何toast
**A**: 检查控制台是否有JavaScript错误，可能是其他脚本阻止了toast执行

### Q: Toast被其他元素遮挡
**A**: 备用toast使用了z-index: 99999，应该显示在最顶层

### Q: Toast位置不对
**A**: 备用toast使用固定位置，不受页面滚动影响

### Q: Toast动画不工作
**A**: 备用toast使用简单的transform动画，兼容性更好

这个调试指南帮助快速定位和解决toast显示问题！
