import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  location: z.string().trim().min(2, "Location is required").max(150),
  speed: z.string().min(1, "Please choose a speed"),
  planType: z.enum(["monthly", "voucher"], {
    required_error: "Please choose a plan type",
  }),
  notes: z.string().trim().max(500).optional(),
});

const speedOptions = [
  { value: "5mbps", label: "5 Mbps — KES 1,000/mo" },
  { value: "8mbps", label: "8 Mbps — KES 1,500/mo" },
  { value: "10mbps", label: "10 Mbps — KES 2,000/mo" },
  { value: "15mbps", label: "15 Mbps — KES 3,000/mo" },
  { value: "25mbps", label: "25 Mbps — KES 5,000/mo" },
  { value: "voucher-20", label: "Voucher: 10 Mbps / 9 hr — KES 20" },
  { value: "voucher-100", label: "Voucher: Unlimited / 1 hr — KES 100" },
  { value: "not-sure", label: "Not sure — recommend for me" },
];

export function InquirySection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    speed: "",
    planType: "" as "monthly" | "voucher" | "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = inquirySchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please complete all required fields",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const data = result.data;
      const speedLabel =
        speedOptions.find((s) => s.value === data.speed)?.label || data.speed;
      const message = [
        `Location: ${data.location}`,
        `Preferred speed: ${speedLabel}`,
        `Plan type: ${data.planType === "monthly" ? "Monthly Plan" : "Hotspot Voucher"}`,
        data.notes ? `Notes: ${data.notes}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      const { error } = await supabase.from("contact_submissions").insert({
        id: crypto.randomUUID(),
        name: data.name,
        email: data.email,
        phone: data.phone,
        subject: `Hotspot/Plan Inquiry — ${data.planType}`,
        message,
      });

      if (error) throw error;

      toast({
        title: "Inquiry received!",
        description: "Our team will reach out within 24 hours.",
      });
      setForm({
        name: "",
        email: "",
        phone: "",
        location: "",
        speed: "",
        planType: "",
        notes: "",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="inquiry" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-widest uppercase mb-4">
            <Sparkles className="h-4 w-4" />
            Get a Quote
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Request <span className="italic text-primary">Connection</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tell us where you are and what you need — we'll confirm coverage and recommend the right plan.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <Label htmlFor="iname" className="mb-2 block text-foreground">
                Full Name *
              </Label>
              <Input
                id="iname"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                maxLength={100}
                className="h-12 rounded-xl"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <Label htmlFor="iemail" className="mb-2 block text-foreground">
                Email *
              </Label>
              <Input
                id="iemail"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                maxLength={255}
                className="h-12 rounded-xl"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <Label htmlFor="iphone" className="mb-2 block text-foreground">
                Phone *
              </Label>
              <Input
                id="iphone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                maxLength={20}
                className="h-12 rounded-xl"
                placeholder="+254 7XX XXX XXX"
              />
            </div>
            <div>
              <Label htmlFor="iloc" className="mb-2 block text-foreground">
                Location / Area *
              </Label>
              <Input
                id="iloc"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                maxLength={150}
                className="h-12 rounded-xl"
                placeholder="Town, village, or landmark"
              />
            </div>
          </div>

          <div className="mb-5">
            <Label className="mb-2 block text-foreground">Preferred Speed *</Label>
            <Select value={form.speed} onValueChange={(v) => setForm({ ...form, speed: v })}>
              <SelectTrigger className="h-12 rounded-xl">
                <SelectValue placeholder="Choose a speed or voucher" />
              </SelectTrigger>
              <SelectContent>
                {speedOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mb-6">
            <Label className="mb-3 block text-foreground">I'm interested in *</Label>
            <RadioGroup
              value={form.planType}
              onValueChange={(v: "monthly" | "voucher") => setForm({ ...form, planType: v })}
              className="grid sm:grid-cols-2 gap-3"
            >
              <label
                htmlFor="plan-monthly"
                className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                  form.planType === "monthly"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <RadioGroupItem value="monthly" id="plan-monthly" className="mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Monthly Plan</div>
                  <div className="text-sm text-muted-foreground">
                    Dedicated home or SME connection
                  </div>
                </div>
              </label>
              <label
                htmlFor="plan-voucher"
                className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${
                  form.planType === "voucher"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <RadioGroupItem value="voucher" id="plan-voucher" className="mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Hotspot Voucher</div>
                  <div className="text-sm text-muted-foreground">
                    Pay-as-you-go at community hotspots
                  </div>
                </div>
              </label>
            </RadioGroup>
          </div>

          <div className="mb-6">
            <Label htmlFor="inotes" className="mb-2 block text-foreground">
              Additional Notes
            </Label>
            <Input
              id="inotes"
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              maxLength={500}
              className="h-12 rounded-xl"
              placeholder="Anything else we should know?"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="rounded-full w-full h-12 gap-2 group"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
