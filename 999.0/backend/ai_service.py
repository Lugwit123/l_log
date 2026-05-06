# -*- coding: utf-8 -*-
"""
DeepSeek AI 服务集成模块
提供代码分析和问答功能
"""
import requests
import json
from typing import Optional, Dict, Any, List

class DeepSeekAI:
    """DeepSeek AI 服务类"""
    
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_url = "https://api.deepseek.com/v1"
        self.model = "deepseek-coder"  # 使用coder模型，速度更快，更适合代码分析
        
    def chat(self, messages: List[Dict[str, str]], temperature: float = 0.7, max_tokens: int = 4000) -> Optional[Dict[str, Any]]:
        """发送聊天请求到DeepSeek API
        
        Args:
            messages: 消息列表，格式 [{"role": "user", "content": "..."}]
            temperature: 生成温度 (0-2)
            max_tokens: 最大token数
            
        Returns:
            包含回复内容和token统计的字典，失败返回None
            格式: {
                "content": "回复内容",
                "usage": {
                    "prompt_tokens": 100,
                    "completion_tokens": 200,
                    "total_tokens": 300
                }
            }
        """
        try:
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }
            
            data = {
                "model": self.model,
                "messages": messages,
                "temperature": temperature,
                "max_tokens": max_tokens,
                "stream": False
            }
            
            response = requests.post(
                f"{self.base_url}/chat/completions",
                headers=headers,
                json=data,
                timeout=60
            )
            
            if response.status_code == 200:
                result = response.json()
                return {
                    "content": result['choices'][0]['message']['content'],
                    "usage": result.get('usage', {})
                }
            else:
                print(f"[DeepSeek API] 错误: {response.status_code} - {response.text}")
                return None
                
        except Exception as e:
            print(f"[DeepSeek API] 异常: {str(e)}")
            return None
    
    def chat_stream(self, messages: List[Dict[str, str]], temperature: float = 0.7, max_tokens: int = 4000):
        """发送流式聊天请求到DeepSeek API
        
        Args:
            messages: 消息列表
            temperature: 生成温度
            max_tokens: 最大token数
            
        Yields:
            逐步返回的内容片段和token统计
        """
        try:
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }
            
            data = {
                "model": self.model,
                "messages": messages,
                "temperature": temperature,
                "max_tokens": max_tokens,
                "stream": True  # 启用流式响应
            }
            
            response = requests.post(
                f"{self.base_url}/chat/completions",
                headers=headers,
                json=data,
                timeout=60,
                stream=True  # 流式接收
            )
            
            if response.status_code == 200:
                for line in response.iter_lines():
                    if line:
                        line_str = line.decode('utf-8')
                        if line_str.startswith('data: '):
                            data_str = line_str[6:]  # 去掉 "data: " 前缀
                            if data_str == '[DONE]':
                                break
                            try:
                                chunk = json.loads(data_str)
                                delta = chunk['choices'][0].get('delta', {})
                                content = delta.get('content', '')
                                if content:
                                    yield {'type': 'content', 'data': content}
                                
                                # 最后一个chunk包含usage信息
                                if 'usage' in chunk:
                                    yield {'type': 'usage', 'data': chunk['usage']}
                            except json.JSONDecodeError:
                                continue
            else:
                print(f"[DeepSeek API] 错误: {response.status_code} - {response.text}")
                yield {'type': 'error', 'data': f'API错误: {response.status_code}'}
                
        except Exception as e:
            print(f"[DeepSeek API] 异常: {str(e)}")
            yield {'type': 'error', 'data': str(e)}
    
    def analyze_code(self, code: str, question: str = None) -> Optional[str]:
        """分析代码
        
        Args:
            code: 代码片段
            question: 可选的具体问题
            
        Returns:
            分析结果
        """
        if question:
            prompt = f"请分析以下代码并回答问题：\n\n问题：{question}\n\n代码：\n```python\n{code}\n```"
        else:
            prompt = f"请分析以下代码的功能、逻辑和潜在问题：\n```python\n{code}\n```"
        
        messages = [
            {"role": "system", "content": "你是一位专业的Python代码分析专家，擅长解释代码逻辑、发现潜在问题并提供优化建议。"},
            {"role": "user", "content": prompt}
        ]
        
        return self.chat(messages)
    
    def analyze_call_tree(self, tree_text: str, question: str = None) -> Optional[str]:
        """分析调用链
        
        Args:
            tree_text: 调用链文本
            question: 可选的具体问题
            
        Returns:
            分析结果
        """
        if question:
            prompt = f"请分析以下函数调用链并回答问题：\n\n问题：{question}\n\n调用链：\n```\n{tree_text}\n```"
        else:
            prompt = f"请分析以下函数调用链，找出性能瓶颈、异常调用模式和优化建议：\n```\n{tree_text}\n```"
        
        messages = [
            {"role": "system", "content": "你是一位专业的性能分析专家，擅长分析函数调用链、识别性能瓶颈、发现异常调用模式并提供优化建议。"},
            {"role": "user", "content": prompt}
        ]
        
        return self.chat(messages)
    
    def explain_trace_log(self, log_content: str, focus: str = None) -> Optional[str]:
        """解释追踪日志
        
        Args:
            log_content: 日志内容
            focus: 关注的重点（如特定函数名）
            
        Returns:
            解释结果
        """
        if focus:
            prompt = f"请重点关注'{focus}'，解释以下追踪日志的执行流程：\n\n{log_content}"
        else:
            prompt = f"请解释以下追踪日志的执行流程和关键信息：\n\n{log_content}"
        
        messages = [
            {"role": "system", "content": "你是一位专业的调试专家，擅长解读程序执行日志、追踪代码执行流程。"},
            {"role": "user", "content": prompt}
        ]
        
        return self.chat(messages)


# 全局AI服务实例
_ai_service: Optional[DeepSeekAI] = None

def get_ai_service() -> Optional[DeepSeekAI]:
    """获取AI服务实例"""
    return _ai_service

def init_ai_service(api_key: str):
    """初始化AI服务"""
    global _ai_service
    _ai_service = DeepSeekAI(api_key)
    return _ai_service
