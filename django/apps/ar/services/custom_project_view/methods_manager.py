from library.django_services_management import MethodsManager

from .methods import get, post


class CustomProjectsViewMethodsManager(MethodsManager):
    methods = {
        "get": get,
    }
