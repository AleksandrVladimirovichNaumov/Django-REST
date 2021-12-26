import django_filters
from django_filters import CharFilter
from django_filters.rest_framework import FilterSet

from projects.models import Project, ToDo


class ProjectFilter(FilterSet):
    name = CharFilter(lookup_expr='contains')

    class Meta:
        model = Project
        fields = ['name']


class ToDoFilter(FilterSet):
    name = CharFilter(lookup_expr='contains')


    class Meta:
        model = ToDo
        fields = ['project']
