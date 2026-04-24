import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download, ArrowDown, Linkedin, Code2, Github } from "lucide-react";

const ROLES = ["AI Engineer", "LLM Developer", "RAG Architect", "Data Scientist"];

function useTypewriter() {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    const delay = del ? 50 : 100;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1500);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return text;
}

export function Hero() {
  const role = useTypewriter();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-secondary/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-primary/15 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs"
          style={{ borderColor: "color-mix(in oklab, var(--success) 35%, transparent)", backgroundColor: "color-mix(in oklab, var(--success) 8%, transparent)", color: "var(--success)" }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full" style={{ backgroundColor: "var(--success)", boxShadow: "0 0 12px var(--success)" }} />
          Available from May 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">Shiva Poorani</span>
          <span className="ml-3 align-middle text-3xl text-foreground/80 md:text-4xl lg:text-5xl">
            G H
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex h-10 items-center justify-center font-mono text-xl text-primary md:text-2xl"
        >
          <span className="text-muted-foreground">{`>`}_</span>
          <span className="ml-3">{role}</span>
          <span className="ml-1 inline-block h-6 w-0.5 animate-blink bg-primary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Building production-grade AI systems that scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="mailto:shivaspl164@gmail.com?subject=Let%27s%20connect&body=Hi%20Shiva%2C"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-8 py-3.5 font-medium text-primary-foreground shadow-[0_0_30px_oklch(0.78_0.18_200/40%)] transition-all hover:scale-105 hover:shadow-[0_0_50px_oklch(0.78_0.18_200/70%)]"
          >
            <Mail size={18} />
            Contact Me
          </a>
          <a
            href="/Shiva_Poorani_Resume.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full border border-secondary/50 bg-secondary/10 px-8 py-3.5 font-medium text-foreground backdrop-blur transition-all hover:border-secondary hover:bg-secondary/20 hover:shadow-[0_0_30px_oklch(0.65_0.25_295/40%)]"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {[
            { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/shiva-poorani-a81a00228/" },
            { icon: Code2, label: "LeetCode", href: "https://leetcode.com/u/shiva_poorani/" },
            { icon: Github, label: "GitHub", href: "https://github.com/shiva-poorani" },
            { icon: Mail, label: "Email", href: "mailto:shivaspl164@gmail.com" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-sm text-muted-foreground backdrop-blur transition-all hover:border-primary/60 hover:text-primary hover:shadow-[0_0_20px_oklch(0.78_0.18_200/40%)]"
            >
              <s.icon size={14} />
              <span className="hidden sm:inline">{s.label}</span>
            </a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
          aria-label="Scroll down"
        >
          <ArrowDown className="animate-float" size={24} />
        </motion.a>
      </div>
    </section>
  );
}