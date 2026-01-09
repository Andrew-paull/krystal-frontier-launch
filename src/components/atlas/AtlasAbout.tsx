import { motion } from "framer-motion";
import { Globe, TrendingUp, Shield } from "lucide-react";

const AtlasAbout = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Who We Are
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
              Atlas Frontier Corp L.L.C – FZ is a Dubai-based investment enterprise and management 
              firm focused on identifying, structuring, and managing high-value opportunities across 
              emerging and established markets. Strategically positioned within the UAE's global 
              financial ecosystem, the company serves as a bridge between capital, innovation, and 
              scalable business ventures.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Our core mandate is to support investment origination, portfolio management, and 
              strategic advisory for enterprises seeking sustainable growth, strong governance, 
              and long-term value creation. We work with private investors, institutional partners, 
              and growth-oriented businesses to design investment structures that balance opportunity 
              with disciplined risk management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-card p-6 rounded-xl shadow-card border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Global Reach
              </h3>
              <p className="font-body text-muted-foreground">
                Strategically positioned within the UAE's global financial ecosystem.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-card border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Sustainable Growth
              </h3>
              <p className="font-body text-muted-foreground">
                Focus on long-term value creation with strong governance.
              </p>
            </div>
            <div className="bg-card p-6 rounded-xl shadow-card border border-border">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Risk Management
              </h3>
              <p className="font-body text-muted-foreground">
                Disciplined approach balancing opportunity with careful risk assessment.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AtlasAbout;
