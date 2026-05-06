// AI助手模块
class AIAssistant {
    constructor() {
        this.isOpen = false;
        this.currentContext = null;
        this.isMaximized = false;
        this.isDragging = false;
        this.isResizing = false;
        this.dragOffset = { x: 0, y: 0 };
        this.resizeStartPos = { x: 0, y: 0, width: 0, height: 0 };
        this.presetQuestions = {
            code: [
                "这段代码的功能是什么？",
                "有什么潜在的bug或性能问题吗？",
                "如何优化这段代码？",
                "这段代码的时间复杂度是多少？",
                "请解释关键变量和逻辑"
            ],
            call_tree: [
                "找出这个调用链中的性能瓶颈",
                "哪些函数调用最频繁？",
                "有异常的调用模式吗？",
                "如何优化这个调用流程？",
                "解释这个调用链的执行流程"
            ],
            trace_log: [
                "总结这段日志的关键信息",
                "有什么异常或错误吗？",
                "执行流程是什么？",
                "性能瓶颈在哪里？"
            ]
        };
        this.init();
    }

    init() {
        this.createUI();
        this.bindEvents();
    }

    createUI() {
        const html = `
            <div id="ai-assistant-panel" class="ai-panel" style="display: none;">
                <div class="ai-panel-header" id="ai-panel-header">
                    <h3 style="margin: 0; color: #1890ff; display: flex; align-items: center; gap: 8px; cursor: move; flex: 1;">
                        <span>🤖</span>
                        <span id="ai-title-text">AI 助手</span>
                    </h3>
                    <div style="display: flex; gap: 4px;">
                        <button id="ai-minimize-btn" class="ai-window-btn" title="最小化">−</button>
                        <button id="ai-maximize-btn" class="ai-window-btn" title="最大化/还原">□</button>
                        <button id="ai-close-btn" class="ai-window-btn ai-close-btn" title="关闭">✕</button>
                    </div>
                </div>
                
                <div class="ai-panel-body">
                    <div class="ai-input-section">
                        <select id="ai-preset-select" class="ai-preset-select">
                            <option value="">💡 选择预设问题或输入自定义问题</option>
                        </select>
                        
                        <textarea id="ai-question-input" placeholder="在此输入您的问题...（Ctrl+Enter提问）" rows="2"></textarea>
                        
                        <button id="ai-ask-btn" class="ai-ask-btn">
                            <span class="ai-btn-text">🚀 提问</span>
                            <span class="ai-btn-loading" style="display: none;">思考中...</span>
                        </button>
                    </div>
                    
                    <div id="ai-result" class="ai-result" style="display: none;">
                        <div class="ai-result-header">
                            <strong>AI 回答：</strong>
                            <div style="display: flex; gap: 10px; align-items: center;">
                                <span id="ai-token-stats" class="ai-token-stats" style="font-size: 0.85em; color: #999;"></span>
                                <button id="ai-view-input-btn" class="ai-copy-btn" title="查看输入内容">👁️ 输入</button>
                                <button id="ai-copy-btn" class="ai-copy-btn" title="复制回答">📋 复制</button>
                            </div>
                        </div>
                        <div id="ai-result-content" class="ai-result-content"></div>
                    </div>
                </div>
                
                <!-- 调整大小手柄 -->
                <div class="ai-resize-handle ai-resize-right" data-direction="right"></div>
                <div class="ai-resize-handle ai-resize-bottom" data-direction="bottom"></div>
                <div class="ai-resize-handle ai-resize-corner" data-direction="both"></div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', html);
        
        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            .ai-panel {
                position: fixed;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 550px;
                height: 600px;
                min-width: 400px;
                min-height: 400px;
                max-width: 95vw;
                max-height: 95vh;
                background: #252526;
                border: 1px solid #3c3c3c;
                border-radius: 8px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
                z-index: 10000;
                display: flex;
                flex-direction: column;
                resize: none;
            }
            
            .ai-panel.maximized {
                left: 0 !important;
                top: 0 !important;
                transform: none !important;
                width: 100vw !important;
                height: 100vh !important;
                border-radius: 0;
            }
            
            .ai-panel-header {
                padding: 15px;
                border-bottom: 1px solid #3c3c3c;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: #1e1e1e;
                border-radius: 8px 8px 0 0;
            }
            
            .ai-window-btn {
                background: transparent;
                border: none;
                color: #999;
                font-size: 16px;
                cursor: pointer;
                padding: 0;
                width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                transition: all 0.2s;
            }
            
            .ai-window-btn:hover {
                background: #3c3c3c;
                color: #fff;
            }
            
            .ai-close-btn:hover {
                background: #e81123;
                color: #fff;
            }
            
            .ai-resize-handle {
                position: absolute;
                background: transparent;
                z-index: 10;
            }
            
            .ai-resize-right {
                right: 0;
                top: 0;
                width: 8px;
                height: 100%;
                cursor: ew-resize;
            }
            
            .ai-resize-bottom {
                left: 0;
                bottom: 0;
                width: 100%;
                height: 8px;
                cursor: ns-resize;
            }
            
            .ai-resize-corner {
                right: 0;
                bottom: 0;
                width: 20px;
                height: 20px;
                cursor: nwse-resize;
                background: linear-gradient(135deg, transparent 50%, #3c3c3c 50%);
                border-radius: 0 0 8px 0;
            }
            
            .ai-resize-corner:hover {
                background: linear-gradient(135deg, transparent 50%, #1890ff 50%);
            }
            
            .ai-panel-body {
                padding: 12px;
                overflow-y: auto;
                flex: 1;
                display: flex;
                flex-direction: column;
                gap: 12px;
            }
            
            .ai-input-section {
                display: flex;
                flex-direction: column;
                gap: 8px;
                flex-shrink: 0;
            }
            
            .ai-preset-select {
                width: 100%;
                padding: 8px 12px;
                background: #1e1e1e;
                border: 1px solid #3c3c3c;
                border-radius: 6px;
                color: #d4d4d4;
                font-size: 0.95em;
                cursor: pointer;
                transition: all 0.2s;
            }
            
            .ai-preset-select:hover {
                border-color: #1890ff;
            }
            
            .ai-preset-select:focus {
                outline: none;
                border-color: #1890ff;
                box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
            }
            
            .ai-preset-select option {
                background: #1e1e1e;
                color: #d4d4d4;
                padding: 8px;
            }
            
            #ai-question-input {
                width: 100%;
                padding: 8px 10px;
                background: #1e1e1e;
                border: 1px solid #3c3c3c;
                border-radius: 6px;
                color: #d4d4d4;
                font-family: inherit;
                font-size: 0.95em;
                resize: vertical;
                min-height: 50px;
            }
            
            #ai-question-input:focus {
                outline: none;
                border-color: #1890ff;
            }
            
            .ai-ask-btn {
                width: 100%;
                padding: 8px;
                background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
                border: none;
                border-radius: 6px;
                color: white;
                font-weight: 600;
                cursor: pointer;
                font-size: 0.95em;
                transition: all 0.2s;
            }
            
            .ai-ask-btn:hover:not(:disabled) {
                background: linear-gradient(135deg, #40a9ff 0%, #1890ff 100%);
                transform: translateY(-1px);
                box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
            }
            
            .ai-ask-btn:disabled {
                opacity: 0.6;
                cursor: not-allowed;
            }
            
            @keyframes spin {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(360deg);
                }
            }
            
            @keyframes pulse {
                0%, 100% {
                    opacity: 1;
                }
                50% {
                    opacity: 0.6;
                }
            }
            
            .ai-btn-loading {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                animation: pulse 1.5s ease-in-out infinite;
            }
            
            .ai-btn-loading::before {
                content: '⏳';
                display: inline-block;
                animation: spin 2s linear infinite;
            }
            
            .ai-result {
                padding: 12px;
                background: #1e1e1e;
                border: 1px solid #3c3c3c;
                border-radius: 6px;
                flex: 1;
                display: flex !important;
                flex-direction: column;
                overflow: hidden;
                min-height: 0;
            }
            
            .ai-result-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 10px;
                padding-bottom: 8px;
                border-bottom: 1px solid #3c3c3c;
                flex-shrink: 0;
            }
            
            .ai-copy-btn {
                background: transparent;
                border: 1px solid #3c3c3c;
                padding: 4px 10px;
                border-radius: 4px;
                color: #999;
                cursor: pointer;
                font-size: 0.9em;
            }
            
            .ai-copy-btn:hover {
                background: #3c3c3c;
                color: #fff;
            }
            
            .ai-result-content {
                color: #d4d4d4;
                line-height: 1.8;
                word-wrap: break-word;
                font-size: 1.05em;
                flex: 1;
                overflow-y: auto;
                padding-right: 8px;
            }
            
            .ai-result-content::-webkit-scrollbar {
                width: 10px;
            }
            
            .ai-result-content::-webkit-scrollbar-track {
                background: #1e1e1e;
                border-radius: 5px;
            }
            
            .ai-result-content::-webkit-scrollbar-thumb {
                background: #3c3c3c;
                border-radius: 5px;
            }
            
            .ai-result-content::-webkit-scrollbar-thumb:hover {
                background: #1890ff;
            }
            
            .ai-result-content h1,
            .ai-result-content h2,
            .ai-result-content h3 {
                color: #1890ff;
                margin-top: 20px;
                margin-bottom: 10px;
            }
            
            .ai-result-content h1 { font-size: 1.5em; }
            .ai-result-content h2 { font-size: 1.3em; }
            .ai-result-content h3 { font-size: 1.1em; }
            
            .ai-result-content code {
                background: #2d2d2d;
                padding: 2px 6px;
                border-radius: 3px;
                font-family: 'Consolas', monospace;
                color: #52c41a;
            }
            
            .ai-result-content pre {
                background: #2d2d2d;
                padding: 15px;
                border-radius: 4px;
                overflow-x: auto;
                margin: 10px 0;
                border-left: 3px solid #1890ff;
            }
            
            .ai-result-content pre code {
                background: transparent;
                padding: 0;
                color: #d4d4d4;
            }
            
            .ai-result-content ul,
            .ai-result-content ol {
                margin: 10px 0;
                padding-left: 25px;
            }
            
            .ai-result-content li {
                margin: 5px 0;
            }
            
            .ai-result-content strong {
                color: #1890ff;
                font-weight: 600;
            }
            
            .ai-result-content em {
                color: #52c41a;
                font-style: italic;
            }
        `;
        document.head.appendChild(style);
    }

