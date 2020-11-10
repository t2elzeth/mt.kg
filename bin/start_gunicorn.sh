#!/bin/bash
source /home/mtkg/code/ar-mt-kg/env/bin/activate
exec gunicorn -c "/home/mtkg/code/ar-mt-kg/gunicorn_config.py" web_mtkg.wsgi
