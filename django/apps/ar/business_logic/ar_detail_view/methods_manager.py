from library.business_logic import MethodsManager

from .methods import Get


class ARDetailViewMethodsManager(MethodsManager):
    methods = {
        "get": Get
    }
