import express from "express";

const app = express();

app.get('/', (request, response) => {
    return response.json([
        { id: 1, name: 'Anuncio 1' }
    ]);
});

app.listen(6969, () => {
    console.log("vitu ta on")
});