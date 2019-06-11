from django.urls import path
from .views import CreateItem, Search, LikeItem, ItemsRud, ItemsList, signUp,Images

urlpatterns = [
    path('additem/', CreateItem.as_view(), name="add"),
    path('rud/<int:pk>', ItemsRud.as_view(), name="rud"),
    path('signUp/', signUp.as_view(), name="signUp"),
    path('all/', ItemsList.as_view(), name="list"),
    path('search/', Search.as_view(), name="search"),
    path('like/', LikeItem.as_view(), name="like"),
    path("images/<int:pk>",Images.as_view(),name="images")
]
