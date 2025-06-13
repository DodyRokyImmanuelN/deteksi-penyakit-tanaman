import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactModal() {
  const [form, setForm] = useState({ nama: "", email: "", pesan: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "id", // Ganti dengan ID Anda
        "idTemplate", // Ganti dengan Template ID
        {
          from_name: form.nama,
          from_email: form.email,
          message: form.pesan,
        },
        "public key" // Ganti dengan Public Key Anda
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        setForm({ nama: "", email: "", pesan: "" });

        setTimeout(() => setSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("Gagal mengirim pesan:", error);
        setLoading(false);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-600 hover:bg-green-700 text-white">
          Hubungi Kami
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Formulir Kontak</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama
            </label>
            <Input
              name="nama"
              placeholder="Nama lengkap"
              value={form.nama}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              name="email"
              type="email"
              placeholder="Alamat email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pesan
            </label>
            <Textarea
              name="pesan"
              rows={4}
              placeholder="Tulis pesan Anda..."
              value={form.pesan}
              onChange={handleChange}
              required
            />
          </div>

          <DialogFooter>
            <Button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white"
            >
              {loading ? "Mengirim..." : "Kirim"}
            </Button>
          </DialogFooter>

          {submitted && (
            <p className="text-sm text-green-600 mt-2">
              Pesan berhasil dikirim!
            </p>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
