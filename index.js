// to create webserver
const http = require('http');

// this labrary will generate random id´s 
const {randomUUID} = require("crypto")

// array to store users
const users = []; 


const server = http.createServer((request, response) =>{
  if (request.url === "/users"){
    if (request.method === "GET"){
        return response.end(JSON.stringify(users));
    }
    if (request.method === "POST"){
    request.on("data", (data) => {
        const dataUser = JSON.parse(data);

        const user = {
            id: randomUUID(),
            ...dataUser,
        };
        users.push(user)
    })
    .on("end", () => {
        return response.end(JSON.stringify(users));
       });
    } 
  }

  if(request.url.startsWith("/users")){
    if(request.method === "PUT"){
      const url = request.url;
      const splitURL = url.split("/");
      const idUser = splitURL[2];
      const userIndex = users.findIndex(user => user.id === idUser);
      
      request.on("data", (data) => {
        const dataUser = JSON.parse(data);
        users[userIndex] = {
          id: idUser,
          ...dataUser
        };

      }).on("end", () => {
        return response.end(JSON.stringify(users));
      });
    }
  }
});

// defining the port to run http server
server.listen(80, () => console.log("Server runing!"));