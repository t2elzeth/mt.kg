from library.django_services_management import MethodsManager

from .methods import Get


class AllARViewMethodsManager(MethodsManager):
    methods = {
        "get": Get
    }
