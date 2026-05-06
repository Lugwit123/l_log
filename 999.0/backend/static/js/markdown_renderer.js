/**
 * 使用 marked.js 渲染 Markdown 内容
 * 用于渲染 USAGE_GUIDE 等包含 Markdown 源码的区块
 */

// 在页面中显示状态信息
function showStatusInPage(message, type = 'info') {
    const statusDiv = document.getElementById('markdown-renderer-status') || createStatusDiv();
    const timestamp = new Date().toLocaleTimeString();
    const color = type === 'error' ? '#ff6b6b' : type === 'warn' ? '#ffd93d' : '#6bcf7f';
    const icon = type === 'error' ? '❌' : type === 'warn' ? '⚠️' : '✅';
    
    statusDiv.innerHTML += `<div style="color: ${color}; margin: 5px 0;">${icon} [${timestamp}] ${message}</div>`;
    statusDiv.scrollTop = statusDiv.scrollHeight;
}

function createStatusDiv() {
    const statusDiv = document.createElement('div');
    statusDiv.id = 'markdown-renderer-status';
    
    // 检查用户设置
    const showStatus = localStorage.getItem('showMarkdownStatus') !== 'false'; // 默认显示
    
    statusDiv.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 400px;
        max-height: 300px;
        overflow-y: auto;
        background: rgba(0, 0, 0, 0.9);
        color: #fff;
        padding: 15px;
        border-radius: 8px;
        font-family: monospace;
        font-size: 12px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        border: 2px solid #4a9eff;
        display: ${showStatus ? 'block' : 'none'};
    `;
    document.body.appendChild(statusDiv);
    return statusDiv;
}

// 初始化 marked 配置
function initMarkedConfig() {
    if (typeof marked !== 'undefined') {
        marked.setOptions({
            breaks: true,        // 支持 GFM 换行
            gfm: true,          // GitHub Flavored Markdown
            headerIds: true,    // 为标题添加 ID
            mangle: false       // 不混淆邮箱地址
        });
        console.log('[Markdown Renderer] marked.js 配置完成');
        showStatusInPage('marked.js 配置完成', 'info');
    } else {
        console.warn('[Markdown Renderer] marked.js 未加载');
        showStatusInPage('marked.js 未加载', 'warn');
    }
}

/**
 * 渲染所有带有 data-markdown-source="true" 的元素
 */
function renderMarkdownInUsageGuide() {
    if (typeof marked === 'undefined') {
        const msg = 'marked.js 未加载，无法渲染 Markdown';
        console.warn('[Markdown Renderer] ' + msg);
        showStatusInPage(msg, 'error');
        return;
    }
    
    // 查找所有需要渲染的元素
    const markdownElements = document.querySelectorAll('[data-markdown-source="true"]');
    
    if (markdownElements.length === 0) {
        const msg = '没有找到需要渲染的 Markdown 内容';
        console.log('[Markdown Renderer] ' + msg);
        showStatusInPage(msg, 'warn');
        return;
    }
    
    const msg = `找到 ${markdownElements.length} 个需要渲染的元素`;
    console.log('[Markdown Renderer] ' + msg);
    showStatusInPage(msg, 'info');
    
    markdownElements.forEach((element, index) => {
        try {
            // 获取原始 Markdown 文本
            const markdownText = element.textContent || element.innerText;
            
            if (!markdownText || !markdownText.trim()) {
                const warnMsg = `元素 ${index} 内容为空`;
                console.warn('[Markdown Renderer] ' + warnMsg);
                showStatusInPage(warnMsg, 'warn');
                return;
            }
            
            showStatusInPage(`正在渲染元素 ${index}...`, 'info');
            
            // 渲染 Markdown
            const htmlContent = marked.parse(markdownText);
            
            // 替换原始内容
            const usageGuide = element;
            usageGuide.innerHTML = htmlContent;
            
            // 应用 Prism 语法高亮
            if (typeof Prism !== 'undefined') {
                Prism.highlightAllUnder(usageGuide);
            }
            
            // 为所有代码块添加复制按钮
            addCopyButtonsToCodeBlocks(usageGuide);
            
            console.log('[Markdown Renderer] USAGE_GUIDE 渲染完成');
        } catch (error) {
            const errorMsg = `渲染元素 ${index} 失败: ${error.message}`;
            console.error('[Markdown Renderer] ' + errorMsg, error);
            showStatusInPage(errorMsg, 'error');
            
            // 在元素中显示错误信息
            element.innerHTML = `<div style="color: #ff6b6b; padding: 20px; border: 2px solid #ff6b6b; border-radius: 8px;">
                <h3>❌ Markdown 渲染失败</h3>
                <p><strong>错误:</strong> ${error.message}</p>
                <p><strong>元素索引:</strong> ${index}</p>
            </div>`;
        }
    });
}

/**
 * 初始化 Markdown 渲染器
 */
function initMarkdownRenderer() {
    console.log('[Markdown Renderer] 初始化...');
    showStatusInPage('Markdown 渲染器初始化...', 'info');
    
    // 配置 marked
    initMarkedConfig();
    
    // 渲染所有 Markdown 内容
    renderMarkdownInUsageGuide();
    
    console.log('[Markdown Renderer] 初始化完成');
    showStatusInPage('Markdown 渲染器初始化完成', 'info');
}

// 页面加载完成后自动初始化
let retryCount = 0;
const MAX_RETRIES = 10;

function tryInitMarkdownRenderer() {
    retryCount++;
    const msg = `尝试初始化... (第 ${retryCount} 次)`;
    console.log('[Markdown Renderer] ' + msg);
    showStatusInPage(msg, 'info');
    
    const markedLoaded = typeof marked !== 'undefined';
    console.log('[Markdown Renderer] marked 是否已加载:', markedLoaded);
    console.log('[Markdown Renderer] document.readyState:', document.readyState);
    showStatusInPage(`marked.js 加载状态: ${markedLoaded ? '✅ 已加载' : '❌ 未加载'}`, markedLoaded ? 'info' : 'warn');
    
    if (!markedLoaded) {
        if (retryCount >= MAX_RETRIES) {
            const errorMsg = `marked.js 加载失败！已重试 ${MAX_RETRIES} 次。<br>请检查网络连接或 CDN 是否可访问：<br><a href="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js" target="_blank" style="color: #4a9eff;">https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js</a>`;
            console.error('[Markdown Renderer] marked.js 加载失败！已重试 10 次。');
            console.error('[Markdown Renderer] 请检查网络连接或 CDN 是否可访问：https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js');
            showStatusInPage(errorMsg, 'error');
            
            // 在 USAGE_GUIDE 区域显示错误
            const usageGuide = document.querySelector('[data-component="usage-guide"]');
            if (usageGuide) {
                usageGuide.innerHTML = `<div style="color: #ff6b6b; padding: 20px; border: 2px solid #ff6b6b; border-radius: 8px;">
                    <h2>❌ Markdown 渲染失败</h2>
                    <p><strong>原因:</strong> marked.js 库加载失败</p>
                    <p><strong>CDN 地址:</strong> <a href="https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js" target="_blank" style="color: #4a9eff;">https://cdn.jsdelivr.net/npm/marked/lib/marked.umd.js</a></p>
                    <p><strong>建议:</strong></p>
                    <ul>
                        <li>检查网络连接</li>
                        <li>检查防火墙或代理设置</li>
                        <li>尝试刷新页面</li>
                    </ul>
                    <hr style="margin: 20px 0; border-color: #ff6b6b;">
                    <details>
                        <summary style="cursor: pointer; color: #ffd93d;">📄 查看原始 Markdown 内容</summary>
                        <pre style="background: #2d3748; padding: 15px; border-radius: 4px; overflow-x: auto; margin-top: 10px;">${usageGuide.textContent}</pre>
                    </details>
                </div>`;
            }
            return;
        }
        const retryMsg = `marked.js 尚未加载，500ms 后重试... (${retryCount}/${MAX_RETRIES})`;
        console.warn('[Markdown Renderer] ' + retryMsg);
        showStatusInPage(retryMsg, 'warn');
        setTimeout(tryInitMarkdownRenderer, 500);
        return;
    }
    
    initMarkdownRenderer();
}

// 为代码块添加复制按钮
function addCopyButtonsToCodeBlocks(container) {
    const codeBlocks = container.querySelectorAll('pre code');
    
    codeBlocks.forEach(function(codeBlock) {
        const pre = codeBlock.parentElement;
        
        // 避免重复添加
        if (pre.querySelector('.copy-code-btn')) {
            return;
        }
        
        // 创建复制按钮容器
        const btnContainer = document.createElement('div');
        btnContainer.style.cssText = 'position: relative;';
        
        // 创建复制按钮
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-code-btn';
        copyBtn.innerHTML = '📋 复制';
        copyBtn.style.cssText = 
            'position: absolute;' +
            'top: 8px;' +
            'right: 8px;' +
            'padding: 4px 10px;' +
            'background: rgba(74, 158, 255, 0.2);' +
            'border: 1px solid #4a9eff;' +
            'color: #4a9eff;' +
            'border-radius: 4px;' +
            'cursor: pointer;' +
            'font-size: 0.85em;' +
            'font-weight: 600;' +
            'transition: all 0.2s;' +
            'z-index: 10;';
        
        // 悬停效果
        copyBtn.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(74, 158, 255, 0.3)';
            this.style.transform = 'scale(1.05)';
        });
        
        copyBtn.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(74, 158, 255, 0.2)';
            this.style.transform = 'scale(1)';
        });
        
        // 复制功能
        copyBtn.addEventListener('click', function() {
            const code = codeBlock.textContent;
            
            // 使用 Clipboard API
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(code).then(function() {
                    copyBtn.innerHTML = '✅ 已复制';
                    copyBtn.style.background = 'rgba(82, 196, 26, 0.2)';
                    copyBtn.style.borderColor = '#52c41a';
                    copyBtn.style.color = '#52c41a';
                    
                    setTimeout(function() {
                        copyBtn.innerHTML = '📋 复制';
                        copyBtn.style.background = 'rgba(74, 158, 255, 0.2)';
                        copyBtn.style.borderColor = '#4a9eff';
                        copyBtn.style.color = '#4a9eff';
                    }, 2000);
                }).catch(function(err) {
                    console.error('[复制失败]', err);
                    copyBtn.innerHTML = '❌ 失败';
                });
            } else {
                // 降级方案：使用 execCommand
                const textarea = document.createElement('textarea');
                textarea.value = code;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                
                try {
                    document.execCommand('copy');
                    copyBtn.innerHTML = '✅ 已复制';
                    copyBtn.style.background = 'rgba(82, 196, 26, 0.2)';
                    copyBtn.style.borderColor = '#52c41a';
                    copyBtn.style.color = '#52c41a';
                    
                    setTimeout(function() {
                        copyBtn.innerHTML = '📋 复制';
                        copyBtn.style.background = 'rgba(74, 158, 255, 0.2)';
                        copyBtn.style.borderColor = '#4a9eff';
                        copyBtn.style.color = '#4a9eff';
                    }, 2000);
                } catch (err) {
                    console.error('[复制失败]', err);
                }
                
                document.body.removeChild(textarea);
            }
        });
        
        // 将 pre 包装到容器中
        pre.parentNode.insertBefore(btnContainer, pre);
        btnContainer.appendChild(pre);
        btnContainer.appendChild(copyBtn);
        
        // 确保 pre 有相对定位
        if (!pre.style.position || pre.style.position === 'static') {
            pre.style.position = 'relative';
        }
    });
    
    console.log('[Markdown Renderer] 已为 ' + codeBlocks.length + ' 个代码块添加复制按钮');
}

// 延迟执行，确保 marked.js 已加载
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(tryInitMarkdownRenderer, 100);
    });
} else {
    setTimeout(tryInitMarkdownRenderer, 100);
}
