import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-100 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center text-white font-extrabold text-xs tracking-tight shadow-sm">
                DS
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-slate-900">Dev </span>
                <span className="text-gradient">Stack</span>
              </span>
            </div>

            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Text Links matching Figma */}
            <div className="flex items-center gap-4 pt-2 text-sm font-semibold text-slate-800">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#F12067] transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#F12067] transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#F12067] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 font-['Plus_Jakarta_Sans']">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#home" className="hover:text-slate-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 font-['Plus_Jakarta_Sans']">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 font-['Plus_Jakarta_Sans']">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 mt-12 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
