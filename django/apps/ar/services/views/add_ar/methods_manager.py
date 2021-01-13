from .methods import post, Get
from library.django_services_management import MethodsManager


class AddARViewMethodsManager(MethodsManager):
    methods = {
        "post": post,
        "get": Get
    }
