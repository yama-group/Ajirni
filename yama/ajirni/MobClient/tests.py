from django.test import TestCase
from django.test import SimpleTestCase
import unittest
from MobClient.models import CustomUser, Categories, Likes, Items, Images, Reviews, Cluster
from django.urls import reverse, resolve
import json
from django.test import Client



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


class UrlTesting(SimpleTestCase):

  def test_register_url(self):
    path = reverse('register')
    self.assertEqual(resolve(path).view_name , 'register') 


  def test_login_url(self):
    path = reverse('login')
    self.assertEqual(resolve(path).view_name , 'login')


  def test_add_url(self):
    path = reverse('add')
    self.assertEqual(resolve(path).view_name , 'add')


  def test_rud_url(self):
    path = reverse('rud', kwargs={'pk':1})
    self.assertEqual(resolve(path).view_name , 'rud') 


  def test_list_url(self):
    path = reverse('list')
    self.assertEqual(resolve(path).view_name , 'list') 


  def test_allusers_url(self):
    path = reverse('allusers')
    self.assertEqual(resolve(path).view_name , 'allusers') 


  def test_search_url(self):
    path = reverse('search')
    self.assertEqual(resolve(path).view_name , 'search') 


  def test_like_url(self):
    path = reverse('like')
    self.assertEqual(resolve(path).view_name , 'like') 


  def test_images_url(self):
    path = reverse('images')
    self.assertEqual(resolve(path).view_name , 'images') 


  def test_userItems_url(self):
    path = reverse('userItems')
    self.assertEqual(resolve(path).view_name , 'userItems') 


  def test_userInfo_url(self):
    path = reverse('userInfo')
    self.assertEqual(resolve(path).view_name , 'userInfo') 


  def test_ItemsWithImages_url(self):
    path = reverse('ItemsWithImages')
    self.assertEqual(resolve(path).view_name , 'ItemsWithImages') 


  def test_UserLikesTest_ChatUser_url(self):
    path = reverse('UserLikesTest, ChatUser')
    self.assertEqual(resolve(path).view_name , 'UserLikesTest, ChatUser') 


  def test_recommendation_url(self):
    path = reverse('recommendation')
    self.assertEqual(resolve(path).view_name , 'recommendation') 


  def test_review_url(self):
    path = reverse('review')
    self.assertEqual(resolve(path).view_name , 'review') 



class TestViews(TestCase):


  def setUp(self):
    self.client = Client()
    self.register_url = reverse('register')
    self.login_url = reverse('login')
    self.addItem_url = reverse('add')
    self.fCategory = Categories.objects.create(
                                name= 'car',
                                description= 'cars for rent',
                              )

    self.fUser = CustomUser.objects.create(
                                username = 'ammar223',
                                first_name = 'ammar',
                                last_name = 'alk',
                                email = 'ammar@gmail.com',
                                password = '1234',
                                phone = '123456789',
                                image_url = 'img2.png',
                                    )


  def test_register_api_POST(self):
    response = self.client.post(self.register_url,{
                                  'username': 'ammar22',
                                  'first_name': 'ammar',
                                  'last_name': 'alk',
                                  'email': 'ammar@gmail.com',
                                  'password': '1234',
                                  'phone': '123456789',
                                  'image_url': 'img2.png',
    })

    self.assertEquals(response.status_code,200)


  def test_login_api_POST(self):
    response = self.client.post(self.login_url,{
                                  'username': 'ammar22',
                                  'first_name': 'ammar',
                                  'last_name': 'alk',
                                  'email': 'ammar@gmail.com',
                                  'password': '1234',
                                  'phone': '123456789',
                                  'image_url': 'img2.png',
    })

    self.assertEquals(response.status_code,400)

  def test_addItem_POST(self):
    response = self.client.post(self.addItem_url,{
                            'name': "toyota",
                            'condition': "new",
                            'category': self.fCategory,
                            'status': "Available",
                            'confirmed': "true",
                            'user': self.fUser,
    })

    self.assertEquals(response.status_code,400)




if __name__ == '__main__':
    unittest.main()