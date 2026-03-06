import { motion } from "framer-motion";
import { HiClock, HiLocationMarker, HiPhone } from "react-icons/hi";
import { FaMapMarkedAlt } from "react-icons/fa";

const cards = [
  {
    icon: HiClock,
    title: "Opening Hours",
    lines: ["Monday – Friday", "9:00 AM – 5:00 PM", "Saturday – Sunday", "9:00 AM – 6:00 PM"],
  },
  {
    icon: HiLocationMarker,
    title: "Location",
    lines: ["123 Tropical Avenue", "Amsterdam, Netherlands"],
  },
  {
    icon: HiPhone,
    title: "Contact",
    lines: ["+31 20 123 4567", "hello@balibrunch.com"],
  },
];

export default function Hours() {
  return (
    <section className="lg:py-28 lg-14 bg-card relative overflow-hidden">

      {/* decorative background blur */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">
            Visit Us
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Opening Hours & Location
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Come enjoy tropical brunch vibes in the heart of Amsterdam.
            We're open daily serving fresh bowls, pancakes and drinks.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-background border border-border rounded-2xl p-8 text-center shadow-card hover:shadow-2xl transition-all"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <card.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {card.title}
              </h3>

              {card.lines.map((line) => (
                <p key={line} className="text-muted-foreground">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}

        </div>

        {/* bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-muted-foreground mb-6">
            Planning a visit? Find us easily on the map or reserve a table.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Book a Table
            </a>

            <a
              href="#"
              className="flex items-center gap-2 border border-border px-7 py-3 rounded-lg hover:bg-muted transition"
            >
              <FaMapMarkedAlt />
              Get Directions
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}