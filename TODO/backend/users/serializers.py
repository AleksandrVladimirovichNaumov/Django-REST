from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer

from .models import User


class UserModelSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'email']


class UserModelSerializer2(ModelSerializer):
    class Meta:
        model = User
        fields = ['is_superuser', 'is_staff']
