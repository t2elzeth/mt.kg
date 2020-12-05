import logging
import os

from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views.generic.base import View

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from nodejs.bindings import node_run

from . import models, serializers, permissions
from .forms import AddARForm
from .mixins import CustomLoginRequiredMixin

logging.basicConfig(
    filename=os.path.join(settings.BASE_DIR, 'add.log'),
    filemode='w',
    level=logging.INFO
)


class ArListView(generics.ListAPIView):
    queryset = models.AR.objects.all()
    serializer_class = serializers.ArListSerializer


class ArCreateView(generics.CreateAPIView):
    queryset = models.AR.objects.all()
    serializer_class = serializers.ArCreateSerializer
    permission_classes = [
        IsAuthenticated, permissions.IsSuperUser
    ]


class ArDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = serializers.ArDetailSerializer
    queryset = models.AR.objects.all()


class AddArView(CustomLoginRequiredMixin, View):
    allowed_image_exts = (
        '.png',
        '.jpg'
    )

    def get(self, request):
        form = AddARForm()
        context = {
            'form': form,
        }
        return render(request, 'ar/add.html', context)

    def post(self, request):
        form = AddARForm(request.POST, request.FILES)
        if form.is_valid():
            data = form.cleaned_data
            img = data.get('img', None)
            vid = data.get('video', None)

            logging.info(img.name)
            logging.info(vid.name)

            if img is None or vid is None:
                return HttpResponse('Something went wrong. Image or video is None')

            img_queryset = models.AR.objects.filter(img__endswith=img.name)
            if img_queryset:
                return HttpResponse('Image with that name already exists. Try to rename your image')

            vid_queryset = models.AR.objects.filter(video__endswith=vid.name)
            if vid_queryset:
                return HttpResponse('Video with that name already exists. Try to rename your image')

            _, img_ext = os.path.splitext(img.name)
            if img_ext.lower() not in self.allowed_image_exts:
                return HttpResponse('Invalid image type. Should be ' + ' or '.join(self.allowed_image_exts))

            if img.size < 50_000:
                return HttpResponse('Too small image')

            _, vid_ext = os.path.splitext(vid.name)
            if vid_ext.lower() != '.mp4':
                return HttpResponse('Invalid video type. Should be .mp4')

            form.save()
            logging.info('Form has been saved')

            img_path = os.path.join('../media/images', img.name)
            script_path = os.path.join(settings.BASE_DIR, 'generator/app.js')

            stderr, stdout = node_run(
                script_path,
                '-i',
                img_path,
            )
            logging.info('Node has run')
            logging.info(stderr)
            logging.info(stdout)
            return redirect('all_ar')
        else:
            return HttpResponse('Your form is invalid')


class Custom50SomView(View):
    def get(self, request):
        return render(request, 'ar/som50.html')


class CustomMTLogoView(View):
    def get(self, request):
        return render(request, 'ar/mtlogo.html')


class CustomQRProjectView(View):
    def get(self, request):
        return render(request, 'ar/qrproj.html')
