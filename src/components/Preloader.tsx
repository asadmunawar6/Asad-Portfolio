import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'monogram' | 'line' | 'done'>('monogram');

  useEffect(() => {
    // Check if user prefers reduced motion or has already seen preloader in this session
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hasSeen = sessionStorage.getItem('am_preloader_seen');

    if (prefersReducedMotion || hasSeen) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setStage('line'), 400);
    const t2 = setTimeout(() => {
      setStage('done');
      sessionStorage.setItem('am_preloader_seen', 'true');
      setTimeout(onComplete, 400);
    }, 1300);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('am_preloader_seen', 'true');
    onComplete();
  };

  return (
    <AnimatePresence>
      {stage !== 'done' && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B1017] text-[#F4F0E8]"
        >
          {/* Skip CTA */}
          <button
            onClick={handleSkip}
            className="absolute top-6 right-6 text-xs font-mono uppercase tracking-widest text-[#A4A9AF] hover:text-[#C7A773] transition-colors py-1 px-3 border border-transparent hover:border-[#C7A773]/30"
          >
            Skip intro
          </button>

          <div className="flex flex-col items-center">
            {/* AM Luxury Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <div className="w-16 h-16 border border-[#C7A773]/40 flex items-center justify-center">
                <span className="font-serif text-2xl font-medium tracking-[0.2em] text-[#C7A773] pl-1">
                  AM
                </span>
                {/* Architectural corner ticks */}
                <span className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#C7A773]" />
                <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#C7A773]" />
                <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#C7A773]" />
                <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#C7A773]" />
              </div>
            </motion.div>

            {/* Horizontal revealing champagne line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: stage === 'line' ? 120 : 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] bg-[#C7A773]/70 mb-4"
            />

            {/* Title Fade */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: stage === 'line' ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs font-mono tracking-[0.3em] uppercase text-[#A4A9AF]"
            >
              Asad Munawar
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
