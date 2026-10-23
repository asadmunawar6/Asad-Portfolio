import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { portfolioData } from '../data/portfolioData';

// Minimal number counter component
const AnimatedNumber: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCurrent(value);
        clearInterval(timer);
      } else {
        setCurrent(Number(start.toFixed(1)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F4F0E8] tracking-tight">
      {Number.isInteger(value) ? Math.floor(current) : current}
      <span className="text-[#C7A773]">{suffix}</span>
    </span>
  );
};

export const ProfessionalHighlights: React.FC = () => {
  const { highlights } = portfolioData;

  return (
    <section id="highlights" className="relative border-y border-[#C7A773]/15 bg-[#131A24]/60 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#C7A773]/15">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="py-6 md:py-2 md:px-8 first:pt-0 md:first:pl-0 last:pb-0 md:last:pr-0 flex flex-col justify-between"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#C7A773]">
                  0{index + 1} // FACT
                </span>
              </div>

              <div className="mb-3">
                {item.isNumeric && item.numericValue !== undefined ? (
                  <AnimatedNumber value={item.numericValue} suffix={item.suffix} />
                ) : (
                  <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F4F0E8] tracking-tight">
                    {item.metric}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-medium text-[#F4F0E8] mb-1 font-sans">
                  {item.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#A4A9AF] font-sans">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
