import os
import socketio
import asyncio
from pathlib import Path

io = socketio.AsyncClient()

BASE_DIR = Path(__file__).resolve().parent
IMAGES_DIR = 'img'
tasks = []


async def send_imagepath(client: socketio.AsyncClient):
    image = input("Enter the imagepath: ")
    await client.emit("render", os.path.join(IMAGES_DIR, image))


@io.event
async def connect():
    print('Successfully connected!')
    await io.emit("render", os.path.join(IMAGES_DIR, 'som200.jpg'))
    await io.emit("render", os.path.join(IMAGES_DIR, 'me.jpg'))


@io.event
async def success(message):
    print(message)


@io.event
async def error(message):
    print(message)


@io.event
def finished(message):
    print(message)


@io.event
async def welcome(message):
    print(message)
    await io.emit("welcome-back", "Yes, than you!")


@io.event
async def disconnect():
    print('Disconnected from server')


async def run():
    await io.connect("http://localhost:8920")

    tasks.append(await io.wait())
    await asyncio.gather(*tasks)


if __name__ == '__main__':
    asyncio.run(run())