    bindEvents() {
        const panel = document.getElementById('ai-assistant-panel');
        const header = document.getElementById('ai-panel-header');
        const closeBtn = document.getElementById('ai-close-btn');
        const minimizeBtn = document.getElementById('ai-minimize-btn');
        const maximizeBtn = document.getElementById('ai-maximize-btn');
        
        // 关闭按钮
        closeBtn.addEventListener('click', () => this.close());
        
        // 最小化按钮
        minimizeBtn.addEventListener('click', () => this.minimize());
        
        // 最大化/还原按钮
        maximizeBtn.addEventListener('click', () => this.toggleMaximize());
        
        // 窗口拖拽
        header.addEventListener('mousedown', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            if (this.isMaximized) return;
            
            this.isDragging = true;
            const rect = panel.getBoundingClientRect();
            this.dragOffset = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
            panel.style.transition = 'none';
            e.preventDefault();
        });
        
        // 调整大小手柄
        const resizeHandles = panel.querySelectorAll('.ai-resize-handle');
        resizeHandles.forEach(handle => {
            handle.addEventListener('mousedown', (e) => {
                if (this.isMaximized) return;
                
                this.isResizing = true;
                this.resizeDirection = handle.dataset.direction;
                const rect = panel.getBoundingClientRect();
                this.resizeStartPos = {
                    x: e.clientX,
                    y: e.clientY,
                    width: rect.width,
                    height: rect.height,
                    left: rect.left,
                    top: rect.top
                };
                panel.style.transition = 'none';
                e.preventDefault();
                e.stopPropagation();
            });
        });
        
