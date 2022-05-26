from rest_framework import serializers
from .models import Shoe

 


class ShoeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shoe
        fields = ['id', 'brand', 'model', 'price', 'color', 'size', 'user_id']
        depth = 2
