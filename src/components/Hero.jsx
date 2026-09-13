import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Description & Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Build Your Ideal <br className="hidden sm:inline" />
              <span className="text-gradient">Development Stack</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#technologies"
                className="w-full sm:w-auto btn-gradient text-center font-semibold px-6 py-3 rounded-lg shadow-sm text-sm"
              >
                Explore Technologies
              </a>
              <button
                type="button"
                className="w-full sm:w-auto bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-center font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column: Hero Banner Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-none">
              <img
                src="/assets/banner-stack.png"
                alt="Development Stack Architecture"
                className="w-full h-auto object-contain mx-auto"
                onError={(e) => {
                  e.currentTarget.src = './assets/banner-stack.png';
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
