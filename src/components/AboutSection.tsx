import { motion } from "framer-motion";
import { Home, School, Heart, MapPin } from "lucide-react";

const stats = [
  { icon: Home, value: "250+", label: "Homes Connected" },
  { icon: School, value: "4", label: "Schools Online" },
  { icon: Heart, value: "4", label: "Health Centres" },
  { icon: MapPin, value: "7", label: "Communities Served" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Who We Are
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Namelok Wireless is a community-rooted Internet Service Provider (CISP) serving Kajiado West Sub-County, Kenya. We deliver affordable, reliable internet to homes, schools, and health centres — reinvesting revenue to expand access and empower communities through digital literacy.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 text-center shadow-sm border border-border"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="font-serif text-3xl md:text-4xl text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
