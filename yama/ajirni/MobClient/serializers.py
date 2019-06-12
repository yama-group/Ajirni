from rest_framework import serializers
from .models import Items, Likes, Images


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ('item_id', 'img_url')


class ItemsSerializer(serializers.ModelSerializer):
    """Serializer to map the Model instance into JSON format."""
    images = ImageSerializer(many=True)
    # images = serializers.RelatedField(many=True)

    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Items
        fields = ('id', 'name', 'description', 'condition', 'category_id', 'no_rooms',
                  'no_bathrooms', 'surface_area', 'furnished',
                  'location', 'price', 'floor_no', 'car_make', 'year_manufactured',
                  'no_killometers', 'fuel', 'color', 'transmission', 'quantity',
                  'status', 'confirmed', 'user_id', 'images')

    def create(self, validated_data):
        images_data = validated_data.pop('images')
        print(images_data)
        items = Items.objects.create(**validated_data)
        print(items.id, "tttttttttttttrrrrrrtrtrtrtrtrtrtrtrtrtrt")
        for image_data in images_data:
            items.images_data.add(image_data)
            # items.objects.create(item_id=items.id, **image_data)
        return items


# class UsersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields = ('id', 'first_name', 'last_name', 'email', 'phone', 'address',
#                   'location', 'password', 'image_url', 'role', 'confirm')


class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        """Meta class to map serializer's fields with the model fields."""
        model = Likes
        fields = ('item_id', 'user_id')
