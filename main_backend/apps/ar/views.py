import os

from django.forms import ModelForm
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views.generic.base import View

from .forms import AddARForm
from .mixins import CustomLoginRequiredMixin
from .models import AR
from .services.views.custom_project import load_json_from_static, get_context


class AllArView(CustomLoginRequiredMixin, View):
    def get(self, request):
        return render(request, "ar/projects-page.html", {"ars": AR.objects.all()})


class ArDetailView(View):
    def get(self, request, id):
        return render(self.request, "ar/detail.html", {"ar": AR.objects.get(id=id)})


class AddArView(CustomLoginRequiredMixin, View):
    ALLOWED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png"]

    def get(self, request):
        return render(request, "ar/add.html", {"form": AddARForm()})

    def set_instance_user(self, form: ModelForm):
        instance = form.save(commit=False)
        instance.user = self.request.user
        return instance

    def post(self, request):
        form = AddARForm(request.POST, request.FILES)
        if not form.is_valid():
            return HttpResponse('Your form is invalid')

        image = form.cleaned_data.get("image")
        video = form.cleaned_data.get("video")
        if image is None or video is None:
            return HttpResponse('Something went wrong. Image or video is None')

        _, image_ext = os.path.splitext(image.name)
        if image_ext.lower() not in self.ALLOWED_IMAGE_EXTENSIONS:
            return HttpResponse('Invalid image type. Should be ' + ' or '.join(self.ALLOWED_IMAGE_EXTENSIONS))

        _, video_ext = os.path.splitext(video.name)
        if video_ext.lower() != '.mp4':
            return HttpResponse('Invalid video type. Should be .mp4')

        # Send imagepath to nft-generator!
        instance = self.set_instance_user(form)
        instance.save()
        image = instance.image
        print(image.name)
        return redirect('all_ar')


class CustomProjectView(View):
    def get(self, request, project_name):
        context = get_context(load_json_from_static("custom_projects.json"), project_name,
                              lambda: HttpResponse("Requested project was not found"))
        return render(request, 'ar/custom-proj.html', context=context)
