import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const { personal, links } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 lg:pt-36 lg:pb-28 flex flex-col justify-center bg-grid-pattern overflow-hidden"
    >
      {/* Subtle ambient lighting glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C7A773]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#C7A773]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#C7A773]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C7A773]">
                Business Development Manager · B2B Technology Growth
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-sans font-light text-[#F4F0E8] leading-[1.08] tracking-tight mb-8"
            >
              <span>Building</span>{' '}
              <span className="font-serif italic font-normal text-[#DFC498]">
                Relationships.
              </span>
              <br />
              <span>Creating</span>{' '}
              <span className="font-serif italic font-normal text-[#F4F0E8]">
                Opportunities.
              </span>
              <br />
              <span className="font-medium text-[#C7A773]">Driving</span>{' '}
              <span className="font-serif italic font-normal text-[#C7A773]">Growth.</span>
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-[#A4A9AF] font-sans leading-relaxed max-w-2xl mb-10"
            >
              {personal.heroBio}
            </motion.p>

            {/* CTAs & Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-5 pt-2"
            >
              <a
                href="#experience"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C7A773] text-[#0B1017] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#DFC498] transition-all duration-300 shadow-[0_4px_20px_rgba(199,167,115,0.25)]"
              >
                <span>Explore My Experience</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#C7A773]/40 text-[#F4F0E8] text-xs font-medium uppercase tracking-[0.18em] hover:border-[#C7A773] hover:text-[#C7A773] hover:bg-[#C7A773]/5 transition-all duration-300"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C7A773]" />
              </a>

              <div className="flex items-center gap-2 text-xs font-mono text-[#A4A9AF] ml-1 sm:ml-4">
                <MapPin className="w-3.5 h-3.5 text-[#C7A773]" />
                <span>Lahore, Pakistan</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Executive Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer architectural double frame with corner ticks */}
              <div className="relative p-3 bg-gradient-to-b from-[#20252B]/60 to-[#0B1017]/90 border border-[#C7A773]/20 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
                {/* Architectural corner accents */}
                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#C7A773]" />
                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#C7A773]" />
                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#C7A773]" />
                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#C7A773]" />

                {/* Inner Container */}
                <div className="relative aspect-[3/4] w-full bg-[#131A24] border border-[#C7A773]/15 overflow-hidden flex flex-col justify-between p-8">
                  {links.portraitImageUrl ? (
                    <img
                      src={links.portraitImageUrl}
                      alt={personal.name}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                  ) : (
                    <>
                      {/* Editorial Portrait Placeholder Graphic */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#18212D] via-[#101721] to-[#0B1017] flex flex-col items-center justify-center p-6 text-center">
                        {/* Architectural fine circular emblem */}
                        <div className="relative w-32 h-32 rounded-full border border-[#C7A773]/30 flex items-center justify-center mb-6">
                          <div className="w-24 h-24 rounded-full border border-[#C7A773]/15 flex items-center justify-center">
                            <span className="font-serif text-4xl text-[#C7A773] tracking-widest pl-1">
                              {personal.monogram}
                            </span>
                          </div>
                          {/* Radial indicator tick */}
                          <span className="absolute top-0 w-1 h-2 bg-[#C7A773]" />
                          <span className="absolute bottom-0 w-1 h-2 bg-[#C7A773]" />
                        </div>

                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A773] mb-1">
                          Executive Profile
                        </span>
                        <h3 className="text-2xl font-serif text-[#F4F0E8] tracking-wide mb-2">
                          {personal.name}
                        </h3>
                        <p className="text-xs font-sans text-[#A4A9AF] max-w-xs leading-relaxed">
                          Business Development Manager &amp; B2B Growth Strategist
                        </p>
                      </div>
                    </>
                  )}

                  {/* Top Status Strip */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A4A9AF] tracking-widest uppercase">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#C7A773]" />
                      Lahore, PK
                    </span>
                    <span className="text-[#C7A773]/80">4.5+ Yrs Exp</span>
                  </div>

                  {/* Bottom Strip: Availability Status */}
                  <div className="relative z-10 mt-auto pt-4 border-t border-[#C7A773]/20 bg-[#0B1017]/70 backdrop-blur-sm -mx-4 -mb-4 px-4 pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A773]" />
                        <span className="text-xs text-[#F4F0E8] font-sans font-medium">
                          Active at Visionerds
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#C7A773]">
                        Team Lead
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative label note below portrait */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#A4A9AF]/70 px-1">
                <span>EST. 2021 — PRESENT</span>
                <span>B2B LEADERSHIP</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Understated bottom scroll prompter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 sm:mt-20 flex justify-center items-center"
      >
        <a
          href="#highlights"
          aria-label="Scroll to Highlights"
          className="flex flex-col items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase text-[#A4A9AF] hover:text-[#C7A773] transition-colors"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#C7A773] animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};
