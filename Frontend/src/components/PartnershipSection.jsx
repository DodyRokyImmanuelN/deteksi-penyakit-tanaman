import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ContactModal from "@/components/ContactModal";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function PartnershipSection() {
  return (
    <section className="my-16 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-gray-800 mb-10"
      >
        Kemitraan & Kolaborasi
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="shadow-md bg-white rounded-xl overflow-hidden"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-6">
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-semibold mb-2 text-green-700">
                    Mari Berkolaborasi!
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Platform ini terbuka untuk kerja sama dengan NGO, institusi
                    pendidikan, pemerintah, dan sektor swasta dalam meningkatkan
                    ketahanan pangan dan pertanian berkelanjutan.
                  </p>
                  <ContactModal />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex justify-center"
                >
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(3)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-gray-100 h-16 w-16 rounded shadow-inner"
                        whileHover={{ scale: 1.1, rotate: 3 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
