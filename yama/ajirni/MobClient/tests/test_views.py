# from django.test import RequestFactory
# from django.urls import reverse
# from MobClient.views import RegisterAPI
# from django.contrib.auth.models import User
# from mixer.backend.django import mixer
# import pytest


# @pytest.mark.django_db
# class TestViews: 

#     def test_user_registered(self):
#       path = reverse('register')
#       request = RequestFactory().get(path)
#       request.user = mixer.blend(User)

#       response = RegisterAPI(request)
#       assert response.status_code == 200