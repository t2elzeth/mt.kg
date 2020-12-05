from rest_framework import serializers

from . import models


class ArCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AR
        fields = ['title', 'img', 'video']


class ArListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AR
        fields = '__all__'


class ArDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AR
        fields = '__all__'
