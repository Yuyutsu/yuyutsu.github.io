"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-bright/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <FadeIn delay={0.1}>
          <p className="text-accent/90 text-xs font-medium tracking-[0.2em] uppercase mb-8">
            Mobile Architect · React Native · iOS · IoT
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-text-primary tracking-tight leading-[1.05] mb-10">
            Amol Chavan
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-xl md:text-2xl text-text-secondary/90 font-light leading-relaxed max-w-2xl mx-auto mb-5">
            &ldquo;I build systems that don&rsquo;t break in production.&rdquo;
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-base text-text-muted max-w-xl mx-auto mb-14 leading-relaxed">
            Most apps work in ideal conditions. I design for the real world
            — where networks fail, devices behave unpredictably, and
            performance actually matters.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-2.5 bg-text-primary text-surface text-sm font-medium rounded-full hover:bg-text-primary/90 transition-colors"
            >
              View Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-2.5 border border-border-subtle text-text-secondary text-sm font-medium rounded-full hover:border-text-muted hover:text-text-primary transition-all"
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
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-text-muted/20 flex items-start justify-center p-1.5"
        >
          <div className="w-0.5 h-1.5 rounded-full bg-text-muted/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
