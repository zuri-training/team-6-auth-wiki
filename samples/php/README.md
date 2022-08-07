# Team6 Auth
A simple authentication system for PHP.

### Installation
Create your database tables

```sql
-- Create statement for SQLite databases
CREATE TABLE "users" (
	"id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"status"	TEXT NOT NULL DEFAULT 'user',
	"email"	TEXT NOT NULL UNIQUE,
	"password"	TEXT UNIQUE,
	"username"	TEXT NOT NULL UNIQUE,
	"extra_data"	TEXT NOT NULL DEFAULT '{}',
	"created_at"	integer NOT NULL,
	"updated_at"	integer
);
```

## Usage

```php
use \Team6\AuthWiki\Auth;

// Require composer autoload
require_once __DIR__ . '/vendor/autoload.php';

// ensure that the session is started. Call this as early as possible in your script.
Auth::startSession();

// Initialize the database connection
Auth::initDb(new \PDO("sqlite:" . __DIR__ . "/database.db"), 'sqlite');

// check if the user is logged in
if (Auth::isLoggedIn()) {
	// the user is logged in
} else {
	// the user is not logged in
}

// login a user
$id = Auth::login('user@example.com', 'password');

// logout a user
Auth::logout();

// register a user
$id = Auth::register(
	'Demo User', 
	'password', 
	'admin@admin.com', 
	['phone' => '08134343422']
);
```