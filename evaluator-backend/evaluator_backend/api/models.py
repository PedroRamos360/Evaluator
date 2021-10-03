from django.db import models


class Message(models.Model):
    sender = models.CharField(max_length=32, unique=False)
    receiver = models.CharField(max_length=32, unique=False)
    subject = models.CharField(max_length=64, unique=False)


class User(models.Model):
    username = models.CharField(max_length=32, unique=True)
    password = models.CharField(max_length=256, unique=False)
    messages = models.ManyToManyField(Message, through='MessageFormat')


class MessageFormat(models.Model):
    x = models.ForeignKey(Message, on_delete=models.CASCADE)
    y = models.ForeignKey(User, on_delete=models.CASCADE)

    



