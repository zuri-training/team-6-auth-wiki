# API Documentation

baseurl: `/api`
<hr>

```json
{
    "paths":[
        "/login",
        "/register"
    ]
}
```
## Authentication
Login a user

`POST /login`
```json
{
    "email_address": "user@example.com",
    "password": "*****"
}

// Response
// nb: using session
{
    "error": false // or error message
}
```

Register a user
`POST /register`
```json
{
    "email_address": "user@example.com",
    "password": "*****",
    "first_name": "John",
    "last_name": "Doe"
}
```
