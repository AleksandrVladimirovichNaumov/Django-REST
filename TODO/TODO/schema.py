import graphene
from graphene_django import DjangoObjectType

from projects.models import Project, ToDo
from users.models import User


class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'


class ToDoType(DjangoObjectType):
    class Meta:
        model = ToDo
        fields = '__all__'


class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'


class Query(graphene.ObjectType):
    all_projects = graphene.List(ProjectType)
    all_todos = graphene.List(ToDoType)
    all_users = graphene.List(UserType)
    project_by_todo = graphene.List(ToDoType, todo_id=graphene.Int(required=False))

    def resolve_all_todos(root, info):
        return ToDo.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_project_by_todo(self, info, todo_id=None):
        """
        to test okease send graphqi request below

        {
          projectByTodo(todoId:1) {
            id
            name
            isActive
            createdBy{
              username
            }
            createDatetime
            updateDatetime
            project{
              id
              name
              workingGroup{
                username
              }
            }
          }
        }
        """
        if todo_id:
            return ToDo.objects.filter(id=todo_id)
        else:
            return ToDo.objects.all()


schema = graphene.Schema(query=Query)
