import { motion } from "framer-motion";
import conceptImg from "../assets/concept.jpg";

export default function Concept() {
  return (
    <section id="concept" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-card"
          >
            <img
              src={conceptImg}
              alt="Tropical cafe interior with lush plants and rattan furniture"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Our Concept
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
              Experience a tropical brunch inspired by the lush beauty of Bali.
              Every dish is crafted with fresh, vibrant ingredients that celebrate
              the exotic flavors of Southeast Asia.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              From colorful smoothie bowls to perfectly crafted matcha lattes,
              we bring the warmth and wonder of island life to your plate — 
              right here in the heart of the city.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
