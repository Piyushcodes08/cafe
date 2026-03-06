import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "Concept", href: "#concept" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-3">
            Spice Garden
          </h3>
          <p className="text-sm text-primary-foreground/70">
            Experience authentic Indian flavors with modern dining. Fresh ingredients,
            rich spices, and unforgettable taste.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-primary-foreground/70 hover:text-primary transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Contact</h4>

          <div className="flex items-start gap-3 mb-3">
            <FaMapMarkerAlt className="mt-1 text-primary" />
            <p className="text-sm text-primary-foreground/70">
              45 MG Road, Delhi, India
            </p>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt className="text-primary" />
            <p className="text-sm text-primary-foreground/70">
              +91 98765 43210
            </p>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-primary" />
            <p className="text-sm text-primary-foreground/70">
              contact@spicegarden.com
            </p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>

          <div className="flex gap-4">
            {[
              { icon: FaInstagram, label: "Instagram" },
              { icon: FaFacebookF, label: "Facebook" },
              { icon: FaTiktok, label: "TikTok" },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary hover:text-white transition"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Spice Garden Restaurant. All rights reserved.
      </div>
    </footer>
  );
}