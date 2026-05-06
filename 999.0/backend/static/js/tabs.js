class TabManager {
    constructor() {
        this.tabs = new Map();
        this.activeTabId = null;
        this.tabCounter = 0;
        this._isRestoring = false;  // 恢復標籤時避免重複保存
        
        this.init();
    }

    updateTabLoadingState(tabPane, stage, percent, detail) {
        if (!tabPane) return;
        tabPane.classList.add('tab-loading-active');
        let overlay = tabPane.querySelector('.tab-loading-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'tab-loading-overlay';
            overlay.innerHTML = `
                <div class="tab-loading-card">
                    <div class="tab-loading-spinner" aria-hidden="true"></div>
                    <div class="tab-loading-stage">正在加载日志...</div>
                    <div class="tab-loading-detail"></div>
                    <div class="tab-loading-progress">
                        <div class="tab-loading-progress-fill"></div>
                    </div>
                    <div class="tab-loading-percent">0%</div>
                </div>
            `;
            tabPane.appendChild(overlay);
        }

        const safePercent = Math.max(0, Math.min(100, Math.floor(percent || 0)));
        const stageEl = overlay.querySelector('.tab-loading-stage');
        const detailEl = overlay.querySelector('.tab-loading-detail');
        const fillEl = overlay.querySelector('.tab-loading-progress-fill');
        const percentEl = overlay.querySelector('.tab-loading-percent');

        if (stageEl) stageEl.textContent = stage || '正在加载日志...';
        if (detailEl) detailEl.textContent = detail || '';
        if (fillEl) fillEl.style.width = `${safePercent}%`;
        if (percentEl) percentEl.textContent = `${safePercent}%`;
    }

    clearTabLoadingState(tabPane) {
        if (!tabPane) return;
        const overlay = tabPane.querySelector('.tab-loading-overlay');
        if (overlay) overlay.remove();
        tabPane.classList.remove('tab-loading-active');
    }

    /**
     * Shift+滚轮：默认滚整页 .tab-pane。
     * 光标在 #tree-content 内时交给 trace_tree_view（capture）用 Shift+滚树，此处不拦截。
     */
    attachShiftWheelScrollToPane(tabPane) {
        if (!tabPane || tabPane.dataset.shiftWheelScrollBound === '1') return;
        tabPane.dataset.shiftWheelScrollBound = '1';
        tabPane.addEventListener(
            'wheel',
            (e) => {
                if (!e.shiftKey) return;
                if (e.target && e.target.closest && e.target.closest('#tree-content')) {
                    return;
                }
                e.preventDefault();
                e.stopPropagation();
                let dy = e.deltaY;
                if (e.deltaMode === 1) dy *= 16;
                else if (e.deltaMode === 2) dy *= tabPane.clientHeight || 0;
                tabPane.scrollTop += dy;
            },
            { passive: false, capture: true }
        );
    }
    
    init() {
        // 日志列表按钮（如果存在）
        const tabListBtn = document.querySelector('.tab-list');
        if (tabListBtn) {
            tabListBtn.addEventListener('click', () => {
                this.showLogList();
            });
        }
        
        // 上传按钮
        const tabNewBtn = document.querySelector('.tab-new');
        if (tabNewBtn) {
            tabNewBtn.addEventListener('click', () => {
                this.openUploadDialog();
            });
        }
        
        const fileInput = document.getElementById('file-input');
        fileInput.addEventListener('change', (e) => {
            this.handleFileUpload(e.target.files[0]);
        });
        
        // 模态框关闭按钮
        const modalClose = document.querySelector('.modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', () => {
                this.hideLogList();
            });
        }
        
        // 点击模态框背景关闭
        const modal = document.getElementById('log-list-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideLogList();
                }
            });
        }
        
        // 優先從 URL 參數加載日誌
        const urlParams = new URLSearchParams(window.location.search);
        const logId = urlParams.get('log');
        if (logId) {
            this.loadLog(logId);
        } else {
            // 否則恢復上次打開的標籤頁
            this.restoreTabsFromStorage();
        }
    }
    
    async showLogList() {
        const modal = document.getElementById('log-list-modal');
        const container = document.getElementById('log-list-container');
        
        modal.style.display = 'flex';
        modal.classList.add('show');
        container.innerHTML = '<div class="loading">加载中...</div>';
        
        try {
            const res = await fetch('/api/logs');
            const logs = await res.json();
            
            if (logs.length === 0) {
                container.innerHTML = '<div class="log-list-empty">暂无日志文件</div>';
                return;
            }
            
            container.innerHTML = logs.map(log => {
                const date = new Date(log.time * 1000).toLocaleString('zh-CN');
                return `
                    <div class="log-list-item" data-log-id="${log.log_id}">
                        <div class="log-list-item-info">
                            <div class="log-list-item-name">${log.filename}</div>
                            <div class="log-list-item-meta">${date}</div>
                        </div>
                        <div class="log-list-item-actions">
                            <button class="log-list-item-btn" onclick="tabManager.openLogFromList('${log.log_id}', '${log.filename}')">打开</button>
                        </div>
                    </div>
                `;
            }).join('');
            
        } catch (error) {
            container.innerHTML = `<div class="error">加载失败: ${error.message}</div>`;
        }
    }
    
    hideLogList() {
        const modal = document.getElementById('log-list-modal');
        modal.style.display = 'none';
        modal.classList.remove('show');
    }
    
    openLogFromList(logId, filename) {
        this.hideLogList();
        this.loadLog(logId, filename);
    }
    
    openUploadDialog() {
        document.getElementById('file-input').click();
    }
    
    async handleFileUpload(file) {
        if (!file) return;
        
        const formData = new FormData();
        formData.append('file', file);
        
        try {
            const res = await fetch('/upload', { method: 'POST', body: formData });
            const data = await res.json();
            
            this.createTab(data.log_id, data.filename || file.name);
        } catch (error) {
            alert('上传失败: ' + error.message);
        }
    }
    
    async loadLog(logId, filename) {
        try {
            // 检查是否已存在相同logId的标签
            const existingTabId = this.findTabByLogId(logId);
            if (existingTabId) {
                // 直接切换到已存在的标签
                this.switchTab(existingTabId);
                return;
            }
            
            const res = await fetch(`/api/log/${logId}`);
            const data = await res.json();
            
            this.createTab(logId, filename || data.filename);
        } catch (error) {
            console.error('加载日志失败:', error);
        }
    }
    
    async reloadLog(logId) {
        const existingTabId = this.findTabByLogId(logId);
        if (existingTabId) {
            this.switchTab(existingTabId);
            await this.loadTabContent(existingTabId, logId);
        } else {
            await this.loadLog(logId);
        }
    }

    findTabByLogId(logId) {
        // 查找是否存在相同logId的标签
        for (const [tabId, tabInfo] of this.tabs.entries()) {
            if (tabInfo.logId === logId) {
                return tabId;
            }
        }
        return null;
    }

    normalizeLogPath(logId) {
        if (!logId) return '';
        let path = String(logId).trim().replace(/\\/g, '/');
        if (path.endsWith('.md')) {
            path = path.slice(0, -3);
        }
        return path;
    }

    findTabByPath(logId) {
        const targetPath = this.normalizeLogPath(logId);
        if (!targetPath) return null;
        for (const [tabId, tabInfo] of this.tabs.entries()) {
            if (this.normalizeLogPath(tabInfo.logId) === targetPath) {
                return tabId;
            }
        }
        return null;
    }
    
    createTab(logId, filename) {
        // 同路径去重：如果标签已存在则直接切换并刷新标题
        const existingTabId = this.findTabByPath(logId);
        if (existingTabId) {
            const existingTab = document.querySelector(`.tab[data-id="${existingTabId}"]`);
            if (existingTab) {
                const titleEl = existingTab.querySelector('.tab-title');
                if (titleEl && filename) {
                    titleEl.textContent = filename;
                }
                const fullPath = logId + '.md';
                if (titleEl) {
                    titleEl.title = fullPath;
                }
                existingTab.dataset.logId = logId;
            }

            const existingPane = document.querySelector(`.tab-pane[data-id="${existingTabId}"]`);
            if (existingPane) {
                existingPane.dataset.logId = logId;
            }

            const oldInfo = this.tabs.get(existingTabId) || {};
            this.tabs.set(existingTabId, {
                logId,
                filename: filename || oldInfo.filename
            });
            this.switchTab(existingTabId);
            return existingTabId;
        }

        const tabId = ++this.tabCounter;
        
        // 构建完整路径用于悬停显示
        const fullPath = logId + '.md';
        
        const tabHeader = document.createElement('div');
        tabHeader.className = 'tab';
        tabHeader.dataset.id = tabId;
        tabHeader.dataset.logId = logId;  // 添加logId用于刷新
        tabHeader.innerHTML = `
            <span class="tab-title" title="${fullPath}">${filename}</span>
            <button class="tab-close">×</button>
        `;
        
        const tabPane = document.createElement('div');
        tabPane.className = 'tab-pane';
        tabPane.dataset.id = tabId;
        tabPane.dataset.logId = logId;  // 添加logId
        tabPane.innerHTML = '<div class="loading">加载中...</div>';
        
        const tabsHeader = document.querySelector('.tabs-header');
        tabsHeader.insertBefore(tabHeader, tabsHeader.querySelector('.tab-new'));
        document.querySelector('.tabs-content').appendChild(tabPane);
        this.attachShiftWheelScrollToPane(tabPane);

        tabHeader.addEventListener('click', (e) => {
            if (!e.target.classList.contains('tab-close')) {
                this.switchTab(tabId);
            }
        });

        tabHeader.querySelector('.tab-close').addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeTab(tabId);
        });
        
        this.tabs.set(tabId, { logId, filename });
        
        // 恢复阶段先标记待加载，必须在 switchTab 之前设置，否则 switchTab 里检查不到
        if (this._isRestoring) {
            const pane = document.querySelector(`.tab-pane[data-id="${tabId}"]`);
            if (pane) pane.dataset.pendingLoad = '1';
        }

        this.switchTab(tabId);
        this.attachFloatingAIBtn(tabId);
        
        if (!this._isRestoring) {
            this.loadTabContent(tabId, logId);
        }
        
        // 保存標籤狀態到 localStorage（恢復時不保存）
        if (!this._isRestoring) {
            this.saveTabsToStorage();
        }
    }

    /**
     * 日志顶部 <<<AI_LOG_HINT>>>：默认不展开，按钮切换（主 HTML 中不含该块，由接口单独字段渲染）
     */
    attachAiLogHintPanel(tabPane, data) {
        if (!tabPane || !data || !data.ai_log_hint_html) return;
        const bar = document.createElement('div');
        bar.className = 'ai-log-hint-strip';
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'ai-log-hint-toggle';
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = '显示「AI 使用说明」';
        const panel = document.createElement('div');
        panel.className = 'ai-log-hint-panel';
        panel.hidden = true;
        panel.setAttribute('aria-hidden', 'true');
        panel.innerHTML = data.ai_log_hint_html;
        bar.appendChild(btn);
        const first = tabPane.firstChild;
        tabPane.insertBefore(bar, first);
        tabPane.insertBefore(panel, bar.nextSibling);
        btn.addEventListener('click', () => {
            const open = panel.hidden;
            panel.hidden = !open;
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
            panel.setAttribute('aria-hidden', open ? 'false' : 'true');
            btn.textContent = open ? '隐藏「AI 使用说明」' : '显示「AI 使用说明」';
        });
    }

    attachFloatingAIBtn(tabId) {
        const tabsContainer = document.querySelector('.tabs-container');
        const tabPane = document.querySelector(`.tab-pane[data-id="${tabId}"]`);
        if (!tabsContainer || !tabPane) return;

        let btn = tabsContainer.querySelector('.tab-ai-floating-btn');
        if (!btn) {
            btn = document.createElement('button');
            btn.className = 'tab-ai-floating-btn';
            btn.title = '问AI（基于当前日志页上下文）';
            btn.textContent = '🤖 问AI';
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const targetTabId = Number(btn.dataset.targetTabId || '');
                if (targetTabId) {
                    this.openTabAIAssistant(targetTabId);
                }
            });
            tabsContainer.appendChild(btn);
        }

        btn.dataset.targetTabId = String(tabId);
    }

    buildAiContextForTab(tabPane, logId) {
        const selection = window.getSelection ? String(window.getSelection()) : '';
        const selectedText = selection && selection.trim().length > 0 ? selection.trim() : '';

        // 优先抓取可见区文本，避免一次发送整篇日志
        const visibleSnippets = [];
        const visibleNodes = tabPane.querySelectorAll('.lprint-trace-call, .lprint-trace-func-code, .lprint-trace-callby');
        for (const node of visibleNodes) {
            const rect = node.getBoundingClientRect();
            if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
            const text = (node.textContent || '').trim();
            if (text) visibleSnippets.push(text);
            if (visibleSnippets.length >= 24) break;
        }

        // 如果可见区为空，降级取前若干条调用节点
        if (visibleSnippets.length === 0) {
            const fallbackNodes = tabPane.querySelectorAll('.lprint-trace-call, .lprint-trace-func-code');
            for (const node of fallbackNodes) {
                const text = (node.textContent || '').trim();
                if (text) visibleSnippets.push(text);
                if (visibleSnippets.length >= 24) break;
            }
        }

        let aiHint = '';
        const hintRoot = tabPane.querySelector('[data-role="ai-log-hint"]');
        if (hintRoot) {
            const t = (hintRoot.textContent || '').trim();
            if (t) aiHint = `log_ai_usage_hint:\n${t.slice(0, 6000)}`;
        }

        const contextParts = [
            `log_id: ${logId}`,
            aiHint,
            selectedText ? `selected_text:\n${selectedText.slice(0, 1800)}` : '',
            `tab_visible_context:\n${visibleSnippets.join('\n').slice(0, 7000)}`,
            'note: 内容为标签页可见区域与局部调用链片段，不是整篇日志。'
        ].filter(Boolean);

        return contextParts.join('\n\n');
    }

    openTabAIAssistant(tabId) {
        if (!window.aiAssistant) {
            if (window.toast) window.toast.error('AI助手未加载，请刷新页面重试');
            return;
        }

        const tabInfo = this.tabs.get(tabId);
        const tabPane = document.querySelector(`.tab-pane[data-id="${tabId}"]`);
        if (!tabInfo || !tabPane) {
            if (window.toast) window.toast.warning('当前标签页内容尚未准备好');
            return;
        }

        const context = this.buildAiContextForTab(tabPane, tabInfo.logId);
        window.aiAssistant.open({
            type: 'trace_log',
            content: context,
        });

        if (window.toast) {
            window.toast.success('已提取当前标签页上下文，可直接提问');
        }
    }

    highlightCodeWithRetry(tabPane, retries = 12, delayMs = 120) {
        if (!tabPane) return;
        const runHighlight = (remain) => {
            if (this.observePythonCodeForViewportHighlight(tabPane, tabPane)) {
                return;
            }
            if (remain <= 0) {
                console.warn('[标签页] Prism 未就绪，跳过代码高亮');
                return;
            }
            setTimeout(() => runHighlight(remain - 1), delayMs);
        };
        runHighlight(retries);
    }

    highlightPythonCodeElement(codeEl) {
        if (!codeEl || codeEl.getAttribute('data-prism-highlighted') === '1') {
            return true;
        }
        if (!window.Prism || !window.Prism.languages || !window.Prism.languages.python) {
            return false;
        }
        const pre = codeEl.closest('pre');
        if (pre && !pre.classList.contains('language-python')) {
            pre.classList.add('language-python');
        }
        window.Prism.highlightElement(codeEl);
        codeEl.setAttribute('data-prism-highlighted', '1');
        if (typeof window.processExpandLinks === 'function') {
            const scope = codeEl.closest('pre') || codeEl;
            window.processExpandLinks(scope);
        }
        return true;
    }

    waitForPrismThen(root, tabPane, retries = 20, delayMs = 150) {
        if (window.Prism && window.Prism.languages && window.Prism.languages.python) {
            this.observePythonCodeForViewportHighlight(root, tabPane);
            return;
        }
        if (retries <= 0) {
            console.warn('[标签页] Prism Python 语法未就绪，暂无法高亮');
            return;
        }
        setTimeout(() => this.waitForPrismThen(root, tabPane, retries - 1, delayMs), delayMs);
    }

    getViewportHighlightObserver(tabPane) {
        if (!tabPane || !('IntersectionObserver' in window)) return null;
        if (tabPane._pythonCodeHighlightObserver) {
            return tabPane._pythonCodeHighlightObserver;
        }
        tabPane._pythonCodeHighlightObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                const codeEl = entry.target;
                if (this.highlightPythonCodeElement(codeEl)) {
                    observer.unobserve(codeEl);
                    codeEl.removeAttribute('data-prism-observed');
                }
            });
        }, {
            root: tabPane,
            rootMargin: '900px 0px',
            threshold: 0.01,
        });
        return tabPane._pythonCodeHighlightObserver;
    }

    observePythonCodeForViewportHighlight(root, tabPane) {
        if (!root) return false;
        if (!window.Prism || !window.Prism.languages || !window.Prism.languages.python) {
            this.waitForPrismThen(root, tabPane);
            return false;
        }
        const viewport = tabPane && tabPane.classList && tabPane.classList.contains('tab-pane')
            ? tabPane
            : (root.closest && root.closest('.tab-pane')) || root;
        const observer = this.getViewportHighlightObserver(viewport);
        const codeNodes = root.querySelectorAll('code.language-python:not([data-prism-highlighted="1"])');
        codeNodes.forEach((codeEl) => {
            const pre = codeEl.closest('pre');
            if (pre && !pre.classList.contains('language-python')) {
                pre.classList.add('language-python');
            }
            if (observer) {
                if (codeEl.getAttribute('data-prism-observed') !== '1') {
                    codeEl.setAttribute('data-prism-observed', '1');
                    observer.observe(codeEl);
                }
            } else {
                this.highlightPythonCodeElement(codeEl);
            }
        });
        return true;
    }

    async initChunkedLogViewer(tabPane, logId, chunkInfo) {
        if (!tabPane) return;
        const contentEl = tabPane.querySelector('[data-role="chunked-content"]');
        const loadBtn = tabPane.querySelector('[data-role="load-next-chunk"]');
        const statusEl = tabPane.querySelector('[data-role="chunked-status"]');
        if (!contentEl || !loadBtn || !statusEl) return;

        let nextOffset = 0;
        let loading = false;
        let inTrace = false;
        const fileSize = chunkInfo && chunkInfo.file_size ? chunkInfo.file_size : 0;
        const chunkBytes = chunkInfo && chunkInfo.chunk_bytes ? chunkInfo.chunk_bytes : 512 * 1024;
        const maxAutoChunks = 8;
        let loadedChunks = 0;

        const formatSize = (bytes) => {
            if (!bytes) return '0 B';
            const units = ['B', 'KB', 'MB', 'GB'];
            let value = bytes;
            let i = 0;
            while (value >= 1024 && i < units.length - 1) {
                value /= 1024;
                i += 1;
            }
            return `${value.toFixed(i === 0 ? 0 : 2)} ${units[i]}`;
        };

        const updateStatus = (message) => {
            const pct = fileSize ? Math.min(100, (nextOffset / fileSize) * 100) : 0;
            statusEl.textContent = `${message} ${formatSize(nextOffset)} / ${formatSize(fileSize)} (${pct.toFixed(1)}%)`;
        };

        const loadNext = async () => {
            if (loading) return;
            loading = true;
            loadBtn.disabled = true;
            updateStatus('加载中...');
            try {
                const url = `/api/log/${logId}/chunk?offset=${nextOffset}&max_bytes=${chunkBytes}&in_trace=${inTrace ? 'true' : 'false'}`;
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error(`HTTP ${res.status}`);
                }
                const chunk = await res.json();
                const holder = document.createElement('div');
                holder.className = 'log-chunked-html-fragment';
                holder.dataset.offset = String(chunk.offset || nextOffset);
                holder.innerHTML = chunk.html || '';
                contentEl.appendChild(holder);
                nextOffset = chunk.next_offset || nextOffset;
                inTrace = !!chunk.in_trace;
                loadedChunks += 1;

                // 分块模式：只登记当前 chunk，代码行进入可视区域附近时再高亮。
                this.observePythonCodeForViewportHighlight(holder, tabPane);
                if (typeof ensurePrettyToggleOnExpandContainers === 'function') {
                    ensurePrettyToggleOnExpandContainers(holder);
                }
                if (typeof processExpandLinks === 'function') {
                    processExpandLinks(holder);
                }
                if (typeof processCallLinks === 'function') {
                    processCallLinks(holder);
                }
                if (typeof buildTraceTreeView === 'function' && !tabPane.querySelector('.trace-tree-view')) {
                    buildTraceTreeView(tabPane);
                }

                if (chunk.has_more) {
                    loadBtn.disabled = false;
                    updateStatus(chunk.truncated_oversized_line ? '已加载（超长单行已截断）' : '已加载');
                } else {
                    loadBtn.style.display = 'none';
                    updateStatus(chunk.truncated_oversized_line ? '已全部加载（超长单行已截断）' : '已全部加载');
                }
            } catch (error) {
                console.error('[标签页] 分块加载日志失败:', error);
                loadBtn.disabled = false;
                statusEl.textContent = `分块加载失败: ${error.message}`;
            } finally {
                loading = false;
            }
        };

        loadBtn.addEventListener('click', loadNext);
        await loadNext();
        while (nextOffset < fileSize && loadedChunks < maxAutoChunks) {
            await loadNext();
            await new Promise(resolve => setTimeout(resolve, 0));
        }
    }
    
    async loadTabContent(tabId, logId) {
        const tabPane = document.querySelector(`.tab-pane[data-id="${tabId}"]`);
        const t0 = performance.now();

        this.updateTabLoadingState(tabPane, '准备加载日志', 5, `logId: ${logId}`);
        try {
            this.updateTabLoadingState(tabPane, '正在请求服务端', 20, '等待 /api/log 响应');
            const res = await fetch(`/api/log/${logId}`);
            this.updateTabLoadingState(tabPane, '服务端响应完成', 40, `HTTP ${res.status}`);
            const data = await res.json();
            this.updateTabLoadingState(tabPane, '正在解析日志数据', 55, '处理 HTML 与 JSON');
            
            // 存储JSON数据到全局变量，供trace_tree_view.js使用
            if (data.data) {
                window.traceJsonData = data.data;
                if (data.data.format === 'trace_linear' && data.data.metadata) {
                    var metadata = data.data.metadata;
                    var highlights = data.data.highlights || { slow_calls: [], deep_calls: [], error_calls: [] };
                    console.log('[标签页] trace_linear 元数据:', {
                        totalCalls: metadata.total_calls,
                        maxDepth: metadata.max_depth,
                        totalEvents: metadata.total_events,
                        slowCalls: highlights.slow_calls.length,
                        deepCalls: highlights.deep_calls.length,
                        errorCalls: highlights.error_calls.length
                    });
                }
            }

            if (data.trace_linear_available && window.traceJsonData && window.traceJsonData.source === 'trace_linear.jsonl') {
                this.updateTabLoadingState(tabPane, '正在加载 trace_linear.jsonl', 58, '侧车 NDJSON');
                try {
                    const trRes = await fetch(`/api/log/${logId}/trace_linear`);
                    if (trRes.ok) {
                        const text = await trRes.text();
                        const events = [];
                        const lines = text.split(/\r?\n/);
                        for (let i = 0; i < lines.length; i++) {
                            const s = lines[i].trim();
                            if (!s) continue;
                            try {
                                events.push(JSON.parse(s));
                            } catch (pe) {
                                console.warn('[标签页] trace_linear 行 JSON 解析失败', i, pe);
                            }
                        }
                        window.traceJsonData.events = events;
                        console.log('[标签页] 已从 trace_linear.jsonl 加载事件', events.length, '条');
                    } else {
                        console.warn('[标签页] trace_linear 侧车不可用', trRes.status);
                    }
                } catch (e) {
                    console.error('[标签页] 加载 trace_linear.jsonl 失败', e);
                }
            }

            // NDJSON 流格式（.md 文件本身是 <<<LPRINT_TRACE_STREAM>>>）
            // 请求后端预计算好的调用树概览，注入 DOM 触发现有调用树渲染器
            if (data.trace_linear_available && window.traceJsonData && window.traceJsonData.source !== 'trace_linear.jsonl') {
                this.updateTabLoadingState(tabPane, '正在生成调用树', 62, '后端解析 NDJSON 流');
                try {
                    const ovRes = await fetch(`/api/log/${logId}/tree_overview`);
                    if (ovRes.ok) {
                        const ov = await ovRes.json();
                        console.log('[标签页] tree_overview 加载完成，节点数:', ov.total_nodes);
                        // 把 highlights/metadata 合并到 traceJsonData
                        window.traceJsonData.highlights = ov.highlights;
                        window.traceJsonData.metadata = Object.assign(
                            window.traceJsonData.metadata || {}, ov.metadata
                        );
                        // 把调用树文本注入到 tabPane 里，触发 trace_tree_view.js 的解析
                        if (ov.tree_text) {
                            const treeContainer = tabPane.querySelector('.lprint-forward-trace') || tabPane;
                            const pre = document.createElement('pre');
                            pre.className = 'lprint-trace-call-tree-overview';
                            pre.setAttribute('data-component', 'call-tree-overview');
                            pre.textContent = '📊 调用链概览：\n' + ov.tree_text;
                            treeContainer.insertBefore(pre, treeContainer.firstChild);
                        }
                    } else {
                        console.warn('[标签页] tree_overview 不可用', ovRes.status);
                    }
                } catch (e) {
                    console.error('[标签页] 加载 tree_overview 失败', e);
                }
            }

            if (data.chunked) {
                this.updateTabLoadingState(tabPane, '启用分块加载', 70, '大日志 raw viewer');
                tabPane.innerHTML = data.html;
                this.attachAiLogHintPanel(tabPane, data);
                this.attachFloatingAIBtn(tabId);
                await this.initChunkedLogViewer(tabPane, logId, data.chunk || {});
                this.updateTabLoadingState(tabPane, '加载完成', 100, `总耗时 ${(performance.now() - t0).toFixed(0)}ms`);
                setTimeout(() => this.clearTabLoadingState(tabPane), 180);
                return;
            }
            
            this.updateTabLoadingState(tabPane, '正在渲染页面内容', 72, '写入主内容');
            tabPane.innerHTML = data.html;
            this.attachAiLogHintPanel(tabPane, data);
            this.attachFloatingAIBtn(tabId);
            
            // 大日志轻量模式：避免一次性全页重活；代码高亮改为可视区域懒处理。
            const totalCalls = data && data.data && data.data.metadata && typeof data.data.metadata.total_calls === 'number'
                ? data.data.metadata.total_calls
                : 0;
            const htmlSize = typeof data.html === 'string' ? data.html.length : 0;
            const largeLogMode = totalCalls >= 1200 || htmlSize >= 1_800_000;
            if (largeLogMode) {
                console.warn('[标签页] 启用大日志轻量模式', { totalCalls, htmlSize });
                if (window.toast) {
                    window.toast.info('已启用大日志轻量模式（代码高亮按可视区域处理）', 2500);
                }
            }
            this.updateTabLoadingState(
                tabPane,
                largeLogMode ? '登记可视区域代码高亮' : '正在代码高亮',
                82,
                largeLogMode ? '滚动到附近时再执行 Prism' : 'Prism 高亮处理中'
            );
            
            // 1. 登记代码高亮。轻量模式下不会全页立即高亮，而是进入可视区域附近再处理。
            this.highlightCodeWithRetry(tabPane);
            this.updateTabLoadingState(tabPane, '正在建立调用链接', 88, '分析 callBy 跳转点');
            
            // 2. 再处理调用链接（在高亮后的代码上工作）
            if (typeof processCallLinks === 'function') {
                console.log('[标签页] 调用processCallLinks处理调用链接');
                processCallLinks(tabPane);
            } else {
                console.warn('[标签页] processCallLinks函数未找到');
            }
            this.updateTabLoadingState(tabPane, '正在构建树视图', 93, '生成折叠导航');
            
            // 3. 最后初始化树视图（傳入 tabPane 作為搜索範圍，避免多標籤頁衝突）
            if (typeof buildTraceTreeView === 'function') {
                console.log('[标签页] 调用buildTraceTreeView初始化树视图');
                buildTraceTreeView(tabPane);
            } else {
                console.warn('[标签页] buildTraceTreeView函数未找到');
            }
            this.updateTabLoadingState(tabPane, '正在处理展开链接', 97, '准备交互行为');
            
            // 4. 处理展开链接
            if (typeof processExpandLinks === 'function') {
                console.log('[标签页] 调用processExpandLinks处理展开链接');
                processExpandLinks(tabPane);
            } else {
                console.warn('[标签页] processExpandLinks函数未找到');
            }

            // 5. 初始化“显示未运行代码”开关（innerHTML 已写入，同步立即执行一次，再做延迟屎底）
            this.updateUnexecutedToggle(tabId);
            
            // 6. 绑定滚动事件监听器，实时保存滚动位置
            let scrollTimeout;
            tabPane.addEventListener('scroll', () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    const scrollPos = tabPane.scrollTop || 0;
                    if (scrollPos > 0) {
                        localStorage.setItem(`scrollPosition_${logId}`, scrollPos);
                        console.log('[标签页] 实时保存滚动位置:', scrollPos, 'logId:', logId);
                    }
                }, 100);
            });
            
            // 7. 恢复滚动位置
            setTimeout(() => {
                const savedScrollPos = localStorage.getItem(`scrollPosition_${logId}`);
                if (savedScrollPos) {
                    tabPane.scrollTop = parseInt(savedScrollPos);
                    console.log('[标签页] 恢复滚动位置:', savedScrollPos, 'logId:', logId);
                }
            }, 100);
            this.updateTabLoadingState(tabPane, '加载完成', 100, `总耗时 ${(performance.now() - t0).toFixed(0)}ms`);
            setTimeout(() => this.clearTabLoadingState(tabPane), 180);
            if (window.searchManager && typeof window.searchManager.refreshMatchCount === 'function') {
                setTimeout(() => window.searchManager.refreshMatchCount(), 0);
            }
        } catch (error) {
            tabPane.innerHTML = `<div class="error">加载失败: ${error.message}</div>`;
            this.attachFloatingAIBtn(tabId);
            this.clearTabLoadingState(tabPane);
        }
    }

    // 单实例模式：参考 attachFloatingAIBtn，开关挂在 tabs-container，
    // 只在 loadTabContent 完成后调用，彻底绕开时序问题。
    updateUnexecutedToggle(tabId) {
        const tabsContainer = document.querySelector('.tabs-container');
        if (!tabsContainer) return;

        const tabPane = document.querySelector(`.tab-pane[data-id="${tabId}"]`);
        const hasUnexecuted = tabPane
            ? !!tabPane.querySelector('.lprint-trace-line-unexecuted')
            : false;
        const hasTraceLinePre = tabPane
            ? !!tabPane.querySelector('pre.lprint-trace-pre-line.lprint-trace-semantic-code')
            : false;

        let wrap = tabsContainer.querySelector('.unexecuted-toggle-wrap');

        if (!hasTraceLinePre) {
            if (wrap) wrap.style.display = 'none';
            return;
        }

        const logId = tabPane ? (tabPane.dataset.logId || '') : '';
        const key = `showUnexecuted_${logId}`;
        const showUnexecuted = localStorage.getItem(key) !== '0';

        if (tabPane && hasUnexecuted) {
            tabPane.classList.toggle('hide-unexecuted-lines', !showUnexecuted);
        } else if (tabPane) {
            tabPane.classList.remove('hide-unexecuted-lines');
        }

        if (!wrap) {
            wrap = document.createElement('div');
            wrap.className = 'unexecuted-toggle-wrap';
            wrap.innerHTML = `
                <label class="unexecuted-toggle-label" title="\u5207\u6362\u662f\u5426\u663e\u793a\u672a\u8fd0\u884c\u4ee3\u7801\u884c">
                    <input type="checkbox" class="unexecuted-toggle-input">
                    <span>\u663e\u793a\u672a\u8fd0\u884c\u4ee3\u7801</span>
                </label>
            `;
            tabsContainer.appendChild(wrap);

            const input = wrap.querySelector('.unexecuted-toggle-input');
            input.addEventListener('change', () => {
                if (input.disabled) return;
                const checked = !!input.checked;
                const targetTabId = Number(wrap.dataset.targetTabId || '');
                const targetPane = targetTabId
                    ? document.querySelector(`.tab-pane[data-id="${targetTabId}"]`)
                    : null;
                if (targetPane) {
                    targetPane.classList.toggle('hide-unexecuted-lines', !checked);
                }
                wrap.classList.toggle('is-off', !checked);
                const tLogId = wrap.dataset.targetLogId || '';
                if (tLogId) localStorage.setItem(`showUnexecuted_${tLogId}`, checked ? '1' : '0');
            });
        }

        wrap.dataset.targetTabId = String(tabId);
        wrap.dataset.targetLogId = logId;
        wrap.style.display = '';
        wrap.classList.toggle('is-disabled', !hasUnexecuted);

        const input = wrap.querySelector('.unexecuted-toggle-input');
        if (input) {
            input.disabled = !hasUnexecuted;
            input.title = hasUnexecuted
                ? ''
                : '\u672c\u65e5\u5fd7\u65e0\u672a\u6267\u884c\u884c\uff08\u5168\u8def\u5f84\u5df2\u8dd1\u6216\u672a\u5f00\u542f\u9010\u884c trace\uff09';
            if (hasUnexecuted) {
                input.checked = showUnexecuted;
                wrap.classList.toggle('is-off', !showUnexecuted);
            } else {
                input.checked = true;
                wrap.classList.remove('is-off');
            }
        }
    }

    
    switchTab(tabId) {
        // 保存当前标签页的滚动位置
        if (this.activeTabId) {
            const currentPane = document.querySelector(`.tab-pane[data-id="${this.activeTabId}"]`);
            if (currentPane) {
                const scrollPos = currentPane.scrollTop || 0;
                const logId = currentPane.dataset.logId;
                if (logId && scrollPos > 0) {
                    localStorage.setItem(`scrollPosition_${logId}`, scrollPos);
                    console.log('[标签页] 保存滚动位置:', scrollPos, 'logId:', logId);
                }
            }
        }
        
        this.activeTabId = tabId;
        
        document.querySelectorAll('.tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.id == tabId);
        });
        
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.toggle('active', pane.dataset.id == tabId);
        });

        // 懒加载：恢复阶段跳过的标签，切换时才真正请求后端
        // 注意：恢复阶段本身的 switchTab 调用不触发（_isRestoring=true 时跳过）
        const activePane = document.querySelector(`.tab-pane[data-id="${tabId}"]`);
        if (!this._isRestoring && activePane && activePane.dataset.pendingLoad === '1') {
            delete activePane.dataset.pendingLoad;
            const tabInfo = this.tabs.get(tabId);
            if (tabInfo && tabInfo.logId) {
                this.loadTabContent(tabId, tabInfo.logId);
            }
        }
        
        // 恢复新标签页的滚动位置
        setTimeout(() => {
            const newPane = document.querySelector(`.tab-pane[data-id="${tabId}"]`);
            if (newPane) {
                const logId = newPane.dataset.logId;
                if (logId) {
                    const savedScrollPos = localStorage.getItem(`scrollPosition_${logId}`);
                    if (savedScrollPos) {
                        newPane.scrollTop = parseInt(savedScrollPos);
                        console.log('[标签页] 恢复滚动位置:', savedScrollPos, 'logId:', logId);
                    }
                }
            }
        }, 100);
        
        // 保存當前活動標籤（恢復時不保存）
        if (!this._isRestoring) {
            this.saveTabsToStorage();
        }
        
        // 聯動高亮文件列表
        const tabInfo = this.tabs.get(tabId);
        if (tabInfo && window.fileListManager) {
            window.fileListManager.setActiveFile(tabInfo.logId);
        }
        
        // 更新工具栏中的文件路径显示
        this.updateCurrentLogPath(tabId);
        this.syncAddressBarWithActiveTab();

        // 同步当前标签页的“显示未运行代码”开关（固定在非滚动层）
        const togglePane = document.querySelector(`.tab-pane[data-id="${tabId}"]`);
        if (togglePane && togglePane.dataset.logId) {
            this.updateUnexecutedToggle(tabId);
        }
        this.attachFloatingAIBtn(tabId);
        if (window.searchManager && typeof window.searchManager.refreshMatchCount === 'function') {
            window.searchManager.refreshMatchCount();
        }
    }
    
    updateCurrentLogPath(tabId) {
        const pathElement = document.getElementById('current-log-path');
        if (!pathElement) return;
        
        const tabInfo = this.tabs.get(tabId);
        if (tabInfo) {
            // 构造完整路径
            const fullPath = tabInfo.logId;
            pathElement.textContent = fullPath;
            pathElement.title = fullPath;
        } else {
            pathElement.textContent = '未选择日志';
            pathElement.title = '';
        }
    }

    syncAddressBarWithActiveTab() {
        try {
            const url = new URL(window.location.href);
            const activeInfo = this.activeTabId ? this.tabs.get(this.activeTabId) : null;
            const activeLogId = activeInfo && activeInfo.logId ? String(activeInfo.logId).trim() : '';

            if (activeLogId) {
                url.searchParams.set('log', activeLogId);
            } else {
                url.searchParams.delete('log');
            }
            history.replaceState(null, '', url.toString());
        } catch (e) {
            console.warn('[標籤頁] 同步地址欄失敗:', e);
        }
    }
    
    closeTab(tabId) {
        document.querySelector(`.tab[data-id="${tabId}"]`).remove();
        document.querySelector(`.tab-pane[data-id="${tabId}"]`).remove();
        
        this.tabs.delete(tabId);
        
        if (this.activeTabId === tabId) {
            const remaining = Array.from(this.tabs.keys());
            if (remaining.length > 0) {
                this.switchTab(remaining[remaining.length - 1]);
            } else {
                const tabsContainer = document.querySelector('.tabs-container');
                const btn = tabsContainer ? tabsContainer.querySelector('.tab-ai-floating-btn') : null;
                if (btn) btn.remove();
                const tw = tabsContainer ? tabsContainer.querySelector('.unexecuted-toggle-wrap') : null;
                if (tw) tw.style.display = 'none';
                this.updateCurrentLogPath(null);
                this.syncAddressBarWithActiveTab();
            }
        }
        
        // 保存標籤狀態
        this.saveTabsToStorage();
    }
    
    getCurrentTab() {
        if (!this.activeTabId) {
            return null;
        }
        return document.querySelector(`.tab[data-id="${this.activeTabId}"]`);
    }
    
    saveTabsToStorage() {
        try {
            const tabsData = {
                tabs: Array.from(this.tabs.entries()).map(([tabId, info]) => ({
                    tabId,
                    logId: info.logId,
                    filename: info.filename
                })),
                activeTabId: this.activeTabId,
                tabCounter: this.tabCounter
            };
            localStorage.setItem('openTabs', JSON.stringify(tabsData));
        } catch (e) {
            console.warn('[標籤頁] 保存狀態失敗:', e);
        }
    }
    
    restoreTabsFromStorage() {
        try {
            const saved = localStorage.getItem('openTabs');
            if (!saved) return;
            
            const tabsData = JSON.parse(saved);
            if (!tabsData || !tabsData.tabs || tabsData.tabs.length === 0) return;
            
            console.log('[標籤頁] 恢復', tabsData.tabs.length, '個標籤');
            
            this._isRestoring = true;
            
            // 恢復 tabCounter（從保存的值開始，避免 ID 衝突）
            this.tabCounter = tabsData.tabCounter || 0;
            
            // 記錄舊 tabId 到新 tabId 的映射
            const tabIdMap = new Map();
            
            // 恢復每個標籤（按路徑先去重，避免歷史重複數據造成重複標籤）
            const uniqueTabs = [];
            const seenPaths = new Set();
            tabsData.tabs.forEach(tabInfo => {
                const pathKey = this.normalizeLogPath(tabInfo.logId);
                if (!pathKey || seenPaths.has(pathKey)) return;
                seenPaths.add(pathKey);
                uniqueTabs.push(tabInfo);
            });

            uniqueTabs.forEach(tabInfo => {
                const oldTabId = tabInfo.tabId;
                // createTab 會生成新的 tabId
                const newTabId = this.tabCounter + 1;
                this.createTab(tabInfo.logId, tabInfo.filename);
                tabIdMap.set(oldTabId, newTabId);
            });
            
            // 恢復活動標籤（使用映射後的新 tabId）
            if (tabsData.activeTabId) {
                const newActiveTabId = tabIdMap.get(tabsData.activeTabId);
                if (newActiveTabId && this.tabs.has(newActiveTabId)) {
                    this.switchTab(newActiveTabId);
                }
            }
            
            this._isRestoring = false;
            
            // 恢复完成后只加载当前激活标签的内容
            if (this.activeTabId) {
                const activePane = document.querySelector(`.tab-pane[data-id="${this.activeTabId}"]`);
                if (activePane && activePane.dataset.pendingLoad === '1') {
                    delete activePane.dataset.pendingLoad;
                    const tabInfo = this.tabs.get(this.activeTabId);
                    if (tabInfo && tabInfo.logId) {
                        this.loadTabContent(this.activeTabId, tabInfo.logId);
                    }
                }
            }
            
            // 恢復完成後保存一次（更新 tabId 映射）
            this.saveTabsToStorage();
        } catch (e) {
            console.warn('[標籤頁] 恢復狀態失敗:', e);
            this._isRestoring = false;
            // 清除損壞的數據
            localStorage.removeItem('openTabs');
        }
    }
}

// 创建全局 tabManager 实例
window.tabManager = new TabManager();