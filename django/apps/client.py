import os
import socketio
from pathlib import Path

io = socketio.Client()

BASE_DIR = Path(__file__).resolve().parent
IMAGES_DIR = 'img'
tasks = []


def send_imagepath(client: socketio.AsyncClient):
    image = input("Enter the imagepath: ")
    client.emit("render", os.path.join(IMAGES_DIR, image))


@io.event
def connect():
    print('Successfully connected!')
    io.emit("render", os.path.join(IMAGES_DIR, 'som200.jpg'))


@io.event
def success(message):
    print(message)


@io.event
def error(message):
    print(message)


@io.event
def finished(message):
    print(message)


@io.event
def welcome(message):
    print(message)
    io.emit("welcome-back", "Yes, than you!")


@io.event
def disconnect():
    print('Disconnected from server')


io.connect("http://localhost:8920")
io.wait()
