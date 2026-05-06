/**
 * 统一的追踪数据解析器
 * 规则来自 trace_linear 侧车 JSON（默认 rules）或后端注入的 rules 字段
 */
class TraceDataParser {
    constructor(rules) {
        this.rules = rules;
        this.patterns = {};
        this.components = {};
        this.idPatterns = {};
        this.cssClasses = {};
        
        this.init();
    }
    
    init() {
        // 初始化正则表达式模式
        if (this.rules.parsing) {
            Object.keys(this.rules.parsing).forEach(key => {
                let pattern = this.rules.parsing[key];
                // 处理PCRE语法转换为JavaScript语法
                if (pattern.startsWith('(?i)')) {
                    // 移除(?i)前缀，添加i标志
                    pattern = pattern.substring(4);
                    this.patterns[key] = new RegExp(pattern, 'i');
                } else {
                    this.patterns[key] = new RegExp(pattern);
                }
            });
        }
        
        // 初始化组件名称映射
        this.components = this.rules.components || {};
        this.idPatterns = this.rules.id_patterns || {};
        this.cssClasses = this.rules.css_classes || {};
    }
    
    /**
     * 生成元素ID
     * @param {string} type - ID类型
     * @param {object} params - 参数对象
     * @returns {string|null} 生成的ID
     */
    generateId(type, params) {
        const pattern = this.idPatterns[type];
        if (!pattern) return null;
        
        return pattern.replace(/{(\w+)}/g, (match, key) => {
            return params[key] || match;
        });
    }
    
    /**
     * 生成CSS类名
     * @param {string} prefix - 前缀
     * @param {string} element - 元素名
     * @param {string} modifier - 修饰符（可选）
     * @returns {string} 生成的CSS类名
     */
    generateCssClass(prefix, element, modifier = null) {
        const cssPrefix = this.cssClasses.prefixes?.[prefix];
        const elementName = this.cssClasses.elements?.[element];
        const modifierName = this.cssClasses.modifiers?.[modifier];
        
        if (!cssPrefix || !elementName) {
            console.warn(`[解析器] 无效的CSS类配置: prefix=${prefix}, element=${element}`);
            return '';
        }
        
        let className = `${cssPrefix}-${elementName}`;
        if (modifierName) {
            className += ` ${cssPrefix}-${elementName}--${modifierName}`;
        }
        
        return className;
    }
    
    /**
     * 查找元素
     * @param {string} type - ID类型
     * @param {object} params - 参数对象
     * @returns {Element|null} 找到的元素
     */
    findElement(type, params) {
        const id = this.generateId(type, params);
        return id ? document.getElementById(id) : null;
    }
    
    /**
     * 查找组件
     * @param {string} category - 组件分类
     * @param {string} component - 组件名
     * @returns {Element|null} 找到的组件
     */
    findComponent(category, component) {
        const className = this.components[category]?.[component];
        return className ? document.querySelector(`.${className}`) : null;
    }
    
    /**
     * 查找所有组件
     * @param {string} category - 组件分类
     * @param {string} component - 组件名
     * @returns {NodeList} 找到的组件列表
     */
    findAllComponents(category, component) {
        const className = this.components[category]?.[component];
        return className ? document.querySelectorAll(`.${className}`) : [];
    }
    
    /**
     * 提取调用信息
     * @param {Element} callElement - 调用元素
     * @returns {object} 调用信息
     */
    extractCallInfo(callElement) {
        const callText = callElement.textContent || callElement.innerText;
        const info = {};
        
        // 使用统一的正则表达式提取信息
        if (this.patterns.call) {
            const callMatch = callText.match(this.patterns.call);
            if (callMatch) {
                info.depth = parseInt(callMatch[1]);
                info.path = callMatch[2];
                info.id = callMatch[3];
            }
        }
        
        if (this.patterns.func) {
            const funcMatch = callText.match(this.patterns.func);
            if (funcMatch) {
                info.func = funcMatch[1];
            }
        }
        
        if (this.patterns.file) {
            const fileMatch = callText.match(this.patterns.file);
            if (fileMatch) {
                info.file = fileMatch[1];
            }
        }
        
        if (this.patterns.time) {
            const timeMatch = callText.match(this.patterns.time);
            if (timeMatch) {
                info.time = parseFloat(timeMatch[1]);
            }
        }
        
        if (this.patterns.error) {
            info.error = this.patterns.error.test(callText);
        }
        
        return info;
    }
    
    /**
     * 提取返回值
     * @param {string} content - 内容文本
     * @returns {string|null} 返回值
     */
    extractReturnValue(content) {
        if (!this.rules.features?.enable_return_expansion) {
            return null;
        }
        
        if (!this.patterns.return) {
            return null;
        }
        
        const returnMatch = content.match(this.patterns.return);
        return returnMatch ? returnMatch[1].trim() : null;
    }
    
