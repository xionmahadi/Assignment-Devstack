import React, { useState, useMemo } from 'react';
import TechCard from './TechCard';
import { Search, Filter, Sparkles, Loader2, RefreshCw } from 'lucide-react';

export default function TechGrid({ technologies, loading, error, selectedStack, onAddToStack, onRetry }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'Language',
    'Styling',
    'DevOps',
    'Tools'
  ];

  // Filtered technologies
  const filteredTechnologies = useMemo(() => {
    return technologies.filter((tech) => {
      const matchesCategory =
        selectedCategory === 'All' ||
        tech.category.toLowerCase() === selectedCategory.toLowerCase();
      
      const matchesSearch =
        tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tech.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tech.badge && tech.badge.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [technologies, selectedCategory, searchQuery]);

  return (
    <div className="space-y-6">
      
      {/* Search & Filter Header */}
      <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 space-y-4">
        
        {/* Top Controls: Search Bar & Count */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search technologies, tools, databases, or badges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900/90 border border-white/10 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-brand-pink/50 focus:ring-1 focus:ring-brand-pink/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="text-xs font-semibold text-gray-400 px-3 py-2 rounded-lg bg-white/5 border border-white/5 text-center sm:text-left flex-shrink-0">
            Showing <span className="text-white font-bold">{filteredTechnologies.length}</span> of {technologies.length} Technologies
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'btn-gradient shadow-brand-glow'
                  : 'bg-gray-900/60 text-gray-400 hover:text-white hover:bg-gray-800 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Content Area */}
      {loading ? (
        /* Loading Skeleton / Spinner State */
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 py-8">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 animate-pulse space-y-4 border border-white/5"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-800/80" />
                  <div className="space-y-2">
                    <div className="w-24 h-4 bg-gray-800 rounded" />
                    <div className="w-16 h-3 bg-gray-800/60 rounded" />
                  </div>
                </div>
                <div className="w-16 h-4 bg-gray-800 rounded-full" />
              </div>
              <div className="space-y-2">
                <div className="w-full h-3 bg-gray-800/60 rounded" />
                <div className="w-4/5 h-3 bg-gray-800/60 rounded" />
              </div>
              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <div className="w-12 h-4 bg-gray-800 rounded" />
                <div className="w-20 h-4 bg-gray-800 rounded" />
              </div>
              <div className="w-full h-10 bg-gray-800/80 rounded-xl" />
            </div>
          ))}
        </div>
      ) : error ? (
        /* Error State */
        <div className="glass-panel rounded-2xl p-8 text-center space-y-3">
          <div className="text-rose-400 font-bold text-base">Failed to load technologies data</div>
          <p className="text-xs text-gray-400">{error}</p>
          <button
            onClick={onRetry}
            className="btn-gradient px-4 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-2"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Retry Loading</span>
          </button>
        </div>
      ) : filteredTechnologies.length === 0 ? (
        /* Empty Filter State */
        <div className="glass-panel rounded-2xl p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-white/5 mx-auto flex items-center justify-center text-gray-400">
            <Search className="w-6 h-6 opacity-50" />
          </div>
          <h4 className="text-base font-bold text-gray-200">No technologies found</h4>
          <p className="text-xs text-gray-400 max-w-sm mx-auto">
            We couldn't find any technology matching "<span className="text-brand-pink">{searchQuery}</span>" in category "{selectedCategory}".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="text-xs text-brand-pink hover:underline font-semibold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        /* Responsive 3-Column Technology Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredTechnologies.map((tech) => {
            const isSelected = selectedStack.some((item) => item.id === tech.id);
            return (
              <TechCard
                key={tech.id}
                tech={tech}
                isSelected={isSelected}
                onAddToStack={onAddToStack}
              />
            );
          })}
        </div>
      )}

    </div>
  );
}
