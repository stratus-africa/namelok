import { motion } from "framer-motion";
import { Globe, Scale, Users } from "lucide-react";

const pillars = [
  { icon: Globe, title: "Digital Equity", desc: "Every community deserves affordable, reliable internet access regardless of geography." },
  { icon: Scale, title: "Service Equality", desc: "Schools and health centres receive the same quality of connectivity as urban institutions." },
  { icon: Users, title: "Local Ownership", desc: "Communities participate in and benefit from the network that serves them." },
];

export function VisionSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Our Vision</h2>
          <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed border-l-4 border-primary pl-6 text-left">
            "To be the leading community-driven connectivity provider in rural Kenya, proving that sustainable internet access is not a luxury — it is a right that transforms education, health, and livelihoods."
          </blockquote>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <p.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
