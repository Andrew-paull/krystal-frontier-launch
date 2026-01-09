import { motion } from "framer-motion";
import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Tope Adedara",
    email: "Tope.adedara@krystalconsultinginc.com",
    phone: "847.560.1145",
  },
  {
    name: "Rolake Adedara",
    email: "ROLLY@krystalconsultinginc.com",
    phone: "773.263.3609",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Contact Us
          </h2>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Ready to start your project? Get in touch with our team today.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Team Members */}
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10"
            >
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-4">
                {member.name}
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${member.email}`}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="font-body text-sm break-all">{member.email}</span>
                </a>
                <a
                  href={`tel:${member.phone.replace(/\./g, "")}`}
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="font-body text-sm">{member.phone}</span>
                </a>
              </div>
            </motion.div>
          ))}

          {/* General Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-secondary rounded-2xl p-6"
          >
            <h3 className="font-display text-xl font-semibold text-secondary-foreground mb-4">
              General Inquiries
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:INFO@KRYSTALCONSULTINGINC.COM"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="font-body text-sm">INFO@KRYSTALCONSULTINGINC.COM</span>
              </a>
              <a
                href="https://www.krystalconsultinginc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <Globe className="w-5 h-5 flex-shrink-0" />
                <span className="font-body text-sm">www.krystalconsultinginc.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-gold-dark font-medium px-8 py-6 text-lg"
          >
            <a href="mailto:INFO@KRYSTALCONSULTINGINC.COM">Send Us an Email</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
