from pathlib import Path

import socketio

io = socketio.Client()

BASE_DIR = Path(__file__).resolve().parent
IMAGES_DIR = 'img'
tasks = []


@io.event
def connect():
    print('Successfully connected!')
    io.emit("new-project")


def emit_new_project():
    io.emit("new-project")


@io.event
def disconnect():
    print('Disconnected from server')


io.connect("http://localhost:8920")
io.wait()
