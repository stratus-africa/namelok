import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactInfo = [
  { icon: Mail, label: "info@namelokwireless.co.ke", href: "mailto:info@namelokwireless.co.ke" },
  { icon: Phone, label: "+254 721 325277", href: "tel:+254721325277" },
  { icon: MapPin, label: "Kajiado West, Kenya", href: undefined },
];

export function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.subject || !form.message.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.from("contact_submissions").insert({
        id,
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        subject: form.subject,
        message: form.message.trim(),
      });

      if (error) throw error;

      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-earth-dark" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <span className="text-sage font-semibold text-sm tracking-widest uppercase mb-4 block">
              Contact
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6 leading-tight">
              Get in <span className="italic text-sage">touch</span>
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-10">
              Ready to connect? Have questions? We'd love to hear from you.
            </p>

            <div className="space-y-4 mb-10">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sage/15 text-sage flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  {item.href ? (
                    <a href={item.href} className="text-primary-foreground/70 hover:text-sage transition-colors text-sm">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-primary-foreground/70 text-sm">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10">
              <iframe
                title="Namelok Wireless Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891850862!2d36.49!3d-1.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0e!2sKajiado!5e0!3m2!1sen!2ske!4v1"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Right form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Input
                placeholder="Your Name *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="bg-white/5 border-white/10 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xl h-12"
              />
              <Input
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="bg-white/5 border-white/10 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xl h-12"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={20}
                className="bg-white/5 border-white/10 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xl h-12"
              />
              <Select value={form.subject} onValueChange={(v) => setForm({ ...form, subject: v })}>
                <SelectTrigger className="bg-white/5 border-white/10 text-primary-foreground rounded-xl h-12">
                  <SelectValue placeholder="Topic *" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="get-connected">Get Connected</SelectItem>
                  <SelectItem value="support">Get Support</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="general">General Enquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Textarea
              placeholder="Your Message *"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              className="bg-white/5 border-white/10 text-primary-foreground placeholder:text-primary-foreground/30 rounded-xl mb-6"
            />
            <Button
              type="submit"
              size="lg"
              className="rounded-full w-full h-12 gap-2 group"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
