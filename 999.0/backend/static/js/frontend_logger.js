// 全局前端日志开关（默认关闭）
(function () {
    'use strict';

    if (window.__frontendLoggerInitialized__) {
        return;
    }
    window.__frontendLoggerInitialized__ = true;

    var STORAGE_KEY = 'l_log_frontend_debug';
    var originalConsole = {
        log: console.log.bind(console),
        info: console.info.bind(console),
        debug: (console.debug || console.log).bind(console),
    };

    function readEnabled() {
        try {
            var value = window.localStorage.getItem(STORAGE_KEY);
            return value === '1' || value === 'true';
        } catch (e) {
            return false;
        }
    }

    function writeEnabled(enabled) {
        try {
            window.localStorage.setItem(STORAGE_KEY, enabled ? '1' : '0');
        } catch (e) {
            // ignore storage errors
        }
    }

    function muteLogs() {
        console.log = function () {};
        console.info = function () {};
        console.debug = function () {};
    }

    function restoreLogs() {
        console.log = originalConsole.log;
        console.info = originalConsole.info;
        console.debug = originalConsole.debug;
    }

    function applyLogMode(enabled) {
        if (enabled) {
            restoreLogs();
        } else {
            muteLogs();
        }
    }

    function setFrontendDebug(enabled) {
        var isEnabled = !!enabled;
        writeEnabled(isEnabled);
        applyLogMode(isEnabled);
        if (window.toast) {
            window.toast.info(isEnabled ? '前端调试日志已开启' : '前端调试日志已关闭', 2000);
        }
        return isEnabled;
    }

    function isFrontendDebugEnabled() {
        return readEnabled();
    }

    // 对外暴露统一日志函数（建议业务代码逐步替换 console.log）
    window.frontendLog = function () {
        if (!isFrontendDebugEnabled()) {
            return;
        }
        originalConsole.log.apply(console, arguments);
    };
    window.frontendInfo = function () {
        if (!isFrontendDebugEnabled()) {
            return;
        }
        originalConsole.info.apply(console, arguments);
    };
    window.frontendDebug = function () {
        if (!isFrontendDebugEnabled()) {
            return;
        }
        originalConsole.debug.apply(console, arguments);
    };

    window.setFrontendDebug = setFrontendDebug;
    window.isFrontendDebugEnabled = isFrontendDebugEnabled;

    // 初次加载即应用
    applyLogMode(readEnabled());
})();

