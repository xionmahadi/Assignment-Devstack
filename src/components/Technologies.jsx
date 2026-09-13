import React from 'react';
import TechnologyCard from './TechnologyCard';
import StackSidebar from './StackSidebar';

export default function Technologies({
  technologies,
  loading,
  stack,
  onAddToStack,
  onRemove,
  onRemoveAll
}) {
  return (
    <section id="technologies" className="py-12 md:py-16 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-['Plus_Jakarta_Sans']">
            Explore the <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Section Content: Cards Grid + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Technology Cards Grid */}
          <div className="lg:col-span-8">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-10 h-10 border-4 border-slate-200 border-t-[#F12067] rounded-full animate-spin mb-4" />
                <p className="text-sm font-medium text-slate-500">Loading technologies...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map((tech) => {
                  const isSelected = stack.some((item) => item.id === tech.id);
                  return (
                    <TechnologyCard
                      key={tech.id}
                      technology={tech}
                      isSelected={isSelected}
                      onAddToStack={onAddToStack}
                    />
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Your Stack Sidebar */}
          <div className="lg:col-span-4">
            <StackSidebar
              stack={stack}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
            />
          </div>

        </div>

      </div>
    </section>
  );
}
