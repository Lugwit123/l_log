// 处理变量和返回值的展开/收起链接
function findExpandTarget(linkEl) {
    var targetId = linkEl && linkEl.dataset ? linkEl.dataset.target : '';
    if (!targetId) return null;

    function findById(root) {
        if (!root || !root.querySelectorAll) return null;
        var candidates = root.querySelectorAll('.lprint-trace-expand-container[id]');
        for (var i = 0; i < candidates.length; i++) {
            if (candidates[i].id === targetId) {
                return candidates[i];
            }
        }
        return null;
    }

    var tabPane = linkEl.closest ? linkEl.closest('.tab-pane') : null;
    return findById(tabPane) || document.getElementById(targetId);
}

function createExpandLink(targetId, payload) {
    var span = document.createElement("span");
    span.textContent = payload;
    span.className = 'lprint-trace-expand-link';
    span.dataset.target = targetId;
    span.style.cssText = "color:#e9a71c;font-weight:bold;cursor:pointer;text-decoration:underline;";
    span.title = "点击展开";
    span.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();

        var target = findExpandTarget(this);
        if (!target) {
            return;
        }

        // 切换显示/隐藏
        if (target.style.display === 'none' || !target.style.display) {
            target.style.display = 'block';
        } else {
            target.style.display = 'none';
        }
    };
    return span;
}

function rememberExpandMarker(codeBlock, targetId, payload) {
    if (!codeBlock) return;
    var markers = [];
    try {
        markers = JSON.parse(codeBlock.getAttribute('data-expand-markers') || '[]') || [];
    } catch (e) {
        markers = [];
    }
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].targetId === targetId && markers[i].payload === payload) {
            return;
        }
    }
    markers.push({ targetId: targetId, payload: payload });
    try {
        codeBlock.setAttribute('data-expand-markers', JSON.stringify(markers));
    } catch (e2) {}
}

function replacePayloadTextWithExpandLink(rootEl, targetId, payload) {
    if (!rootEl || !payload) return 0;
    var walker = document.createTreeWalker(rootEl, NodeFilter.SHOW_TEXT, null, false);
    var textNodes = [];
    while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
    }

    for (var i = 0; i < textNodes.length; i++) {
        var textNode = textNodes[i];
        var text = textNode.nodeValue || '';
        var idx = text.indexOf(payload);
        if (idx === -1) continue;

        var frag = document.createDocumentFragment();
        if (idx > 0) {
            frag.appendChild(document.createTextNode(text.substring(0, idx)));
        }
        frag.appendChild(createExpandLink(targetId, payload));
        if (idx + payload.length < text.length) {
            frag.appendChild(document.createTextNode(text.substring(idx + payload.length)));
        }
        textNode.parentNode.replaceChild(frag, textNode);
        return 1;
    }
    return 0;
}

function restoreStoredExpandLinks(codeBlock) {
    if (!codeBlock || (codeBlock.querySelector && codeBlock.querySelector('.lprint-trace-expand-link'))) {
        return 0;
    }
    var markers = [];
    try {
        markers = JSON.parse(codeBlock.getAttribute('data-expand-markers') || '[]') || [];
    } catch (e) {
        markers = [];
    }
    var restored = 0;
    markers.forEach(function(marker) {
        if (!marker || !marker.targetId || !marker.payload) return;
        restored += replacePayloadTextWithExpandLink(codeBlock, marker.targetId, marker.payload);
    });
    return restored;
}

function replaceExpandMarkersInTextNode(textNode) {
    var text = textNode.nodeValue;
    if (!text) return 0;
    var codeBlock = textNode.parentElement && textNode.parentElement.closest
        ? textNode.parentElement.closest('code.language-python')
        : null;

    // 匹配特殊标记：[[EXPAND:id:payload]]
    var expandPattern = /\[\[EXPAND:([^:]+):([^\]]+)\]\]/g;
    var match;
    var replacements = [];

    while ((match = expandPattern.exec(text)) !== null) {
        replacements.push({
            index: match.index,
            length: match[0].length,
            targetId: match[1],
            payload: match[2]
        });
    }

    if (replacements.length === 0) return 0;

    var frag = document.createDocumentFragment();
    var lastIndex = 0;

    replacements.forEach(function(repl) {
        // 添加匹配前的文本
        if (repl.index > lastIndex) {
            frag.appendChild(document.createTextNode(text.substring(lastIndex, repl.index)));
        }

        rememberExpandMarker(codeBlock, repl.targetId, repl.payload);
        frag.appendChild(createExpandLink(repl.targetId, repl.payload));
        lastIndex = repl.index + repl.length;
    });

    // 添加剩余文本
    if (lastIndex < text.length) {
        frag.appendChild(document.createTextNode(text.substring(lastIndex)));
    }

    // 替换原文本节点
    textNode.parentNode.replaceChild(frag, textNode);
    return replacements.length;
}

function rebuildCodeBlockExpandLinks(codeBlock) {
    var text = codeBlock.textContent || '';
    if (text.indexOf('[[EXPAND:') === -1) return 0;
    codeBlock.textContent = text;

    var walker = document.createTreeWalker(codeBlock, NodeFilter.SHOW_TEXT, null, false);
    var textNodes = [];
    while (walker.nextNode()) {
        textNodes.push(walker.currentNode);
    }

    var count = 0;
    textNodes.forEach(function(textNode) {
        count += replaceExpandMarkersInTextNode(textNode);
    });
    return count;
}

function processExpandLinks(container) {
    var root = container || document;
    var codeBlocks = root.querySelectorAll("code.language-python");

    codeBlocks.forEach(function(codeBlock) {
        if (codeBlock.querySelector && codeBlock.querySelector('.lprint-trace-expand-link')) {
            return;
        }

        // 使用 TreeWalker 遍历文本节点
        var walker = document.createTreeWalker(codeBlock, NodeFilter.SHOW_TEXT, null, false);
        var textNodes = [];
        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        var blockLinkCount = 0;

        textNodes.forEach(function(textNode) {
            blockLinkCount += replaceExpandMarkersInTextNode(textNode);
        });

        // Prism 等高亮器可能把 [[EXPAND:...]] 拆成多个 text node。
        // 常规扫描未命中时，按 code 的完整 textContent 兜底重建该行。
        if (blockLinkCount === 0 && (codeBlock.textContent || '').indexOf('[[EXPAND:') !== -1) {
            rebuildCodeBlockExpandLinks(codeBlock);
        } else if (blockLinkCount === 0) {
            restoreStoredExpandLinks(codeBlock);
        }
    });
}

// 暴露到全局
if (typeof window !== 'undefined') {
    window.processExpandLinks = processExpandLinks;
}
