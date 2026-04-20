from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from rest_framework import status
from .models import Guide, GuideHistory
from .serializers import GuideSerializer

class GuideList(generics.ListCreateAPIView):
    queryset = Guide.objects.all()
    serializer_class = GuideSerializer

    def perform_create(self, serializer):
        guide = serializer.save()
        GuideHistory.objects.create(
            guide=guide,
            status=guide.status
        )

class GuideStatusUpdate(generics.UpdateAPIView):
    queryset = Guide.objects.all()
    serializer_class = GuideSerializer
    lookup_field = "id"

    def update(self, request, *args, **kwargs):
        guide = self.get_object()
        new_status = request.data.get("status")

        if new_status not in dict(Guide.STATUS_CHOICES):
            return Response(
                {"error": "Estado inválido"},
                status=status.HTTP_400_BAD_REQUEST
            )

        guide.status = new_status
        guide.save()

        # Crear nueva entrada en historial
        GuideHistory.objects.create(
            guide=guide,
            status=new_status
        )

        serializer = self.get_serializer(guide)
        return Response(serializer.data)
    
class GuideCreateView(generics.CreateAPIView):
    queryset = Guide.objects.all()
    serializer_class = GuideSerializer

    def perform_create(self, serializer):
        guide = serializer.save()

        # Crear entrada inicial en historial
        GuideHistory.objects.create(
            guide=guide,
            status=guide.status
        )