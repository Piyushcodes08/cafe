import { motion } from "framer-motion";
import butterChickenImg from "../assets/butterChickenImg.jpg";
import paneerTikkaImg from "../assets/paneerTikkaImg.jpg";
import biryaniImg from "../assets/biryaniImg.jpg";
import dosaImg from "../assets/dosaImg.jpg";
import mangoLassiImg from "../assets/mangoLassiImg.jpg";
import chaiImg from "../assets/chaiImg.jpg";

const menuItems = [
  { 
    name: "Butter Chicken", 
    description: "Tender chicken cooked in creamy tomato gravy with aromatic spices", 
       price: "₹350", 
    image: butterChickenImg 
  },
  { 
    name: "Paneer Tikka", 
    description: "Grilled paneer cubes marinated with yogurt, spices & herbs", 
   price: "₹280", 
    image: paneerTikkaImg 
  },
  { 
    name: "Chicken Biryani", 
    description: "Fragrant basmati rice cooked with spiced chicken, saffron & herbs", 
    price: "₹320",  
    image: biryaniImg 
  },
  { 
    name: "Masala Dosa", 
    description: "Crispy dosa stuffed with spiced potato filling, served with chutney & sambar", 
   price: "₹150", 
    image: dosaImg 
  },
  { 
    name: "Mango Lassi", 
    description: "Refreshing yogurt drink blended with sweet mango pulp", 
     price: "₹90", 
    image: mangoLassiImg 
  },
  { 
    name: "Masala Chai", 
    description: "Traditional Indian spiced tea brewed with milk and cardamom", 
    price: "₹40",  
    image: chaiImg 
  },
];

export default function Menu() {
  return (
    <section id="menu" className="lg:py-24 py-12 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">
            Taste Paradise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
            Our Menu
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-background rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="overflow-hidden h-56">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="font-body text-lg font-bold text-primary whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
