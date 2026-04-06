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
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-earth-dark" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-sage font-semibold text-sm tracking-widest uppercase mb-4 block">
            The Challenge
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-4 leading-tight">
            Bridging the
            <br />
            <span className="italic text-sage">digital divide</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            Kajiado West faces a stark digital divide that limits education, health, and economic opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-dark rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-sage/20 text-sage mb-5 group-hover:scale-110 transition-transform">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-xl text-primary-foreground mb-2">{c.title}</h3>
              <p className="text-primary-foreground/50 text-sm leading-relaxed">
                {c.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
