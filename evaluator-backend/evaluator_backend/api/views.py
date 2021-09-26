from django.http import HttpResponse
from rest_framework import generics, status
from rest_framework.response import Response
from django.forms.models import model_to_dict
from .models import User
from .serializers import UserSerializer, CreateUserSerializer
from django.contrib.auth.hashers import make_password


class GetUsers(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CreateUser(generics.CreateAPIView):
    serializer_class = CreateUserSerializer
    queryset = ''   
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            data = serializer.data
            users = User.objects.all()
            username = data['username']
            hashed_password = make_password(data['password'])
            user_id = users[len(users)-1].id + 1
            new_user = User(user_id, username, hashed_password)
            new_user.save()
            return Response(model_to_dict(new_user), status=status.HTTP_200_OK)
        return Response({'Error': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)



class GetMessages():
    pass


class SendMessage():
    pass