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
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            Currently Building
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-16 max-w-2xl">
            What&rsquo;s on my workbench
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {currentProjects.map((project, i) => (
            <FadeIn key={project.title} delay={0.1 + i * 0.1}>
              <div className="group bg-surface-card border border-border-subtle rounded-2xl p-8 hover:border-border-glow transition-all duration-300 h-full">
                <div className="flex items-center gap-2 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-xs text-green-400 font-medium">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
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
