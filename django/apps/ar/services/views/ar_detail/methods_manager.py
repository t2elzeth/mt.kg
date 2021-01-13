from library.django_services_management import MethodsManager

from .methods import Get


class ARDetailViewMethodsManager(MethodsManager):
    methods = {
        "get": Get
    }
