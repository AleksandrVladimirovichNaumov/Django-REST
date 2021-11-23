import djangorestframework_camel_case
from django.shortcuts import render

# Create your views here.
from djangorestframework_camel_case.render import CamelCaseJSONRenderer
from rest_framework.renderers import JSONRenderer
from rest_framework.viewsets import ModelViewSet

from projects.models import Project, ToDo
from projects.serializers import ProjectModelSerializer, ToDoModelSerializer


class ProjectModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer]
    queryset = Project.objects.all()
    serializer_class = ProjectModelSerializer


class ToDoModelViewSet(ModelViewSet):
    renderer_classes = [CamelCaseJSONRenderer]
    queryset = ToDo.objects.all()
    serializer_class = ToDoModelSerializer