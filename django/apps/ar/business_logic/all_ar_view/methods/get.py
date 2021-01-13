from library.business_logic.methods import BaseGetMethodWithTemplateRendering

from ar.models import AR


class Get(BaseGetMethodWithTemplateRendering):
    template_name = "ar/projects-page.html"

    def get_context(self) -> dict:
        return {"ars": AR.objects.all()}
