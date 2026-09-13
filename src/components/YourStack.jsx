import React from 'react';
import { Layers, Trash2, X, Sparkles, CheckCircle2, Download, Copy } from 'lucide-react';
import { toast } from 'react-toastify';

export default function YourStack({ selectedStack, onRemoveItem, onRemoveAll }) {
  const count = selectedStack.length;

  const handleCopyStack = () => {
    if (count === 0) return;
    const stackText = `🛠️ My DevStack:\n` + selectedStack.map((item, idx) => `${idx + 1}. ${item.name} (${item.category})`).join('\n');
    navigator.clipboard.writeText(stackText);
    toast.success('Stack copied to clipboard!');
  };

  return (
    <aside className="glass-panel rounded-3xl p-6 border border-white/10 sticky top-28 shadow-xl flex flex-col h-fit">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center shadow-brand-glow">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-['Outfit'] text-white">Your Stack</h2>
            <p className="text-xs text-brand-pink font-semibold">
              {count} {count === 1 ? 'Technology Selected' : 'Technologies Selected'}
            </p>
          </div>
        </div>

        {/* Clear All Button */}
        {count > 0 && (
          <button
            onClick={onRemoveAll}
            className="flex items-center gap-1 text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 px-2.5 py-1.5 rounded-lg border border-rose-500/20 transition-colors"
            title="Clear all selected technologies"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Remove All</span>
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="py-4 space-y-3 min-h-[220px]">
        {count === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center text-center py-10 px-4 space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 mb-1">
              <Layers className="w-8 h-8 opacity-40 text-gray-400" />
            </div>
            <h4 className="text-base font-bold text-gray-300">No technologies selected</h4>
            <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
              Explore the technology grid and click <span className="text-brand-pink font-medium">"Add to Stack"</span> to construct your custom development stack.
            </p>
          </div>
        ) : (
          /* Selected Items List (1 column) */
          <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
            {selectedStack.map((tech) => (
              <div
                key={tech.id}
                className="group flex items-center justify-between p-3 rounded-xl bg-gray-900/80 border border-white/10 hover:border-brand-pink/30 hover:bg-gray-800/80 transition-all shadow-sm"
              >
                {/* Tech Icon + Info */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-gray-800 p-1.5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.currentTarget.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
                      }}
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white truncate font-['Outfit']">
                      {tech.name}
                    </h4>
                    <span className="text-[10px] text-gray-400 font-medium">
                      {tech.category}
                    </span>
                  </div>
                </div>

                {/* Remove (✕) Button */}
                <button
                  onClick={() => onRemoveItem(tech.id, tech.name)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors flex-shrink-0"
                  aria-label={`Remove ${tech.name} from stack`}
                  title={`Remove ${tech.name}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer / Summary Action */}
      {count > 0 && (
        <div className="pt-4 border-t border-white/10 space-y-2">
          <button
            onClick={handleCopyStack}
            className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-1.5"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>Copy Stack Configuration</span>
          </button>
        </div>
      )}

    </aside>
  );
}
