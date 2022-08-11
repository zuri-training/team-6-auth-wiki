# Google login with Django

This is a django app that allows you to login into any application using passwordless authentication. You'll need to configure this to your needs

## Install

Install the required dependencies:

    $ pip install -U Django Authlib requests

## Config

Create your app's OAuth Client at the your application's website, make sure to add `http://127.0.0.1:8000/auth/` into Authorized redirect URIs.

Fill the client ID and secret into `project/settings.py`, then run:

    $ python manage.py migrate

## Run

Start server with:

    $ python manage.py runserver

Then visit:

    http://127.0.0.1:8000/
