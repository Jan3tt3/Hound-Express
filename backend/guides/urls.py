from django.contrib import admin
from django.urls import path
from .views import GuideList

urlpatterns = [
    path('admin/', admin.site.urls),
     path("guides/", GuideList.as_view(), name="guide-list"),
]
   