        // 全局鼠标移动事件
        document.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                const newLeft = e.clientX - this.dragOffset.x;
                const newTop = e.clientY - this.dragOffset.y;
                
                panel.style.left = newLeft + 'px';
                panel.style.top = newTop + 'px';
                panel.style.transform = 'none';
            } else if (this.isResizing) {
                const deltaX = e.clientX - this.resizeStartPos.x;
                const deltaY = e.clientY - this.resizeStartPos.y;
                
                if (this.resizeDirection === 'right' || this.resizeDirection === 'both') {
                    const newWidth = Math.max(400, this.resizeStartPos.width + deltaX);
                    panel.style.width = newWidth + 'px';
                }
                
                if (this.resizeDirection === 'bottom' || this.resizeDirection === 'both') {
                    const newHeight = Math.max(400, this.resizeStartPos.height + deltaY);
                    panel.style.height = newHeight + 'px';
                }
            }
        });
        
        // 全局鼠标释放事件
        document.addEventListener('mouseup', () => {
            if (this.isDragging || this.isResizing) {
                this.saveWindowState();
            }
            this.isDragging = false;
            this.isResizing = false;
            panel.style.transition = '';
        });
        
        // ESC键关闭
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && panel.style.display === 'flex') {
                this.close();
            }
        });
        
        // 提问按钮
        document.getElementById('ai-ask-btn').addEventListener('click', () => {
            const question = document.getElementById('ai-question-input').value.trim();
            if (question && this.currentContext) {
                this.askAI(question);
            }
        });
        
        // 回车提问
        document.getElementById('ai-question-input').addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
                const question = document.getElementById('ai-question-input').value.trim();
                if (question && this.currentContext) {
                    this.askAI(question);
                }
            }
        });
        
        // 复制按钮
        document.getElementById('ai-copy-btn').addEventListener('click', () => {
            const content = document.getElementById('ai-result-content').textContent;
            navigator.clipboard.writeText(content).then(() => {
                const btn = document.getElementById('ai-copy-btn');
                const originalText = btn.textContent;
                btn.textContent = '✓ 已复制';
                setTimeout(() => {
                    btn.textContent = originalText;
                }, 2000);
            });
        });
        
        // 查看输入内容按钮
        document.getElementById('ai-view-input-btn').addEventListener('click', () => {
            this.showInputContent();
        });
        
        // 预设问题下拉框选择事件
        const presetSelect = document.getElementById('ai-preset-select');
        presetSelect.addEventListener('change', (e) => {
            const question = e.target.value;
            if (question) {
                document.getElementById('ai-question-input').value = question;
                // 重置下拉框到默认值
                e.target.value = '';
            }
        });
    }

    open(context) {
        this.currentContext = context;
        this.isOpen = true;
        
        // 检查是否在独立窗口模式
        const usePopupWindow = localStorage.getItem('ai-assistant-popup-mode') === 'true';
        
        if (usePopupWindow) {
            this.openInPopupWindow(context);
        } else {
            this.openInPanel(context);
        }
    }
    
    openInPopupWindow(context) {
        // 存储上下文到localStorage供新窗口使用
        const contextData = {
            type: context.type,
            content: context.content,
            timestamp: Date.now()
        };
        localStorage.setItem('ai-assistant-context', JSON.stringify(contextData));
        
        // 打开新窗口
        const width = 600;
        const height = 700;
        const left = (screen.width - width) / 2;
        const top = (screen.height - height) / 2;
        
        this.popupWindow = window.open(
            '/ai-assistant-window',
            'AI助手',
            `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
        );
        
        if (!this.popupWindow) {
            alert('无法打开AI助手窗口，请允许弹出窗口');
            this.openInPanel(context); // 降级到面板模式
        }
    }
    
    openInPanel(context) {
        const panel = document.getElementById('ai-assistant-panel');
        panel.style.display = 'flex';
        
        // 更新标题显示当前分析内容
        const titleText = document.getElementById('ai-title-text');
        if (titleText) {
            let title = 'AI 助手';
            if (context.type === 'code') {
                // 从内容中提取函数名
                const funcMatch = context.content.match(/def\s+(\w+)\s*\(/);
                const funcName = funcMatch ? funcMatch[1] : '代码';
                title = `分析函数: ${funcName}`;
            } else if (context.type === 'call_tree') {
                // 从调用链中提取主函数名
                const lines = context.content.split('\n');
                const firstCall = lines.find(line => line.includes('├─') || line.includes('└─'));
                if (firstCall) {
                    const funcMatch = firstCall.match(/[├└]─\s*(\w+)/);
                    const funcName = funcMatch ? funcMatch[1] : '调用链';
                    title = `分析调用链: ${funcName}`;
                } else {
                    title = '分析调用链';
                }
            } else if (context.type === 'trace_log') {
                title = '分析追踪日志';
            }
            titleText.textContent = title;
            titleText.title = title; // 悬停显示完整标题
        }
        
        // 填充下拉框选项
        const questions = this.presetQuestions[context.type] || [];
        const select = document.getElementById('ai-preset-select');
        
        // 清空现有选项（保留第一个默认选项）
        select.innerHTML = '<option value="">-- 请选择预设问题 --</option>';
        
        // 添加预设问题选项
        questions.forEach(q => {
            const option = document.createElement('option');
            option.value = q;
            option.textContent = q;
            select.appendChild(option);
        });
        
        // 清空之前的结果
        document.getElementById('ai-result').style.display = 'none';
        document.getElementById('ai-question-input').value = '';
        select.value = '';
        document.getElementById('ai-question-input').focus();
    }

    close() {
        this.isOpen = false;
        document.getElementById('ai-assistant-panel').style.display = 'none';
    }

    minimize() {
        this.close();
    }

    toggleMaximize() {
        const panel = document.getElementById('ai-assistant-panel');
        this.isMaximized = !this.isMaximized;
        
        if (this.isMaximized) {
            panel.classList.add('maximized');
        } else {
            panel.classList.remove('maximized');
            this.loadWindowState();
        }
    }

    saveWindowState() {
        const panel = document.getElementById('ai-assistant-panel');
        const rect = panel.getBoundingClientRect();
        
        const state = {
            left: panel.style.left,
            top: panel.style.top,
            width: panel.style.width,
            height: panel.style.height,
            transform: panel.style.transform
        };
        
        localStorage.setItem('ai-assistant-window-state', JSON.stringify(state));
    }

    loadWindowState() {
        const panel = document.getElementById('ai-assistant-panel');
        const savedState = localStorage.getItem('ai-assistant-window-state');
        
        if (savedState) {
            try {
                const state = JSON.parse(savedState);
                if (state.left) panel.style.left = state.left;
                if (state.top) panel.style.top = state.top;
                if (state.width) panel.style.width = state.width;
                if (state.height) panel.style.height = state.height;
                if (state.transform) panel.style.transform = state.transform;
            } catch (e) {
                console.error('Failed to load AI assistant window state:', e);
            }
        }
    }

    renderMarkdown(text) {
        // 使用marked.js渲染Markdown
        if (typeof marked !== 'undefined') {
            // 配置marked选项
            marked.setOptions({
                breaks: true,  // 支持GFM换行
                gfm: true,     // 启用GitHub风格Markdown
                headerIds: false,  // 不生成header id
                mangle: false  // 不混淆邮箱地址
            });
            
            const html = marked.parse(text);
            
            // 应用代码高亮（如果Prism可用）
            setTimeout(() => {
                if (window.Prism) {
                    Prism.highlightAll();
                }
            }, 0);
            
            return html;
        } else {
            // 降级：如果marked未加载，返回纯文本
            return text.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
        }
    }

    async askAI(question) {
        const askBtn = document.getElementById('ai-ask-btn');
        const resultDiv = document.getElementById('ai-result');
        const resultContent = document.getElementById('ai-result-content');
        const tokenStats = document.getElementById('ai-token-stats');
        
        // 显示加载状态
        askBtn.disabled = true;
        askBtn.querySelector('.ai-btn-text').style.display = 'none';
        askBtn.querySelector('.ai-btn-loading').style.display = 'inline';
        
        resultDiv.style.display = 'flex';
        resultContent.textContent = '';
        if (tokenStats) tokenStats.textContent = '';
        
        let fullText = '';
        let usageData = null;
        
        try {
            const response = await fetch('/api/ai/analyze-stream', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content: this.currentContext.content,
                    question: question,
                    type: this.currentContext.type
                })
            });
            
            const reader = response.body.getReader();
            const decoder = new TextDecoder();
            
            while (true) {
                const {done, value} = await reader.read();
                if (done) break;
                
                const chunk = decoder.decode(value);
                const lines = chunk.split('\n');
                
                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.slice(6);
                        if (data === '[DONE]') break;
                        
                        try {
                            const parsed = JSON.parse(data);
                            
                            if (parsed.type === 'content') {
                                fullText += parsed.data;
                                // 实时渲染Markdown
                                resultContent.innerHTML = this.renderMarkdown(fullText);
                                // 自动滚动到底部
                                resultContent.scrollTop = resultContent.scrollHeight;
                            } else if (parsed.type === 'usage') {
                                usageData = parsed.data;
                            } else if (parsed.type === 'error') {
                                resultContent.textContent = `错误: ${parsed.data}`;
                            }
                        } catch (e) {
                            // 忽略JSON解析错误
                        }
                    }
                }
            }
            
            // 显示token统计信息
            if (tokenStats && usageData) {
                const promptTokens = usageData.prompt_tokens || 0;
                const completionTokens = usageData.completion_tokens || 0;
                const totalTokens = usageData.total_tokens || 0;
                
                // DeepSeek定价：输入¥0.001/1K，输出¥0.002/1K
                const promptCost = (promptTokens / 1000) * 0.001;
                const completionCost = (completionTokens / 1000) * 0.002;
                const totalCost = promptCost + completionCost;
                
                // 显示格式：输入/输出分开显示
                tokenStats.textContent = `📊 输入:${promptTokens} 输出:${completionTokens} (¥${totalCost.toFixed(4)})`;
                tokenStats.title = `【Token统计】\n━━━━━━━━━━━━━━━━\n输入: ${promptTokens} tokens\n  单价: ¥0.001/1K tokens\n  费用: ¥${promptCost.toFixed(4)}\n\n输出: ${completionTokens} tokens\n  单价: ¥0.002/1K tokens\n  费用: ¥${completionCost.toFixed(4)}\n━━━━━━━━━━━━━━━━\n总计: ${totalTokens} tokens\n总费用: ¥${totalCost.toFixed(4)}`;
            }
        } catch (error) {
            resultContent.textContent = `网络错误: ${error.message}`;
        } finally {
            // 恢复按钮状态
            askBtn.disabled = false;
            askBtn.querySelector('.ai-btn-text').style.display = 'inline';
            askBtn.querySelector('.ai-btn-loading').style.display = 'none';
        }
    }
    
    showInputContent() {
        if (!this.currentContext || !this.currentContext.content) {
            alert('没有输入内容');
            return;
        }
        
        // 创建模态框显示输入内容
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
            z-index: 10001;
        `;
        
        const content = this.currentContext.content;
        const typeLabel = {
            'code': '代码',
            'call_tree': '调用树',
            'trace_log': '追踪日志'
        }[this.currentContext.type] || '内容';
        
        const modalContent = document.createElement('div');
        modalContent.style.cssText = `
            background: #1e1e1e;
            border: 1px solid #3c3c3c;
            border-radius: 8px;
            padding: 20px;
            max-width: 80%;
            max-height: 80%;
            overflow: auto;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        `;
        
        modalContent.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #3c3c3c; padding-bottom: 10px;">
                <h3 style="margin: 0; color: #1890ff;">📄 输入给AI的${typeLabel}</h3>
                <div style="display: flex; gap: 10px;">
                    <button id="modal-copy-btn" style="padding: 6px 12px; background: rgba(74, 158, 255, 0.2); border: 1px solid #4a9eff; color: #4a9eff; border-radius: 4px; cursor: pointer; font-weight: 600;">📋 复制</button>
                    <button id="modal-close-btn" style="padding: 6px 12px; background: rgba(255, 107, 107, 0.2); border: 1px solid #ff6b6b; color: #ff6b6b; border-radius: 4px; cursor: pointer; font-weight: 600;">✕ 关闭</button>
                </div>
            </div>
            <pre style="
                background: #2d2d2d;
                padding: 15px;
                border-radius: 6px;
                overflow: auto;
                max-height: 60vh;
                color: #d4d4d4;
                font-family: 'Consolas', 'Monaco', monospace;
                font-size: 0.95em;
                line-height: 1.6;
                white-space: pre-wrap;
                word-break: break-all;
            ">${this.escapeHtml(content)}</pre>
            <div style="margin-top: 10px; color: #999; font-size: 0.9em;">
                字符数: ${content.length} | 行数: ${content.split('\n').length}
            </div>
        `;
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
        
        // 关闭按钮
        modalContent.querySelector('#modal-close-btn').addEventListener('click', () => {
            document.body.removeChild(modal);
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
        
        // 复制按钮
        modalContent.querySelector('#modal-copy-btn').addEventListener('click', () => {
            navigator.clipboard.writeText(content).then(() => {
                const btn = modalContent.querySelector('#modal-copy-btn');
                const originalText = btn.innerHTML;
                btn.innerHTML = '✅ 已复制';
                btn.style.background = 'rgba(82, 196, 26, 0.2)';
                btn.style.borderColor = '#52c41a';
                btn.style.color = '#52c41a';
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = 'rgba(74, 158, 255, 0.2)';
                    btn.style.borderColor = '#4a9eff';
                    btn.style.color = '#4a9eff';
                }, 2000);
            }).catch(err => {
                console.error('复制失败:', err);
                alert('复制失败，请手动复制');
            });
        });
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// 创建全局AI助手实例
window.aiAssistant = new AIAssistant();
