import React from 'react';
import { ArrowRight, Sparkles, Code2, Cpu, ShieldCheck, Zap } from 'lucide-react';

export default function Hero({ onExploreClick, onLearnMoreClick }) {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-pink/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-brand-violet/15 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-brand-orange/15 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tag / Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-brand-pink/30 text-xs font-semibold tracking-wide text-gray-200 shadow-sm animate-pulse">
              <Sparkles className="w-3.5 h-3.5 text-brand-pink" />
              <span>Next-Gen Architecture & Stack Customizer</span>
            </div>

            {/* Two-Tone Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Outfit'] tracking-tight text-white leading-[1.15]">
              Architect Your Dream{' '}
              <span className="text-gradient inline-block">Developer Stack</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explore battle-tested frameworks, cloud infrastructure, and modern databases. Handpick the perfect components, analyze compatibility, and export your production-ready stack in seconds.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#technologies"
                onClick={onExploreClick}
                className="w-full sm:w-auto btn-gradient px-8 py-4 rounded-full font-bold text-base shadow-brand-glow flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Technologies</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onLearnMoreClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full font-semibold text-base text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <span>Learn More</span>
              </button>
            </div>

            {/* Micro Stats / Trust indicators */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold font-['Outfit'] text-white">15+</div>
                <div className="text-xs text-gray-400 font-medium">Curated Tech</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold font-['Outfit'] text-gradient">100%</div>
                <div className="text-xs text-gray-400 font-medium">Free & Open</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold font-['Outfit'] text-white">Instant</div>
                <div className="text-xs text-gray-400 font-medium">Stack Export</div>
              </div>
            </div>
          </div>

          {/* Right Column: Banner Visual */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Glow backplate */}
              <div className="absolute inset-0 bg-brand-gradient rounded-3xl opacity-20 filter blur-2xl transform rotate-2 scale-95" />

              {/* Main Banner Visual Container */}
              <div className="relative rounded-3xl p-3 sm:p-5 glass-panel border border-white/10 shadow-2xl overflow-hidden group">
                <img
                  src="/assets/banner-stack.png"
                  alt="DevStack Architecture Banner"
                  className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to local image in assets or illustration if needed
                    e.currentTarget.src = './assets/banner-stack.png';
                  }}
                />

                {/* Floating Interactive Badge 1 */}
                <div className="absolute top-8 left-6 glass-panel px-3.5 py-2 rounded-xl border border-white/15 shadow-lg flex items-center gap-2.5 animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Ultra Scalable</div>
                    <div className="text-[9px] text-gray-400">Production Ready</div>
                  </div>
                </div>

                {/* Floating Interactive Badge 2 */}
                <div className="absolute bottom-8 right-6 glass-panel px-3.5 py-2 rounded-xl border border-white/15 shadow-lg flex items-center gap-2.5 animate-bounce" style={{ animationDuration: '5s' }}>
                  <div className="w-7 h-7 rounded-lg bg-brand-pink/20 text-brand-pink flex items-center justify-center font-bold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Type Safe & Fast</div>
                    <div className="text-[9px] text-gray-400">Best Practices</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
