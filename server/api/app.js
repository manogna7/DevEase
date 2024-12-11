const express = require("express");
const connectDB = require("./config/db");
const aiRoutes = require("./api/ai/aiController");

require("dotenv").config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("DevEase Backend Running");
});

module.exports = app;
