from django.contrib.auth.hashers import make_password

from django.core.management import BaseCommand

from users.models import User


class Command(BaseCommand):
    # настройки СуперЮзера и тестовых юзеров
    user_template = {

        'name': 'NewUser',
        'password': 'NewUser',
        'email': 'NewUser@newuser.com'

    }

    def handle(self, *args, **options):
        for user_number in range(200):
            try:
                new_user = User()
                new_user.username = self.user_template['name'] + str(user_number + 1)
                new_user.password = make_password(self.user_template['password'])
                new_user.email = str(user_number + 1) + self.user_template['email']
                new_user.save()
                print(f'new user {new_user.username} was created')
                # удаляем экземпляр, чтобы не висел в памяти
                del new_user
            except Exception as e:
                # обработка исключения при повторном создании тестовых юзеров и суперюзера
                print(e)
