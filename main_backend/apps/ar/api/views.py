from rest_framework import generics

from . import serializers
from .. import models


class ARListNotRenderedView(generics.ListAPIView):
    serializer_class = serializers.ARListSerializer
    queryset = models.AR.objects.filter(is_rendered=False)


class ARUpdateIsRendered(generics.UpdateAPIView):
    serializer_class = serializers.ARIsRenderedSerializer
    queryset = models.AR.objects.filter(is_rendered=False)

    def perform_update(self, serializer):
        pk = serializer.validated_data.id
        instance: models.AR = models.AR.objects.get(id=pk)
        instance.owner.email_user("Your AR has been rendered out!",
                                  "Your AR project is ready to use!")

        instance.is_rendered = True
        instance.save()
        serializer.save()
