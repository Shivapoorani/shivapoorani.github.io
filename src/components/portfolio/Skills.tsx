import { motion } from "framer-motion";
import { Brain, Code2, Database, Wrench, Users } from "lucide-react";
import { Section } from "./Section";

const groups = [
  {
    icon: Brain,
    title: "AI / ML",
    color: "from-primary/20 to-primary/5",
    items: ["LLMs", "RAG Pipelines", "LangChain", "Prompting", "Machine Learning", "Statistical Modeling"],
  },
  {
    icon: Code2,
    title: "Programming",
    color: "from-accent/20 to-accent/5",
    items: ["Python", "R Programming", "SQL"],
  },
  {
    icon: Database,
    title: "Data",
    color: "from-secondary/20 to-secondary/5",
    items: ["Data Analytics", "Data Visualization", "Tableau", "Excel"],
  },
  {
    icon: Wrench,
    title: "Tools & Infra",
    color: "from-primary/20 to-secondary/10",
    items: ["PostgreSQL", "APIs", "Cursor"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    color: "from-accent/20 to-primary/10",
    items: ["Communication", "Teamwork", "Problem-solving", "Adaptability"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The toolkit"
      subtitle="Technologies and disciplines I use to ship reliable AI."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-gradient border-glow group relative overflow-hidden rounded-2xl p-6"
          >
            <div
              className={`absolute inset-0 -z-10 bg-gradient-to-br ${g.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <g.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-foreground/90 transition-all hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}