import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, ExperienceItem } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';
import {
  Briefcase,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Calendar,
  Sparkles,
  Layers
} from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const { experience } = portfolioData;
  const [expandedId, setExpandedId] = useState<string>(experience[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#0B1017]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          label="06 / CAREER JOURNEY"
          title="A Career Built Around Business Growth."
          subtitle="Progressing from hands-on platform bidding to executive leadership: 4.5+ years of strategic client acquisition and team direction in technical environments."
        />

        {/* Timeline Container */}
        <div className="relative mt-12 max-w-4xl mx-auto">
          {/* Subtle vertical spine hairline */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-8 w-[1px] bg-gradient-to-b from-[#C7A773] via-[#C7A773]/30 to-transparent pointer-events-none" />

          <div className="space-y-8">
            {experience.map((item, index) => {
              const isExpanded = expandedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Node on Spine */}
                  <div
                    className={`absolute left-2 sm:left-6 -translate-x-1/2 top-6 w-5 h-5 border flex items-center justify-center transition-colors ${
                      item.isCurrent
                        ? 'bg-[#C7A773] border-[#C7A773]'
                        : 'bg-[#0B1017] border-[#C7A773]/40'
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        item.isCurrent ? 'bg-[#0B1017]' : 'bg-[#C7A773]'
                      }`}
                    />
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`p-6 sm:p-8 bg-[#131A24]/60 border transition-all duration-300 ${
                      isExpanded
                        ? 'border-[#C7A773]/50 shadow-[0_15px_40px_rgba(0,0,0,0.5)]'
                        : 'border-[#C7A773]/15 hover:border-[#C7A773]/30'
                    }`}
                  >
                    {/* Top Row: Dates & Overlap indicator */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#C7A773]">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.period}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        {item.isCurrent && (
                          <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 bg-[#C7A773]/10 text-[#C7A773] border border-[#C7A773]/30">
                            Current Role
                          </span>
                        )}
                        {item.overlapNote && (
                          <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 bg-[#20252B] text-[#A4A9AF] border border-[#A4A9AF]/20">
                            Concurrent Engagement
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Company Name & Role Title */}
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F0E8]">
                          {item.company}
                        </h3>
                        <p className="text-sm font-sans font-medium text-[#C7A773]/90 mt-0.5">
                          {item.role}
                        </p>
                      </div>

                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#A4A9AF] hover:text-[#C7A773] py-1 transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Less' : 'Details'}</span>
                        {isExpanded ? (
                          <ChevronUp className="w-3.5 h-3.5 text-[#C7A773]" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-[#C7A773]" />
                        )}
                      </button>
                    </div>

                    {/* Overlap Explanatory Callout if applicable */}
                    {item.overlapNote && (
                      <div className="mb-4 py-1.5 px-3 bg-[#20252B]/60 border-l-2 border-[#C7A773]/40 text-xs text-[#A4A9AF] font-sans">
                        <span className="font-mono text-[11px] text-[#C7A773] uppercase tracking-wider block mb-0.5">
                          Employment Timeline Note:
                        </span>
                        {item.overlapNote}
                      </div>
                    )}

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#A4A9AF] font-sans leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Expandable Detailed Responsibilities */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pt-4 border-t border-[#C7A773]/15 overflow-hidden"
                        >
                          <span className="block text-xs font-mono uppercase tracking-widest text-[#F4F0E8] font-medium mb-3">
                            Documented Scope &amp; Responsibilities:
                          </span>
                          <div className="space-y-2 mb-6">
                            {item.responsibilities.map((resp, rIdx) => (
                              <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A4A9AF]">
                                <CheckCircle2 className="w-4 h-4 text-[#C7A773] shrink-0 mt-0.5" />
                                <span>{resp}</span>
                              </div>
                            ))}
                          </div>

                          {/* Tools Used */}
                          <div className="pt-3 border-t border-[#C7A773]/10">
                            <span className="text-[11px] font-mono tracking-widest uppercase text-[#C7A773] block mb-1.5">
                              Tools &amp; Channels Utilized:
                            </span>
                            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-mono text-[#F4F0E8]/80">
                              {item.toolsUsed.map((tool, tIdx) => (
                                <React.Fragment key={tool}>
                                  <span>{tool}</span>
                                  {tIdx < item.toolsUsed.length - 1 && (
                                    <span className="text-[#C7A773]/30">·</span>
                                  )}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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
