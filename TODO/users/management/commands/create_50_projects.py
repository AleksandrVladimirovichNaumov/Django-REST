import random

from django.contrib.auth.hashers import make_password

from django.core.management import BaseCommand

from projects.models import Project
from users.models import User


class Command(BaseCommand):
    # настройки СуперЮзера и тестовых юзеров
    project_template = {

        'name': 'NewProject',
        'git_link': f'https://github.com/NewProject'

    }

    def handle(self, *args, **options):
        # представляем юзеров ввиде списка
        users = list(User.objects.all())
        for project_number in range(50):
            try:
                new_project = Project()
                new_project.name = self.project_template['name'] + str(project_number + 1)
                new_project.git_link = self.project_template['git_link'] + str(project_number + 1) + '/Project' + str(
                    project_number + 1)
                new_project.save()
                new_project.working_group.set(random.sample(users, 3))
                new_project.save()
                print(f'new project {new_project.name} was created')
                # удаляем экземпляр, чтобы не висел в памяти
                del new_project
            except Exception as e:
                # обработка исключения
                print(e)
