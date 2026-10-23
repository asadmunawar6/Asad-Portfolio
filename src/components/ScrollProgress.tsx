import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50 pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-[#C7A773] via-[#DFC498] to-[#C7A773] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(199,167,115,0.5)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
