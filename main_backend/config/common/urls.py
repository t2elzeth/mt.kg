from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', include('homepage.urls')),
    path('ar/', include('ar.urls')),
    path('api/v1/ar/', include("ar.api.urls"))
]
