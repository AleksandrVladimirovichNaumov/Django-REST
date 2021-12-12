from django.urls import path

from users.views import UserCustomViewSet2

app_name = 'users'
urlpatterns = [
    path('', UserCustomViewSet2.as_view({'get': 'list'})),
]
