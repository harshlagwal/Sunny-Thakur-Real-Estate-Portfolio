import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrackRecordSection } from './components/TrackRecordSection';
import { TerritoryMapSection } from './components/TerritoryMapSection';
import { PropertyCategoriesSection } from './components/PropertyCategoriesSection';
import { FeaturedPropertiesSection } from './components/FeaturedPropertiesSection';
import { JourneyTimelineSection } from './components/JourneyTimelineSection';
import { PropertyNetworkSection } from './components/PropertyNetworkSection';
import { WhySunnySection } from './components/WhySunnySection';
import { ClientStoriesSection } from './components/ClientStoriesSection';
import { AreaGuideSection } from './components/AreaGuideSection';
import { AboutSunnySection } from './components/AboutSunnySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [selectedPropertyCategory, setSelectedPropertyCategory] = useState<string>('all');

  // Smooth scroll progress bar at top of screen
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const handleSelectCategory = (category: string) => {
    setSelectedPropertyCategory(category);
    // Smooth scroll to properties section
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#F5F3EE] dark:bg-[#111111] text-[#171717] dark:text-[#F5F3EE] selection:bg-[#B89A68]/30 selection:text-[#171717] dark:selection:text-white flex flex-col font-sans transition-colors duration-400 relative">
        {/* Top Gold Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B89A68] via-[#e5cfab] to-[#B89A68] origin-left z-[90] shadow-[0_1px_6px_rgba(184,154,104,0.6)] pointer-events-none"
          style={{ scaleX }}
        />

      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* Section 01: Cinematic Hero */}
        <HeroSection />

        {/* Section 02: Trust / Track Record */}
        <TrackRecordSection />

        {/* Section 03: Signature Territory Map (Interactive) */}
        <TerritoryMapSection onSelectCategoryFilter={handleSelectCategory} />

        {/* Section 04: Property Categories */}
        <PropertyCategoriesSection onSelectCategory={handleSelectCategory} />

        {/* Section 05: Featured Properties */}
        <FeaturedPropertiesSection initialCategory={selectedPropertyCategory} />

        {/* Section 06: Journey / Timeline */}
        <JourneyTimelineSection />

        {/* Section 07: Property Network */}
        <PropertyNetworkSection />

        {/* Section 08: Why Sunny */}
        <WhySunnySection />

        {/* Section 09: Client Stories */}
        <ClientStoriesSection />

        {/* Section 10: Area Guide */}
        <AreaGuideSection />

        {/* Section 11: About Sunny */}
        <AboutSunnySection />

        {/* Section 12: Contact / Lead Generation */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Quick WhatsApp Consultation Button (Desktop & Tablet) */}
      <motion.aside
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 20 }}
        className="hidden sm:block fixed bottom-7 right-7 z-40 group"
      >
        {/* Floating Tooltip Pill (Positioned ABOVE the button to never block footer links) */}
        <div className="absolute bottom-full mb-2.5 right-0 px-3.5 py-1.5 rounded-xl bg-white/95 dark:bg-[#1c1c1c]/95 backdrop-blur-md border border-[#D9D6CF] dark:border-white/12 shadow-lg text-xs font-medium text-[#171717] dark:text-[#F5F3EE] opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 pointer-events-none whitespace-nowrap">
          <span className="text-[#25D366] font-semibold mr-1.5">●</span>
          Chat with Sunny Thakur
        </div>

        {/* Pulsing Breathing Outer Glow */}
        <div className="relative">
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
          
          <motion.a
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            href={`https://wa.me/916230369704?text=${encodeURIComponent(
              'Hello Sunny Thakur, I am visiting your portfolio and would like to consult with you regarding property opportunities.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Direct WhatsApp Consultation with Sunny Thakur"
            className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-[0_10px_25px_rgba(37,211,102,0.45)] transition-all cursor-pointer border-2 border-white dark:border-[#111111]"
          >
            <svg
              className="w-7 h-7 fill-current drop-shadow-sm"
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.6 4.12 3.65.58.25 1.02.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.29s-1.44-.71-1.66-.82c-.22-.12-.39-.17-.55.12-.16.28-.64.82-.78.99-.15.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45s-.55-1.33-.76-1.82c-.2-.48-.41-.41-.56-.42h-.47z" />
            </svg>
          </motion.a>
        </div>
      </motion.aside>

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar />
    </div>
    </>
  );
}

