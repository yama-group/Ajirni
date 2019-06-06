from django.urls import path
from .views import CreateItem


urlpatterns = [
    path('add/', CreateItem.as_view(), name="add")
]
