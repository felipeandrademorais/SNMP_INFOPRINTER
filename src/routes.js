const express = require("express");
const routes = express.Router();
const PrinterController = require("./controller/PrinterController");

routes.get("/printers/:id", PrinterController.show);
routes.get("/printers", PrinterController.index);

module.exports = routes;
