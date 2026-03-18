"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const packages = [
  {
    name: "marathilipi",
    description:
      "Programming in Marathi — bringing native language support to code. A groundbreaking project enabling developers to write code in their mother tongue.",
    tags: ["Language", "Compiler", "Marathi"],
    hero: true,
  },
  {
    name: "react-native-nlp-calendar",
    description:
      "Natural language date parsing for React Native. Convert casual text like 'next Friday' into structured calendar events.",
    tags: ["NLP", "React Native", "Calendar"],
    hero: false,
  },
  {
    name: "react-native-nlp-expense",
    description:
      "Parse expense descriptions from natural language. Extract amounts, categories, and dates from plain text input.",
    tags: ["NLP", "React Native", "Finance"],
    hero: false,
  },
  {
    name: "react-native-error-boundary-logger",
    description:
      "Production-grade error boundary with structured logging, crash reporting integration, and graceful recovery.",
    tags: ["Error Handling", "React Native", "Logging"],
    hero: false,
  },
  {
    name: "react-native-network-health",
    description:
      "Real-time network quality monitoring. Track latency, bandwidth, and connectivity state changes in production.",
    tags: ["Networking", "React Native", "Monitoring"],
    hero: false,
  },
  {
    name: "react-native-reliability",
    description:
      "Comprehensive reliability toolkit for React Native apps. Retry logic, circuit breakers, and degradation strategies.",
    tags: ["Reliability", "React Native", "Production"],
    hero: false,
  },
  {
    name: "detox-reliability-tools",
    description:
      "Testing utilities for Detox that simulate real-world failure conditions. Flaky network, low memory, background states.",
    tags: ["Testing", "Detox", "E2E"],
    hero: false,
  },
];

export function OpenSource() {
  return (
    <section id="opensource" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            Open Source
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4 max-w-2xl">
            Shipped to npm, used in production
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-text-secondary text-base mb-14 max-w-xl leading-relaxed">
            Tools built from real problems. Each package solves a gap I hit in
            production mobile development.
          </p>
        </FadeIn>

        {/* Hero package */}
        {packages
          .filter((p) => p.hero)
          .map((pkg) => (
            <FadeIn key={pkg.name} delay={0.2}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="relative mb-6 bg-gradient-to-br from-accent-bright/[0.06] to-accent/[0.02] border border-accent/15 rounded-xl p-7 md:p-9 group cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-medium text-accent/90 bg-accent/10 px-2.5 py-0.5 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-5 max-w-xl">
                    {pkg.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-accent/70 bg-accent/[0.07] px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}

        {/* Package grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {packages
            .filter((p) => !p.hero)
            .map((pkg, i) => (
              <FadeIn key={pkg.name} delay={0.1 + i * 0.05}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group h-full bg-surface-card border border-border-subtle rounded-xl p-5 hover:border-border-glow transition-all duration-300 cursor-default"
                >
                  <h3 className="text-sm font-semibold text-text-primary mb-1.5 group-hover:text-accent transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">
                    {pkg.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {pkg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-text-muted bg-surface-elevated px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
}
