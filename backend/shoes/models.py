from cgi import print_exception
from django.db import models
from authentication.models import User

# Create your models here.




class Shoe(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    brand = models.CharField(max_length=30)
    model = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    color = models.CharField(max_length=30)
    size = models.DecimalField(max_digits=5, decimal_places=2)