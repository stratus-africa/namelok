import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is there an installation fee?",
    a: "Yes — a one-time installation fee of KES 2,000 covers the site survey, equipment setup, and initial configuration for all monthly home and SME plans. Hotspot vouchers have no installation fee.",
  },
  {
    q: "How is CCTV pricing determined?",
    a: "CCTV pricing is custom and based on a free on-site survey. Cost depends on the number of cameras, cabling distance, storage requirements, and whether you need remote viewing. Contact us to schedule a survey.",
  },
  {
    q: "Which plans are best for homes vs SMEs?",
    a: "Homes typically choose 5–10 Mbps for streaming, browsing, and study. Small businesses (SMEs) usually need 15–25 Mbps for point-of-sale systems, video calls, cloud apps, and multiple staff devices. We're happy to recommend the right tier for your usage.",
  },
  {
    q: "What is the difference between a voucher and a monthly plan?",
    a: "Hotspot vouchers (KES 20 or KES 100) are pay-as-you-go and only work at our community hotspot locations. Monthly plans give you a dedicated connection at your home or business with unlimited usage at your chosen speed.",
  },
  {
    q: "Do monthly plans have a data cap?",
    a: "No. All monthly home and SME plans include unlimited data at your subscribed speed.",
  },
  {
    q: "How do I pay?",
    a: "All payments — vouchers, monthly subscriptions, installation, and CCTV — are made via M-PESA. You'll receive payment instructions after sign-up.",
  },
];

export function HotspotFAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Hotspots & <span className="italic text-primary">Plans</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Quick answers to the most common questions about our pricing and services.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif text-lg text-foreground hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
