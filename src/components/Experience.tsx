"use client";

import { FadeIn } from "./FadeIn";

const companies = [
  {
    name: "Eaton",
    role: "Senior Mobile Architect",
    achievements: [
      "Architected enterprise IoT mobile platform connecting 10K+ industrial devices via BLE",
      "Designed fault-tolerant communication layer with 95%+ connection reliability",
      "Led cross-platform mobile strategy for iOS and Android with shared architecture",
      "Reduced BLE-related production incidents by 80% through systematic error handling",
    ],
  },
  {
    name: "Atos Syntel",
    role: "Lead Mobile Engineer",
    achievements: [
      "Built healthcare monitoring application processing real-time patient vitals",
      "Implemented HIPAA-compliant data pipeline with zero data loss guarantee",
      "Led team of 6 engineers delivering geo-fencing solution for enterprise logistics",
      "Established mobile architecture standards adopted across 3 product lines",
    ],
  },
  {
    name: "Venturit Inc",
    role: "Mobile Engineer",
    achievements: [
      "Developed streaming application with adaptive bitrate and sub-1.2s start time",
      "Built custom NLP input system for natural language expense tracking",
      "Shipped React Native apps to App Store and Google Play with 4.8★ ratings",
      "Created internal tooling that reduced mobile release cycles from 2 weeks to 3 days",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <span className="text-accent text-sm font-medium tracking-widest uppercase mb-4 block">
            Experience
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight mb-16 max-w-2xl">
            Where I&rsquo;ve built things
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {companies.map((company, i) => (
            <FadeIn key={company.name} delay={0.1 + i * 0.1}>
              <div className="group bg-surface-card border border-border-subtle rounded-2xl p-8 md:p-10 hover:border-border-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent transition-colors">
                    {company.name}
                  </h3>
                  <span className="text-sm text-text-muted mt-1 md:mt-0">
                    {company.role}
                  </span>
                </div>
                <ul className="space-y-3">
                  {company.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-accent mt-1.5 flex-shrink-0">
                        <svg
                          width="6"
                          height="6"
                          viewBox="0 0 6 6"
                          fill="currentColor"
                        >
                          <circle cx="3" cy="3" r="3" />
                        </svg>
                      </span>
                      <span className="text-sm text-text-secondary leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
