import { motion } from "framer-motion";
import { Zap, Wifi, Clock, Ticket } from "lucide-react";

const vouchers = [
  {
    icon: Zap,
    label: "Daily Boost",
    price: "20",
    speed: "10 Mbps",
    duration: "9 Hours",
    desc: "Perfect for browsing, study, and a full day of work.",
    accent: "bg-primary/10 text-primary",
  },
  {
    icon: Wifi,
    label: "Power Hour",
    price: "100",
    speed: "Unlimited",
    duration: "1 Hour",
    desc: "Heavy downloads, video calls, or streaming on demand.",
    accent: "bg-sage/20 text-sage-foreground",
    highlight: true,
  },
];

export function HotspotSection() {
  return (
    <section id="hotspots" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Pay As You Go
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Hotspot <span className="italic text-primary">Vouchers</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Connect to a Namelok community hotspot and pay only for what you need — no contracts, no installation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {vouchers.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl ${
                v.highlight
                  ? "bg-card border-primary/30 ring-1 ring-primary/10"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${v.accent}`}>
                  <v.icon className="h-6 w-6" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground font-medium tracking-wider uppercase">KES</div>
                  <div className="text-4xl font-bold text-foreground leading-none">{v.price}</div>
                </div>
              </div>

              <h3 className="font-serif text-2xl text-foreground mb-2">{v.label}</h3>
              <p className="text-muted-foreground text-sm mb-6">{v.desc}</p>

              <div className="grid grid-cols-2 gap-3 pt-5 border-t border-border">
                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Speed</div>
                    <div className="text-sm font-semibold text-foreground">{v.speed}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                    <div className="text-sm font-semibold text-foreground">{v.duration}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto bg-muted/40 rounded-2xl p-6 flex items-start gap-4 border border-border"
        >
          <Ticket className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">How it works:</span> Connect to the{" "}
            <span className="font-mono text-foreground">Namelok</span> Wi-Fi network at any community hotspot,
            pay via M-PESA, and start browsing instantly. No registration required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
