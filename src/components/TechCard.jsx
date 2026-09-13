import React from 'react';
import { Star, Plus, Check, Sparkles } from 'lucide-react';

export default function TechCard({ tech, isSelected, onAddToStack }) {
  const { id, name, category, description, icon, rating, difficulty, badge } = tech;

  // Category specific subtle badge colors
  const getCategoryColor = (cat) => {
    switch (cat.toLowerCase()) {
      case 'frontend':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'backend':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'database':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'language':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      case 'devops':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'styling':
        return 'bg-pink-500/10 text-pink-400 border-pink-500/20';
      case 'tools':
      default:
        return 'bg-violet-500/10 text-violet-400 border-violet-500/20';
    }
  };

  const getDifficultyColor = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'beginner-friendly':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40';
      case 'intermediate':
        return 'text-amber-400 bg-amber-950/40 border-amber-800/40';
      case 'advanced':
        return 'text-rose-400 bg-rose-950/40 border-rose-800/40';
      default:
        return 'text-gray-400 bg-gray-800/40 border-gray-700/40';
    }
  };

  return (
    <div className={`glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group ${
      isSelected ? 'ring-2 ring-brand-pink/50 bg-[#141b2d]' : ''
    }`}>
      
      {/* Top Bar: Icon, Name & Badge */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-800/80 border border-white/10 p-2.5 flex items-center justify-center flex-shrink-0 group-hover:border-brand-pink/40 group-hover:scale-105 transition-all">
              <img
                src={icon}
                alt={`${name} icon`}
                className="w-full h-full object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
                }}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold font-['Outfit'] text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-brand-gradient transition-colors">
                {name}
              </h3>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${getCategoryColor(category)}`}>
                  {category}
                </span>
              </div>
            </div>
          </div>

          {/* Badge */}
          {badge && (
            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-brand-gradient-subtle border border-brand-pink/30 text-brand-pink tracking-wide flex-shrink-0">
              {badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed mb-4">
          {description}
        </p>
      </div>

      {/* Footer Info: Rating, Difficulty & Add Button */}
      <div className="pt-3 border-t border-white/10 mt-auto">
        <div className="flex items-center justify-between mb-3 text-xs">
          {/* Rating */}
          <div className="flex items-center gap-1 text-amber-400 font-semibold bg-amber-400/10 px-2 py-0.5 rounded-md border border-amber-400/20">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{rating.toFixed(1)}</span>
          </div>

          {/* Difficulty */}
          <div className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </div>
        </div>

        {/* Action Button */}
        {isSelected ? (
          <button
            disabled
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-sm bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 cursor-not-allowed flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <Check className="w-4 h-4" />
            <span>✓ Added to Stack</span>
          </button>
        ) : (
          <button
            onClick={() => onAddToStack(tech)}
            className="w-full py-2.5 px-4 rounded-xl font-semibold text-sm btn-gradient flex items-center justify-center gap-2 shadow-brand-glow hover:opacity-95 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Add to Stack</span>
          </button>
        )}
      </div>

    </div>
  );
}
