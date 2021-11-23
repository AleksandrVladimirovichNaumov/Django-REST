from django.db import models

# Create your models here.
from django.utils.timezone import now

from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=50)
    git_link = models.URLField(unique=True)
    working_group = models.ManyToManyField(User)


class ToDo(models.Model):
    name = models.CharField(max_length=50)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    description = models.CharField(max_length=250)
    create_datetime = models.DateTimeField(default=now, editable=False)
    update_datetime = models.DateTimeField(default=now)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)
