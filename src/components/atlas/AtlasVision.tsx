import { motion } from "framer-motion";
import { Target, Rocket } from "lucide-react";

const AtlasVision = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-xl shadow-card border border-border"
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              To become a trusted investment and management partner, recognized for building 
              resilient enterprises, unlocking frontier opportunities, and delivering long-term 
              value for investors and stakeholders.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card p-8 rounded-xl shadow-card border border-border"
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <Rocket className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              To connect capital with opportunity through intelligent investment management, 
              disciplined execution, and strategic insight, while maintaining the highest 
              standards of professionalism and integrity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AtlasVision;
