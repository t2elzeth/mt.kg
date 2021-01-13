from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('all/', views.AllArView.as_view(), name='all_ar'),
    path('all/<str:id>/', views.ArDetailView.as_view(), name='detail_ar'),
    path('custom/<str:project_name>/', views.CustomProjectView.as_view()),
    path('add/', views.AddArView.as_view(), name='add_ar'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
