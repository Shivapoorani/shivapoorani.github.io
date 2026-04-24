import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";

const jobs = [
  {
    role: "AI Engineer",
    company: "Xerago",
    location: "Chennai, Tamil Nadu",
    period: "Oct 2025 – Apr 2026",
    bullets: [
      "Developed and deployed production-grade AI systems using LLMs and RAG pipelines.",
      "Designed scalable RAG architectures to reduce hallucinations and improve response quality.",
      "Orchestrated LLM workflows using LangChain for complex reasoning and tool integration.",
      "Engineered evaluation and testing frameworks for reliable, high-quality data outputs.",
      "Integrated PostgreSQL and APIs for end-to-end deployment from development to production.",
      "Used Cursor for rapid AI prototyping and accelerating solution delivery.",
      "Delivered client-facing AI solutions focused on performance, scalability, and usability.",
      "Achieved improved response accuracy and low-latency performance in production systems.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "GradTwin Services Pvt. Ltd.",
    location: "Remote",
    period: "Sep 2024 – Nov 2024",
    bullets: [
      "Participated in a 3-month internship gaining hands-on experience in data analysis and modeling.",
      "Applied data science methodologies to solve project goals with technical proficiency.",
      "Received recognition for bridging academic knowledge with practical industry applications.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Work timeline">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-secondary md:left-1/2" />
        <div className="space-y-12">
          {jobs.map((j, i) => (
            <motion.div
              key={j.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative pl-12 md:grid md:grid-cols-2 md:gap-10 md:pl-0 ${
                i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
              }`}
            >
              <div className="absolute left-0 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-primary/50 bg-background shadow-[0_0_20px_oklch(0.78_0.18_200/50%)] md:left-1/2 md:-translate-x-1/2">
                <Briefcase size={14} className="text-primary" />
              </div>
              <div className={i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}>
                <p className="font-mono text-xs uppercase tracking-wider text-primary">
                  {j.period}
                </p>
                <h3 className="mt-2 text-xl font-bold text-foreground">{j.role}</h3>
                <p className="text-secondary">{j.company}</p>
                <p className="text-sm text-muted-foreground">{j.location}</p>
              </div>
              <div className={i % 2 === 0 ? "md:pl-12" : "md:pr-12"}>
                <ul className="card-gradient border-glow space-y-2 rounded-2xl p-5 text-sm text-muted-foreground">
                  {j.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}