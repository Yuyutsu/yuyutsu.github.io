"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-bright/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        <FadeIn delay={0.1}>
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-6">
            Mobile Architect • React Native • iOS • IoT
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text-primary tracking-tight leading-[1.05] mb-8">
            Amol Chavan
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-light leading-relaxed max-w-3xl mx-auto mb-6">
            &ldquo;I build systems that don&rsquo;t break in production.&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Most apps work in ideal conditions. I design for the real world —
            where networks fail, devices behave unpredictably, and performance
            actually matters.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-accent-bright text-white text-sm font-medium rounded-full hover:bg-accent transition-colors"
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 border border-border-subtle text-text-secondary text-sm font-medium rounded-full hover:border-text-muted hover:text-text-primary transition-colors"
            >
              Contact
            </motion.a>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-text-muted/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
