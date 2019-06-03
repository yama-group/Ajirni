from django.db import models


class Likes(models.Model):
    item_id = models.IntegerField()
    user_id = models.IntegerField()


class Confirms(models.Model):
    item_id = models.IntegerField()
    category_id = models.IntegerField()


class Images(models.Model):
    item_id = models.IntegerField()
    img_url = models.TextField(blank=True)


class Categories(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)


class Items(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    condition = models.CharField(max_length=50)
    category_id = models.IntegerField()
    no_rooms = models.IntegerField()
    no_bathrooms = models.IntegerField()
    surface_area = models.IntegerField()
    furnished = models.CharField(max_length=50)
    location = models.TextField(blank=True)
    price = models.IntegerField()
    floor_no = models.IntegerField()
    car_make = models.CharField(max_length=50)
    year_manufactured = models.CharField(max_length=50)
    no_killometers = models.IntegerField()
    fuel = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    transmission = models.CharField(max_length=50)
    quantity = models.IntegerField()
    status = models.CharField(max_length=50)
    confirmed = models.CharField(max_length=50)
    user_id = models.IntegerField()


class Users(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    address = models.TextField()
    location = models.TextField()
    password = models.TextField()
    image_url = models.TextField()
    role = models.CharField(max_length=50)
    confirm = models.CharField(max_length=50)
