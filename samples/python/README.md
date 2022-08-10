# Python Authentication Library &mdash; Authlib

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

## Code Sample
