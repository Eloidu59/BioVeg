const express = require('express');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


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
    console.log("Connected!");
    });

    let requete= 'SELECT * FROM `themes`';
    con.query(requete, (err,chap)=>{
        if (err) throw err;
        
        
        console.log(chap[1].nom)
    });
    

//Connexion a la BDD
/*io.on('connection', (socket) => {
    console.log('connexion faite')
    socket.on('chapitres',()=> {
        
    
    
        let requete= 'SELECT * FROM `themes`';
        
        con.query(requete, (err,chap)=>{
            if (err) throw err;
            socket.emit('retourchapitres',chap);

            
        });

        
    }); 


});
*/


io.on("connection", (socket) => {
    socket.emit("hello", "world");
  });
  
  /* client-side
  socket.on("hello", (arg) => {
    console.log(arg); // world
  });
*/

//connexion au serveur
app.listen(3000, () => {
    console.log(`Server successfully started on http: /localhost:3000`)
   });


app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/html/index.html");

});

app.get("/quiz", (request, response) => {
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