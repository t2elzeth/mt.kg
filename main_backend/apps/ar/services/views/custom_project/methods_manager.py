from library.django_services_management import MethodsManager

from .methods import get


class CustomProjectsViewMethodsManager(MethodsManager):
    methods = {
        "get": get,
    }
