import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Can I reserve a table?",
    a: "Yes! You can reserve a table through our contact form or by calling us directly. We recommend booking in advance for weekends.",
  },
  {
    q: "Do you offer vegetarian options?",
    a: "Absolutely! Most of our menu is vegetarian-friendly, including our açaí bowls, avocado toast, and pancakes. Just ask your server for recommendations.",
  },
  {
    q: "Do you have gluten-free options?",
    a: "Yes, we offer several gluten-free dishes and can adapt many items. Please inform your server about any dietary requirements.",
  },
  {
    q: "What are your opening hours?",
    a: "We're open every day from 9:00 AM to 5:00 PM, including weekends and holidays.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="lg:py-28 py-14 bg-background relative overflow-hidden">

      {/* decorative background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/10 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 max-w-3xl relative">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="flex justify-center mb-4">
            <HelpCircle className="text-primary w-8 h-8" />
          </div>

          <span className="text-primary uppercase tracking-widest text-sm font-semibold">
            Questions?
          </span>

          <h2 className="text-5xl font-bold mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Everything you need to know about our brunch experience, menu,
            and reservations.
          </p>
        </motion.div>

        {/* accordion */}
        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="bg-card rounded-2xl border border-border px-6 shadow-card hover:shadow-xl transition-all"
              >
                <AccordionTrigger className="text-lg font-semibold py-6 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}