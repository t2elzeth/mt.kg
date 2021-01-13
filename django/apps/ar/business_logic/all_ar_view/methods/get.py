from django.shortcuts import render

from library.business_logic.methods import BaseGetMethod

from ar.models import AR


class Get(BaseGetMethod):
    def main(self):
        ars = AR.objects.all()
        return render(self.request, 'ar/projects-page.html', {'ars': ars})
