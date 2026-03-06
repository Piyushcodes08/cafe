import { motion } from "framer-motion";
import gallery1 from "../assets/butterChickenImg.jpg";
import gallery2 from "../assets/paneerTikkaImg.jpg";
import gallery3 from "../assets/mangoLassiImg.jpg";
import gallery4 from "../assets/chaiImg.jpg";
import gallery5 from "../assets/biryaniImg.jpg";
import gallery6 from "../assets/dosaImg.jpg";


const images = [
  { src: gallery1, alt: "Colorful smoothie bowls", tall: true },
  { src: gallery2, alt: "Friends enjoying brunch", tall: false },
    { src: gallery3, alt: "Beautiful table setting", tall: false },
  { src: gallery4, alt: "Fresh coconut drink", tall: false },
  { src: gallery5, alt: "Tropical fruit platter", tall: false },
  { src: gallery6, alt: "Barista making latte art", tall: true },

];

export default function Gallery() {
  return (
    <section id="gallery" className="lg:py-24 py-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">
            Visual Feast
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Gallery
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="break-inside-avoid group overflow-hidden rounded-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                  img.tall ? "h-80" : "h-60"
                }`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
