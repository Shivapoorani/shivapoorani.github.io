import { createContext, useContext, useState, type ReactNode } from "react";
import { Brain, BarChart3, Briefcase, MessageSquareCode } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type RoleKey = "ai" | "data" | "business" | "prompt";

export type RoleProfile = {
  key: RoleKey;
  label: string;
  short: string;
  icon: LucideIcon;
  accent: "primary" | "secondary" | "accent" | "success";
  tagline: string;
  typewriter: string[];
  highlightSkills: string[];
};

export const ROLES: RoleProfile[] = [
  {
    key: "ai",
    label: "AI Engineer",
    short: "AI",
    icon: Brain,
    accent: "primary",
    tagline: "Building production-grade AI systems that scale.",
    typewriter: ["AI Engineer", "LLM Developer", "RAG Architect", "LangChain Builder"],
    highlightSkills: ["LLMs", "RAG Pipelines", "LangChain", "Ollama", "Python", "PostgreSQL"],
  },
  {
    key: "data",
    label: "Data Analyst",
    short: "Data",
    icon: BarChart3,
    accent: "secondary",
    tagline: "Turning messy data into decisions you can ship on Monday.",
    typewriter: ["Data Analyst", "SQL Storyteller", "Insight Generator", "Dashboard Builder"],
    highlightSkills: ["SQL", "PostgreSQL", "Python", "Tableau", "Excel", "Statistical Modeling"],
  },
  {
    key: "business",
    label: "Business Analyst",
    short: "Business",
    icon: Briefcase,
    accent: "accent",
    tagline: "Bridging stakeholders, data, and AI to deliver measurable outcomes.",
    typewriter: ["Business Analyst", "Requirements Translator", "Process Optimizer", "Stakeholder Partner"],
    highlightSkills: [
      "Requirements Analysis",
      "Stakeholder Communication",
      "Data Storytelling",
      "SQL",
      "Tableau",
      "Process Design",
    ],
  },
  {
    key: "prompt",
    label: "Prompt Engineer",
    short: "Prompt",
    icon: MessageSquareCode,
    accent: "success",
    tagline: "Designing prompts and evals that make LLMs reliably useful.",
    typewriter: ["Prompt Engineer", "LLM Evaluator", "RAG Tuner", "Eval Framework Author"],
    highlightSkills: [
      "Prompting",
      "LLMs",
      "RAG Evaluation",
      "LangChain",
      "LLM Validation",
      "Eval Frameworks",
    ],
  },
];

type Ctx = {
  role: RoleProfile;
  setRoleKey: (k: RoleKey) => void;
};

const RoleCtx = createContext<Ctx | null>(null);

export function RoleProvider({ children }: { children: ReactNode }) {
  const [roleKey, setRoleKey] = useState<RoleKey>("ai");
  const role = ROLES.find((r) => r.key === roleKey) ?? ROLES[0];
  return <RoleCtx.Provider value={{ role, setRoleKey }}>{children}</RoleCtx.Provider>;
}

export function useRole() {
  const ctx = useContext(RoleCtx);
  if (!ctx) {
    // Fallback to default role so components can render outside provider (e.g. during SSR edge cases)
    return { role: ROLES[0], setRoleKey: () => {} };
  }
  return ctx;
}

export function accentClasses(accent: RoleProfile["accent"]) {
  switch (accent) {
    case "primary":
      return { text: "text-primary", bg: "bg-primary", border: "border-primary", soft: "bg-primary/10", softBorder: "border-primary/40" };
    case "secondary":
      return { text: "text-secondary", bg: "bg-secondary", border: "border-secondary", soft: "bg-secondary/10", softBorder: "border-secondary/40" };
    case "accent":
      return { text: "text-accent", bg: "bg-accent", border: "border-accent", soft: "bg-accent/10", softBorder: "border-accent/40" };
    case "success":
      return { text: "text-success", bg: "bg-success", border: "border-success", soft: "bg-success/10", softBorder: "border-success/40" };
  }
}