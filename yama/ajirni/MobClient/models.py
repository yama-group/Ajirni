from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User


class CustomUser(AbstractUser):
    pass
    phone = models.CharField(max_length=250)
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
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)
    no_rooms = models.CharField(max_length=50, blank=True)
    no_bathrooms = models.CharField(max_length=50, blank=True)
    surface_area = models.CharField(max_length=50, blank=True)
    furnished = models.CharField(max_length=50, blank=True)
    location = models.TextField(blank=True)
    price = models.CharField(max_length=50, blank=True)
    floor_no = models.CharField(max_length=50, blank=True)
    car_make = models.CharField(max_length=50, blank=True)
    year_manufactured = models.CharField(max_length=50, blank=True)
    no_killometers = models.CharField(max_length=50, blank=True)
    fuel = models.CharField(max_length=50, blank=True)
    color = models.CharField(max_length=50, blank=True)
    transmission = models.CharField(max_length=50, blank=True)
    quantity = models.CharField(max_length=50, blank=True)
    status = models.CharField(max_length=50)
    confirmed = models.CharField(max_length=50)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    # images = models.TextField(blank=True)

    # def average_rating(self):
    #     all_ratings = map(lambda x: x.starsReview, self.reviews_set.all())
    #     return np.mean(list(all_ratings))

    def __str__(self):
        return self.name


class Likes(models.Model):
    item = models.ForeignKey(
        Items, related_name="itemss", on_delete=models.CASCADE)
    user = models.ForeignKey(
        CustomUser, related_name="likes", on_delete=models.CASCADE)


class Images(models.Model):
    item = models.ForeignKey(
        Items, related_name="images", on_delete=models.CASCADE)
    img_url = models.TextField(blank=True)

    def __str__(self):
        return self.img_url


class Reviews(models.Model):
    # RATING_CHOICES = (
    #     (1, '1'),
    #     (2, '2'),
    #     (3, '3'),
    #     (4, '4'),
    #     (5, '5'),
    # )
    # item = models.ForeignKey(Items, on_delete=models.CASCADE)
    # user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    # # user_name = models.CharField(max_length=100)
    # textReview = models.CharField(max_length=200)
 # starsReview = models.IntegerField(choices=RATING_CHOICES)
    item = models.ForeignKey(
        Items, related_name="reviews", on_delete=models.CASCADE)
    user = models.ForeignKey(
        CustomUser, related_name="likess", on_delete=models.CASCADE)
    user_name = models.CharField(max_length=100, blank=True)
    textReview = models.CharField(max_length=1000, blank=True)
    starsReview = models.IntegerField(blank=True)

    def __str__(self):
        return self.textReview


class Cluster(models.Model):
    name = models.CharField(max_length=100)
    users = models.ManyToManyField(CustomUser)

    def get_members(self):
        return "\n".join([u.username for u in self.users.all()])
