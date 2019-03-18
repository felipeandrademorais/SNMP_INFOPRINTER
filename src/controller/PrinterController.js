const snmp = require("net-snmp");
const printers = [
  {
    name: "Samsung",
    ip: "10.6.48.55",
    comunity: "public",
    serial: "ZER4BQAD900195M",
    oid_counter: "1.3.6.1.2.1.43.10.2.1.4.1.1",
    counter: 0
  },
  {
    name: "Lexmark",
    ip: "10.6.49.20",
    comunity: "public",
    serial: "35PC405",
    oid_counter: "1.3.6.1.4.1.641.2.1.5.2.0",
    counter: 0
  },
  {
    name: "Oki",
    ip: "10.6.49.10",
    comunity: "public",
    serial: "AK36078766",
    oid_counter: "1.3.6.1.4.1.2001.1.1.1.1.11.1.10.170.1.5.1",
    counter: 0
  }
];

class PrinterController {
  index(req, res) {
    res.send(printers);
  }
  show(req, res) {
    const printer = printers[req.params.id];

    var session = snmp.createSession(printer.ip, printer.comunity);
    var oid = [printer.oid_counter];

    session.get(oid, function(error, varbinds) {
      if (error) {
        res.send(error.toString());
      } else {
        var sysName = varbinds[0].value;
        var resultPrinter = { ...printer, counter: sysName.toString() };
        res.json(resultPrinter);
      }
    });
  }
}

module.exports = new PrinterController();
