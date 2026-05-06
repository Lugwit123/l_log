// 测试函数定义提取功能
console.log('=== 测试函数定义提取功能 ===');

// 模拟代码内容
var testCode = `32 def helper_function(x):  # 💡 x=9
     """辅助函数：计算平方"""
     result = x * x  # 💡 res
     return result`;

var testCode2 = `60 def batch_process(batches):  # 💡 batches=[[1, 2], [3, 4, 5]]
     """批量处理"""
     results = [];
     for batch in batches:
         results.append(process_data(batch));
     return results`;

// 测试函数定义提取
function testExtractFunctionDefinition(codeContent, funcName) {
    console.log('\n测试代码:', codeContent);
    console.log('函数名:', funcName);
    
    // 查找函数定义行
    var funcDefMatch = codeContent.match(/def\s+\w+\([^)]*\):[^#\n]*(?:#\s*💡[^#\n]*)?/);
    if (funcDefMatch) {
        var fullDef = funcDefMatch[0];
        console.log('找到完整函数定义:', fullDef);
        
        // 提取参数部分
        var paramMatch = fullDef.match(/def\s+\w+\(([^)]*)\)/);
        if (paramMatch) {
            var params = paramMatch[1].trim();
            if (params) {
                var result = funcName + '(' + params + ')';
                console.log('✅ 提取到函数定义:', result);
                return result;
            } else {
                console.log('✅ 无参数函数:', funcName + '()');
                return funcName + '()';
            }
        }
    }
    
    console.log('❌ 未找到函数定义');
    return funcName;
}

// 运行测试
testExtractFunctionDefinition(testCode, 'helper_function');
testExtractFunctionDefinition(testCode2, 'batch_process');

// 测试无参数函数
var testCode3 = `def no_params_func():
    return "hello"`;
testExtractFunctionDefinition(testCode3, 'no_params_func');
