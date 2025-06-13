const path = require("path");
const dotenv = require("dotenv");

// Cari file .env di root Backend/
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Debug check
console.log("== DEBUG ENV LOADING ==");
console.log("Loaded AI_SERVICE_URL:", process.env.AI_SERVICE_URL);
console.log("Loaded PORT:", process.env.PORT);

module.exports = {
  AI_SERVICE_URL: process.env.AI_SERVICE_URL,
  PORT: process.env.PORT || 3000,
};
