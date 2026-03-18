"use client";

import { FadeIn } from "./FadeIn";

const currentProjects = [
  {
    title: "Marathilipi",
    description:
      "A programming language in Marathi. Enabling developers to write code in their native language — breaking the English-only barrier in programming.",
    status: "Active",
  },
  {
    title: "React Native Reliability Tools",
    description:
      "Production-grade error boundaries, network health monitoring, and crash recovery tools for React Native applications.",
    status: "Active",
  },
  {
    title: "Developer Infrastructure",
    description:
      "NLP-powered input systems, testing utilities, and developer experience tools for mobile engineering teams.",
    status: "Building",
  },
];

export function CurrentlyBuilding() {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            Currently Building
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-14 max-w-xl">
            What&rsquo;s on my workbench
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          {currentProjects.map((project, i) => (
            <FadeIn key={project.title} delay={0.1 + i * 0.08}>
              <div className="group bg-surface-card border border-border-subtle rounded-xl p-6 hover:border-border-glow transition-all duration-300 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-[11px] text-emerald-400/80 font-medium">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-text-primary mb-1.5 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
