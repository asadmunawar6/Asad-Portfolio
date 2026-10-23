import React, { useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  Send,
  Linkedin
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { personal, links } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative bg-[#0B1017] border-t border-[#C7A773]/15">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C7A773]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-6">
            <SectionHeader
              label="09 / LET'S CONNECT"
              title="Let's Start a Meaningful Conversation."
              subtitle="Interested in discussing business development, client acquisition, technology-sector growth, or a potential professional collaboration? I'd be glad to connect."
            />

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 space-y-4 text-xs sm:text-sm text-[#A4A9AF] font-sans"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#C7A773]" />
                <span>Lahore, Pakistan (Open to Remote Engagements &amp; Global B2B Roles)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C7A773]" />
                <a
                  href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                  className="hover:text-[#F4F0E8] transition-colors"
                >
                  {personal.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C7A773]" />
                <a
                  href={`mailto:${personal.email}`}
                  className="hover:text-[#F4F0E8] transition-colors"
                >
                  {personal.email}
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High-Impact Direct Action Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 p-8 sm:p-12 bg-[#131A24]/60 border border-[#C7A773]/25 relative shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            {/* Architectural corner highlights */}
            <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#C7A773]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#C7A773]" />
            <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#C7A773]" />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#C7A773]" />

            <div className="mb-6 pb-6 border-b border-[#C7A773]/15">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#C7A773] block mb-1">
                Direct Contact Channel
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#F4F0E8] mb-2">
                Initiate Dialogue
              </h3>
              <p className="text-xs text-[#A4A9AF] font-sans">
                Direct communication is preferred. Messages are received directly in Asad's inbox.
              </p>
            </div>

            {/* Email Address Display Box */}
            <div className="p-4 bg-[#0B1017] border border-[#C7A773]/20 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A4A9AF] block mb-0.5">
                  Primary Email
                </span>
                <span className="text-sm sm:text-base font-mono text-[#F4F0E8] select-all">
                  {personal.email}
                </span>
              </div>

              {/* Functional Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[#C7A773] border border-[#C7A773]/40 hover:bg-[#C7A773]/10 transition-colors"
                aria-label="Copy Email Address to Clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${personal.email}?subject=Discussion%3A%20B2B%20Business%20Development`}
                className="flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-6 bg-[#C7A773] text-[#0B1017] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#DFC498] transition-all shadow-[0_4px_20px_rgba(199,167,115,0.25)] text-center"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send an Email</span>
              </a>

              {links.linkedInUrl && (
                <a
                  href={links.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3.5 px-6 border border-[#C7A773]/40 text-[#F4F0E8] text-xs font-medium uppercase tracking-[0.18em] hover:border-[#C7A773] hover:text-[#C7A773] transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#C7A773]" />
                  <span>LinkedIn Profile</span>
                </a>
              )}
            </div>

            <p className="mt-6 text-[11px] font-mono text-[#A4A9AF]/70 text-center">
              Typically responding within 24 hours · Lahore (GMT+5)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
