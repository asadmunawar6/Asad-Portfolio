import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, AcquisitionChannel } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';
import {
  Globe,
  Share2,
  Linkedin,
  Mail,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Workflow
} from 'lucide-react';

export const AcquisitionChannels: React.FC = () => {
  const { channels, links } = portfolioData;
  const [activeTab, setActiveTab] = useState<string>('upwork');
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const currentChannel = channels.find((c) => c.id === activeTab) || channels[0];

  const channelIcons: Record<string, React.ReactNode> = {
    upwork: <Globe className="w-4 h-4" />,
    fiverr: <Share2 className="w-4 h-4" />,
    linkedin: <Linkedin className="w-4 h-4" />,
    email: <Mail className="w-4 h-4" />,
  };

  return (
    <section id="channels" className="py-24 sm:py-32 relative bg-[#131A24]/40 border-t border-[#C7A773]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          label="03 / ACQUISITION CHANNELS"
          title="Multiple Channels. One Focus: Building Business Relationships."
          subtitle="A systematic, consultative framework across global freelance marketplaces, executive professional networks, and structured cold outbound pipelines."
        />

        {/* Channel Selector Tabs (Segmented Control adhering to anti-slop rules: functional buttons with clean layout) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 p-1.5 bg-[#0B1017] border border-[#C7A773]/20 mb-10 max-w-2xl">
          {channels.map((channel) => {
            const isActive = activeTab === channel.id;
            return (
              <button
                key={channel.id}
                onClick={() => {
                  setActiveTab(channel.id);
                  setActiveStageIndex(0);
                }}
                className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.15em] transition-all duration-200 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#C7A773] text-[#0B1017] font-semibold shadow-sm'
                    : 'text-[#A4A9AF] hover:text-[#F4F0E8] hover:bg-[#20252B]/40'
                }`}
              >
                {channelIcons[channel.id]}
                <span>{channel.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Channel Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChannel.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-12 bg-[#0B1017] border border-[#C7A773]/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative"
          >
            {/* Top architectural corner accents */}
            <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#C7A773]" />
            <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#C7A773]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left Column: Channel Overview & Responsibilities */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#C7A773] mb-3">
                    <Workflow className="w-3.5 h-3.5" />
                    <span>{currentChannel.tagline}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F0E8] mb-2">
                    {currentChannel.title}
                  </h3>
                  <p className="text-xs font-mono text-[#C7A773]/80 uppercase tracking-wider mb-6">
                    {currentChannel.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#A4A9AF] font-sans leading-relaxed mb-8">
                    {currentChannel.description}
                  </p>

                  {/* Documented Responsibilities */}
                  <div className="space-y-3 mb-8">
                    <span className="block text-xs font-mono uppercase tracking-widest text-[#F4F0E8] font-medium">
                      Documented Scope &amp; Execution:
                    </span>
                    {currentChannel.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#A4A9AF]">
                        <CheckCircle2 className="w-4 h-4 text-[#C7A773] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools used if available */}
                  {currentChannel.tools && (
                    <div className="pt-6 border-t border-[#C7A773]/10">
                      <span className="block text-[11px] font-mono tracking-widest uppercase text-[#C7A773] mb-2">
                        Supported Tooling:
                      </span>
                      <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs font-mono text-[#F4F0E8]">
                        {currentChannel.tools.map((tool, i) => (
                          <React.Fragment key={tool}>
                            <span>{tool}</span>
                            {i < (currentChannel.tools?.length || 0) - 1 && (
                              <span className="text-[#C7A773]/40">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Optional Profile Link (only if verified in config) */}
                {links[
                  currentChannel.id === 'upwork'
                    ? 'upworkUrl'
                    : currentChannel.id === 'fiverr'
                    ? 'fiverrUrl'
                    : currentChannel.id === 'linkedin'
                    ? 'linkedInUrl'
                    : 'upworkUrl'
                ] && (
                  <div className="mt-8 pt-4">
                    <a
                      href={
                        links[
                          currentChannel.id === 'upwork'
                            ? 'upworkUrl'
                            : currentChannel.id === 'fiverr'
                            ? 'fiverrUrl'
                            : currentChannel.id === 'linkedin'
                            ? 'linkedInUrl'
                            : 'upworkUrl'
                        ]
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C7A773] hover:text-[#DFC498] transition-colors"
                    >
                      <span>Verified {currentChannel.title} Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>

              {/* Right Column: Interactive Conceptual Workflow Architecture */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-[#131A24]/60 p-6 sm:p-8 border border-[#C7A773]/15">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#C7A773]/15 mb-6">
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C7A773]">
                      Strategic Opportunity Lifecycle
                    </span>
                    <span className="text-[11px] font-mono text-[#A4A9AF]">
                      Interactive Process Flow
                    </span>
                  </div>

                  <p className="text-xs text-[#A4A9AF] font-sans mb-6">
                    Click each stage below to examine how opportunities are researched, qualified, scoped, and nurtured.
                  </p>

                  {/* Connected Workflow Stages */}
                  <div className="space-y-3 relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-[19px] top-4 bottom-4 w-[1px] bg-[#C7A773]/20 pointer-events-none" />

                    {currentChannel.workflowStages.map((stg, sIndex) => {
                      const isSelected = activeStageIndex === sIndex;
                      return (
                        <div
                          key={stg.number}
                          onClick={() => setActiveStageIndex(sIndex)}
                          className={`cursor-pointer transition-all duration-200 relative p-4 border flex items-start gap-4 ${
                            isSelected
                              ? 'bg-[#18212D] border-[#C7A773] shadow-[0_0_15px_rgba(199,167,115,0.15)]'
                              : 'bg-[#0B1017]/80 border-[#C7A773]/10 hover:border-[#C7A773]/30'
                          }`}
                        >
                          {/* Stage Number Node */}
                          <div
                            className={`w-10 h-10 shrink-0 flex items-center justify-center font-mono text-xs border transition-colors ${
                              isSelected
                                ? 'bg-[#C7A773] text-[#0B1017] border-[#C7A773] font-bold'
                                : 'bg-[#131A24] text-[#C7A773] border-[#C7A773]/30'
                            }`}
                          >
                            {stg.number}
                          </div>

                          {/* Stage Info */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4
                                className={`text-sm sm:text-base font-sans font-medium ${
                                  isSelected ? 'text-[#F4F0E8]' : 'text-[#A4A9AF]'
                                }`}
                              >
                                {stg.label}
                              </h4>
                              {isSelected && (
                                <span className="text-[10px] font-mono text-[#C7A773] tracking-widest uppercase">
                                  Active Stage
                                </span>
                              )}
                            </div>
                            <p className="text-xs sm:text-sm text-[#A4A9AF] font-sans leading-relaxed">
                              {stg.detail}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Conceptual Notice Box */}
                <div className="mt-6 pt-4 border-t border-[#C7A773]/10 flex items-center justify-between text-[11px] font-mono text-[#A4A9AF]/70">
                  <span>* Conceptual workflow architecture</span>
                  <span>Solution-focused selling</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
