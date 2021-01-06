from django import forms

from .models import AR


class AddARForm(forms.ModelForm):
    class Meta:
        model = AR
        fields = '__all__'
