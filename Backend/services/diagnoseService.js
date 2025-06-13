const { sendImageToAI } = require("./aiService");
const penyakitInfo = require("../data/penyakitInfo.json");

const getDiagnosis = async (imagePath) => {
  const aiResult = await sendImageToAI(imagePath);

  // Contoh response dari AI: { disease: "Leaf Blight" }
  const diseaseName = aiResult.disease || "Unknown";

  const detail = penyakitInfo[diseaseName] || {
    deskripsi: "Deskripsi tidak tersedia.",
    pengobatan: "Silakan konsultasikan dengan ahli pertanian.",
  };

  return {
    penyakit: diseaseName,
    deskripsi: detail.deskripsi,
    pengobatan: detail.pengobatan,
  };
};

module.exports = { getDiagnosis };
