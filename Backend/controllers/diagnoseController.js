const fs = require("fs");
const path = require("path");
const { sendImageToAI } = require("../services/aiService");
const penyakitInfo = require("../data/penyakitInfo.json");

const diagnoseImage = async (req, res) => {
  try {
    // Validasi: tidak ada file
    if (!req.file) {
      return res
        .status(400)
        .json({ error: "File gambar harus diunggah (format .jpg/.png)." });
    }

    const imagePath = req.file.path;
    console.log("Image path yang dikirim ke AI:", imagePath);

    // Kirim ke AI Service
    const prediction = await sendImageToAI(imagePath);

    const result = penyakitInfo[prediction.penyakit] || {
      deskripsi: "Informasi tidak tersedia.",
      pengobatan: "Silakan konsultasikan ke ahli pertanian.",
    };

    // Hapus file sementara setelah digunakan
    fs.unlink(imagePath, (err) => {
      if (err) console.error("Gagal menghapus file:", err);
    });

    res.json({
      penyakit: prediction.penyakit,
      deskripsi: result.deskripsi,
      pengobatan: result.pengobatan,
    });
  } catch (error) {
    console.error("Error saat mendiagnosa:", error.message);

    // Deteksi error karena multer
    if (error.code === "LIMIT_FILE_SIZE") {
      return res
        .status(400)
        .json({ error: "Ukuran file terlalu besar. Maksimal 2MB." });
    }

    if (error.message.includes("file")) {
      return res.status(400).json({ error: error.message });
    }

    console.error(error.response?.data || error);
    res.status(500).json({ error: "Gagal mendiagnosa gambar." });
  }
};

module.exports = { diagnoseImage };
