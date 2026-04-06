import { motion } from "framer-motion";
import { Wifi, Radio, School, HeartPulse, BookOpen, Cctv } from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Community Hotspots",
    desc: "Public Wi-Fi access points in trading centres, enabling affordable browsing and mobile money services.",
  },
  {
    icon: Radio,
    title: "Dedicated Access Points",
    desc: "Home and business connections with dedicated bandwidth for reliable, always-on internet.",
  },
  {
    icon: School,
    title: "School Connectivity",
    desc: "Free or subsidised connections to primary and secondary schools, unlocking digital learning.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Connectivity",
    desc: "Connecting health centres for telemedicine, e-health records, and real-time disease reporting.",
  },
  {
    icon: BookOpen,
    title: "Digital Literacy",
    desc: "Training programmes for students and community members on internet safety, digital skills, and online tools.",
  },
  {
    icon: Cctv,
    title: "Smart Solutions",
    desc: "CCTV surveillance, smart irrigation systems, and learning management systems for institutions.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From household internet to smart community solutions, we build connectivity that serves everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/30 mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
