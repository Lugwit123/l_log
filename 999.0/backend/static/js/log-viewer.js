class LogViewer {
    constructor() {
        this.initSearch();
        this.initFilter();
    }

    static escapeForRegex(s) {
        return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    static countTextMatches(haystack, needle, caseSensitive) {
        if (!needle) return 0;
        const re = new RegExp(LogViewer.escapeForRegex(needle), caseSensitive ? 'g' : 'gi');
        const m = haystack.match(re);
        return m ? m.length : 0;
    }

    static getActiveTabPane() {
        return document.querySelector('.tab-pane.active');
    }

    initSearch() {
        const input = document.getElementById('search-input');
        const nextBtn = document.getElementById('search-next');
        const prevBtn = document.getElementById('search-prev');
        const caseCheckbox = document.getElementById('filter-case');
        const regexCheckbox = document.getElementById('filter-regex');
        const hintEl = document.getElementById('search-match-hint');

        const scrollSelectionIntoActivePane = () => {
            const pane = LogViewer.getActiveTabPane();
            if (!pane) return;
            const sel = window.getSelection();
            if (!sel || !sel.rangeCount) return;
            let rect;
            try {
                rect = sel.getRangeAt(0).getBoundingClientRect();
            } catch (e) {
                return;
            }
            if (!rect || (rect.width === 0 && rect.height === 0)) {
                const an = sel.anchorNode;
                if (an && an.nodeType === Node.TEXT_NODE && an.parentElement) {
                    rect = an.parentElement.getBoundingClientRect();
                } else if (an && an.nodeType === Node.ELEMENT_NODE) {
                    rect = an.getBoundingClientRect();
                } else {
                    return;
                }
            }
            const pr = pane.getBoundingClientRect();
            const pad = 72;
            if (rect.top < pr.top + pad) {
                pane.scrollTop += rect.top - pr.top - pad;
            } else if (rect.bottom > pr.bottom - pad) {
                pane.scrollTop += rect.bottom - pr.bottom + pad;
            }
        };

        const updateMatchCountUI = () => {
            if (!hintEl) return;
            const keyword = (input && input.value ? input.value : '').trim();
            const regexChecked = !!(regexCheckbox && regexCheckbox.checked);
            if (regexChecked) {
                hintEl.textContent = '\u6b63\u5219\u6a21\u5f0f\u4e0d\u7edf\u8ba1\u5339\u914d\u6570';
                hintEl.classList.toggle('is-zero', false);
                return;
            }
            if (!keyword) {
                hintEl.textContent = '';
                hintEl.classList.toggle('is-zero', false);
                return;
            }
            const pane = LogViewer.getActiveTabPane();
            if (!pane) {
                hintEl.textContent = '';
                return;
            }
            const text = pane.innerText || '';
            const n = LogViewer.countTextMatches(text, keyword, !!(caseCheckbox && caseCheckbox.checked));
            hintEl.textContent = n === 0 ? '\u65e0\u5339\u914d' : `\u5171 ${n} \u5904`;
            hintEl.classList.toggle('is-zero', n === 0);
        };

        let debounceTimer = null;
        const scheduleUpdateCount = () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(updateMatchCountUI, 200);
        };

        const findInPage = (backward = false) => {
            const keyword = (input && input.value ? input.value : '').trim();
            if (!keyword) {
                if (window.toast) window.toast.warning('请输入搜索内容');
                return false;
            }

            if (regexCheckbox && regexCheckbox.checked) {
                if (window.toast) window.toast.warning('当前搜索暂不支持正则，请取消“正则表达式”后重试');
                return false;
            }

            const caseSensitive = !!(caseCheckbox && caseCheckbox.checked);
            const found = window.find(keyword, caseSensitive, backward, true, false, false, false);
            if (found) {
                requestAnimationFrame(() => {
                    scrollSelectionIntoActivePane();
                });
            } else if (window.toast) {
                window.toast.info('没有更多匹配项');
            }
            return found;
        };

        if (nextBtn) {
            nextBtn.addEventListener('click', () => findInPage(false));
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', () => findInPage(true));
        }
        if (input) {
            input.addEventListener('input', scheduleUpdateCount);
            input.addEventListener('focus', updateMatchCountUI);
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    findInPage(e.shiftKey);
                }
            });
        }
        if (caseCheckbox) {
            caseCheckbox.addEventListener('change', updateMatchCountUI);
        }
        if (regexCheckbox) {
            regexCheckbox.addEventListener('change', updateMatchCountUI);
        }

        window.searchManager = {
            findNext: () => findInPage(false),
            findPrev: () => findInPage(true),
            refreshMatchCount: updateMatchCountUI,
        };

        updateMatchCountUI();
    }

    initFilter() {
        // 过滤功能（可扩展）
    }
}

const logViewer = new LogViewer();
