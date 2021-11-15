from django.contrib.auth.hashers import make_password

from django.core.management import BaseCommand

from users.models import User


class Command(BaseCommand):
    # настройки СуперЮзера и тестовых юзеров
    users = {
        'Superuser': {
            'name': 'Superuser',
            'password': 'Super!',
            'email': 'Superuser@superuser.com'
        },
        'Test_user_1': {
            'name': 'Test_user_1',
            'password': '1',
            'email': 'Test_user_1@superuser.com'
        },
        'Test_user_2': {
            'name': 'Test_user_2',
            'password': '2',
            'email': 'Test_user_2@superuser.com'
        },

    }

    def handle(self, *args, **options):
        for user in self.users:
            try:
                new_user = User()
                new_user.username = self.users[user]['name']
                new_user.password = make_password(self.users[user]['password'])
                new_user.email = self.users[user]['email']
                if self.users[user]['name'] == 'Superuser':
                    new_user.is_superuser = True
                    new_user.is_staff = True
                new_user.save()
                # удаляем экземпляр, чтобы не висел в памяти
                del new_user
                print(f'new {self.users[user]["name"]} was created. \nlogin: {self.users[user]["name"]}\npassword: {self.users[user]["password"]}\n')
            except Exception as e:
                #обработка исключения при повторном создании тестовых юзеров и суперюзера
                print(e)
                print(f'{self.users[user]["name"]} exists. \nlogin: {self.users[user]["name"]}\npassword: {self.users[user]["password"]}\n')
