// 测试修复后的正则表达式
console.log('=== 测试修复后的正则表达式 ===');

var testCode = `28
29
30
31
32 def helper_function(x):  # 💡 x=9
     """辅助函数：计算平方"""
     result = x * x  # 💡 res`;

console.log('测试代码:', testCode);

// 修复后的正则表达式
var newRegex = /def\s+\w+\([^)]*\):[^#\n]*(?:#\s*💡[^#\n]*)?/;
var match = testCode.match(newRegex);

console.log('修复后的匹配结果:', match);

if (match) {
    console.log('匹配到的完整行:', match[0]);
    
    // 测试参数提取
    if (match[0].includes('# 💡')) {
        var paramMatch = match[0].match(/# 💡\s*(\w+)\s*=\s*([^#\s]+)/);
        if (paramMatch) {
            console.log('✅ 成功提取参数:', paramMatch[1], '=', paramMatch[2]);
        } else {
            console.log('❌ 参数提取失败');
        }
    } else {
        console.log('❌ 没有找到参数注释');
    }
} else {
    console.log('❌ 函数定义匹配失败');
}

// 对比原来的正则表达式
console.log('\n=== 对比原来的正则表达式 ===');
var oldRegex = /def\s+\w+\([^)]*\):/;
var oldMatch = testCode.match(oldRegex);
console.log('原来的匹配结果:', oldMatch);
