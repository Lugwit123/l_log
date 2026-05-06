"""
Backend configuration
"""
import os

# Server settings
HOST = "0.0.0.0"
PORT = 8000

# Shiki service
SHIKI_SERVICE_URL = "http://localhost:3000"

# Paths
BACKEND_DIR = os.path.dirname(os.path.abspath(__file__))
STATIC_DIR = os.path.join(BACKEND_DIR, "static")
TEMPLATES_DIR = os.path.join(BACKEND_DIR, "templates")
LOGS_DIR = os.environ.get('L_LOG_LOGS_DIR') or os.path.join(BACKEND_DIR, "logs")  # 原始日志文件目录
LOGS_CACHE_DIR = os.environ.get('L_LOG_LOGS_CACHE_DIR') or os.path.join(BACKEND_DIR, "logs_cache")  # 缓存文件目录

# File upload settings
MAX_UPLOAD_SIZE = 50 * 1024 * 1024  # 50MB
ALLOWED_EXTENSIONS = ['.md', '.log', '.txt']

# Cache settings
CACHE_EXPIRY_DAYS = 7
