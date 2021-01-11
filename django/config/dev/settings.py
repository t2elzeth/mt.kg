from ..common.settings import *

SECRET_KEY = 'n-7nyk0^80!nw&atk(6-@ogj^f2ttww5&p5xj@j@fygh7rig1u'
DEBUG = True

ROOT_URLCONF = 'config.dev.urls'

WSGI_APPLICATION = 'config.dev.wsgi.application'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]
