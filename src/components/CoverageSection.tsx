import { motion } from "framer-motion";
import { MapPin, Clock, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const connected = [
  "Kiserian", "Ongata Rongai", "Rimpa", "Olooltepes",
  "Ewuaso Kedong", "Magadi", "Oloika",
];

const expansion = [
  "Ngong Hills", "Matasia", "Kibiko", "Suswa", "Shompole",
];

export function CoverageSection() {
  return (
    <section id="coverage" className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Where We Are
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Coverage <span className="italic text-primary">area</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Column 1: Connected Communities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">Connected Communities</h3>
                <p className="text-muted-foreground text-sm">Currently live and serving</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {connected.map((c) => (
                <Badge
                  key={c}
                  variant="secondary"
                  className="bg-accent/10 text-foreground rounded-full px-5 py-2 text-sm font-medium hover:bg-accent/20 transition-colors cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-accent mr-2 inline-block" />
                  {c}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-3xl p-8 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-foreground">Coming Soon</h3>
                <p className="text-muted-foreground text-sm">Expansion in progress</p>
              </div>
            </div>
            <div className="space-y-2">
              {expansion.map((c) => (
                <div
                  key={c}
                  className="flex items-center justify-between py-2.5 px-4 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <span className="text-foreground text-sm font-medium">{c}</span>
                  <Badge variant="outline" className="text-xs rounded-full border-primary/30 text-primary">
                    Planned
                  </Badge>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Coverage Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-3xl border border-border overflow-hidden flex flex-col"
          >
            <div className="flex-1">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1rpCzmUsnebNXG_gRBZCYMDq_eAbMiQs&ehbc=2E312F"
                width="100%"
                height="100%"
                className="w-full min-h-[400px] h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Namelok Wireless Coverage Map"
              />
            </div>
            <div className="p-4">
              <a
                href="https://www.google.com/maps/d/viewer?mid=1rpCzmUsnebNXG_gRBZCYMDq_eAbMiQs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium text-sm"
              >
                Open full map
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
