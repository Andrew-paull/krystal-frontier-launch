import { motion } from "framer-motion";
import { Briefcase, PieChart, Compass, Globe2 } from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Investment Enterprises & Capital Structuring",
    description:
      "Sourcing, evaluating, and structuring investment opportunities across multiple sectors.",
  },
  {
    icon: PieChart,
    title: "Portfolio & Asset Management",
    description:
      "Providing strategic oversight, performance monitoring, and value-enhancement strategies for investment portfolios.",
  },
  {
    icon: Compass,
    title: "Business & Investment Advisory",
    description:
      "Supporting companies with market entry strategies, expansion planning, governance frameworks, and operational optimization.",
  },
  {
    icon: Globe2,
    title: "Cross-Border Investment Facilitation",
    description:
      "Enabling international partnerships and capital flows between the Middle East, Africa, Europe, and other global markets.",
  },
];

const AtlasServices = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Atlas Frontier Corp L.L.C – FZ specializes in comprehensive investment and advisory services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl shadow-card border border-border hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtlasServices;
