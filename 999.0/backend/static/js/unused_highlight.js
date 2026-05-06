// [unused] 文本高亮
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("code.language-python").forEach(function(el) {
        var w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
        var nodes = [];
        while (w.nextNode()) nodes.push(w.currentNode);
        nodes.forEach(function(n) {
            if (n.nodeValue.indexOf("[unused]") < 0) return;
            var parts = n.nodeValue.split("[unused]");
            var frag = document.createDocumentFragment();
            for (var i = 0; i < parts.length; i++) {
                if (i > 0) {
                    var s = document.createElement("span");
                    s.textContent = "[unused]";
                    s.style.cssText = "color:#e06c75;font-weight:bold;opacity:0.85;";
                    frag.appendChild(s);
                }
                frag.appendChild(document.createTextNode(parts[i]));
            }
            n.parentNode.replaceChild(frag, n);
        });
    });
});
