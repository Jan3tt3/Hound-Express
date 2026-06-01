from django.db import models
from django.utils import timezone
from django.contrib.auth import get_user_model
User = get_user_model()


# Create your models here.
class Guide(models.Model):
    STATUS_CHOICES = [
        ('Pendiente', 'Pendiente'),
        ('En tránsito', 'En tránsito'),
        ('Entregada', 'Entregada'),
    ]

    id = models.AutoField(primary_key=True)
    trackingNumber = models.CharField(max_length=25, unique=True)
    client = models.CharField(max_length=100)
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    createdAt = models.DateTimeField(default=timezone.now)
    updatedAt = models.DateTimeField(auto_now=True)
    currentStatus = models.CharField(max_length=20, choices=STATUS_CHOICES)

    def __str__(self):
        return self.trackingNumber

class GuideHistory(models.Model):
    id = models.AutoField(primary_key=True)
    guide = models.ForeignKey(
        Guide,
        on_delete=models.CASCADE,
        related_name="status_history"
    )
    status = models.CharField(
        max_length=20,
        choices=Guide.STATUS_CHOICES
    )
    timestamp = models.DateTimeField(auto_now_add=True)
    updatedBy = models.CharField( max_length=10)
    
    def __str__(self):
        return f"{self.guide.trackingNumber} - {self.status}"