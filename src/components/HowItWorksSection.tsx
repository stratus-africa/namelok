import { motion } from "framer-motion";
import { Satellite, Network, Users, RefreshCw } from "lucide-react";

const steps = [
  { icon: Satellite, title: "Backhaul", desc: "Internet sourced via fibre or satellite backhaul to our core infrastructure." },
  { icon: Network, title: "Distribution", desc: "Point-to-multipoint wireless links distribute connectivity across the region." },
  { icon: Users, title: "Community Access", desc: "Homes, schools, and health centres connect through hotspots and dedicated links." },
  { icon: RefreshCw, title: "Revenue Reinvested", desc: "Subscription revenue funds expansion, digital literacy, and community programmes." },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A sustainable model that grows with the community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-4 text-xl font-bold">
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
