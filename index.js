const express = require('express');
const path = require('path');
const app = express();
//var server = app.listen(3000)
const http = require('http').Server(app);
const io = require('socket.io')(http);
//var io = require('socket.io').listen(server);
//var socket=io.connect


app.use(express.static(__dirname + '/views'));

//connexion à la BDD

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

app.get("/accueil", (request, response) => {
    response.sendFile(__dirname + "/views/html/accueil.html");

});


app.get("/annales", (request, response) => {
    response.sendFile(__dirname + "/views/html/annales.html");

});


io.on('connection', (socket) => {
    console.log('connexion faite');
    
    socket.on('chapitres',()=> {
        console.log("l'user me demande les chapitres")
        let requete1= 'SELECT * FROM `themes`';
        
        
        con.query(requete1, (err,chap)=>{
            if (err) throw err;
            
            socket.emit('retourchapitres',chap);

            //console.log(chap[1].nom) //Gymnospermes test
       });
       
    }); 

    socket.on('typeExos',()=>{
        let requete2= 'SELECT * FROM `type_exo`';
        con.query(requete2, (err,chap)=>{
            if (err) throw err;
            
            socket.emit('retourtypeExos',chap);


       });
    })
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