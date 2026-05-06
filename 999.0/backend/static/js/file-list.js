// 文件列表管理
class FileListManager {
    constructor() {
        this.files = [];
        this.activeFile = null;
        this.expandedFoldersStorageKey = 'l_log_expanded_folders';
        this.expandedFolders = new Set(this.loadExpandedFolders());
        this.lastFilesSignature = '';
        this.autoRefreshTimer = null;
        this.autoRefreshIntervalMs = 3000;
        this.init();
    }
    
    init() {
        this.loadFiles();
        this.startAutoRefresh();
        
        // 刷新按钮
        document.getElementById('refresh-files')?.addEventListener('click', () => {
            this.refresh();
        });
        
        // 排序按钮
        document.getElementById('sort-files')?.addEventListener('click', () => {
            this.toggleSort();
        });
        
        // 侧边栏折叠按钮
        document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('collapsed');
            // 同步body类，用于控制展开按钮显示
            document.body.classList.toggle('sidebar-collapsed', sidebar.classList.contains('collapsed'));
        });
        
        // 侧边栏展开按钮
        document.getElementById('sidebar-expand-btn')?.addEventListener('click', () => {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.remove('collapsed');
            // 移除body类，隐藏展开按钮
            document.body.classList.remove('sidebar-collapsed');
        });
    }
    
    buildFilesSignature(items) {
        const parts = [];
        const walk = (nodes) => {
            if (!Array.isArray(nodes)) return;
            for (const node of nodes) {
                if (!node || typeof node !== 'object') continue;
                if (node.type === 'folder') {
                    parts.push(`d|${node.path || ''}|${node.name || ''}`);
                    walk(node.children);
                } else if (node.type === 'file') {
                    parts.push(
                        `f|${node.log_id || ''}|${node.filename || ''}|${node.time || 0}|${node.file_size || 0}`
                    );
                }
            }
        };
        walk(items);
        return parts.join('\n');
    }

    async loadFiles(options = {}) {
        const { silent = false, source = 'manual' } = options;
        const container = document.getElementById('file-list');
        if (!silent) {
            container.innerHTML = '<div class="loading">加载中...</div>';
        }
        
        try {
            const res = await fetch('/api/logs');
            const logs = await res.json();
            const nextSignature = this.buildFilesSignature(logs);
            const hasChanged = nextSignature !== this.lastFilesSignature;

            this.files = logs;
            this.lastFilesSignature = nextSignature;

            if (!silent || hasChanged) {
                this.renderFiles();
            }

        } catch (error) {
            if (!silent) {
                container.innerHTML = `<div class="error">加载失败: ${error.message}</div>`;
            } else {
                console.warn(`[FileList] 自动刷新失败(${source}):`, error);
            }
        }
    }
    
    renderFiles() {
        const container = document.getElementById('file-list');
        
        if (this.files.length === 0) {
            container.innerHTML = '<div class="log-list-empty">暂无日志文件</div>';
            return;
        }
        
        // 递归渲染树形结构
        const renderItem = (item, level = 0) => {
            const indent = level * 16; // 每级缩进16px
            
            if (item.type === 'folder') {
                // 文件夹
                const hasChildren = item.children && item.children.length > 0;
                const folderId = `folder-${item.path.replace(/[\\\/]/g, '-')}`;
                const folderPath = this.normalizeFolderPath(item.path);
                const isExpanded = hasChildren && this.expandedFolders.has(folderPath);
                
                let html = `
                    <div class="folder-item" data-folder-path="${folderPath}" data-level="${level}" style="padding-left: ${indent}px;">
                        <span class="folder-toggle ${hasChildren ? '' : 'empty'}" data-folder-id="${folderId}">
                            ${hasChildren ? (isExpanded ? '▼' : '▶') : ''}
                        </span>
                        <span class="folder-icon">📁</span>
                        <span class="folder-name">${item.name}</span>
                    </div>
                `;
                
                if (hasChildren) {
                    html += `<div class="folder-children ${isExpanded ? '' : 'collapsed'}" id="${folderId}" data-folder-path="${folderPath}">`;
                    html += item.children.map(child => renderItem(child, level + 1)).join('');
                    html += `</div>`;
                }
                
                return html;
            } else {
                // 文件
                const date = new Date(item.time * 1000);
                const dateStr = date.toLocaleDateString('zh-CN');
                const timeStr = date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
                const size = this.formatSize(item.file_size || 0);
                
                return `
                    <div class="file-item" data-log-id="${item.log_id}" data-level="${level}" style="padding-left: ${indent + 16}px;">
                        <span class="file-icon">📄</span>
                        <div class="file-info">
                            <div class="file-name" title="${item.filename}">${item.filename}</div>
                            <div class="file-meta">
                                <span class="file-size">${size}</span>
                                <span class="file-time">${dateStr} ${timeStr}</span>
                            </div>
                        </div>
                    </div>
                `;
            }
        };
        
        container.innerHTML = this.files.map(item => renderItem(item, 0)).join('');
        
        // 绑定文件夹展开/折叠事件
        container.querySelectorAll('.folder-toggle').forEach(toggle => {
            if (!toggle.classList.contains('empty')) {
                toggle.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const folderId = toggle.dataset.folderId;
                    const children = document.getElementById(folderId);
                    if (children) {
                        children.classList.toggle('collapsed');
                        const isCollapsed = children.classList.contains('collapsed');
                        toggle.textContent = isCollapsed ? '▶' : '▼';
                        this.updateFolderExpandedState(children.dataset.folderPath, !isCollapsed);
                    }
                });
            }
        });
        
        // 绑定文件点击事件
        const fileItems = container.querySelectorAll('.file-item');
        console.log(`[FileList] 找到 ${fileItems.length} 个文件项`);
        fileItems.forEach(item => {
            const logId = item.dataset.logId;
            console.log(`[FileList] 绑定文件点击事件: ${logId}`);
            item.addEventListener('click', (e) => {
                console.log(`[FileList] 文件被点击: ${logId}`);
                e.stopPropagation();  // 防止事件冒泡到父元素
                this.selectFile(item);
                this.openFile(item);
            });
            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this._showContextMenu(e.clientX, e.clientY, logId, item);
            });
        });

        container.querySelectorAll('.folder-item').forEach(item => {
            const folderPath = item.dataset.folderPath;
            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this._showFolderContextMenu(e.clientX, e.clientY, folderPath, item);
            });
        });
        
        // 重新应用当前活动文件高亮
        if (this.activeFile) {
            this.setActiveFile(this.activeFile);
        } else if (window.tabManager) {
            const activeTabId = window.tabManager.activeTabId;
            if (activeTabId) {
                const info = window.tabManager.tabs.get(activeTabId);
                if (info) this.setActiveFile(info.logId);
            }
        }
    }
    
    selectFile(item) {
        // 移除其他选中状态
        document.querySelectorAll('.file-item').forEach(el => {
            el.classList.remove('active');
        });
        
        // 设置当前选中
        item.classList.add('active');
        this.activeFile = item.dataset.logId;
    }
    
    openFile(item = null) {
        const logId = item ? item.dataset.logId : this.activeFile;
        console.log(`[FileList] openFile 被调用, logId: ${logId}`);
        
        if (!logId) {
            console.log(`[FileList] 没有 logId，打开文件对话框`);
            document.getElementById('file-input').click();
            return;
        }

        // tabManager 可能还未初始化（tabs.js 尚未执行完），等待后重试
        if (!window.tabManager) {
            console.warn('[FileList] tabManager 未初始化，等待后重试...');
            const retry = (attempts) => {
                if (window.tabManager) {
                    this.openFile(item);
                } else if (attempts > 0) {
                    setTimeout(() => retry(attempts - 1), 100);
                } else {
                    console.error('[FileList] tabManager 初始化超时');
                }
            };
            setTimeout(() => retry(20), 100);
            return;
        }
        
        // 递归查找文件（支持嵌套文件夹）
        const findFile = (items, targetLogId) => {
            for (const item of items) {
                if (item.type === 'file' && item.log_id === targetLogId) {
                    return item;
                } else if (item.type === 'folder' && item.children) {
                    const found = findFile(item.children, targetLogId);
                    if (found) return found;
                }
            }
            return null;
        };
        
        console.log(`[FileList] 开始查找文件, files数组:`, this.files);
        const file = findFile(this.files, logId);
        console.log(`[FileList] 查找结果:`, file);
        
        if (file && window.tabManager) {
            console.log(`[FileList] 调用 tabManager.loadLog(${logId}, ${file.filename})`);
            window.tabManager.loadLog(logId, file.filename);
        } else {
            if (!file) {
                console.error(`[FileList] 未找到文件: ${logId}`);
            }
            if (!window.tabManager) {
                console.error(`[FileList] tabManager 未初始化`);
            }
        }
    }
    
    formatSize(bytes) {
        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
    }
    
    setActiveFile(logId) {
        this.activeFile = logId;
        document.querySelectorAll('.file-item').forEach(el => {
            el.classList.toggle('active', el.dataset.logId === logId);
        });
    }

    normalizeFolderPath(path) {
        if (!path) return '';
        return String(path).replace(/\\/g, '/').replace(/\/+$/, '');
    }

    loadExpandedFolders() {
        try {
            const raw = localStorage.getItem(this.expandedFoldersStorageKey);
            if (!raw) return [];
            const parsed = JSON.parse(raw);
            if (!Array.isArray(parsed)) return [];
            return parsed
                .map(path => this.normalizeFolderPath(path))
                .filter(Boolean);
        } catch (error) {
            console.warn('[FileList] 读取目录展开状态失败:', error);
            return [];
        }
    }

    saveExpandedFolders() {
        try {
            localStorage.setItem(
                this.expandedFoldersStorageKey,
                JSON.stringify(Array.from(this.expandedFolders))
            );
        } catch (error) {
            console.warn('[FileList] 保存目录展开状态失败:', error);
        }
    }

    updateFolderExpandedState(folderPath, expanded) {
        const normalizedPath = this.normalizeFolderPath(folderPath);
        if (!normalizedPath) return;
        if (expanded) {
            this.expandedFolders.add(normalizedPath);
        } else {
            this.expandedFolders.delete(normalizedPath);
        }
        this.saveExpandedFolders();
    }
    
    refresh() {
        this.loadFiles({ silent: false, source: 'manual' });
    }
    
    toggleSort() {
        // 简单的时间排序切换
        this.files.reverse();
        this.renderFiles();
    }

    startAutoRefresh() {
        if (this.autoRefreshTimer) return;
        this.autoRefreshTimer = setInterval(() => {
            // 页面切后台时暂停轮询，避免无意义请求
            if (document.hidden) return;
            this.loadFiles({ silent: true, source: 'polling' });
        }, this.autoRefreshIntervalMs);
    }

    stopAutoRefresh() {
        if (!this.autoRefreshTimer) return;
        clearInterval(this.autoRefreshTimer);
        this.autoRefreshTimer = null;
    }

    _closeOpenTabsForLogIds(logIds) {
        if (!window.tabManager || !logIds || !logIds.length) return;
        const wanted = new Set(logIds.map(logId => String(logId || '')));
        const tabs = window.tabManager.tabs || {};
        const tabIdsToClose = [];

        if (tabs instanceof Map) {
            tabs.forEach((info, tabId) => {
                if (info && wanted.has(String(info.logId || ''))) {
                    tabIdsToClose.push(tabId);
                }
            });
        } else {
            Object.keys(tabs).forEach(tabId => {
                const info = tabs[tabId];
                if (info && wanted.has(String(info.logId || ''))) {
                    tabIdsToClose.push(tabId);
                }
            });
        }

        tabIdsToClose.forEach(tabId => window.tabManager.closeTab(tabId));
    }

    _showContextMenu(x, y, logId, itemEl) {
        // 移除已有菜单
        document.getElementById('file-list-ctx-menu')?.remove();

        const menu = document.createElement('div');
        menu.id = 'file-list-ctx-menu';
        menu.style.cssText = `
            position:fixed;left:${x}px;top:${y}px;z-index:9999;
            background:var(--sidebar-bg,#1e1e1e);border:1px solid var(--border-color,#444);
            border-radius:6px;padding:4px 0;min-width:140px;box-shadow:0 4px 16px rgba(0,0,0,0.4);
            font-size:13px;
        `;

        const deleteItem = document.createElement('div');
        deleteItem.textContent = '🗑 删除日志文件';
        deleteItem.style.cssText = `
            padding:7px 16px;cursor:pointer;color:#ff6b6b;
            transition:background 0.15s;
        `;
        deleteItem.addEventListener('mouseenter', () => deleteItem.style.background = 'rgba(255,107,107,0.12)');
        deleteItem.addEventListener('mouseleave', () => deleteItem.style.background = '');
        deleteItem.addEventListener('click', () => {
            menu.remove();
            this._deleteLog(logId, itemEl);
        });

        menu.appendChild(deleteItem);
        document.body.appendChild(menu);

        // 点击其他地方关闭
        const close = (e) => {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('mousedown', close);
            }
        };
        setTimeout(() => document.addEventListener('mousedown', close), 0);

        // 防止菜单超出视口
        const rect = menu.getBoundingClientRect();
        if (rect.right > window.innerWidth)  menu.style.left = (x - rect.width) + 'px';
        if (rect.bottom > window.innerHeight) menu.style.top = (y - rect.height) + 'px';
    }

    _showFolderContextMenu(x, y, folderPath, itemEl) {
        document.getElementById('file-list-ctx-menu')?.remove();

        const menu = document.createElement('div');
        menu.id = 'file-list-ctx-menu';
        menu.style.cssText = `
            position:fixed;left:${x}px;top:${y}px;z-index:9999;
            background:var(--sidebar-bg,#1e1e1e);border:1px solid var(--border-color,#444);
            border-radius:6px;padding:4px 0;min-width:150px;box-shadow:0 4px 16px rgba(0,0,0,0.4);
            font-size:13px;
        `;

        const deleteItem = document.createElement('div');
        deleteItem.textContent = '🗑 删除此目录';
        deleteItem.style.cssText = `
            padding:7px 16px;cursor:pointer;color:#ff6b6b;
            transition:background 0.15s;
        `;
        deleteItem.addEventListener('mouseenter', () => deleteItem.style.background = 'rgba(255,107,107,0.12)');
        deleteItem.addEventListener('mouseleave', () => deleteItem.style.background = '');
        deleteItem.addEventListener('click', () => {
            menu.remove();
            this._deleteFolder(folderPath, itemEl);
        });

        menu.appendChild(deleteItem);
        document.body.appendChild(menu);

        const close = (e) => {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('mousedown', close);
            }
        };
        setTimeout(() => document.addEventListener('mousedown', close), 0);

        const rect = menu.getBoundingClientRect();
        if (rect.right > window.innerWidth)  menu.style.left = (x - rect.width) + 'px';
        if (rect.bottom > window.innerHeight) menu.style.top = (y - rect.height) + 'px';
    }

    async _deleteLog(logId, itemEl) {
        if (!confirm(`确认删除日志文件？\n${logId}`)) return;
        try {
            const resp = await fetch(`/api/log/${encodeURIComponent(logId)}`, { method: 'DELETE' });
            if (!resp.ok) {
                const err = await resp.json().catch(() => ({}));
                alert('删除失败：' + (err.detail || resp.statusText));
                return;
            }
            this._closeOpenTabsForLogIds([logId]);
            // 刷新文件列表
            this.refresh();
        } catch (e) {
            alert('删除请求失败：' + e.message);
        }
    }

    async _deleteFolder(folderPath, itemEl) {
        if (!folderPath) return;
        if (!confirm(`确认删除此目录及其所有日志文件？\n${folderPath}`)) return;
        try {
            const resp = await fetch(`/api/log-folder/${encodeURIComponent(folderPath)}`, { method: 'DELETE' });
            if (!resp.ok) {
                const err = await resp.json().catch(() => ({}));
                alert('删除目录失败：' + (err.detail || resp.statusText));
                return;
            }
            const result = await resp.json().catch(() => ({}));
            this._closeOpenTabsForLogIds(result.deleted_logs || []);

            this.expandedFolders.delete(this.normalizeFolderPath(folderPath));
            this.saveExpandedFolders();
            this.refresh();
        } catch (e) {
            alert('删除目录请求失败：' + e.message);
        }
    }
}

// 初始化
window.fileListManager = new FileListManager();
