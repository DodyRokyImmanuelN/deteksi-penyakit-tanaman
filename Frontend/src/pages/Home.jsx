import { useState } from "react";
import ImageUpload from "../components/ImageUpload";
import SDGSection from "../components/SDGSection";
import PartnershipSection from "../components/PartnershipSection";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const [hasil, setHasil] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-green-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Deteksi Penyakit Tanaman</h1>
        </div>
      </header>

      {/* Opening */}
      <div className="container mx-auto text-center px-6 py-20">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          <Typewriter
            words={["Deteksi Penyakit Tanaman"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-sm text-gray-700 mt-1"
        >
          <Typewriter
            words={[
              "Unggah gambar daun tanaman untuk mengetahui penyakit dan solusi pengobatannya.",
            ]}
            loop={1}
            cursor={false}
            typeSpeed={40}
            delaySpeed={1500}
          />
        </motion.p>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-6 flex-1 flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch min-h-[500px]">
          {/* Upload Form */}
          <motion.div
            className="flex-1 h-full flex flex-col"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8 }}
          >
            <ImageUpload onResult={setHasil} onClear={() => setHasil(null)} />
          </motion.div>

          {/* Hasil Diagnosa */}
          <motion.div
            className="flex-1 h-full flex flex-col"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full flex flex-col shadow-lg border border-gray-200">
              <CardContent className="p-8 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-semibold text-center text-green-800 mb-6 tracking-tight">
                    Hasil Diagnosa
                  </h2>

                  {hasil ? (
                    <div className="space-y-6 text-gray-800 leading-relaxed">
                      <div>
                        <h3 className="text-lg font-semibold text-green-700">
                          🦠 Penyakit
                        </h3>
                        <p className="text-base font-medium mt-1">
                          {hasil.penyakit}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-green-700">
                          📖 Deskripsi
                        </h3>
                        <p className="text-base mt-1">{hasil.deskripsi}</p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-green-700">
                          💊 Pengobatan
                        </h3>
                        <p className="text-base mt-1">{hasil.pengobatan}</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic text-center">
                      Belum ada diagnosa. Silakan unggah gambar terlebih dahulu.
                    </p>
                  )}
                </div>

                <p className="text-xs text-center text-gray-400 mt-8 italic">
                  Mendukung SDG 3 (Kesehatan yang Baik) & SDG 12 (Konsumsi
                  Bertanggung Jawab)
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* SDG & Partnership */}
        <SDGSection />
        <PartnershipSection />
      </main>
      <footer className="bg-green-700 text-white py-6 mt-auto">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Tentang</h3>
            <p>
              Platform AI untuk mendeteksi penyakit tanaman secara cepat dan
              akurat.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Navigasi</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kontak
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} deteksi penyakit tanaman. All
              rights reserved.
            </p>
            <p className="italic">
              Didukung oleh AI untuk pertanian berkelanjutan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
