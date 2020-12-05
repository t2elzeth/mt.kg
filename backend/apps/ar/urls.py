from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('all/', views.ArListView.as_view(), name='all_ar'),
    path('add/', views.ArCreateView.as_view(), name='add_ar'),
    path('all/<str:pk>/', views.ArDetailView.as_view(), name='detail_ar'),

    path('custom/50s/', views.Custom50SomView.as_view()),
    path('custom/mtlogo/', views.CustomMTLogoView.as_view()),
    path('custom/qr/', views.CustomQRProjectView.as_view()),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
