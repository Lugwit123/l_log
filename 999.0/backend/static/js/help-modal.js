// 帮助文档模态框
class HelpModal {
    constructor() {
        this.init();
    }

    init() {
        this.createModal();
        this.bindEvents();
    }

    createModal() {
        const modalHTML = `
            <div id="help-modal" class="help-modal" style="display: none;">
                <div class="help-modal-overlay"></div>
                <div class="help-modal-content">
                    <div class="help-modal-header">
                        <h2>📚 日志追踪查看器 - 使用说明</h2>
                        <button class="help-modal-close">✕</button>
                    </div>
                    <div class="help-modal-body">
                        ${this.getHelpContent()}
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.addStyles();
    }

    bindEvents() {
        const modal = document.getElementById('help-modal');
        const closeBtn = modal.querySelector('.help-modal-close');
        const overlay = modal.querySelector('.help-modal-overlay');

        closeBtn.addEventListener('click', () => this.close());
        overlay.addEventListener('click', () => this.close());

        // ESC键关闭，F1键打开
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.style.display === 'flex') {
                this.close();
            } else if (e.key === 'F1') {
                e.preventDefault(); // 阻止浏览器默认的F1行为
                this.open();
            }
        });
    }

    open() {
        const modal = document.getElementById('help-modal');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    close() {
        const modal = document.getElementById('help-modal');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    getHelpContent() {
        return `
            <div class="help-section">
                <h3>🎯 工具概述</h3>
                <p>这是一个功能强大的Python追踪日志查看器，专为调试和性能分析设计。支持查看、分析和可视化Python代码的执行流程。</p>
            </div>

            <div class="help-section">
                <h3>🚀 主要功能</h3>
                <ul>
                    <li><strong>调用树视图</strong>：可视化函数调用关系，清晰展示执行流程</li>
                    <li><strong>性能分析</strong>：显示每个函数的执行时间，自动标注性能瓶颈（🔥/⚡）</li>
                    <li><strong>智能折叠</strong>：重复调用超过3次自动合并显示，避免信息冗余</li>
                    <li><strong>AI助手</strong>：集成DeepSeek AI，智能分析代码和调用链</li>
                    <li><strong>代码高亮</strong>：支持多种代码主题，优化阅读体验</li>
                    <li><strong>函数跳转</strong>：点击调用树节点快速定位到详细代码</li>
                </ul>
            </div>

            <div class="help-section">
                <h3>📊 调用链概览说明</h3>
                <p>调用链中每一行的格式解释：</p>
                <div class="help-code-block">
                    <code>└─ function_name (file.py:123) #456 [789ms] → return_value</code>
                </div>
                <ul>
                    <li><code>└─</code> / <code>├─</code>：树形结构，表示调用层级关系</li>
                    <li><code>function_name</code>：被调用的函数名</li>
                    <li><code>(file.py:123)</code>：函数所在文件和行号</li>
                    <li><code>#456</code>：调用序号（整个追踪中的第N个调用）</li>
                    <li><code>[789ms]</code>：函数执行耗时</li>
                    <li><code>→ return_value</code>：函数返回值（超过5000字符会截断）</li>
                </ul>
                <p><strong>性能标记：</strong></p>
                <ul>
                    <li>🔥 - 耗时占总时间 > 10%（严重性能瓶颈）</li>
                    <li>⚡ - 耗时占总时间 > 5%（需要关注）</li>
                </ul>
            </div>

            <div class="help-section">
                <h3>🤖 AI助手使用</h3>
                <p><strong>问AI按钮位置：</strong></p>
                <ul>
                    <li>调用树视图标题栏：<code>🤖 问AI</code> - 分析整个调用链</li>
                    <li>函数代码块旁边：<code>🤖 问AI</code> - 分析具体函数代码</li>
                </ul>
                <p><strong>预设问题类型：</strong></p>
                <ul>
                    <li><strong>代码分析</strong>：功能解释、bug检测、优化建议、复杂度分析</li>
                    <li><strong>调用链分析</strong>：性能瓶颈、异常模式、优化建议、执行流程</li>
                </ul>
                <p><strong>使用方法：</strong></p>
                <ol>
                    <li>点击 🤖 问AI 按钮</li>
                    <li>选择预设问题或输入自定义问题</li>
                    <li>点击 🚀 提问 等待AI回答</li>
                    <li>可以复制AI的回答内容</li>
                </ol>
            </div>

            <div class="help-section">
                <h3>⌨️ 快捷键</h3>
                <table class="help-table">
                    <tr><td><kbd>Ctrl + O</kbd></td><td>打开日志文件</td></tr>
                    <tr><td><kbd>Ctrl + F</kbd></td><td>搜索</td></tr>
                    <tr><td><kbd>F3</kbd></td><td>查找下一个</td></tr>
                    <tr><td><kbd>Shift + F3</kbd></td><td>查找上一个</td></tr>
                    <tr><td><kbd>Ctrl + B</kbd></td><td>显示/隐藏侧边栏</td></tr>
                    <tr><td><kbd>F5</kbd></td><td>刷新页面</td></tr>
                    <tr><td><kbd>Ctrl + W</kbd></td><td>关闭当前标签页</td></tr>
                    <tr><td><kbd>ESC</kbd></td><td>关闭模态框</td></tr>
                </table>
            </div>

            <div class="help-section">
                <h3>🎨 主题切换</h3>
                <p>支持多种代码高亮主题：</p>
                <ul>
                    <li>VS Code Dark+ （默认）</li>
                    <li>One Dark</li>
                    <li>Dracula</li>
                    <li>Material Dark</li>
                    <li>Nord</li>
                </ul>
                <p>通过 <strong>工具 → 主题</strong> 菜单切换，设置会自动保存。</p>
            </div>

            <div class="help-section">
                <h3>🔍 调用树操作</h3>
                <ul>
                    <li><strong>展开/折叠节点</strong>：点击节点前的 ▼ / ▶ 图标</li>
                    <li><strong>展开全部</strong>：点击标题栏的"展开全部"按钮</li>
                    <li><strong>收缩全部</strong>：点击标题栏的"收缩全部"按钮</li>
                    <li><strong>折叠整个树</strong>：点击标题栏的 ▼ 按钮</li>
                    <li><strong>搜索函数</strong>：使用搜索框过滤函数名</li>
                    <li><strong>跳转代码</strong>：点击树节点自动滚动到详细代码块</li>
                </ul>
            </div>

            <div class="help-section">
                <h3>📝 日志文件格式</h3>
                <p>支持的日志格式：</p>
                <ul>
                    <li><code>.md</code> - Markdown格式（推荐）</li>
                    <li><code>.log</code> - 纯文本日志</li>
                    <li><code>.txt</code> - 文本文件</li>
                </ul>
                <p>追踪日志通过 <code>lprint.trace_start()</code> 生成。</p>
            </div>

            <div class="help-section">
                <h3>💡 使用技巧</h3>
                <ul>
                    <li>多次调用的函数会自动合并显示，显示调用次数和平均耗时</li>
                    <li>调用树状态会自动保存到localStorage，刷新后保持</li>
                    <li>同名文件可以同时打开，悬停标签页查看完整路径</li>
                    <li>使用AI助手快速理解复杂的调用流程</li>
                    <li>返回值过长时可以点击"展开"查看完整内容</li>
                </ul>
            </div>

            <div class="help-section">
                <h3>⚙️ 技术栈</h3>
                <ul>
                    <li>后端：Python + FastAPI</li>
                    <li>前端：原生JavaScript + CSS</li>
                    <li>AI：DeepSeek API</li>
                    <li>代码高亮：Prism.js</li>
                    <li>Markdown解析：Python-Markdown</li>
                </ul>
            </div>

            <div class="help-section">
                <h3>❓ 常见问题</h3>
                <p><strong>Q: 按钮点击无效？</strong></p>
                <p>A: 刷新页面（Ctrl+R 或 Ctrl+Shift+R 强制刷新）以加载最新版本。</p>
                
                <p><strong>Q: 日志文件很大，加载慢？</strong></p>
                <p>A: 首次解析会缓存结果，第二次打开会快很多。可通过"文件→清理缓存"清除缓存。</p>
                
                <p><strong>Q: AI功能不可用？</strong></p>
                <p>A: 检查网络连接和API密钥配置是否正确。</p>
            </div>

            <div class="help-footer">
                <p>📧 反馈与建议：请联系开发团队</p>
                <p>版本：v2.0 | 更新日期：2026-03-16</p>
            </div>
        `;
    }

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .help-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10001;
                align-items: center;
                justify-content: center;
            }

            .help-modal-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                backdrop-filter: blur(4px);
            }

            .help-modal-content {
                position: relative;
                background: #1e1e1e;
                border: 1px solid #3c3c3c;
                border-radius: 8px;
                width: 90%;
                max-width: 900px;
                max-height: 90vh;
                display: flex;
                flex-direction: column;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
            }

            .help-modal-header {
                padding: 20px 25px;
                border-bottom: 1px solid #3c3c3c;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
                border-radius: 8px 8px 0 0;
            }

            .help-modal-header h2 {
                margin: 0;
                color: #1890ff;
                font-size: 1.5em;
            }

            .help-modal-close {
                background: transparent;
                border: none;
                color: #999;
                font-size: 24px;
                cursor: pointer;
                padding: 0;
                width: 32px;
                height: 32px;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s;
            }

            .help-modal-close:hover {
                background: #3c3c3c;
                color: #fff;
            }

            .help-modal-body {
                padding: 25px;
                overflow-y: auto;
                color: #d4d4d4;
                line-height: 1.6;
            }

            .help-section {
                margin-bottom: 30px;
            }

            .help-section h3 {
                color: #52c41a;
                margin-top: 0;
                margin-bottom: 15px;
                font-size: 1.3em;
                border-bottom: 2px solid #3c3c3c;
                padding-bottom: 8px;
            }

            .help-section ul, .help-section ol {
                margin: 10px 0;
                padding-left: 25px;
            }

            .help-section li {
                margin: 8px 0;
            }

            .help-section p {
                margin: 10px 0;
            }

            .help-section strong {
                color: #1890ff;
            }

            .help-code-block {
                background: #2d2d2d;
                padding: 12px;
                border-radius: 4px;
                border-left: 3px solid #1890ff;
                margin: 10px 0;
            }

            .help-code-block code {
                color: #52c41a;
                font-family: 'Consolas', 'Monaco', monospace;
                font-size: 0.95em;
            }

            .help-table {
                width: 100%;
                border-collapse: collapse;
                margin: 10px 0;
            }

            .help-table tr {
                border-bottom: 1px solid #3c3c3c;
            }

            .help-table td {
                padding: 10px;
            }

            .help-table kbd {
                background: #2d2d2d;
                padding: 4px 8px;
                border-radius: 4px;
                border: 1px solid #3c3c3c;
                font-family: 'Consolas', monospace;
                font-size: 0.9em;
                color: #52c41a;
            }

            .help-footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 2px solid #3c3c3c;
                text-align: center;
                color: #999;
            }

            .help-footer p {
                margin: 5px 0;
            }
        `;
        document.head.appendChild(style);
    }
}

// 创建全局实例
window.helpModal = new HelpModal();
