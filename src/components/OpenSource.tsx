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
    <section id="opensource" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            Open Source
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-6 max-w-3xl">
            Shipped to npm, used in production
          </h2>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-text-secondary text-lg mb-16 max-w-2xl leading-relaxed">
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
                className="relative mb-8 bg-gradient-to-br from-accent-bright/10 to-accent/5 border border-accent/20 rounded-2xl p-8 md:p-10 group cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.05] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                    {pkg.name}
                  </h3>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                    {pkg.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-accent/80 bg-accent/[0.08] px-3 py-1 rounded-full"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {packages
            .filter((p) => !p.hero)
            .map((pkg, i) => (
              <FadeIn key={pkg.name} delay={0.1 + i * 0.05}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group h-full bg-surface-card border border-border-subtle rounded-2xl p-6 hover:border-border-glow transition-all duration-300 cursor-default"
                >
                  <h3 className="text-base font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {pkg.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {pkg.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-text-muted bg-surface-elevated px-2 py-0.5 rounded"
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
