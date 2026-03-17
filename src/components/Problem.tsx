import { Section, SectionLabel, SectionTitle } from "./Section";

const problems = [
  {
    title: "Frequent Disconnections",
    description:
      "BLE connections drop unpredictably in production. Proximity changes, background states, and OS-level interference cause constant instability.",
  },
  {
    title: "Platform Inconsistency",
    description:
      "iOS and Android handle BLE differently at the OS level — different state machines, different timing, different failure modes.",
  },
  {
    title: "Poor Lifecycle Handling",
    description:
      "Most libraries treat connections as static. In reality, BLE devices go through complex state transitions that need careful management.",
  },
];

export function Problem() {
  return (
    <Section id="problem">
      <SectionLabel>Problem</SectionLabel>
      <SectionTitle>BLE integrations fail in production</SectionTitle>
      <p className="text-text-secondary text-lg mb-12 max-w-2xl leading-relaxed">
        Bluetooth Low Energy is a well-defined protocol. But building reliable
        BLE-powered mobile applications is an unsolved problem for most teams.
        Most libraries work in demos — they fail in the field.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((problem) => (
          <div
            key={problem.title}
            className="bg-surface-card border border-border-subtle rounded-xl p-6 text-left"
          >
            <h3 className="text-text-primary font-medium text-base mb-3">
              {problem.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              {problem.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
