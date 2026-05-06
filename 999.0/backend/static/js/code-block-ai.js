// 函数代码块AI助手集成
document.addEventListener('DOMContentLoaded', function() {
    addAIButtonsToCodeBlocks();
});

// 全局解析器实例
let codeParser = null;

// 初始化解析器
function initCodeParser() {
    if (window.traceJsonData && window.traceJsonData.rules) {
        try {
            codeParser = new TraceDataParser(window.traceJsonData.rules);
        } catch (error) {
            console.error('[代码块AI] 解析器初始化失败:', error);
        }
    }
}

function addAIButtonsToCodeBlocks() {
    // 初始化解析器
    initCodeParser();
    
    // 使用解析器查找所有函数调用块
    let callBlocks;
    if (codeParser) {
        callBlocks = codeParser.findAllComponents('call_elements', 'call');
    } else {
        // 降级到原有逻辑
        callBlocks = document.querySelectorAll('.lprint-trace-call');
    }
    
    callBlocks.forEach(function(callBlock) {
        // 检查是否已添加按钮
        if (callBlock.querySelector('.ask-ai-code-btn')) {
            return;
        }
        
        // 使用解析器创建AI按钮
        let aiBtn;
        if (codeParser) {
            aiBtn = codeParser.createAIButton(callBlock);
        } else {
            // 降级到原有逻辑
            aiBtn = document.createElement('button');
            aiBtn.className = 'ask-ai-code-btn';
            aiBtn.innerHTML = '🤖 问AI';
            aiBtn.style.cssText = `
                margin-left: 10px;
                padding: 2px 8px;
                background: transparent;
                border: 1px solid #52c41a;
                color: #52c41a;
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.85em;
                font-weight: 600;
                transition: all 0.2s;
            `;
            
            aiBtn.addEventListener('mouseover', function() {
                this.style.background = 'rgba(82, 196, 26, 0.1)';
            });
            
            aiBtn.addEventListener('mouseout', function() {
                this.style.background = 'transparent';
            });
        }
        
        aiBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            askAIAboutCode(callBlock);
        });
        
        callBlock.appendChild(aiBtn);
        
        // 返回调用树按钮由 trace_tree_view.js 统一安装，避免与旧的
        // back-to-tree-code-btn 重复。
    });
}

function askAIAboutCode(callBlock) {
    if (!window.aiAssistant) {
        alert('AI助手未加载，请刷新页面重试');
        return;
    }
    
    // 收集函数代码
    let codeContent = '';
    let funcName = '';
    
    // 从callBlock提取函数名
    const callText = callBlock.textContent;
    const funcMatch = callText.match(/>>深度\d+\s+.+?:(\d+)\s+(.+?)\(\)/);
    if (funcMatch) {
        funcName = funcMatch[2];
    }
    
    // 查找下一个代码块（lprint-trace-code-block 或 lprint-trace-func）
    let nextElement = callBlock.nextElementSibling;
    let maxSearch = 10;
    let searchCount = 0;
    
    while (nextElement && searchCount < maxSearch) {
        // 检查是否是代码块容器
        if (nextElement.classList.contains('lprint-trace-func') || 
            nextElement.classList.contains('lprint-trace-code-block')) {
            
            // 提取代码内容
            const codeElements = nextElement.querySelectorAll('code, pre');
            if (codeElements.length > 0) {
                const codeTexts = Array.from(codeElements).map(el => el.textContent);
                codeContent = codeTexts.join('\n');
                break;
            }
            
            // 如果没有找到code/pre标签，尝试直接获取文本
            const textContent = nextElement.textContent.trim();
            if (textContent && textContent.length > 20) {
                codeContent = textContent;
                break;
            }
        }
        
        // 如果遇到下一个函数调用，停止搜索
        if (nextElement.classList.contains('lprint-trace-call')) {
            break;
        }
        
        nextElement = nextElement.nextElementSibling;
        searchCount++;
    }
    
    if (!codeContent) {
        // 尝试从当前callBlock的data属性中获取
        const callId = callBlock.getAttribute('data-call-id');
        const depth = callBlock.getAttribute('data-depth');
        const path = callBlock.getAttribute('data-path');
        
        codeContent = `函数: ${funcName}\n路径: ${path}\nCall ID: ${callId}\n深度: ${depth}\n\n(无法提取完整代码，请手动选择代码)`;
    }
    
    // 打开AI助手
    window.aiAssistant.open({
        type: 'code',
        content: codeContent
    });
}

// 在动态加载内容后重新添加按钮
if (window.MutationObserver) {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                // 延迟一下再添加，确保DOM完全渲染
                setTimeout(function() {
                    addAIButtonsToCodeBlocks();
                }, 100);
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}
