#!/bin/bash
source /home/mtkg/code/mt.kg/env/bin/activate
exec gunicorn -c "/home/mtkg/code/mt.kg/gunicorn/gunicorn_config.py" config.wsgi
