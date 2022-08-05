# API Documentation

baseurl: `/api`
<hr>

```json
{
    "paths":[
        "/login",
        "/register",
        "/logout",
        
        "/languages",
        "/languages/{language_id}/posts",

        "/posts/create",
        "/posts/{id}",
        "/posts/{id}/like",

        "/posts/{id}/comments",
        "/posts/{id}/comments/create",
        "/posts/{id}/comments/delete",
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
    "email": "user@example.com",
    "password": "*****"
}

// Response
{
    "error": false, // or error message
    "user" : {
        "id": "123",
        "email": "user@example.com",
        "username": "John Doe",
        "avatar": "https://example.com/avatar.png"
    }
}
```

Register a user

`POST /register`
```json
{
    "email": "user@example.com",
    "password": "*****",
    "username": "John Doe"
}

// Response
{
    "error": false // or error message
}
```
Logout

`GET /logout`

```json
{
    "error": false // or error message
}
```

## Posts

Get posts

`GET /posts`
```json
{
    "limit": 5,
    "sort_by": "ASC" //ASC or DESC
}

// Response
{
    "error": false, // or error message
    "posts": [
        {
            "id": 2,
            "user_id": 1,
            "title": "John Doe",
            "content": "lorem ipsum sit dolor amit",
            "media_location": "https://example.com/avatar.png",
            "likes_count": 5,
            "comments": [
                {
                    "id": 1,
                    "post_id": 2,
                    "comment_text": "This is fun",
                    "likes_count": 2
                }
            ]
    }

}
```
COMMENTS

Get Comments 

`GET/posts/{id}/comments`
```json

{
    "limit": 5,
    "sort_by": "ASC" //ASC or DESC
}

//Response
{
    "error": false, // or error message
    "comments": [
        {
            "id": 2,
            "user_id": 1,
            "username": "John Doe",,
            "comment_text": "lorem ipsum sit dolor amit",
            "media_location": "https://example.com/avatar.png",
            "likes_count": 5,
            "comments": [
                {
                    "id": 1,
                    "post_id": 2,
                    "comment_text": "This is fun",
                    "likes_count": 2
                }
            ]
        }
    ]
}
```