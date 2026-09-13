import React from 'react';

export default function TechnologyCard({ technology, isSelected, onAddToStack }) {
  const { id, name, category, description, icon, rating, difficulty, badge } = technology;

  // Badge color mapping matching Figma design
  const getBadgeStyle = (b) => {
    switch (b?.toLowerCase()) {
      case 'popular':
      case 'top sql':
      case 'essential':
      case 'robust':
      case 'containers':
        return 'bg-sky-50 text-sky-500 border-sky-100';
      case 'versatile':
      case 'standard':
        return 'bg-emerald-50 text-emerald-500 border-emerald-100';
      case 'fast':
        return 'bg-orange-50 text-orange-500 border-orange-100';
      case 'cache':
        return 'bg-rose-50 text-rose-500 border-rose-100';
      case 'ubiquitous':
        return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'modern':
        return 'bg-cyan-50 text-cyan-500 border-cyan-100';
      default:
        return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl p-6 transition-all flex flex-col justify-between ${
        isSelected
          ? 'border-2 border-[#F12067] shadow-md ring-1 ring-[#F12067]/20'
          : 'border border-slate-100 shadow-sm hover:shadow-md'
      }`}
    >
      <div>
        {/* Top Row: Icon & Badge */}
        <div className="flex items-start justify-between gap-2">
          <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
            <img
              src={icon}
              alt={name}
              className="w-full h-full object-contain"
              onError={(e) => {
                e.currentTarget.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
              }}
            />
          </div>

          {badge && (
            <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${getBadgeStyle(badge)}`}>
              {badge}
            </span>
          )}
        </div>

        {/* Technology Name */}
        <h3 className="text-xl font-bold text-slate-900 mt-4 font-['Plus_Jakarta_Sans']">
          {name}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 mt-2 line-clamp-3 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Meta Information & Button */}
      <div className="mt-5 pt-4 border-t border-slate-50">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
          <span className="bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-100 font-medium">
            {category}
          </span>
          <span>{difficulty}</span>
          <span className="text-amber-500 font-semibold flex items-center gap-0.5">
            ★ {rating.toFixed(1)}
          </span>
        </div>

        {/* Action Button */}
        {isSelected ? (
          <button
            disabled
            className="w-full bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed font-medium py-2.5 px-4 rounded-lg text-sm text-center"
          >
            ✓ Added to Stack
          </button>
        ) : (
          <button
            onClick={() => onAddToStack(technology)}
            className="w-full bg-[#0B1120] hover:bg-slate-800 text-white font-medium py-2.5 px-4 rounded-lg text-sm text-center transition-colors shadow-sm"
          >
            Add to Stack
          </button>
        )}
      </div>

    </div>
  );
}
