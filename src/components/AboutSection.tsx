import React from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { personal, links } = portfolioData;

  const thematicTags = [
    'B2B Strategy',
    'Client Acquisition',
    'Relationship Building',
    'Team Leadership',
    'Tech Solution Selling'
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-[#0B1017]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Anchor */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="w-8 h-[1px] bg-[#C7A773]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C7A773]">
                01 / The Professional
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F4F0E8] leading-[1.15] mb-8"
              style={{ textWrap: 'balance' }}
            >
              A Strategic Mindset.{' '}
              <span className="italic text-[#DFC498]">A Relationship-Driven</span> Approach.
            </motion.h2>

            {/* Subtle decorative quote box */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-[#131A24]/70 border-l border-[#C7A773]/40 border-y border-r border-[#C7A773]/10"
            >
              <p className="font-serif italic text-base sm:text-lg text-[#F4F0E8]/90 leading-relaxed mb-3">
                &ldquo;Business development in tech isn't about hard-selling software features. It is about understanding operational pain points, building consultative trust, and aligning solutions that drive commercial growth.&rdquo;
              </p>
              <span className="text-xs font-mono tracking-widest text-[#C7A773] uppercase">
                — Asad Munawar
              </span>
            </motion.div>
          </div>

          {/* Right Column: Narrative & Clean Unboxed Thematic Identifiers */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6 text-[#A4A9AF] text-base sm:text-lg leading-relaxed font-sans"
            >
              {personal.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx} className="first-of-type:text-[#F4F0E8]">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Clean unboxed thematic tags with typographic separators (anti-slop rule) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-10 mt-10 border-t border-[#C7A773]/15"
            >
              <span className="block text-xs font-mono uppercase tracking-[0.2em] text-[#C7A773] mb-4">
                Core Competency Pillars
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-[#F4F0E8]/80 font-sans">
                {thematicTags.map((tag, i) => (
                  <React.Fragment key={tag}>
                    <span className="hover:text-[#C7A773] transition-colors">{tag}</span>
                    {i < thematicTags.length - 1 && (
                      <span className="text-[#C7A773]/40" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Action Links */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#C7A773] hover:text-[#DFC498] py-2 transition-colors group"
                >
                  <span>Explore Capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {links.resumePdfUrl && (
                  <a
                    href={links.resumePdfUrl}
                    download
                    className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#A4A9AF] hover:text-[#F4F0E8] py-2 transition-colors ml-4"
                  >
                    <span>Download Resume (PDF)</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
