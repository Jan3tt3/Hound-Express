from django.db import models
import uuid
from django.db import models


# Create your models here.
class Guide(models.Model):
    STATUS_CHOICES = [
        ('Pendiente', 'Pendiente'),
        ('En tránsito', 'En tránsito'),
        ('Entregada', 'Entregada'),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.CharField(max_length=200)
    origin = models.CharField(max_length=200)
    destination = models.CharField(max_length=200)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default='Pendiente'
    )

    created_at = models.DateTimeField(auto_now_add=True)
    lastUpdate = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Guide {self.id}"
    
class GuideHistory(models.Model):
    guide = models.ForeignKey(
        Guide,
        related_name="history",
        on_delete=models.CASCADE
    )
    status = models.CharField(
        max_length=20,
        choices=Guide.STATUS_CHOICES
    )
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.guide.id} - {self.status}"