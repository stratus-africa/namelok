import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

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
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    // TODO: Wire to Lovable Cloud edge function
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-earth-dark text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Ready to connect? Have questions? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <Input
              placeholder="Your Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl"
            />
            <Input
              type="email"
              placeholder="Email Address *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl"
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl"
            />
            <Select value={form.subject} onValueChange={(v) => setForm({ ...form, subject: v })}>
              <SelectTrigger className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground rounded-xl">
                <SelectValue placeholder="What can we help with? *" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="get-connected">Get Connected</SelectItem>
                <SelectItem value="support">Get Support</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="general">General Enquiry</SelectItem>
              </SelectContent>
            </Select>
            <Textarea
              placeholder="Your Message *"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 rounded-xl"
            />
            <Button
              type="submit"
              size="lg"
              className="rounded-full w-full"
              disabled={loading}
            >
              <Send className="h-4 w-4 mr-2" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-sage flex-shrink-0" />
                  <a href="mailto:info@namelokwireless.co.ke" className="text-primary-foreground/80 hover:text-sage transition-colors">
                    info@namelokwireless.co.ke
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-sage flex-shrink-0" />
                  <span className="text-primary-foreground/80">+254 700 000 000</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-sage flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/80">
                    Kajiado West Sub-County,
                    <br />
                    Kajiado County, Kenya
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border border-primary-foreground/10">
              <iframe
                title="Namelok Wireless Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891850862!2d36.49!3d-1.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0e!2sKajiado!5e0!3m2!1sen!2ske!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
