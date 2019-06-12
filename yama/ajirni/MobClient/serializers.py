from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Items, Likes#, Users
from django.contrib.auth import authenticate


# class UsersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields = ('id', 'first_name', 'last_name', 'email', 'phone', 'address',
#                   'location', 'password', 'image_url', 'role', 'confirm')


class LoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self,data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError('Incorrect Credentials')


# User Serializer
class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email')

# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = User.objects.create_user(
        validated_data['username'],
        validated_data['email'],
        validated_data['password']
    )

    return user

# Login Serializer
class LoginSerializer(serializers.Serializer):
  email = serializers.CharField()
  password = serializers.CharField()

  def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
      return user
    raise serializers.ValidationError("Incorrect Credentials")


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


        

class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Likes
        fields = ('item_id', 'user_id')
