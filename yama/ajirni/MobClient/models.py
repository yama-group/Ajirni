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

    def __str__(self):
        return self.img_url
     

class Categories(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)


class Items(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    condition = models.CharField(max_length=50)
    category_id = models.IntegerField()
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
    user_id = models.IntegerField()
    images=models.TextField(blank=True)
    


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
    
