from django.test import TestCase
import unittest
from MobClient.models import CustomUser, Categories, Likes, Items, Images, Reviews, Cluster
from django.urls import reverse, resolve



class CustomUserTestCase(TestCase):
    def setUp(self):
      CustomUser.objects.create(
                                username = 'ammar98',
                                first_name = 'ammar',
                                last_name = 'alk',
                                email = 'ammar@gmail.com',
                                password = '123',
                                phone = '12345678',
                                image_url = 'img.png',
                                )

    def test_CustomUsers(self):
        """CustomUsers are correctly identified"""
        username = CustomUser.objects.get(username="ammar98")
        self.assertEqual(username.password, '123')

class CategoriesTestCase(TestCase):

    def setUp(self):
      Categories.objects.create (
                                  name= 'car',
                                  description= 'cars for rent',
                                 )
                                  
    def test_Category (self):
      """CustomUsers are correctly identified"""
      name = Categories.objects.get(name="car")
      self.assertEqual(name.description,"cars for rent")


class ItemsTestCase(TestCase):

    def setUp(self):

      category = Categories.objects.create(
                                          name= 'car',
                                          description= 'cars for rent',
                                        )

      user = CustomUser.objects.create(
                                  username = 'ammar1',
                                  first_name = 'ammar',
                                  last_name = 'alk',
                                  email = 'ammar@gmail.com',
                                  password = '1234',
                                  phone = '123456789',
                                  image_url = 'img2.png',
                                      )
      Items.objects.create (
                            name = "toyota",
                            condition = "new",
                            category = category,
                            status = "Available",
                            confirmed = "true",
                            user = user,
                            )

                                  
    def test_Items (self):
      """CustomUsers are correctly identified"""
      itemName = Items.objects.get(name="toyota")
      self.assertEqual(itemName.condition,"new")


class LikesTestCase(TestCase):

  def setUp(self):
    fCategory = Categories.objects.create(
                                          name= 'car',
                                          description= 'cars for rent',
                                        )

    fUser = CustomUser.objects.create(
                                  username = 'ammar2',
                                  first_name = 'ammar',
                                  last_name = 'alk',
                                  email = 'ammar@gmail.com',
                                  password = '1234',
                                  phone = '123456789',
                                  image_url = 'img2.png',
                                      )

    fItem = Items.objects.create (
                            name = "toyota",
                            condition = "new",
                            category = fCategory,
                            status = "Available",
                            confirmed = "true",
                            user = fUser,
                            )
    
    Likes.objects.create (
                            id = 1,
                            item = fItem,
                            user = fUser,
                          )
                                  
  def test_likes (self):
      """CustomUsers are correctly identified"""

      item = Likes.objects.get(id=1)
      self.assertEqual(item.id,1)

class ImagesTestCase(TestCase):

    def setUp(self):

      category = Categories.objects.create(
                                          name= 'car',
                                          description= 'cars for rent',
                                        )

      user = CustomUser.objects.create(
                                  username = 'ammar98',
                                  first_name = 'ammar',
                                  last_name = 'alk',
                                  email = 'ammar@gmail.com',
                                  password = '1234',
                                  phone = '123456789',
                                  image_url = 'img2.png',
                                      )

      fItem = Items.objects.create (
                                    name = "toyota",
                                    condition = "new",
                                    category = category,
                                    status = "Available",
                                    confirmed = "true",
                                    user = user,
                                    )

      Images.objects.create (
                                  item= fItem,
                                  img_url= 'img.jpg',
                                 )
                                  
    def test_Category(self):
      """Images are correctly identified"""

      img = Images.objects.get(img_url='img.jpg')
      self.assertEqual(img.img_url,'img.jpg')


class ReviewsTestCase(TestCase):

    def setUp(self):

      fCategory = Categories.objects.create(
                                      name= 'car',
                                      description= 'cars for rent',
                                    )

      fUser = CustomUser.objects.create(
                                  username = 'ammar22',
                                  first_name = 'ammar',
                                  last_name = 'alk',
                                  email = 'ammar@gmail.com',
                                  password = '1234',
                                  phone = '123456789',
                                  image_url = 'img2.png',
                                      )

      fItem = Items.objects.create (
                            name = "toyota",
                            condition = "new",
                            category = fCategory,
                            status = "Available",
                            confirmed = "true",
                            user = fUser,
                            )
    
      Reviews.objects.create (
                            item = fItem,
                            user = fUser,
                            user_name = "jojo",
                            textReview = "gr8 experience",
                            starsReview = 5,
                          )
      
    def test_Category(self):
      """Images are correctly identified"""
      username = Reviews.objects.get(user_name="jojo")
      self.assertEqual(username.textReview,"gr8 experience")



# class clusterTestCase(TestCase):

#     def setUp(self):

#       fUser = CustomUser.objects.create(
#                                   username = 'ammar32',
#                                   first_name = 'ammar',
#                                   last_name = 'alk',
#                                   email = 'ammar@gmail.com',
#                                   password = '1234',
#                                   phone = '123456789',
#                                   image_url = 'img2.png',
#                                       )
    
#       Cluster.objects.create (
#                             id = 1,
#                             name = "fofo",
#                             users = fUser,
#                           )
      
#     def test_Category(self):
#       """Images are correctly identified"""
#       clusterName = Cluster.objects.get(name="fofo")
#       self.assertEqual(clusterName.id,1)


if __name__ == '__main__':
    unittest.main()