// 调用树视图
const TREE_DEBUG_ENABLED = (function () {
    try {
        if (typeof window.isFrontendDebugEnabled === 'function') {
            return window.isFrontendDebugEnabled();
        }
        return window.localStorage && window.localStorage.getItem('traceTreeDebug') === '1';
    } catch (e) {
        return false;
    }
})();
const treeLog = TREE_DEBUG_ENABLED ? console.log.bind(console) : function () {};
const treeWarn = TREE_DEBUG_ENABLED ? console.warn.bind(console) : function () {};
treeLog("=== 树视图调试开始 ===");
treeLog("树视图JavaScript开始加载");
treeLog("document.readyState:", document.readyState);

// 全局解析器实例
let traceParser = null;

function buildCallTargetIndex(scopeRoot) {
    return {};
}

function escapeHtml(text) {
    return String(text || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
function prettyFormatText(rawText, enabled) {
    if (!enabled) return String(rawText || '');
    var s = String(rawText || '').trim();
    if (!s) return s;
    if (s[0] === '{' || s[0] === '[') {
        try {
            var obj = JSON.parse(s);
            return JSON.stringify(obj, null, 2);
        } catch (e) {
            try {
                var normalized = s
                    .replace(/\bNone\b/g, 'null')
                    .replace(/\bTrue\b/g, 'true')
                    .replace(/\bFalse\b/g, 'false')
                    .replace(/'/g, '"');
                return JSON.stringify(JSON.parse(normalized), null, 2);
            } catch (e2) {
                return String(rawText || '');
            }
        }
    }
    return String(rawText || '');
}

function ensurePrettyToggleOnExpandContainers(scopeRoot) {
    try {
        var root = scopeRoot || document;
        var containers = root.querySelectorAll ? root.querySelectorAll('.lprint-trace-expand-container') : [];
        containers.forEach(function (c) {
            if (c.querySelector && c.querySelector('input.pretty-print-toggle')) return;
            var header = c.querySelector ? c.querySelector('.lprint-trace-expand-header') : null;
            if (!header) return;

            // 保存 raw（优先用 pre 的全文；否则用 header 文本）
            var pre = c.querySelector('.lprint-trace-return-pre');
            if (pre && !c.getAttribute('data-raw-return')) {
                c.setAttribute('data-raw-return', String(pre.textContent || ''));
            } else if (!c.getAttribute('data-raw-return')) {
                c.setAttribute('data-raw-return', String(header.textContent || ''));
            }

            var label = document.createElement('label');
            label.style.cssText = 'margin-left:auto;display:flex;align-items:center;gap:6px;color:#b0b0b0;font-size:0.85em;cursor:pointer;user-select:none;';
            label.innerHTML = '<input type="checkbox" class="pretty-print-toggle" />' + '<span>pretty_print</span>';
            // 让 header 变成 flex，右侧塞 checkbox
            if (!header.style.display) {
                header.style.display = 'flex';
                header.style.alignItems = 'center';
                header.style.gap = '10px';
            }
            header.appendChild(label);
        });
    } catch (e) {}
}

// 初始化解析器
function initTraceParser() {
    if (window.traceJsonData && window.traceJsonData.rules) {
        try {
            traceParser = new TraceDataParser(window.traceJsonData.rules);
            treeLog('[解析器] 初始化成功');
        } catch (error) {
            console.error('[解析器] 初始化失败:', error);
        }
    }
}

// 添加样式
var style = document.createElement('style');
style.textContent = `
    .tree-toggle {
        cursor: pointer !important;
        color: #4299e1 !important;
        margin-right: 8px !important;
        font-size: 12px !important;
        font-weight: bold !important;
        transition: transform 0.2s ease, color 0.2s ease !important;
        display: inline-block !important;
        width: 16px !important;
        text-align: center !important;
        user-select: none !important;
    }
    .tree-toggle:hover {
        color: #63b3ed !important;
    }
    .tree-toggle.collapsed {
        transform: rotate(-90deg);
    }
    .ret-val-toggle {
        flex-shrink: 0 !important;
        padding: 2px 8px !important;
        height: 20px !important;
        line-height: 16px !important;
        font-size: 0.75em !important;
        border: 1px solid #4a5568 !important;
        background: #2d3748 !important;
        color: #a0aec0 !important;
        border-radius: 4px !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        font-family: monospace !important;
        font-weight: 500 !important;
    }
    .ret-val-toggle:hover {
        background: #4a5568 !important;
        color: #e2e8f0 !important;
        border-color: #718096 !important;
    }
    .ret-val-toggle:active {
        background: #1a202c !important;
        transform: translateY(1px);
    }
    .back-to-tree-btn {
        flex-shrink: 0 !important;
        padding: 2px 8px !important;
        font-size: 0.8em !important;
        background: #1890ff !important;
        color: white !important;
        border: none !important;
        border-radius: 3px !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
    }
    .back-to-tree-btn:hover {
        background: #40a9ff !important;
        transform: translateY(-1px) !important;
    }
    .back-to-tree-btn:active {
        background: #096dd9 !important;
        transform: translateY(0) !important;
    }
    .tree-jump-to-code-btn {
        flex-shrink: 0 !important;
        width: 20px !important;
        height: 20px !important;
        padding: 0 !important;
        margin: 0 6px 0 2px !important;
        font-size: 0.78em !important;
        background: transparent !important;
        color: #69c0ff !important;
        border: 1px solid #1890ff !important;
        border-radius: 3px !important;
        cursor: pointer !important;
        transition: all 0.2s ease !important;
        font-family: monospace !important;
        line-height: 18px !important;
        text-align: center !important;
    }
    .tree-jump-to-code-btn:hover {
        background: rgba(24, 144, 255, 0.16) !important;
        color: #91d5ff !important;
    }
    .tree-node-content.tree-jump-highlight {
        background: rgba(24, 144, 255, 0.28) !important;
        box-shadow: inset 3px 0 0 #1890ff, 0 0 0 1px rgba(24, 144, 255, 0.45) !important;
        transition: background-color 0.2s ease, box-shadow 0.2s ease !important;
    }
    .tree-node-content.tree-current-target,
    .tree-node-content:focus {
        outline: 2px solid #40a9ff !important;
        outline-offset: 1px !important;
        background: rgba(24, 144, 255, 0.34) !important;
        box-shadow: inset 4px 0 0 #40a9ff, 0 0 0 1px rgba(64, 169, 255, 0.55) !important;
    }
    .tree-favorite-btn,
    .trace-call-favorite-btn {
        flex-shrink: 0 !important;
        width: 22px !important;
        height: 20px !important;
        padding: 0 !important;
        margin-left: 6px !important;
        border: 1px solid #8a6d1d !important;
        border-radius: 3px !important;
        background: transparent !important;
        color: #d8a600 !important;
        cursor: pointer !important;
        line-height: 18px !important;
        text-align: center !important;
        font-size: 13px !important;
        font-family: monospace !important;
    }
    .tree-favorite-btn.is-favorite,
    .trace-call-favorite-btn.is-favorite {
        background: rgba(216, 166, 0, 0.18) !important;
        color: #ffd666 !important;
        border-color: #d8a600 !important;
    }
    .tree-favorite-btn.is-partial-favorite {
        background: rgba(216, 166, 0, 0.08) !important;
        color: #d8a600 !important;
        border-color: rgba(216, 166, 0, 0.55) !important;
    }
    #favorite-tree-only-btn.is-active {
        background: rgba(216, 166, 0, 0.18) !important;
        color: #ffd666 !important;
        border-color: #d8a600 !important;
    }
    .tree-func-signature {
        color: #1890ff;
        font-weight: 200;
        font-size: 1em;
    }
    .tree-func-module-path {
        display: inline-block;
        max-width: 80ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        direction: rtl;
        text-align: left;
    }
`;
document.head.appendChild(style);

// buildTraceTreeView函数将由HTML页面在适当时机调用

function _loadTraceTreeFavoriteIds(storageKey) {
    try {
        var raw = localStorage.getItem(storageKey);
        if (!raw) return {};
        var ids = JSON.parse(raw);
        var map = {};
        if (Array.isArray(ids)) {
            ids.forEach(function(id) {
                if (id !== undefined && id !== null && String(id)) {
                    map[String(id)] = true;
                }
            });
        }
        return map;
    } catch (e) {
        return {};
    }
}

function _saveTraceTreeFavoriteIds(storageKey, favoriteIds) {
    try {
        var ids = Object.keys(favoriteIds || {}).filter(function(id) {
            return !!favoriteIds[id];
        }).sort();
        localStorage.setItem(storageKey, JSON.stringify(ids));
    } catch (e) {}
}

function _traceTreeFavoriteButtonHtml(callId, isFavorite, className, isPartialFavorite) {
    if (callId === undefined || callId === null || String(callId) === '') return '';
    var id = _escHtml(callId || '');
    var partial = !isFavorite && !!isPartialFavorite;
    var active = isFavorite ? ' is-favorite' : (partial ? ' is-partial-favorite' : '');
    var label = isFavorite ? '★' : (partial ? '◐' : '☆');
    var title = isFavorite ? '取消收藏' : (partial ? '子级已收藏，点击收藏此节点' : '收藏');
    return '<button type="button" class="' + className + active + '" data-call-id="' + id + '" title="' + title + '">' + label + '</button>';
}

// 提取函数参数信息的通用函数
// 获取函数代码块用于在返回值块中显示
function getFunctionCodeBlock(callId) {
    var console = TREE_DEBUG_ENABLED ? window.console : { log: function () {}, warn: window.console.warn.bind(window.console), error: window.console.error.bind(window.console) };
    treeLog('[代码块] ===== 开始获取函数代码块 =====');
    treeLog('[代码块] callId:', callId);
    
    // 查找对应的调用元素
    var callElement = document.getElementById('call-' + callId);
    if (!callElement) {
        treeLog('[代码块] 未找到调用元素 call-' + callId);
        return null;
    }
    
    // 查找下一个元素中的函数代码块
    var nextElement = callElement.nextElementSibling;
    while (nextElement) {
        var funcCodeBlocks = nextElement.querySelectorAll ? 
            nextElement.querySelectorAll('.lprint-trace-code-block') : [];
        
        for (var i = 0; i < funcCodeBlocks.length; i++) {
            var codeBlock = funcCodeBlocks[i];
            var codeContent = codeBlock.textContent || codeBlock.innerText;
            
            // 查找函数定义行
            var funcDefMatch = codeContent.match(/def\s+\w+\([^)]*\):/);
            if (funcDefMatch) {
                treeLog('[代码块] 找到函数代码块');
                return codeBlock.outerHTML;
            }
        }
        nextElement = nextElement.nextElementSibling;
    }
    
    treeLog('[代码块] 未找到函数代码块');
    return null;
}

function getTraceCodeSourceLines(codeContent) {
    var rawLines = String(codeContent || '').split('\n');
    var sourceLines = rawLines.map(function(line) {
        if (line.indexOf('💡 变量') >= 0 || line.indexOf('<<<END_VAR>>>') >= 0) {
            return null;
        }
        var match = line.match(/^\s*\d+\s*\|\s*\d+\s*\|[^|]*\|(.*)$/);
        return match ? match[1] : null;
    }).filter(function(line) {
        return line !== null;
    });
    if (sourceLines.length > 0) {
        return sourceLines;
    }
    return rawLines.filter(function(line) {
        return line.indexOf('💡 变量') < 0 &&
            line.indexOf('<<<END_VAR>>>') < 0 &&
            line.indexOf('>>Function Code') < 0;
    });
}

function normalizeTraceSourceLine(line) {
    return String(line || '').replace(/\s+#\s*(?:💡|→|\[\[EXPAND|返回值).*/, '').replace(/\s+$/, '');
}

function getTraceCodeSourceLinesFromElement(element) {
    if (!element || !element.querySelectorAll) return [];
    var codeNodes = element.querySelectorAll('.lprint-trace-semantic-code code, code.language-python');
    var lines = [];
    for (var i = 0; i < codeNodes.length; i++) {
        var line = normalizeTraceSourceLine(codeNodes[i].textContent || codeNodes[i].innerText || '');
        if (line.indexOf('💡 变量') >= 0 || line.indexOf('<<<END_VAR>>>') >= 0 || line.indexOf('>>Function Code') >= 0) {
            continue;
        }
        lines.push(line);
    }
    return lines;
}

function findFunctionDefinitionInLines(lines, funcName) {
    var startRe = new RegExp('^\\s*(?:async\\s+)?def\\s+' + String(funcName || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\s*\\(');
    for (var i = 0; i < lines.length; i++) {
        if (!startRe.test(lines[i])) continue;
        var parts = [];
        var parenDepth = 0;
        for (var j = i; j < lines.length; j++) {
            var sourceLine = normalizeTraceSourceLine(lines[j]);
            parts.push(sourceLine.trim());
            for (var k = 0; k < sourceLine.length; k++) {
                var ch = sourceLine[k];
                if (ch === '(') parenDepth++;
                if (ch === ')') parenDepth--;
            }
            if (parenDepth <= 0 && /\)\s*(?:->.*?)?\s*:\s*$/.test(sourceLine)) {
                return parts.join(' ');
            }
        }
    }
    return null;
}

function collectTraceCodeBlocks(element) {
    if (!element) return [];
    var blocks = [];
    if (element.classList && element.classList.contains('lprint-trace-code-block')) {
        blocks.push(element);
    }
    if (element.querySelectorAll) {
        var nested = element.querySelectorAll('.lprint-trace-code-block');
        for (var i = 0; i < nested.length; i++) {
            if (blocks.indexOf(nested[i]) < 0) {
                blocks.push(nested[i]);
            }
        }
    }
    return blocks;
}

function getTraceFunctionTextFromElement(element) {
    if (!element) return '';
    var text = element.textContent || element.innerText || '';
    if (element.classList && element.classList.contains('lprint-trace-func')) {
        return text;
    }
    var parent = element.closest ? element.closest('.lprint-trace-func') : null;
    if (parent) {
        return parent.textContent || parent.innerText || text;
    }
    return text;
}

function getFunctionCodeBlocksAfterCall(callElement, funcName) {
    var blocks = [];
    var nextElement = callElement ? callElement.nextElementSibling : null;
    var searched = 0;
    while (nextElement && searched < 80) {
        searched++;
        var containerText = getTraceFunctionTextFromElement(nextElement);
        if (containerText && containerText.indexOf('>>Function Code') >= 0) {
            if (!funcName || containerText.indexOf('- ' + funcName + ')') >= 0 || containerText.indexOf(' ' + funcName + '):') >= 0 || containerText.indexOf('def ' + funcName + '(') >= 0) {
                blocks = blocks.concat(collectTraceCodeBlocks(nextElement));
                if (blocks.length > 0) {
                    return blocks;
                }
            }
        }
        blocks = blocks.concat(collectTraceCodeBlocks(nextElement));
        if (blocks.length > 0) {
            return blocks;
        }
        nextElement = nextElement.nextElementSibling;
    }
    return blocks;
}

function findCallElementForFunctionSignature(callId, funcName) {
    var wantedId = 'call-' + String(callId || '').replace(/^call-/, '');
    if (!wantedId || wantedId === 'call-') return null;
    var numericId = wantedId.replace(/^call-/, '');
    var candidates = [];
    var selectors = [
        '.lprint-trace-call[id="' + wantedId.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"]',
        '.lprint-trace-call[data-call-id="' + wantedId.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"]',
        '.lprint-trace-call[data-call-id="' + numericId.replace(/"/g, '\\"') + '"]'
    ];
    for (var s = 0; s < selectors.length; s++) {
        var list = document.querySelectorAll(selectors[s]);
        for (var i = 0; i < list.length; i++) {
            if (candidates.indexOf(list[i]) < 0) {
                candidates.push(list[i]);
            }
        }
    }
    var fallback = document.getElementById(wantedId);
    if (fallback && candidates.indexOf(fallback) < 0) {
        candidates.push(fallback);
    }
    if (!candidates.length) return null;
    for (var c = 0; c < candidates.length; c++) {
        var text = candidates[c].textContent || '';
        if (text.indexOf('callBy(') >= 0 && (!funcName || text.indexOf(' in ' + funcName + '()') >= 0)) {
            return candidates[c];
        }
    }
    for (var c2 = 0; c2 < candidates.length; c2++) {
        var text2 = candidates[c2].textContent || '';
        if (text2.indexOf('callBy(') >= 0) {
            return candidates[c2];
        }
    }
    return candidates[0];
}

function findFunctionDefinitionText(codeContent, funcName) {
    return findFunctionDefinitionInLines(getTraceCodeSourceLines(codeContent), funcName);
}

function findFunctionDefinitionInCodeBlock(codeBlock, funcName) {
    var domLines = getTraceCodeSourceLinesFromElement(codeBlock);
    if (domLines.length > 0) {
        return findFunctionDefinitionInLines(domLines, funcName);
    }
    return findFunctionDefinitionText(getTraceFunctionTextFromElement(codeBlock), funcName);
}

function splitTopLevelParameters(params) {
    var result = [];
    var current = '';
    var depth = 0;
    var quote = null;
    for (var i = 0; i < params.length; i++) {
        var ch = params[i];
        var prev = i > 0 ? params[i - 1] : '';
        if (quote) {
            current += ch;
            if (ch === quote && prev !== '\\') {
                quote = null;
            }
            continue;
        }
        if (ch === '"' || ch === "'") {
            quote = ch;
            current += ch;
            continue;
        }
        if (ch === '(' || ch === '[' || ch === '{') {
            depth++;
        } else if (ch === ')' || ch === ']' || ch === '}') {
            depth = Math.max(0, depth - 1);
        }
        if (ch === ',' && depth === 0) {
            result.push(current.trim());
            current = '';
        } else {
            current += ch;
        }
    }
    if (current.trim()) {
        result.push(current.trim());
    }
    return result;
}

function stripTopLevelDefaultValue(param) {
    var depth = 0;
    var quote = null;
    for (var i = 0; i < param.length; i++) {
        var ch = param[i];
        var prev = i > 0 ? param[i - 1] : '';
        if (quote) {
            if (ch === quote && prev !== '\\') {
                quote = null;
            }
            continue;
        }
        if (ch === '"' || ch === "'") {
            quote = ch;
            continue;
        }
        if (ch === '(' || ch === '[' || ch === '{') {
            depth++;
        } else if (ch === ')' || ch === ']' || ch === '}') {
            depth = Math.max(0, depth - 1);
        } else if (ch === '=' && depth === 0) {
            return param.slice(0, i).trim();
        }
    }
    return param.trim();
}

function simplifySignatureParameters(params) {
    return splitTopLevelParameters(params).map(stripTopLevelDefaultValue).filter(Boolean).join(', ');
}

// 提取函数参数定义（用于树视图显示）
function extractFunctionDefinition(funcName, callId) {
    var console = TREE_DEBUG_ENABLED ? window.console : { log: function () {}, warn: window.console.warn.bind(window.console), error: window.console.error.bind(window.console) };
    console.log('[函数定义] ===== 开始提取函数定义 =====');
    console.log('[函数定义] funcName:', funcName);
    console.log('[函数定义] callId:', callId);
    
    // 同一个 call id 可能同时出现在概览和 callBy 详情里；签名必须从详情后的 Function Code 提取。
    var callElement = findCallElementForFunctionSignature(callId, funcName);
    if (!callElement) {
        console.log('[函数定义] 未找到调用元素 call-' + callId);
        return funcName; // 返回原函数名
    }
    
    var funcCodeBlocks = getFunctionCodeBlocksAfterCall(callElement, funcName);
    for (var i = 0; i < funcCodeBlocks.length; i++) {
        var codeBlock = funcCodeBlocks[i];
        var fullDef = findFunctionDefinitionInCodeBlock(codeBlock, funcName);
        if (fullDef) {
            console.log('[函数定义] 找到完整函数定义:', fullDef);

            // 提取参数部分：匹配从 ( 到 最近的 )
            var paramMatch = fullDef.match(/\(([\s\S]*?)\)\s*(?:->[^:]*)?\s*:/);
            if (paramMatch) {
                var params = paramMatch[1].trim();
                if (params) {
                    var result = funcName + '(' + params + ')';
                    console.log('[函数定义] 提取到函数定义:', result);
                    return result;
                }
            }
        }
    }
    
    console.log('[函数定义] 未找到函数定义，返回原函数名');
    return funcName;
}

function extractFunctionParams(callId) {
    var console = TREE_DEBUG_ENABLED ? window.console : { log: function () {}, warn: window.console.warn.bind(window.console), error: window.console.error.bind(window.console) };
    console.log('[参数提取] ===== 开始提取函数参数 =====');
    console.log('[参数提取] callId:', callId);
    
    // 使用新的解析器
    if (traceParser) {
        console.log('[参数提取] 使用traceParser查找元素');
        var callElement = traceParser.findElement('call', { seq: callId });
        console.log('[参数提取] 找到调用元素:', callElement ? '成功' : '失败');
        if (callElement) {
            // 查找下一个元素中的函数代码块
            var nextElement = callElement.nextElementSibling;
            while (nextElement) {
                var funcCodeBlocks = nextElement.querySelectorAll ? 
                    nextElement.querySelectorAll('.' + traceParser.components.call_elements.code_block) : [];
                
                for (var i = 0; i < funcCodeBlocks.length; i++) {
                    var codeBlock = funcCodeBlocks[i];
                    var codeContent = codeBlock.textContent || codeBlock.innerText;
                    
                    // 使用解析器提取参数
                    var params = traceParser.extractParams(codeContent);
                    if (params && params.length > 0) {
                        console.log('[参数提取] 使用解析器找到函数参数:', params);
                        return params.join(', ');
                    }
                }
                nextElement = nextElement.nextElementSibling;
            }
        }
    }
    
    // 降级到原有逻辑
    console.log('[参数提取] ===== 降级到原有逻辑 =====');
    console.log('[参数提取] 解析器不可用，使用原有逻辑');
    var functionParams = null;
    var callElement = document.getElementById('call-' + callId);
    console.log('[参数提取] 查找调用元素 call-' + callId + ':', callElement ? '找到' : '未找到');
    if (callElement) {
        console.log('[参数提取] 调用元素内容:', callElement.textContent);
        // 查找下一个元素中的函数代码块
        var nextElement = callElement.nextElementSibling;
        while (nextElement && !functionParams) {
            var funcCodeBlocks = nextElement.querySelectorAll ? 
                nextElement.querySelectorAll('.lprint-trace-code-block') : [];
            
            for (var i = 0; i < funcCodeBlocks.length; i++) {
                var codeBlock = funcCodeBlocks[i];
                var codeContent = codeBlock.textContent || codeBlock.innerText;
                console.log('[参数提取] 检查代码块', i + 1, '/', funcCodeBlocks.length);
                console.log('[参数提取] 代码块内容前100字符:', codeContent.substring(0, 100));
                
                // 查找函数定义行和参数变量
                var funcDefMatch = codeContent.match(/def\s+\w+\([^)]*\):[^#\n]*(?:#\s*💡[^#\n]*)?/);
                if (funcDefMatch) {
                    console.log('[参数提取] 找到函数定义:', funcDefMatch[0]);
                    
                    // 提取函数名和参数名
                    var funcParamNames = [];
                    var funcNameMatch = funcDefMatch[0].match(/def\s+(\w+)\(([^)]*)\):/);
                    if (funcNameMatch) {
                        var paramNameStr = funcNameMatch[2].trim();
                        if (paramNameStr) {
                            funcParamNames = paramNameStr.split(',').map(p => p.trim()).filter(p => p);
                        }
                    }
                    console.log('[参数提取] 函数参数名:', funcParamNames);
                    
                    // 使用完整的函数定义行进行参数提取
                    var funcDefLine = funcDefMatch[0];
                    var paramLines = [];
                    var paramIndex = 0;
                    
                    // 检查函数定义行是否有参数值注释
                    if (funcDefLine.includes('# 💡')) {
                        var commentMatch = funcDefLine.match(/# 💡\s*(\w+)\s*=\s*([^#\n]+?)(?=\s*(?:#|$))/);
                        if (commentMatch) {
                            var paramName = commentMatch[1];
                            var paramValue = commentMatch[2].trim();
                            paramLines.push(`${paramName} = ${paramValue}`);
                            console.log('[参数提取] 从函数定义行提取到参数:', paramName, '=', paramValue);
                            paramIndex++;
                        }
                    }
                    
                    // 如果参数数量不够，继续从后续行查找
                    if (paramLines.length < funcParamNames.length) {
                        var lines = codeContent.split('\n');
                        var foundFuncDef = false;
                        
                        for (var j = 0; j < lines.length; j++) {
                            var line = lines[j].trim();
                            if (foundFuncDef) {
                                // 匹配 💡 变量 格式
                                if (line.includes('💡 变量')) {
                                    var paramMatch = line.match(/💡\s*变量\s+(\w+)\s*=\s*(.+)/);
                                    if (paramMatch) {
                                        var paramName = paramMatch[1];
                                        var paramValue = paramMatch[2].trim();
                                        
                                        // 如果有函数参数名且匹配，使用函数参数名
                                        if (funcParamNames.length > 0 && paramIndex < funcParamNames.length) {
                                            paramName = funcParamNames[paramIndex];
                                            paramIndex++;
                                        }
                                        
                                        paramLines.push(`${paramName} = ${paramValue}`);
                                        console.log('[参数提取] 提取到参数:', paramName, '=', paramValue);
                                    }
                                } else if (line.includes('变量')) {
                                    var paramMatch = line.match(/变量\s+(\w+)\s*=\s*(.+)/);
                                    if (paramMatch) {
                                        var paramName = paramMatch[1];
                                        var paramValue = paramMatch[2].trim();
                                        paramLines.push(`${paramName} = ${paramValue}`);
                                    }
                                } else if (line && !line.includes('│') && !line.includes('├') && !line.includes('└') && !line.includes('⬅️') && !line.includes('💡')) {
                                    // 如果遇到非空行且不是变量行，停止收集
                                    break;
                                }
                            } else if (line.includes('def ')) {
                                foundFuncDef = true;
                            }
                        }
                    }
                    
                    if (paramLines.length > 0) {
                        functionParams = paramLines.join(', ');
                        console.log('[参数提取] 找到函数参数:', functionParams);
                    }
                    break;
                }
            }
            nextElement = nextElement.nextElementSibling;
        }
    }
    
    console.log('[参数提取] 最终结果:', functionParams || '无参数');
    return functionParams;
}

// 提取函数签名（参数名和类型，不含值）
function extractFunctionSignature(funcName, callId) {
    var funcDef = extractFunctionDefinition(funcName, callId);
    // funcDef 格式是 funcName(params)，提取括号内容
    var match = funcDef.match(/\(([\s\S]*)\)$/);
    if (match) {
        var params = match[1];
        // 保留参数名和类型，去掉默认值，避免把运行期值显示到树行里。
        var simplified = simplifySignatureParameters(params);
        return funcName + '(' + simplified + ')';
    }
    return funcName;
}

function _sleep0() {
    return new Promise(resolve => setTimeout(resolve, 0));
}

function _nextFrame() {
    return new Promise(resolve => {
        try {
            requestAnimationFrame(() => resolve());
        } catch (e) {
            setTimeout(resolve, 0);
        }
    });
}

function _ensureTraceTreeLoadingStylesInstalled() {
    if (window.__traceTreeLoadingStylesInstalled) return;
    window.__traceTreeLoadingStylesInstalled = true;
    try {
        var s = document.createElement('style');
        s.textContent = `
        .trace-tree-loading {
            border: 1px solid var(--border-color, #d9d9d9);
            background: rgba(0,0,0,0.12);
        }
        .trace-tree-loading .trace-tree-loading-title {
            font-family: monospace;
            font-size: 1.1em;
            color: #1890ff;
            font-weight: 700;
        }
        .trace-tree-loading .trace-tree-loading-sub {
            color: #999;
            margin-top: 6px;
            font-size: 0.9em;
            font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
        }
        .trace-tree-loading .trace-tree-loading-bar {
            margin-top: 10px;
            height: 8px;
            border-radius: 999px;
            border: 1px solid #3c3c3c;
            background: #1f1f1f;
            overflow: hidden;
        }
        .trace-tree-loading .trace-tree-loading-bar > div {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #1890ff, #52c41a);
            transition: width 120ms linear;
        }
        .trace-tree-loading .trace-tree-loading-skeleton-row {
            height: 12px;
            border-radius: 4px;
            background: linear-gradient(90deg, rgba(255,255,255,0.05), rgba(255,255,255,0.12), rgba(255,255,255,0.05));
            background-size: 200% 100%;
            animation: traceTreeSkeleton 1.2s ease-in-out infinite;
            margin-top: 10px;
        }
        @keyframes traceTreeSkeleton {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }`;
        document.head.appendChild(s);
    } catch (e) {}
}

function _createTraceTreeLoadingShell(logId) {
    _ensureTraceTreeLoadingStylesInstalled();
    var div = document.createElement('div');
    div.className = 'trace-tree-view trace-tree-loading';
    div.setAttribute('data-trace-tree-loading', '1');
    div.setAttribute('data-log-id', String(logId || 'default'));
    div.style.cssText = 'font-family:monospace;padding:15px;border-radius:4px;margin-bottom:15px;';
    div.innerHTML = ''
        + '<div style="display:flex;justify-content:space-between;align-items:center;gap:12px;">'
        + '  <div class="trace-tree-loading-title">📂 调用树视图</div>'
        + '  <div style="color:#999;font-size:0.9em;" data-role="trace-tree-progress-text">解析中… 0%</div>'
        + '</div>'
        + '<div class="trace-tree-loading-sub" data-role="trace-tree-progress-sub">准备解析调用链概览…</div>'
        + '<div class="trace-tree-loading-bar" aria-hidden="true"><div data-role="trace-tree-progress-bar"></div></div>'
        + '<div class="trace-tree-loading-skeleton-row" style="width:78%"></div>'
        + '<div class="trace-tree-loading-skeleton-row" style="width:92%"></div>'
        + '<div class="trace-tree-loading-skeleton-row" style="width:66%"></div>';
    return div;
}

function _updateTraceTreeLoadingShell(shellEl, percent, subText) {
    if (!shellEl) return;
    try {
        var p = Math.max(0, Math.min(100, Math.floor(percent || 0)));
        var bar = shellEl.querySelector('[data-role="trace-tree-progress-bar"]');
        var txt = shellEl.querySelector('[data-role="trace-tree-progress-text"]');
        var sub = shellEl.querySelector('[data-role="trace-tree-progress-sub"]');
        if (bar) bar.style.width = p + '%';
        if (txt) txt.textContent = '解析中… ' + p + '%';
        if (subText && sub) sub.textContent = String(subText);
    } catch (e) {}
}

async function parseTreeOverviewAsync(lines, onProgress) {
    var console = TREE_DEBUG_ENABLED ? window.console : { log: function () {}, warn: window.console.warn.bind(window.console), error: window.console.error.bind(window.console) };
    treeLog("=== parseTreeOverviewAsync 开始解析 ===");
    treeLog("总行数:", lines.length);

    var nodes = [];
    var total = lines.length;
    var yieldEvery = total > 5000 ? 300 : (total > 1200 ? 160 : 80);

    for (var lineIndex = 0; lineIndex < lines.length; lineIndex++) {
        var line = lines[lineIndex];
        // 不再使用缩进计算层级，而是从深度字段提取
        var level = 0;

        // 检查是否是 LOOP 子节点
        var isLoopDetail = line.includes('[LOOP:10]') || line.includes('[LOOP10:]');

        // 多种正则表达式匹配，支持不同格式
        var match = null;
        var patterns = [
            // LOOP 详情格式: ├─ [LOOP:10] #X-#Y → result (第10次)
            /[├└]─\s+\[(LOOP:10|LOOP10:)\]\s+#(\d+)-#(\d+)\s*→?\s*(.+)/,
            // 标准格式: ├─ func_name [深度X 路径X-X-X #X] [时间] 🔥 → result (file.py)
            /[├└]─\s+(.+?)\s+\[深度(\d+)\s+路径([\d\-]+)\s+#(\d+)\]\s+\[([^\]]+)\]/,
            // 循环折叠格式: ├─ func_name [深度X 路径X-X-X-(:10) #X] [×N次] → result (首次)
            /[├└]─\s+(.+?)\s+\[深度(\d+)\s+路径([\d\-]+)-\(:10\)\s+#(\d+)\]\s+\[×(\d+)次\]/,
            // 简化格式: ├─ func_name [X-X-X #X] [时间] → result (file.py)
            /[├└]─\s+(.+?)\s+\[([\d\-]+)\s+#(\d+)\]\s+\[([^\]]+)\]/,
            // 最简格式: ├─ func_name #X [时间] → result (file.py)
            /[├└]─\s+(.+?)\s+#(\d+)\s+\[([^\]]+)\]/,
            // 通用格式: ├─ func_name (file.py:123) #X
            /[├└]─\s+(.+?)\s+\((.+?):(\d+)\)\s+#(\d+)/,
            // 超简格式: ├─ func_name (file.py)
            /[├└]─\s+(.+?)\s+\((.+?)\)/
        ];

        for (var p = 0; p < patterns.length; p++) {
            match = line.match(patterns[p]);
            if (match) break;
        }

        if (match) {
            var rest = line.substring(line.indexOf(match[0]) + match[0].length);
            var returnValue = '';
            var marker = '';
            var file = '';
            var depth = '', path = '', id = '', time = '';

            // 根据匹配模式提取字段
            if (isLoopDetail && match.length >= 5) {
                // LOOP 详情格式: [LOOP:10] #X-#Y → result
                var loopType = match[1];  // LOOP:10 或 LOOP10:
                var startId = match[2];
                var endId = match[3];
                var detailRest = match[4];

                // LOOP 子节点比父节点深一层
                // 需要找到真正的父节点（带 (:10) 标记的主 LOOP 节点）
                var parentNode = null;
                for (var i = nodes.length - 1; i >= 0; i--) {
                    if (nodes[i].path && nodes[i].path.includes('(:10)')) {
                        parentNode = nodes[i];
                        break;
                    }
                }

                if (parentNode) {
                    depth = String(parseInt(parentNode.depth) + 1);
                    level = parseInt(depth) - 1;
                } else {
                    // 如果找不到父节点，使用默认值
                    depth = '2';
                    level = 1;
                }

                id = startId + '-' + endId;
                path = loopType === 'LOOP:10' ? 'loop-first-10' : 'loop-last-10';
                time = '';

                // 解析返回值
                if (detailRest.includes('→')) {
                    var parts0 = detailRest.split('→');
                    returnValue = parts0[1] ? parts0[1].trim() : '';
                } else {
                    returnValue = detailRest.trim();
                }

                // 创建 LOOP 详情节点
                var funcName = loopType === 'LOOP:10' ? '[前10次]' : '[后10次]';
                nodes.push({
                    func: funcName,
                    depth: depth,
                    path: path,
                    id: id,
                    time: time,
                    returnValue: returnValue,
                    marker: '',
                    file: '',
                    level: level
                });
            } else if (match.length >= 6) {
                // 完整格式：深度、路径、ID、时间 或 循环折叠格式
                if (line.includes('(:10)')) {
                    // 循环折叠格式: [深度X 路径X-X-X-(:10) #X] [×N次]
                    depth = match[2];
                    path = match[3] + '-(:10)';  // 保留 (:10) 标记
                    id = match[4];
                    var loopCount = match[5];
                    time = '×' + loopCount + '次';
                    level = parseInt(depth) - 1;
                } else {
                    // 标准格式
                    depth = match[2];
                    path = match[3];
                    id = match[4];
                    time = match[5];
                    level = parseInt(depth) - 1;
                }
            } else if (match.length >= 5) {
                // 简化格式：路径、ID、时间
                path = match[2];
                id = match[3];
                time = match[4];
                depth = '1'; // 默认深度
                level = 0;
            } else if (match.length >= 4) {
                // 最简格式：ID、时间 或 文件、行号、ID
                if (line.includes('#')) {
                    id = match[2];
                    time = match[3];
                    depth = '1';
                    path = '1';
                    level = 0;
                } else {
                    file = match[2] + ':' + match[3];
                    id = match[4];
                    depth = '1';
                    path = '1';
                    time = '';
                    level = 0;
                }
            } else if (match.length >= 3) {
                // 超简格式：文件
                file = match[2];
                id = 'unknown';
                depth = '1';
                path = '1';
                time = '';
                level = 0;
            }

            // 解析返回值和性能标记
            if (rest.includes('→')) {
                var parts = rest.split('→');
                marker = parts[0].trim();
                var afterArrow = parts[1] ? parts[1].trim() : '';
                var trailAfter = _parseTreeOverviewTrailingFileSegment(afterArrow);
                if (trailAfter.file) {
                    if (!file) file = trailAfter.file;
                    returnValue = trailAfter.before;
                } else {
                    returnValue = afterArrow;
                }
            } else {
                var trailRest = _parseTreeOverviewTrailingFileSegment(rest);
                if (trailRest.file) {
                    if (!file) file = trailRest.file;
                    marker = trailRest.before;
                } else {
                    marker = rest.trim();
                }
            }

            // LOOP detail 节点已 push，避免重复 push 通用 node
            if (!(isLoopDetail && match.length >= 5)) {
                var node = {
                    level: level,
                    func: match[1],
                    file: file,
                    depth: depth,
                    path: path,
                    id: id,
                    time: time,
                    marker: marker,
                    returnValue: returnValue,
                    isFolded: false
                };
                nodes.push(node);
            }
        } else {
            // 尝试匹配折叠节点: ├─ func_name [×5次, 合计 2.5ms] [平均 0.5ms] 🔥 (file.py)
            var foldMatch = line.match(/[├└]─\s+(.+?)\s+\[×(\d+)次,\s*合计\s+(.+?)\]\s*\[平均\s+(.+?)\]/);
            if (foldMatch) {
                // 尝试从行中提取深度信息来计算层级
                var depthMatch = line.match(/深度(\d+)/);
                if (depthMatch) {
                    level = parseInt(depthMatch[1]) - 1;
                }
                var restFold = line.substring(line.indexOf(foldMatch[0]) + foldMatch[0].length);
                var fileFold = '';
                var markerFold = '';
                var trailFold = _parseTreeOverviewTrailingFileSegment(restFold);
                if (trailFold.file) {
                    fileFold = trailFold.file;
                    markerFold = trailFold.before;
                } else {
                    markerFold = restFold.trim();
                }

                nodes.push({
                    level: level,
                    func: foldMatch[1],
                    file: fileFold,
                    count: parseInt(foldMatch[2]),
                    totalTime: foldMatch[3],
                    avgTime: foldMatch[4],
                    marker: markerFold,
                    isFolded: true
                });
            }
        }

        if (typeof onProgress === 'function' && (lineIndex % yieldEvery === 0 || lineIndex === total - 1)) {
            try {
                onProgress({
                    processed: lineIndex + 1,
                    total: total,
                    percent: total ? ((lineIndex + 1) / total) * 100 : 100
                });
            } catch (e) {}
            // 让 UI 有机会先画出来（非常关键）
            await _sleep0();
        }
    }

    // trace_linear 侧车元数据：慢调用 / 深栈 / 错误 标记
    if (window.traceJsonData && window.traceJsonData.format === 'trace_linear') {
        var metadata = window.traceJsonData.metadata;
        var highlights = window.traceJsonData.highlights || { slow_calls: [], deep_calls: [], error_calls: [] };
        nodes.forEach(function(node) {
            if (highlights.slow_calls && highlights.slow_calls.includes && highlights.slow_calls.includes(node.id)) {
                node.isSlow = true;
            }
            if (highlights.deep_calls && highlights.deep_calls.includes && highlights.deep_calls.includes(node.id)) {
                node.isDeep = true;
            }
            if (highlights.error_calls && highlights.error_calls.includes && highlights.error_calls.includes(node.id)) {
                node.hasError = true;
            }
        });
        if (metadata) {
            // no-op：metadata 由上游注入
        }
    }

    treeLog("=== parseTreeOverviewAsync 解析完成 ===");
    treeLog("总共解析到 " + nodes.length + " 个节点");
    return nodes;
}

async function buildTraceTreeView(scope) {
    var console = TREE_DEBUG_ENABLED ? window.console : { log: function () {}, warn: window.console.warn.bind(window.console), error: window.console.error.bind(window.console) };
    // 初始化解析器
    initTraceParser();

    // 为 trace 正文中的返回值展开容器补上 pretty_print 复选框（每个容器独立生效）
    ensurePrettyToggleOnExpandContainers(document);
    
    // scope 為可選的搜索範圍（tab pane 元素），不傳則使用全局 document
    var root = scope || document;
    
    // 智能查找容器 - 不依赖特定ID
    var container = null;
    
    // 1. 查找现有的调用链视图容器
    var existingTreeView = root.querySelector ? root.querySelector('.trace-tree-view') : document.querySelector('.trace-tree-view');
    if (existingTreeView) {
        console.log("找到现有调用链视图，直接使用");
        return; // 已经存在，不需要重新创建
    }
    
    // 2. 查找可用的容器（降级处理）
    container = root.querySelector ? root.querySelector('.tab-content') : document.querySelector('.tab-content');
    if (!container) {
        container = root.querySelector ? root.querySelector('.content-area') : document.querySelector('.content-area');
    }
    if (!container) {
        container = document.body;
    }
    
    treeLog("使用容器:", container.className || 'document.body');
    
    // 获取当前日志ID用于localStorage key
    var logId = (scope && scope.id) || 'default';
    var storageKey = 'trace-tree-expanded-' + logId;
    var favoriteStorageKey = 'trace-tree-favorites-' + logId;
    var favoriteIds = _loadTraceTreeFavoriteIds(favoriteStorageKey);
    var favoriteOnlyActive = false;
    
    // 智能查找调用链概览 - 支持多种格式
    var treeOverviewSection = null;
    var possibleSelectors = [
        '.lprint-trace-tree',
        '.lprint-trace-summary',
        '[class*="trace-tree"]',
        '[class*="trace-summary"]'
    ];
    
    for (var i = 0; i < possibleSelectors.length; i++) {
        try {
            treeOverviewSection = root.querySelector ? root.querySelector(possibleSelectors[i]) : document.querySelector(possibleSelectors[i]);
        } catch (selectorError) {
            treeWarn("跳过无效选择器:", possibleSelectors[i], selectorError);
            continue;
        }
        if (treeOverviewSection) {
            treeLog("找到调用链概览，使用选择器:", possibleSelectors[i]);
            break;
        }
    }
    
    // 如果还是没找到，尝试在所有文本中查找调用链模式
    if (!treeOverviewSection) {
        treeLog("未找到标准调用链概览，尝试文本模式查找");
        var allElements = (root.querySelectorAll ? root.querySelectorAll('pre, code, div') : document.querySelectorAll('pre, code, div'));
        for (var j = 0; j < allElements.length; j++) {
            var text = allElements[j].textContent || allElements[j].innerText;
            if (text && (text.includes('├─') || text.includes('└─') || text.includes('深度'))) {
                treeOverviewSection = allElements[j];
                treeLog("通过文本模式找到调用链概览");
                break;
            }
        }
    }
    
    if (!treeOverviewSection) {
        treeLog("未找到任何调用链概览，跳过树视图构建");
        return;
    }
    
    treeLog("找到树概览，开始解析");

    // 先把“框架/骨架”插入 DOM，确保页面先渲染出来（避免同步解析期间白屏）
    var loadingShell = _createTraceTreeLoadingShell(logId);
    if (treeOverviewSection && treeOverviewSection.parentNode) {
        treeOverviewSection.parentNode.insertBefore(loadingShell, treeOverviewSection);
    } else if (container && container.firstChild) {
        container.insertBefore(loadingShell, container.firstChild);
    } else if (container) {
        container.appendChild(loadingShell);
    }
    _updateTraceTreeLoadingShell(loadingShell, 1, '已创建调用树框架，准备解析文本…');
    await _nextFrame();
    
    // 解析调用链概览文本：支持 pre/code 和 div 结构
    var lines = [];
    var rawText = treeOverviewSection.textContent || treeOverviewSection.innerText;
    
    if (rawText) {
        lines = rawText.split('\n').filter(function(line) {
            return line.trim().length > 0 && (line.includes('└─') || line.includes('├─'));
        });
    }
    
    if (lines.length === 0) {
        _updateTraceTreeLoadingShell(loadingShell, 100, '未找到可解析的树概览文本');
        setTimeout(function() {
            try { if (loadingShell && loadingShell.parentNode) loadingShell.parentNode.removeChild(loadingShell); } catch (e) {}
        }, 300);
        treeLog("树概览为空");
        return;
    }
    
    treeLog("解析到 " + lines.length + " 行");
    
    // 解析每一行的树结构
    _updateTraceTreeLoadingShell(loadingShell, 3, '开始解析调用树结构…');
    var treeNodes = await parseTreeOverviewAsync(lines, function(p) {
        _updateTraceTreeLoadingShell(
            loadingShell,
            5 + (p.percent * 0.75), // 5%~80%
            '解析中：' + p.processed + '/' + p.total + ' 行'
        );
    });
    treeNodes.forEach(function(node) {
        node.isFavorite = !!favoriteIds[String(node.id || '')];
    });
    _updateTraceTreeLoadingShell(loadingShell, 82, '正在构建层级关系…');
    var hierarchy = buildTreeHierarchy(treeNodes);
    markTraceTreePartialFavorites(hierarchy.roots);
    treeLog("解析到 " + treeNodes.length + " 个节点");
    
    if (treeNodes.length === 0) {
        _updateTraceTreeLoadingShell(loadingShell, 100, '解析结果为空');
        setTimeout(function() {
            try { if (loadingShell && loadingShell.parentNode) loadingShell.parentNode.removeChild(loadingShell); } catch (e) {}
        }, 300);
        return;
    }
    
    // 检查是否有保存的折叠状态
    var treeCollapseKey = 'trace-tree-collapsed-' + logId;
    // 默认保持树可见，但内部节点默认折叠（懒渲染）
    var isTreeCollapsed = false;
    
    _updateTraceTreeLoadingShell(loadingShell, 90, '正在渲染树视图…');
    await _sleep0();
    // 渲染树
    var exceptionPriorityHTML = renderExceptionPriorityView(treeNodes);
    var treeHTML = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">' +
        '<div style="display:flex;align-items:center;gap:10px;">' +
        '<button id="toggle-tree-view-btn" style="padding:4px 8px;border:1px solid #1890ff;background:transparent;color:#1890ff;border-radius:4px;cursor:pointer;font-size:0.9em;font-weight:bold;" title="折叠/展开整个树视图">' + (isTreeCollapsed ? '▶' : '▼') + '</button>' +
        '<h3 style="margin:0;color:#1890ff;font-size:1.2em;">📂 调用树视图</h3>' +
        '<button id="ask-ai-tree-btn" style="padding:4px 10px;border:1px solid #52c41a;background:transparent;color:#52c41a;border-radius:4px;cursor:pointer;font-size:0.9em;font-weight:600;" title="让AI分析调用树">🤖 问AI</button>' +
        '<button id="favorite-tree-only-btn" style="padding:4px 10px;border:1px solid #d8a600;background:transparent;color:#d8a600;border-radius:4px;cursor:pointer;font-size:0.9em;font-weight:600;" title="仅显示收藏节点及其父级层级">★ 仅收藏层级</button>' +
        '</div>' +
        '<div id="tree-controls" style="display:' + (isTreeCollapsed ? 'none' : 'flex') + ';gap:8px;align-items:center;">' +
        '<button id="expand-all-btn" style="padding:4px 10px;border:1px solid #1890ff;background:transparent;color:#1890ff;border-radius:4px;cursor:pointer;font-size:0.9em;">展开全部</button>' +
        '<button id="collapse-all-btn" style="padding:4px 10px;border:1px solid #1890ff;background:transparent;color:#1890ff;border-radius:4px;cursor:pointer;font-size:0.9em;">收缩全部</button>' +
        '<input type="text" id="tree-search" placeholder="搜索函数..." style="padding:6px 12px;border:1px solid var(--border-color, #d9d9d9);border-radius:4px;width:220px;background:var(--input-bg, white);color:inherit;font-size:0.95em;">' +
        '</div>' +
        '</div>' +
        exceptionPriorityHTML +
        '<div id="tree-content" style="display:' + (isTreeCollapsed ? 'none' : 'block') + ';max-height:500px;overflow-y:auto;overflow-x:hidden;padding-right:4px;">' +
        renderTreeNodes(hierarchy.roots) +
        '</div>';

    // 使用 loadingShell 作为最终容器，避免重复插入造成闪烁
    var treeView = loadingShell;
    try {
        treeView.classList.remove('trace-tree-loading');
        treeView.removeAttribute('data-trace-tree-loading');
        treeView.style.cssText = 'font-family:monospace;padding:15px;border-radius:4px;margin-bottom:15px;border:1px solid var(--border-color, #d9d9d9);';
        treeView.innerHTML = treeHTML;
    } catch (e) {
        // 降级：如果替换失败，就按旧逻辑插入新节点并移除 loadingShell
        var treeViewDiv = document.createElement('div');
        treeViewDiv.innerHTML = '<div class="trace-tree-view" style="font-family:monospace;padding:15px;border-radius:4px;margin-bottom:15px;border:1px solid var(--border-color, #d9d9d9);">' + treeHTML + '</div>';
        treeView = treeViewDiv.firstChild;
        if (treeOverviewSection && treeOverviewSection.parentNode) {
            treeOverviewSection.parentNode.insertBefore(treeView, treeOverviewSection);
        } else if (container && container.firstChild) {
            container.insertBefore(treeView, container.firstChild);
        } else if (container) {
            container.appendChild(treeView);
        }
        try { if (loadingShell && loadingShell.parentNode) loadingShell.parentNode.removeChild(loadingShell); } catch (e2) {}
    }
    
    treeLog("树视图渲染完成");
    
    // 更新容器引用为新创建的树视图
    container = treeView;

    installCodeToTreeJumpButtons(root);
    installTraceCallIdTitles(root);
    installCallFavoriteButtons(root);
    installCallDurationBars(root);
    // 耗时条：扫描调用树与正文 call 标题，按比例渲染颜色条
    applyDurationBars(container);
    applyDurationBars(root);
    
    // 添加悬浮提示事件监听器（大日志默认关闭，避免页面卡顿）
    if (treeNodes.length <= 1200) {
        addTooltipListeners(container);
    } else {
        if (window.toast) {
            window.toast.info('调用树节点较多，已自动关闭悬浮提示以提升性能', 2500);
        }
    }

    // 建立快速索引，避免每次点击全量扫描
    var callTargetIndex = buildCallTargetIndex(root);
    
    // 懒渲染：仅在展开时渲染子树
    function ensureChildrenRendered(treeNodeElement) {
        var nodeKey = treeNodeElement.getAttribute('data-node-key');
        var childrenEl = treeNodeElement.querySelector(':scope > .tree-children');
        var nodeData = hierarchy.nodeMap[nodeKey];
        if (!childrenEl || !nodeData || childrenEl.getAttribute('data-rendered') === '1') return false;
        var html = '';
        for (var i = 0; i < nodeData.children.length; i++) {
            html += renderTreeNode(nodeData.children[i]);
        }
        childrenEl.innerHTML = html;
        childrenEl.setAttribute('data-rendered', '1');
        return true;
    }

    function renderDescendants(treeNodeElement) {
        ensureChildrenRendered(treeNodeElement);
        var childNodes = treeNodeElement.querySelectorAll(':scope > .tree-children > .tree-node');
        childNodes.forEach(function(childNode) {
            renderDescendants(childNode);
        });
    }

    function findRenderedTreeNodeByKey(nodeKey) {
        var renderedNodes = container.querySelectorAll('.tree-node[data-node-key]');
        for (var i = 0; i < renderedNodes.length; i++) {
            if (renderedNodes[i].getAttribute('data-node-key') === nodeKey) {
                return renderedNodes[i];
            }
        }
        return null;
    }

    function highlightTreeNodeContent(nodeContent) {
        if (!nodeContent) return;
        nodeContent.classList.add('tree-jump-highlight');
        if (nodeContent.__treeJumpHighlightTimer) {
            clearTimeout(nodeContent.__treeJumpHighlightTimer);
        }
        nodeContent.__treeJumpHighlightTimer = setTimeout(function() {
            nodeContent.classList.remove('tree-jump-highlight');
            nodeContent.__treeJumpHighlightTimer = null;
        }, 5000);
    }

    function scrollTreeNodeContentIntoView(nodeContent, options) {
        options = options || {};
        if (!nodeContent || !nodeContent.getBoundingClientRect) return;
        var block = options.block || 'center';
        var treeContent = nodeContent.closest ? nodeContent.closest('#tree-content') : null;
        if (treeContent && treeContent.getBoundingClientRect) {
            var treeRect = treeContent.getBoundingClientRect();
            var nodeRect = nodeContent.getBoundingClientRect();
            var offsetTop = nodeRect.top - treeRect.top + treeContent.scrollTop;
            var targetTop = block === 'start'
                ? offsetTop - 8
                : offsetTop - (treeContent.clientHeight / 2) + (nodeRect.height / 2);
            var maxTop = Math.max(0, treeContent.scrollHeight - treeContent.clientHeight);
            treeContent.scrollTop = Math.min(maxTop, Math.max(0, targetTop));
        } else {
            nodeContent.scrollIntoView({ behavior: 'auto', block: block, inline: 'nearest' });
        }

        scrollTraceTargetIntoView(nodeContent, {
            margin: typeof options.margin === 'number' ? options.margin : 72
        });
        try {
            if (!nodeContent.hasAttribute('tabindex')) {
                nodeContent.setAttribute('tabindex', '-1');
            }
            container.querySelectorAll('.tree-node-content.tree-current-target').forEach(function(el) {
                if (el !== nodeContent) el.classList.remove('tree-current-target');
            });
            nodeContent.classList.add('tree-current-target');
            nodeContent.focus({ preventScroll: true });
        } catch (e) {}
    }

    function scrollTreeNodeContentIntoViewStable(nodeContent, options) {
        scrollTreeNodeContentIntoView(nodeContent, options);
        requestAnimationFrame(function() {
            scrollTreeNodeContentIntoView(nodeContent, options);
        });
        setTimeout(function() {
            scrollTreeNodeContentIntoView(nodeContent, options);
        }, 80);
    }

    function revealTreeNodeByCallId(callId, options) {
        options = options || {};
        var shouldScroll = options.scroll !== false;
        var shouldHighlight = options.highlight !== false;
        var normalizedId = String(callId || '').replace(/^call-/, '');
        if (!normalizedId) return null;

        var nodeContent = container.querySelector('.tree-node-content[data-id="' + normalizedId.replace(/"/g, '\\"') + '"]');
        if (!nodeContent && hierarchy.idMap && hierarchy.idMap[normalizedId]) {
            var key = hierarchy.idMap[normalizedId];
            var pathKeys = [];
            var nodeData = hierarchy.nodeMap[key];
            while (nodeData) {
                pathKeys.unshift(nodeData._key);
                nodeData = nodeData._parentKey ? hierarchy.nodeMap[nodeData._parentKey] : null;
            }

            for (var i = 0; i < pathKeys.length; i++) {
                var treeNode = findRenderedTreeNodeByKey(pathKeys[i]);
                if (!treeNode) break;
                if (i < pathKeys.length - 1) {
                    var rendered = ensureChildrenRendered(treeNode);
                    var children = treeNode.querySelector(':scope > .tree-children');
                    var toggle = treeNode.querySelector(':scope > .tree-node-content > .tree-toggle');
                    if (children) children.classList.remove('collapsed');
                    if (toggle) toggle.classList.remove('collapsed');
                    if (rendered) applyDurationBars(container);
                }
            }

            nodeContent = container.querySelector('.tree-node-content[data-id="' + normalizedId.replace(/"/g, '\\"') + '"]');
        }

        if (!nodeContent) return null;
        if (shouldScroll) {
            scrollTreeNodeContentIntoViewStable(nodeContent, {
                block: options.block || 'center',
                margin: typeof options.margin === 'number' ? options.margin : 72
            });
        }
        if (shouldHighlight) {
            highlightTreeNodeContent(nodeContent);
        }
        return nodeContent;
    }

    function installCodeToTreeJumpButtons(scopeRoot) {
        var installRoot = scopeRoot && scopeRoot.querySelectorAll ? scopeRoot : document;
        var calls = installRoot.querySelectorAll('.lprint-trace-call[id^="call-"]');
        calls.forEach(function(callEl) {
            if (callEl.querySelector('.back-to-tree-btn')) return;
            var callId = String(callEl.id || '').replace(/^call-/, '');
            if (!callId) return;
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'back-to-tree-btn';
            btn.setAttribute('data-call-id', callId);
            btn.title = '跳转到调用树中的对应行';
            btn.textContent = '调用树';
            btn.style.marginLeft = '8px';
            callEl.appendChild(btn);
        });
    }

    /** 正文 trace 调用行悬停显示与调用树一致的 #序号（scope + document，避免 call 块在 tab 容器外时漏设） */
    function installTraceCallIdTitles(scopeRoot) {
        var roots = [];
        if (scopeRoot && scopeRoot.querySelectorAll && scopeRoot !== document) {
            roots.push(scopeRoot);
        }
        if (document.querySelectorAll) {
            roots.push(document);
        }
        var seen = typeof WeakSet !== 'undefined' ? new WeakSet() : null;
        var fallbackSeen = seen ? null : [];

        for (var r = 0; r < roots.length; r++) {
            var list = roots[r].querySelectorAll('.lprint-trace-call');
            for (var i = 0; i < list.length; i++) {
                var callEl = list[i];
                if (seen) {
                    if (seen.has(callEl)) continue;
                    seen.add(callEl);
                } else if (fallbackSeen.indexOf(callEl) >= 0) {
                    continue;
                } else {
                    fallbackSeen.push(callEl);
                }
                var raw = String(callEl.id || callEl.getAttribute('data-call-id') || '').trim();
                if (!raw) continue;
                var seq = raw.replace(/^call-/, '');
                if (!seq) continue;
                callEl.setAttribute('title', '#' + seq);
            }
        }
    }

    function _searchRootLabel(sr) {
        if (!sr) return 'null';
        if (sr === document) return 'document';
        if (sr.id) return 'scope#' + sr.id;
        var cls = sr.className && String(sr.className).split ? String(sr.className).split(/\s+/).slice(0, 2).join('.') : '';
        return cls ? 'scope.' + cls : 'scope(匿名节点)';
    }

    /** @returns {{ target: Element|null, wantedId: string, via: string, searchIn: string }|null} */
    function findCallElementByIdDetails(callId) {
        var wantedId = 'call-' + String(callId || '').replace(/^call-/, '');
        if (!wantedId || wantedId === 'call-') return null;

        var searchRoots = [];
        if (root && root.querySelector && root !== document) {
            searchRoots.push(root);
        }
        if (document && document.querySelector) {
            searchRoots.push(document);
        }

        var idSel = '.lprint-trace-call[id="' + wantedId.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"]';
        var dataSel = '.lprint-trace-call[data-call-id="' + wantedId.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"]';

        for (var r = 0; r < searchRoots.length; r++) {
            var sr = searchRoots[r];
            var label = _searchRootLabel(sr);
            var byAttr = sr.querySelector(idSel);
            if (byAttr) {
                return { target: byAttr, wantedId: wantedId, via: 'querySelector(.lprint-trace-call[id=…])', searchIn: label };
            }
            byAttr = sr.querySelector(dataSel);
            if (byAttr) {
                return { target: byAttr, wantedId: wantedId, via: 'querySelector(.lprint-trace-call[data-call-id=call-…])', searchIn: label };
            }
        }

        var numericOnly = wantedId.replace(/^call-/, '');
        if (/^\d+$/.test(numericOnly)) {
            var dataNumericSel = '.lprint-trace-call[data-call-id="' + numericOnly.replace(/"/g, '\\"') + '"]';
            for (var r2 = 0; r2 < searchRoots.length; r2++) {
                var hit = searchRoots[r2].querySelector(dataNumericSel);
                if (hit) {
                    return { target: hit, wantedId: wantedId, via: 'querySelector(.lprint-trace-call[data-call-id=数字])', searchIn: _searchRootLabel(searchRoots[r2]) };
                }
            }
        }

        var fallback = document.getElementById(wantedId);
        if (fallback && fallback.classList && fallback.classList.contains('lprint-trace-call')) {
            return { target: fallback, wantedId: wantedId, via: 'getElementById + .lprint-trace-call', searchIn: 'document' };
        }
        if (fallback) {
            return { target: fallback, wantedId: wantedId, via: 'getElementById(无lprint-trace-call类，兜底)', searchIn: 'document' };
        }
        return { target: null, wantedId: wantedId, via: '未找到', searchIn: '-' };
    }

    function findCallElementById(callId) {
        var d = findCallElementByIdDetails(callId);
        return d && d.target;
    }

    /**
     * 日志正文在 .tab-pane 内滚动（window.scrollY 多为 0）。原生 scrollIntoView 在此布局下
     * 往往无法把目标滚进可视区，改为对最近的 .tab-pane 设置 scrollTop。
     */
    function scrollTraceTargetIntoView(element, options) {
        options = options || {};
        var margin = typeof options.margin === 'number' ? options.margin : 8;
        if (!element || !element.getBoundingClientRect) return null;
        var pane = element.closest ? element.closest('.tab-pane') : null;
        if (!pane) {
            element.scrollIntoView({ behavior: 'auto', block: 'start', inline: 'nearest' });
            return { host: null, top: window.scrollY };
        }
        var paneRect = pane.getBoundingClientRect();
        var elRect = element.getBoundingClientRect();
        var delta = elRect.top - paneRect.top - margin;
        var targetTop = pane.scrollTop + delta;
        var maxTop = Math.max(0, pane.scrollHeight - pane.clientHeight);
        if (targetTop < 0) targetTop = 0;
        if (targetTop > maxTop) targetTop = maxTop;
        pane.scrollTop = targetTop;
        return { host: pane, top: targetTop };
    }

    function scrollTraceTargetIntoViewStable(element, options) {
        var result = scrollTraceTargetIntoView(element, options);
        requestAnimationFrame(function () {
            scrollTraceTargetIntoView(element, options);
        });
        setTimeout(function () {
            scrollTraceTargetIntoView(element, options);
        }, 80);
        return result;
    }

    function getTreeDurationMsForTraceCall(callEl) {
        if (!callEl || !hierarchy || !hierarchy.idMap || !hierarchy.nodeMap) return -1;
        var rawId = callEl.getAttribute('id') || callEl.getAttribute('data-id') || callEl.getAttribute('data-call-id') || '';
        var normalizedId = String(rawId || '').replace(/^call-/, '');
        var candidates = [];
        if (normalizedId) candidates.push(normalizedId);
        var leadingIdMatch = normalizedId.match(/^(\d+)(?:\D|$)/);
        if (leadingIdMatch) candidates.push(leadingIdMatch[1]);

        for (var i = 0; i < candidates.length; i++) {
            var key = hierarchy.idMap[String(candidates[i])];
            var node = key ? hierarchy.nodeMap[key] : null;
            if (!node) continue;
            var durationMs = _parseTimeToMs(node.time);
            if (durationMs >= 0) return durationMs;
        }
        return -1;
    }

    function installCallDurationBars(scopeRoot) {
        var installRoot = scopeRoot && scopeRoot.querySelectorAll ? scopeRoot : document;
        var calls = installRoot.querySelectorAll('.lprint-trace-call[id^="call-"], .lprint-trace-call[data-call-id^="call-"]');
        calls.forEach(function(callEl) {
            var durationMs = getTreeDurationMsForTraceCall(callEl);
            if (durationMs < 0) {
                durationMs = _extractTraceCallDurationMs(callEl);
            }
            if (durationMs < 0) return;
            callEl.setAttribute('data-duration-ms', String(durationMs));
            if (!callEl.querySelector('.tree-duration-bar')) {
                var bar = document.createElement('span');
                bar.className = 'tree-duration-bar';
                callEl.appendChild(bar);
            }
        });
    }

    function setFavoriteButtonState(btn, isFavorite, isPartialFavorite) {
        if (!btn) return;
        btn.classList.toggle('is-favorite', !!isFavorite);
        btn.classList.toggle('is-partial-favorite', !isFavorite && !!isPartialFavorite);
        btn.textContent = isFavorite ? '★' : ((!isFavorite && isPartialFavorite) ? '◐' : '☆');
        btn.title = isFavorite ? '取消收藏' : ((!isFavorite && isPartialFavorite) ? '子级已收藏，点击收藏此节点' : '收藏');
    }

    function syncRenderedTreeFavoriteStates() {
        markTraceTreePartialFavorites(hierarchy.roots);
        var treeButtons = container.querySelectorAll('.tree-favorite-btn[data-call-id]');
        treeButtons.forEach(function(btn) {
            var normalizedId = String(btn.getAttribute('data-call-id') || '').replace(/^call-/, '');
            var node = hierarchy.idMap && hierarchy.idMap[normalizedId] ? hierarchy.nodeMap[hierarchy.idMap[normalizedId]] : null;
            setFavoriteButtonState(btn, !!(node && node.isFavorite), !!(node && node.hasFavoriteDescendant));
        });
    }

    function syncFavoriteButtons(callId) {
        var normalizedId = String(callId || '').replace(/^call-/, '');
        if (!normalizedId) return;
        var isFavorite = !!favoriteIds[normalizedId];
        var buttons = root.querySelectorAll(
            '.tree-favorite-btn[data-call-id="' + normalizedId.replace(/"/g, '\\"') + '"], ' +
            '.trace-call-favorite-btn[data-call-id="' + normalizedId.replace(/"/g, '\\"') + '"]'
        );
        buttons.forEach(function(btn) {
            setFavoriteButtonState(btn, isFavorite, false);
        });
        if (hierarchy.idMap && hierarchy.idMap[normalizedId]) {
            var node = hierarchy.nodeMap[hierarchy.idMap[normalizedId]];
            if (node) node.isFavorite = isFavorite;
        }
        syncRenderedTreeFavoriteStates();
    }

    function setFavorite(callId, isFavorite) {
        var normalizedId = String(callId || '').replace(/^call-/, '');
        if (!normalizedId) return;
        if (isFavorite) {
            favoriteIds[normalizedId] = true;
        } else {
            delete favoriteIds[normalizedId];
        }
        _saveTraceTreeFavoriteIds(favoriteStorageKey, favoriteIds);
        syncFavoriteButtons(normalizedId);
        if (favoriteOnlyActive) {
            applyFavoriteOnlyFilter(true);
        }
    }

    function installCallFavoriteButtons(scopeRoot) {
        var installRoot = scopeRoot && scopeRoot.querySelectorAll ? scopeRoot : document;
        var calls = installRoot.querySelectorAll('.lprint-trace-call[id^="call-"]');
        calls.forEach(function(callEl) {
            if (callEl.querySelector('.trace-call-favorite-btn')) return;
            var callId = String(callEl.id || '').replace(/^call-/, '');
            if (!callId) return;
            var wrap = document.createElement('span');
            wrap.innerHTML = _traceTreeFavoriteButtonHtml(callId, !!favoriteIds[callId], 'trace-call-favorite-btn');
            callEl.appendChild(wrap.firstChild);
        });
    }

    function visibleFavoriteKeySet() {
        var visible = {};
        Object.keys(favoriteIds).forEach(function(id) {
            if (!favoriteIds[id] || !hierarchy.idMap || !hierarchy.idMap[id]) return;
            var key = hierarchy.idMap[id];
            var node = hierarchy.nodeMap[key];
            while (node) {
                visible[node._key] = true;
                node = node._parentKey ? hierarchy.nodeMap[node._parentKey] : null;
            }
        });
        return visible;
    }

    function renderFavoritePaths() {
        Object.keys(favoriteIds).forEach(function(id) {
            if (favoriteIds[id]) {
                revealTreeNodeByCallId(id, { scroll: false, highlight: false });
            }
        });
    }

    function applyFavoriteOnlyFilter(active) {
        favoriteOnlyActive = !!active;
        var btn = container.querySelector('#favorite-tree-only-btn');
        if (btn) {
            btn.classList.toggle('is-active', favoriteOnlyActive);
        }

        if (!favoriteOnlyActive) {
            container.querySelectorAll('.tree-node').forEach(function(nodeEl) {
                nodeEl.style.display = '';
            });
            return;
        }

        renderFavoritePaths();
        var visible = visibleFavoriteKeySet();
        container.querySelectorAll('.tree-node[data-node-key]').forEach(function(nodeEl) {
            var key = nodeEl.getAttribute('data-node-key');
            nodeEl.style.display = visible[key] ? '' : 'none';
        });
    }

    // 绑定展开/折叠事件（委托，支持后续动态渲染出的节点）
    container.addEventListener('click', function(e) {
        var toggle = e.target && e.target.closest ? e.target.closest('.tree-toggle') : null;
        if (!toggle) return;
        e.stopPropagation();
        var treeNode = toggle.closest('.tree-node');
        var children = treeNode ? treeNode.querySelector(':scope > .tree-children') : null;
        if (!children) return;
        var isCollapsed = children.classList.contains('collapsed');
        if (isCollapsed) {
            var rendered = ensureChildrenRendered(treeNode);
            children.classList.remove('collapsed');
            toggle.classList.remove('collapsed');
            if (rendered) {
                applyDurationBars(container);
            }
            if (favoriteOnlyActive) {
                applyFavoriteOnlyFilter(true);
            }
        } else {
            children.classList.add('collapsed');
            toggle.classList.add('collapsed');
            // 折叠时释放DOM，确保“折叠的不渲染”
            children.innerHTML = '';
            children.setAttribute('data-rendered', '0');
        }
    });
    
    // 绑定搜索功能
    var searchInput = container.querySelector('#tree-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            filterTree(this.value.toLowerCase());
        });
    }
    
    // 绑定树行“代码”按钮跳转（委托）；普通行点击不再跳转，避免误触
    container.addEventListener('click', function(e) {
        var root = e.currentTarget || container;
        var jumpBtn = e.target && e.target.closest ? e.target.closest('.tree-jump-to-code-btn') : null;
        if (!jumpBtn || !(root && root.contains(jumpBtn))) return;
        e.preventDefault();
        e.stopPropagation();

        var id = jumpBtn.getAttribute('data-id');
        if (!id) return;

        treeLog('[调用树][跳转代码块]', '树行 data-id=', id);

        var detail = findCallElementByIdDetails(id);
        var target = detail && detail.target;
        if (detail) {
            treeLog('[调用树][跳转代码块]', '查找', {
                期望DOMid: detail.wantedId,
                方式: detail.via,
                查找范围: detail.searchIn
            });
        }
        if (!target) {
            treeWarn('未找到 id=' + id + ' 的元素');
        }
        if (target) {
            var scrollHost = target.closest ? target.closest('.tab-pane') : null;
            var beforeScroll = scrollHost ? scrollHost.scrollTop : window.scrollY;
            scrollTraceTargetIntoViewStable(target, { margin: 8 });
            var logScroll = function () {
                var rect = target.getBoundingClientRect();
                var host = target.closest ? target.closest('.tab-pane') : null;
                treeLog('[调用树][跳转代码块]', '滚动目标', {
                    元素: target.tagName.toLowerCase() + (target.id ? '#' + target.id : ''),
                    class: (target.className && String(target.className).slice(0, 120)) || '',
                    相对视口top: Math.round(rect.top),
                    滚动容器: host ? 'tab-pane' : 'window',
                    scrollTop: host ? Math.round(host.scrollTop) : Math.round(window.scrollY),
                    scrollTop变化: Math.round((host ? host.scrollTop : window.scrollY) - beforeScroll)
                });
            };
            requestAnimationFrame(function () {
                logScroll();
                setTimeout(logScroll, 120);
            });
        } else if (window.toast) {
            var nodeContent = jumpBtn.closest ? jumpBtn.closest('.tree-node-content') : null;
            window.toast.warning('未找到对应代码块：#' + id + ' / ' + (nodeContent ? (nodeContent.getAttribute('data-func') || 'unknown') : 'unknown'), 3000);
        }
    });

    // 树行收藏按钮
    container.addEventListener('click', function(e) {
        var root = e.currentTarget || container;
        var favBtn = e.target && e.target.closest ? e.target.closest('.tree-favorite-btn') : null;
        if (!favBtn || !(root && root.contains(favBtn))) return;
        e.preventDefault();
        e.stopPropagation();
        var callId = favBtn.getAttribute('data-call-id');
        setFavorite(callId, !favoriteIds[String(callId || '').replace(/^call-/, '')]);
    });

    // 异常优先视图跳转
    container.addEventListener('click', function(e) {
        var root = e.currentTarget || container;
        var btn = e.target && e.target.closest ? e.target.closest('.exception-jump-btn') : null;
        if (!btn || !(root && root.contains(btn))) return;
        e.preventDefault();
        e.stopPropagation();
        var id = btn.getAttribute('data-id');
        if (!id) return;
        var target = callTargetIndex[id] || null;
        if (target) {
            scrollTraceTargetIntoViewStable(target, { margin: 8 });
        } else if (window.toast) {
            window.toast.warning('异常项未找到对应代码块：#' + id, 2500);
        }
    });
    
    // 绑定长变量展开/收起按钮（委托）：懒渲染/动态生成的按钮也能正常工作
    container.addEventListener('click', function (e) {
        var root = e.currentTarget || container;
        var btn = e.target && e.target.closest ? e.target.closest('.ret-val-toggle') : null;
        if (!btn || !(root && root.contains(btn))) return;
        e.stopPropagation();

        // 使用按钮文本判断当前状态
        var isExpanded = btn.textContent.trim() === '收起';

        console.log('[展开/收起] 当前状态: ' + (isExpanded ? '已展开' : '已收起') + ', 按钮文本: ' + btn.textContent);

        var nodeContent = btn.closest('.tree-node-content');
        var treeNode = nodeContent ? nodeContent.parentElement : null;

        if (!treeNode) return;

        // 查找或创建返回值代码块容器
        var retBlockId = 'ret-block-' + nodeContent.getAttribute('data-id');
        var retBlock = document.getElementById(retBlockId);

        if (isExpanded) {
            // 收起：移除代码块
            console.log('[收起] 移除返回值代码块');
            if (retBlock) {
                retBlock.remove();
            }
            btn.textContent = '展开';
            btn.title = '展开完整值';
            return;
        }

        // 展开：根据 DOM + trace_linear 元数据查找完整返回值
        console.log('[展开] 开始展开');
                
                var fullReturnValue = null;
                var callId = nodeContent.getAttribute('data-id');
                
                if (window.traceJsonData) {
                    console.log('[展开] JSON数据格式:', window.traceJsonData.format);
                    
                    if (window.traceJsonData.format === 'trace_linear') {
                        var htmlId = 'call-' + callId;
                        
                        console.log('[展开] 查找HTML元素:', htmlId);
                        
                        // 查找对应的调用元素
                        var callElement = document.getElementById(htmlId);
                        if (callElement) {
                            console.log('[展开] 找到调用元素:', htmlId);
                            
                            // 方法1: 首先检查调用元素本身是否包含返回值
                            var callText = callElement.textContent || callElement.innerText;
                            var returnMatch = callText.match(/⬅️\s*\([^)]+\)\s*(.+)/);
                            if (returnMatch) {
                                fullReturnValue = returnMatch[1].trim();
                                console.log('[展开] 从调用元素获取返回值:', fullReturnValue);
                            }
                            
                            // 如果调用元素本身没有返回值，查找下一个元素
                            if (!fullReturnValue) {
                                var nextElement = callElement.nextElementSibling;
                                while (nextElement && !fullReturnValue) {
                                    // 查找所有返回值展开容器
                                    var returnContainers = nextElement.querySelectorAll ? 
                                        nextElement.querySelectorAll('.lprint-trace-expand-container') : [];
                                    
                                    for (var i = 0; i < returnContainers.length; i++) {
                                        var container = returnContainers[i];
                                        var header = container.querySelector('.lprint-trace-expand-header');
                                        if (header && header.textContent.includes('返回值')) {
                                            // 从header中获取返回值
                                            var headerText = header.textContent;
                                            var returnMatch = headerText.match(/⬅️\s*返回值\s*\([^)]+\)\s*(.+)$/);
                                            if (returnMatch) {
                                                var shortReturn = returnMatch[1].trim();
                                                console.log('[展开] 从展开容器header获取短返回值:', shortReturn);
                                                
                                                // 检查是否有完整返回值（多行部分）
                                                var pre = container.querySelector('.lprint-trace-return-pre');
                                                if (pre) {
                                                    var fullReturnText = pre.textContent.trim();
                                                    // 移除 <<<END_RETURN>>> 标记
                                                    fullReturnText = fullReturnText.replace(/<<<END_RETURN>>>$/, '').trim();
                                                    
                                                    // 如果短返回值以省略号结尾，使用完整返回值
                                                    if (shortReturn.includes('...')) {
                                                        fullReturnValue = fullReturnText;
                                                        console.log('[展开] 使用完整返回值（省略号替换）:', fullReturnValue.length, '字符');
                                                    } else {
                                                        fullReturnValue = shortReturn;
                                                    }
                                                } else {
                                                    fullReturnValue = shortReturn;
                                                }
                                                break;
                                            }
                                        }
                                    }
                                    
                                    // 如果没找到展开容器，查找代码块
                                    if (!fullReturnValue) {
                                        var codeBlocks = nextElement.querySelectorAll ? 
                                            nextElement.querySelectorAll('.lprint-trace-code-block') : [];
                                        
                                        for (var j = 0; j < codeBlocks.length; j++) {
                                            var codeBlock = codeBlocks[j];
                                            var codeContent = codeBlock.textContent || codeBlock.innerText;
                                            
                                            // 查找 ⬅️ 返回值 行
                                            var returnMatch = codeContent.match(/⬅️\s*返回值[^:]*:\s*(.+)/);
                                            if (returnMatch) {
                                                fullReturnValue = returnMatch[1].trim();
                                                console.log('[展开] 从代码块获取返回值:', fullReturnValue);
                                                break;
                                            }
                                            
                                            // 查找 ⬅️ (第XX行) 格式
                                            var lineMatch = codeContent.match(/⬅️\s*\([^)]+\)\s*(.+)/);
                                            if (lineMatch) {
                                                fullReturnValue = lineMatch[1].trim();
                                                console.log('[展开] 从行号格式获取返回值:', fullReturnValue);
                                                break;
                                            }
                                        }
                                    }
                                    
                                    nextElement = nextElement.nextElementSibling;
                                }
                            }
                            
                            // 方法2: 如果没找到，查找函数容器内的代码块
                            if (!fullReturnValue) {
                                var funcContainer = callElement.nextElementSibling;
                                while (funcContainer && !funcContainer.classList.contains('lprint-trace-func')) {
                                    funcContainer = funcContainer.nextElementSibling;
                                }
                                
                                if (funcContainer) {
                                    // 查找代码块中的返回值标记
                                    var codeBlocks = funcContainer.querySelectorAll('.lprint-trace-code-block');
                                    for (var j = 0; j < codeBlocks.length; j++) {
                                        var codeBlock = codeBlocks[j];
                                        var codeContent = codeBlock.textContent || codeBlock.innerText;
                                        
                                        // 查找 ⬅️ 返回值 行
                                        var returnMatch = codeContent.match(/⬅️\s*返回值[^:]*:\s*(.+)/);
                                        if (returnMatch) {
                                            fullReturnValue = returnMatch[1].trim();
                                            console.log('[展开] 从代码块获取完整返回值，长度:', fullReturnValue.length);
                                            break;
                                        }
                                        
                                        // 查找 ⬅️ (第XX行) 格式
                                        var lineMatch = codeContent.match(/⬅️\s*\([^)]+\)\s*(.+)/);
                                        if (lineMatch) {
                                            fullReturnValue = lineMatch[1].trim();
                                            console.log('[展开] 从行号格式获取完整返回值，长度:', fullReturnValue.length);
                                            break;
                                        }
                                    }
                                }
                            }
                            
                            // 方法3: 最后尝试查找所有展开容器
                            if (!fullReturnValue) {
                                var allContainers = document.querySelectorAll('.lprint-trace-expand-container');
                                for (var k = 0; k < allContainers.length; k++) {
                                    var container = allContainers[k];
                                    // 检查是否在正确的调用上下文中
                                    var prevCall = container.previousElementSibling;
                                    while (prevCall && prevCall.id !== htmlId) {
                                        prevCall = prevCall.previousElementSibling;
                                    }
                                    
                                    if (prevCall && prevCall.id === htmlId) {
                                        var header = container.querySelector('.lprint-trace-expand-header');
                                        if (header && header.textContent.includes('返回值')) {
                                            // 从header中获取返回值
                                            var headerText = header.textContent;
                                            var returnMatch = headerText.match(/⬅️\s*返回值\s*\([^)]+\)\s*(.+)$/);
                                            if (returnMatch) {
                                                var shortReturn = returnMatch[1].trim();
                                                console.log('[展开] 从全局展开容器header获取短返回值:', shortReturn);
                                                
                                                // 检查是否有完整返回值（多行部分）
                                                var pre = container.querySelector('.lprint-trace-return-pre');
                                                if (pre) {
                                                    var fullReturnText = pre.textContent.trim();
                                                    // 移除 <<<END_RETURN>>> 标记
                                                    fullReturnText = fullReturnText.replace(/<<<END_RETURN>>>$/, '').trim();
                                                    
                                                    // 如果短返回值以省略号结尾，使用完整返回值
                                                    if (shortReturn.includes('...')) {
                                                        fullReturnValue = fullReturnText;
                                                        console.log('[展开] 使用完整返回值（省略号替换-全局）:', fullReturnValue.length, '字符');
                                                    } else {
                                                        fullReturnValue = shortReturn;
                                                    }
                                                } else {
                                                    fullReturnValue = shortReturn;
                                                }
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            console.log('[展开] 未找到调用元素:', htmlId);
                        }
                    } else {
                        console.log('[展开] 需要 trace_linear 格式，当前:', window.traceJsonData && window.traceJsonData.format, 'callId:', callId);
                    }
                } else {
                    console.log('[展开] 无 traceJsonData');
                }
                
                // 如果所有方法都失败，使用data属性中的值
                if (!fullReturnValue) {
                    var attrReturnValue = nodeContent.getAttribute('data-return-value');
                    fullReturnValue = attrReturnValue || '未找到返回值';
                    console.log('[展开] 使用data属性值，长度:', fullReturnValue.length);
                }
                
                console.log('[展开] 最终返回值长度:', fullReturnValue.length);
                
                // 获取函数参数信息
                console.log('[展开] ===== 准备提取函数参数 =====');
                console.log('[展开] callId:', callId);
                var functionParams = extractFunctionParams(callId);
                console.log('[展开] ===== 参数提取完成 =====');
                console.log('[展开] 提取到的参数:', functionParams);
                
                var prettyEnabled = false;
                var displayParams = prettyFormatText(functionParams || '', prettyEnabled);
                var displayReturn = prettyFormatText(fullReturnValue || '', prettyEnabled);
                
                // 创建返回值代码块
                retBlock = document.createElement('div');
                retBlock.id = retBlockId;
                retBlock.className = 'return-value-block';
                // 保存原始文本，供 pretty_print 切换时重渲染
                retBlock.setAttribute('data-raw-return', String(fullReturnValue || ''));
                retBlock.setAttribute('data-raw-params', String(functionParams || ''));
                retBlock.style.cssText = 'margin:5px 0 5px ' + (parseInt(nodeContent.parentElement.style.marginLeft || 0) + 20) + 'px;' +
                    'padding:8px 10px;' +
                    'background:#2d2d2d;' +
                    'border:1px solid #444;' +
                    'border-radius:4px;' +
                    'font-family:monospace;' +
                    'font-size:0.9em;' +
                    'color:#d4d4d4;' +
                    'white-space:pre-wrap;' +
                    'word-break:break-all;';
                
                var contentHTML = '';
                
                // 添加函数参数信息（如果存在）
                if (functionParams) {
                    contentHTML += '<div style="color:#888;font-size:0.85em;margin-bottom:4px;">⬅️ 函数参数:</div>' +
                        '<pre class="return-params-text" style="color:#61afef;margin:0 0 8px 0;white-space:pre-wrap;overflow-wrap:anywhere;">' +
                        escapeHtml(displayParams) +
                        '</pre>';
                }
                
                // 添加返回值信息
                contentHTML += '<div style="color:#888;font-size:0.85em;margin-bottom:4px;">⬅️ 返回值:</div>' +
                    '<pre class="return-value-text" style="color:#98c379;margin:0;white-space:pre-wrap;overflow-wrap:anywhere;">' +
                    escapeHtml(displayReturn) +
                    '</pre>';
                
                // 添加"显示代码块"按钮
                contentHTML += '<div style="margin-top:8px;">' +
                    '<button class="show-code-btn" data-call-id="' + callId + '" style="background:#4a9eff;color:white;border:none;padding:4px 8px;border-radius:4px;font-size:0.8em;cursor:pointer;margin-right:5px;" onmouseover="this.style.background=\'#5aa8ff\'" onmouseout="this.style.background=\'#4a9eff\'">显示代码块</button>' +
                    '</div>' +
                    '<div class="code-block-container" id="code-block-' + callId + '" style="display:none;margin-top:8px;"></div>';
                
                retBlock.innerHTML =
                    '<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">' +
                      '<div style="color:#aaa;font-size:0.9em;font-weight:500;">函数调用详情</div>' +
                      '<label style="margin-left:auto;display:flex;align-items:center;gap:6px;color:#b0b0b0;font-size:0.85em;cursor:pointer;user-select:none;">' +
                        '<input type="checkbox" class="pretty-print-toggle" />' +
                        '<span>pretty_print</span>' +
                      '</label>' +
                    '</div>' +
                    contentHTML;
                
                // 插入到节点内容后面
                nodeContent.parentElement.insertBefore(retBlock, nodeContent.nextSibling);

                btn.textContent = '收起';
                btn.title = '收起';
    });
    
    // 使用事件委托处理"显示代码块"按钮
    container.addEventListener('click', function(e) {
        var root = e.currentTarget || container;
        if (e.target && e.target.classList.contains('show-code-btn')) {
            e.stopPropagation();
            
            var callId = e.target.getAttribute('data-call-id');
            var codeContainer = document.getElementById('code-block-' + callId);
            
            console.log('[显示代码块] 点击按钮，callId:', callId);
            
            if (codeContainer.style.display === 'none') {
                // 显示代码块
                var codeHTML = getFunctionCodeBlock(callId);
                if (codeHTML) {
                    codeContainer.innerHTML = '<div style="color:#888;font-size:0.85em;margin-bottom:4px;">⬅️ 函数代码:</div>' + codeHTML;
                    codeContainer.style.display = 'block';
                    e.target.textContent = '隐藏代码块';
                    e.target.title = '隐藏代码块';
                    console.log('[显示代码块] 代码块已显示');
                } else {
                    console.log('[显示代码块] 未找到代码块');
                    e.target.textContent = '无代码块';
                    e.target.disabled = true;
                }
            } else {
                // 隐藏代码块
                codeContainer.style.display = 'none';
                e.target.textContent = '显示代码块';
                e.target.title = '显示代码块';
                console.log('[显示代码块] 代码块已隐藏');
            }
        }
    });

    // pretty_print 复选框：每个 block 单独生效（不联动、不持久化）
    // 控件也会被注入到正文展开块中，所以监听整个 root，而不是只监听调用树容器。
    root.addEventListener('change', function (e) {
        var t = e.target;
        if (!t || !t.classList || !t.classList.contains('pretty-print-toggle')) return;
        var enabled = !!t.checked;
        try {
            var rvBlock = t.closest ? t.closest('.return-value-block') : null;
            if (rvBlock) {
                var rawRet = rvBlock.getAttribute('data-raw-return') || '';
                var rawParams = rvBlock.getAttribute('data-raw-params') || '';
                var retEl = rvBlock.querySelector('.return-value-text');
                var paramEl = rvBlock.querySelector('.return-params-text');
                if (retEl) retEl.textContent = prettyFormatText(rawRet, enabled);
                if (paramEl) paramEl.textContent = prettyFormatText(rawParams, enabled);
                return;
            }
            var exp = t.closest ? t.closest('.lprint-trace-expand-container') : null;
            if (exp) {
                var raw = exp.getAttribute('data-raw-return') || '';
                var pre = exp.querySelector ? exp.querySelector('.lprint-trace-return-pre') : null;
                if (pre) pre.textContent = prettyFormatText(raw, enabled);
            }
        } catch (err) {}
    });
    
    // 正文 lprint-trace-call 收藏按钮
    root.addEventListener('click', function(e) {
        var favBtn = e.target && e.target.closest ? e.target.closest('.trace-call-favorite-btn') : null;
        if (!favBtn || !(root && root.contains(favBtn))) return;
        e.preventDefault();
        e.stopPropagation();
        var callId = favBtn.getAttribute('data-call-id');
        setFavorite(callId, !favoriteIds[String(callId || '').replace(/^call-/, '')]);
    });

    // 使用事件委托处理正文代码块里的“调用树”按钮
    root.addEventListener('click', function(e) {
        var backBtn = e.target && e.target.closest ? e.target.closest('.back-to-tree-btn') : null;
        if (backBtn) {
            e.stopPropagation();
            e.preventDefault();
            
            console.log('[返回调用链] 点击返回调用链按钮');
            
            // 智能查找调用链视图容器
            var treeContainer = null;
            
            // 1. 首先尝试查找当前标签页中的调用链视图
            var currentTab = e.target.closest('.tab-pane');
            if (currentTab) {
                treeContainer = currentTab.querySelector('.trace-tree-view');
                console.log('[返回调用链] 在当前标签页中查找调用链视图:', !!treeContainer);
            }
            
            // 2. 如果没找到，尝试查找全局的调用链视图
            if (!treeContainer) {
                treeContainer = document.querySelector('.trace-tree-view');
                console.log('[返回调用链] 在全局中查找调用链视图:', !!treeContainer);
            }
            
            // 3. 最后尝试查找旧的容器ID（向后兼容）
            if (!treeContainer) {
                treeContainer = document.getElementById('trace-tree-view-container');
                console.log('[返回调用链] 查找旧版容器ID:', !!treeContainer);
            }
            
            if (treeContainer) {
                var callId = backBtn.getAttribute('data-call-id') || '';
                var highlighted = revealTreeNodeByCallId(callId, { block: 'center', margin: 72 });
                if (!highlighted) {
                    // 找不到对应行时仍回到调用树顶部，保留旧行为作为兜底。
                    scrollTraceTargetIntoView(treeContainer, { margin: 8 });
                }
                console.log('[返回调用链] 已滚动到调用链视图', callId);
                
                // 显示toast通知
                if (window.toast) {
                    window.toast.success('已返回调用链视图', 3000);
                }
            } else {
                console.log('[返回调用链] 未找到调用链容器');
                
                // 显示错误提示
                if (window.toast) {
                    window.toast.error('未找到调用链视图', 3000);
                }
            }
        }
    });

    // 绑定展开全部按钮
    var expandAllBtn = container.querySelector('#expand-all-btn');
    if (expandAllBtn) {
        expandAllBtn.addEventListener('click', function() {
            container.querySelectorAll('.tree-node').forEach(function(nodeEl) {
                renderDescendants(nodeEl);
            });
            container.querySelectorAll('.tree-children').forEach(function(children) {
                children.classList.remove('collapsed');
            });
            container.querySelectorAll('.tree-toggle').forEach(function(toggle) {
                toggle.classList.remove('collapsed');
            });
            applyDurationBars(container);
            saveTreeExpandState(container, storageKey);
        });
    }
    
    // 绑定收缩全部按钮
    var collapseAllBtn = container.querySelector('#collapse-all-btn');
    if (collapseAllBtn) {
        collapseAllBtn.addEventListener('click', function() {
            container.querySelectorAll('.tree-children').forEach(function(children) {
                children.classList.add('collapsed');
                children.innerHTML = '';
                children.setAttribute('data-rendered', '0');
            });
            container.querySelectorAll('.tree-toggle').forEach(function(toggle) {
                toggle.classList.add('collapsed');
            });
            saveTreeExpandState(container, storageKey);
        });
    }
    
    // 绑定折叠整个树视图按钮（使用container查找，避免多tab时ID冲突）
    var toggleTreeViewBtn = container.querySelector('#toggle-tree-view-btn');
    var treeContent = container.querySelector('#tree-content');
    var treeControls = container.querySelector('#tree-controls');
    if (toggleTreeViewBtn && treeContent && treeControls) {
        if (TREE_DEBUG_ENABLED && !window.__traceTreeShiftWheelDebugInstalled) {
            window.__traceTreeShiftWheelDebugInstalled = true;
            document.addEventListener('wheel', function(evt) {
                if (!evt.shiftKey) return;
                var targetTag = evt.target && evt.target.tagName ? evt.target.tagName : 'unknown';
                treeLog('[Shift+Wheel][document]', {
                    targetTag: targetTag,
                    deltaY: evt.deltaY,
                    deltaX: evt.deltaX,
                    defaultPrevented: evt.defaultPrevented
                });
            }, { passive: true, capture: true });
            treeWarn('[Shift+Wheel] 文档级调试监听已启用');
        }

        // 滚轮（capture）：在调用树区域内 — Shift+滚轮只滚 #tree-content；否则滚整页 .tab-pane（不滚内层树）。
        treeContent.addEventListener('wheel', function(e) {
            var dy = e.deltaY;
            if (e.deltaMode === 1) {
                dy *= 16;
            } else if (e.deltaMode === 2) {
                dy *= treeContent.clientHeight || 0;
            }
            if (TREE_DEBUG_ENABLED) {
                treeLog('[Wheel][tree-content before]', {
                    shiftKey: e.shiftKey,
                    deltaY: e.deltaY,
                    dy: dy,
                    scrollTop: treeContent.scrollTop,
                    scrollHeight: treeContent.scrollHeight,
                    clientHeight: treeContent.clientHeight
                });
            }
            e.preventDefault();
            e.stopPropagation();
            if (e.shiftKey) {
                var maxScroll = Math.max(0, treeContent.scrollHeight - treeContent.clientHeight);
                var st = treeContent.scrollTop;
                var newSt = Math.min(maxScroll, Math.max(0, st + dy));
                treeContent.scrollTop = newSt;
                if (TREE_DEBUG_ENABLED) {
                    treeLog('[Wheel][tree-content] Shift+滚轮 → 仅树', { scrollTop: treeContent.scrollTop });
                }
                return;
            }
            var pane = treeContent.closest('.tab-pane');
            if (pane) {
                pane.scrollTop += dy;
            }
            if (TREE_DEBUG_ENABLED) {
                treeLog('[Wheel][tree-content] 无 Shift → 整页 tab-pane', { paneScrollTop: pane ? pane.scrollTop : null });
            }
        }, { passive: false, capture: true });

        toggleTreeViewBtn.addEventListener('click', function() {
            var isCurrentlyCollapsed = treeContent.style.display === 'none';
            if (isCurrentlyCollapsed) {
                // 展开
                treeContent.style.display = 'block';
                treeControls.style.display = 'flex';
                this.textContent = '▼';
                localStorage.setItem(treeCollapseKey, 'false');
            } else {
                // 折叠
                treeContent.style.display = 'none';
                treeControls.style.display = 'none';
                this.textContent = '▶';
                localStorage.setItem(treeCollapseKey, 'true');
            }
        });
    }
    
    // 绑定问AI按钮
    var askAITreeBtn = container.querySelector('#ask-ai-tree-btn');
    if (askAITreeBtn && window.aiAssistant) {
        askAITreeBtn.addEventListener('click', function() {
            // 收集整个调用树的文本
            var treeText = lines.join('\n');
            window.aiAssistant.open({
                type: 'call_tree',
                content: treeText
            });
        });
    }

    var favoriteTreeOnlyBtn = container.querySelector('#favorite-tree-only-btn');
    if (favoriteTreeOnlyBtn) {
        favoriteTreeOnlyBtn.addEventListener('click', function() {
            applyFavoriteOnlyFilter(!favoriteOnlyActive);
        });
    }

    // 最后：进度条补满（避免最后停在 9x%）
    _updateTraceTreeLoadingShell(container, 100, '调用树已就绪');
}

/**
 * CALL_TREE 行尾为 `... (path[:lineno])`。返回值里可能含括号（如 repr 为 '()'），
 * 非贪婪的 \\((.+?)\\)\\s*$ 会误匹配首对括号，导致 file 为空、界面不显示 L 行号。
 * 与 forward_tracer 一致：取整段末尾一对圆括号内的内容为路径。
 */
function _parseTreeOverviewTrailingFileSegment(text) {
    var s = String(text || '');
    var trimmed = s.replace(/\s+$/, '');
    if (!trimmed.length || trimmed.charAt(trimmed.length - 1) !== ')') {
        return { file: '', before: s.trim() };
    }
    var lastOpen = trimmed.lastIndexOf('(');
    if (lastOpen < 0) {
        return { file: '', before: s.trim() };
    }
    var inner = trimmed.slice(lastOpen + 1, -1).trim();
    var before = trimmed.slice(0, lastOpen).trim();
    return { file: inner, before: before };
}

function parseTreeOverview(lines) {
    var console = TREE_DEBUG_ENABLED ? window.console : { log: function () {}, warn: window.console.warn.bind(window.console), error: window.console.error.bind(window.console) };
    treeLog("=== parseTreeOverview 开始解析 ===");
    treeLog("总行数:", lines.length);
    lines.forEach(function(line, index) {
        console.log("第" + (index + 1) + "行:", JSON.stringify(line));
    });
    
    var nodes = [];
    
    lines.forEach(function(line, lineIndex) {
        // 不再使用缩进计算层级，而是从深度字段提取
        var level = 0;
        
        // 检查是否是 LOOP 子节点
        var isLoopDetail = line.includes('[LOOP:10]') || line.includes('[LOOP10:]');
        
        // 多种正则表达式匹配，支持不同格式
        var match = null;
        var patterns = [
            // LOOP 详情格式: ├─ [LOOP:10] #X-#Y → result (第10次)
            /[├└]─\s+\[(LOOP:10|LOOP10:)\]\s+#(\d+)-#(\d+)\s*→?\s*(.+)/,
            // 标准格式: ├─ func_name [深度X 路径X-X-X #X] [时间] 🔥 → result (file.py)
            /[├└]─\s+(.+?)\s+\[深度(\d+)\s+路径([\d\-]+)\s+#(\d+)\]\s+\[([^\]]+)\]/,
            // 循环折叠格式: ├─ func_name [深度X 路径X-X-X-(:10) #X] [×N次] → result (首次)
            /[├└]─\s+(.+?)\s+\[深度(\d+)\s+路径([\d\-]+)-\(:10\)\s+#(\d+)\]\s+\[×(\d+)次\]/,
            // 简化格式: ├─ func_name [X-X-X #X] [时间] → result (file.py)
            /[├└]─\s+(.+?)\s+\[([\d\-]+)\s+#(\d+)\]\s+\[([^\]]+)\]/,
            // 最简格式: ├─ func_name #X [时间] → result (file.py)
            /[├└]─\s+(.+?)\s+#(\d+)\s+\[([^\]]+)\]/,
            // 通用格式: ├─ func_name (file.py:123) #X
            /[├└]─\s+(.+?)\s+\((.+?):(\d+)\)\s+#(\d+)/,
            // 超简格式: ├─ func_name (file.py)
            /[├└]─\s+(.+?)\s+\((.+?)\)/
        ];
        
        for (var p = 0; p < patterns.length; p++) {
            match = line.match(patterns[p]);
            if (match) {
                console.log("第" + (lineIndex + 1) + "行使用模式" + (p + 1) + "匹配成功:", match);
                break;
            }
        }
        
        if (match) {
            var rest = line.substring(line.indexOf(match[0]) + match[0].length);
            console.log("剩余部分:", JSON.stringify(rest));
            var returnValue = '';
            var marker = '';
            var file = '';
            var depth = '', path = '', id = '', time = '';
            
            // 根据匹配模式提取字段
            if (isLoopDetail && match.length >= 5) {
                // LOOP 详情格式: [LOOP:10] #X-#Y → result
                var loopType = match[1];  // LOOP:10 或 LOOP10:
                var startId = match[2];
                var endId = match[3];
                var detailRest = match[4];
                
                // LOOP 子节点比父节点深一层
                // 需要找到真正的父节点（带 (:10) 标记的主 LOOP 节点）
                var parentNode = null;
                for (var i = nodes.length - 1; i >= 0; i--) {
                    if (nodes[i].path && nodes[i].path.includes('(:10)')) {
                        parentNode = nodes[i];
                        break;
                    }
                }
                
                if (parentNode) {
                    depth = String(parseInt(parentNode.depth) + 1);
                    level = parseInt(depth) - 1;
                } else {
                    // 如果找不到父节点，使用默认值
                    depth = '2';
                    level = 1;
                }
                
                id = startId + '-' + endId;
                path = loopType === 'LOOP:10' ? 'loop-first-10' : 'loop-last-10';
                time = '';
                
                // 解析返回值
                if (detailRest.includes('→')) {
                    var parts = detailRest.split('→');
                    returnValue = parts[1] ? parts[1].trim() : '';
                } else {
                    returnValue = detailRest.trim();
                }
                
                // 创建 LOOP 详情节点
                var funcName = loopType === 'LOOP:10' ? '[前10次]' : '[后10次]';
                nodes.push({
                    func: funcName,
                    depth: depth,
                    path: path,
                    id: id,
                    time: time,
                    returnValue: returnValue,
                    marker: '',
                    file: '',
                    level: level
                });
                return;  // 跳过后续处理
            } else if (match.length >= 6) {
                // 完整格式：深度、路径、ID、时间 或 循环折叠格式
                if (line.includes('(:10)')) {
                    // 循环折叠格式: [深度X 路径X-X-X-(:10) #X] [×N次]
                    depth = match[2];
                    path = match[3] + '-(:10)';  // 保留 (:10) 标记
                    id = match[4];
                    var loopCount = match[5];
                    time = '×' + loopCount + '次';
                    level = parseInt(depth) - 1;
                } else {
                    // 标准格式
                    depth = match[2];
                    path = match[3];
                    id = match[4];
                    time = match[5];
                    level = parseInt(depth) - 1;
                }
            } else if (match.length >= 5) {
                // 简化格式：路径、ID、时间
                path = match[2];
                id = match[3];
                time = match[4];
                depth = '1'; // 默认深度
                level = 0;
            } else if (match.length >= 4) {
                // 最简格式：ID、时间 或 文件、行号、ID
                if (line.includes('#')) {
                    id = match[2];
                    time = match[3];
                    depth = '1';
                    path = '1';
                    level = 0;
                } else {
                    file = match[2] + ':' + match[3];
                    id = match[4];
                    depth = '1';
                    path = '1';
                    time = '';
                    level = 0;
                }
            } else if (match.length >= 3) {
                // 超简格式：文件
                file = match[2];
                id = 'unknown';
                depth = '1';
                path = '1';
                time = '';
                level = 0;
            }
            
            // 解析返回值和性能标记
            if (rest.includes('→')) {
                var parts = rest.split('→');
                marker = parts[0].trim();
                var afterArrow = parts[1] ? parts[1].trim() : '';
                console.log("有返回值 - marker:", JSON.stringify(marker), "afterArrow:", JSON.stringify(afterArrow));
                
                var trailAfter = _parseTreeOverviewTrailingFileSegment(afterArrow);
                if (trailAfter.file) {
                    if (!file) file = trailAfter.file;
                    returnValue = trailAfter.before;
                    console.log("提取到文件:", file, "返回值:", returnValue);
                } else {
                    returnValue = afterArrow;
                    console.log("无文件路径，返回值:", returnValue);
                }
            } else {
                var trailRest = _parseTreeOverviewTrailingFileSegment(rest);
                if (trailRest.file) {
                    if (!file) file = trailRest.file;
                    marker = trailRest.before;
                    console.log("无返回值但有文件 - file:", file, "marker:", marker);
                } else {
                    marker = rest.trim();
                    console.log("无返回值无文件 - marker:", marker);
                }
            }
            
            var node = {
                level: level,
                func: match[1],
                file: file,
                depth: depth,
                path: path,
                id: id,
                time: time,
                marker: marker,
                returnValue: returnValue,
                isFolded: false
            };
            console.log("创建节点:", node);
            nodes.push(node);
        } else {
            // 尝试匹配折叠节点: ├─ func_name [×5次, 合计 2.5ms] [平均 0.5ms] 🔥 (file.py)
            var foldMatch = line.match(/[├└]─\s+(.+?)\s+\[×(\d+)次,\s*合计\s+(.+?)\]\s*\[平均\s+(.+?)\]/);
            console.log("第" + (lineIndex + 1) + "行折叠节点匹配结果:", foldMatch ? "匹配成功" : "匹配失败");
            if (foldMatch) {
                // 尝试从行中提取深度信息来计算层级
                var depthMatch = line.match(/深度(\d+)/);
                if (depthMatch) {
                    level = parseInt(depthMatch[1]) - 1;
                }
                console.log("折叠匹配组:", foldMatch);
                var rest = line.substring(line.indexOf(foldMatch[0]) + foldMatch[0].length);
                console.log("折叠节点剩余部分:", JSON.stringify(rest));
                var file = '';
                var marker = '';
                
                var trailFold = _parseTreeOverviewTrailingFileSegment(rest);
                if (trailFold.file) {
                    file = trailFold.file;
                    marker = trailFold.before;
                    console.log("折叠节点提取到文件:", file, "marker:", marker);
                } else {
                    marker = rest.trim();
                    console.log("折叠节点无文件路径 - marker:", marker);
                }
                
                var node = {
                    level: level,
                    func: foldMatch[1],
                    file: file,
                    count: parseInt(foldMatch[2]),
                    totalTime: foldMatch[3],
                    avgTime: foldMatch[4],
                    marker: marker,
                    isFolded: true
                };
                console.log("创建折叠节点:", node);
                nodes.push(node);
            } else {
        treeLog("第" + (lineIndex + 1) + "行无法解析，跳过");
            }
        }
    });
    
    treeLog("=== parseTreeOverview 解析完成 ===");
    treeLog("总共解析到 " + nodes.length + " 个节点");
    nodes.forEach(function(node, index) {
        console.log("节点" + (index + 1) + ":", node.func, "文件:", node.file, "层级:", node.level);
    });
    
    // trace_linear 侧车元数据：慢调用 / 深栈 / 错误 标记
    if (window.traceJsonData && window.traceJsonData.format === 'trace_linear') {
        console.log("=== 使用 trace_linear 元数据标记节点 ===");
        var metadata = window.traceJsonData.metadata;
        var highlights = window.traceJsonData.highlights || { slow_calls: [], deep_calls: [], error_calls: [] };
        console.log("trace_linear 元数据:", {
            totalCalls: metadata && metadata.total_calls,
            maxDepth: metadata && metadata.max_depth,
            slowCalls: highlights.slow_calls.length,
            deepCalls: highlights.deep_calls.length
        });
        nodes.forEach(function(node) {
            if (highlights.slow_calls.includes(node.id)) {
                node.isSlow = true;
            }
            if (highlights.deep_calls.includes(node.id)) {
                node.isDeep = true;
            }
            if (highlights.error_calls.includes(node.id)) {
                node.hasError = true;
            }
        });
        console.log("trace_linear 标记完成，节点数 " + nodes.length);
    } else if (window.traceJsonData) {
        console.log("traceJsonData 存在但非 trace_linear，跳过元数据标记，format:", window.traceJsonData.format);
    }
    
    return nodes;
}

function _escHtml(v) {
    return String(v || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** CALL_TREE 末尾 (path:lineno) 拆成路径与行号，供树节点展示 */
function _traceTreeFilePathAndLine(file) {
    var s = String(file || '').trim();
    if (!s) {
        return { dirPath: '', line: '' };
    }
    var m = s.match(/^(.*):(\d+)\s*$/);
    if (m && m[1].length > 0 && /^\d+$/.test(m[2])) {
        return { dirPath: m[1], line: m[2] };
    }
    return { dirPath: s, line: '' };
}

function _traceTreeFileLocationHtml(file) {
    var o = _traceTreeFilePathAndLine(file);
    var pathHtml = '<span class="tree-func-location">(<span class="tree-func-module-path">' + _escHtml(o.dirPath) + '</span>)</span>';
    if (!o.line) {
        return pathHtml;
    }
    return pathHtml + '<span class="tree-node-lineno" style="color:#b37feb;margin-left:6px;font-size:0.88em;font-variant-numeric:tabular-nums;" title="\u884c\u53f7">L' + _escHtml(o.line) + '</span>';
}

function buildTreeHierarchy(flatNodes) {
    var roots = [];
    var stack = [];
    var nodeMap = {};
    var idMap = {};
    for (var i = 0; i < flatNodes.length; i++) {
        var node = flatNodes[i];
        node.children = [];
        node._key = String(i) + ':' + String(node.id || 'na') + ':' + String(node.path || '');
        nodeMap[node._key] = node;
        if (node.id && !idMap[String(node.id)]) {
            idMap[String(node.id)] = node._key;
        }
        while (stack.length > 0 && stack[stack.length - 1].level >= node.level) {
            stack.pop();
        }
        if (stack.length === 0) {
            node._parentKey = null;
            roots.push(node);
        } else {
            var parentNode = stack[stack.length - 1];
            node._parentKey = parentNode._key;
            parentNode.children.push(node);
        }
        stack.push(node);
    }
    return { roots: roots, nodeMap: nodeMap, idMap: idMap };
}

function markTraceTreePartialFavorites(rootNodes) {
    function walk(node) {
        var hasFavoriteDescendant = false;
        var children = Array.isArray(node.children) ? node.children : [];
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            var childHasFavorite = walk(child);
            if (childHasFavorite) {
                hasFavoriteDescendant = true;
            }
        }
        node.hasFavoriteDescendant = hasFavoriteDescendant;
        return !!node.isFavorite || hasFavoriteDescendant;
    }
    for (var r = 0; r < rootNodes.length; r++) {
        walk(rootNodes[r]);
    }
}

function _isExceptionLikeNode(node) {
    if (!node) return false;
    if (node.hasError) return true;
    var marker = String(node.marker || '').toLowerCase();
    var ret = String(node.returnValue || '').toLowerCase();
    return marker.indexOf('error') !== -1 ||
        marker.indexOf('exception') !== -1 ||
        marker.indexOf('failed') !== -1 ||
        ret.indexOf('traceback') !== -1 ||
        ret.indexOf('exception') !== -1;
}

function _parseTimeToMs(timeText) {
    var t = String(timeText || '').trim().toLowerCase();
    if (!t) return 0;
    var sec = t.match(/^([\d.]+)\s*s$/);
    if (sec) return parseFloat(sec[1]) * 1000.0;
    var ms = t.match(/^([\d.]+)\s*ms$/);
    if (ms) return parseFloat(ms[1]);
    var us = t.match(/^~?([\d.]+)\s*μs$/);
    if (us) return parseFloat(us[1]) / 1000.0;
    return 0;
}

function renderExceptionPriorityView(nodes) {
    var exceptionNodes = [];
    for (var i = 0; i < nodes.length; i++) {
        if (_isExceptionLikeNode(nodes[i])) {
            exceptionNodes.push(nodes[i]);
        }
    }
    if (exceptionNodes.length === 0) {
        return '<div class="trace-exception-priority" style="margin:0 0 10px 0;padding:8px 10px;border:1px solid #3c3c3c;border-left:4px solid #52c41a;border-radius:6px;background:#1f2a1f;color:#98c379;">✅ 异常优先视图：未检测到异常调用</div>';
    }

    exceptionNodes.sort(function(a, b) {
        return _parseTimeToMs(b.time) - _parseTimeToMs(a.time);
    });
    var topN = exceptionNodes.slice(0, 20);
    var rows = '';
    for (var j = 0; j < topN.length; j++) {
        var n = topN[j];
        rows += ''
            + '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:4px 0;">'
            + '<button class="exception-jump-btn" data-id="' + _escHtml(n.id) + '" style="padding:2px 8px;border:1px solid #ff7875;background:transparent;color:#ff7875;border-radius:4px;cursor:pointer;">#' + _escHtml(n.id) + '</button>'
            + '<span style="color:#ff9c6e;font-weight:600;">' + _escHtml(n.func) + '</span>'
            + '<span style="color:#888;">[' + _escHtml(n.time || '~0μs') + ']</span>'
            + '<span style="color:#aaa;">' + _traceTreeFileLocationHtml(n.file || '') + '</span>'
            + '</div>';
    }
    var tail = exceptionNodes.length > topN.length
        ? '<div style="color:#999;margin-top:4px;">仅展示前 ' + topN.length + ' 条</div>'
        : '';
    return ''
        + '<div class="trace-exception-priority" style="margin:0 0 10px 0;padding:10px 12px;border:1px solid #3c3c3c;border-left:4px solid #ff4d4f;border-radius:6px;background:#2a1f1f;">'
        + '<div style="margin-bottom:6px;color:#ff7875;font-weight:700;">⚠️ 异常优先视图（' + exceptionNodes.length + '）</div>'
        + rows
        + tail
        + '</div>';
}

// 把耗时字符串（如 "8.85s"、"27.30ms"、"450μs"）解析为毫秒数值，解析失败返回 -1
function _parseTimeToMs(timeStr) {
    if (!timeStr) return -1;
    var s = String(timeStr).trim().replace(/^~/, '');
    var m;
    if ((m = s.match(/^([\d.]+)\s*s$/i)))   return parseFloat(m[1]) * 1000;
    if ((m = s.match(/^([\d.]+)\s*ms$/i)))  return parseFloat(m[1]);
    if ((m = s.match(/^([\d.]+)\s*[uμ]s$/i))) return parseFloat(m[1]) / 1000;
    return -1;
}

function _formatDurationBarTime(ms) {
    if (!isFinite(ms) || ms < 0) return '0ms';
    if (ms >= 1000) {
        var seconds = ms / 1000;
        if (seconds >= 10) return Math.round(seconds) + 's';
        return seconds.toFixed(2).replace(/\.?0+$/, '') + 's';
    }
    if (ms >= 1) {
        return ms.toFixed(ms >= 10 ? 0 : 2).replace(/\.?0+$/, '') + 'ms';
    }
    return (ms * 1000).toFixed(2).replace(/\.?0+$/, '') + 'μs';
}

function _paintDurationBar(bar, valueMs, totalMs) {
    if (!bar || totalMs <= 0 || valueMs < 0) return;
    var ratio = Math.max(0, Math.min(1, valueMs / totalMs));
    var percent = Math.round(ratio * 100);
    var hue = Math.round((1 - ratio) * 120); // 120=绿, 0=红
    var color = 'hsl(' + hue + ',78%,48%)';
    var label = percent + '% · ' + _formatDurationBarTime(valueMs) + '/' + _formatDurationBarTime(totalMs);
    var fillPercent = Math.max(4, Math.round(ratio * 100));
    var isTraceCall = !!(bar.closest && bar.closest('.lprint-trace-call'));
    var marginLeft = isTraceCall ? '10px' : '8px';
    var marginRight = isTraceCall ? '4px' : '0';
    bar.style.cssText = [
        'display:inline-flex',
        'align-items:center',
        'justify-content:center',
        'box-sizing:border-box',
        'min-width:116px',
        'max-width:156px',
        'height:16px',
        'padding:0 7px',
        'margin-left:' + marginLeft,
        'margin-right:' + marginRight,
        'flex-shrink:0',
        'align-self:center',
        'vertical-align:middle',
        'border:1px solid rgba(255,255,255,0.14)',
        'border-radius:999px',
        'background:linear-gradient(90deg,' + color + ' 0%,' + color + ' ' + fillPercent + '%,rgba(120,120,120,0.16) ' + fillPercent + '%,rgba(120,120,120,0.16) 100%)',
        'box-shadow:inset 0 1px 0 rgba(255,255,255,0.12),0 1px 2px rgba(0,0,0,0.25)',
        'color:#f6f6f6',
        'font-size:10px',
        'font-weight:600',
        'line-height:16px',
        'font-family:Consolas,Monaco,monospace',
        'letter-spacing:0.01em',
        'text-shadow:0 1px 1px rgba(0,0,0,0.85)',
        'white-space:nowrap',
        'overflow:hidden',
        'text-overflow:ellipsis'
    ].join(';');
    bar.textContent = label;
    bar.title = label;
}

function _extractTraceCallDurationMs(callEl) {
    if (!callEl) return -1;
    var durationEl = callEl.querySelector ? callEl.querySelector('.lprint-trace-code-duration') : null;
    var text = '';
    if (durationEl) {
        text = (durationEl.getAttribute('title') || '') + ' ' + (durationEl.textContent || '');
    } else {
        text = callEl.textContent || '';
    }
    var match = text.match(/(?:耗时[:：]\s*)?([~\d.]+\s*(?:ms|s|μs|us))/i);
    if (!match) return -1;
    return _parseTimeToMs(match[1]);
}

// 树/正文渲染完成后，扫描所有 [data-duration-ms] 节点，按比例绘制耗时条
function applyDurationBars(containerEl) {
    if (!containerEl || !containerEl.querySelectorAll) return;
    var contents = containerEl.querySelectorAll('.tree-node-content[data-duration-ms], .lprint-trace-call[data-duration-ms]');
    if (!contents.length) return;
    var maxMs = 0;
    contents.forEach(function(el) {
        var v = parseFloat(el.getAttribute('data-duration-ms'));
        if (v > maxMs) maxMs = v;
    });
    if (maxMs <= 0) return;
    contents.forEach(function(el) {
        var v = parseFloat(el.getAttribute('data-duration-ms'));
        var bar = el.querySelector('.tree-duration-bar');
        if (bar) {
            _paintDurationBar(bar, v, maxMs);
        }
    });
}

function renderTreeNode(node) {
    var hasChildren = Array.isArray(node.children) && node.children.length > 0;
    var toggleBtn = hasChildren ? '<span class="tree-toggle collapsed">▼</span>' : '<span style="margin-right:24px;"></span>';
    // 解析耗时为毫秒数值，写入 data-duration-ms 供后续竖条渲染使用
    var durationMs = _parseTimeToMs(node.time);
    var durationAttr = durationMs >= 0 ? ' data-duration-ms="' + durationMs + '"' : '';
    var jumpButton = '<button type="button" class="tree-jump-to-code-btn" data-id="' + _escHtml(node.id) + '" title="跳转到对应代码块">↗</button>';
    var favoriteButton = _traceTreeFavoriteButtonHtml(node.id, !!node.isFavorite, 'tree-favorite-btn', !!node.hasFavoriteDescendant);
    var html = '<div class="tree-node" data-node-key="' + _escHtml(node._key) + '" style="margin-left:' + (node.level * 6) + 'px;position:relative;">';
    if (node.isFolded) {
        html += '<div class="tree-node-content" data-id="' + _escHtml(node.id) + '" data-func="' + _escHtml(node.func) + '" data-file="' + _escHtml(node.file) + '"' + durationAttr + ' title="#' + _escHtml(node.id) + '" style="padding:2px 6px;cursor:default;border-radius:4px;display:flex;align-items:center;flex-wrap:wrap;">' +
            '<span style="margin-right:10px;"></span>' +
            '<span style="color:#999;">📦</span>&nbsp;' +
            jumpButton +
            favoriteButton +
            '<span style="color:#1890ff;font-weight:600;font-size:1.05em;">' + _escHtml(node.func) + '</span>' +
            '<span style="color:#ff6b6b;margin-left:6px;font-size:0.95em;font-weight:500;">×' + _escHtml(node.count) + '次</span>' +
            '<span style="color:#888;margin-left:6px;font-size:0.9em;">合计 ' + _escHtml(node.totalTime) + '</span>' +
            '<span style="color:#888;margin-left:6px;font-size:0.9em;">平均 ' + _escHtml(node.avgTime) + '</span>' +
            (node.marker ? '<span style="margin-left:4px;font-size:1.1em;">' + _escHtml(node.marker) + '</span>' : '') +
            '<span style="color:#aaa;margin-left:6px;font-size:0.95em;">' + _traceTreeFileLocationHtml(node.file || '') + '</span>' +
            '<span class="tree-duration-bar" style="margin-left:auto;flex-shrink:0;"></span>' +
            '</div>';
    } else {
        var retValueHTML = '';
        if (node.returnValue) {
            var rv = String(node.returnValue);
            var short = rv.length > 10 ? rv.substring(0, 10) : rv;
            retValueHTML = '<span style="color:#999;margin-left:6px;font-size:0.92em;display:inline-flex;align-items:center;gap:4px;">' +
                '→ <span>' + _escHtml(short) + (rv.length > 10 ? '…' : '') + '</span>' +
                '<button class="ret-val-toggle" title="展开完整值">展开</button>' +
                '</span>';
        }
        var retDataAttr = node.returnValue ? ' data-return-value="' + _escHtml(node.returnValue).replace(/'/g, '&#39;') + '"' : '';
        var funcDisplay = extractFunctionSignature(node.func, node.id);
        html += '<div class="tree-node-content" data-id="' + _escHtml(node.id) + '" data-depth="' + _escHtml(node.depth) + '" data-path="' + _escHtml(node.path) + '" data-func="' + _escHtml(node.func) + '" data-file="' + _escHtml(node.file) + '"' + retDataAttr + durationAttr + ' title="#' + _escHtml(node.id) + '" style="padding:2px 6px;cursor:default;border-radius:4px;display:flex;align-items:center;flex-wrap:wrap;">' +
            toggleBtn +
            '<span style="color:#999;">📄</span>&nbsp;' +
            jumpButton +
            favoriteButton +
            '<span class="tree-func-signature">' + _escHtml(funcDisplay) + '</span>' +
            '<span style="color:#888;margin-left:6px;font-size:0.85em;">[深度' + _escHtml(node.depth) + ' 路径' + _escHtml(node.path) + ' #' + _escHtml(node.id) + ']</span>' +
            '<span style="color:#52c41a;margin-left:6px;font-size:0.95em;font-weight:500;">[' + _escHtml(node.time) + ']</span>' +
            (node.marker ? '<span style="margin-left:4px;font-size:1.1em;">' + _escHtml(node.marker) + '</span>' : '') +
            retValueHTML +
            '<span style="color:#aaa;margin-left:6px;font-size:0.95em;">' + _traceTreeFileLocationHtml(node.file || '') + '</span>' +
            '<span class="tree-duration-bar" style="margin-left:auto;flex-shrink:0;"></span>' +
            '</div>';
    }
    if (hasChildren) {
        html += '<div class="tree-children collapsed" data-rendered="0"></div>';
    }
    html += '</div>';
    return html;
}

function renderTreeNodes(rootNodes) {
    var html = '';
    for (var i = 0; i < rootNodes.length; i++) {
        html += renderTreeNode(rootNodes[i]);
    }
    return html;
}

function filterTree(query) {
    if (!query) {
        document.querySelectorAll('.tree-node').forEach(function(node) {
            node.style.display = '';
        });
        document.querySelectorAll('.tree-children').forEach(function(c) {
            c.classList.remove('collapsed');
        });
        document.querySelectorAll('.tree-toggle').forEach(function(t) {
            t.classList.remove('collapsed');
        });
        return;
    }
    
    document.querySelectorAll('.tree-node').forEach(function(node) {
        var content = node.querySelector('.tree-node-content');
        if (!content) return;
        
        var text = content.textContent.toLowerCase();
        var matches = text.indexOf(query) !== -1;
        
        if (matches) {
            node.style.display = '';
            // 展开到根路径
            var parent = node.parentElement;
            while (parent && parent.classList) {
                if (parent.classList.contains('tree-children')) {
                    parent.classList.remove('collapsed');
                }
                if (parent.classList.contains('tree-node')) {
                    parent.style.display = '';
                    var toggle = parent.querySelector(':scope > .tree-node-content > .tree-toggle');
                    if (toggle) toggle.classList.remove('collapsed');
                }
                parent = parent.parentElement;
            }
        } else {
            node.style.display = 'none';
        }
    });
}

function saveTreeExpandState(container, storageKey) {
    /**保存调用树展开状态到localStorage*/
    try {
        var expandedNodes = [];
        container.querySelectorAll('.tree-node-content').forEach(function(nodeContent, index) {
            var nodeId = nodeContent.getAttribute('data-id');
            var treeNode = nodeContent.parentElement;
            var children = treeNode.querySelector('.tree-children');
            if (children && !children.classList.contains('collapsed')) {
                expandedNodes.push(nodeId || 'idx-' + index);
            }
        });
        localStorage.setItem(storageKey, JSON.stringify(expandedNodes));
    } catch (e) {
        console.warn('保存树状态失败:', e);
    }
}

function restoreTreeExpandState(container, storageKey) {
    /**从localStorage恢复调用树展开状态*/
    try {
        var savedState = localStorage.getItem(storageKey);
        if (!savedState) return;
        
        var expandedNodes = JSON.parse(savedState);
        var expandedSet = {};
        expandedNodes.forEach(function(id) {
            expandedSet[id] = true;
        });
        
        container.querySelectorAll('.tree-node-content').forEach(function(nodeContent, index) {
            var nodeId = nodeContent.getAttribute('data-id') || 'idx-' + index;
            var treeNode = nodeContent.parentElement;
            var children = treeNode.querySelector('.tree-children');
            var toggle = nodeContent.querySelector('.tree-toggle');
            
            if (children && toggle) {
                if (expandedSet[nodeId]) {
                    // 展开
                    children.classList.remove('collapsed');
                    toggle.classList.remove('collapsed');
                } else {
                    // 折叠
                    children.classList.add('collapsed');
                    toggle.classList.add('collapsed');
                }
            }
        });
    } catch (e) {
        console.warn('恢复树状态失败:', e);
    }
}

// 悬停提示框功能
var tooltipElement = null;
var tooltipTimeout = null;

function showReturnValueTooltip(element, event) {
    var callId = element.getAttribute('data-id');
    var returnValue = null;
    
    // 使用 trace_linear 元数据 + DOM 获取完整返回值
    if (window.traceJsonData) {
        if (window.traceJsonData.format === 'trace_linear') {
            var htmlId = 'call-' + callId;
            
            // 查找对应的调用元素
            var callElement = document.getElementById(htmlId);
            if (callElement) {
                // 方法1: 查找返回值展开容器（最准确）
                // 首先检查调用元素本身是否包含返回值
                var callText = callElement.textContent || callElement.innerText;
                
                // 查找 ⬅️ 返回值 (第XX行) value 格式
                var returnMatch = callText.match(/⬅️\s*返回值\s*\([^)]+\)\s*(.+?)(?:\s*[═\n]|$)/);
                if (returnMatch) {
                    returnValue = returnMatch[1].trim();
                }
                
                // 查找 ⬅️ (第XX行) value 格式
                if (!returnValue) {
                    var lineMatch = callText.match(/⬅️\s*\([^)]+\)\s*(.+?)(?:\s*[═\n]|$)/);
                    if (lineMatch) {
                        returnValue = lineMatch[1].trim();
                    }
                }
                
                // 如果调用元素本身没有返回值，查找下一个元素
                if (!returnValue) {
                    var nextElement = callElement.nextElementSibling;
                    while (nextElement && !returnValue) {
                        // 查找所有返回值展开容器
                        var returnContainers = nextElement.querySelectorAll ? 
                            nextElement.querySelectorAll('.lprint-trace-expand-container') : [];
                        
                        for (var i = 0; i < returnContainers.length; i++) {
                            var container = returnContainers[i];
                            var header = container.querySelector('.lprint-trace-expand-header');
                            if (header && header.textContent.includes('返回值')) {
                                // 从header中获取返回值
                                var headerText = header.textContent;
                                var returnMatch = headerText.match(/⬅️\s*返回值\s*\([^)]+\)\s*(.+)$/);
                                if (returnMatch) {
                                    var shortReturn = returnMatch[1].trim();
                                    
                                    // 检查是否有完整返回值（多行部分）
                                    var pre = container.querySelector('.lprint-trace-return-pre');
                                    if (pre) {
                                        var fullReturnText = pre.textContent.trim();
                                        // 移除 <<<END_RETURN>>> 标记
                                        fullReturnText = fullReturnText.replace(/<<<END_RETURN>>>$/, '').trim();
                                        
                                        // 如果短返回值以省略号结尾，使用完整返回值
                                        if (shortReturn.includes('...')) {
                                            returnValue = fullReturnText;
                                        } else {
                                            returnValue = shortReturn;
                                        }
                                    } else {
                                        returnValue = shortReturn;
                                    }
                                    break;
                                }
                            }
                        }
                        
                        // 如果没找到展开容器，查找代码块
                        if (!returnValue) {
                            var codeBlocks = nextElement.querySelectorAll ? 
                                nextElement.querySelectorAll('.lprint-trace-code-block') : [];
                            
                            for (var j = 0; j < codeBlocks.length; j++) {
                                var codeBlock = codeBlocks[j];
                                var codeContent = codeBlock.textContent || codeBlock.innerText;
                                
                                // 查找 ⬅️ 返回值 行
                                var returnMatch = codeContent.match(/⬅️\s*返回值\s*\([^)]+\)\s*(.+?)(?:\s*[═\n]|$)/);
                                if (returnMatch) {
                                    returnValue = returnMatch[1].trim();
                                    break;
                                }
                                
                                // 查找 ⬅️ (第XX行) 格式
                                var lineMatch = codeContent.match(/⬅️\s*\([^)]+\)\s*(.+?)(?:\s*[═\n]|$)/);
                                if (lineMatch) {
                                    returnValue = lineMatch[1].trim();
                                    break;
                                }
                            }
                        }
                        
                        nextElement = nextElement.nextElementSibling;
                    }
                }
            }
        }
    }
    
    // 若 DOM 解析未得到返回值，回退 data 属性
    if (!returnValue) {
        returnValue = element.getAttribute('data-return-value');
        if (!returnValue) {
            return;
        }
    }
    
    // 延迟显示，避免快速移动时闪烁
    clearTimeout(tooltipTimeout);
    tooltipTimeout = setTimeout(function() {
        // 移除旧的提示框
        hideReturnValueTooltip();
        
        // 创建新的提示框
        tooltipElement = document.createElement('div');
        tooltipElement.className = 'return-value-tooltip';
        tooltipElement.style.cssText =
            'position: fixed;' +
            'background: #2d2d2d;' +
            'border: 1px solid #555;' +
            'border-radius: 6px;' +
            'padding: 10px 12px;' +
            'font-family: monospace;' +
            'font-size: 0.9em;' +
            'color: #d4d4d4;' +
            'max-width: 600px;' +
            'max-height: 400px;' +
            'overflow-y: auto;' +
            'z-index: 10000;' +
            'box-shadow: 0 4px 12px rgba(0,0,0,0.3);';
        
        // 转义HTML特殊字符
        var escapedValue = returnValue
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/&#39;/g, "'");
        
        tooltipElement.innerHTML =
            '<div style="color:#888;font-size:0.85em;margin-bottom:6px;border-bottom:1px solid #444;padding-bottom:4px;">⬅️ 完整返回值:</div>' +
            '<div style="color:#98c379;white-space:pre-wrap;word-break:break-all;">' +
            escapedValue +
            '</div>';
        
        document.body.appendChild(tooltipElement);
        
        // 定位提示框（在鼠标右侧）
        var x = event.clientX + 15;
        var y = event.clientY + 10;
        
        // 确保不超出视口
        var rect = tooltipElement.getBoundingClientRect();
        if (x + rect.width > window.innerWidth) {
            x = event.clientX - rect.width - 15;
        }
        if (y + rect.height > window.innerHeight) {
            y = window.innerHeight - rect.height - 10;
        }
        
        tooltipElement.style.left = x + 'px';
        tooltipElement.style.top = y + 'px';
    }, 300); // 300ms 延迟
}

function hideReturnValueTooltip() {
    clearTimeout(tooltipTimeout);
    if (tooltipElement && tooltipElement.parentNode) {
        tooltipElement.parentNode.removeChild(tooltipElement);
        tooltipElement = null;
    }
}

function addTooltipListeners(scopeRoot) {
    var root = scopeRoot || document;
    // 为所有有返回值的节点添加悬浮提示
    root.querySelectorAll('.tree-node-content[data-return-value]').forEach(function(node) {
        node.addEventListener('mouseenter', function(e) {
            showReturnValueTooltip(this, e);
        });
        
        node.addEventListener('mouseleave', function() {
            hideReturnValueTooltip();
        });
    });
}

// 将函数暴露到全局作用域，确保兼容性
window.showReturnValueTooltip = showReturnValueTooltip;
window.hideReturnValueTooltip = hideReturnValueTooltip;
window.addTooltipListeners = addTooltipListeners;

treeLog("树视图JavaScript加载完成");
