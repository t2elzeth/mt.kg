FROM nginx

WORKDIR /app

COPY ./production/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./production/nginx/mt.kg.crt /etc/ssl/mt.kg.crt
COPY ./production/nginx/mt.kg.key /etc/ssl/mt.kg.key
