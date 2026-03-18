"use client";

import { FadeIn } from "./FadeIn";

const principles = [
  {
    acronym: "KISS",
    title: "Keep It Simple",
    description:
      "Simple systems are debuggable, testable, and maintainable. Complexity is the enemy of reliability.",
  },
  {
    acronym: "YAGNI",
    title: "You Aren't Gonna Need It",
    description:
      "Build for today's requirements. Premature abstraction creates more problems than it solves.",
  },
  {
    acronym: "PERF",
    title: "Performance-First",
    description:
      "Performance isn't an afterthought. It's a feature. Users feel the difference between 16ms and 32ms.",
  },
  {
    acronym: "SCALE",
    title: "Scalable Systems",
    description:
      "Architecture decisions compound. Design systems that grow with your product, not against it.",
  },
];

export function Philosophy() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            Philosophy
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-16 max-w-2xl">
            How I think about engineering
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, i) => (
            <FadeIn key={principle.acronym} delay={0.1 + i * 0.1}>
              <div className="group bg-surface-card border border-border-subtle rounded-2xl p-8 hover:border-border-glow transition-all duration-300">
                <span className="text-accent font-mono text-sm font-medium tracking-wider block mb-3">
                  {principle.acronym}
                </span>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {principle.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
