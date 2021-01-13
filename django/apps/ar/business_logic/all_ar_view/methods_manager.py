from library.business_logic import MethodsManager

from .methods import Get


class AllARViewMethodsManager(MethodsManager):
    methods = {
        "get": Get
    }
