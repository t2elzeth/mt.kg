from django.shortcuts import render
from django.views.generic.base import View
from django.http import HttpResponse


# Create your views here.
class HomepageView(View):
    def get(self, request):
        return render(request, 'homepage/index.html')