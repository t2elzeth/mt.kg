from django.db import models
import os


# Create your models here.
class AR(models.Model):
    """Model for each AR project with its own photo and video"""
    title = models.CharField(max_length=255)
    img = models.ImageField(upload_to='images/', blank=True, null=True)
    video = models.FileField(upload_to='videos/', blank=True, null=True)

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
