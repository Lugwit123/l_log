# 函数参数显示功能

## 功能描述
在点击展开按钮时，同时显示函数参数和返回值，提供完整的函数调用上下文信息。

## 实现细节

### 1. 功能效果
展开后的代码块现在显示：
```
┌─────────────────────────────────────────┐
│ 函数调用详情                    [返回调用链] │
│                                         │
│ ⬅️ 函数参数:                           │
│ x=1, data=[1, 2, 3, 4, 5]             │
│                                         │
│ ⬅️ 返回值:                             │
│ 25                                     │
└─────────────────────────────────────────┘
```

### 2. 参数提取逻辑

#### 数据源
从HTML中的函数代码块提取参数信息：
```html
>>Function Code|id=func-23 (深度3 - helper_function): [起始行号: 28]
      1 |     28 | def helper_function(x):
                       💡 变量 x=1
<<<END_VAR>>>
```

#### 提取规则
1. **定位函数定义**：查找 `def function_name(param):` 格式
2. **收集参数变量**：在函数定义后查找 `💡 变量 param=value` 行
3. **停止条件**：遇到非变量行或空行时停止收集
4. **格式化输出**：将多个参数用逗号连接

### 3. 技术实现

#### 通用参数提取函数
```javascript
function extractFunctionParams(callId) {
    console.log('[参数提取] 开始提取函数参数，callId:', callId);
    
    var functionParams = null;
    var callElement = document.getElementById('call-' + callId);
    if (callElement) {
        // 查找下一个元素中的函数代码块
        var nextElement = callElement.nextElementSibling;
        while (nextElement && !functionParams) {
            var funcCodeBlocks = nextElement.querySelectorAll('.lprint-trace-code-block');
            
            for (var i = 0; i < funcCodeBlocks.length; i++) {
                var codeBlock = funcCodeBlocks[i];
                var codeContent = codeBlock.textContent || codeBlock.innerText;
                
                // 查找函数定义行和参数变量
                var funcDefMatch = codeContent.match(/def\s+\w+\([^)]*\):/);
                if (funcDefMatch) {
                    // 查找函数定义后面的变量（参数）
                    var paramLines = [];
                    var lines = codeContent.split('\n');
                    var foundFuncDef = false;
                    
                    for (var j = 0; j < lines.length; j++) {
                        var line = lines[j].trim();
                        if (foundFuncDef) {
                            // 如果找到以 变量 开头的行，提取参数信息
                            if (line.includes('变量')) {
                                var paramMatch = line.match(/变量\s+(.+)/);
                                if (paramMatch) {
                                    paramLines.push(paramMatch[1]);
                                }
                            } else if (line && !line.includes('│') && !line.includes('├') && !line.includes('└')) {
                                // 如果遇到非空行且不是变量行，停止收集
                                break;
                            }
                        } else if (line.includes('def ')) {
                            foundFuncDef = true;
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
```

#### 展开逻辑集成
```javascript
// 获取函数参数信息
var functionParams = extractFunctionParams(callId);

// 构建显示内容
var contentHTML = '';

// 添加函数参数信息（如果存在）
if (functionParams) {
    contentHTML += '<div style="color:#888;font-size:0.85em;margin-bottom:4px;">⬅️ 函数参数:</div>' +
        '<div style="color:#61afef;margin-bottom:8px;">' + 
        functionParams.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + 
        '</div>';
}

// 添加返回值信息
contentHTML += '<div style="color:#888;font-size:0.85em;margin-bottom:4px;">⬅️ 返回值:</div>' +
    '<div style="color:#98c379;">' + 
    fullReturnValue.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;') + 
    '</div>';
```

### 4. 显示样式

#### 颜色编码
- **标题**：灰色 (#888)
- **参数**：蓝色 (#61afef)
- **返回值**：绿色 (#98c379)
- **整体标题**：浅灰色 (#aaa)

#### 布局
- 参数和返回值之间有8px间距
- 每个部分有4px底部边距
- 保持与原有返回值代码块一致的样式

### 5. 兼容性

#### 向后兼容
- 如果没有参数信息，只显示返回值
- 不影响现有的返回值展开功能
- 保持"返回调用链"按钮功能

#### 错误处理
- 找不到函数定义时显示"无参数"
- 参数提取失败时不影响返回值显示
- 详细的控制台日志便于调试

### 6. 测试用例

#### 有参数的函数
```python
def helper_function(x):
    # 💡 变量 x=1
    return x * x
```
**显示**：
```
⬅️ 函数参数:
x=1

⬅️ 返回值:
1
```

#### 无参数的函数
```python
def secondary_function():
    return 42
```
**显示**：
```
⬅️ 返回值:
42
```

#### 多参数函数
```python
def batch_process(batches):
    # 💡 变量 batches=[[1, 2], [3, 4, 5]]
    return results
```
**显示**：
```
⬅️ 函数参数:
batches=[[1, 2], [3, 4, 5]]

⬅️ 返回值:
[1, 4, 9, 16, 25]
```

## 用户体验改进

### 优势
1. **完整上下文**：同时看到输入和输出
2. **调试友好**：更容易理解函数行为
3. **视觉清晰**：颜色编码区分不同类型信息
4. **一致体验**：保持原有的交互方式

### 使用场景
- 调试时查看函数的输入输出关系
- 理解复杂函数调用的参数传递
- 快速定位问题函数的参数值

## 未来改进
- 可以添加参数类型信息
- 可以显示参数的来源（调用位置）
- 可以支持参数值的展开/折叠
