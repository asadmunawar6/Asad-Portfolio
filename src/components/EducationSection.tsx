import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 sm:py-32 relative bg-[#0B1017]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          label="08 / ACADEMIC FOUNDATION"
          title="A Technical Foundation for Commercial Thinking."
          subtitle="Understanding technical architecture from first principles to bridge the gap between engineering teams and business leadership."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl p-8 sm:p-12 bg-[#131A24]/50 border border-[#C7A773]/20 relative shadow-[0_15px_40px_rgba(0,0,0,0.4)]"
        >
          {/* Architectural corners */}
          <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#C7A773]" />
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#C7A773]" />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#C7A773]/15 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#C7A773]/40 flex items-center justify-center text-[#C7A773]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif text-[#F4F0E8]">
                  {education.degree}
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#C7A773]">
                  {education.institution}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-[#A4A9AF]">
              <Calendar className="w-3.5 h-3.5 text-[#C7A773]" />
              <span>Graduation: {education.year}</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#A4A9AF] font-sans leading-relaxed">
            {education.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
