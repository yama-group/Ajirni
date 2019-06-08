from django.urls import path
from .views import CreateItem, Search, LikeItem


urlpatterns = [
    path('add/', CreateItem.as_view(), name="add"),
    path('search/', Search.as_view(), name="search"),
    path('like/', LikeItem.as_view(), name="like")
]
