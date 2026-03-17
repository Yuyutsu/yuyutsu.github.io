import { Section, SectionLabel, SectionTitle } from "./Section";

const roadmapItems = [
  {
    title: "Advanced Telemetry",
    description:
      "Connection quality metrics, latency tracking, and failure rate monitoring for production observability.",
    status: "In Progress",
  },
  {
    title: "Plugin System",
    description:
      "Extensible architecture for device-specific protocols. Teams can build and share plugins for common BLE device types.",
    status: "Planned",
  },
  {
    title: "Debugging Tools",
    description:
      "Visual BLE inspector for development. Real-time state visualization, packet logging, and connection timeline.",
    status: "Planned",
  },
  {
    title: "Community Contributions",
    description:
      "Open-source device protocol libraries and shared configuration presets for common IoT platforms.",
    status: "Exploring",
  },
];

export function Roadmap() {
  return (
    <Section id="roadmap">
      <SectionLabel>Roadmap</SectionLabel>
      <SectionTitle>What comes next</SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {roadmapItems.map((item) => (
          <div
            key={item.title}
            className="bg-surface-card border border-border-subtle rounded-xl p-6 text-left"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-text-primary font-medium text-base">
                {item.title}
              </h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent">
                {item.status}
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
