from django.urls import path
from .views import CreateItem


urlpatterns = [
    path('add/', CreateItem.as_view(), name="add")
    path('signUp/', signUp.as_view(), name="signUp")
]
