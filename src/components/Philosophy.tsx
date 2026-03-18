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
    <section className="py-24 md:py-32 px-6 bg-surface-alt">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            Philosophy
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-14 max-w-xl">
            How I think about engineering
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {principles.map((principle, i) => (
            <FadeIn key={principle.acronym} delay={0.1 + i * 0.08}>
              <div className="group bg-surface-card border border-border-subtle rounded-xl p-6 hover:border-border-glow transition-all duration-300">
                <span className="text-accent/70 font-mono text-xs font-medium tracking-wider block mb-2">
                  {principle.acronym}
                </span>
                <h3 className="text-base font-semibold text-text-primary mb-1.5">
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
