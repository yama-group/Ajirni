from rest_framework import serializers
from .models import Items
from .models import Users


class ItemsSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Items
        fields = ('id', 'name', 'description', 'condition', 'category_id', 'no_rooms',
                  'no_bathrooms', 'surface_area', 'furnished',
                  'location', 'price', 'floor_no', 'car_make', 'year_manufactured',
                  'no_killometers', 'fuel', 'color', 'transmission', 'quantity',
                  'status', 'confirmed', 'user_id')


class UsersSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Users
        fields = ('first_name', 'last_name', 'email', 'phone', 'address', 'location',
                  'password', 'image_url', 'role', 'confirm')
