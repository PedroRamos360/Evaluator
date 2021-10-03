from rest_framework import generics, status
from rest_framework.response import Response
from django.forms.models import model_to_dict
from .models import Message, User, MessageFormat
from .serializers import UserSerializer, CreateUserSerializer, MessageSerializer
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
            user_id = len(users) + 1
            new_user = User(user_id, username, hashed_password)
            new_user.save()
            return Response(model_to_dict(new_user), status=status.HTTP_200_OK)
        return Response({'Error': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)



class GetMessages():
    pass


class SendMessage(generics.CreateAPIView):
    serializer_class = MessageSerializer
    queryset = ''
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            data = serializer.data
            messages = Message.objects.all()
            message_id = len(messages) + 1
            sender = data['sender']
            receiver = data['receiver']
            subject = data['subject']
            users = User.objects.filter(username=receiver)
            new_message = Message(message_id, sender, receiver, subject)
            user_receiver = users[0]
            m = MessageFormat(x=new_message, y=user_receiver)
            m.save()
            return Response(model_to_dict(user_receiver), status=status.HTTP_200_OK)
        return Response({'Error': 'Invalid Request'}, status=status.HTTP_400_BAD_REQUEST)
