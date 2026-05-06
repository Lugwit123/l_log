import re

# 模拟HTML内容
html_content = """✓ 追踪完成 | 日志已保存</div>

---

## 📖 文件格式说明

本文件采用 **Markdown + JSON 索引** 混合格式，支持人类阅读和程序解析。

### 👤 人类阅读

- 📄 直接查看 Markdown 内容（调用树、详细追踪）
- 🔧 使用任何 Markdown 编辑器或查看器
- 🤖 AI 可以理解完整上下文"""

# 测试正则表达式
usage_guide_pattern = r'(---[\s\S]*?## 📖 文件格式说明[\s\S]*)\Z'
usage_guide_replacement = r'<div data-component="usage-guide" class="usage-guide-section" data-markdown-source="true">\1</div>'

print("原始HTML内容:")
print(html_content)
print("\n" + "="*50 + "\n")

print("正则表达式:", usage_guide_pattern)
print("\n" + "="*50 + "\n")

# 测试匹配
match = re.search(usage_guide_pattern, html_content, flags=re.DOTALL)
if match:
    print("匹配成功!")
    print("匹配到的内容:")
    print(repr(match.group(1)))
    print("\n实际内容:")
    print(match.group(1))
    
    # 测试替换
    result = re.sub(usage_guide_pattern, usage_guide_replacement, html_content, flags=re.DOTALL)
    print("\n" + "="*50 + "\n")
    print("替换结果:")
    print(result)
else:
    print("匹配失败!")
    print("尝试不同的正则表达式...")
    
    # 尝试不同的模式
    patterns = [
        r'(---[\s\S]*## 📖 文件格式说明[\s\S]*)',
        r'(---.*?## 📖 文件格式说明.*)',
        r'(---[\w\W]*?## 📖 文件格式说明[\w\W]*)',
    ]
    
    for i, pattern in enumerate(patterns):
        print(f"\n尝试模式 {i+1}: {pattern}")
        match = re.search(pattern, html_content, flags=re.DOTALL)
        if match:
            print("✓ 匹配成功!")
            print("匹配内容:", repr(match.group(1))[:100] + "...")
        else:
            print("✗ 匹配失败")
