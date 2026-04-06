import { motion } from "framer-motion";
import { TrendingUp, BookOpen, Lightbulb } from "lucide-react";

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 md:py-28 bg-earth-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-4">
            Impact & Social Enterprise
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Every connection we make drives real change. We operate as a social enterprise — surplus revenue funds expansion and community programmes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8"
          >
            <TrendingUp className="h-8 w-8 text-sage mb-4" />
            <h3 className="font-serif text-xl mb-3">Sustainable Growth</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Revenue from subscriptions directly funds network expansion into underserved areas, creating a self-sustaining cycle of growth and impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8"
          >
            <BookOpen className="h-8 w-8 text-sage mb-4" />
            <h3 className="font-serif text-xl mb-3">Digital Literacy Programme</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Training students and community members in internet safety, digital skills, coding, and online tools — building capacity alongside connectivity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8"
          >
            <Lightbulb className="h-8 w-8 text-sage mb-4" />
            <h3 className="font-serif text-xl mb-3">Smart Community Solutions</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Beyond connectivity: CCTV for community safety, smart irrigation for farmers, and learning management systems for schools.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
