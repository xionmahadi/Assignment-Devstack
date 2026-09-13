import React from 'react';

export default function StackItem({ item, onRemove }) {
  const { id, name, category, icon } = item;

  return (
    <div className="bg-white border border-slate-200 hover:border-[#F12067]/40 rounded-xl p-3 flex items-center justify-between mb-2.5 transition-all shadow-xs group">
      {/* Icon & Details */}
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-7 h-7 flex items-center justify-center flex-shrink-0">
          <img
            src={icon}
            alt={name}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
            }}
          />
        </div>
        <div className="min-w-0">
          <h4 className="text-sm font-bold text-slate-900 truncate leading-tight">
            {name}
          </h4>
          <span className="text-[10px] text-slate-400 font-medium capitalize">
            {category}
          </span>
        </div>
      </div>

      {/* Remove (✕) Button */}
      <button
        onClick={() => onRemove(id, name)}
        className="text-slate-400 group-hover:text-slate-600 hover:!text-[#E11D48] p-1 text-lg font-light leading-none transition-colors"
        aria-label={`Remove ${name} from stack`}
      >
        ✕
      </button>
    </div>
  );
}
