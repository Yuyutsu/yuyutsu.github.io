import { Section, SectionLabel, SectionTitle } from "./Section";

const approaches = [
  {
    title: "Abstraction Over Complexity",
    description:
      "A clean API surface that hides BLE protocol complexity. Engineers interact with devices through predictable, high-level interfaces.",
  },
  {
    title: "Predictable Connection Lifecycle",
    description:
      "Every connection state — discovery, connecting, connected, disconnecting, disconnected — is explicit and observable.",
  },
  {
    title: "Modular Architecture",
    description:
      "Scanning, connection management, data transfer, and error handling are independent modules. Replace or extend any layer without touching others.",
  },
  {
    title: "Retry & Reconnection",
    description:
      "Configurable retry strategies with exponential backoff. Automatic reconnection on unexpected disconnects with state preservation.",
  },
  {
    title: "Stability-First Design",
    description:
      "Every design decision prioritizes production reliability over feature count. Fewer features, bulletproof execution.",
  },
];

export function Solution() {
  return (
    <Section id="solution">
      <SectionLabel>Solution</SectionLabel>
      <SectionTitle>A system designed for reliability</SectionTitle>
      <p className="text-text-secondary text-lg mb-12 max-w-2xl leading-relaxed">
        Instead of wrapping native BLE APIs with thin abstractions, this toolkit
        rethinks the entire communication layer — from scanning to data
        transfer.
      </p>
      <div className="space-y-6">
        {approaches.map((approach, index) => (
          <div
            key={approach.title}
            className="flex gap-6 items-start text-left"
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 text-accent text-sm font-medium flex items-center justify-center mt-0.5">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div>
              <h3 className="text-text-primary font-medium text-base mb-1">
                {approach.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {approach.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