    /**
     * 提取函数参数
     * @param {string} content - 内容文本
     * @returns {array|null} 参数列表
     */
    extractParams(content) {
        if (!this.rules.features?.enable_params_extraction) {
            return null;
        }
        
        if (!this.patterns.param) {
            return null;
        }
        
        const params = [];
        const lines = content.split('\n');
        
        for (const line of lines) {
            const paramMatch = line.match(this.patterns.param);
            if (paramMatch) {
                params.push(paramMatch[1].trim());
            }
        }
        
        return params.length > 0 ? params : null;
    }
    
    /**
     * 获取调用样式
     * @param {object} callInfo - 调用信息
     * @returns {string} 样式颜色
     */
    getCallStyle(callInfo) {
        const styling = this.rules.styling;
        
        if (!styling) {
            return '';
        }
        
        if (callInfo.error && styling.error_call_color) {
            return styling.error_call_color;
        }
        
        if (callInfo.time > this.rules.slow_threshold && styling.slow_call_color) {
            return styling.slow_call_color;
        }
        
        if (callInfo.depth > this.rules.deep_threshold && styling.deep_call_color) {
            return styling.deep_call_color;
        }
        
        return styling.normal_call_color || '';
    }
    
    /**
     * 创建返回值展开块
     * @param {string} callId - 调用ID
     * @param {string} returnValue - 返回值
     * @param {array} params - 参数列表
     * @returns {Element} 返回值块元素
     */
    createReturnBlock(callId, returnValue, params = null) {
        const blockId = this.generateId('return', { call_id: callId });
        const block = document.createElement('div');
        block.id = blockId;
        block.className = this.components.interactive_elements?.return_block || 'return-value-block';
        
        let contentHTML = '';
        
        // 添加函数参数信息
        if (params && params.length > 0) {
            const paramClass = this.generateCssClass('trace', 'param');
            const separator = this.rules.display?.param_separator || ', ';
            contentHTML += `<div class="${paramClass}" style="color:#888;font-size:0.85em;margin-bottom:4px;">⬅️ 函数参数:</div>` +
                `<div style="color:#61afef;margin-bottom:8px;">${params.join(separator)}</div>`;
        }
        
        // 添加返回值信息
        const returnClass = this.generateCssClass('trace', 'return');
        contentHTML += `<div class="${returnClass}" style="color:#888;font-size:0.85em;margin-bottom:4px;">⬅️ 返回值:</div>` +
            `<div style="color:#98c379;">${returnValue}</div>`;
        
        block.innerHTML = '<div style="color:#aaa;font-size:0.9em;font-weight:500;margin-bottom:4px;">函数调用详情</div>' + contentHTML;
        
        return block;
    }
    
    /**
     * 创建AI按钮
     * @param {Element} callBlock - 调用块元素
     * @returns {Element} AI按钮元素
     */
    createAIButton(callBlock) {
        const aiBtn = document.createElement('button');
        aiBtn.className = this.components.interactive_elements?.ai_button || 'ask-ai-code-btn';
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
        
        return aiBtn;
    }
    
    /**
     * 创建返回调用链按钮
     * @param {Element} callBlock - 调用块元素
     * @returns {Element} 返回调用链按钮元素
     */
    createBackToTreeButton(callBlock) {
        const backBtn = document.createElement('button');
        backBtn.className = this.components.interactive_elements?.back_button || 'back-to-tree-code-btn';
        backBtn.innerHTML = '返回调用链';
        backBtn.style.cssText = `
            margin-left: 5px;
            padding: 2px 8px;
            background: transparent;
            border: 1px solid #1890ff;
            color: #1890ff;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.85em;
            font-weight: 600;
            transition: all 0.2s;
        `;
        
        backBtn.addEventListener('mouseover', function() {
            this.style.background = 'rgba(24, 144, 255, 0.1)';
        });
        
        backBtn.addEventListener('mouseout', function() {
            this.style.background = 'transparent';
        });
        
        return backBtn;
    }
    
    /**
     * 格式化时间显示
     * @param {number} time - 时间值
     * @returns {string} 格式化的时间字符串
     */
    formatTime(time) {
        const precision = this.rules.display?.time_precision || 2;
        const unit = this.rules.time_unit || 'ms';
        return `${time.toFixed(precision)}${unit}`;
    }
    
    /**
     * 检查是否为慢调用
     * @param {number} time - 时间值
     * @returns {boolean} 是否为慢调用
     */
    isSlowCall(time) {
        return time > this.rules.slow_threshold;
    }
    
    /**
     * 检查是否为深层调用
     * @param {number} depth - 调用深度
     * @returns {boolean} 是否为深层调用
     */
    isDeepCall(depth) {
        return depth > this.rules.deep_threshold;
    }
}

// 导出解析器类
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TraceDataParser;
} else {
    window.TraceDataParser = TraceDataParser;
}
