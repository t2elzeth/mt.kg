from django.shortcuts import render

from library.business_logic.methods import BaseGetMethod

from ar.models import AR


class Get(BaseGetMethod):
    def main(self):
        ar = AR.objects.get(id=self.id)
        return render(self.request, "ar/detail.html", {"ar": ar})
