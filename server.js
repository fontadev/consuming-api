const cors = require("cors");
const axios = require("axios");
const express = require("express");

//Iniciando o Express
const app = express();

//Utilizando CORS
app.use(cors());

//Rota API Return res e axios
app.get("/", async (req, res) => {
  try {
    //Response é a resposta do axios mas eu tiro o data de dentro do response
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    // console.log(data);
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.listen("3050");

//Iniciar servidor
//node server.js
