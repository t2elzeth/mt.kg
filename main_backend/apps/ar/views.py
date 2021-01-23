import os

from django.forms import ModelForm
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic.base import View

from socketio_app.networking import emit_new_project
from .forms import AddARForm
from .mixins import CustomLoginRequiredMixin
from .models import AR
from .services.views.custom_project import load_json_from_static, get_context


class AllArView(CustomLoginRequiredMixin, View):
    def get(self, request):
        return render(request, "ar/projects-page.html", {"ars": AR.objects.filter(owner=request.user)})


class ArDetailView(View):
    def get(self, request, id):
        # TODO: Refactor JS in <script> tag of template
        return render(self.request, "ar/detail.html", {"ar": AR.objects.get(id=id)})


class AddArView(CustomLoginRequiredMixin, View):
    ALLOWED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"]
    ALLOWED_VIDEO_EXTENSIONS = [".mp4"]

    def get(self, request):
        return render(request, "ar/add.html", {"form": AddARForm()})

    def set_instance_user(self, form: ModelForm):
        """Set `owner` field of instance"""
        instance = form.save(commit=False)
        instance.owner = self.request.user
        instance.save()
        return instance

    @staticmethod
    def valid_extension(filename, possible_extensions):
        _, file_ext = os.path.splitext(filename)
        return file_ext in possible_extensions

    def post(self, request):
        form = AddARForm(request.POST, request.FILES)
        if not form.is_valid():
            return HttpResponse('Your form is invalid')

        # Validate image extensions
        if not self.valid_extension(form.cleaned_data.get("image").name, self.ALLOWED_IMAGE_EXTENSIONS):
            return HttpResponse('Invalid image type. Should be ' + ' or '.join(self.ALLOWED_IMAGE_EXTENSIONS))

        # Validate video extensions
        if not self.valid_extension(form.cleaned_data.get("video").name, self.ALLOWED_VIDEO_EXTENSIONS):
            return HttpResponse('Invalid image type. Should be ' + ' or '.join(self.ALLOWED_VIDEO_EXTENSIONS))

        self.set_instance_user(form)
        # Tell nft-generator about new project
        emit_new_project()

        # Tell user that everything is OK.
        return render(request, "ar/ok.html")


class CustomProjectView(View):
    def get(self, request, project_name):
        context = get_context(load_json_from_static("custom_projects.json"), project_name)
        if not context:
            HttpResponse("Requested project was not found")

        return render(request, 'ar/custom-project.html', context=context)
