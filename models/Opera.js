const mongoose = require("mongoose");

const operaSchema = new mongoose.Schema({
  title: String,
  composer: String,
  language: String,
  premiere: String,
  image: String,
  description: String,
});

const Opera = mongoose.model("Opera", operaSchema);
module.exports = Opera;
