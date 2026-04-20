from django.db import models
from django.utils import timezone


# Create your models here.
class Guide(models.Model):
    STATUS_CHOICES = [
        ('Pendiente', 'Pendiente'),
        ('En tránsito', 'En tránsito'),
        ('Entregada', 'Entregada'),
    ]

    id = models.AutoField(primary_key=True)
    trackingNumber = models.CharField(max_length=15, unique=True)
    origin = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    createdAt = models.DateTimeField(default=timezone.now)
    updatedAt = models.DateTimeField(auto_now=True)
    currentStatus = models.CharField(max_length=20, choices=STATUS_CHOICES)

    def __str__(self):
        return self.trackingNumber

class GuideHistory(models.Model):
    id = models.AutoField(primary_key=True)
    guide = models.ForeignKey(Guide, on_delete=models.CASCADE, related_name="status_history")
    status = models.CharField(max_length=20, choices=Guide.STATUS_CHOICES)
    timestamp = models.DateTimeField(auto_now=True)
    updatedBy = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.guide.trackingNumber} - {self.status}"

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=20)
    createdAt = models.DateTimeField(default=timezone.now)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name 
