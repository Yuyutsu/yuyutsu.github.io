import { Section, SectionLabel, SectionTitle } from "./Section";

const impacts = [
  {
    metric: "70%",
    label: "Less Integration Code",
    description:
      "Teams write significantly less BLE boilerplate. Connection management, error handling, and retry logic are handled by the toolkit.",
  },
  {
    metric: "3x",
    label: "Faster Time to Production",
    description:
      "New BLE features ship in days instead of weeks. Engineers focus on product logic, not protocol debugging.",
  },
  {
    metric: "95%+",
    label: "Connection Reliability",
    description:
      "Auto-reconnect and lifecycle management dramatically reduce connection failures in production environments.",
  },
  {
    metric: "Zero",
    label: "Platform-Specific Code",
    description:
      "Application code is fully cross-platform. Platform differences are abstracted away in the native bridge layer.",
  },
];

export function Impact() {
  return (
    <Section id="impact">
      <SectionLabel>Impact</SectionLabel>
      <SectionTitle>Measurable engineering outcomes</SectionTitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        {impacts.map((impact) => (
          <div key={impact.label} className="text-left">
            <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1 tracking-tight">
              {impact.metric}
            </div>
            <div className="text-accent text-sm font-medium mb-2">
              {impact.label}
            </div>
            <p className="text-text-muted text-xs leading-relaxed">
              {impact.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
