from django.shortcuts import render
from rest_framework import generics, permissions
from django.views.generic.detail import DetailView
from .serializers import (ItemsImagesSerializer, ItemsSerializer, LikesSerializer,
                          itemslikedSerializer, UserSerializer, RegisterSerializer,
                          LoginSerializer, ImageSerializer, userlikesSerializer, ReviewsSerializer)
from .models import Items, Likes, Images, CustomUser, Reviews, Cluster
from django.http import HttpResponse
from rest_framework.response import Response
from knox.models import AuthToken
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse
from .suggestions import update_clusters
import json
from django.db.models import Avg
import datetime


# import requests
from django.shortcuts import get_object_or_404

# Register API
class RegisterAPI(generics.CreateAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = AuthToken.objects.create(user)[1]
        print(token)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": token
        })


# Login API
class LoginAPI(generics.CreateAPIView):
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


class CreateItem(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""
    queryset = Items.objects.all()
    serializer_class = ItemsSerializer

    def perform_create(self, serializer):
        """Save the post data when creating a new Item."""
        serializer.save()


class Search(generics.ListAPIView):
    serializer_class = ItemsImagesSerializer

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
        user_id = self.request.query_params.get('user_id', None)
        item_id = self.request.query_params.get('item_id', None)

        item = Items.objects.get(id=item_id)
        user = CustomUser.objects.get(id=user_id)
        like = Likes(item=item, user=user)
        like.save()
        queryset = Likes.objects.filter(user_id__exact=user_id)
        return queryset


class ItemsRud(generics.RetrieveUpdateDestroyAPIView):
    """This class handles the http GET, PUT and DELETE requests."""

    queryset = Items.objects.all()
    serializer_class = ItemsSerializer


class ItemsList(generics.ListAPIView):
    """This class defines the retrieve behavior of all instances."""
    serializer_class = ItemsImagesSerializer

    def get_queryset(self):
        queryset = Items.objects.all()

        return queryset


class getUsers(generics.ListAPIView):
    """This class defines the retrieve behavior of all instances."""
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = CustomUser.objects.all()
        return queryset


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
        item_id = self.request.query_params.get("id", None)
        queryset = Images.objects.filter(item__exact=item_id)
        # queryset = Images.objects.all()
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


class ItemsWithImages(generics.ListCreateAPIView):
    """This class defines the retrieve behavior of all instances."""
    serializer_class = ItemsImagesSerializer

    def get_queryset(self):
        item_id = self.request.query_params.get('item_id', None)
        if (item_id):
            queryset = Items.objects.filter(id=item_id)
            return queryset
        else:
            queryset = Items.objects.all()
            return queryset


class UserLikesTest(generics.ListCreateAPIView):
    """This class defines the retrieve behavior of all instances."""
    serializer_class = userlikesSerializer
    queryset = Items.objects.all()

    # queryset = CustomUser.objects.filter(id=user_id)
    # return queryset

# item create reviews api


class Reviewss(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""
    # queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer


    def get_queryset(self):
        item_id = self.request.query_params.get('item_id', None)
        queryset = Reviews.objects.filter(item=item_id)
        average = Reviews.objects.all().aggregate(Avg('starsReview'))
        print(average)
        return queryset


   
    def perform_create(self, serializer):

        text_Review = self.request.data.get("textReview", None)
        stars_Review = self.request.data.get("starsReview", None)
        item_id = self.request.data.get("item", None)
        userId = self.request.data.get("user", None)
        username = self.request.data.get("user_name", None)
        item = Items.objects.get(id=item_id)
        user = CustomUser.objects.get(id=userId)
        print(self.request)
        review = Reviews(textReview = text_Review,
                         starsReview = stars_Review,
                         item = item,
                         user = user, 
                         user_name = username,
                         )
        review.save()
        update_clusters()


  


# def add_review(request, item_id):
#     item = get_object_or_404(Items, pk=item_id)
#     starsReview = request.query_params.get('starsReview', None)
#     textReview = request.query_params.get('textReview', None)
#     user_name = request.user.username
#     review = Reviews()
#     review.item = item
#     review.user_name = user_name
#     review.starsReview = starsReview
#     review.textReview = textReview
#     review.pub_date = datetime.datetime.now()
#     review.save()
#     update_clusters()


class user_recommendation_list(generics.ListCreateAPIView):
    serializer_class = ItemsSerializer

    def get_queryset(self):
            # user_name=request.user.username).prefetch_related('item')
        user_name = self.request.query_params.get('user_name', None)
        user_reviews = Reviews.objects.filter(
            user_name=user_name).prefetch_related('item')
        user_reviews_item_ids = set(map(lambda x: x.item.id, user_reviews))
        try:
                    # username=request.user.username).cluster_set.first().name
            user_cluster_name = \
                CustomUser.objects.get(
                    username=user_name).cluster_set.first().name
        except:
            update_clusters()
            # username=request.user.username).cluster_set.first().name
            user_cluster_name = \
                CustomUser.objects.get(
                    username=user_name).cluster_set.first().name \
                .exclude(username=user_name).all()

        user_cluster_other_members = \
            Cluster.objects.get(name=user_cluster_name).users.exclude(username=user_name).all()

        print(user_cluster_other_members, "gggggggg")
        other_members_usernames = set(
            map(lambda x: x.username, user_cluster_other_members))

        other_users_reviews = \
            Reviews.objects.filter(user_name__in=other_members_usernames) \
            .exclude(item__id__in=user_reviews_item_ids)
        other_users_reviews_item_ids = set(
            map(lambda x: x.item.id, other_users_reviews))

        item_list = Items.objects.filter(id__in=other_users_reviews_item_ids)
        # sorted(
        #     list(Items.objects.filter(id__in=other_users_reviews_item_ids)), key=lambda x: x.average_rating(), reverse=True)
        print(item_list)
        return item_list
