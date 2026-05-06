// 函数调用标记高亮和跳转
function processCallLinks(container) {
    console.log('[调用链接] processCallLinks 开始执行', container ? '指定容器' : '全文档');
    
    // 如果没有指定容器，使用整个文档
    var root = container || document;
    var codeBlocks = root.querySelectorAll("code.language-python");
    console.log('[调用链接] 找到代码块数量:', codeBlocks.length);
    
    codeBlocks.forEach(function(el, idx) {
        var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
        var nodes = [];
        while (w.nextNode()) nodes.push(w.currentNode);

        
        nodes.forEach(function(n) {
            var text = n.nodeValue;
            if (!text) return;
            
            // 仅由 "# → 调用" / "# -> 调用" 文案触发；
            // 支持 self.xxx(...)、obj.xxx(...) 以及带参数调用。
            var callPattern = /#\s*(?:→|->)\s*调用\s+([A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*)\s*\(([^)]*)\)/g;
            var match;
            var replacements = [];
            
            // 查找所有匹配项
            while ((match = callPattern.exec(text)) !== null) {
                console.log('[调用链接] 找到匹配:', match[0], '函数名:', match[1]);
                replacements.push({
                    index: match.index,
                    length: match[0].length,
                    fullText: match[0],
                    funcName: match[1]
                });
            }
            
            if (text.indexOf('→ 调用') !== -1 || text.indexOf('-> 调用') !== -1) {
                console.log('[调用链接] 发现包含"调用"的文本但未匹配:', text.substring(0, 100));
            }
            
            // 如果找到匹配，进行替换
            if (replacements.length > 0) {
                var frag = document.createDocumentFragment();
                var lastIndex = 0;
                
                replacements.forEach(function(repl) {
                    // 添加匹配前的文本
                    if (repl.index > lastIndex) {
                        frag.appendChild(document.createTextNode(text.substring(lastIndex, repl.index)));
                    }
                    
                    // 创建可点击的链接
                    var s = document.createElement("span");
                    s.textContent = repl.fullText;
                    s.setAttribute('data-func', repl.funcName);
                    s.style.cssText = "color:#e9a71c;font-weight:bold;cursor:pointer;text-decoration:underline;";
                    s.title = "点击跳转到 " + repl.funcName + "() 的调用位置";
                    s.onclick = function(e) {
                        e.stopPropagation();
                        var funcMatch = this.getAttribute('data-func') || '';
                        var shortFuncMatch = funcMatch.indexOf('.') >= 0
                            ? funcMatch.split('.').pop()
                            : funcMatch;
                        
                        // 向上找到最外层的 <div class="lprint-trace-func">
                        var cur = this;
                        while (cur && cur.nodeType === 1 && !cur.classList.contains('lprint-trace-func')) {
                            cur = cur.parentNode;
                        }
                        if (!cur || cur.nodeType !== 1) return;
                        
                        // 在当前 .lprint-trace-func 之后查找匹配函数名的 .lprint-trace-call
                        var target = null;
                        var sibling = cur.nextElementSibling;
                        while (sibling) {
                            if (sibling.classList && sibling.classList.contains("lprint-trace-call")) {
                                if (!funcMatch) {
                                    target = sibling;
                                    break;
                                }
                                var callContent = sibling.textContent || '';
                                if (
                                    callContent.indexOf(funcMatch) !== -1 ||
                                    (shortFuncMatch && callContent.indexOf(shortFuncMatch) !== -1)
                                ) {
                                    target = sibling;
                                    break;
                                }
                            }
                            sibling = sibling.nextElementSibling;
                        }
                        
                        if (target) {
                            target.scrollIntoView({behavior: "smooth", block: "start"});
                            target.classList.add("highlight-rainbow");
                            setTimeout(function() {
                                target.classList.remove("highlight-rainbow");
                            }, 3000);
                        }
                    };
                    frag.appendChild(s);
                    
                    lastIndex = repl.index + repl.length;
                });
                
                // 添加最后剩余的文本
                if (lastIndex < text.length) {
                    frag.appendChild(document.createTextNode(text.substring(lastIndex)));
                }
                
                n.parentNode.replaceChild(frag, n);
            }
        });
    });
}

// 暴露到全局，由外部控制执行时机
window.processCallLinks = processCallLinks;
console.log('[调用链接] processCallLinks已暴露到window对象');
