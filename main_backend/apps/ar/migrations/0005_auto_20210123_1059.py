# Generated by Django 3.1.5 on 2021-01-23 10:59

import ar.storage
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ar', '0004_auto_20210116_0947'),
    ]

    operations = [
        migrations.AddField(
            model_name='ar',
            name='in_progress',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='ar',
            name='image',
            field=models.ImageField(default=False, storage=ar.storage.ImageStorage, upload_to=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='ar',
            name='video',
            field=models.FileField(default=False, upload_to='img-tracking/data/videos/'),
            preserve_default=False,
        ),
    ]
