import os

from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class AR(models.Model):
    """Model for each AR project with its own photo and video"""
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="ars")
    title = models.CharField(max_length=255)
    img = models.ImageField(upload_to='images/', blank=True, null=True)
    video = models.FileField(upload_to='videos/', blank=True, null=True)
    is_rendered = models.BooleanField(default=False)

    def __str__(self):
        return self.title

    def videoname(self):
        return os.path.basename(self.video.name)

    def imgname(self):
        name_with_ext = os.path.basename(self.img.name)
        name_without_ext, ext = os.path.splitext(name_with_ext)
        return name_without_ext.split('_')[0]

    class Meta:
        verbose_name_plural = 'AR проекты'
