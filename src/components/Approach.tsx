import { motion } from "framer-motion";
import { Shield, Target, Settings } from "lucide-react";
import governancePyramid from "@/assets/governance-pyramid.png";

const pillars = [
  {
    icon: Shield,
    title: "Right Governance",
    description:
      "Purpose-driven governance with clear mandate and structured decision-making processes that ensure accountability.",
  },
  {
    icon: Target,
    title: "Right Planning",
    description:
      "Strategic scoping and understanding of current state, pre-planning that aligns with your business objectives.",
  },
  {
    icon: Settings,
    title: "Right Infrastructure",
    description:
      "Leveraging the right tools, technology, and methodology for quality control and effective knowledge management.",
  },
];

const Approach = () => {
  return (
    <section id="approach" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/20 text-gold-dark rounded-full text-sm font-medium mb-4">
            Our Methodology
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Customized Approach
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our project approach is modeled after three key pillars. We work with you 
            throughout the stages of project execution, enabling you to achieve objectives 
            at a competitive cost and least possible time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 group-hover:border-secondary/30">
                <div className="w-16 h-16 bg-gold-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Governance Pyramid Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <img 
            src={governancePyramid} 
            alt="Governance, Planning, and Infrastructure framework" 
            className="max-w-full md:max-w-3xl rounded-xl shadow-elevated"
          />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-primary rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="font-body text-lg text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            This approach enables our clients to achieve their objectives at a competitive 
            cost and in the least possible time, resulting in a seamless and efficient 
            delivery of services than would otherwise be possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Approach;
