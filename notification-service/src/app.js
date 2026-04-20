const express = require("express");
const app = express();
require("dotenv").config();

// Verificación inicial (MUY IMPORTANTE)
console.log("Iniciando Notification Service...");
console.log("PORT:", process.env.PORT);

app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: process.env.SERVICE_NAME
  });
});

// Endpoint notify
app.post("/notify", (req, res) => {
  const { user, message } = req.body;

  res.json({
    status: "sent",
    to: user || "unknown",
    message: message || "no message"
  });
});

// Puerto (con fallback por si .env falla)
const PORT = process.env.PORT || 3006;

app.listen(PORT, () => {
  console.log(`Notification service running on port ${PORT}`);
});