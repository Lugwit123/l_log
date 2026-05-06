// 悬浮滚动按钮功能
(function() {
    'use strict';
    
    // 等待DOM加载完成
    document.addEventListener('DOMContentLoaded', function() {
        const scrollToTopBtn = document.getElementById('scroll-to-top');
        const scrollToBottomBtn = document.getElementById('scroll-to-bottom');
        
        if (!scrollToTopBtn || !scrollToBottomBtn) {
            console.warn('滚动按钮元素未找到');
            return;
        }
        
        // 获取当前活动的日志内容容器
        function getActiveLogContent() {
            // tab-pane本身就是滚动容器
            return document.querySelector('.tab-pane.active');
        }
        
        // 检查滚动位置并显示/隐藏按钮
        function updateButtonsVisibility() {
            const logContent = getActiveLogContent();
            if (!logContent) {
                scrollToTopBtn.classList.remove('show');
                scrollToBottomBtn.classList.remove('show');
                return;
            }
            
            const scrollTop = logContent.scrollTop;
            const scrollHeight = logContent.scrollHeight;
            const clientHeight = logContent.clientHeight;
            
            // 滚动超过100px显示"回到顶部"按钮
            if (scrollTop > 100) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
            
            // 距离底部超过100px显示"回到底部"按钮
            if (scrollTop + clientHeight < scrollHeight - 100) {
                scrollToBottomBtn.classList.add('show');
            } else {
                scrollToBottomBtn.classList.remove('show');
            }
        }
        
        // 平滑滚动到顶部
        scrollToTopBtn.addEventListener('click', function() {
            const logContent = getActiveLogContent();
            if (logContent) {
                logContent.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
        
        // 平滑滚动到底部
        scrollToBottomBtn.addEventListener('click', function() {
            const logContent = getActiveLogContent();
            if (logContent) {
                logContent.scrollTo({
                    top: logContent.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
        
        // 监听滚动事件
        function attachScrollListener() {
            const logContent = getActiveLogContent();
            if (logContent) {
                // 移除旧的监听器（如果存在）
                logContent.removeEventListener('scroll', updateButtonsVisibility);
                // 添加新的监听器
                logContent.addEventListener('scroll', updateButtonsVisibility);
                // 立即更新一次
                updateButtonsVisibility();
            }
        }
        
        // 初始化时附加监听器
        attachScrollListener();
        
        // 监听标签页切换事件
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const target = mutation.target;
                    if (target.classList.contains('tab-pane') && target.classList.contains('active')) {
                        // 标签页切换了，重新附加监听器
                        setTimeout(attachScrollListener, 100);
                    }
                }
            });
        });
        
        // 观察所有tab-pane的class变化
        const tabsContent = document.querySelector('.tabs-content');
        if (tabsContent) {
            observer.observe(tabsContent, {
                attributes: true,
                attributeFilter: ['class'],
                subtree: true
            });
        }
        
        // 定期检查（备用方案）
        setInterval(function() {
            const logContent = getActiveLogContent();
            if (logContent && !logContent.hasScrollListener) {
                attachScrollListener();
            }
        }, 2000);
    });
})();
