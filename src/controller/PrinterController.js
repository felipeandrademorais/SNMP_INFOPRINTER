const mongoose = require("mongoose");
const Printer = mongoose.model("Printer");

module.exports = {
  async index(req, res) {
    const printers = await Printer.find();

    return res.json(printers);
  },

  async show(req, res) {
    const printer = await Printer.findById(req.params.id);

    return res.json(printer);
  },

  async store(req, res) {
    const printer = await Printer.create(req.body);

    return res.json(printer);
  },

  async update(req, res) {
    const printer = await Printer.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(printer);
  },

  async destroy(req, res) {
    await printer.findOneAndRemove(req.params.id);

    return res.send();
  }
};
