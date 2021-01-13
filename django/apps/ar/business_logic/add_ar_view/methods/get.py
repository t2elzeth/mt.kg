from ar.forms import AddARForm
from library.business_logic.methods import BaseGetMethodWithTemplateRendering


class Get(BaseGetMethodWithTemplateRendering):
    template_name = "ar/add.html"

    def get_context(self) -> dict:
        return {'form': AddARForm()}
