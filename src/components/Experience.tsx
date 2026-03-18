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
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            Experience
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-14 max-w-xl">
            Where I&rsquo;ve built things
          </h2>
        </FadeIn>

        <div className="space-y-5">
          {companies.map((company, i) => (
            <FadeIn key={company.name} delay={0.1 + i * 0.08}>
              <div className="group bg-surface-card border border-border-subtle rounded-xl p-7 md:p-8 hover:border-border-glow transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-accent transition-colors">
                    {company.name}
                  </h3>
                  <span className="text-xs text-text-muted mt-1 md:mt-0">
                    {company.role}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {company.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span className="text-accent/60 mt-[7px] flex-shrink-0">
                        <svg
                          width="4"
                          height="4"
                          viewBox="0 0 4 4"
                          fill="currentColor"
                        >
                          <circle cx="2" cy="2" r="2" />
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
