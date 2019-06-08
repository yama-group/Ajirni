from django.shortcuts import render
from rest_framework import generics
from .serializers import ItemsSerializer
from .serializers import UsersSerializer
from .models import Items
from .models import Users

# Create your views here.

class CreateItem(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""
    queryset = Items.objects.all()
    serializer_class = ItemsSerializer

    def perform_create(self, serializer):
        """Save the post data when creating a new Item."""
        serializer.save()

class signUp(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

    def perform_create(self, serializer):
        """Save the post data when creating a new Item."""
        serializer.save()

