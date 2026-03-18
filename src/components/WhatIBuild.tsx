"use client";

import { FadeIn } from "./FadeIn";

const items = [
  {
    title: "Developer Tooling",
    description: "Libraries and frameworks for React Native developers",
  },
  {
    title: "NLP-Powered Input",
    description: "Natural language processing for mobile input systems",
  },
  {
    title: "Reliability Frameworks",
    description: "Observability and error recovery for production apps",
  },
  {
    title: "Scalable Architectures",
    description: "Mobile systems designed for growth and maintainability",
  },
];

export function WhatIBuild() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            What I Build
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-16 max-w-2xl">
            Engineering for the edge cases
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={0.1 + i * 0.1}>
              <div className="group relative bg-surface-card border border-border-subtle rounded-2xl p-8 hover:border-border-glow transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
