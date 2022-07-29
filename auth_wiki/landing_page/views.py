from django.shortcuts import render
from django.views import View

# Create your views here.


# class Home(View):
def home_view(request):
    return render(request, 'index.html')

def dashboard(request):
    return render(request, 'account/index.html')