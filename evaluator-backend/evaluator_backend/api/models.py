from django.db import models
import json

class Message(models.Model):
    sender = models.CharField(max_length=32, unique=False)
    receiver = models.CharField(max_length=32, unique=False)
    subject = models.CharField(max_length=64, unique=False)

    def toJson(self):
        return json.dumps(self, default=lambda o: o.__dict__)


class User(models.Model):
    username = models.CharField(max_length=32, unique=True)
    password = models.CharField(max_length=256, unique=False)
    messages = models.ManyToManyField(Message)
