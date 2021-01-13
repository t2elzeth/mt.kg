from ar.forms import AddARForm
from library.django_services_management.methods import BaseGetMethodWithTemplateRendering


class Get(BaseGetMethodWithTemplateRendering):
    template_name = "ar/add.html"

    def get_context(self) -> dict:
        return {'form': AddARForm()}
