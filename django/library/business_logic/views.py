import inspect

from django.views.generic.base import View as BaseView

from .methods import BaseMethod


class View(BaseView):
    methods_manager = NotImplemented

    def __init__(self, **kwargs):
        self.methods_manager.set_methods(self)
        super(View, self).__init__(**kwargs)

    def dispatch(self, request, *args, **kwargs):
        # Try to dispatch to the right method; if a method doesn't exist,
        # defer to the error handler. Also defer to the error handler if the
        # request method isn't on the approved list.
        if request.method.lower() in self.http_method_names:
            handler = getattr(self, request.method.lower())

            if inspect.isclass(handler) and issubclass(handler, BaseMethod):
                return handler(request, *args, **kwargs)()
            return handler(request, *args, **kwargs)

        handler = self.http_method_not_allowed
        return handler(request, *args, **kwargs)

    def __init_subclass__(cls, **kwargs):
        methods_manager = getattr(cls, "methods_manager")
        if methods_manager is NotImplemented:
            raise NotImplementedError("`methods_manager` is not implemented yet")
