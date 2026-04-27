import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Code2, Send, Github } from "lucide-react";
import { z } from "zod";
import { Section } from "./Section";
import { toast } from "sonner";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "shivaspl164@gmail.com",
    href: "mailto:shivaspl164@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 63803 61559",
    href: "tel:+916380361559",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "shiva-poorani",
    href: "https://linkedin.com/in/shiva-poorani-a81a00228/",
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "shiva_poorani",
    href: "https://leetcode.com/u/shiva_poorani/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Shivapoorani",
    href: "https://github.com/Shivapoorani",
  },
];

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Message too short").max(1000, "Message too long"),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Portfolio message from ${parsed.data.name}`);
    const body = encodeURIComponent(
      `${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`
    );
    window.location.href = `mailto:shivaspl164@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email app…");
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect"
      subtitle="Open to collaborations, AI engineering roles, and interesting problems. Drop a message — I reply quickly."
    >
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-gradient border-glow space-y-4 rounded-2xl p-6 md:p-8"
          noValidate
        >
          <div>
            <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_20px_oklch(0.78_0.18_200/30%)]"
              placeholder="Your name"
            />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_20px_oklch(0.78_0.18_200/30%)]"
              placeholder="you@domain.com"
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              maxLength={1000}
              className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:shadow-[0_0_20px_oklch(0.78_0.18_200/30%)]"
              placeholder="Tell me about your project or opportunity…"
            />
            {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 font-medium text-primary-foreground shadow-[0_0_25px_oklch(0.78_0.18_200/40%)] transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_oklch(0.78_0.18_200/70%)]"
          >
            <Send size={16} className="transition-transform group-hover:translate-x-1" />
            Send Message
          </button>
        </motion.form>

        <div className="space-y-3">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-gradient border-glow group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_25px_oklch(0.78_0.18_200/60%)]">
                <l.icon size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {l.label}
                </div>
                <div className="truncate font-medium text-foreground">{l.value}</div>
              </div>
            </motion.a>
          ))}
          <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
            className="flex items-center justify-center gap-2 pt-4 text-sm text-muted-foreground"
        >
            <MapPin size={14} className="text-primary" /> Chennai, India · Available worldwide
          </motion.div>
        </div>
      </div>
    </Section>
  );
}