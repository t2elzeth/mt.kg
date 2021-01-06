#!/bin/bash

python manage.py makemigrations --no-input
python manage.py migrate --no-input
python manage.py collectstatic --no-input

echo "from django.contrib.auth.models import User; User.objects.create_superuser('mtkg', 'mtkg@gmail.com', 'sssss05s')" | python manage.py shell

gunicorn -c "/app/production/gunicorn/gunicorn_config.py" config.prod.wsgi

