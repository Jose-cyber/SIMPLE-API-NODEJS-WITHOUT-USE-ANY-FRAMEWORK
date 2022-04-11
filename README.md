# SIMPLE API NODEJS WITHOUT USE ANY FRAMEWORK
In this project i created a simple API, using nodejs without using any framework, im just using default libraries of nodejs.

## BUILD AND INSTALL

**Required commands:**

To install the packages from the [package.json](package.json) file use:

```npm install```

to run code, use: 

```npm run dev```

## HOW TO USE
the web server will run on port 80, and you will gonna need to use a application to send requests to this API.

### LIST USERS<br>
To get a list of users, you just need send **GET** request to:

```localhost:80/users```


### CREATE USER<br>
To crate a new users, you need send **POST** with required informations, in the body of your request:

**information body**
<pre>
{
    "user": "James",
    "nickname": "Jas"
}
</pre>

send this POST request to:

```localhost:80/users```


### EDIT USER<br>
If you want to edit some user information, you need to send a **PUT** request passing the ID in the url, and in the request body insert the new information:
<pre>
{
    "user": "James",
    "nickname": "Ja"
}
</pre>

send this PUT request to:

```localhost:80/users/55024cf2-667b-4260-8349-9ce8681d1892```

"obs: this ID is just exemple, when you create user, you will always get a new different ID"


## ABOUT PROJECT

this project was build based in the video class created by [daniele](https://github.com/danileao/) in your [youtube channel](https://www.youtube.com/watch?v=c39UfvCR-gk&ab_channel=DanieleLe%C3%A3o)


