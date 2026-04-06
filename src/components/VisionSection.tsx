import { motion } from "framer-motion";
import { Globe, Scale, Users } from "lucide-react";

const pillars = [
  { icon: Globe, title: "Digital Equity", desc: "Every community deserves affordable, reliable internet access regardless of geography." },
  { icon: Scale, title: "Service Equality", desc: "Schools and health centres receive the same quality of connectivity as urban institutions." },
  { icon: Users, title: "Local Ownership", desc: "Communities participate in and benefit from the network that serves them." },
];

export function VisionSection() {
  return (
    <section className="py-24 md:py-32 bg-muted/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              Our Vision
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Internet as a <span className="italic text-primary">right</span>
            </h2>
            <blockquote className="text-lg text-muted-foreground italic leading-relaxed relative pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:rounded-full before:bg-gradient-to-b before:from-primary before:to-accent">
              "To be the leading community-driven connectivity provider in rural Kenya, proving that sustainable internet access is not a luxury — it is a right that transforms education, health, and livelihoods."
            </blockquote>
          </motion.div>

          <div className="space-y-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 bg-card rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-1">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
