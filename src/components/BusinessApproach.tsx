import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const BusinessApproach: React.FC = () => {
  const { approach } = portfolioData;

  return (
    <section id="approach" className="py-24 sm:py-32 relative bg-[#0B1017]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          label="04 / THE APPROACH"
          title="From Initial Research to Lasting Client Relationships."
          subtitle="An illustrative synthesis of outbound strategy: systematic research, customized dialogue, technical alignment, and long-term client retention."
        />

        <div className="relative mt-12 sm:mt-16">
          {/* Subtle center hairline on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#C7A773]/30 via-[#C7A773]/15 to-transparent -translate-x-1/2 pointer-events-none" />

          <div className="space-y-10 sm:space-y-12">
            {approach.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center"
                >
                  {/* Left Column (Content or Spacer) */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:text-right order-2 lg:order-1' : 'order-2 lg:order-3'
                    }`}
                  >
                    <div
                      className={`p-6 sm:p-8 bg-[#131A24]/40 border border-[#C7A773]/15 hover:border-[#C7A773]/40 transition-colors ${
                        isEven ? 'lg:ml-auto' : 'lg:mr-auto'
                      } max-w-xl`}
                    >
                      <span className="text-[11px] font-mono tracking-widest uppercase text-[#C7A773] block mb-2">
                        {item.focus}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif text-[#F4F0E8] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A4A9AF] font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node / Phase Marker */}
                  <div className="order-1 lg:order-2 lg:col-span-2 flex justify-start lg:justify-center">
                    <div className="relative w-12 h-12 bg-[#0B1017] border border-[#C7A773] flex items-center justify-center shadow-[0_0_15px_rgba(199,167,115,0.2)]">
                      <span className="font-mono text-xs font-bold text-[#C7A773]">
                        {item.phase}
                      </span>
                      {/* Corner subtle ticks */}
                      <span className="absolute -top-1 -left-1 w-1.5 h-1.5 border-t border-l border-[#C7A773]" />
                      <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 border-b border-r border-[#C7A773]" />
                    </div>
                  </div>

                  {/* Right Column (Spacer or Content) */}
                  <div
                    className={`hidden lg:block lg:col-span-5 ${
                      isEven ? 'order-3' : 'order-1 text-right'
                    }`}
                  >
                    <div className="text-xs font-mono tracking-[0.25em] text-[#C7A773]/40 uppercase px-6">
                      {isEven ? `Phase ${item.phase}` : `Step ${item.phase}`}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
