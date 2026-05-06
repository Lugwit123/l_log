# JSON_INDEX规则优化方案

## 当前JSON_INDEX的问题

### 1. 规则信息不够完整
**当前结构**：
```json
{
  "rules": {
    "id_pattern": "call-{seq}",
    "depth_range": [1, 5],
    "path_format": "{parent}-{child}",
    "time_unit": "ms",
    "slow_threshold": 500,
    "deep_threshold": 4
  }
}
```

**问题**：
- 缺少前端需要的配置信息
- 规则不够详细，无法指导前端解析
- 缺少版本信息和兼容性说明

### 2. 前端解析困难
**当前前端代码**：
```javascript
// 前端需要从HTML重新解析所有数据
var returnMatch = callText.match(/⬅️\s*返回值\s*\([^)]+\)\s*(.+?)(?:\s*[═\n]|$)/);
var paramMatch = line.match(/💡\s*变量\s+(.+)/);
```

**问题**：
- 没有统一的解析规则
- 正则表达式分散在代码中
- 难以维护和更新

## 改进方案：增强规则配置

### 新的规则结构
```json
{
  "version": "2.0",
  "format_version": "2026.03",
  "rules": {
    "id_pattern": "call-{seq}",
    "depth_range": [1, 6],
    "path_format": "{parent}-{child}",
    "time_unit": "ms",
    "slow_threshold": 500,
    "deep_threshold": 4,
    
    // 新增：解析规则
    "parsing": {
      "call_pattern": "callBy\\(深度(\\d+)\\s+路径([\\d\\-]+)\\s+#(\\d+)\\)",
      "func_pattern": "in\\s+(\\w+)\\(\\)",
      "file_pattern": "([^:]+:\\d+)",
      "time_pattern": "⏱️\\[([\\d.]+)ms\\]",
      "return_pattern": "⬅️\\s*返回值\\s*\\([^)]+\\)\\s*(.+?)(?:\\s*[═\\n]|$)",
      "param_pattern": "💡\\s*变量\\s+(.+)",
      "error_pattern": "(?i)error|exception|failed"
    },
    
    // 新增：组件层级命名规则
    "components": {
      "tree_view": {
        "container": "trace-tree-view",
        "header": "tree-view-header",
        "controls": "tree-controls",
        "content": "tree-content",
        "node": "tree-node",
        "node_content": "tree-node-content",
        "children": "tree-children",
        "toggle": "tree-toggle"
      },
      "call_elements": {
        "call": "lprint-trace-call",
        "func": "lprint-trace-func",
        "code_block": "lprint-trace-code-block",
        "expand_container": "lprint-trace-expand-container",
        "expand_header": "lprint-trace-expand-header",
        "return_pre": "lprint-trace-return-pre",
        "inline": "lprint-trace-inline",
        "skip": "lprint-trace-skip"
      },
      "interactive_elements": {
        "expand_toggle": "ret-val-toggle",
        "return_block": "return-value-block",
        "ai_button": "ask-ai-code-btn",
        "back_button": "back-to-tree-code-btn",
        "search_input": "tree-search",
        "expand_all": "expand-all-btn",
        "collapse_all": "collapse-all-btn"
      },
      "ai_components": {
        "modal": "ai-modal",
        "question_list": "ai-question-list",
        "answer_area": "ai-answer-area"
      },
      "ui_components": {
        "toast": "toast",
        "toast_container": "toast-container",
        "modal": "modal",
        "context_menu": "context-menu",
        "tooltip": "tooltip"
      }
    },
    
    // 新增：ID生成规则
    "id_patterns": {
      "call": "call-{seq}",
      "func": "func-{seq}",
      "expand": "expand-{call_id}",
      "return": "return-{call_id}",
      "tree_node": "node-{depth}-{path}",
      "code_block": "code-{func_id}"
    },
    
    // 新增：CSS类命名规则
    "css_classes": {
      "prefixes": {
        "trace": "lprint-trace",
        "tree": "tree",
        "ai": "ai",
        "ui": "ui"
      },
      "modifiers": {
        "active": "active",
        "collapsed": "collapsed",
        "expanded": "expanded",
        "highlighted": "highlighted",
        "slow": "slow",
        "deep": "deep",
        "error": "error"
      },
      "elements": {
        "call": "call",
        "func": "func",
        "code": "code",
        "return": "return",
        "param": "param",
        "variable": "variable"
      }
    },
    
    // 新增：显示配置
    "display": {
      "max_return_length": 200,
      "param_separator": ", ",
      "time_precision": 2,
      "depth_indent": 4,
      "expand_button_text": "展开",
      "collapse_button_text": "收起"
    },
    
    // 新增：样式配置
    "styling": {
      "slow_call_color": "#ff6b6b",
      "deep_call_color": "#4ecdc4",
      "error_call_color": "#ff4757",
      "normal_call_color": "#1890ff",
      "return_value_color": "#98c379",
      "param_color": "#61afef"
    },
    
    // 新增：功能开关
    "features": {
      "enable_params_extraction": true,
      "enable_return_expansion": true,
      "enable_performance_analysis": true,
      "enable_error_highlighting": true,
      "enable_deep_call_detection": true
    }
  },
  "metadata": {
    "total_calls": 23,
    "max_depth": 5,
    "total_time": 4152,
    "avg_time": 180.52,
    "generated_at": "2026-03-28T15:18:00Z",
    "parser_version": "2.1.0"
  }
}
```

## 前端使用优化

