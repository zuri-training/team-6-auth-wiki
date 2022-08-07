from django.contrib import messages
from django.urls import reverse_lazy
from django.contrib.auth.models import User
from django.views.generic import DetailView
from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from .forms import NewUserForm, UserUpdateForm
from django.views.generic.edit import DeleteView
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout


# Create your views here.


@login_required(login_url="login")
def home(request):
    return render(request, "home_template")


def isLoggedIn(request):
    # Check if user is logged in
    if request.user.is_authenticated:
        return redirect("home")
    else:
        return render(request, "register_template")


def register(request):
    # Register a new user
    if request.method == "POST":
        form = NewUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "success_message")
            return redirect("home")
        messages.error(request, "error_message")
    form = NewUserForm()
    return render(request, "register_template", {"register_form": form})


def login(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"login_success_message")
                return redirect("home")
            else:
                messages.error(request, "login_error_message")
        else:
            messages.error(request, "login_error_message")
    form = AuthenticationForm()
    return render(request, "login_template", {"login_form": form})


def logout(request):
    # Logout user
    logout(request)
    messages.info(request, "logout_success_message")
    return redirect("home")


def getUser(request):
    # Get the currently logged in user
    user = {
        "username": request.user.username,
        "email": request.user.email,
        "last_login": request.user.last_login,
        "account_created": request.user.date_joined,
    }
    return render(request, "home_template", {"user": user})


def getUserId(request):
    # Get the currently logged in user's id
    user_id = request.user.id
    return render(request, "home_template", {"user_id": user_id})


class getUserByUsername(DetailView):
    template_name = "users/profile.html"
    queryset = User.objects.all()

    def get_object(self):
        UserName = self.kwargs.get("username")
        return get_object_or_404(User, username=UserName)


def getAllUsers(request):
    # Get all users
    User = get_user_model
    users = User.objects.all()
    return render(request, "home_template", {"allusers": users})


@login_required(login_url="login")
def profile(request):
    return render(request, "profile_template")


@login_required(login_url="login")
def updateUser(request):
    # Update User data
    if request.method == "POST":
        form = UserUpdateForm(request.POST, instance=request.user)
        if form.is_valid:
            form.save()
            messages.success(request, f"update_success_message")
            return redirect("profile")
        else:
            form = UserUpdateForm(instance=request.user)
    return render(request, "profile_template", {"update_form": form})


class deleteUser(DeleteView):
    # Delete User
    model = User
    success_url = reverse_lazy["register_template"]
