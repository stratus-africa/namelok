import { motion } from "framer-motion";
import { Home, School, Heart, MapPin } from "lucide-react";

const stats = [
  { icon: Home, value: "250+", label: "Homes & SMEs Connected", color: "bg-primary/10 text-primary" },
  { icon: School, value: "4", label: "Schools Online", color: "bg-accent/15 text-accent" },
  { icon: Heart, value: "4", label: "Health Centres", color: "bg-primary/10 text-primary" },
  { icon: MapPin, value: "7", label: "Communities", color: "bg-accent/15 text-accent" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              Who We Are
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight">
              Community-rooted
              <br />
              <span className="italic text-primary">connectivity</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Namelok Wireless is a community-rooted Internet Service Provider (CISP) serving Kajiado West Sub-County, Kenya. We deliver affordable, reliable internet to homes, schools, and health centres.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              As a social enterprise, we reinvest surplus revenue to expand access and empower communities through digital literacy programmes — building capacity alongside connectivity.
            </p>
          </motion.div>

          {/* Right: stats bento grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="font-serif text-4xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
