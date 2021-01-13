from django.forms import Form, ModelForm

from .base import BaseMethod


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
