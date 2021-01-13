from library.business_logic import MethodsManager

from .methods import get, post


class CustomProjectsViewMethodsManager(MethodsManager):
    methods = {
        "get": get,
    }
