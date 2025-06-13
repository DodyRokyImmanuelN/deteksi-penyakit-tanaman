const fs = require("fs");

const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) console.error("❌ Gagal hapus file:", err.message);
  });
};

module.exports = { deleteFile };
