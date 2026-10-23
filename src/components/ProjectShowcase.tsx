import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, CampaignProject } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';
import {
  Layers,
  CheckCircle2,
  X,
  Maximize2,
  Sparkles,
  Mail,
  Linkedin,
  ArrowRight
} from 'lucide-react';

export const ProjectShowcase: React.FC = () => {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<CampaignProject | null>(null);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#131A24]/30 border-t border-[#C7A773]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          label="05 / SELECTED WORK"
          title="Strategy in Practice."
          subtitle="Documented business development initiatives: translating complex technical capabilities into structured outreach campaigns and client conversations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-[#0B1017] border border-[#C7A773]/20 hover:border-[#C7A773]/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between"
            >
              {/* Corner architectural ticks */}
              <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-[#C7A773]/50" />
              <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-[#C7A773]/50" />

              <div>
                {/* Header Strip: Number & Category */}
                <div className="flex items-center justify-between pb-4 border-b border-[#C7A773]/15 mb-6">
                  <span className="font-serif text-3xl sm:text-4xl text-[#C7A773]/40 group-hover:text-[#C7A773] transition-colors">
                    {proj.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#C7A773]">
                    {proj.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F0E8] mb-4 group-hover:text-[#DFC498] transition-colors">
                  {proj.title}
                </h3>

                {/* Overview */}
                <p className="text-xs sm:text-sm text-[#A4A9AF] font-sans leading-relaxed mb-6">
                  {proj.overview}
                </p>

                {/* Responsibilities list */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F4F0E8] block mb-2 font-medium">
                    Core Campaign Responsibilities:
                  </span>
                  {proj.responsibilities.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#A4A9AF]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A773] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                  {proj.responsibilities.length > 4 && (
                    <p className="text-[11px] font-mono text-[#C7A773]/80 italic pt-1">
                      + {proj.responsibilities.length - 4} more detailed responsibilities
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Strip: Tools & Modal Trigger */}
              <div className="pt-6 border-t border-[#C7A773]/15 flex items-center justify-between">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#F4F0E8]/70">
                  {proj.tools.map((t, i) => (
                    <React.Fragment key={t}>
                      <span>{t}</span>
                      {i < proj.tools.length - 1 && (
                        <span className="text-[#C7A773]/30">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#C7A773] hover:text-[#DFC498] py-1 transition-colors"
                >
                  <span>Examine</span>
                  <Maximize2 className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Detailed Project Breakdown */}
        <AnimatePresence>
          {selectedProject && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B1017]/90 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0B1017] border border-[#C7A773]/40 p-6 sm:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-[#F4F0E8]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 text-[#A4A9AF] hover:text-[#C7A773] transition-colors"
                  aria-label="Close Case Study"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Modal Header */}
                <div className="mb-6 pb-6 border-b border-[#C7A773]/20">
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A773]">
                    Case Study 0{selectedProject.number} · {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F0E8] mt-2 mb-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-sm text-[#A4A9AF] font-sans leading-relaxed">
                    {selectedProject.overview}
                  </p>
                </div>

                {/* Qualitative Architecture */}
                <div className="mb-8 p-5 bg-[#131A24]/60 border border-[#C7A773]/15">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#C7A773] block mb-2">
                    Qualitative Scope &amp; Positioning
                  </span>
                  <p className="text-xs sm:text-sm text-[#F4F0E8]/90 font-sans leading-relaxed">
                    {selectedProject.qualitativeSummary}
                  </p>
                </div>

                {/* Full Responsibilities */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F4F0E8] font-medium block">
                    Complete Documented Responsibilities:
                  </span>
                  {selectedProject.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#A4A9AF]">
                      <CheckCircle2 className="w-4 h-4 text-[#C7A773] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tools Applied */}
                <div className="pt-6 border-t border-[#C7A773]/20 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono tracking-widest uppercase text-[#C7A773] block mb-1">
                      Tool Ecosystem
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs font-mono text-[#F4F0E8]">
                      {selectedProject.tools.map((t, idx) => (
                        <span key={idx}>
                          {t}
                          {idx < selectedProject.tools.length - 1 && ' · '}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 text-xs font-mono uppercase tracking-widest text-[#0B1017] bg-[#C7A773] hover:bg-[#DFC498] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
