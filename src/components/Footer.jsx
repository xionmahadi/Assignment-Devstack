import React from 'react';
import { Layers, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productLinks = [
    { name: 'Stack Builder', href: '#technologies' },
    { name: 'Featured Tech', href: '#technologies' },
    { name: 'Architecture Templates', href: '#projects' },
    { name: 'Ecosystem Explorer', href: '#technologies' },
    { name: 'Release Notes', href: '#' },
  ];

  const companyLinks = [
    { name: 'About DevStack', href: '#about' },
    { name: 'Our Mission', href: '#about' },
    { name: 'Community Hub', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact Support', href: '#contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Security Overview', href: '#' },
    { name: 'License', href: '#' },
  ];

  return (
    <footer id="contact" className="border-t border-white/10 bg-[#070A12] pt-16 pb-12 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-brand-pink/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center shadow-brand-glow">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-['Outfit'] tracking-tight">
                <span className="text-white">Dev</span>
                <span className="text-gradient">Stack</span>
              </span>
            </div>
            
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              DevStack is the modern developer workspace for exploring, curating, and building scalable production-grade web stacks with zero friction.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-pink/20 hover:text-brand-pink text-gray-400 border border-white/10 flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-pink/20 hover:text-brand-pink text-gray-400 border border-white/10 flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-pink/20 hover:text-brand-pink text-gray-400 border border-white/10 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Group 1: Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Outfit']">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2: Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Outfit']">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 3: Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-['Outfit']">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} DevStack Inc. All rights reserved. Built with modern web standards.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
