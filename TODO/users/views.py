import sys

from django.http import Http404
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, UpdateModelMixin, CreateModelMixin
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.viewsets import ModelViewSet, GenericViewSet
from .models import User
from .serializers import UserModelSerializer, UserModelSerializer2


# Create your views here.

# class UserModelViewSet(ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserModelSerializer

class UserCustomViewSet(ListModelMixin, RetrieveModelMixin, UpdateModelMixin, CreateModelMixin, GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]


#добавил отдельный класс, чтобы ссылка из router'a осталась рабочей
class UserCustomViewSet2(ListModelMixin, RetrieveModelMixin, UpdateModelMixin, CreateModelMixin, GenericViewSet):
    queryset = User.objects.all()
    # serializer_class = UserModelSerializer
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return UserModelSerializer2
        elif self.request.version == '0.1':
            return UserModelSerializer
        #404 как контент API работает только с версиями через URLS и через QueryParameter
        else:
            raise Http404
