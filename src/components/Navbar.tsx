import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['hero', 'about', 'capabilities', 'channels', 'approach', 'projects', 'freelance-profiles', 'experience', 'contact'];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'Acquisition', href: '#channels', id: 'channels' },
    { label: 'Approach', href: '#approach', id: 'approach' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Profiles', href: '#freelance-profiles', id: 'freelance-profiles' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#0B1017]/90 backdrop-blur-md border-b border-[#C7A773]/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Monogram & Name Wordmark */}
          <a
            href="#hero"
            className="flex items-center gap-3 text-lg font-serif tracking-wide text-[#F4F0E8] hover:text-[#C7A773] transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 border border-[#C7A773]/40 flex items-center justify-center text-xs font-serif text-[#C7A773] group-hover:border-[#C7A773] transition-colors">
              {portfolioData.personal.monogram}
            </span>
            <span className="font-serif tracking-wider text-base sm:text-lg">
              {portfolioData.personal.name}
            </span>
          </a>

          {/* Zone 2: Single-line Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium uppercase tracking-[0.15em] text-[#A4A9AF]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 hover:text-[#F4F0E8] ${
                  activeSection === item.id ? 'text-[#C7A773]' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C7A773]" />
                )}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="#contact"
              className="relative inline-flex items-center gap-2 px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-[#C7A773] border border-[#C7A773]/40 hover:border-[#C7A773] hover:bg-[#C7A773]/10 transition-all duration-300 rounded-none whitespace-nowrap shrink-0"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#C7A773]" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-[#F4F0E8] hover:text-[#C7A773] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Accessible Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="lg:hidden fixed inset-0 z-30 bg-[#0B1017]/98 backdrop-blur-xl pt-24 px-8 pb-12 flex flex-col justify-between"
        >
          <div className="flex flex-col gap-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A773]">
              Navigation
            </span>
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-[#F4F0E8] hover:text-[#C7A773] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#C7A773]/15 flex flex-col gap-4">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#0B1017] bg-[#C7A773] hover:bg-[#DFC498] transition-colors"
            >
              Let's Connect
            </a>
            <p className="text-xs text-[#A4A9AF] text-center font-mono">
              Lahore, Pakistan · asadmunawar366@gmail.com
            </p>
          </div>
        </div>
      )}
    </>
  );
};
