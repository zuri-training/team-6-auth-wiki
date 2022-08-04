# API Documentation

baseurl: `/api`
<hr>

```json
{
    "paths":[
        "/login",
        "/register",
        "/logout",

        "/user/{id}",
        
        "/posts",
        "/posts/create",
        "/posts/{id}",

        "/posts/{id}/comments",
        "/posts/{id}/comments/create",
        "/posts/{id}/comments/delete",
        "/posts/{id}/comments/{id}",
        "/posts/{id}/comments/{id}/like",
        "/posts/{id}/comments/{id}/unlike",
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
