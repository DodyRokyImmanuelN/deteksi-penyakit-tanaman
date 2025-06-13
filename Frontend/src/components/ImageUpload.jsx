import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import api from "../api";
import { Trash2 } from "lucide-react";

export default function ImageUpload({ onResult, onClear }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    },
  });

  const handleUpload = async () => {
    if (!image) return alert("Pilih gambar terlebih dahulu!");
    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      let fakeProgress = 0;
      const interval = setInterval(() => {
        fakeProgress += 5;
        setProgress(fakeProgress);
      }, 100); // 100ms x 20 = 2s

      const response = await api.post("/", formData);
      clearInterval(interval);
      setProgress(100);
      onResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Gagal mengunggah gambar");
    } finally {
      setTimeout(() => setLoading(false), 500); // delay biar tidak tiba-tiba
    }
  };

  const handleClear = () => {
    setImage(null);
    setPreview(null);
    setProgress(0);
    onClear?.();
  };

  return (
    <motion.div
      className="flex-1 h-full flex flex-col"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="shadow-md hover:shadow-xl border border-gray-200 transition-shadow duration-300 h-full flex flex-col">
        <CardContent className="p-8 flex flex-col justify-between h-full">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-semibold text-center text-green-800 mb-6 tracking-tight"
            >
              Unggah Gambar untuk Diagnosis
            </motion.h2>

            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-300 ${
                isDragActive
                  ? "bg-green-50 border-green-400"
                  : "border-gray-300"
              }`}
            >
              <input {...getInputProps()} />
              {preview ? (
                <div className="relative">
                  <img
                    src={preview}
                    alt="Preview"
                    className="mx-auto max-h-64 object-contain rounded-lg shadow-md"
                  />
                  <Button
                    size="icon"
                    className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClear();
                    }}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              ) : (
                <p className="text-gray-500 text-sm">
                  {isDragActive
                    ? "Lepaskan gambar di sini..."
                    : "Tarik & lepaskan gambar di sini atau klik untuk memilih."}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {loading && (
              <Progress
                value={progress}
                className="h-3 rounded-full bg-gray-200"
              />
            )}

            <Button
              className="w-full bg-green-600 hover:bg-green-700 transition-all"
              onClick={handleUpload}
              disabled={loading || !image}
            >
              {loading ? "Mendiagnosa..." : "Upload & Diagnosa"}
            </Button>

            <p className="text-xs text-center text-gray-400 mt-4 italic">
              Mendukung SDG 2 (Tanpa Kelaparan) & SDG 3 (Kesehatan yang Baik)
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
