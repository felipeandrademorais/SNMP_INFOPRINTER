const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  ip: {
    type: String,
    required: true
  },
  comunity: {
    type: String,
    required: true
  },
  serial: {
    type: String,
    required: true
  },
  oid_counter: {
    type: String,
    required: true
  },
  counter: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
});

mongoose.model("Printer", ProductSchema);
