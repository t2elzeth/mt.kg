In order to start project, you need to clone it via https

```
git clone https://github.com/t2elzeth/mt.kg
cd mt.kg
```

Create your venv
```
python3.9 -m venv env
. env/bin/activate

pip install -r requirements.txt
```

Make migrations and create super user
```
./manage.py makemigrations && ./manage.py migrate
./manage.py createsuperuser --email=''
```

And then install all required modules for nodejs app to work.
Go to `generator/` directory and delete `node_modules/`. Don't worry, it will be created again as you start installing all modules back
```
cd generator/

rm -rf node_modules/
npm i
```
