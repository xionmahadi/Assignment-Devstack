import React, { useState, useEffect } from 'react';
import { Menu, X, Layers, Sparkles, ChevronRight, User, LogIn } from 'lucide-react';

export default function Navbar({ onOpenSignIn, onOpenSignUp }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Left: Hamburger Icon */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a href="#home" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center shadow-brand-glow group-hover:scale-105 transition-transform duration-300">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-['Outfit'] tracking-tight flex items-center gap-1">
                  <span className="text-white">Dev</span>
                  <span className="text-gradient">Stack</span>
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-gray-400">Architecture Hub</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeLink === link.name
                    ? 'text-white bg-white/10 shadow-sm'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Sign In & Sign Up */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenSignIn}
              className="px-3.5 sm:px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <LogIn className="w-4 h-4 hidden sm:inline" />
              <span>Sign In</span>
            </button>
            <button
              onClick={onOpenSignUp}
              className="btn-gradient px-4 sm:px-5 py-2 text-sm font-semibold rounded-full flex items-center gap-1.5 shadow-brand-glow"
            >
              <Sparkles className="w-4 h-4" />
              <span>Sign Up</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          <div className="grid gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  activeLink === link.name
                    ? 'text-white bg-brand-gradient/20 border border-brand-pink/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-gray-500" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignIn();
              }}
              className="w-full py-2.5 px-4 text-center rounded-xl font-medium text-gray-200 bg-white/5 hover:bg-white/10 transition-colors"
            >
              Sign In to Your Account
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignUp();
              }}
              className="w-full py-2.5 px-4 text-center rounded-xl font-semibold btn-gradient"
            >
              Create Free Account
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
