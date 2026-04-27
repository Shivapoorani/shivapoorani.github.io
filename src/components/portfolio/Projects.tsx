import { motion } from "framer-motion";
import {
  Cpu,
  Eye,
  Github,
  ExternalLink,
  Bot,
  Bug,
  TestTube2,
  Shield,
  Gauge,
  Accessibility,
  Code2,
  Activity,
  Sparkles,
  Database,
  BarChart3,
} from "lucide-react";
import { Section } from "./Section";

const xeragoProjects = [
  {
    icon: Bot,
    title: "Scoutigo — Agentic AI Interview Platform",
    date: "Xerago · 2025",
    accent: "secondary" as const,
    description:
      "Built the AI backend for an agentic interview application that conducts AI-led interviews, generates role-specific questions, and evaluates candidates end-to-end.",
    contributions: [
      "Designed and shipped the full RAG pipeline powering contextual question generation",
      "Orchestrated multi-step reasoning with LangChain agents and tool calling",
      "Integrated Ollama-hosted LLMs for private, low-latency inference",
      "Built the candidate evaluation engine scoring responses across competencies",
    ],
    tags: ["RAG", "LangChain", "Ollama", "Python", "PostgreSQL"],
    badges: ["Production"],
  },
  {
    icon: Bug,
    title: "DebugAI — Intelligent Code Debugging",
    date: "Xerago · 2025",
    accent: "primary" as const,
    description:
      "An LLM-powered debugging assistant that auto-detects bugs, suggests fixes, and explains errors in plain language for faster developer workflows.",
    contributions: [
      "Implemented LLM-driven bug detection across multiple language runtimes",
      "Built a PostgreSQL knowledge store of recurring error patterns and fixes",
      "Generated plain-language explanations to accelerate developer onboarding",
    ],
    tags: ["LLMs", "Python", "PostgreSQL", "Prompt Engineering"],
    badges: ["Production"],
  },
];

const autotestModules = [
  { icon: Code2, name: "Functional Testing" },
  { icon: Accessibility, name: "Accessibility Testing" },
  { icon: Shield, name: "Security Testing" },
  { icon: Gauge, name: "Performance Testing" },
  { icon: Sparkles, name: "Codegen Testing" },
  { icon: Activity, name: "Load Testing" },
  { icon: TestTube2, name: "LLM Validation" },
  { icon: Database, name: "RAG Evaluation" },
];

const academicProjects = [
  {
    icon: BarChart3,
    title: "E-Commerce Sales Trend Analysis",
    date: "Jan 2025",
    description:
      "Cleaned and analyzed a 50,000+ row e-commerce dataset with Python (Pandas, Matplotlib) and SQL — surfaced seasonal purchase patterns and top-performing categories. Built an interactive Tableau dashboard visualizing revenue trends, customer segmentation, and KPIs to turn raw transactional data into actionable business insight.",
    tags: ["Python", "Pandas", "SQL", "Tableau", "Data Analytics"],
    github: "https://github.com/shivapoorani",
    demo: null,
    badge: "Personal Project",
  },
  {
    icon: Cpu,
    title: "Smart Kitchen Grain Dispenser with Gesture",
    date: "Jun 2024",
    description:
      "Implemented gesture recognition for an intuitive UI, optimized grain dispensing algorithms to reduce waste, and ensured precise portion control through sensor integration and data analysis.",
    tags: ["Computer Vision", "IoT", "Sensors", "Python"],
    github: "https://github.com/shiva-poorani",
    demo: null,
    badge: "College Project",
  },
  {
    icon: Eye,
    title: "Color Blindness Prediction",
    date: "Sep 2023",
    description:
      "Evaluated KNN, Logistic Regression, SVM, Decision Trees, and Random Forest using Python and scikit-learn. Analyzed metrics to optimize accuracy. Presented at International Conference, SA Engineering College (Mar 2024).",
    tags: ["scikit-learn", "ML", "Research", "Python"],
    github: "https://github.com/shiva-poorani",
    demo: null,
    badge: "Research Paper",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      subtitle="Production AI systems shipped at Xerago, alongside earlier academic and research work."
    >
      {/* Professional / Xerago divider */}
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-secondary">
          Professional · Xerago
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {xeragoProjects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="card-gradient border-glow group relative overflow-hidden rounded-2xl p-7"
          >
            <div
              className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-80 ${
                p.accent === "secondary" ? "bg-secondary/25" : "bg-primary/25"
              }`}
            />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                    p.accent === "secondary"
                      ? "from-secondary/25 to-primary/20 text-secondary"
                      : "from-primary/25 to-secondary/20 text-primary"
                  }`}
                >
                  <p.icon size={24} />
                </div>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {p.badges.map((b) => (
                    <span
                      key={b}
                      className="rounded-full border border-success/40 bg-success/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-success"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
              <p className="font-mono text-xs text-muted-foreground">{p.date}</p>
              <h3
                className={`mt-1 text-xl font-bold text-foreground transition-colors ${
                  p.accent === "secondary"
                    ? "group-hover:text-secondary"
                    : "group-hover:text-primary"
                }`}
              >
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {p.contributions.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span
                      className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                        p.accent === "secondary" ? "bg-secondary" : "bg-primary"
                      }`}
                    />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-secondary/30 bg-secondary/10 px-2.5 py-1 font-mono text-[11px] text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}

        {/* Autotest — full width */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-gradient border-glow group relative overflow-hidden rounded-2xl p-7 md:col-span-2"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/25 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />
          <div className="relative">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-primary/20 text-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <TestTube2 size={24} />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">
                    Xerago · 2025
                  </p>
                  <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-accent">
                    Autotest — Unified AI Testing Suite
                  </h3>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full border border-success/40 bg-success/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-success">
                  Production
                </span>
                <span className="rounded-full border border-accent/50 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                  Solo Build
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Sole developer behind an automated testing platform unifying eight specialised
              testing tools under one workflow — from functional and accessibility to LLM and
              RAG evaluation.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {autotestModules.map((m) => (
                <div
                  key={m.name}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-muted/30 p-3 transition-colors hover:border-accent/60 hover:bg-accent/5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                    <m.icon size={16} />
                  </div>
                  <span className="text-xs font-medium text-foreground/90">{m.name}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Node.js", "BullMQ", "LLMs", "RAG", "UI/UX"].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-accent/30 bg-accent/10 px-2.5 py-1 font-mono text-[11px] text-accent"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>

      {/* Academic divider */}
      <div className="mb-8 mt-16 flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          Academic & Research
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {academicProjects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="card-gradient border-glow group relative overflow-hidden rounded-2xl p-7"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <p.icon size={24} />
                </div>
                <span className="font-mono text-xs text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-secondary/30 bg-secondary/10 px-2.5 py-1 font-mono text-[11px] text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-foreground/90 transition-all hover:border-primary/60 hover:text-primary"
                >
                  <Github size={14} /> Code
                </a>
                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:from-primary/40 hover:to-secondary/40"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-lg border border-secondary/40 bg-secondary/10 px-3 py-1.5 text-xs font-medium text-secondary">
                    {p.badge}
                  </span>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}