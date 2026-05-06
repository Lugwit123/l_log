// 测试参数提取逻辑
console.log('=== 测试参数提取 ===');

// 测试函数定义行
var testLine = 'def helper_function(x):  # 💡 x=3';
console.log('测试行:', testLine);

// 当前正则表达式
var regex = /# 💡\s*(\w+)\s*=\s*([^#\s]+)/;
var match = testLine.match(regex);
console.log('正则匹配结果:', match);

if (match) {
    console.log('参数名:', match[1]);
    console.log('参数值:', match[2]);
} else {
    console.log('匹配失败！');
    
    // 尝试其他正则表达式
    console.log('\n尝试其他正则:');
    var regex2 = /# 💡\s*(\w+)\s*=\s*([^\s)]+)/;
    var match2 = testLine.match(regex2);
    console.log('regex2 结果:', match2);
    
    var regex3 = /# 💡\s*(\w+)\s*=\s*([^)]+)/;
    var match3 = testLine.match(regex3);
    console.log('regex3 结果:', match3);
    
    var regex4 = /# 💡\s*(\w+)\s*=\s*(\w+)/;
    var match4 = testLine.match(regex4);
    console.log('regex4 结果:', match4);
}
