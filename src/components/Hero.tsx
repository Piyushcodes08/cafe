import { motion } from "framer-motion";
import heroBg from "../assets/cafe-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
      style={{
  backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url(${heroBg})`
}}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/30 to-foreground/60" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-3xl"
      >
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          A Brunch That Takes You to Bali
        </h1>
        <p className="font-body font-semibold text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl mx-auto">
          Enjoy exotic flavors, colorful dishes, and a tropical brunch experience
          that transports you to paradise.
        </p>
        <a
          href="#menu"
          className="inline-block bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity text-lg shadow-elevated"
        >
          View Menu
        </a>
      </motion.div>
    </section>
  );
}
