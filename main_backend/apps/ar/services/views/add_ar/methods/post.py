import logging
import os

from django.http import HttpResponse
from django.shortcuts import redirect

from ar.forms import AddARForm

ALLOWED_IMAGE_EXTENSIONS = (".png", ".jpg", ".jpeg")


def post(request):
    form = AddARForm(request.POST, request.FILES)
    if form.is_valid():
        instance = form.save(commit=False)
        instance.owner = request.user

        data = form.cleaned_data
        image = data.get("image")
        video = data.get("video")

        if image is None or video is None:
            return HttpResponse('Something went wrong. Image or video is None')

        _, image_ext = os.path.splitext(image.name)
        if image_ext.lower() not in ALLOWED_IMAGE_EXTENSIONS:
            return HttpResponse('Invalid image type. Should be ' + ' or '.join(ALLOWED_IMAGE_EXTENSIONS))

        _, video_ext = os.path.splitext(video.name)
        if video_ext.lower() != '.mp4':
            return HttpResponse('Invalid video type. Should be .mp4')

        # Send imagepath to nft-generator!
        instance.save()
        # image = instance.image
        # image_path = os.path.join('../media/images', img.name)
        # script_path = os.path.join(settings.BASE_DIR, 'generator/app.js')
        #
        # stderr, stdout = node_run(script_path, '-i', img_path)
        # logging.info('Node has run')
        # logging.info(stderr)
        # logging.info(stdout)
        return redirect('all_ar')
    else:
        return HttpResponse('Your form is invalid')
