import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const commitments = [
  "Professional and lasting business relationships",
  "Excellent quality work with attention to detail",
  "Client's return on investment focus",
  "Future business opportunities consideration",
  "Flexible and adaptable approach",
  "Timely and efficient project completion",
];

const Commitment = () => {
  return (
    <section id="commitment" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-secondary/20 text-gold-dark rounded-full text-sm font-medium mb-4">
              Our Promise
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Commitment <br />
              <span className="text-gradient-gold">to Quality</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              As a full professional services firm, we value quality in services that 
              we provide to our clients. Our projects are executed with our clients in 
              mind, and as a result, we maintain professional and lasting business 
              relationships by performing excellent quality work.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              We work diligently and with attention to detail, keeping in mind our 
              client's return on investment and future business opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 shadow-elevated border border-border/50"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              What We Deliver
            </h3>
            <ul className="space-y-4">
              {commitments.map((commitment, index) => (
                <motion.li
                  key={commitment}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="font-body text-foreground">{commitment}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
