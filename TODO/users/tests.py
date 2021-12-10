import json
from django.test import TestCase
from mixer.auto import mixer
from rest_framework import status
from rest_framework.test import APIRequestFactory, APIClient, APISimpleTestCase, APITestCase

from .views import UserCustomViewSet
from django.contrib.auth import get_user_model


# Create your tests here.

class TestUserViewSet(TestCase):

    def setUp(self) -> None:
        self.url = '/api/users/'

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get(self.url)
        view = UserCustomViewSet.as_view({'get': 'list'})
        response = view(request)

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_user(self):
        factory = APIRequestFactory()
        request = factory.post(
            self.url,
            {
                'username': 'testAdmin',
                'email': 'testAdmin@testAdmin.com',
            },
            format='json'
        )
        view = UserCustomViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_user_confirmation(self):
        # так как AUTH_USER_MODEL является кастомной моделью, надо создать модель User
        User = get_user_model()
        #user = User.objects.create_user(username='test_user_for_client', email='test_user_for_client@fara.com')
        user = mixer.blend(User)
        client = APIClient()
        response = client.get(f'{self.url}{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_user_login(self):
        User = get_user_model()
        User.objects.create_user(username='test_user_for_client', email='test_user_for_client@fara.com',
                                        password='Password1!')
        client = APIClient()
        response = client.login(username='test_user_for_client', password='Password1!')
        self.assertEqual(response, True)
        client.logout()


class TestPalindrome(APISimpleTestCase):
    def test_palindrome(self):
        palindrome = 'аргентинаманитнегра'
        self.assertEqual(palindrome, palindrome[::-1])


class TestUserViewSet2(APITestCase):

    def setUp(self) -> None:
        self.User = get_user_model()
        self.user = self.User.objects.create_user(username='test_user_for_client', email='test_user_for_client@fara.com',
                                            password='Password1!')

        self.url = '/api/users/'
        self.repeats = 50

    def test_login_attack(self):
        for i in range(self.repeats):
            response = self.client.login(username='test_user_for_client', password='Password1!')
            self.assertEqual(response, True)
            self.client.logout()

    def test_double_login_without_logout(self):
        """
        Проверяем, что можно залогиниться второй раз без
        """
        self.client.login(username='test_user_for_client', password='Password1!')
        response = self.client.get(f'{self.url}{self.user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        user2 = self.User.objects.create_user(username='test_user2_for_client',
                                              email='test_user2_for_client@fara.com',
                                              password='Password2!')
        self.client.login(username='test_user2_for_client', password='Password2!')
        response = self.client.get(f'{self.url}{user2.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
