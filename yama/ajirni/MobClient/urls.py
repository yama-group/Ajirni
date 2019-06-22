from django.urls import path, include
from .views import (CreateItem, Search, LikeItem, ItemsRud, ItemsList, RegisterAPI,
                    LoginAPI, GetImages, getUserItems, getUserInfo, ItemsWithImages, UserLikesTest, Reviewss, user_recommendation_list)

urlpatterns = [

    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('additem/', CreateItem.as_view(), name="add"),
    path('rud/<int:pk>', ItemsRud.as_view(), name="rud"),
    # path('signUp/', signUp.as_view(), name="signUp"),
    path('all/', ItemsList.as_view(), name="list"),
    path('search/', Search.as_view(), name="search"),
    path('like/', LikeItem.as_view(), name="like"),
    path("images/", GetImages.as_view(), name="images"),
    path("userItems/", getUserItems.as_view(), name="userItems"),
    path("userInfo/", getUserInfo.as_view(), name="userInfo"),
    path("items/", ItemsWithImages.as_view(), name="ItemsWithImages "),
    path("vv/", UserLikesTest.as_view(), name="UserLikesTest, ChatUser"),
    path("recommendation/",  user_recommendation_list.as_view(),
         name="recommendation"),
    path("reviews/", Reviewss.as_view(), name="review"),

]
