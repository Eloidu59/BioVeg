
const express = require("express");
const app = express();
const fs= require("fs");
const path= require("path");
const{response}=require("express");
//const io = require(socket.io)

app.use(express.static(__dirname + '/views'));

//connexion au serveur
app.listen(3000, () => {
    console.log(`Server successfully started on http: /localhost:3000`)
   });


app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");

});

app.get("/quiz", (request, response) => {
    response.sendFile(__dirname + "/views/quiz1.html");

});





/* Code pour lire dans la base de données ?? */
/*
app.get("/items/:id", (request: Request, response: Response) => {
    const item = findItem(parseFloat(request.params.id)); / On cherche dans la
   base de donnée
   
    if (item) {
    response.json(item); /
    } else {
    response.status(404).end();
    }
   });*/