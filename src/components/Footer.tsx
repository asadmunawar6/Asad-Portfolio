import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Acquisition Channels', href: '#channels' },
    { label: 'Approach', href: '#approach' },
    { label: 'Projects', href: '#projects' },
    { label: 'Freelance Profiles', href: '#freelance-profiles' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#070B10] border-t border-[#C7A773]/15 text-[#A4A9AF] py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#C7A773]/10 items-start">
          {/* Brand & Positioning */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 border border-[#C7A773]/40 flex items-center justify-center font-serif text-xs text-[#C7A773]">
                {personal.monogram}
              </span>
              <span className="text-xl font-serif text-[#F4F0E8] tracking-wider">
                {personal.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A4A9AF] font-sans max-w-sm leading-relaxed mb-4">
              Business Development Manager specializing in B2B technology growth, outbound outreach systems, and enterprise client acquisition.
            </p>
            <p className="text-xs font-mono text-[#C7A773]/80">
              Lahore, Pakistan · {personal.email}
            </p>
          </div>

          {/* Navigation Shortcuts */}
          <div className="md:col-span-5">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A773] block mb-4">
              Navigation Index
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs font-sans">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-[#F4F0E8] transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 p-3 border border-[#C7A773]/30 text-xs font-mono uppercase tracking-wider text-[#C7A773] hover:border-[#C7A773] hover:bg-[#C7A773]/10 transition-colors"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A4A9AF]/60">
          <p>
            © {currentYear} Asad Munawar. All rights reserved.
          </p>
          <p className="tracking-widest uppercase text-[10px]">
            Executive Noir · Strategy Meets Sophistication
          </p>
        </div>
      </div>
    </footer>
  );
};
