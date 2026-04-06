import { motion } from "framer-motion";
import { Satellite, Network, Users, RefreshCw } from "lucide-react";

const steps = [
  { icon: Satellite, title: "Backhaul", desc: "Internet sourced via fibre or satellite to core infrastructure.", num: "01" },
  { icon: Network, title: "Distribution", desc: "Point-to-multipoint wireless links across the region.", num: "02" },
  { icon: Users, title: "Community Access", desc: "Homes, schools, and health centres connect through local nodes.", num: "03" },
  { icon: RefreshCw, title: "Reinvested", desc: "Revenue funds expansion, literacy programmes, and growth.", num: "04" },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Our Model
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            How it <span className="italic text-primary">works</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center group"
            >
              <div className="text-6xl font-serif text-border mb-4 group-hover:text-primary/20 transition-colors">
                {step.num}
              </div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground mb-4 group-hover:scale-110 transition-transform">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
