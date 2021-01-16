import logging
import os
import json

from django.http import HttpResponse
from django.shortcuts import render, redirect

from django.conf import settings
from django.views.generic.base import View

from nodejs.bindings import node_run

from library.django_services_management.views import View as CustomView

from .services.views import (
    AddARViewMethodsManager,
    ARDetailViewMethodsManager,
    AllARViewMethodsManager,
    CustomProjectsViewMethodsManager
)

from .forms import AddARForm
from .mixins import CustomLoginRequiredMixin
from .models import AR
from django.contrib.staticfiles.finders import find


class AllArView(CustomLoginRequiredMixin, CustomView):
    methods_manager = AllARViewMethodsManager


class ArDetailView(CustomView):
    methods_manager = ARDetailViewMethodsManager


class AddArView(CustomLoginRequiredMixin, CustomView):
    methods_manager = AddARViewMethodsManager


class CustomProjectView(CustomView):
    methods_manager = CustomProjectsViewMethodsManager
