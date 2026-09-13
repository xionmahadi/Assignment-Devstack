import React from 'react';
import { X, CheckCircle2, Layers, Zap, Shield, Sparkles } from 'lucide-react';

export default function LearnMoreModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-2xl rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-brand-glow">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold font-['Outfit'] text-white">
              About <span className="text-gradient">DevStack</span>
            </h3>
            <p className="text-xs text-gray-400">Next-Generation Fullstack Architecture Builder</p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-5 text-sm text-gray-300 leading-relaxed">
          <p>
            <strong className="text-white">DevStack</strong> empowers engineering teams, indie hackers, and developers to curate, evaluate, and assemble modern technology stacks with verified compatibility and industry standards.
          </p>

          {/* Key Advantages */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="glass-card p-4 rounded-xl border border-white/5 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-brand-orange/20 text-brand-orange flex items-center justify-center">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-xs">High Performance</h4>
              <p className="text-[11px] text-gray-400">Blazing fast UI with instant dynamic stack manipulation.</p>
            </div>

            <div className="glass-card p-4 rounded-xl border border-white/5 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-brand-pink/20 text-brand-pink flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-xs">Zero Duplicates</h4>
              <p className="text-[11px] text-gray-400">Intelligent state management preventing duplicate entries.</p>
            </div>

            <div className="glass-card p-4 rounded-xl border border-white/5 space-y-1.5">
              <div className="w-8 h-8 rounded-lg bg-brand-violet/20 text-brand-violet flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-xs">1-Click Export</h4>
              <p className="text-[11px] text-gray-400">Share or copy your selected architecture setup effortlessly.</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">How it works:</h4>
            <ul className="space-y-1.5 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Filter and search among curated technologies across 7 categories.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Click "Add to Stack" to collect tools into your interactive sidebar panel.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>Remove individual items or clear all at once with interactive toast alerts.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="btn-gradient px-6 py-2.5 rounded-xl font-bold text-xs shadow-brand-glow"
          >
            Got It, Let's Build!
          </button>
        </div>

      </div>
    </div>
  );
}
