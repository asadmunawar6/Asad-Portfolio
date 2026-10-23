import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { portfolioData, FreelanceProfile } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';
import {
  ExternalLink,
  Maximize2,
  X,
  CheckCircle2,
  ArrowUpRight,
  Info,
  ShieldCheck,
  Briefcase,
  Star,
  TrendingUp,
  Award
} from 'lucide-react';

// Platform Brand SVGs with authentic styling
const PlatformIcon: React.FC<{ platform: string; className?: string }> = ({ platform, className = "w-4 h-4" }) => {
  if (platform === 'Upwork') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-3.799 0-5.836 2.723-6.45 4.184-1.28-1.921-1.977-4.148-2.072-6.202H6.963v6.79c0 1.954-.95 3.738-2.54 4.772l1.636 2.508c2.259-1.468 3.659-3.957 3.69-6.726l.012-.553c.125 1.547.669 3.328 1.636 4.887l-2.094 9.805h3.136l1.458-6.828c.957.643 2.083 1.053 3.315 1.053 3.797 0 6.877-3.08 6.877-6.878 0-3.797-3.08-7.82-6.878-7.82z" />
      </svg>
    );
  }
  if (platform === 'Freelancer.com') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.072 0l-4.17 4.298 7.42 5.097-3.25 2.235 6.634 4.56L24 10.748 14.072 0zm-5.7 6.467L0 15.112l10.927.054 2.14-1.472-4.695-7.227zm7.253 10.826l-1.99 1.369 4.398 5.338L21 21.042l-5.375-3.749z" />
      </svg>
    );
  }
  // Fiverr
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.999 15.65c-.015-2.029-.444-3.529-1.304-4.502-.859-.974-2.186-1.468-3.978-1.468-1.611 0-2.884.446-3.82 1.336-.935.89-1.476 2.23-1.621 4.02l2.368.225c.088-1.168.412-2.019.972-2.553.56-.534 1.267-.801 2.12-.801 1.077 0 1.866.301 2.367.902.501.602.76 1.558.777 2.868h-4.321c-1.854 0-3.22.443-4.099 1.328-.879.885-1.319 2.123-1.319 3.714 0 1.547.452 2.764 1.356 3.651.904.887 2.193 1.33 3.867 1.33 1.583 0 2.879-.472 3.887-1.415v1.171h2.725V15.65zm-2.725 4.38c-.378.472-.942.708-1.693.708-.669 0-1.176-.188-1.521-.564-.345-.376-.518-.949-.518-1.72 0-.847.199-1.471.597-1.872.398-.401 1.043-.602 1.935-.602h1.2v3.05h-.000zM1.001 8.35h3.047l2.25 8.784 2.25-8.784h3.047l-3.825 12.65h-2.944L1.001 8.35z" />
    </svg>
  );
};

const getBadgeStyles = (badge: string) => {
  const b = badge.toLowerCase();
  if (b.includes('plus')) {
    return {
      container: 'bg-[#EC4899]/15 border-[#EC4899]/50 text-[#F472B6]',
      icon: 'fill-[#F472B6] text-[#F472B6]'
    };
  }
  if (b.includes('preferred')) {
    return {
      container: 'bg-[#E39D00]/15 border-[#FDB813]/40 text-[#FDB813]',
      icon: 'fill-[#FDB813] text-[#FDB813]'
    };
  }
  return {
    container: 'bg-[#14A800]/10 border-[#14A800]/40 text-[#4ade80]',
    icon: 'fill-[#4ade80] text-[#4ade80]'
  };
};

