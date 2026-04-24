import { motion } from "framer-motion";
import { Cpu, Eye } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    icon: Cpu,
    title: "Smart Kitchen Grain Dispenser with Gesture",
    date: "Jun 2024",
    description:
      "Implemented gesture recognition for an intuitive UI, optimized grain dispensing algorithms to reduce waste, and ensured precise portion control through sensor integration and data analysis.",
    tags: ["Computer Vision", "IoT", "Sensors", "Python"],
  },
  {
    icon: Eye,
    title: "Color Blindness Prediction",
    date: "Sep 2023",
    description:
      "Evaluated KNN, Logistic Regression, SVM, Decision Trees, and Random Forest using Python and scikit-learn. Analyzed metrics to optimize accuracy. Presented at International Conference, SA Engineering College (Mar 2024).",
    tags: ["scikit-learn", "ML", "Research", "Python"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      subtitle="Selected work spanning AI, IoT, and machine learning research."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
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
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}