import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';
import {
  TrendingUp,
  Target,
  Handshake,
  Cpu,
  Layers,
  Users2,
  ArrowRight
} from 'lucide-react';

export const CoreCapabilities: React.FC = () => {
  const { capabilities } = portfolioData;

  const iconMap: Record<string, React.ReactNode> = {
    'b2b-bd': <TrendingUp className="w-5 h-5" />,
    'lead-gen': <Target className="w-5 h-5" />,
    'sales-strategy': <Handshake className="w-5 h-5" />,
    'solution-selling': <Cpu className="w-5 h-5" />,
    'crm-pipeline': <Layers className="w-5 h-5" />,
    'team-leadership': <Users2 className="w-5 h-5" />,
  };

  return (
    <section id="capabilities" className="py-24 sm:py-32 relative bg-[#0B1017]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          label="02 / CAPABILITIES"
          title="Turning Business Potential Into Meaningful Opportunities."
          subtitle="A disciplined, solution-oriented approach to positioning technology capabilities and cultivating enterprise relationships."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-8 bg-[#131A24]/50 border border-[#C7A773]/15 hover:border-[#C7A773]/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Corner architectural ticks on hover */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#C7A773]/0 group-hover:border-[#C7A773]/60 transition-colors" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#C7A773]/0 group-hover:border-[#C7A773]/60 transition-colors" />

              <div>
                {/* Header row: Number & Minimal Icon */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C7A773]/10">
                  <span className="font-mono text-xs tracking-[0.25em] text-[#C7A773]">
                    {item.number}
                  </span>
                  <div className="text-[#A4A9AF] group-hover:text-[#C7A773] transition-colors">
                    {iconMap[item.id] || <TrendingUp className="w-5 h-5" />}
                  </div>
                </div>

                {/* Capability Title */}
                <h3 className="text-xl sm:text-2xl font-serif text-[#F4F0E8] mb-3 group-hover:text-[#DFC498] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A4A9AF] font-sans leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Key Competency Sub-areas (unboxed text) */}
              <div className="pt-4 border-t border-[#C7A773]/10">
                <span className="block text-[11px] font-mono tracking-widest uppercase text-[#C7A773]/70 mb-2">
                  Key Focus Areas
                </span>
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-sans text-[#F4F0E8]/75">
                  {item.keyAreas.map((area, i) => (
                    <React.Fragment key={area}>
                      <span>{area}</span>
                      {i < item.keyAreas.length - 1 && (
                        <span className="text-[#C7A773]/30" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
