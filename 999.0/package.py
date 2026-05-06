# -*- coding: utf-8 -*-

name = "l_log"
version = "999.0"
description = "Lugwit log viewer FastAPI backend"
authors = ["Lugwit Team"]

requires = [
    "python-3.12+<3.13",
    "uvicorn",
    "fastapi",
    "jinja2",
    "markdown",
    "requests",
    "python_multipart",
]

build_command = False
cachable = True
relocatable = True


def commands():
    env.PYTHONPATH.prepend("{root}/backend")
    env.L_LOG_ROOT = "{root}"
    alias("l_log_backend", "python {root}/backend/start_backend.py")
