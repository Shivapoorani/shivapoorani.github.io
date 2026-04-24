import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Wrench } from "lucide-react";
import { Section } from "./Section";

const education = [
  {
    degree: "B.Tech — Artificial Intelligence & Data Science",
    school: "Saveetha School of Engineering",
    year: "2025",
    grade: "CGPA 8.3",
  },
  {
    degree: "Higher Secondary",
    school: "Chennai Public School",
    year: "2021",
    grade: "CGPA 8.6",
  },
  {
    degree: "Secondary",
    school: "Chennai Public School",
    year: "2019",
    grade: "CGPA 7.2",
  },
];

const certs = [
  {
    icon: Award,
    title: "International Conference — Color Blindness Prediction Research",
    org: "SA Engineering College",
    date: "Mar 2024",
  },
  {
    icon: BookOpen,
    title: "AI Masterclass",
    org: "NoviTech R&D Pvt. Ltd.",
    date: "Feb–Mar 2024",
  },
  {
    icon: BookOpen,
    title: "Data Science Workshop",
    org: "IISc College, Bangalore",
    date: "Jan 2024",
  },
  {
    icon: Wrench,
    title: "IoT + Machine Learning Workshop",
    org: "Saveetha School of Engineering",
    date: "Dec 2021",
  },
];

const languages = [
  { name: "English", level: 95 },
  { name: "Tamil", level: 100 },
  { name: "French", level: 55 },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education & More" title="Foundations">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
            <GraduationCap size={20} className="text-primary" /> Education
          </h3>
          <div className="space-y-4">
            {education.map((e, i) => (
              <motion.div
                key={e.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-gradient border-glow flex items-start justify-between rounded-2xl p-5"
              >
                <div>
                  <h4 className="font-semibold text-foreground">{e.degree}</h4>
                  <p className="text-sm text-muted-foreground">{e.school}</p>
                </div>
                <div className="text-right">
                  <div className="font-mono text-xs text-primary">{e.year}</div>
                  <div className="text-sm font-medium text-secondary">{e.grade}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="mb-5 mt-10 flex items-center gap-2 text-lg font-semibold">
            🌐 Languages
          </h3>
          <div className="card-gradient border-glow space-y-4 rounded-2xl p-6">
            {languages.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium">{l.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{l.level}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
            <Award size={20} className="text-primary" /> Certifications
          </h3>
          <div className="space-y-4">
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-gradient border-glow flex items-start gap-4 rounded-2xl p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                  <c.icon size={18} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{c.title}</h4>
                  <p className="text-sm text-muted-foreground">{c.org}</p>
                </div>
                <span className="font-mono text-xs text-primary">{c.date}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}