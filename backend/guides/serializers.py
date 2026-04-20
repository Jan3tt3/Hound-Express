from rest_framework import serializers
from .models import Guide, GuideHistory

class HistoryEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = GuideHistory
        fields = ['date', 'status']


class GuideSerializer(serializers.ModelSerializer):
    history = HistoryEntrySerializer(many=True, read_only=True)
    lastUpdate = serializers.DateTimeField(read_only=True)

    class Meta:
        model = Guide
        fields = [
            'id',
            'client',
            'origin',
            'destination',
            'status',
            'lastUpdate',
            'history',
        ]
def create(self, validated_data):
    guide = Guide.objects.create(**validated_data)
    GuideHistory.objects.create(
        guide=guide,
        status=guide.status
    )
    return guide