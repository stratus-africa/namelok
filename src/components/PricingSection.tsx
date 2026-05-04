import { motion } from "framer-motion";
import { Check, Wifi, Zap, Camera, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const homePlans = [
  { speed: "5 Mbps", price: "1,000", popular: false },
  { speed: "8 Mbps", price: "1,500", popular: false },
  { speed: "10 Mbps", price: "2,000", popular: true },
  { speed: "15 Mbps", price: "3,000", popular: false },
  { speed: "25 Mbps", price: "5,000", popular: false },
];

const hotspotPlans = [
  { label: "Daily Boost", price: "20", desc: "10 Mbps for 9 Hours", icon: Zap },
  { label: "Power Hour", price: "100", desc: "Unlimited for 1 Hour", icon: Wifi },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Plans & Pricing
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Affordable <span className="italic text-primary">Connectivity</span> for Everyone
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparent pricing in KES. No hidden fees — just reliable internet for homes, businesses, and communities.
          </p>
        </motion.div>

        {/* Home & Business Plans */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Wifi className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground">
              Home & Business Plans <span className="text-muted-foreground text-base font-sans">/ month</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {homePlans.map((plan, i) => (
              <motion.div
                key={plan.speed}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`relative bg-card rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg ${
                  plan.popular
                    ? "border-primary shadow-md ring-1 ring-primary/20"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                    Most Popular
                  </span>
                )}
                <div className="text-center">
                  <div className="font-serif text-2xl text-foreground mb-3">{plan.speed}</div>
                  <div className="flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-xs text-muted-foreground">KES</span>
                    <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  </div>
                  <div className="text-xs text-muted-foreground border-t border-border pt-3">
                    Unlimited / Month
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="bg-card rounded-2xl p-5 border border-border flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/20 text-foreground flex items-center justify-center flex-shrink-0">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Installation Fee</div>
                <div className="text-sm text-muted-foreground">One-time KES 2,000</div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-5 border border-border flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-accent/20 text-foreground flex items-center justify-center flex-shrink-0">
                <Camera className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold text-foreground">CCTV Solutions</div>
                <div className="text-sm text-muted-foreground">Custom pricing based on site survey</div>
              </div>
            </div>
          </div>
        </div>

        {/* Hotspot Plans */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Zap className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-foreground">
              Hotspot Vouchers <span className="text-muted-foreground text-base font-sans">/ pay-as-you-go</span>
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {hotspotPlans.map((plan, i) => (
              <motion.div
                key={plan.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex items-center gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <plan.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="font-serif text-xl text-foreground mb-1">{plan.label}</div>
                  <div className="text-sm text-muted-foreground">{plan.desc}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">KES</div>
                  <div className="text-3xl font-bold text-primary leading-none">{plan.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="rounded-full">
            <a href="#contact">Get Connected Today</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
