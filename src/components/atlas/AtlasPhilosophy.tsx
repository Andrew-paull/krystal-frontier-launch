import { motion } from "framer-motion";
import { BarChart3, Brain, TrendingUp } from "lucide-react";

const AtlasPhilosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-medium mb-4">
            Our Approach
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Our Investment Philosophy
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="font-body text-lg text-primary-foreground/80 leading-relaxed">
            We adopt a disciplined, data-driven, and long-term investment approach. Every opportunity 
            is assessed through rigorous financial analysis, market intelligence, and governance 
            considerations. Our focus is not short-term speculation, but sustainable enterprises 
            with strong fundamentals, scalable models, and positive economic impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">
              Data-Driven
            </h3>
            <p className="font-body text-primary-foreground/70">
              Rigorous financial analysis and market intelligence guide every decision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">
              Disciplined
            </h3>
            <p className="font-body text-primary-foreground/70">
              Strong governance and structured decision-making at every level.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">
              Long-Term
            </h3>
            <p className="font-body text-primary-foreground/70">
              Focus on sustainable enterprises with positive economic impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AtlasPhilosophy;
