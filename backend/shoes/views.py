from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Shoe
from .serializers import ShoeSerializer
 

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_shoes(request):
    shoes = Shoe.objects.all()
    serializer = ShoeSerializer(shoes, many=True)
    return Response(serializer.data)


@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_shoes(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ShoeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        shoes = Shoe.objects.filter(user_id=request.user.id)
        serializer = ShoeSerializer(shoes, many=True)
        return Response(serializer.data)
    