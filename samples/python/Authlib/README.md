# Python Authentication Library &mdash; Authlib (Django)

The ultimate Python library in building OAuth and OpenID Connect servers. It is designed from low level specifications implementations to high level frameworks integrations, to meet the needs of everyone.

Authlib is compatible with Python3.6+.

## Get Started

### Introduction
Authlib is the ultimate Python library in building OAuth and OpenID Connect clients and servers. It offers generic implementations of RFCs, including OAuth 1.0, OAuth 2.0, JWT and many more. It becomes a Monolithic project that powers from low-level specification implementation to high-level framework integrations.

#### Monolithic
Authlib is a monolithic library. While being monolithic, it keeps everything synchronized, from spec implementation to framework integrations, from client requests to service providers.

The benefits are obvious; it won’t break things. When specifications changed, implementation will change too. Let the developers of Authlib take the pain, users of Authlib should not suffer from it.

You don’t have to worry about monolithic, it doesn’t cost your memory. If you don’t import a module, it won’t be loaded. We don’t madly import everything into the root __init__.py.

#### Extendable
Authlib is designed as flexible as possible. Since it is built from low-level specification implementation to high-level framework integrations, if a high level can’t meet your needs, you can always create one for your purpose based on the low-level implementation.

Most of the cases, you don’t need to do so. Extendable has been taken into account from the start of the project. Take OAuth 2.0 server as an example, instead of a pre-configured server, Authlib takes advantage of register.
```bash
authorization_server.register_grant(AuthorizationCodeGrant)
authorization_server.register_endpoint(RevocationEndpoint)
```
If you find anything not that extendable, you can ask help on StackOverflow or open an issue on GitHub.

## Requirements
This part of the documentation covers the installation of Authlib, just like any other software package needs to be installed first.

### $ pip install Authlib
Installing Authlib is simple with pip:
```bash
$ pip install Authlib
```
It will also install the dependencies:

. cryptography

Using Authlib with Django:
```bash
$ pip install Authlib Django
```
### Get the Source Code
Authlib is actively developed on GitHub, where the code is [always available](https://github.com/lepture/authlib).

You can clone the public repository:
```bash
$ git clone git://github.com/lepture/authlib.git
```
Once you have a copy of the source, you can embed it in your Python package, or install it into your site-packages easily:
```bash
$ cd authlib
$ pip install .
```
### Django OAuth Client
The Django client can handle OAuth 1 and OAuth 2 services. Authlib has a shared API design among framework integrations.

Create a registry with OAuth object:
```python
from authlib.integrations.django_client import OAuth
oauth = OAuth()
```
The common use case for OAuth is authentication, e.g. let your users log in with Twitter, GitHub, Google etc.
#### Configuration
Authlib Django OAuth registry can load the configuration from your Django application settings automatically. Every key value pair can be omitted. They can be configured from your Django settings:
```python
AUTHLIB_OAUTH_CLIENTS = {
    'twitter': {
        'client_id': 'Twitter Consumer Key',
        'client_secret': 'Twitter Consumer Secret',
        'request_token_url': 'https://api.twitter.com/oauth/request_token',
        'request_token_params': None,
        'access_token_url': 'https://api.twitter.com/oauth/access_token',
        'access_token_params': None,
        'refresh_token_url': None,
        'authorize_url': 'https://api.twitter.com/oauth/authenticate',
        'api_base_url': 'https://api.twitter.com/1.1/',
        'client_kwargs': None
    }
}
```
There are differences between OAuth 1.0 and OAuth 2.0, please check the parameters in *.register* in [Web OAuth Clients](https://docs.authlib.org/en/latest/client/frameworks.html#frameworks-clients).
#### Saving Temporary Credential
In OAuth 1.0, we need to use a temporary credential to exchange access token, this temporary credential was created before redirecting to the provider (Twitter), we need to save this temporary credential somewhere in order to use it later.

In OAuth 1, Django client will save the request token in sessions. In this case, you just need to configure Session Middleware in Django:
```python
MIDDLEWARE = [
    'django.contrib.sessions.middleware.SessionMiddleware'
]
```
Follow the official Django documentation to set a proper session. Either a database backend or a cache backend would work well.
#### Routes for Authorization
Just like the example in [Web OAuth Clients](https://docs.authlib.org/en/latest/client/frameworks.html#frameworks-clients), everything is the same. But there is a hint to create *redirect_uri* with *request* in Django:
```python
def login(request):
    # build a full authorize callback uri
    redirect_uri = request.build_absolute_uri('/authorize')
    return oauth.twitter.authorize_redirect(request, redirect_uri)
```
#### Auto Update Token via Signal
Instead of defining an *update_token* method and passing it into OAuth registry, it is also possible to use signals to listen for token updates:
```python
from django.dispatch import receiver
from authlib.integrations.django_client import token_update

@receiver(token_update)
def on_token_update(sender, name, token, refresh_token=None, access_token=None, **kwargs):
    if refresh_token:
        item = OAuth2Token.find(name=name, refresh_token=refresh_token)
    elif access_token:
        item = OAuth2Token.find(name=name, access_token=access_token)
    else:
        return

    # update old token
    item.access_token = token['access_token']
    item.refresh_token = token.get('refresh_token')
    item.expires_at = token['expires_at']
    item.save()
```
#### Django OpenID Connect Client
An OpenID Connect client is no different than a normal OAuth 2.0 client. When registered with the *openid scope*, the built-in Django OAuth client will handle everything automatically:
```python
oauth.register(
    'google',
    ...
    server_metadata_url='https://accounts.google.com/.well-known/openid-configuration',
    client_kwargs={'scope': 'openid profile email'}
)
```
When we get the returned token:
```python
token = oauth.google.authorize_access_token(request)
```
There should be a *id_token* in the response. Authlib has called **.parse_id_token** automatically, we can get *userinfo* in the *token*:
```python
userinfo = token['userinfo']
```

## Troubleshooting
### Logging

You can always enable debug logging when you run into issues in your code.
```python
import logging
import sys
log = logging.getLogger('authlib')
log.addHandler(logging.StreamHandler(sys.stdout))
log.setLevel(logging.DEBUG)
```
Logging system still being worked on at Authlib. (TBD)
### Dependencies
You may enter problems when installing cryptography, check its official document at https://cryptography.io/en/latest/installation/.

For issued with OAuth Client, please read [Web OAuth Clients](https://docs.authlib.org/en/latest/client/frameworks.html#frameworks-clients) at first.
Authlib has a shared API design among framework integrations, learn them from [Web OAuth Clients](https://docs.authlib.org/en/latest/client/frameworks.html#frameworks-clients).

Be aware, using secure cookie as session backend will expose your request token.

## Code Sample
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
Find Django Google login sample [here](https://github.com/zuri-training/team-6-auth-wiki/tree/main/samples/python/Authlib/Django/Google%20login).
