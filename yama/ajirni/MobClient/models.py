from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    pass
    phone = models.CharField(max_length=50)
    image_url = models.TextField()


class Categories(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Items(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    condition = models.CharField(max_length=50)
    category_id = models.ForeignKey(Categories, on_delete=models.CASCADE)
    no_rooms = models.IntegerField(blank=True, default=0)
    no_bathrooms = models.IntegerField(blank=True, default=0)
    surface_area = models.IntegerField(blank=True, default=0)
    furnished = models.CharField(max_length=50, blank=True)
    location = models.TextField(blank=True)
    price = models.IntegerField()
    floor_no = models.IntegerField(blank=True, default=0)
    car_make = models.CharField(max_length=50, blank=True)
    year_manufactured = models.CharField(max_length=50, blank=True)
    no_killometers = models.IntegerField(blank=True)
    fuel = models.CharField(max_length=50, blank=True)
    color = models.CharField(max_length=50, blank=True)
    transmission = models.CharField(max_length=50, blank=True)
    quantity = models.IntegerField(blank=True)
    status = models.CharField(max_length=50)
    confirmed = models.CharField(max_length=50)
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    # images = models.TextField(blank=True)

    def __str__(self):
        return self.name


class Likes(models.Model):
    item_id = models.ForeignKey(
        Items, on_delete=models.CASCADE)
    user_id = models.ForeignKey(CustomUser, on_delete=models.CASCADE)


# class Confirms(models.Model):
#     item_id = models.IntegerField()
#     category_id = models.IntegerField()


class Images(models.Model):
    item_id = models.IntegerField(blank=True, default=0)
    # models.ForeignKey(
    #     Items, related_name='images', on_delete=models.CASCADE)
    img_url = models.TextField(blank=True)

    def __str__(self):
        return self.img_url
