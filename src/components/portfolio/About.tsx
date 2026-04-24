import { motion } from "framer-motion";
import { GraduationCap, Languages, MapPin, Sparkles, Briefcase, Rocket } from "lucide-react";
import { Section } from "./Section";

const stats = [
  { icon: GraduationCap, label: "B.Tech AI & DS", value: "CGPA 8.3" },
  { icon: Sparkles, label: "Specialty", value: "LLMs · RAG" },
  { icon: Briefcase, label: "Experience", value: "7+ Months" },
  { icon: Rocket, label: "Projects Delivered", value: "5+" },
  { icon: Languages, label: "Languages", value: "EN · TA · FR" },
  { icon: MapPin, label: "Based in", value: "Chennai, India" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Engineering intelligence">
      <div className="grid items-center gap-12 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Enthusiastic <span className="text-foreground font-medium">AI Engineer</span> with a
            B.Tech in Artificial Intelligence & Data Science. Experienced in building and deploying
            production-grade AI systems using{" "}
            <span className="text-primary">LLMs, RAG pipelines, and LangChain</span>.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Passionate about creating scalable, real-world AI solutions with a strong focus on
            performance and usability — turning research into reliable, low-latency products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4 lg:col-span-2"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="card-gradient border-glow rounded-2xl p-5"
            >
              <s.icon className="mb-3 text-primary" size={22} />
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
              <div className="mt-1 font-semibold text-foreground">{s.value}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}