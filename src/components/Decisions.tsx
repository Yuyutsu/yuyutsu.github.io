import { Section, SectionLabel, SectionTitle } from "./Section";

const decisions = [
  {
    question: "Why build an abstraction layer?",
    answer:
      "Native BLE APIs expose too much protocol detail. Application code shouldn't manage MTU negotiation, characteristic discovery, or connection parameter updates. The abstraction lets engineers think in terms of devices and operations — not bytes and handles.",
  },
  {
    question: "Simplicity vs. control — where's the line?",
    answer:
      "The default API is deliberately simple — connect, read, write, disconnect. But every layer exposes escape hatches for teams that need fine-grained control. The goal is making the common case trivial without making the complex case impossible.",
  },
  {
    question: "How are platform differences handled?",
    answer:
      "A unified interface sits above platform-specific implementations. iOS uses CoreBluetooth directly. Android uses the native BLE stack. The BLE Manager normalizes behavior — same state machine, same error types, same lifecycle events on both platforms.",
  },
  {
    question: "What about performance?",
    answer:
      "BLE operations are I/O bound, not CPU bound. The performance focus is on connection time, reconnection speed, and data throughput. The toolkit minimizes native bridge crossings and batches characteristic operations to reduce round-trips.",
  },
];

export function Decisions() {
  return (
    <Section id="decisions">
      <SectionLabel>Engineering Decisions</SectionLabel>
      <SectionTitle>The reasoning behind the design</SectionTitle>
      <div className="space-y-8 mt-12">
        {decisions.map((decision) => (
          <div
            key={decision.question}
            className="text-left border-l-2 border-border-subtle pl-6 hover:border-accent/40 transition-colors"
          >
            <h3 className="text-text-primary font-medium text-base mb-2">
              {decision.question}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {decision.answer}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
