from ..common.settings import *

SECRET_KEY = os.getenv('SECRET_KEY')
DEBUG = bool(int(os.getenv('DEBUG')))

ROOT_URLCONF = 'config.prod.urls'

WSGI_APPLICATION = 'config.prod.wsgi.application'

STATIC_ROOT = os.path.join(BASE_DIR, 'static')

