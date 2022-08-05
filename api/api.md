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
        "/posts/{id}/unlike",

        "/posts/{id}/comments",
        "/posts/{id}/comments/create",
        // "/posts/{id}/comments/delete",

        "/comments/{id}/like",
        "/comments/{id}/unlike",

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
## Languages 
`GET /languages`

```json
// response
[
    {
        "id": 1,
        "language": "PHP"
    },
    {
        "id": 2,
        "language": "Python"
    }
]
```
## Posts

Get posts by language

`GET /languages/{language_id}/posts`

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
                "language_id": 2,
                "title": "John Doe",
                "content": "lorem ipsum sit dolor amit",
                "media_location": "https://example.com/avatar.png",
                "likes_count": 5,
                "created_at": 1659735293,
                "comments": [
                    {
                        "id": 1,
                        "post_id": 2,
                        "comment_text": "This is fun",
                        "likes_count": 2,
                        "created_at": 1659735293
                    }
                ]
        }
    ]
}
```

Create post

`POST /posts/create`

```json
{
    "language_id": 1,
    "title": "Lorem ipsum sit",
    "content": "lorem ipsum sit dolor amit...",
    "media_location": "https://example.com/avatar.png"
}

// response
{
    "error": false // or error message
}
```

Get post

`GET /posts/{id}`

```json
// response
{
    "error": false, // or error message
    "post": {
        "id": 2,
        "user_id": 1,
        "language_id": 2,
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

Like post

`GET /posts/{id}/like`

```json
// response
{
    "error": false // or error message
}
```

Unlike post

`GET /posts/{id}/unlike`

```json
// response
{
    "error": false // or error message
}
```

## COMMENTS

Get Comments 

`GET /posts/{id}/comments`
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
            "id": 1,
            "post_id": 2,
            "comment_text": "This is fun",
            "likes_count": 2,
            "created_at": 1659735293
        }
    ]
}
```

Create comment

`POST /posts/{id}/comments/create`

```json
{
    "comment_text": "This is fun"
}

// response
{
    "error": false // or error message
}
```

Like a comment

`GET /comments/{id}/like`

```json
// response
{
    "error": false // or error message
}
```

Unlike a comment

`GET /comments/{id}/unlike`

```json
// response
{
    "error": false // or error message
}