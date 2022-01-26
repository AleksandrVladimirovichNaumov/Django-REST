"""TODO URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from graphene_django.views import GraphQLView
from rest_framework import permissions
from rest_framework.authtoken import views
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from projects.views import ProjectModelViewSet, ToDoModelViewSet, ToDoFilterModelViewSet, ProjectFilterModelViewSet
# from users.views import UserModelViewSet
from users.views import UserCustomViewSet, UserCustomViewSet2

schema_view = get_schema_view(
    openapi.Info(
        title="ToDo",
        default_version='0.1',
        description="Documentation to out project",
        contact=openapi.Contact(email="admin@admin.local"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

# роуты для апи
router = DefaultRouter()
# router.register('users', UserModelViewSet)
router.register('projects', ProjectModelViewSet, basename='project')
router.register('todos', ToDoModelViewSet, basename='todo')
router.register('users', UserCustomViewSet, basename='user')
# router.register('after', ToDoFilterModelViewSet)

# роут для поиска проджектов на фронтенде
router_search = DefaultRouter()
router_search.register('project_name', ProjectFilterModelViewSet, basename='project_search')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # versioning by urls
    # path('api/<str:version>/users/', UserCustomViewSet2.as_view({'get': 'list'})),

    # versioning by namespace
    # path('api/0.1/users/', include('users.urls', namespace='0.1')),
    # path('api/0.2/users/', include('users.urls', namespace='0.2')),

    # versioning by queryset
    path('api/version/users/', UserCustomViewSet2.as_view({'get': 'list'})),
    # path('filters/', include(router.urls))

    path(r'swagger/<str:format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

    # for graphene requests
    path('graphql/', GraphQLView.as_view(graphiql=True)),
    path('', TemplateView.as_view(template_name='index.html')),

    # for text search
    path('filters/', include(router_search.urls))

]
