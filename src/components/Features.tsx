import { Section, SectionLabel, SectionTitle } from "./Section";

const features = [
  {
    title: "Device Scanning",
    description:
      "Configurable scan parameters with filtering by service UUID, signal strength, and device name. Deduplication and throttling built in.",
  },
  {
    title: "Connection Lifecycle",
    description:
      "Full state machine for connection management — from discovery through disconnection. Every transition is explicit and observable.",
  },
  {
    title: "Auto-Reconnect",
    description:
      "Configurable reconnection with exponential backoff. Preserves device context across reconnection attempts. Handles background/foreground transitions.",
  },
  {
    title: "Error Handling",
    description:
      "Typed error system with platform-specific error mapping. Every failure mode is categorized, logged, and recoverable.",
  },
  {
    title: "Logging & Debugging",
    description:
      "Structured logging for every BLE event. Timing data, state transitions, and error traces available for production debugging.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <SectionLabel>Key Features</SectionLabel>
      <SectionTitle>Built for production environments</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-surface-card border border-border-subtle rounded-xl p-6 text-left"
          >
            <h3 className="text-text-primary font-medium text-base mb-2">
              {feature.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
