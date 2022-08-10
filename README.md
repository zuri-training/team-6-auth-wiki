# Auth Wiki &mdash; Team 6

> A wiki to ease developers' work by providing a user authentication librariesthat can be used as middleware within a web application to authenticate (their application user) requests.

<hr />

_View the demo [here](https://zuri-training.github.io/team-6-auth-wiki/)._

## Contributors
The list of contributors to this project and their contributions is available [here](contributions/)
## Getting Started

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
### Add "Remote To" and "Pull From" Upstream

3. Track the original repository as a remote of the fork:

- Switch directories to the forked repository you just cloned and run the following commands
```bash
git clone https://github.com/zuri-training/team-6-auth-wiki.git
```

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
### Backend 

Change to the `/api` directory

```bash
cd api
```
Install composer's dependencies

```bash
composer install
```
_Composer's post install script will setup the configuration and run the migrations_

Start the server

```bash
php spark serve
```

### Frontend

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Samples
* [PHP](samples/php/README.md)
* [Python](samples/python/README.md)
* [JavaScript](samples/javascript/README.md)
## References
* [PHP CodeIgniter 4](https://codeigniter.com/)
* [TAILWINDCSS](https://django-tailwind.readthedocs.io/en/latest/installation.html#step-by-step-instructions)
* [Create React App](https://github.com/facebook/create-react-app).
* [React documentation](https://reactjs.org/).

