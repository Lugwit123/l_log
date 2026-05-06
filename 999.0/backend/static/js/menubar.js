// 菜单栏管理
class MenuBar {
    constructor() {
        this.activeMenu = null;
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.loadSavedTheme();
    }
    
    loadSavedTheme() {
        // 从localStorage加载保存的主题
        const savedTheme = localStorage.getItem('prism-theme');
        if (savedTheme) {
            console.log(`[主题] 加载保存的主题: ${savedTheme}`);
            this.switchTheme(savedTheme);
        }
        
        // 加载AI助手窗口模式设置
        this.updateAIPopupModeText();
    }
    
    updateAIPopupModeText() {
        const isPopupMode = localStorage.getItem('ai-assistant-popup-mode') === 'true';
        const textElement = document.getElementById('ai-popup-mode-text');
        if (textElement) {
            textElement.textContent = isPopupMode ? 'AI助手：独立窗口 ✓' : 'AI助手：嵌入模式';
        }
    }
    
    bindEvents() {
        const menuItems = document.querySelectorAll('.menu-item');
        
        menuItems.forEach(item => {
            const label = item.querySelector('.menu-label');
            
            label.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleMenu(item);
            });
        });
        
        // 点击菜单选项
        document.querySelectorAll('.menu-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const action = option.dataset.action;
                this.handleAction(action);
                this.closeAllMenus();
            });
        });
        
        // 点击外部关闭菜单
        document.addEventListener('click', () => {
            this.closeAllMenus();
        });
    }
    
    toggleMenu(item) {
        if (this.activeMenu === item) {
            this.closeAllMenus();
        } else {
            this.closeAllMenus();
            item.classList.add('active');
            this.activeMenu = item;
        }
    }
    
    closeAllMenus() {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        this.activeMenu = null;
    }
    
    handleAction(action) {
        switch(action) {
            case 'open':
                if (window.fileListManager) {
                    window.fileListManager.openFile();
                }
                break;
            case 'export':
                if (window.tabManager) {
                    window.tabManager.exportCurrentLog();
                }
                break;
            case 'clear-cache':
                this.clearCache();
                break;
            case 'exit':
                window.close();
                break;
            case 'search':
                document.getElementById('search-input').focus();
                break;
            case 'find-next':
                if (window.searchManager) {
                    window.searchManager.findNext();
                }
                break;
            case 'find-prev':
                if (window.searchManager) {
                    window.searchManager.findPrev();
                }
                break;
            case 'toggle-sidebar':
                this.toggleSidebar();
                break;
            case 'toggle-toolbar':
                this.toggleToolbar();
                break;
            case 'refresh':
                location.reload();
                break;
            case 'settings':
                alert('设置功能开发中...');
                break;
            case 'api-docs':
            case 'docs':
                window.open('/docs', '_blank');
                break;
            case 'redoc':
                window.open('/redoc', '_blank');
                break;
            case 'help':
                if (window.helpModal) {
                    window.helpModal.open();
                }
                break;
            case 'about':
                alert('日志查看器 v2.0\n\n基于FastAPI + PyWebView构建\n支持Markdown日志渲染和调用链追踪可视化');
                break;
            case 'theme-vscode':
                this.switchTheme('vscode');
                break;
            case 'theme-onedark':
                this.switchTheme('onedark');
                break;
            case 'theme-dracula':
                this.switchTheme('dracula');
                break;
            case 'theme-monokai':
                this.switchTheme('monokai');
                break;
            case 'theme-nord':
                this.switchTheme('nord');
                break;
            case 'toggle-ai-popup':
                this.toggleAIPopupMode();
                break;
        }
    }
    
    toggleAIPopupMode() {
        const currentMode = localStorage.getItem('ai-assistant-popup-mode') === 'true';
        const newMode = !currentMode;
        
        localStorage.setItem('ai-assistant-popup-mode', String(newMode));
        this.updateAIPopupModeText();
        
        const modeText = newMode ? '独立窗口模式' : '嵌入模式';
        alert(`AI助手已切换到${modeText}\n\n下次打开AI助手时生效`);
    }
    
    switchTheme(themeName) {
        // 主题CSS映射
        const themes = {
            'vscode': 'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-vsc-dark-plus.min.css',
            'onedark': 'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-one-dark.min.css',
            'dracula': 'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-dracula.min.css',
            'monokai': 'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-material-dark.min.css',
            'nord': 'https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.9.0/prism-nord.min.css'
        };
        
        const themeUrl = themes[themeName];
        if (!themeUrl) return;
        
        // 移除旧的Prism主题
        const oldTheme = document.querySelector('link[href*="prism"]');
        if (oldTheme) {
            oldTheme.remove();
        }
        
        // 添加新主题
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = themeUrl;
        document.head.appendChild(link);
        
        // 保存到localStorage
        localStorage.setItem('prism-theme', themeName);
        
        // 重新高亮所有代码
        if (window.Prism) {
            Prism.highlightAll();
        }
        
        console.log(`[主题] 已切换到: ${themeName}`);
    }
    
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('collapsed');
        // 同步body类，用于控制展开按钮显示
        document.body.classList.toggle('sidebar-collapsed', sidebar.classList.contains('collapsed'));
    }
    
    toggleToolbar() {
        const toolbar = document.querySelector('.toolbar');
        toolbar.style.display = toolbar.style.display === 'none' ? 'flex' : 'none';
    }
    
    async clearCache() {
        if (confirm('确定要清理所有缓存的日志文件吗？')) {
            try {
                const res = await fetch('/api/cache/clear', { method: 'POST' });
                if (res.ok) {
                    alert('缓存已清理');
                    if (window.fileListManager) {
                        window.fileListManager.refresh();
                    }
                }
            } catch (error) {
                alert('清理失败: ' + error.message);
            }
        }
    }
}

// 初始化
const menuBar = new MenuBar();
