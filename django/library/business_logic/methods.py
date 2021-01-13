from abc import ABC

from django.forms import ModelForm, Form
from django.shortcuts import render

from .errors import MustReturnNone


class BaseMethod(ABC):
    def __init__(self, request, *args, **kwargs):
        self.request = request
        for arg in args:
            setattr(self, self.__prettify_attribute(arg), arg)

        for k, v in kwargs.items():
            setattr(self, self.__prettify_attribute(k), v)

    @staticmethod
    def __prettify_attribute(value: str):
        return value.lower().replace(" ", "_")

    def main(self):
        raise NotImplementedError("main() is not implemented yet")

    def __call__(self):
        return self.main()


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


class BasePostMethod(BaseMethod):
    pass


class BasePostMethodWithForm(BasePostMethod):
    form_class: Form or ModelForm = NotImplemented

    def __init__(self, request, *args, **kwargs):
        self.form = self.form_class(request.POST, request.FILES)
        if self.Meta.check_validity:
            self.is_valid = self.form.is_valid()
            self.data = self.form.cleaned_data

        super(BasePostMethodWithForm, self).__init__(request, *args, **kwargs)

    def __init_subclass__(cls, **kwargs):
        if getattr(cls, "form_class") is NotImplemented:
            raise NotImplementedError("Attribute `form_class` has not been implemented yets")

    class Meta:
        check_validity = False
