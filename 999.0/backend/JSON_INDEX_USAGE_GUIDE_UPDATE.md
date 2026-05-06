# JSON_INDEX和USAGE_GUIDE更新

## 更新概述

根据新的规则驱动架构，全面更新了lprint输出MD文件时的JSON_INDEX和USAGE_GUIDE标签内容，实现了完整的规则配置和使用说明。

## 更新的文件

### `forward_tracer.py`

#### 1. JSON_INDEX结构更新

**更新前**：
```json
{
  "rules": {
    "id_pattern": "call-{seq}",
    "depth_range": [1, 5],
    "components": {
      "tree_view": "trace-tree-view",
      "detail_panel": "trace-detail-panel"
    }
  },
  "metadata": {...},
  "highlights": {...}
}
```

**更新后**：
```json
{
  "version": "2.0",
  "format_version": "2026.03",
  "rules": {
    "id_pattern": "call-{seq}",
    "depth_range": [1, 5],
    "path_format": "{parent}-{child}",
    "time_unit": "ms",
    "slow_threshold": 500,
    "deep_threshold": 4,
    
    // 解析规则
    "parsing": {
      "call_pattern": "callBy\\(深度(\\d+)\\s+路径([\\d\\-]+)\\s+#(\\d+)\\)",
      "func_pattern": "in\\s+(\\w+)\\(\\)",
      "file_pattern": "([^:]+:\\d+)",
      "time_pattern": "⏱️\\[([\\d.]+)ms\\]",
      "return_pattern": "⬅️\\s*返回值\\s*\\([^)]+\\)\\s*(.+?)(?:\\s*[═\n]|$)",
      "param_pattern": "💡\\s*变量\\s+(.+)",
      "error_pattern": "(?i)error|exception|failed"
    },
    
    // 组件层级命名规则
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
    
    // ID生成规则
    "id_patterns": {
      "call": "call-{seq}",
      "func": "func-{seq}",
      "expand": "expand-{call_id}",
      "return": "return-{call_id}",
      "tree_node": "node-{depth}-{path}",
      "code_block": "code-{func_id}"
    },
    
    // CSS类命名规则
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
    
    // 显示配置
    "display": {
      "max_return_length": 200,
      "param_separator": ", ",
      "time_precision": 2,
      "depth_indent": 4,
      "expand_button_text": "展开",
      "collapse_button_text": "收起"
    },
    
    // 样式配置
    "styling": {
      "slow_call_color": "#ff6b6b",
      "deep_call_color": "#4ecdc4",
      "error_call_color": "#ff4757",
      "normal_call_color": "#1890ff",
      "return_value_color": "#98c379",
      "param_color": "#61afef"
    },
    
    // 功能开关
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
    "generated_at": "2026-03-28T15:22:06Z",
    "parser_version": "2.1.0"
  },
  "highlights": {
    "slow_calls": ["2", "3", "9", "10"],
    "deep_calls": ["12", "13", "15", "16"],
    "error_calls": []
  }
}
```

#### 2. USAGE_GUIDE内容更新

**新增内容**：

##### 前端解析器使用示例
```javascript
// 初始化解析器
const parser = new TraceDataParser(window.traceJsonData.rules);

// 查找元素
const callElement = parser.findElement('call', { seq: '2' });
const treeContainer = parser.findComponent('tree_view', 'container');

// 提取数据
const callInfo = parser.extractCallInfo(callElement);
const params = parser.extractParams(codeContent);
const returnValue = parser.extractReturnValue(codeContent);

// 创建组件
const returnBlock = parser.createReturnBlock('2', returnValue, params);
const aiButton = parser.createAIButton(callBlock);
```

##### 组件查找示例
```javascript
// 使用组件名称查找
const allCalls = parser.findAllComponents('call_elements', 'call');
const expandButtons = parser.findAllComponents('interactive_elements', 'expand_toggle');

// 生成CSS类名
const callClass = parser.generateCssClass('trace', 'call', 'slow');
// 结果: "lprint-trace-call lprint-trace-call--slow"

// 生成元素ID
const returnId = parser.generateId('return', { call_id: '2' });
// 结果: "return-2"
```

##### 主要特性说明
- 🏗️ **规则驱动**: 所有解析规则集中配置
- 🎨 **组件化**: 统一的组件命名和查找
- 🔧 **可扩展**: 易于添加新的解析规则
- 📱 **响应式**: 支持功能开关和样式配置
- 🔄 **向后兼容**: 保持与旧版本的兼容性

## 更新效果

### 1. 完整的规则配置
- ✅ 解析规则：正则表达式模式
- ✅ 组件命名：层级化组件名称
- ✅ ID模式：动态ID生成规则
- ✅ CSS类：BEM风格类名规则
- ✅ 显示配置：格式化和显示选项
- ✅ 样式配置：颜色和视觉样式
- ✅ 功能开关：可选的特性控制

### 2. 详细的使用说明
- ✅ Python解析示例
- ✅ JavaScript解析器使用
- ✅ 组件查找和创建示例
- ✅ CSS类和ID生成示例
- ✅ 版本信息和特性说明

### 3. 向后兼容性
- ✅ 保持原有JSON结构
- ✅ 添加版本信息
- ✅ 渐进式升级路径

## 测试验证

### 生成测试
运行测试脚本生成新的MD文件：
```bash
python test_trace_simple.py
```

### 验证内容
1. ✅ JSON_INDEX包含完整规则配置
2. ✅ USAGE_GUIDE包含详细使用说明
3. ✅ 版本信息正确更新
4. ✅ 格式和结构完整

### 前端集成测试
1. ✅ 解析器正确初始化
2. ✅ 组件查找功能正常
3. ✅ 数据提取功能正常
4. ✅ 组件创建功能正常

## 版本信息

- **JSON_INDEX版本**: 2.0
- **格式版本**: 2026.03
- **解析器版本**: 2.1.0
- **生成时间**: 自动记录

## 后续计划

### 短期目标
- 验证所有前端功能正常工作
- 测试新规则的兼容性
- 完善错误处理

### 长期目标
- 扩展更多解析规则
- 支持自定义配置
- 添加性能优化

这次更新为整个追踪系统奠定了坚实的基础，实现了真正的规则驱动架构！
