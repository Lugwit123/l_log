#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""测试parser.py的解析逻辑"""

import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), 'backend'))

from backend.parser import parse_md_to_html

# 测试用例：callBy应该关闭上一个代码块
test_md = '''<<<lprint-trace>>>
callBy(深度1 #1): test.py:10 in func1()
>>Function Code (深度1 - func1): [起始行号: 10]
      1 |     10 | def func1():
      2 |     11 |     return 1
                       ⬅️ 返回值 1
      3 |     12 |     extra_line = 2
callBy(深度2 #2): test.py:20 in func2()
>>Function Code (深度2 - func2): [起始行号: 20]
<<</lprint-trace>>>'''

result = parse_md_to_html(test_md, 'test.md')
html = result['html']

print("=" * 80)
print("生成的HTML:")
print("=" * 80)
print(html)
print("=" * 80)

# 检查问题
if 'callBy(深度2' in html and 'extra_line' in html:
    # 查找callBy(深度2)的位置
    callby2_pos = html.find('callBy(深度2')
    extra_line_pos = html.find('extra_line')
    
    if extra_line_pos < callby2_pos:
        print("✓ 正确：extra_line在callBy(深度2)之前")
    else:
        print("✗ 错误：callBy(深度2)在extra_line之前（应该关闭代码块）")
        
    # 检查callBy(深度2)是否在代码块内
    before_callby2 = html[:callby2_pos]
    if '</div></div>' in before_callby2[before_callby2.rfind('lprint-trace-code-block'):]:
        print("✓ 正确：callBy(深度2)之前代码块已关闭")
    else:
        print("✗ 错误：callBy(深度2)仍在代码块内")
