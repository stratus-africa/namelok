import { motion } from "framer-motion";
import { Target, Globe, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import kictanetLogo from "@/assets/partner-kictanet.png";
import helpNgoLogo from "@/assets/partner-help-ngo.jpg";
import isocLogo from "@/assets/partner-isoc.png";

const partners = [
  { name: "KICTANET", desc: "Kenya ICT Action Network", logo: kictanetLogo },
  { name: "Help NGO", desc: "Humanitarian support", logo: helpNgoLogo },
  { name: "Internet Society", desc: "Global internet development", logo: isocLogo },
];

const reasons = [
  { icon: Target, text: "Direct community impact with measurable outcomes" },
  { icon: Globe, text: "Scalable model for replication across rural Africa" },
  { icon: TrendingUp, text: "Sustainable social enterprise — not aid-dependent" },
];

export function PartnersSection() {
  return (
    <section id="partners" className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: partners */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              Partnerships
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Our <span className="italic text-primary">partners</span>
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {partners.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-5 border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
                >
                  <Handshake className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground text-sm mb-0.5">{p.name}</h3>
                  <p className="text-muted-foreground text-xs">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: why partner */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-serif text-2xl text-foreground mb-8">Why partner with us?</h3>
            <div className="space-y-4 mb-8">
              {reasons.map((r, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <p className="text-foreground font-medium text-sm">{r.text}</p>
                </div>
              ))}
            </div>
            <Button variant="outline" className="rounded-full w-fit gap-2 group" asChild>
              <a href="#contact">
                Become a partner
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
