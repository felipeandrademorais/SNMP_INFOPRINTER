const snmp = require("net-snmp");
const mongoose = require("mongoose");
const Printer = mongoose.model("Printer");

module.exports = {
  async updateCounter(req, res) {
    const printer = await Printer.findById(req.params.id);

    var session = snmp.createSession(printer.ip, printer.comunity);
    var oid = [printer.oid_counter];

    //catch counter printer
    session.get(oid, async function(error, varbinds) {
      if (error) {
        res.json(error);
      } else {
        const returnPrinter = await Printer.findByIdAndUpdate(
          printer.id,
          { $set: { counter: varbinds[0].value } },
          { new: true }
        );
        res.json(returnPrinter);
      }
    });
  }
};
