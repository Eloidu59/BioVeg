const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
//var socket=io.connect


app.use(express.static(__dirname + '/views'));

//connection à la BDD

var mysql = require('mysql')
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password : "",
    database : "eductseaqfbioveg",
    });

con.connect(function(err) {
    if (err) throw err;
    console.log("Connection à la base de données!");
    });


    

io.on('connection', (socket) => {
    
    socket.on('chapitres',()=> {
        console.log('connexion faite');
    
        let requete= 'SELECT * FROM `themes`';
        
        con.query(requete, (err,chap)=>{
            if (err) throw err;
            
            socket.emit('retourchapitres',chap);

            console.log(chap[1].nom) //Gymnospermes
       });
    }); 
});


//connexion au serveur
app.listen(3000, () => {
    console.log(`Server successfully started on http: /localhost:3000`)
   });


app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/html/index.html");

});

app.get("/quiz", (request, response) => {
    response.sendFile(__dirname + "/views/html/listeQuizs.html");

});

app.get("/quiz1", (request, response) => {
    response.sendFile(__dirname + "/views/html/quiz1.html");

});

app.get("/textrou", (request, response) => {
    response.sendFile(__dirname + "/views/html/textrou.html");

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