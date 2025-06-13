//backend/app.js

const express = require("express");
const cors = require("cors");
const diagnoseRoute = require("./routes/diagnoseRoute");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/diagnose", diagnoseRoute);

module.exports = app;
