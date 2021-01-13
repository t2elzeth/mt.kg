from django.shortcuts import render

from .base import BaseMethod


class BaseGetMethod(BaseMethod):
    pass


class BaseGetMethodWithTemplateRendering(BaseGetMethod):
    template_name: str = NotImplemented

    def get_context(self) -> dict:
        raise NotImplementedError("get_context() is not implemented yet")

    def __call__(self) -> render:
        return render(self.request, self.template_name, self.get_context())

    def __init_subclass__(cls, **kwargs):
        if getattr(cls, "template_name") is NotImplemented:
            raise NotImplementedError("`template_name` is not implemented yet")
