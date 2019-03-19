const express = require("express");
const routes = express.Router();
const PrinterController = require("./controller/PrinterController");
const ManagePrinterController = require("./controller/ManagePrinterController");

//Printer Routes
routes.get("/printers", PrinterController.index);
routes.get("/printers/:id", PrinterController.show);
routes.post("/printers", PrinterController.store);
routes.put("/printers/:id", PrinterController.update);
routes.delete("/printers/:id", PrinterController.destroy);

//Manage Routes
routes.get("/counter/:id", ManagePrinterController.updateCounter);

module.exports = routes;
