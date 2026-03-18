"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";

const projects = [
  {
    title: "IoT BLE System",
    problem:
      "Enterprise IoT devices needed reliable Bluetooth Low Energy communication across thousands of mobile endpoints with varying hardware and OS versions.",
    solution:
      "Architected a layered BLE abstraction with connection state machines, automatic retry with exponential backoff, and platform-normalized behavior across iOS and Android.",
    impact:
      "95%+ connection reliability in production. Reduced BLE-related crashes by 80%. System scaled to 10K+ concurrent device connections.",
    stack: ["React Native", "CoreBluetooth", "Android BLE", "TypeScript"],
  },
  {
    title: "Healthcare Monitoring App",
    problem:
      "Real-time patient vitals monitoring required sub-second data delivery with zero tolerance for data loss or incorrect readings.",
    solution:
      "Built a fault-tolerant data pipeline with local buffering, data integrity verification, and seamless offline-to-online sync. HIPAA-compliant architecture.",
    impact:
      "Zero data loss incidents post-launch. 99.9% uptime. Successfully deployed across 50+ healthcare facilities.",
    stack: ["React Native", "HealthKit", "Firebase", "Node.js"],
  },
  {
    title: "Geo-Fencing & iBeacon",
    problem:
      "Location-based services needed precise indoor positioning and geo-fence triggers without excessive battery drain.",
    solution:
      "Implemented hybrid positioning using iBeacon + GPS with intelligent power management. Custom geo-fence engine with configurable accuracy zones.",
    impact:
      "40% reduction in battery consumption vs. previous solution. Sub-3m indoor accuracy. Processing 1M+ geo-fence events daily.",
    stack: ["Swift", "CoreLocation", "iBeacon", "MapKit"],
  },
  {
    title: "Streaming Application",
    problem:
      "High-quality media streaming on mobile with adaptive quality, minimal buffering, and smooth playback across inconsistent network conditions.",
    solution:
      "Custom adaptive bitrate streaming with predictive buffer management. Implemented quality-of-experience metrics and intelligent pre-fetching.",
    impact:
      "60% reduction in buffering events. Average stream start time under 1.2s. 4.8★ average app store rating.",
    stack: ["React Native", "ExoPlayer", "AVFoundation", "HLS"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 bg-surface-alt">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
            Projects
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-14 max-w-xl">
            Systems built for the real world
          </h2>
        </FadeIn>

        <div className="space-y-5">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={0.1 + i * 0.08}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="group bg-surface-card border border-border-subtle rounded-xl p-7 md:p-8 hover:border-border-glow transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-text-primary mb-6 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <span className="text-[11px] font-medium text-text-muted uppercase tracking-wider block mb-1.5">
                      Problem
                    </span>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-text-muted uppercase tracking-wider block mb-1.5">
                      Solution
                    </span>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-text-muted uppercase tracking-wider block mb-1.5">
                      Impact
                    </span>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] text-text-muted bg-surface-elevated px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
