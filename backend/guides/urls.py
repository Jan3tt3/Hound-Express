from django.contrib import admin
from django.urls import path
from .views import GuideList, GuideStatusUpdate, GuideCreateView

urlpatterns = [
    path("guides/", GuideList.as_view(), name="guide-list-create"),
    path("guides/<uuid:id>/status/", GuideStatusUpdate.as_view()),

]
   
