from django.db import models

class Message(models.Model):
    sender = models.CharField(max_length=50, unique=False)
    receiver = models.CharField(max_length=50, unique=False)
    subject = models.CharField(max_length=100, unique=False)
    content = models.CharField(max_length=500, unique=False)


class User(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=256, unique=False)