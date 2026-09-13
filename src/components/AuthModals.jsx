import React, { useState } from 'react';
import { X, Sparkles, LogIn, UserPlus, Mail, Lock, User } from 'lucide-react';
import { GithubIcon } from './Icons';
import { toast } from 'react-toastify';

export default function AuthModals({ isOpen, mode, onClose, onSwitchMode }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'signin') {
      toast.success(`Welcome back, ${email.split('@')[0] || 'Developer'}!`);
    } else {
      toast.success(`Account created successfully for ${name || 'Developer'}!`);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="glass-panel w-full max-w-md rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Title */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-gradient mx-auto flex items-center justify-center shadow-brand-glow mb-3">
            {mode === 'signin' ? <LogIn className="w-6 h-6 text-white" /> : <UserPlus className="w-6 h-6 text-white" />}
          </div>
          <h3 className="text-2xl font-bold font-['Outfit'] text-white">
            {mode === 'signin' ? 'Welcome to DevStack' : 'Create DevStack Account'}
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            {mode === 'signin'
              ? 'Sign in to access and sync your custom architecture stacks'
              : 'Join thousands of engineers building scalable web architectures'}
          </p>
        </div>

        {/* Social Quick Sign-In */}
        <button
          onClick={() => {
            toast.success('Authenticated with GitHub!');
            onClose();
          }}
          className="w-full py-2.5 px-4 rounded-xl bg-gray-900 border border-white/10 hover:border-white/20 text-xs font-semibold text-gray-200 flex items-center justify-center gap-2 mb-4 hover:bg-gray-800 transition-all"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Continue with GitHub</span>
        </button>

        <div className="flex items-center gap-3 my-4">
          <div className="h-[1px] bg-white/10 flex-1" />
          <span className="text-[11px] text-gray-500 font-medium uppercase">Or with email</span>
          <div className="h-[1px] bg-white/10 flex-1" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="Alex Rivera"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900/90 border border-white/10 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-brand-pink/50"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                placeholder="developer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900/90 border border-white/10 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-brand-pink/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900/90 border border-white/10 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-brand-pink/50"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full btn-gradient py-3 rounded-xl font-bold text-sm shadow-brand-glow mt-2"
          >
            {mode === 'signin' ? 'Sign In' : 'Create Free Account'}
          </button>
        </form>

        {/* Switch Mode Footer */}
        <div className="text-center mt-5 pt-4 border-t border-white/10 text-xs text-gray-400">
          {mode === 'signin' ? (
            <p>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => onSwitchMode('signup')}
                className="text-brand-pink font-semibold hover:underline"
              >
                Sign Up here
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => onSwitchMode('signin')}
                className="text-brand-pink font-semibold hover:underline"
              >
                Sign In here
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
