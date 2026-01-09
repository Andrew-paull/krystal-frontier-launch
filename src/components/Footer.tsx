import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
              <span className="text-primary font-display font-bold text-xl">K</span>
            </div>
            <span className="font-display text-xl font-semibold text-primary-foreground">
              Krystal Consulting Inc.
            </span>
          </div>

          <p className="font-body text-sm text-primary-foreground/60 text-center">
            © {currentYear} Krystal Consulting Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.krystalconsultinginc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-primary-foreground/60 hover:text-secondary transition-colors"
            >
              Visit Website
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
