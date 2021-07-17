const express = require("express");

//Iniciando o Express
const app = express();

//Rotas
app.get("/", (req, res) => {
  return res.json([{ name: "Felipe" }, { name: "Mariana" }]);
});

app.listen("3050");

//Iniciar servidor
//node server.js
