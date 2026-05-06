// 测试修复后的正则表达式
console.log('=== 测试修复后的参数值提取正则 ===');

var testLine = 'def batch_process(batches):  # 💡 batches=[[1, 2], [3, 4, 5]]';
console.log('测试行:', testLine);

// 修复后的正则表达式
var newRegex = /# 💡\s*(\w+)\s*=\s*([^#\n]+?)(?=\s*(?:#|$))/;
var match = testLine.match(newRegex);

console.log('修复后的匹配结果:', match);

if (match) {
    console.log('✅ 参数名:', match[1]);
    console.log('✅ 参数值:', match[2]);
    console.log('✅ 完整参数:', match[1] + ' = ' + match[2]);
} else {
    console.log('❌ 匹配失败');
}

// 对比原来的正则表达式
console.log('\n=== 对比原来的正则表达式 ===');
var oldRegex = /# 💡\s*(\w+)\s*=\s*([^#\s]+)/;
var oldMatch = testLine.match(oldRegex);
console.log('原来的匹配结果:', oldMatch);
if (oldMatch) {
    console.log('❌ 原来的参数值:', oldMatch[2]);
}

// 测试其他情况
console.log('\n=== 测试其他情况 ===');
var testCases = [
    'def helper_function(x):  # 💡 x=3',
    'def process_data(data, multiplier):  # 💡 data=[1,2,3], multiplier=2',
    'def func(a):  # 💡 a="hello world"',
    'def complex_func(obj):  # 💡 obj={"key": "value", "num": 42}'
];

testCases.forEach(function(testCase, index) {
    console.log(`\n测试案例 ${index + 1}:`, testCase);
    var match = testCase.match(newRegex);
    if (match) {
        console.log('✅ 提取成功:', match[1] + ' = ' + match[2]);
    } else {
        console.log('❌ 提取失败');
    }
});
