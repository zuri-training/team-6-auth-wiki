# API Documentation

baseurl: `/`
<hr>
Sample API call:

```javascript
    let demo = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append(
        //     "Authorization",
        //     "Bearer your-token-here"
        // );

        let response = await fetch("https://myapi.dataxis.ng/login", {
            method: "post",
            headers: myHeaders,
            body: JSON.stringify({
                email: "user@example.com",
                password: "user123",
            }),
        });
        let data = await response.json();
        console.log(data);
    };
    demo();
```

```jsonc
{
    "paths":[
        "/login",
        "/register",
        
        "/languages",
        "/languages/{language_id}/posts",

        "/posts/create", // require authentication
        "/posts/{id}",
        "/posts/{id}/like", // require authentication
        "/posts/{id}/unlike", // require authentication

        // "/posts/{id}/comments",
        // "/posts/{id}/comments/create", // require authentication

        // "/comments/{id}/like", // require authentication
        // "/comments/{id}/unlike", // require authentication

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
                "content": "lorem ipsum sit dolor amit",
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
    "content": "lorem ipsum sit dolor amit...",
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
        "content": "lorem ipsum sit dolor amit",
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
## Important
> When using PostMan, set the Content-Type to "x-www-form-urlencode" and pass the parameters as key-value pairs
