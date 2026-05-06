// 应用主逻辑
class App {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupResizer();
        this.setupKeyboardShortcuts();
    }
    
    setupResizer() {
        const resizer = document.getElementById('resizer');
        const sidebar = document.getElementById('sidebar');
        let isResizing = false;
        
        resizer.addEventListener('mousedown', (e) => {
            isResizing = true;
            document.body.style.cursor = 'col-resize';
            document.body.style.userSelect = 'none';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isResizing) return;
            
            const newWidth = e.clientX;
            if (newWidth >= 150 && newWidth <= 500) {
                sidebar.style.width = newWidth + 'px';
            }
        });
        
        document.addEventListener('mouseup', () => {
            if (isResizing) {
                isResizing = false;
                document.body.style.cursor = '';
                document.body.style.userSelect = '';
            }
        });
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+O - 打开文件
            if (e.ctrlKey && e.key === 'o') {
                e.preventDefault();
                if (window.fileListManager) {
                    window.fileListManager.openFile();
                }
            }
            
            // Ctrl+F - 搜索
            if (e.ctrlKey && e.key === 'f') {
                e.preventDefault();
                document.getElementById('search-input').focus();
            }
            
            // Ctrl+B - 切换侧边栏
            if (e.ctrlKey && e.key === 'b') {
                e.preventDefault();
                const sidebar = document.getElementById('sidebar');
                sidebar.classList.toggle('collapsed');
            }
            
            // F5 - 刷新
            if (e.key === 'F5') {
                e.preventDefault();
                location.reload();
            }
        });
    }
}

// 初始化应用
const app = new App();
