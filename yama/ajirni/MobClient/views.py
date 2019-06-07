from django.shortcuts import render
from rest_framework import generics
from .serializers import ItemsSerializer
from .models import Items

# Create your views here.


class CreateItem(generics.ListCreateAPIView):
    """This class defines the create behavior of our rest api."""
    queryset = Items.objects.all()
    serializer_class = ItemsSerializer

    def perform_create(self, serializer):
        """Save the post data when creating a new Item."""
        serializer.save()


class ItemsRud(generics.RetrieveUpdateDestroyAPIView):
    """This class handles the http GET, PUT and DELETE requests."""

    queryset = Items.objects.all()
    serializer_class = ItemsSerializer


class ItemsList(generics.ListCreateAPIView):
    """This class defines the retrieve behavior of all instances."""
    queryset = Items.objects.all()
    serializer_class = ItemsSerializer
