const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//Iniciando App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando BD
mongoose.connect(
  "mongodb://felipe:feli2705@ds061391.mlab.com:61391/goweek-felipe",
  { useNewUrlParser: true }
);
requireDir("./src/model");

//rotas
app.use("/api", require("./src/routes"));

app.listen(process.env.PORT || 3000);
