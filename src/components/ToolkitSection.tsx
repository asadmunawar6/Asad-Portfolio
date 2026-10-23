import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

export const ToolkitSection: React.FC = () => {
  const { tools } = portfolioData;

  return (
    <section id="toolkit" className="py-24 sm:py-32 relative bg-[#131A24]/30 border-t border-[#C7A773]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          label="07 / THE TOOLKIT"
          title="The Platforms Behind a Structured Approach."
          subtitle="Enterprise tooling for prospect discovery, zero-bounce hygiene, cadence automation, and pipeline intelligence."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {tools.map((cat, index) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-[#0B1017] border border-[#C7A773]/15 hover:border-[#C7A773]/35 transition-colors relative"
            >
              {/* Category Header */}
              <div className="pb-4 border-b border-[#C7A773]/15 mb-6">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A773] block mb-1">
                  Category 0{index + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-[#F4F0E8]">
                  {cat.category}
                </h3>
                <p className="text-xs text-[#A4A9AF] font-sans mt-1">
                  {cat.description}
                </p>
              </div>

              {/* Tools List */}
              <div className="space-y-4">
                {cat.tools.map((t) => (
                  <div
                    key={t.name}
                    className="p-3.5 bg-[#131A24]/50 border border-[#C7A773]/10 hover:border-[#C7A773]/30 transition-colors flex flex-col sm:flex-row sm:items-baseline justify-between gap-2"
                  >
                    <span className="text-sm font-sans font-medium text-[#F4F0E8]">
                      {t.name}
                    </span>
                    <span className="text-xs font-sans text-[#A4A9AF]">
                      {t.purpose}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
