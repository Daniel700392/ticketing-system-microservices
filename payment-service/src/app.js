const express = require("express");
const app = express();
require("dotenv").config();

console.log("Iniciando Payment Service...");
console.log("PORT:", process.env.PORT);

app.use(express.json());

// health
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: process.env.SERVICE_NAME
  });
});

// endpoint payment
app.post("/payment", (req, res) => {
  const { amount, user } = req.body;

  res.json({
    status: "success",
    user: user || "unknown",
    amount: amount || 0
  });
});

// puerto
const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Payment service running on port ${PORT}`);
});