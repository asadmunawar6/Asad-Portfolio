import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {/* Editorial Chapter Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-4"
        style={{ justifyContent: isCenter ? 'center' : 'flex-start' }}
      >
        <span className="w-6 h-[1px] bg-[#C7A773]" />
        <span className="text-xs font-mono tracking-[0.2em] text-[#C7A773] uppercase">
          {label}
        </span>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F4F0E8] leading-[1.15] tracking-tight"
        style={{ textWrap: 'balance' }}
      >
        {title}
      </motion.h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm sm:text-base text-[#A4A9AF] font-sans leading-relaxed"
          style={{ textWrap: 'balance' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
