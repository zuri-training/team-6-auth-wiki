# AUTH_WIKI &mdash; TEAM 6 PROJECT

> A wiki to ease developers' work by providing a user authentication librariesthat can be used as middleware within a web application to authenticate (their application user) requests.


### First of all Fork and Clone Repository

1. Fork the repository: Click the "Fork" button on the upper right corner of the Repository page.

2. Make a Local Clone: Clone the forked repository to your local machine (computer)

- Click on the "Code" button on the Repo page
- Copy the URL for the forked repo
```bash
git clone https://github.com/zuri-training/team-6-auth-wiki.git
```
- Create a Folder on your Local machine for the project Workspace
- Open Command prompt / Terminal / GitBash in the same folder location
- In your Terminal, type: 
```bash
git clone https://github.com/zuri-training/team-6-auth-wiki.git
```

### Add "Remote To" and "Pull From" Upstream

3. Track the original repository as a remote of the fork:

- Switch directories to the forked repository you just cloned and run the following commands

```bash
git remote add --track main upstream https://github.com/zuri-training/team-6-auth-wiki.git

git fetch upstream
```

4. Create a new branch for your changes

```bash
# replace branch_name with your branch name
git checkout -b branch_name upstream/main
```

5. Make your changes, Add, commit, and push the changes

### After making neccessary changes Run

```bash
git add <filename>
git commit -m "add your commit message"
git push -u origin branchname
```

6. Submit your pull request

You’re now all ready to submit the improvement you’ve made to the project’s maintainers for aproval. Head over to the original repositories Pull Requests tab, and you should see an automatic suggestion from GitHub to create a pull request from your new branch.

## Running the application

#### Install environment variable by running 
```bash
python -m venv env
```
#### Activate environment variable
on mac/linux os run 
```bash
source env/bin/activate
```
on Windows os run 

```powershell
env.Scripts/Activate.ps1
```
#### Install dependencies
```bash
# install the required dependencies
pip install -r requirements.txt
``` 
#### change directory to the project
```bash
cd auth_wiki
```
#### Install and build tailwind css
```bash
# install tailwindcss
python manage.py tailwind install

# load tailwindcss
python manage.py tailwind start
```

#### run migrations
```bash
python manage.py migrate
```
#### start the server
```bash
python manage.py runserver
```

### Important
* On some systems, `python` might not point to the correct version of Python. Alternatively, you can run the above commands using `python3` instead.
* Installation fails on some systems due to an error with `psycopg2-binary`. A fix for that is available [here](https://stackoverflow.com/questions/71390492/failed-error-to-install-psycopg2-binary-on-termux).
## Samples
* [PHP](samples/php/README.md)
* [Python](samples/python/README.md)
* [JavaScript](samples/javascript/README.md)
## References
* [TAILWINDCSS](https://django-tailwind.readthedocs.io/en/latest/installation.html#step-by-step-instructions)
