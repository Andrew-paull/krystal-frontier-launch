import { motion } from "framer-motion";
import { Users, Workflow, Eye, Award } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "The Right People",
    description:
      "Our professionals have significant industry and technical experience serving companies from various industries. Our core service team has extensive experience assisting companies with all types of accounting and consulting work.",
  },
  {
    icon: Workflow,
    title: "The Right Process",
    description:
      "We don't adhere to a 'cookie-cutter' approach. We acknowledge that each client is different and our approach to projects is based on this uniqueness. Our experience allows us to efficiently and effectively complete projects timely.",
  },
  {
    icon: Eye,
    title: "The Right Perspective",
    description:
      "One of the first steps in our service approach is to align our efforts with our clients' expectations and determine how success will be measured. In yearly review sessions, we discuss your level of satisfaction and develop plans for continual improvement.",
  },
  {
    icon: Award,
    title: "Our Commitment to Quality",
    description:
      "As a full professional services firm, we value quality in services that we provide. We work diligently and with attention to detail, keeping in mind our client's return on investment and future business opportunities.",
  },
];

const Values = () => {
  return (
    <section id="values" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Value Proposition
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            What Sets Us Apart
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Krystal Consulting Inc. is committed to working with our clients to ensure 
            value is received for services provided.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 h-full shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-primary-foreground group-hover:text-secondary-foreground transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
