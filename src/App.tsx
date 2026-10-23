import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProfessionalHighlights } from './components/ProfessionalHighlights';
import { AboutSection } from './components/AboutSection';
import { CoreCapabilities } from './components/CoreCapabilities';
import { AcquisitionChannels } from './components/AcquisitionChannels';
import { BusinessApproach } from './components/BusinessApproach';
import { ProjectShowcase } from './components/ProjectShowcase';
import { FreelanceProfilesSection } from './components/FreelanceProfilesSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ToolkitSection } from './components/ToolkitSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1017] text-[#F4F0E8] relative selection:bg-[#C7A773]/30 selection:text-[#F4F0E8]">
      {/* Skip to Content for Accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C7A773] focus:text-[#0B1017] focus:font-semibold focus:text-xs focus:uppercase focus:tracking-wider focus:outline-none"
      >
        Skip to content
      </a>

      {/* Intro Preloader */}
      {!preloaderFinished && (
        <Preloader onComplete={() => setPreloaderFinished(true)} />
      )}

      {/* Subtle Progress Bar */}
      <ScrollProgress />

      {/* Desktop Luxury Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <ProfessionalHighlights />
        <AboutSection />
        <CoreCapabilities />
        <AcquisitionChannels />
        <BusinessApproach />
        <ProjectShowcase />
        <FreelanceProfilesSection />
        <ExperienceTimeline />
        <ToolkitSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
