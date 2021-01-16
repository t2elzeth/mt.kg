from django.urls import path

from . import views

urlpatterns = [
    path("not_rendered/all/", views.ARListNotRenderedView.as_view()),
    path("not_rendered/update/<str:pk>/", views.ARUpdateIsRendered.as_view())
]
