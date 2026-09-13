import React from 'react';
import { Layers, ShieldCheck, Zap, Globe2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Zap,
      title: "Fast Stack Assembly",
      desc: "Assemble, compare ratings, and customize modern technologies in just a few clicks."
    },
    {
      icon: ShieldCheck,
      title: "State-of-the-art Standards",
      desc: "Every listed tool is audited for community adoption, documentation quality, and production readiness."
    },
    {
      icon: Globe2,
      title: "Open Source Ecosystem",
      desc: "Designed to help developers discover the best tools across the global open-source community."
    }
  ];

  return (
    <section id="about" className="py-20 relative border-t border-white/5 bg-[#090D18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gradient-subtle border border-brand-pink/30 text-xs font-semibold text-brand-pink">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Engineers Choose DevStack</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white leading-tight">
              Crafted for developers who care about <span className="text-gradient">clean architecture</span>
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              Choosing the right technology stack is one of the most consequential decisions for any engineering team. DevStack brings clarity to tech evaluation by providing structured ratings, difficulty levels, and a visual stack builder.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Instant feedback with interactive React-Toastify notifications",
                "Persistent stack preservation across browser sessions",
                "Built with responsive, mobile-first design principles"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Highlight cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.title}
                  className={`glass-panel p-5 rounded-2xl border border-white/10 space-y-3 ${
                    i === 2 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center shadow-brand-glow">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-base font-bold font-['Outfit'] text-white">
                    {h.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
