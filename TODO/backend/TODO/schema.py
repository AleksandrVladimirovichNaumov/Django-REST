import graphene
from django.utils.timezone import now
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
    project_by_todo = graphene.List(ProjectType, todo_id=graphene.Int(required=False))
    todos_by_project = graphene.List(ToDoType, project_id=graphene.Int(required=False))
    active_todos_by_assigned_user = graphene.List(ToDoType, user_id=graphene.Int(required=False))

    def resolve_all_todos(root, info):
        return ToDo.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_project_by_todo(self, info, todo_id=None):
        """
        для проверки
        {
          projectByTodo(todoId:1){
            id
            name
            gitLink
            workingGroup{
              username
            }
          }
        }
        """
        if todo_id:
            todo = ToDo.objects.get(id=todo_id)
            return Project.objects.filter(id=todo.project_id)
        else:
            return Project.objects.all()

    def resolve_todos_by_project(self, info, project_id=None):
        """
        для проверки
        {
          todosByProject(projectId: 1) {
            id
            name
            description
            createDatetime
            createdBy{
              username
            }
            updateDatetime
          }
        }
        """
        if project_id:
            return ToDo.objects.filter(project=project_id)
        else:
            return ToDo.objects.all()

    def resolve_active_todos_by_assigned_user(self, info, user_id=None):
        """
        для проверки

        """
        if user_id:
            return ToDo.objects.filter(is_active=True, assigned_to=user_id)
        else:
            return ToDo.objects.all()


class ToDoUpdateMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        name = graphene.String()
        description = graphene.String()
        is_active = graphene.Boolean()
        assigned_to = graphene.ID()
        update_datetime = graphene.DateTime()

    todo = graphene.Field(ToDoType)

    @classmethod
    def mutate(cls, root, info, id, is_active=None, name=None, desription=None, assigned_to=None):
        """
        Для проверки
        mutation updateTodo{
          updateTodo(id: 1, isActive: false, name: "TODO1_GraphQL", assignedTo: 50){
            todo{
              id
              name
              description
              updateDatetime
              assignedTo{
                id
                username
              }
              isActive
            }
          }
        }

        """
        todo = ToDo.objects.get(pk=id)
        if is_active != None:
            todo.is_active = is_active
        if name != None:
            todo.name = name
        if desription != None:
            todo.description = desription
        if assigned_to != None:
            todo.assigned_to = User.objects.get(pk=assigned_to)
        todo.update_datetime = now()
        todo.save()
        return ToDoUpdateMutation(todo=todo)


class ToDoCreateMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
        name = graphene.String()
        description = graphene.String()
        is_active = graphene.Boolean()
        project_id = graphene.ID()
        assigned_to_id = graphene.ID()
        created_by_id = graphene.ID()
        update_datetime = graphene.DateTime()
        create_datetime = graphene.DateTime()

    todo = graphene.Field(ToDoType)

    @classmethod
    def mutate(cls, root, info, name, created_by_id, project_id, description=None, assigned_to_id=None):
        """
        Для проверки
        mutation createTodo{
          createTodo(name: "created_TODO1_GraphQL", createdById: 50, projectId:1){
            todo{
              id
              name
              description
              updateDatetime
              assignedTo{
                id
                username
              }
              createdBy{
                id
                username
              }
              project{
                id
                name
              }
              isActive
            }
          }
        }

        """

        created_by = User.objects.get(pk=created_by_id)
        if description is None:
            description = 'Please add your description here.'
        if assigned_to_id is None:
            assigned_to = created_by
        else:
            assigned_to = User.objects.get(pk=assigned_to_id)

        todo = ToDo.objects.create(name=name, description=description, is_active=True, created_by=created_by,
                                   assigned_to=assigned_to, update_datetime=now(), create_datetime=now(),
                                   project_id=project_id)
        return ToDoCreateMutation(todo=todo)


class ToDoDeleteMutation(graphene.Mutation):
    class Arguments:
        todo_id = graphene.ID()

    todo = graphene.List(ToDoType)

    @classmethod
    def mutate(cls, root, info, todo_id):
        """
        для проверки
            mutation deleteTodo{
              deleteTodo(todoId:1){
                todo{
                  id
                  name
                  description
                }
              }
            }
        """
        ToDo.objects.get(pk=todo_id).delete()
        todo = ToDo.objects.all()
        return ToDoCreateMutation(todo=todo)


class Mutation(graphene.ObjectType):
    update_todo = ToDoUpdateMutation.Field()
    create_todo = ToDoCreateMutation.Field()
    delete_todo = ToDoDeleteMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
