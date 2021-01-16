import json

from django.contrib.staticfiles.finders import find
from django.http import HttpResponse
from django.shortcuts import render


def get(request, project_name):
    with open(find("custom_projects.json")) as f:
        projects = json.load(f)

    context = projects.get(project_name)
    if context is None:
        return HttpResponse("Requested project was not found")

    return render(request, 'ar/custom-proj.html', context=context)
