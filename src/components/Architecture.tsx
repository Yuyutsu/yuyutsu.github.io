import { Section, SectionLabel, SectionTitle } from "./Section";

interface LayerProps {
  label: string;
  description: string;
  highlight?: boolean;
}

function ArchitectureLayer({ label, description, highlight }: LayerProps) {
  return (
    <div
      className={`border rounded-lg p-5 text-left transition-colors ${
        highlight
          ? "bg-accent/5 border-accent/20"
          : "bg-surface-card border-border-subtle"
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-text-primary font-medium text-sm">{label}</span>
        <span className="text-text-muted text-xs">Layer</span>
      </div>
      <p className="text-text-secondary text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

const layers: LayerProps[] = [
  {
    label: "UI Components",
    description:
      "React Native views consuming connection state via hooks. No direct BLE interaction.",
  },
  {
    label: "Service Layer",
    description:
      "Business logic and device-specific protocols. Translates domain operations into BLE commands.",
  },
  {
    label: "BLE Manager",
    description:
      "Connection lifecycle, retry logic, state machine. The core abstraction layer.",
    highlight: true,
  },
  {
    label: "Native Bridge",
    description:
      "Platform-specific BLE implementation. CoreBluetooth on iOS, native BLE stack on Android.",
  },
];

const principles = [
  {
    title: "Separation of Concerns",
    description:
      "Each layer has a single responsibility. UI never touches BLE directly. The service layer doesn't manage connections.",
  },
  {
    title: "State Management",
    description:
      "Connection states flow upward through observables. Components subscribe to state changes — they don't poll or manage state internally.",
  },
  {
    title: "Event-Driven Communication",
    description:
      "All BLE events — discovery, connection, data, errors — propagate through a unified event bus. No callback nesting.",
  },
];

export function Architecture() {
  return (
    <Section id="architecture">
      <SectionLabel>Architecture</SectionLabel>
      <SectionTitle>Layered system design</SectionTitle>
      <p className="text-text-secondary text-lg mb-12 max-w-2xl leading-relaxed">
        Clean separation between UI, business logic, and hardware
        communication. Each layer is independently testable and replaceable.
      </p>

      <div className="mb-16">
        <div className="space-y-3">
          {layers.map((layer, index) => (
            <div key={layer.label}>
              <ArchitectureLayer {...layer} />
              {index < layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-px h-4 bg-border-subtle" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {principles.map((principle) => (
          <div key={principle.title} className="text-left">
            <h3 className="text-text-primary font-medium text-sm mb-2">
              {principle.title}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
