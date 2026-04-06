import { motion } from "framer-motion";
import { Wifi, Radio, School, HeartPulse, BookOpen, Cctv } from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Community Hotspots",
    desc: "Public Wi-Fi in trading centres for affordable browsing and mobile money.",
    span: "",
  },
  {
    icon: Radio,
    title: "Dedicated Access",
    desc: "Home and business connections with dedicated bandwidth for reliable internet.",
    span: "md:col-span-2",
  },
  {
    icon: School,
    title: "School Connectivity",
    desc: "Free or subsidised connections unlocking digital learning for students.",
    span: "md:col-span-2",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Telemedicine, e-health records, and real-time disease reporting.",
    span: "",
  },
  {
    icon: BookOpen,
    title: "Digital Literacy",
    desc: "Training in internet safety, digital skills, coding, and online tools.",
    span: "",
  },
  {
    icon: Cctv,
    title: "Smart Solutions",
    desc: "CCTV, smart irrigation, and learning management systems.",
    span: "md:col-span-2",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
              Our <span className="italic text-primary">Services</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            From household internet to smart community solutions — connectivity that serves everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`bg-card rounded-2xl p-6 border border-border group hover:border-primary/20 hover:shadow-lg transition-all duration-300 ${s.span}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
