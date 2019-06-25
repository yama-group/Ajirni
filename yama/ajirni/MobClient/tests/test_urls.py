from django.urls import reverse, resolve


class TestUrls:

    def test_register_url(self):
      path = reverse('register')
      assert resolve(path).view_name == 'register'

    def test_login_url(self):
      path = reverse('login')
      assert resolve(path).view_name == 'login'   

    def test_add_url(self):
      path = reverse('add')
      assert resolve(path).view_name == 'add'

    def test_rud_url(self):
      path = reverse('rud', kwargs={'pk':1})
      assert resolve(path).view_name == 'rud'

    def test_list_url(self):
      path = reverse('list')
      assert resolve(path).view_name == 'list'   
          

    def test_allusers_url(self):
      path = reverse('allusers')
      assert resolve(path).view_name == 'allusers'

    def test_search_url(self):
      path = reverse('search')
      assert resolve(path).view_name == 'search'

    def test_like_url(self):
      path = reverse('like')
      assert resolve(path).view_name == 'like'

    def test_images_url(self):
      path = reverse('images')
      assert resolve(path).view_name == 'images'

    def test_userItems_url(self):
      path = reverse('userItems')
      assert resolve(path).view_name == 'userItems'

    def test_userInfo_url(self):
      path = reverse('userInfo')
      assert resolve(path).view_name == 'userInfo'

    def test_ItemsWithImages_url(self):
      path = reverse('ItemsWithImages')
      assert resolve(path).view_name == 'ItemsWithImages'

    def test_UserLikesTest_ChatUser_url(self):
      path = reverse('UserLikesTest, ChatUser')
      assert resolve(path).view_name == 'UserLikesTest, ChatUser'

    def test_recommendation_url(self):
      path = reverse('recommendation')
      assert resolve(path).view_name == 'recommendation'     

    def test_review_url(self):
      path = reverse('review')
      assert resolve(path).view_name == 'review'                                                        