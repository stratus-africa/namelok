import { motion } from "framer-motion";
import { TrendingUp, BookOpen, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "Sustainable Growth",
    desc: "Revenue from subscriptions directly funds network expansion into underserved areas, creating a self-sustaining cycle of growth and impact.",
    accent: "from-primary/20 to-primary/5",
  },
  {
    icon: BookOpen,
    title: "Digital Literacy",
    desc: "Training students and community members in internet safety, digital skills, coding, and online tools — building capacity alongside connectivity.",
    accent: "from-accent/20 to-accent/5",
  },
  {
    icon: Lightbulb,
    title: "Smart Solutions",
    desc: "Beyond connectivity: CCTV for community safety, smart irrigation for farmers, and learning management systems for schools.",
    accent: "from-primary/20 to-accent/5",
  },
];

export function ImpactSection() {
  return (
    <section id="impact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-earth-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sage font-semibold text-sm tracking-widest uppercase mb-4 block">
            Our Impact
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground leading-tight mb-4">
            Social <span className="italic text-sage">enterprise</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg max-w-xl mx-auto">
            Every connection we make drives real change. Surplus revenue funds expansion and community programmes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <card.icon className="h-6 w-6 text-sage" />
              </div>
              <h3 className="font-serif text-2xl text-primary-foreground mb-3">{card.title}</h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