export const FreelanceProfilesSection: React.FC = () => {
  const { freelanceProfiles } = portfolioData;
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Upwork' | 'Freelancer.com'>('All');
  const [activeLightboxProfile, setActiveLightboxProfile] = useState<FreelanceProfile | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveLightboxProfile(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProfiles = selectedFilter === 'All'
    ? freelanceProfiles
    : freelanceProfiles.filter(p => p.platform === selectedFilter);

  return (
    <section id="freelance-profiles" className="py-24 sm:py-32 relative bg-[#0B1017] border-t border-[#C7A773]/15">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-[#C7A773]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#C7A773]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <SectionHeader
          label="06 / MANAGED PROFILES &amp; ACCOUNTS"
          title="Freelancing Profiles &amp; Project Portfolios."
          subtitle="Direct showcase of commercial freelancing accounts and bidding operations managed on Upwork and Freelancer.com — featuring verified project workflows, technical proposal management, and direct platform links."
        />

        {/* Filter Segmented Bar */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#131A24]/60 border border-[#C7A773]/20 mb-12 max-w-md">
          {(['All', 'Upwork', 'Freelancer.com'] as const).map((platform) => {
            const isActive = selectedFilter === platform;
            return (
              <button
                key={platform}
                onClick={() => setSelectedFilter(platform)}
                className={`flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium uppercase tracking-[0.14em] transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-[#C7A773] text-[#0B1017] font-semibold shadow-sm'
                    : 'text-[#A4A9AF] hover:text-[#F4F0E8] hover:bg-[#20252B]/40'
                }`}
              >
                {platform !== 'All' && <PlatformIcon platform={platform} className="w-3.5 h-3.5" />}
                <span>{platform === 'All' ? 'All Platforms' : platform}</span>
              </button>
            );
          })}
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {filteredProfiles.map((profile, idx) => (
            <motion.div
              key={profile.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-[#131A24]/50 border border-[#C7A773]/20 hover:border-[#C7A773]/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between"
            >
              {/* Architectural corner ticks */}
              <span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#C7A773]/60" />
              <span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#C7A773]/60" />

              <div>
                {/* Header Strip: Platform Badge & Account Name */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#C7A773]/15 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 bg-[#0B1017] border border-[#C7A773]/30 text-[#C7A773]">
                      <PlatformIcon platform={profile.platform} className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#C7A773] block">
                        {profile.platform}
                      </span>
                      <span className="text-[11px] font-mono text-[#A4A9AF]">
                        {profile.accountName}
                      </span>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono tracking-wider text-[#A4A9AF] bg-[#0B1017] px-2.5 py-1 border border-[#C7A773]/15">
                    {profile.role}
                  </span>
                </div>

                {/* Badges Strip (Top Rated / Top Rated Plus / Preferred Freelancer, Rating, Growth Milestone) */}
                {(profile.badge || profile.ratingBadge || profile.growthHighlight) && (
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {profile.badge && (() => {
                      const style = getBadgeStyles(profile.badge);
                      return (
                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono tracking-wider font-semibold border ${style.container}`}>
                          <Star className={`w-3.5 h-3.5 ${style.icon}`} />
                          <span>{profile.badge.toUpperCase()}</span>
                        </div>
                      );
                    })()}

                    {profile.ratingBadge && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#20252B] border border-[#A4A9AF]/20 text-[#F4F0E8] text-[11px] font-mono tracking-wider">
                        <Award className="w-3.5 h-3.5 text-[#C7A773]" />
                        <span>{profile.ratingBadge}</span>
                      </div>
                    )}

                    {profile.growthHighlight && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#C7A773]/10 border border-[#C7A773]/30 text-[#C7A773] text-[11px] font-mono tracking-wider">
                        <TrendingUp className="w-3.5 h-3.5 text-[#C7A773]" />
                        <span>{profile.growthHighlight}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Profile Title & Category */}
                <h3 className="text-xl sm:text-2xl font-serif text-[#F4F0E8] mb-1 group-hover:text-[#DFC498] transition-colors">
                  {profile.title}
                </h3>
                <p className="text-xs font-mono text-[#C7A773]/85 uppercase tracking-wider mb-5">
                  {profile.category}
                </p>

                {/* Screenshot Frame / Interactive Wireframe Preview Viewport */}
                <div
                  onClick={() => setActiveLightboxProfile(profile)}
                  className="cursor-pointer group/screen relative w-full aspect-[16/9] sm:aspect-[16/10] bg-[#070B10] border border-[#C7A773]/25 overflow-hidden mb-6 flex flex-col justify-between transition-all hover:border-[#C7A773]"
                >
                  {profile.screenshotUrl ? (
                    <>
                      <img
                        src={profile.screenshotUrl}
                        alt={`${profile.platform} Profile Screenshot`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/screen:scale-105"
                      />
                      {/* Top status overlay strip */}
                      {profile.badge && (() => {
                        const style = getBadgeStyles(profile.badge);
                        return (
                          <div className={`absolute top-2 left-2 z-10 px-2.5 py-0.5 bg-[#0B1017]/90 backdrop-blur-sm border text-[10px] font-mono flex items-center gap-1 font-semibold ${style.container}`}>
                            <Star className={`w-3 h-3 ${style.icon}`} />
                            <span>{profile.badge}</span>
                          </div>
                        );
                      })()}
                    </>
                  ) : (
                    /* High-Fidelity Executive Architectural Preview Mockup */
                    <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#151D28] via-[#0E151F] to-[#0B1017]">
                      {/* Browser / Platform Mock Header */}
                      <div className="flex items-center justify-between pb-2 border-b border-[#C7A773]/15 text-[10px] font-mono text-[#A4A9AF]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#C7A773]/60" />
                          <span className="w-2 h-2 rounded-full bg-[#C7A773]/30" />
                          <span className="text-[#C7A773] uppercase tracking-wider">
                            {profile.platform.toUpperCase()} VERIFIED ACCOUNT
                          </span>
                        </div>
                        <span className="text-emerald-400/90 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> Active BD Engine
                        </span>
                      </div>

                      {/* Center Mock Profile Identity */}
                      <div className="py-2 flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#0B1017] border border-[#C7A773]/40 flex items-center justify-center text-[#C7A773] shrink-0">
                          <PlatformIcon platform={profile.platform} className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs font-serif text-[#F4F0E8] truncate">
                            {profile.accountName}
                          </div>
                          <div className="text-[10px] font-mono text-[#C7A773]/80 truncate">
                            {profile.role}
                          </div>
                          <div className="text-[10px] font-sans text-[#A4A9AF] line-clamp-1 mt-0.5">
                            {profile.category}
                          </div>
                        </div>
                      </div>

                      {/* Bottom Mock Stats Bar */}
                      <div className="pt-2 border-t border-[#C7A773]/10 flex items-center justify-between text-[10px] font-mono text-[#A4A9AF]">
                        <span>Proposal Stream · Scoping &amp; Bids</span>
                        <span className="text-[#C7A773] flex items-center gap-1 group-hover/screen:translate-x-0.5 transition-transform">
                          <Maximize2 className="w-3 h-3" /> Click to enlarge
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay with Enlarge Prompt */}
                  <div className="absolute inset-0 bg-[#0B1017]/75 backdrop-blur-[2px] opacity-0 group-hover/screen:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-[#F4F0E8] p-4 text-center">
                    <div className="w-10 h-10 border border-[#C7A773] bg-[#0B1017] flex items-center justify-center text-[#C7A773]">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#C7A773]">
                      Inspect Full Profile Screenshot
                    </span>
                    <span className="text-[11px] font-sans text-[#A4A9AF]">
                      Click to view full-resolution account verification
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A4A9AF] font-sans leading-relaxed mb-5">
                  {profile.description}
                </p>

                {/* Documented Highlights & Scopes */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F4F0E8] font-medium block mb-1.5">
                    Account Execution Scope:
                  </span>
                  {profile.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-[#A4A9AF]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C7A773] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Clean unboxed skills & services */}
                <div className="pt-4 border-t border-[#C7A773]/10 mb-6">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#F4F0E8]/75">
                    {profile.skillsAndServices.map((skill, sIdx) => (
                      <React.Fragment key={skill}>
                        <span>{skill}</span>
                        {sIdx < profile.skillsAndServices.length - 1 && (
                          <span className="text-[#C7A773]/30" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Row: Live Profile Redirect Button & Screenshot Inspector */}
              <div className="pt-5 border-t border-[#C7A773]/15 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[10px] font-mono text-[#A4A9AF]/80 max-w-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C7A773]" />
                  <span>{profile.metricsNote}</span>
                </span>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveLightboxProfile(profile)}
                    className="p-2 border border-[#C7A773]/25 text-[#A4A9AF] hover:text-[#C7A773] hover:border-[#C7A773] transition-colors"
                    aria-label={`Enlarge screenshot for ${profile.title}`}
                    title="Inspect Screenshot"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>

                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#C7A773] text-[#0B1017] text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#DFC498] transition-colors shadow-sm whitespace-nowrap"
                  >
                    <span>Visit Live Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* User Guide Box for Easy Screenshot Attachment */}
        <div className="mt-12 p-6 bg-[#131A24]/40 border border-[#C7A773]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans text-[#A4A9AF]">
          <div className="flex items-center gap-3">
            <Info className="w-4 h-4 text-[#C7A773] shrink-0" />
            <span>
              <strong className="text-[#F4F0E8] font-medium font-mono uppercase text-[11px] tracking-wider block sm:inline mr-2">
                Managed Accounts Note:
              </strong>
              All profiles above represent verified business development and project bidding operations managed by Asad Munawar. Click any <strong className="text-[#C7A773]">"Visit Live Profile"</strong> button to open the live Upwork or Freelancer.com profiles.
            </span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#C7A773] hover:text-[#DFC498] shrink-0 whitespace-nowrap"
          >
            <span>Inquire About Bidding Services</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution Screenshot Inspection */}
      <AnimatePresence>
        {activeLightboxProfile && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Screenshot preview for ${activeLightboxProfile.title}`}
            onClick={() => setActiveLightboxProfile(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#0B1017]/95 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl my-auto bg-[#0B1017] border border-[#C7A773]/40 p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between"
            >
              {/* Top Modal Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-[#C7A773]/20 mb-4 sm:mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#131A24] border border-[#C7A773]/30 text-[#C7A773]">
                    <PlatformIcon platform={activeLightboxProfile.platform} className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-serif text-[#F4F0E8]">
                        {activeLightboxProfile.title}
                      </h3>
                      {activeLightboxProfile.badge && (() => {
                        const style = getBadgeStyles(activeLightboxProfile.badge);
                        return (
                          <span
                            className={`hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 border text-[10px] font-mono font-semibold ${style.container}`}
                          >
                            <Star className={`w-3 h-3 ${style.icon}`} />
                            {activeLightboxProfile.badge}
                          </span>
                        );
                      })()}
                    </div>
                    <p className="text-xs font-mono text-[#C7A773]">
                      {activeLightboxProfile.platform} · {activeLightboxProfile.accountName}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveLightboxProfile(null)}
                  className="p-2 text-[#A4A9AF] hover:text-[#C7A773] transition-colors"
                  aria-label="Close Preview"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Screenshot Preview Frame */}
              <div className="relative w-full max-h-[65vh] bg-[#070B10] border border-[#C7A773]/20 overflow-y-auto mb-4 flex items-center justify-center">
                {activeLightboxProfile.screenshotUrl ? (
                  <img
                    src={activeLightboxProfile.screenshotUrl}
                    alt={activeLightboxProfile.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[62vh] object-contain mx-auto"
                  />
                ) : (
                  <div className="w-full aspect-[16/9] p-8 flex flex-col justify-between bg-gradient-to-br from-[#18212D] via-[#101721] to-[#0B1017]">
                    <div className="flex items-center justify-between text-xs font-mono text-[#A4A9AF] border-b border-[#C7A773]/20 pb-3">
                      <span className="flex items-center gap-2">
                        <PlatformIcon platform={activeLightboxProfile.platform} className="w-4 h-4 text-[#C7A773]" />
                        {activeLightboxProfile.platform.toUpperCase()} COMMERCIAL BIDDING ACCOUNT
                      </span>
                      <span className="text-[#C7A773] uppercase tracking-wider">
                        High-Resolution View
                      </span>
                    </div>

                    <div className="text-center py-8">
                      <div className="w-16 h-16 mx-auto mb-4 border border-[#C7A773]/40 flex items-center justify-center text-[#C7A773]">
                        <Briefcase className="w-8 h-8" />
                      </div>
                      <h4 className="text-2xl font-serif text-[#F4F0E8] mb-2">
                        {activeLightboxProfile.accountName}
                      </h4>
                      <p className="text-sm font-sans text-[#A4A9AF] max-w-md mx-auto">
                        {activeLightboxProfile.screenshotCaption || activeLightboxProfile.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#C7A773]/80 pt-3 border-t border-[#C7A773]/20">
                      <span>ROLE: {activeLightboxProfile.role}</span>
                      <span>READY FOR SCREENSHOT ATTACHMENT</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer with Direct Live Link & Verified Metrics */}
              <div className="pt-4 border-t border-[#C7A773]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-sans text-[#F4F0E8] font-medium">
                    {activeLightboxProfile.screenshotCaption}
                  </p>
                  <p className="text-[11px] font-mono text-[#A4A9AF] mt-0.5">
                    {activeLightboxProfile.metricsNote}
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={activeLightboxProfile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C7A773] text-[#0B1017] text-xs font-semibold uppercase tracking-[0.16em] hover:bg-[#DFC498] transition-colors"
                  >
                    <span>Visit Live on {activeLightboxProfile.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setActiveLightboxProfile(null)}
                    className="px-4 py-2.5 border border-[#C7A773]/30 text-xs font-mono uppercase tracking-wider text-[#F4F0E8] hover:text-[#C7A773] hover:border-[#C7A773] transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
