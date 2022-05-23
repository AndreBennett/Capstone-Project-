from django.urls import path, include
from shoes import views


urlpatterns = [
    path('', views.user_shoes),
    path('all/', views.get_all_shoes),
]
