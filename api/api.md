# API Documentation

baseurl: `/`
<hr>

```jsonc
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
```jsonc
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
```jsonc
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

```jsonc
{
    "error": false // or error message
}
```
## Languages 
`GET /languages`

```jsonc
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

```jsonc
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
                "user_id": {
                    "id": "1",
                    "email": "demo@example.com",
                    "username": "Migo Hendricks",
                    "extra_data": [],
                    "created_at": "1659709239",
                    "updated_at": null
                },
                "language_id": {
                    "id": 2,
                    "language": "JavaScript"
                },
                "title": "Hello World",
                "slug": "hello-world",
                "content": "lorem ipsum sit dolor amit",
                "media_location": "https://example.com/avatar.png",
                "likes_count": 5,
                "created_at": 1659735293
        }
    ]
}
```

Create post

`POST /posts/create`

```jsonc
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

```jsonc
// response
{
    "error": false, // or error message
    "post": {
        "id": 2,
        "user_id": {
            "id": "1",
            "email": "demo@example.com",
            "username": "Migo Hendricks",
            "extra_data": [],
            "created_at": "1659709239",
            "updated_at": null
        },
        "language_id": {
            "id": 2,
            "language": "JavaScript"
        },
        "title": "Hello World",
        "slug": "hello-world",
        "content": "lorem ipsum sit dolor amit",
        "media_location": "https://example.com/avatar.png",
        "likes_count": 5,
    }
}
```

Like post

`GET /posts/{id}/like`

// Authentication required

```jsonc
// response
{
    "error": false // or error message
}
```

Unlike post

`GET /posts/{id}/unlike`

// Authentication required

```jsonc
// response
{
    "error": false // or error message
}
```

## COMMENTS

Get Comments 

`GET /posts/{id}/comments`
```jsonc

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

```jsonc
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

```jsonc
// response
{
    "error": false // or error message
}
```

Unlike a comment

`GET /comments/{id}/unlike`

```jsonc
// response
{
    "error": false // or error message
}
