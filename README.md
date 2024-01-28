# SIMPLE API NODEJS WITHOUT USE ANY FRAMEWORK
In this project I created a simple API, using nodejs without using any framework, I'm just using default libraries of nodejs.

## BUILD AND INSTALL

**Required commands:**

To install the packages from the [package.json](package.json) file, use:
<pre>
npm install
</pre>

to run code, use: 
<pre>
npm run dev
</pre>

to run tests, use:
<pre>
npm run test
</pre>

## HOW TO USE
the web server will run on port 80, and you will going to need to use an application to send requests to this API.

### LIST USERS<br>
To get a list of users, you just need to send **GET** request to:

```localhost:80/users```


### CREATE USER<br>
To create a new user, you need to send **POST** with required information, in the body of your request:

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
If you want to edit some user information, you need to send a **PUT** request passing the ID in the URL, and in the request body insert the new information:
<pre>
{
    "user": "James",
    "nickname": "Ja"
}
</pre>

send this PUT request to:

```localhost:80/users/55024cf2-667b-4260-8349-9ce8681d1892```

"obs: this ID is just example, when you create user, you will always get a new different ID"


## ABOUT PROJECT

this project was build based in the video class created by [Daniele](https://github.com/danileao/) in your [YouTube channel](https://www.youtube.com/watch?v=c39UfvCR-gk&ab_channel=DanieleLe%C3%A3o)


