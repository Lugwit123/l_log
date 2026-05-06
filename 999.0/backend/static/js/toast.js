// Toast 提示组件
class Toast {
    constructor() {
        this.container = null;
        this.init();
    }
    
    init() {
        // 创建toast容器
        this.container = document.createElement('div');
        this.container.className = 'toast-container';
        document.body.appendChild(this.container);
    }
    
    show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        const icon = this.getIcon(type);
        toast.innerHTML = `
            <span class="toast-icon">${icon}</span>
            <span class="toast-message">${message}</span>
        `;
        
        this.container.appendChild(toast);
        
        // 触发动画
        setTimeout(() => toast.classList.add('show'), 10);
        
        // 自动移除
        if (duration > 0) {
            setTimeout(() => this.hide(toast), duration);
        }
        
        return toast;
    }
    
    hide(toast) {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }
    
    getIcon(type) {
        const icons = {
            'success': '✓',
            'error': '✗',
            'warning': '⚠',
            'info': 'ℹ'
        };
        return icons[type] || icons.info;
    }
    
    success(message, duration = 3000) {
        return this.show(message, 'success', duration);
    }
    
    error(message, duration = 4000) {
        return this.show(message, 'error', duration);
    }
    
    warning(message, duration = 3000) {
        return this.show(message, 'warning', duration);
    }
    
    info(message, duration = 3000) {
        return this.show(message, 'info', duration);
    }
    
    confirm(message, onConfirm, onCancel) {
        const toast = document.createElement('div');
        toast.className = 'toast toast-confirm';
        
        toast.innerHTML = `
            <div class="toast-confirm-content">
                <span class="toast-icon">?</span>
                <span class="toast-message">${message}</span>
            </div>
            <div class="toast-confirm-buttons">
                <button class="toast-btn toast-btn-cancel">取消</button>
                <button class="toast-btn toast-btn-confirm">确定</button>
            </div>
        `;
        
        this.container.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 10);
        
        const confirmBtn = toast.querySelector('.toast-btn-confirm');
        const cancelBtn = toast.querySelector('.toast-btn-cancel');
        
        confirmBtn.addEventListener('click', () => {
            this.hide(toast);
            if (onConfirm) onConfirm();
        });
        
        cancelBtn.addEventListener('click', () => {
            this.hide(toast);
            if (onCancel) onCancel();
        });
        
        return toast;
    }
}

// 全局实例
window.toast = new Toast();
