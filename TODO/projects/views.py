import djangorestframework_camel_case
from django.shortcuts import render

# Create your views here.
from djangorestframework_camel_case.render import CamelCaseJSONRenderer
from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from projects.filters import ProjectFilter, ToDoFilter
from projects.models import Project, ToDo
from projects.serializers import ProjectModelSerializer, ToDoModelSerializer


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10


class ToDoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer
    # pagination_class = ProjectLimitOffsetPagination
    # filterset_class = ProjectFilter


class ToDoModelViewSet(ModelViewSet):
    renderer_classes = [CamelCaseJSONRenderer, BrowsableAPIRenderer]
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer
    # pagination_class = ToDoLimitOffsetPagination
    # filterset_class = ToDoFilter

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.is_active = False
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ToDoFilterModelViewSet(ToDoModelViewSet):

    def get_queryset(self):
        after = self.request.query_params.get('after')
        return ToDo.objects.filter(create_datetime__gte=after)

# http://127.0.0.1:8000/filters/after/?after=2021-11-23%2011:51:41.243446