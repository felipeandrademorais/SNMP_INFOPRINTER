const express = require("express");
const PrinterController = require("./src/controller/PrinterController");

const app = express();

//Iniciando App
app.use(express.json());

//rotas
app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3000);
