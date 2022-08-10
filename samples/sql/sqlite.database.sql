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