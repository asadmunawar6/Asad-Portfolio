import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('a, button, [role="button"], input, textarea, .interactive-target');
        setIsHovering(!!interactive);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision small dot */}
      <motion.div
        className="fixed w-1.5 h-1.5 rounded-full bg-[#C7A773] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x,
          y: position.y,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 450, mass: 0.1 }}
      />

      {/* Trailing fine hairline ring */}
      <motion.div
        className="fixed rounded-full border border-[#C7A773]/40 pointer-events-none -translate-x-1/2 -translate-y-1/2"
        animate={{
          x: position.x,
          y: position.y,
          width: isHovering ? 46 : 28,
          height: isHovering ? 46 : 28,
          borderColor: isHovering ? 'rgba(199, 167, 115, 0.7)' : 'rgba(199, 167, 115, 0.3)',
          backgroundColor: isHovering ? 'rgba(199, 167, 115, 0.05)' : 'transparent',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </div>
  );
};
