import express from "express";
const app = express();
const nunjucks = require("nunjucks");
const fs= require("fs");
const path= require("path");
const{response}=require("express");

nunjucks.configure("views", {
    autoescape: true,
    express: app
   });
   app.set("view engine", "njk");



//connexion au serveur
app.listen(3000, () => {
    console.log(`Server successfully started on http: /localhost:3000`)
   });


app.get("/lol", (request, response) => {
    response.send("OK");
    console.log(`Server successfully`)

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