const mongoose = require("mongoose");
const Printer = mongoose.model("Printer");
const fs = require("fs");
const csv = require("csv-export");

module.exports = {
  async csvExport(req, res) {
    const printers = await Printer.find();

    var dataPrinters = [];

    for (printer in printers) {
      dataPrinters.push({
        NAME: printers[printer].name,
        IP: printers[printer].ip,
        SERIAL: printers[printer].serial,
        COUNTER: printers[printer].counter
      });
    }

    const csvData = {
      index: dataPrinters
    };

    csv.export(csvData, function(buffer) {
      fs.writeFileSync("./data.zip", buffer);
    });

    res.json({ response: "Arquivo gerado na raiz, como data.zip" });
  }
};
