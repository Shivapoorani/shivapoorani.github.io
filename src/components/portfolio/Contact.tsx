import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Code2 } from "lucide-react";
import { Section } from "./Section";

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
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's connect"
      subtitle="Open to collaborations, AI engineering roles, and interesting problems. Drop a message — I reply quickly."
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-gradient border-glow group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_25px_oklch(0.78_0.18_200/60%)]">
                <l.icon size={20} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  {l.label}
                </div>
                <div className="font-medium text-foreground">{l.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin size={14} className="text-primary" /> Based in Chennai, India · Available worldwide
        </motion.div>
      </div>
    </Section>
  );
}