const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const operasRouter = require("./routes/operas");
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

console.log(MONGO_URL);

// Connect to database
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to database"));

// Routes
app.get("/", (req, res) => {
  res.send(__dirname + "/public/index.html");
});

// Import routes
app.use("/api", operasRouter);

// Start server
const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
