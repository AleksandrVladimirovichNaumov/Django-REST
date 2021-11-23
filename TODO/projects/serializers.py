from rest_framework.renderers import JSONRenderer
from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer

from projects.models import Project, ToDo
from users.serializers import UserModelSerializer


class ProjectModelSerializer(HyperlinkedModelSerializer):

    working_group = UserModelSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'




class ToDoModelSerializer(HyperlinkedModelSerializer):


    project = ProjectModelSerializer()
    created_by = UserModelSerializer()
    assigned_to = UserModelSerializer()

    class Meta:
        model = ToDo
        fields = '__all__'