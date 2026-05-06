// 自定义右键菜单系统
class ContextMenu {
    constructor() {
        this.menuElement = null;
        this.currentTarget = null;
        this.init();
    }

    init() {
        this.createMenu();
        this.bindEvents();
    }

    createMenu() {
        const menuHTML = `
            <div id="custom-context-menu" class="context-menu" style="display: none;">
                <div class="context-menu-items"></div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', menuHTML);
        this.menuElement = document.getElementById('custom-context-menu');
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            .context-menu {
                position: fixed;
                background: #2d2d2d;
                border: 1px solid #3c3c3c;
                border-radius: 6px;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
                z-index: 99999;
                min-width: 200px;
                padding: 4px 0;
                font-size: 20px;
            }
            
            .context-menu-item {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 8px 16px;
                color: #d4d4d4;
                cursor: pointer;
                transition: all 0.15s;
                user-select: none;
            }
            
            .context-menu-item:hover {
                background: #094771;
                color: #fff;
            }
            
            .context-menu-item.disabled {
                color: #666;
                cursor: not-allowed;
            }
            
            .context-menu-item.disabled:hover {
                background: transparent;
                color: #666;
            }
            
            .context-menu-separator {
                height: 1px;
                background: #3c3c3c;
                margin: 4px 0;
            }
            
            .context-menu-icon {
                width: 16px;
                text-align: center;
                font-size: 14px;
            }
            
            .context-menu-label {
                flex: 1;
            }
            
            .context-menu-shortcut {
                color: #999;
                font-size: 0.85em;
                margin-left: 20px;
            }
        `;
        document.head.appendChild(style);
    }

