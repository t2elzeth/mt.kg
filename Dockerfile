FROM python:3.9

RUN pip install --upgrade pip

WORKDIR /app

COPY ./requirements.txt ./
RUN pip install -r requirements.txt

COPY . .

COPY ./production/entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]

EXPOSE 8000
