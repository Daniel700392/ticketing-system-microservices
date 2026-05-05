const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "api-gateway" });
});

app.listen(3005, () => {
  console.log("Service running on port 3005");
});