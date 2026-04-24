import { createFileRoute } from "@tanstack/react-router";
import { ParticleBackground } from "@/components/portfolio/ParticleBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { WhatIBring } from "@/components/portfolio/WhatIBring";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { BackToTop } from "@/components/portfolio/BackToTop";
import { RoleProvider } from "@/components/portfolio/RoleContext";
import { RolesMatrix } from "@/components/portfolio/RolesMatrix";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shiva Poorani G H — AI Engineer · LLM & RAG Developer" },
      {
        name: "description",
        content:
          "Portfolio of Shiva Poorani G H — AI Engineer building production-grade LLM and RAG systems with LangChain, Python, and PostgreSQL.",
      },
      { property: "og:title", content: "Shiva Poorani G H — AI Engineer" },
      {
        property: "og:description",
        content:
          "Building production-grade AI systems that scale. LLMs, RAG pipelines, LangChain.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <RoleProvider>
    <div className="relative min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <RolesMatrix />
        <About />
        <WhatIBring />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Toaster />
      <BackToTop />
      <footer className="border-t border-border/50 px-6 py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Shiva Poorani G H · Built with{" "}
        <span className="text-primary">React</span> &{" "}
        <span className="text-secondary">Framer Motion</span>
      </footer>
    </div>
    </RoleProvider>
  );
}
