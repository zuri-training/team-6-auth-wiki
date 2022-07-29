from django.urls import path
from . import views
urlpatterns = [
    # path('', views.Home.as_view(), 'home')
    path('', views.home_view),
    path('account/', views.dashboard),

]