    bindEvents() {
        // 阻止默认右键菜单
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this.show(e);
        });
        
        // 点击其他地方关闭菜单
        document.addEventListener('click', (e) => {
            if (!this.menuElement.contains(e.target)) {
                this.hide();
            }
        });
        
        // ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hide();
            }
        });
        
        // 滚动时关闭
        document.addEventListener('scroll', () => {
            this.hide();
        }, true);
    }

    show(event) {
        const target = event.target;
        this.currentTarget = target;
        
        // 获取上下文相关的菜单项
        const menuItems = this.getMenuItems(target);
        
        if (menuItems.length === 0) {
            return; // 没有菜单项就不显示
        }
        
        // 渲染菜单项
        const itemsContainer = this.menuElement.querySelector('.context-menu-items');
        itemsContainer.innerHTML = menuItems.map(item => {
            if (item.type === 'separator') {
                return '<div class="context-menu-separator"></div>';
            }
            
            const disabled = item.disabled ? ' disabled' : '';
            const icon = item.icon ? `<span class="context-menu-icon">${item.icon}</span>` : '<span class="context-menu-icon"></span>';
            const shortcut = item.shortcut ? `<span class="context-menu-shortcut">${item.shortcut}</span>` : '';
            
            return `
                <div class="context-menu-item${disabled}" data-action="${item.action || ''}">
                    ${icon}
                    <span class="context-menu-label">${item.label}</span>
                    ${shortcut}
                </div>
            `;
        }).join('');
        
        // 绑定菜单项点击事件
        itemsContainer.querySelectorAll('.context-menu-item:not(.disabled)').forEach(item => {
            item.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                if (action) {
                    this.handleAction(action, target);
                }
                this.hide();
            });
        });
        
        // 显示菜单
        this.menuElement.style.display = 'block';
        
        // 计算位置（确保不超出屏幕）
        let x = event.clientX;
        let y = event.clientY;
        
        const menuRect = this.menuElement.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        if (x + menuRect.width > windowWidth) {
            x = windowWidth - menuRect.width - 5;
        }
        
        if (y + menuRect.height > windowHeight) {
            y = windowHeight - menuRect.height - 5;
        }
        
        this.menuElement.style.left = x + 'px';
        this.menuElement.style.top = y + 'px';
    }

    hide() {
        this.menuElement.style.display = 'none';
        this.currentTarget = null;
    }

    getMenuItems(target) {
        const items = [];
        
        // 检测上下文类型
        const isCode = target.closest('code, pre');
        const isTreeNode = target.closest('.tree-node-content');
        const isTraceCall = target.closest('.lprint-trace-call');
        const isLogContent = target.closest('.log-content');
        const hasSelection = window.getSelection().toString().length > 0;
        
        // 通用菜单项
        if (hasSelection) {
            items.push({
                icon: '📋',
                label: '复制',
                action: 'copy',
                shortcut: 'Ctrl+C'
            });
            items.push({
                icon: '🔍',
                label: '搜索选中内容',
                action: 'search-selection'
            });
            items.push({ type: 'separator' });
        }
        
        // 代码块特定菜单
        if (isCode) {
            items.push({
                icon: '📄',
                label: '复制代码',
                action: 'copy-code'
            });
            items.push({
                icon: '🤖',
                label: '让AI分析',
                action: 'ask-ai-code'
            });
            items.push({ type: 'separator' });
        }
        
        // 调用树节点特定菜单
        if (isTreeNode) {
            items.push({
                icon: '🎯',
                label: '定位到代码',
                action: 'goto-code'
            });
            items.push({
                icon: '📊',
                label: '展开所有子节点',
                action: 'expand-children'
            });
            items.push({
                icon: '📁',
                label: '收缩所有子节点',
                action: 'collapse-children'
            });
            items.push({ type: 'separator' });
        }
        
        // 函数调用特定菜单
        if (isTraceCall) {
            items.push({
                icon: '🤖',
                label: '让AI分析此函数',
                action: 'ask-ai-function'
            });
            items.push({ type: 'separator' });
        }
        
        // 通用操作
        items.push({
            icon: '🔄',
            label: '刷新页面',
            action: 'refresh',
            shortcut: 'F5'
        });
        
        items.push({
            icon: '🔍',
            label: '查找',
            action: 'find',
            shortcut: 'Ctrl+F'
        });
        
        // 开发者工具
        items.push({ type: 'separator' });
        items.push({
            icon: '🔧',
            label: '检查元素',
            action: 'inspect',
            shortcut: 'F12'
        });
        
        return items;
    }

    handleAction(action, target) {
        switch (action) {
            case 'copy':
                this.copySelection();
                break;
                
            case 'copy-code':
                this.copyCode(target);
                break;
                
            case 'search-selection':
                this.searchSelection();
                break;
                
            case 'ask-ai-code':
                this.askAIAboutCode(target);
                break;
                
            case 'ask-ai-function':
                this.askAIAboutFunction(target);
                break;
                
            case 'goto-code':
                this.gotoCode(target);
                break;
                
            case 'expand-children':
                this.expandChildren(target);
                break;
                
            case 'collapse-children':
                this.collapseChildren(target);
                break;
                
            case 'refresh':
                location.reload();
                break;
                
            case 'find':
                document.getElementById('search-input')?.focus();
                break;
                
            case 'inspect':
                console.log('检查元素（需要浏览器开发者工具支持）');
                break;
        }
    }

    copySelection() {
        const selection = window.getSelection().toString();
        navigator.clipboard.writeText(selection).then(() => {
            this.showToast('✓ 已复制');
        });
    }

    copyCode(target) {
        const codeElement = target.closest('code, pre');
        if (codeElement) {
            const code = codeElement.textContent;
            navigator.clipboard.writeText(code).then(() => {
                this.showToast('✓ 代码已复制');
            });
        }
    }

    searchSelection() {
        const selection = window.getSelection().toString();
        if (selection && document.getElementById('search-input')) {
            document.getElementById('search-input').value = selection;
            document.getElementById('search-input').dispatchEvent(new Event('input'));
        }
    }

    askAIAboutCode(target) {
        const codeElement = target.closest('code, pre');
        if (codeElement && window.aiAssistant) {
            const code = codeElement.textContent;
            window.aiAssistant.open({
                type: 'code',
                content: code
            });
        }
    }

    askAIAboutFunction(target) {
        const callElement = target.closest('.lprint-trace-call');
        if (callElement) {
            // 触发code-block-ai.js中的逻辑
            const aiBtn = callElement.querySelector('.ask-ai-code-btn');
            if (aiBtn) {
                aiBtn.click();
            }
        }
    }

    gotoCode(target) {
        const nodeContent = target.closest('.tree-node-content');
        if (nodeContent) {
            nodeContent.click();
        }
    }

    expandChildren(target) {
        const treeNode = target.closest('.tree-node');
        if (treeNode) {
            const children = treeNode.querySelectorAll('.tree-children');
            children.forEach(child => child.classList.remove('collapsed'));
            const toggles = treeNode.querySelectorAll('.tree-toggle');
            toggles.forEach(toggle => toggle.classList.remove('collapsed'));
        }
    }

    collapseChildren(target) {
        const treeNode = target.closest('.tree-node');
        if (treeNode) {
            const children = treeNode.querySelectorAll('.tree-children');
            children.forEach(child => child.classList.add('collapsed'));
            const toggles = treeNode.querySelectorAll('.tree-toggle');
            toggles.forEach(toggle => toggle.classList.add('collapsed'));
        }
    }

    showToast(message) {
        if (window.toast) {
            window.toast.show(message);
        } else {
            // 简单的提示
            const toast = document.createElement('div');
            toast.textContent = message;
            toast.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: #1890ff;
                color: white;
                padding: 12px 20px;
                border-radius: 6px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                z-index: 100000;
                font-size: 14px;
            `;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 2000);
        }
    }
}

// 初始化自定义右键菜单
window.contextMenu = new ContextMenu();
