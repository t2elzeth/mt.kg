# How to setup. Instruction
### Backend
Go to `backend/` folder and do following things:
- Create your venv
    ```
    python3.9 -m venv env
    . env/bin/activate
    
    pip install -r requirements.txt
    ```
- Make migrations and create super user
    ```
    ./manage.py makemigrations && ./manage.py migrate
    ./manage.py createsuperuser --email=''
    ```

- Install all required modules for nodejs app to work.
    Go to `generator/` directory and start installing all modules back
    ```
    cd generator/
    
    npm i
    ```
  
### Frontend
Go to `frontend/` folder and do following:
- Install node_packages
    ```
    npm i
    ```
