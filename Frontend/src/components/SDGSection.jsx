import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function SDGSection() {
  const goals = [
    {
      title: "SDG 2: Zero Hunger",
      description:
        "Meningkatkan produktivitas pertanian dengan mendeteksi penyakit tanaman sejak dini, mengurangi kerugian panen.",
      color: "from-yellow-100 to-yellow-200",
      text: "text-yellow-800",
      icon: "/icons/sdg2.png",
    },
    {
      title: "SDG 3: Good Health and Well-being",
      description:
        "Menjaga kesehatan petani dan konsumen dengan menghindari konsumsi produk yang terkontaminasi.",
      color: "from-green-100 to-green-200",
      text: "text-green-800",
      icon: "/icons/sdg3.png",
    },
    {
      title: "SDG 12: Responsible Consumption and Production",
      description:
        "Mendukung produksi dan konsumsi berkelanjutan melalui pertanian yang lebih cerdas dan efisien.",
      color: "from-blue-100 to-blue-200",
      text: "text-blue-800",
      icon: "/icons/sdg12.png",
    },
  ];

  return (
    <section className="my-12 px-4 max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-gray-800 mb-10"
      >
        Komitmen terhadap Sustainable Development Goals (SDGs)
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <Card
              className={`bg-gradient-to-br ${goal.color} shadow-md h-full`}
            >
              <CardContent className="p-6">
                <div className="items-center gap-3 mb-5 ">
                  <img
                    src={goal.icon}
                    alt={`Ikon ${goal.title}`}
                    className="h-20 w-20 mb-3"
                  />
                  <h3 className={`text-lg mb-3 font-semibold ${goal.text}`}>
                    {goal.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {goal.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
