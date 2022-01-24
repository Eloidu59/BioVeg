import express from "express";
const app = express();

//connexion au serveur
app.listen(3000, () => {
    console.log(`Server successfully started on http: /localhost:3000`)
   });


app.get("/", (request, response) => {
response.send("OK");
});

/* Code pour lire dans la base de données/ */
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