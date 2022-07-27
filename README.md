# AUTH_WIKI &mdash; TEAM 6 PROJECT

To ease developers' work by developing a user authentication library that can be used as middleware within a web application to authenticate (their application user) requests.

### Setup 

```bash
# clone the repository
git clone https://github.com/zuri-training/team-6-auth-wiki.git

cd team-6-auth-wiki 
```
```python
# Setup virtual environment
python -m venv env # python3 -m venv env

source env/bin/activate
```

Then install the dependencies by running

```python
pip install -r requirements.txt
```

Install npm package to build tailwind css

```bash
# change directory to the project
cd auth_wiki

# install tailwindcss
python manage.py tailwind install

# load tailwindcss
python manage.py tailwind start

# run migrations
python manage.py migrate

# start the server
python manage.py runserver
```
### Samples
* [PHP](samples/php/README.md)
* [Python](samples/python/README.md)
* [JavaScript](samples/javascript/README.md)
### References
* [TAILWINDCSS](https://django-tailwind.readthedocs.io/en/latest/installation.html#step-by-step-instructions)
