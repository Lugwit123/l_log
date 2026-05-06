// 工具栏管理
class ToolBar {
    constructor() {
        // 页面刷新时重置为html模式，避免状态混乱
        this.viewMode = 'html';
        localStorage.setItem('logViewMode', this.viewMode);
        this.init();
    }
    
    init() {
        // 视图切换按钮
        document.getElementById('view-switch-btn')?.addEventListener('click', () => {
            this.handleViewSwitch();
        });
        
        // 刷新按钮
        document.getElementById('refresh-log-btn')?.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // 放到下一帧，优先让确认框尽快渲染，避免被当前点击链路阻塞
            requestAnimationFrame(() => this.handleRefreshLog());
        });
        
        // 导出按钮
        document.getElementById('export-btn')?.addEventListener('click', () => {
            if (window.tabManager) {
                window.tabManager.exportCurrentLog();
            }
        });
        
        // Markdown/HTML切换按钮
        document.getElementById('md-html-toggle-btn')?.addEventListener('click', () => {
            this.toggleMarkdownView();
        });
        
        // 设置按钮
        document.getElementById('settings-btn')?.addEventListener('click', () => {
            this.showSettingsModal();
        });
        
        // 字体大小滑块
        const fontSizeSlider = document.getElementById('font-size-slider');
        const fontSizeValue = document.getElementById('font-size-value');
        if (fontSizeSlider && fontSizeValue) {
            // 从localStorage加载保存的字体大小
            const savedFontSize = localStorage.getItem('logFontSize') || '15';
            fontSizeSlider.value = savedFontSize;
            this.updateFontSize(savedFontSize);
            
            fontSizeSlider.addEventListener('input', (e) => {
                const fontSize = e.target.value;
                this.updateFontSize(fontSize);
                // 保存到localStorage
                localStorage.setItem('logFontSize', fontSize);
            });
        }
    }
    
    updateFontSize(fontSize) {
        // 更新显示值
        const fontSizeValue = document.getElementById('font-size-value');
        if (fontSizeValue) {
            fontSizeValue.textContent = fontSize + 'px';
        }
        
        // 应用到所有日志内容区域，包括代码块
        const style = document.getElementById('dynamic-font-style') || document.createElement('style');
        style.id = 'dynamic-font-style';
        style.textContent = `
            /* 日志内容区域 */
            .log-content,
            .markdown-body {
                font-size: ${fontSize}px !important;
                line-height: 1.5 !important;
            }
            
            /* Prism代码块 - USAGE_GUIDE */
            pre[class*="language-"],
            code[class*="language-"],
            pre[class*="language-"] *,
            code[class*="language-"] *,
            [data-component="usage-guide"] pre,
            [data-component="usage-guide"] code,
            [data-component="usage-guide"] pre *,
            [data-component="usage-guide"] code * {
                font-size: ${fontSize}px !important;
                line-height: 1.5 !important;
            }
            
            /* lprint代码块 - 追踪日志 */
            .lprint-trace-code-block,
            .lprint-trace-code-block *,
            .lprint-trace-code-block pre.lprint-trace-pre,
            .lprint-trace-code-block pre.lprint-trace-pre code,
            .lprint-trace-code-block pre.lprint-trace-semantic-code,
            .lprint-trace-code-block pre.lprint-trace-semantic-code code,
            .lprint-trace-pre,
            .lprint-trace-pre *,
            .lprint-trace-pre code,
            .lprint-trace-semantic-code,
            .lprint-trace-semantic-code *,
            .lprint-trace-semantic-code code,
            /* 行号 */
            .lprint-trace-code-line-nums,
            .lprint-trace-code-pre-wrap .lprint-trace-code-line-nums,
            /* 返回值 */
            .lprint-trace-return-pre,
            .lprint-trace-return-pre *,
            .lprint-trace-return-pre-wrap .lprint-trace-return-pre,
            .lprint-trace-return-pre-wrap .lprint-trace-line-nums,
            /* callBy行 */
            .lprint-trace-call,
            /* 其他trace元素 */
            .lprint-trace-inline,
            .lprint-trace-skip,
            .lprint-trace-vars-inline,
            .lprint-trace-return-inline,
            .lprint-trace-expand-container,
            .lprint-trace-expand-container *,
            .lprint-trace-expand-header,
            .lprint-trace-expand-container pre {
                font-size: ${fontSize}px !important;
                line-height: 1.5 !important;
            }
            
            /* 确保所有代码相关元素都被覆盖 */
            pre, code, pre *, code * {
                font-size: ${fontSize}px !important;
                line-height: 1.5 !important;
            }
        `;
        
        if (!style.parentNode) {
            document.head.appendChild(style);
        }
    }
    
    handleViewSwitch() {
        // 切换到简单视图
        if (confirm('切换到简单视图？（当前打开的标签会保留）')) {
            window.location.href = '/simple';
        }
    }
    
    async handleRefreshLog() {
        // 刷新当前打开的日志
        if (!window.tabManager) {
            window.toast.error('TabManager未初始化');
            return;
        }
        
        const currentTab = window.tabManager.getCurrentTab();
        if (!currentTab) {
            window.toast.warning('没有打开的日志');
            return;
        }
        
        const logId = currentTab.dataset.logId;
        const filename = currentTab.querySelector('.tab-title').textContent;
        
        window.toast.confirm(`确定要重新解析日志"${filename}"吗？`, async () => {
            this.setRefreshBusy(true, '准备刷新日志...');
            try {
                // 调用刷新API
                this.setRefreshBusy(true, '正在请求服务端重新解析...');
                console.log(`[刷新] 调用API: /api/log/${logId}/refresh`);
                const response = await fetch(`/api/log/${logId}/refresh`, {
                    method: 'POST'
                });
                
                console.log(`[刷新] 响应状态: ${response.status} ${response.statusText}`);
                
                if (response.ok) {
                    // 重新加载日志（强制刷新已有tab的内容）
                    this.setRefreshBusy(true, '正在加载最新日志内容...');
                    await window.tabManager.reloadLog(logId);
                    this.setRefreshBusy(true, '刷新完成');
                    window.toast.success('日志已刷新');
                } else {
                    // 获取详细错误信息
                    const errorData = await response.json().catch(() => ({}));
                    const errorMsg = errorData.detail || response.statusText;
                    console.error(`[刷新] 失败:`, errorData);
                    window.toast.error(`刷新失败: ${errorMsg}`);
                }
            } catch (error) {
                console.error(`[刷新] 异常:`, error);
                window.toast.error(`刷新失败: ${error.message}`);
            } finally {
                setTimeout(() => this.setRefreshBusy(false), 250);
            }
        });
    }

    setRefreshBusy(isBusy, message = '') {
        const btn = document.getElementById('refresh-log-btn');
        if (btn) {
            btn.disabled = isBusy;
            btn.style.opacity = isBusy ? '0.75' : '';
            btn.style.pointerEvents = isBusy ? 'none' : '';
            btn.textContent = isBusy ? '⏳ 刷新中' : '🔄 刷新';
            btn.title = isBusy ? (message || '刷新中...') : '刷新当前日志';
        }

        let overlay = document.getElementById('refresh-progress-overlay');
        if (isBusy) {
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'refresh-progress-overlay';
                overlay.style.cssText = `
                    position: fixed;
                    right: 20px;
                    bottom: 20px;
                    z-index: 10001;
                    background: rgba(30, 30, 30, 0.95);
                    color: #d4d4d4;
                    border: 1px solid #3c3c3c;
                    border-radius: 8px;
                    padding: 10px 14px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
                    min-width: 220px;
                    font-size: 13px;
                `;
                document.body.appendChild(overlay);
            }
            overlay.innerHTML = `
                <div style="display:flex; align-items:center; gap:8px;">
                    <span style="color:#1890ff;">⏳</span>
                    <span>${message || '刷新中...'}</span>
                </div>
            `;
        } else if (overlay) {
            overlay.remove();
        }
    }
    
    toggleMarkdownView() {
        console.log('toggleMarkdownView 被调用');
        
        if (!window.tabManager || !window.tabManager.activeTabId) {
            alert('没有打开的日志');
            return;
        }
        
        const activeTabId = window.tabManager.activeTabId;
        const tabPane = document.querySelector(`.tab-pane[data-id="${activeTabId}"]`);
        
        if (!tabPane) {
            console.error('未找到活动的tab-pane');
            return;
        }
        
        const logId = tabPane.dataset.logId;
        console.log('当前logId:', logId, '当前模式:', this.viewMode);
        
        // 先保存当前模式，再切换
        const currentMode = this.viewMode;
        this.viewMode = this.viewMode === 'html' ? 'markdown' : 'html';
        localStorage.setItem('logViewMode', this.viewMode);
        
        // 更新按钮文字
        this.updateToggleButton();
        
        // 根据切换后的模式执行相应操作
        if (currentMode === 'html') {
            // 从HTML切换到Markdown源码视图
            console.log('从HTML切换到Markdown');
            this.showMarkdownSource(tabPane, logId);
        } else {
            // 从Markdown切换回HTML渲染视图
            console.log('从Markdown切换到HTML');
            
            // 中断当前渲染（如果正在渲染）
            if (tabPane._renderingInterrupted !== undefined) {
                tabPane._renderingInterrupted = true;
                console.log('中断Markdown渲染');
            }
            
            this.showHtmlRendered(tabPane, logId);
        }
    }
    
    updateToggleButton() {
        const btn = document.getElementById('md-html-toggle-btn');
        if (!btn) return;
        
        if (this.viewMode === 'html') {
            btn.innerHTML = '📝 Markdown';
            btn.title = '切换到Markdown源码视图';
        } else {
            btn.innerHTML = '🌐 HTML';
            btn.title = '切换到HTML渲染视图';
        }
    }
    
    async showMarkdownSource(tabPane, logId) {
        try {
            console.log('开始获取Markdown源码, logId:', logId);
            
            // 保存原有 HTML 内容，以便切换回来（在显示加载提示之前）
            if (!tabPane.dataset.originalHtml) {
                tabPane.dataset.originalHtml = tabPane.innerHTML;
                console.log('已保存原始HTML内容');
            }
            
            // 显示加载提示
            tabPane.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; height: 100%; color: var(--text-color, #d4d4d4);">
                    <div style="text-align: center;">
                        <div style="font-size: 24px; margin-bottom: 10px;">⏳</div>
                        <div>正在加载Markdown源码...</div>
                    </div>
                </div>
            `;
            
            // 获取原始 markdown 内容
            const url = `/api/log/${logId}/raw`;
            console.log('请求URL:', url);
            
            const response = await fetch(url);
            console.log('响应状态:', response.status);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            const data = await response.json();
            const markdown = data.content || '';
            const sizeInMB = (markdown.length / 1024 / 1024).toFixed(2);
            console.log('获取到的内容长度:', markdown.length, `(${sizeInMB} MB)`);
            
            // 分块渲染大文件（直接转换，不弹出确认对话框）
            this.renderMarkdownInChunks(tabPane, markdown, sizeInMB);
        } catch (error) {
            console.error('获取 Markdown 源码失败:', error);
            alert('获取 Markdown 源码失败: ' + error.message);
        }
    }
    
    async showHtmlRendered(tabPane, logId) {
        console.log('showHtmlRendered 被调用，检查 originalHtml:', !!tabPane.dataset.originalHtml);
        
        // 如果有保存的原有 HTML，直接恢复
        if (tabPane.dataset.originalHtml) {
            console.log('恢复保存的HTML内容');
            tabPane.innerHTML = tabPane.dataset.originalHtml;
            delete tabPane.dataset.originalHtml;
            
            // 重新初始化代码高亮和树视图
            if (window.Prism) {
                Prism.highlightAllUnder(tabPane);
            }
            if (typeof processCallLinks === 'function') {
                processCallLinks(tabPane);
            }
            if (typeof buildTraceTreeView === 'function') {
                buildTraceTreeView(tabPane);
            }
        } else {
            console.log('没有保存的HTML，强制重新加载');
            // 强制重新加载（用于中断渲染的情况）
            const tabInfo = window.tabManager.tabs.get(window.tabManager.activeTabId);
            if (tabInfo && window.tabManager) {
                console.log('调用 loadTabContent 重新加载:', tabInfo.logId);
                window.tabManager.loadTabContent(window.tabManager.activeTabId, tabInfo.logId);
            } else {
                console.error('无法获取tab信息或tabManager不存在');
            }
        }
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    renderMarkdownInChunks(tabPane, markdown, sizeInMB) {
        const CHUNK_SIZE = 500000; // 每块50万字符，减少块数提升性能
        const totalChunks = Math.ceil(markdown.length / CHUNK_SIZE);
        let currentChunk = 0;
        let isRendering = true;
        
        // 保存中断标志到tabPane，允许外部中断
        tabPane._renderingInterrupted = false;
        
        console.log(`开始分块渲染，总共 ${totalChunks} 块 (每块${CHUNK_SIZE/1000}K字符)`);
        
        // 创建容器和进度条
        tabPane.innerHTML = `
            <div class="markdown-source-view" style="padding: 4px; background: var(--bg-color, #1e1e1e); height: 100%; overflow: auto; position: relative;">
                <pre id="markdown-content" style="margin: 0; white-space: pre-wrap; word-wrap: break-word; font-family: 'Consolas', 'Monaco', monospace; font-size: 13px; line-height: 1.5; color: var(--text-color, #d4d4d4);"></pre>
                <div id="markdown-progress" style="position: fixed; bottom: 20px; right: 20px; background: rgba(30, 30, 30, 0.95); padding: 12px 16px; border-radius: 8px; border: 1px solid #444; z-index: 1000; min-width: 250px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <div style="flex: 1; background: #333; border-radius: 10px; height: 20px; overflow: hidden;">
                            <div id="progress-bar" style="background: linear-gradient(90deg, #1890ff, #52c41a); height: 100%; width: 0%; transition: width 0.3s;"></div>
                        </div>
                        <div id="progress-text" style="color: #1890ff; font-weight: bold; min-width: 80px;">0%</div>
                    </div>
                    <div style="color: #888; font-size: 12px; margin-top: 5px;">正在加载 ${sizeInMB} MB 文件...</div>
                </div>
            </div>
        `;
        
        const contentPre = document.getElementById('markdown-content');
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const progressContainer = document.getElementById('markdown-progress');
        
        // 分块渲染函数
        const renderNextChunk = () => {
            // 检查是否被中断
            if (tabPane._renderingInterrupted) {
                console.log('Markdown渲染被用户中断');
                isRendering = false;
                // 立即移除进度条
                if (progressContainer && progressContainer.parentNode) {
                    progressContainer.remove();
                }
                return;
            }
            
            if (currentChunk >= totalChunks) {
                // 渲染完成
                console.log('Markdown源码分块渲染完成');
                isRendering = false;
                
                // 淡出进度条
                progressContainer.style.transition = 'opacity 0.5s ease-out';
                progressContainer.style.opacity = '0';
                setTimeout(() => {
                    if (progressContainer) {
                        progressContainer.remove();
                    }
                }, 500);
                
                // 显示成功提示
                if (window.toast) {
                    window.toast.success(`已切换到Markdown源码视图 (${sizeInMB} MB)`);
                }
                return;
            }
            
            // 计算当前块的范围
            const start = currentChunk * CHUNK_SIZE;
            const end = Math.min(start + CHUNK_SIZE, markdown.length);
            const chunk = markdown.substring(start, end);
            
            // 转义并追加到内容
            const escapedChunk = this.escapeHtml(chunk);
            contentPre.insertAdjacentHTML('beforeend', escapedChunk);
            
            // 更新进度
            currentChunk++;
            const progress = Math.round((currentChunk / totalChunks) * 100);
            
            // 每5块更新一次进度条，减少DOM操作
            if (currentChunk % 5 === 0 || currentChunk === totalChunks) {
                progressBar.style.width = progress + '%';
                progressText.textContent = progress + '%';
                console.log(`已渲染 ${currentChunk}/${totalChunks} 块 (${progress}%)`);
            }
            
            // 使用 requestAnimationFrame 渲染下一块
            requestAnimationFrame(renderNextChunk);
        };
        
        // 开始渲染
        requestAnimationFrame(renderNextChunk);
    }
    
    showSettingsModal() {
        // 创建模态框
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        
        // 获取当前字体大小
        const currentFontSize = localStorage.getItem('logFontSize') || '15';
        
        modal.innerHTML = `
            <div style="
                background: #2d2d2d;
                border: 1px solid #3c3c3c;
                border-radius: 8px;
                padding: 25px;
                min-width: 400px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            ">
                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    border-bottom: 1px solid #3c3c3c;
                    padding-bottom: 15px;
                ">
                    <h3 style="margin: 0; color: #1890ff; font-size: 18px;">⚙️ 设置</h3>
                    <button id="settings-close-btn" style="
                        padding: 6px 12px;
                        background: rgba(255, 107, 107, 0.2);
                        border: 1px solid #ff6b6b;
                        color: #ff6b6b;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: 600;
                    ">✕ 关闭</button>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="margin: 0 0 15px 0; color: #d4d4d4; font-size: 14px;">📝 字体大小</h4>
                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        padding: 15px;
                        background: #1e1e1e;
                        border-radius: 6px;
                        border: 1px solid #3c3c3c;
                    ">
                        <label style="color: #999; font-size: 13px; min-width: 60px;">字体:</label>
                        <input type="range" id="modal-font-size-slider" min="10" max="36" value="${currentFontSize}" step="1" style="
                            flex: 1;
                            height: 6px;
                            background: #3c3c3c;
                            border-radius: 3px;
                            outline: none;
                            -webkit-appearance: none;
                        ">
                        <span id="modal-font-size-value" style="
                            min-width: 45px;
                            color: #1890ff;
                            font-weight: 600;
                            font-size: 14px;
                        ">${currentFontSize}px</span>
                    </div>
                    <div style="
                        margin-top: 10px;
                        display: flex;
                        justify-content: space-between;
                        font-size: 12px;
                        color: #888;
                    ">
                        <span>最小: 10px</span>
                        <span>推荐: 15-18px</span>
                        <span>最大: 36px</span>
                    </div>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <h4 style="margin: 0 0 15px 0; color: #d4d4d4; font-size: 14px;">🔧 调试选项</h4>
                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        padding: 15px;
                        background: #1e1e1e;
                        border-radius: 6px;
                        border: 1px solid #3c3c3c;
                    ">
                        <label style="color: #999; font-size: 13px; flex: 1;">显示 Markdown 渲染器状态</label>
                        <div style="position: relative;">
                            <input type="checkbox" id="markdown-status-toggle" style="
                                width: 44px;
                                height: 24px;
                                appearance: none;
                                background: #3c3c3c;
                                border-radius: 12px;
                                cursor: pointer;
                                transition: background 0.3s;
                                position: relative;
                            ">
                            <style>
                                #markdown-status-toggle:checked,
                                #frontend-log-toggle:checked {
                                    background: #1890ff;
                                }
                                #markdown-status-toggle::after,
                                #frontend-log-toggle::after {
                                    content: '';
                                    position: absolute;
                                    width: 18px;
                                    height: 18px;
                                    background: white;
                                    border-radius: 50%;
                                    top: 3px;
                                    left: 3px;
                                    transition: transform 0.3s;
                                }
                                #markdown-status-toggle:checked::after,
                                #frontend-log-toggle:checked::after {
                                    transform: translateX(20px);
                                }
                            </style>
                        </div>
                    </div>
                    <div style="
                        margin-top: 10px;
                        font-size: 12px;
                        color: #888;
                    ">
                        控制右下角 Markdown 渲染器状态信息的显示
                    </div>
                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        padding: 15px;
                        background: #1e1e1e;
                        border-radius: 6px;
                        border: 1px solid #3c3c3c;
                        margin-top: 12px;
                    ">
                        <label style="color: #999; font-size: 13px; flex: 1;">显示前端控制台日志</label>
                        <div style="position: relative;">
                            <input type="checkbox" id="frontend-log-toggle" style="
                                width: 44px;
                                height: 24px;
                                appearance: none;
                                background: #3c3c3c;
                                border-radius: 12px;
                                cursor: pointer;
                                transition: background 0.3s;
                                position: relative;
                            ">
                        </div>
                    </div>
                    <div style="
                        margin-top: 10px;
                        font-size: 12px;
                        color: #888;
                    ">
                        默认关闭。关闭后静默 log/info/debug（warn/error 仍保留）
                    </div>
                </div>
                
                <div style="
                    display: flex;
                    gap: 10px;
                    justify-content: flex-end;
                    margin-top: 20px;
                ">
                    <button id="settings-reset-btn" style="
                        padding: 8px 16px;
                        background: transparent;
                        border: 1px solid #666;
                        color: #999;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 13px;
                    ">重置默认</button>
                    <button id="settings-apply-btn" style="
                        padding: 8px 20px;
                        background: #1890ff;
                        border: 1px solid #1890ff;
                        color: white;
                        border-radius: 4px;
                        cursor: pointer;
                        font-weight: 600;
                        font-size: 13px;
                    ">应用</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // 绑定事件
        const modalSlider = modal.querySelector('#modal-font-size-slider');
        const modalValue = modal.querySelector('#modal-font-size-value');
        const closeBtn = modal.querySelector('#settings-close-btn');
        const resetBtn = modal.querySelector('#settings-reset-btn');
        const applyBtn = modal.querySelector('#settings-apply-btn');
        const markdownToggle = modal.querySelector('#markdown-status-toggle');
        const frontendLogToggle = modal.querySelector('#frontend-log-toggle');
        
        // 获取当前设置
        const currentMarkdownStatus = localStorage.getItem('showMarkdownStatus') !== 'false'; // 默认显示
        markdownToggle.checked = currentMarkdownStatus;
        const currentFrontendDebug = typeof window.isFrontendDebugEnabled === 'function'
            ? window.isFrontendDebugEnabled()
            : false;
        frontendLogToggle.checked = currentFrontendDebug;
        
        // 滑块事件
        modalSlider.addEventListener('input', (e) => {
            const fontSize = e.target.value;
            modalValue.textContent = fontSize + 'px';
        });
        
        // Markdown 状态开关事件
        markdownToggle.addEventListener('change', (e) => {
            const showStatus = e.target.checked;
            console.log('[设置] Markdown 状态开关:', showStatus);
            
            // 保存设置
            localStorage.setItem('showMarkdownStatus', showStatus);
            
            // 立即应用设置
            const statusDiv = document.getElementById('markdown-renderer-status');
            if (statusDiv) {
                statusDiv.style.display = showStatus ? 'block' : 'none';
                console.log('[设置] 已更新状态显示:', showStatus ? '显示' : '隐藏');
            }
        });

        // 前端日志开关（即时生效）
        frontendLogToggle.addEventListener('change', (e) => {
            const showFrontendLog = e.target.checked;
            if (typeof window.setFrontendDebug === 'function') {
                window.setFrontendDebug(showFrontendLog);
            } else {
                localStorage.setItem('l_log_frontend_debug', showFrontendLog ? '1' : '0');
            }
        });
        
        // 关闭按钮
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // 重置按钮
        resetBtn.addEventListener('click', () => {
            modalSlider.value = '15';
            modalValue.textContent = '15px';
            markdownToggle.checked = true; // 重置为显示
            frontendLogToggle.checked = false; // 重置为关闭日志
            if (typeof window.setFrontendDebug === 'function') {
                window.setFrontendDebug(false);
            }
        });
        
        // 应用按钮
        applyBtn.addEventListener('click', () => {
            const fontSize = modalSlider.value;
            const showMarkdownStatus = markdownToggle.checked;
            const showFrontendLog = frontendLogToggle.checked;
            
            // 更新工具栏滑块
            const toolbarSlider = document.getElementById('font-size-slider');
            const toolbarValue = document.getElementById('font-size-value');
            if (toolbarSlider && toolbarValue) {
                toolbarSlider.value = fontSize;
                toolbarValue.textContent = fontSize + 'px';
                this.updateFontSize(fontSize);
                localStorage.setItem('logFontSize', fontSize);
            }
            
            // 保存 Markdown 状态设置
            localStorage.setItem('showMarkdownStatus', showMarkdownStatus);
            if (typeof window.setFrontendDebug === 'function') {
                window.setFrontendDebug(showFrontendLog);
            } else {
                localStorage.setItem('l_log_frontend_debug', showFrontendLog ? '1' : '0');
            }
            
            // 关闭弹窗
            document.body.removeChild(modal);
            
            // 显示成功提示
            if (window.toast) {
                window.toast.success('设置已更新');
            }
        });
        
        // 点击背景关闭
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
        
        // ESC键关闭
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
        
        // 添加滑块样式
        const style = document.createElement('style');
        style.textContent = `
            #modal-font-size-slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 18px;
                height: 18px;
                background: #1890ff;
                border-radius: 50%;
                cursor: pointer;
            }
            
            #modal-font-size-slider::-moz-range-thumb {
                width: 18px;
                height: 18px;
                background: #1890ff;
                border-radius: 50%;
                cursor: pointer;
                border: none;
            }
            
            #modal-font-size-slider::-webkit-slider-thumb:hover {
                background: #40a9ff;
                transform: scale(1.1);
            }
            
            #modal-font-size-slider::-moz-range-thumb:hover {
                background: #40a9ff;
                transform: scale(1.1);
            }
        `;
        document.head.appendChild(style);
    }
}

// 初始化
const toolBar = new ToolBar();
