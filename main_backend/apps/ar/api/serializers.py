from rest_framework import serializers

from .. import models


class ARListSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AR
        fields = [
            "id", "img"
        ]


class ARIsRenderedSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.AR
        fields = ["id"]
