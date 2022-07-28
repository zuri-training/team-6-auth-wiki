# team-6 AUTH_WIKI PROJECT

## TO ease developers' work by developing a user authentication library that can be used as middleware within a web application to authenticate (their application user) requests.

# First of all Fork and Clone Repository

1. Fork the repository: Click the "Fork" button on the upper right corner of the Repository page.

2. Make a Local Clone: Clone the forked repository to your local machine (computer)

- Click on the "Code" button on the Repo page
- Copy the URL for the forked Repo `git clone https://github.com/zuri-training/team-6-auth-wiki.git`
- Create a Folder on your Local machine for the project Workspace
- Open Command prompt / Terminal / GitBash in the same folder location
- In your Terminal, type: `git clone https://github.com/zuri-training/team-6-auth-wiki.git`

## Add "Remote To" and "Pull From" Upstream

3. Track the original repository as a remote of the fork:

- Switch directories to the forked repository you just cloned and run the following commands
- `git remote add --track main upstream https://github.com/zuri-training/team-6-auth-wiki.git`
- `git fetch upstream`

4. Create a new branch for your changes

- `git checkout -b branchname upstream/main`
- change the branchname to your branchname

5. Make your changes, Add, commit, and push the changes

### After making neccessary changes Run

- `git add <filename>`
- `git commit -m "add your commit message"`
- `git push -u origin branchname`

6. Submit your pull request

- You’re now all ready to submit the improvement you’ve made to the project’s maintainers for aproval. Head over to the original repositories Pull Requests tab, and you should see an automatic suggestion from GitHub to create a pull request from your new branch.

# follow this to run the app

> install environment variable by running `python -m venv env`
>
> > then run `pip install -r requirements.txt` to install the required dependencies

## AFTER INSTALLING THE DEPENDENCIES

> activate the environment
> -change directory to the project directory
> RUN `cd auth_wiki`
>
> - install npm package to build tailwind css
>   RUN `python3 manage.py tailwind install`

> - to load tailwindcss
>   RUN `python manage.py tailwind start`
>
> - to run django server
>   RUN `python manage.py runserver`

_[READ ABOUT TAILWINDCSS HERE](https://django-tailwind.readthedocs.io/en/latest/installation.html#step-by-step-instructions)_
