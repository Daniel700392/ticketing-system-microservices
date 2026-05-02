const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.json());

// health
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: process.env.SERVICE_NAME
  });
});

// endpoint booking
app.post("/booking", (req, res) => {
  res.json({ message: "booking created" });
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Service running on port ${PORT}`);
});