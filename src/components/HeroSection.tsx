import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-earth-dark/70 via-earth-dark/50 to-earth-dark/80" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-primary-foreground/80 text-sm font-medium mb-8"
          >
            <Wifi className="h-4 w-4 text-sage" />
            Community Internet for Kajiado West
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 leading-[0.95] tracking-tight"
          >
            Enda Sopa
            <br />
            <span className="italic text-sage">Pooki</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-primary-foreground/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Powering connectivity, empowering communities. Bridging the digital divide in rural Kenya — one community at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Button size="lg" className="rounded-full text-base px-8 h-12 gap-2 group" asChild>
              <a href="#contact">
                Get Connected
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full text-base px-8 h-12 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <a href="#coverage">View Coverage</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
