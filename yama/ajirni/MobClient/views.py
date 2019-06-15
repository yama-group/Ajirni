from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import ItemsSerializer, LikesSerializer, UserSerializer, RegisterSerializer, LoginSerializer, ImageSerializer
from .models import Items, Likes, Images, CustomUser
from django.http import HttpResponse
from rest_framework.response import Response
from knox.models import AuthToken


# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = AuthToken.objects.create(user)[1]
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })


# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token = AuthToken.objects.create(user)[1]
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })


# class signUp(generics.ListCreateAPIView):
#     """This class defines the create behavior of our rest api."""
#     queryset = Users.objects.all()
#     serializer_class = UsersSerializer

#     def perform_create(self, serializer):
#         #Create New User
#         print(self.queryset)
#         user = serializer.save()

        # #Generate Token for User
        # token = Token.objects.create(user)
        # return Response({'detail':'User has been created with token: ' + token.key})

# class signIn(generics.GenericAPIView):
#     serializer_class = LoginSerializer

#     def perform_create(self, serializer):
#         #Create New User
#         user = serializer.validated_data
#         #Generate Token for User
#         token = Token.objects.create(user)
#         return Response({'detail':'User has been created with token: ' + token.key})


class CreateItem(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""
    # queryset = Items.objects.all()
    serializer_class = ItemsSerializer

    # def perform_create(self, serializer):
    #     """Save the post data when creating a new Image."""
        # iteminfo = self.request.data.get("itemInfo", None)
        # img_urls = self.request.data.get("images", None)
        # item = Items.objects.get(id=item_id)
        # image = Images(item=item, img_url=img_url)
        # image.save()
    def perform_create(self, serializer):
        """Save the post data when creating a new Item."""
        serializer.save()


class Search(generics.ListAPIView):
    serializer_class = ItemsSerializer

    def get_queryset(self):
        """
        Optionally serach fields,
        by filtering against query parameters in the URL.
        """
        queryset = Items.objects.all()
        status = self.request.query_params.get('status', 'available')
        confirmed = self.request.query_params.get('confirmed', 'True')
        name = self.request.query_params.get('name', '')
        description = self.request.query_params.get('description', '')
        condition = self.request.query_params.get('condition', '')
        category_id = self.request.query_params.get('category_id', 2)
        no_rooms = self.request.query_params.get('no_rooms', '')
        no_bathrooms = self.request.query_params.get('no_bathrooms', '')
        surface_area = self.request.query_params.get('surface_area', '')
        furnished = self.request.query_params.get('furnished', '')
        location = self.request.query_params.get('location', '')
        price = self.request.query_params.get('price', '')
        floor_no = self.request.query_params.get('floor_no', '')
        car_make = self.request.query_params.get('car_make', '')
        year_manufactured = self.request.query_params.get(
            'year_manufactured', '')
        fuel = self.request.query_params.get('fuel', '')
        color = self.request.query_params.get('color', '')
        transmission = self.request.query_params.get('transmission', '')

        queryset = queryset.filter(
            status__icontains=status,
            confirmed__icontains=confirmed,
            name__icontains=name,
            description__icontains=description,
            condition__icontains=condition,
            category_id__exact=category_id,
            no_rooms__icontains=no_rooms,
            no_bathrooms__icontains=no_bathrooms,
            surface_area__icontains=surface_area,
            furnished__icontains=furnished,
            location__icontains=location,
            price__icontains=price,
            floor_no__icontains=floor_no,
            car_make__icontains=car_make,
            year_manufactured__icontains=year_manufactured,
            fuel__icontains=fuel,
            color__icontains=color,
            transmission__icontains=transmission
        )
        return queryset


class LikeItem(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""
    queryset = Likes.objects.all()

    serializer_class = LikesSerializer

    def perform_create(self, serializer):
        """add like for item"""
        serializer.save()

    def get_queryset(self):
        user_id = self.request.query_params.get('user_id', None)
        queryset = Likes.objects.filter(user_id__exact=user_id)
        return queryset


class ItemsRud(generics.RetrieveUpdateDestroyAPIView):
    """This class handles the http GET, PUT and DELETE requests."""

    queryset = Items.objects.all()
    serializer_class = ItemsSerializer


class ItemsList(generics.ListCreateAPIView):
    """This class defines the retrieve behavior of all instances."""
    queryset = Items.objects.all()
    serializer_class = ItemsSerializer


class GetImages(generics.ListCreateAPIView):
    serializer_class = ImageSerializer

    def perform_create(self, serializer):
        """Save the post data when creating a new Image."""
        item_id = self.request.data.get("item_id", None)
        img_url = self.request.data.get("img_url", None)
        item = Items.objects.get(id=item_id)
        image = Images(item=item, img_url=img_url)
        image.save()

    def get_queryset(self):
        item_id = self.request.query_params.get("item_id", None)
        queryset = Images.objects.filter(item_id__exact=item_id)
        return queryset


class getUserItems(generics.ListAPIView):
    serializer_class = ItemsSerializer

    def get_queryset(self):
        user_id = self.request.query_params.get('user_id', None)
        queryset = Items.objects.filter(user_id__exact=user_id)
        return queryset


class getUserInfo(generics.ListAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        user_id = self.request.query_params.get('user_id', None)
        queryset = CustomUser.objects.filter(id__exact=user_id)
        return queryset
