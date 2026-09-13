import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Sync active link with URL hash if present
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const matchingLink = navLinks.find((link) => link.href === hash);
      if (matchingLink) {
        setActiveLink(matchingLink.name);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Left: Single Hamburger Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 hover:text-black focus:outline-none flex items-center justify-center"
              aria-label="Toggle Navigation Menu"
            >
              <img
                src="/ui/hamburger.png"
                alt="Menu"
                className="w-5 h-4 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <svg
                className="w-6 h-6 hidden"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Brand Logo (Desktop & Mobile) */}
          <div className="flex items-center gap-2">
            <a
              href="#home"
              onClick={() => handleLinkClick('Home')}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-extrabold text-xs tracking-tight shadow-sm">
                DS
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-slate-900">Dev</span>
                <span className="text-gradient">Stack</span>
              </span>
            </a>
          </div>

          {/* Desktop Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#F12067] font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 px-2 sm:px-3 py-2 transition-colors">
              Sign In
            </button>
            <button className="btn-gradient text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm whitespace-nowrap">
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={`px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#F12067] bg-pink-50 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
