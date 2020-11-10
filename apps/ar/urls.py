from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from .views import AllArView, ArDetailView, AddArView, Custom50SomView, CustomMTLogoView

urlpatterns = [
    path('all/', AllArView.as_view(), name='all_ar'),
    path('all/<str:id>/', ArDetailView.as_view(), name='detail_ar'),
    path('custom/50s/', Custom50SomView.as_view()),
    path('custom/mtlogo/', CustomMTLogoView.as_view()),
    path('add/', AddArView.as_view(), name='add_ar'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
