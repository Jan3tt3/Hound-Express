from rest_framework import serializers
from .models import Guide, GuideHistory


class HistoryEntrySerializer(serializers.ModelSerializer):

    class Meta:
        model = GuideHistory
        fields = [
            'id',
            'status',
            'timestamp',
            'updatedBy'
        ]


class GuideSerializer(serializers.ModelSerializer):

    status_history = HistoryEntrySerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Guide
        fields = [
            'id',
            'trackingNumber',
            'client',
            'origin',
            'destination',
            'createdAt',
            'updatedAt',
            'currentStatus',
            'status_history'
        ]

    def create(self, validated_data):

        guide = Guide.objects.create(**validated_data)

        GuideHistory.objects.create(
            guide=guide,
            status=guide.currentStatus,
            updatedBy="Sistema"
        )

        return guide

    def update(self, instance, validated_data):

        old_status = instance.currentStatus

        instance = super().update(instance, validated_data)

        new_status = instance.currentStatus

        # Registrar cambio de estado
        if old_status != new_status:

            GuideHistory.objects.create(
                guide=instance,
                status=new_status,
                updatedBy="Sistema"
            )

        return instance