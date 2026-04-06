import { motion } from "framer-motion";
import { Handshake, Target, Globe, TrendingUp } from "lucide-react";

const partners = [
  { name: "KICTANET", desc: "Kenya ICT Action Network" },
  { name: "Help NGO", desc: "Humanitarian support & capacity building" },
  { name: "Internet Society", desc: "Global internet development" },
  { name: "ISOC Kenya", desc: "Internet Society Kenya Chapter" },
];

const reasons = [
  { icon: Target, text: "Direct community impact with measurable outcomes" },
  { icon: Globe, text: "Scalable model for replication across rural Africa" },
  { icon: TrendingUp, text: "Sustainable social enterprise — not aid-dependent" },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            Our Partners
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We work alongside organisations that share our vision of universal connectivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border"
            >
              <Handshake className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground text-sm mb-1">{p.name}</h3>
              <p className="text-muted-foreground text-xs">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="font-serif text-2xl text-foreground text-center mb-8">Why Partner With Us</h3>
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/30 flex items-center justify-center">
                  <r.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground font-medium">{r.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
