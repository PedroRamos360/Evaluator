from django.urls import path
from .views import *

urlpatterns = [
    path('get-users', GetUsers.as_view()),
    path('create-user', CreateUser.as_view())
]