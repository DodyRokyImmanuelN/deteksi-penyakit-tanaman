const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const { AI_SERVICE_URL } = require("../config/env");

console.log("DEBUG AI_SERVICE_URL:", AI_SERVICE_URL);
const sendImageToAI = async (imagePath) => {
  const form = new FormData();
  form.append("image", fs.createReadStream(imagePath));

  const response = await axios.post(AI_SERVICE_URL, form, {
    headers: form.getHeaders(),
  });

  return response.data; // misalnya { disease: "Leaf Blight" }
};

module.exports = { sendImageToAI };
