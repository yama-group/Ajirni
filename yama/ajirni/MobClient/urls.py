from django.urls import path
from .views import ItemsRud, ItemsList, CreateItem


urlpatterns = [
    path('additem/', CreateItem.as_view(), name="add"),
    path('rud/<int:pk>', ItemsRud.as_view(), name="rud"),
    path('signUp/', signUp.as_view(), name="signUp"),
    path('all/', ItemsList.as_view(), name="list")
]
