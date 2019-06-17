from rest_framework import serializers
from rest_framework.serializers import SerializerMethodField

# from django.contrib.auth.models import User
from .models import Items, Likes, Images, CustomUser
from django.contrib.auth import authenticate


# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'first_name',
                  'last_name', 'phone', 'image_url')


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'first_name',
                  'last_name', 'phone', 'image_url', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # username, email, password,first_name, last_name, phone, image_url
        user = CustomUser.objects.create_user(
            validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            phone=validated_data['phone'],
            image_url=validated_data['image_url']
        )
        return user


# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, request):
        user = authenticate(
            request, username=request['username'], password=request['password'])
        print(user)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ('item_id', 'img_url')


class ItemsSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""
    # images = ImageSerializer(many=True)
    # images = serializers.RelatedField(many=True)

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Items
        fields = '__all__'


class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Likes
        fields = ('item_id', 'user_id')


class ItemsImagesSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()

    class Meta:
        model = Items
        fields = (
            'name',
            'description',
            'condition',
            'category',
            'no_rooms',
            'no_bathrooms',
            'surface_area',
            'furnished',
            'location',
            'price',
            'floor_no',
            'car_make',
            'year_manufactured',
            'no_killometers',
            'fuel',
            'color',
            'transmission',
            'quantity',
            'status',
            'confirmed',
            'user',
            'images'
        )

    def get_images(self, obj):
        print(obj)
        return ImageSerializer(Images.objects.filter(item=obj.id), many=True).data


class itemslikedSerializer(serializers.ModelSerializer):
    itemss = serializers.SerializerMethodField()

    class Meta:
        model = Likes
        fields = ('user_id', 'itemss')

    def get_itemss(self, obj):
        return ItemsSerializer(Items.objects.filter(id=obj.item), many=True).data


class userlikesSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField()

    class Meta:
        model = CustomUser
        fields = ('phone',
                  'image_url', 'email', 'phone', 'likes')

    def get_likes(self, obj):
        return LikesSerializer(Likes.objects.filter(user_id=obj.id), many=True).data
