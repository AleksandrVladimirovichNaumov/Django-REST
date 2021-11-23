from django.db import models

# Create your models here.
from django.utils.timezone import now

from users.models import User


class Project(models.Model):
    name = models.CharField(max_length=50)
    git_link = models.URLField(unique=True)
    working_group = models.ManyToManyField(User, verbose_name='working_group')

    def __str__(self):
        return self.name


class ToDo(models.Model):
    name = models.CharField(max_length=50)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='project')
    description = models.CharField(max_length=250)
    create_datetime = models.DateTimeField(default=now, editable=False)
    update_datetime = models.DateTimeField(default=now)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_by')
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name='assigned_to')
    is_active = models.BooleanField(default=True)
