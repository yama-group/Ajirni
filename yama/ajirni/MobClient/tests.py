from django.test import TestCase
import unittest
from MobClient.models import CustomUser, Categories, Likes, Items, Images, Reviews, Cluster




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
                            item= fItem,
                            user= fUser,
                          )
                                  
  def test_likes (self):
      """CustomUsers are correctly identified"""

      fCategory = Categories.objects.create(
                                          name= 'car',
                                          description= 'cars for rent',
                                        )

      fUser = CustomUser.objects.create(
                                  username = 'ammar3',
                                  first_name = 'ammar',
                                  last_name = 'alk',
                                  email = 'ammar@gmail.com',
                                  password = '1234',
                                  phone = '123456789',
                                  image_url = 'img2.png',
                                      )

      item = Likes.objects.get(
                            name = "toyota",
                            condition = "new",
                            category = fCategory,
                            status = "Available",
                            confirmed = "true",
                            user = fUser,
                            )
      self.assertEqual(item.name,"toyota")

if __name__ == '__main__':
    unittest.main()