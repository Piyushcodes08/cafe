import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, Phone, MapPin } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50),
  lastName: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });

      setErrors(fieldErrors);
      return;
    }

    toast.success("Message sent! We'll get back to you soon.");

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    setErrors({});
  };

  const inputClass =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition";

  return (
    <section id="contact" className="py-28 bg-card">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-semibold">
            Contact
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Let's Talk
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a question about our menu or want to book a table?
            Send us a message and our team will respond shortly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4 bg-background p-6 rounded-xl shadow-card hover:scale-[1.02] transition">
              <Mail className="text-primary" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-muted-foreground">hello@balibrunch.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-background p-6 rounded-xl shadow-card hover:scale-[1.02] transition">
              <Phone className="text-primary" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-background p-6 rounded-xl shadow-card hover:scale-[1.02] transition">
              <MapPin className="text-primary" />
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-muted-foreground">
                  Bali Brunch Cafe, Mumbai, India
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-card">
              <iframe
                src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl p-10 shadow-card space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <input
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <input
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />

            <input
              name="phone"
              placeholder="Phone (optional)"
              value={form.phone}
              onChange={handleChange}
              className={inputClass}
            />

            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={inputClass + " resize-none"}
            />

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-semibold py-4 rounded-lg hover:scale-[1.02] transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}