### 统一解析器
```javascript
class TraceDataParser {
    constructor(rules) {
        this.rules = rules;
        this.patterns = {
            call: new RegExp(rules.parsing.call_pattern),
            func: new RegExp(rules.parsing.func_pattern),
            file: new RegExp(rules.parsing.file_pattern),
            time: new RegExp(rules.parsing.time_pattern),
            return: new RegExp(rules.parsing.return_pattern),
            param: new RegExp(rules.parsing.param_pattern),
            error: new RegExp(rules.parsing.error_pattern)
        };
        
        // 组件名称映射
        this.components = rules.components;
        this.idPatterns = rules.id_patterns;
        this.cssClasses = rules.css_classes;
    }
    
    // 生成元素ID
    generateId(type, params) {
        const pattern = this.idPatterns[type];
        if (!pattern) return null;
        
        return pattern.replace(/{(\w+)}/g, (match, key) => {
            return params[key] || match;
        });
    }
    
    // 生成CSS类名
    generateCssClass(prefix, element, modifier) {
        const cssPrefix = this.cssClasses.prefixes[prefix];
        const elementName = this.cssClasses.elements[element];
        const modifierName = this.cssClasses.modifiers[modifier];
        
        let className = `${cssPrefix}-${elementName}`;
        if (modifierName) {
            className += ` ${cssPrefix}-${elementName}--${modifierName}`;
        }
        
        return className;
    }
    
    // 查找元素
    findElement(type, params) {
        const id = this.generateId(type, params);
        return id ? document.getElementById(id) : null;
    }
    
    // 查找组件
    findComponent(category, component) {
        const className = this.components[category]?.[component];
        return className ? document.querySelector(`.${className}`) : null;
    }
    
    extractCallInfo(callElement) {
        const callText = callElement.textContent;
        const info = {};
        
        // 使用统一的正则表达式
        const callMatch = callText.match(this.patterns.call);
        if (callMatch) {
            info.depth = parseInt(callMatch[1]);
            info.path = callMatch[2];
            info.id = callMatch[3];
        }
        
        const funcMatch = callText.match(this.patterns.func);
        if (funcMatch) {
            info.func = funcMatch[1];
        }
        
        const fileMatch = callText.match(this.patterns.file);
        if (fileMatch) {
            info.file = fileMatch[1];
        }
        
        const timeMatch = callText.match(this.patterns.time);
        if (timeMatch) {
            info.time = parseFloat(timeMatch[1]);
        }
        
        return info;
    }
    
    extractReturnValue(codeContent) {
        if (!this.rules.features.enable_return_expansion) {
            return null;
        }
        
        const returnMatch = codeContent.match(this.patterns.return);
        return returnMatch ? returnMatch[1].trim() : null;
    }
    
    extractParams(codeContent) {
        if (!this.rules.features.enable_params_extraction) {
            return null;
        }
        
        const params = [];
        const lines = codeContent.split('\n');
        
        for (const line of lines) {
            const paramMatch = line.match(this.patterns.param);
            if (paramMatch) {
                params.push(paramMatch[1].trim());
            }
        }
        
        return params;
    }
    
    getCallStyle(callInfo) {
        const styling = this.rules.styling;
        
        if (callInfo.error) {
            return styling.error_call_color;
        }
        
        if (callInfo.time > this.rules.slow_threshold) {
            return styling.slow_call_color;
        }
        
        if (callInfo.depth > this.rules.deep_threshold) {
            return styling.deep_call_color;
        }
        
        return styling.normal_call_color;
    }
    
    // 创建返回值展开块
    createReturnBlock(callId, returnValue, params) {
        const blockId = this.generateId('return', { call_id: callId });
        const block = document.createElement('div');
        block.id = blockId;
        block.className = this.components.interactive_elements.return_block;
        
        let contentHTML = '';
        if (params && params.length > 0) {
            contentHTML += `<div class="${this.generateCssClass('trace', 'param')}">参数: ${params.join(', ')}</div>`;
        }
        contentHTML += `<div class="${this.generateCssClass('trace', 'return')}">返回值: ${returnValue}</div>`;
        
        block.innerHTML = contentHTML;
        return block;
    }
}

// 使用示例
const parser = new TraceDataParser(window.traceJsonData.rules);

// 查找元素
const callElement = parser.findElement('call', { seq: '2' });
const treeContainer = parser.findComponent('tree_view', 'container');

// 生成CSS类
const callClass = parser.generateCssClass('trace', 'call', 'slow'); // "lprint-trace-call lprint-trace-call--slow"
const buttonClass = parser.generateCssClass('ui', 'button', 'active'); // "ui-button ui-button--active"

// 提取数据
const callInfo = parser.extractCallInfo(callElement);
const returnValue = parser.extractReturnValue(codeContent);
const params = parser.extractParams(codeContent);

// 创建组件
const returnBlock = parser.createReturnBlock('2', returnValue, params);
```

## 实施建议

### 阶段1：规则结构优化
1. 扩展JSON_INDEX的rules字段
2. 添加解析、显示、样式配置
3. 保持向后兼容性

### 阶段2：前端重构
1. 创建统一的解析器类
2. 使用配置的正则表达式
3. 简化数据提取逻辑

### 阶段3：功能增强
1. 基于配置的功能开关
2. 动态样式应用
3. 可配置的显示选项

## 预期效果

### 维护性提升
- ✅ 所有解析规则集中管理
- ✅ 正则表达式统一维护
- ✅ 配置驱动的功能开关

### 扩展性增强
- ✅ 易于添加新的解析规则
- ✅ 灵活的样式配置
- ✅ 可配置的显示选项

### 性能优化
- ✅ 减少重复的正则编译
- ✅ 统一的解析逻辑
- ✅ 按需的功能启用

这个专注于规则的优化方案将使JSON_INDEX更加实用和可维护！
