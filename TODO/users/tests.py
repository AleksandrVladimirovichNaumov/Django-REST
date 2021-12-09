import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import UserCustomViewSet
from django.contrib.auth import get_user_model


# Create your tests here.

class TestUserViewSet(TestCase):
    url = '/api/users/'

    def setUp(self) -> None:
        pass

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
        user = User.objects.create_user(username='test_user_for_client', email='test_user_for_client@fara.com')
        client = APIClient()
        response = client.get(f'{self.url}{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
