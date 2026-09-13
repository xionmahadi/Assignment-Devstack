import React from 'react';
import { Sparkles, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';

export default function ProjectsSection() {
  const templates = [
    {
      title: "AI-Powered SaaS Architecture",
      category: "Fullstack & AI",
      description: "Modern production template featuring Next.js 14, TypeScript, Tailwind CSS, PostgreSQL, and Python FastAPIs for high-throughput AI workloads.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Python"],
      difficulty: "Advanced",
      stars: "4.9"
    },
    {
      title: "Real-Time Microservices Stack",
      category: "Backend & Systems",
      description: "Ultra-low latency microservices skeleton built with Go, Redis Cache, Docker containers, and Kubernetes cluster orchestration.",
      tags: ["Go", "Redis", "Docker", "Kubernetes"],
      difficulty: "Intermediate",
      stars: "4.8"
    },
    {
      title: "Modern Jamstack E-Commerce",
      category: "Frontend & Cloud",
      description: "Lightning-fast static commerce storefront powered by React, Tailwind CSS, Vite, GraphQL API, and Firebase authentication.",
      tags: ["React", "Tailwind CSS", "Vite", "GraphQL"],
      difficulty: "Beginner-Friendly",
      stars: "4.9"
    }
  ];

  return (
    <section id="projects" className="py-20 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gradient-subtle border border-brand-pink/30 text-xs font-semibold text-brand-pink">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pre-Configured Architecture Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white">
            Battle-Tested <span className="text-gradient">Project Blueprints</span>
          </h2>
          <p className="text-sm text-gray-400">
            Get inspired by reference architectures designed for reliability, developer velocity, and massive cloud scale.
          </p>
        </div>

        {/* Blueprint Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map((tpl, i) => (
            <div
              key={tpl.title}
              className="glass-card rounded-2xl p-6 flex flex-col justify-between group hover:border-brand-pink/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-brand-pink font-semibold uppercase tracking-wider text-[10px]">
                    {tpl.category}
                  </span>
                  <span className="text-gray-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5 text-[11px]">
                    ★ {tpl.stars}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-['Outfit'] text-white mb-2 group-hover:text-gradient transition-all">
                  {tpl.title}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {tpl.description}
                </p>
              </div>

              <div>
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {tpl.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#technologies"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-gray-200 bg-white/5 hover:bg-brand-pink/15 hover:text-brand-pink border border-white/10 hover:border-brand-pink/30 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Build This Stack</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
