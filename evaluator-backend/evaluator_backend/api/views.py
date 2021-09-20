from django.http import HttpResponse
from rest_framework import generics

# Create your views here.

def test(request):
    return HttpResponse("teste")


class GetUser(generics.ListAPIView):
    pass


class CreateUser():
    pass


class GetMessages():
    pass


class SendMessage():
    pass