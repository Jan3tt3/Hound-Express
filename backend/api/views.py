from django.shortcuts import render
from rest_framework import viewsets
from guides.models import Guide
from .serializers import GuideSerializer
from .pagination import CustomPagination


class GuideViewSet(viewsets.ModelViewSet):
    queryset = Guide.objects.all()
    serializer_class = GuideSerializer
    pagination_class = CustomPagination