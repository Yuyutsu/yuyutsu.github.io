import { Section } from "./Section";

export function Hero() {
  return (
    <Section className="pt-32 md:pt-44 pb-20 md:pb-28 relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      <div className="relative">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-border-subtle text-text-muted text-xs tracking-wide">
          Case Study
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary tracking-tight leading-tight mb-6">
          React Native
          <br />
          BLE Toolkit
        </h1>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-4 leading-relaxed">
          Building reliable BLE communication systems for cross-platform mobile
          applications.
        </p>
        <p className="text-base text-text-muted max-w-xl mx-auto leading-relaxed">
          Designed to handle real-world device instability, connection drops,
          and performance constraints.
        </p>
      </div>
    </Section>
  );
}
