import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "./Section";
import { ROLES, useRole, accentClasses, type RoleKey } from "./RoleContext";

type RoleDetail = {
  why: string;
  skills: string[];
  evidence: string[];
};

const DETAILS: Record<RoleKey, RoleDetail> = {
  ai: {
    why: "Shipping production LLM systems end-to-end at Xerago — from RAG architecture to deployment.",
    skills: ["LLMs", "RAG Pipelines", "LangChain", "Ollama", "Python", "PostgreSQL", "APIs", "Eval Frameworks"],
    evidence: [
      "Scoutigo — agentic AI interview platform with full RAG + LangChain stack",
      "DebugAI — LLM-powered code debugging across multiple runtimes",
      "Autotest — sole developer of an 8-module AI testing suite",
    ],
  },
  data: {
    why: "B.Tech in AI & Data Science (CGPA 8.3) plus hands-on analytics in production AI workflows.",
    skills: ["SQL", "PostgreSQL", "Python", "Tableau", "Excel", "Statistical Modeling", "Data Visualization", "R Programming"],
    evidence: [
      "Built candidate evaluation analytics for Scoutigo (scoring across competencies)",
      "Color Blindness Prediction — benchmarked 5 ML algorithms, presented at Intl. Conference",
      "Data Science Internship at GradTwin — applied analytics to real project goals",
    ],
  },
  business: {
    why: "Comfortable translating between client needs, data signals, and engineering delivery.",
    skills: [
      "Requirements Analysis",
      "Stakeholder Communication",
      "Process Design",
      "Data Storytelling",
      "SQL",
      "Tableau",
      "Problem-solving",
      "Documentation",
    ],
    evidence: [
      "Delivered client-facing AI solutions at Xerago focused on usability & ROI",
      "Gathered requirements and shaped scope for Autotest as the solo developer",
      "Bridged academic research with industry application (recognised in internship)",
    ],
  },
  prompt: {
    why: "Designed prompts, RAG pipelines and LLM evaluation harnesses used in production.",
    skills: [
      "Prompting",
      "LLMs",
      "LangChain",
      "RAG Evaluation",
      "LLM Validation",
      "Eval Frameworks",
      "Hallucination Reduction",
      "Tool Calling",
    ],
    evidence: [
      "Engineered evaluation & testing frameworks for reliable LLM outputs",
      "Designed RAG architectures specifically to reduce hallucinations",
      "Built LLM Validation + RAG Evaluation modules inside Autotest",
    ],
  },
};

export function RolesMatrix() {
  const { role: active, setRoleKey } = useRole();

  return (
    <Section
      id="roles"
      eyebrow="Roles I'm targeting"
      title="One profile, four lenses"
      subtitle="Pick the role you're hiring for — see how my skills and projects map to it."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {ROLES.map((r, i) => {
          const a = accentClasses(r.accent);
          const d = DETAILS[r.key];
          const isActive = r.key === active.key;
          return (
            <motion.button
              key={r.key}
              onClick={() => setRoleKey(r.key)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card-gradient group relative overflow-hidden rounded-2xl border p-6 text-left transition-all hover:-translate-y-1 ${
                isActive ? `${a.softBorder} shadow-[0_0_30px_oklch(0.78_0.18_200/25%)]` : "border-border/60"
              }`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${a.soft} ${a.text}`}>
                  <r.icon size={20} />
                </div>
                {isActive && (
                  <span className={`font-mono text-[10px] uppercase tracking-wider ${a.text}`}>
                    Active
                  </span>
                )}
              </div>
              <h3 className={`text-lg font-bold ${isActive ? a.text : "text-foreground"}`}>
                {r.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.why}</p>

              <div className="mt-4">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Relevant skills
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {d.skills.map((s) => (
                    <span
                      key={s}
                      className={`rounded-md border px-2 py-0.5 text-[11px] ${a.softBorder} ${a.soft} ${a.text}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  Evidence
                </p>
                <ul className="space-y-1.5">
                  {d.evidence.map((e) => (
                    <li key={e} className="flex gap-2 text-xs text-muted-foreground">
                      <Check size={13} className={`mt-0.5 shrink-0 ${a.text}`} />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.button>
          );
        })}
      </div>
    </Section>
  );
}