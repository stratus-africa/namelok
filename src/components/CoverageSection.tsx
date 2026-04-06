import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
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
    <section id="coverage" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            Coverage Area
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Growing our footprint across Kajiado West, one community at a time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-sm border border-border"
          >
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-serif text-xl text-foreground">Connected Communities</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {connected.map((c) => (
                <Badge key={c} variant="secondary" className="bg-accent/30 text-foreground rounded-full px-4 py-1.5 text-sm">
                  {c}
                </Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl p-8 shadow-sm border border-border"
          >
            <div className="flex items-center gap-2 mb-6">
              <Clock className="h-5 w-5 text-primary" />
              <h3 className="font-serif text-xl text-foreground">Coming Soon</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {expansion.map((c) => (
                <Badge key={c} variant="outline" className="rounded-full px-4 py-1.5 text-sm border-primary/30 text-muted-foreground">
                  {c}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="https://www.google.com/maps/d/u/0/viewer?mid=1xYZ_placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            View full coverage map →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
