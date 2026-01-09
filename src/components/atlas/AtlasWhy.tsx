import { motion } from "framer-motion";
import { MapPin, Globe, Shield, Handshake } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Strategic Dubai Presence",
    description: "Operating from one of the world's leading investment and financial hubs.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Experience across multiple jurisdictions and industries.",
  },
  {
    icon: Shield,
    title: "Strong Governance Focus",
    description: "Transparency, compliance, and structured decision-making.",
  },
  {
    icon: Handshake,
    title: "Value-Driven Partnerships",
    description: "Aligning investor interests with enterprise growth.",
  },
];

const AtlasWhy = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Atlas Frontier
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-xl shadow-card border border-border text-center hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtlasWhy;
