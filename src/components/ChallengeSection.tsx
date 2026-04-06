import { motion } from "framer-motion";
import { WifiOff, GraduationCap, HeartPulse, Banknote } from "lucide-react";

const challenges = [
  {
    icon: WifiOff,
    title: "No Affordable Access",
    desc: "Many households lack internet entirely, or pay disproportionate costs for unreliable mobile data.",
  },
  {
    icon: GraduationCap,
    title: "Schools Left Behind",
    desc: "Students miss out on digital learning resources that urban peers take for granted.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Disconnected",
    desc: "Health centres cannot access telemedicine, e-records, or timely health data reporting.",
  },
  {
    icon: Banknote,
    title: "Economic Exclusion",
    desc: "Without connectivity, communities are locked out of e-commerce, mobile banking, and remote work.",
  },
];

export function ChallengeSection() {
  return (
    <section className="py-20 md:py-28 bg-earth-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-4">The Challenge</h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Kajiado West faces a stark digital divide that limits education, health, and economic opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                <c.icon className="h-6 w-6 text-sage" />
              </div>
              <h3 className="font-serif text-xl mb-2">{c.title}</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
