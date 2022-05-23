from rest_framework import serializers
from .models import Shoe

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class ShoeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoe
        fields = ['id', 'make', 'model', 'price', 'user_id']
        depth = 1
