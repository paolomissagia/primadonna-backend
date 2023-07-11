const express = require("express");
const app = express();
const Opera = require("../models/Opera");

app.get("/operas", async (req, res) => {
  try {
    const operas = await Opera.find();
    res.status(200).json(operas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = app;
