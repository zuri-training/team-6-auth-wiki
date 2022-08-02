# Team 6 Auth Wiki &mdash; API

```bash
# requires php and composer to be installed
# run composer install
composer install

# create the env file
cp env .env

# run migrations
php spark migrate

# run the server
php spark serve
```

Sample .env configuration

```text
CI_ENVIRONMENT = production

database.default.hostname = localhost
database.default.database = database.db
database.default.DBDriver = SQLite3
```