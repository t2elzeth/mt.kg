from .methods import post, Get
from library.business_logic import MethodsManager


class AddARViewMethodsManager(MethodsManager):
    methods = {
        "post": post,
        "get": Get
    }
