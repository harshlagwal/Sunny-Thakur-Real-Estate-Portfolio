import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageSquare,
  Building2,
  Home,
  Layers,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Star,
  Sparkles,
} from 'lucide-react';
import { BRAND, CATEGORIES } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import sunnyPoseImg from '../assets/Sunny pose.png';

interface HeroSlide {
  id: string;
  tag: string;
  title: string;
  location: string;
  dealHighlight: string;
  sizeTag: string;
  imageUrl: string;
  icon: React.ElementType;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-villa',
    tag: 'LUXURY VILLA',
    title: 'Modern Architectural Duplex Villa',
    location: 'Sunny Enclave, Kharar',
    dealHighlight: 'Delivered to Harpreet Singh',
    sizeTag: '180 Gaj Independent Villa',
    imageUrl: BRAND.images.hero,
    icon: Home,
  },
  {
    id: 'slide-plots',
    tag: 'FREEHOLD PLOTS',
    title: 'Demarcated Residential Plotted Land',
    location: 'Dau Majra & Kurali Corridor',
    dealHighlight: 'Delivered to Anu Bala & Sunil Kumar',
    sizeTag: '100 • 120 • 230 • 300 Gaj Plots',
    imageUrl:
      CATEGORIES.find((c) => c.id === 'plots')?.imageUrl ||
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD1NKHjIrpd7vIAcnH4gBpGqpmhm_Ts6p3Pe1AFslZDYi5NB6M9gjX8yMxlgZKL7NZaCyFfBxY4pcmJqwwXfTwwoqfS3vtYM8YEiLAdEdubGlhhTkgBLjiRGklCxseoTyw1DE3O3v2X3lf2j-4RyHg10yPejS3d7DHItVdMQjsZuTTphg3wEO_tyj6ujk0-JQs-2o-nh8opyhvSmDnaJ3s5SikVvVUp8f4EkeLiqHpb9CQZD8yaWgce',
    icon: Layers,
  },
  {
    id: 'slide-kothi',
    tag: '2-MANZIL KOTHI',
    title: 'Independent Double-Story Residence',
    location: 'Kurali Main Sector',
    dealHighlight: 'Delivered to Dinesh Thakur (122 Gaj)',
    sizeTag: '122 & 130 Gaj 2-Story Kothis',
    imageUrl:
      CATEGORIES.find((c) => c.id === 'kothis')?.imageUrl ||
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA83k4LEYNC4cahTQU-XKOMSSPzTZdpGz1ufaZ4TIAqjxXWPKK3E6w6DeEVE3E9S2wRvoy6ts_i2TdgZUGGHsMEF7Z7ibJyLegDFvBQAYyAEU-zuNqZgI__M4EY93LyDLBJzftFZ75M6nEQG5vTtnKrXy7JFFGXGiaDydPuwVcZZ1ANwrDRBrCQqwG7cNE53FOFhQVYxqR6RhIBw36DovPHjAmkbJgvOOXudZm8jcTKjst-wOyWsp1q',
    icon: Building2,
  },
  {
    id: 'slide-flats',
    tag: 'CONNECTED FLATS',
    title: 'Modern High-Rise Sky Suites',
    location: 'Airport Road & Chandigarh Periphery',
    dealHighlight: 'Delivered to M. Dhillon (3+1 BHK)',
    sizeTag: '3 & 4 BHK Luxury Apartments',
    imageUrl:
      CATEGORIES.find((c) => c.id === 'flats')?.imageUrl ||
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCnHlDpDgDoTNvWBd-CBa1XVkoAWNvwCgr4gvPCGJRI72M-mUdW4etOO-VUazhALOrPuIPLe7TfOT2n-GwGMbsdsGUABZgl0X0e98peXoCIqR1XlhoALJfK9VQwryZu9MBcd3l3lU76GI1eLLFUT0_tleofOMNyviGdg9kOLO8ilrgnaqfDjAAs_kjRgvX_gpGVQ7E3lEf_-E3GmtDTtWdrOHo2pRNpNjf2gnjYt10iG5iNTJfxxvpz',
    icon: Building2,
  },
];

export const HeroSection: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Continuous auto-slide every 4 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const currentSlide = HERO_SLIDES[currentSlideIndex];
  const IconComponent = currentSlide.icon;

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#FAF8F5] dark:bg-[#111111] text-[#171717] dark:text-white transition-colors duration-400 border-b border-[#D9D6CF] dark:border-white/10 pt-24 pb-16 lg:pt-28 lg:pb-24"
    >
      {/* Background Cartographic Grid Texture */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-400 ${
          isDark
            ? 'opacity-[0.07] bg-[radial-gradient(#CBB184_1px,transparent_1px)]'
            : 'opacity-[0.12] bg-[radial-gradient(#8C8A84_1px,transparent_1px)]'
        } [background-size:32px_32px]`}
      />

      {/* Subtle Warm Ambient Glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#B89A68]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#B89A68]/8 blur-3xl pointer-events-none" />

      {/* Main Split Hero Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE: Hero Pitch & Credentials (100% Crisp & Readable) */}
          <div className="lg:col-span-6 space-y-7">
            {/* Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#1d1d1d] border border-[#D9D6CF] dark:border-white/12 shadow-2xs"
            >
              <span className="w-2 h-2 rounded-full bg-[#B89A68] animate-pulse" />
              <span className="text-[11px] font-semibold text-[#B89A68] dark:text-[#CBB184] uppercase tracking-[0.14em]">
                REAL ESTATE CONSULTANT
              </span>
              <span className="text-[#6F6D68] dark:text-white/30 text-xs">•</span>
              <span className="text-[11px] font-medium text-[#171717] dark:text-white/80 uppercase tracking-[0.12em]">
                Kurali • Kharar • Chandigarh
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171717] dark:text-white leading-[1.12]">
                Find Your Place.
                <br />
                <span className="font-editorial italic font-normal text-[#B89A68] dark:text-[#CBB184]">
                  Build Your Future.
                </span>
              </h1>
              <p className="text-sm sm:text-base text-[#6F6D68] dark:text-white/70 font-normal leading-relaxed pt-2 max-w-xl">
                Direct, transparent real estate advisory helping families and investors secure verified
                freehold plots, designer kothis, and luxury villas across Kharar and Kurali.
              </p>
            </motion.div>

            {/* Supporting Proof & Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1"
            >
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#1a1a1a] border border-[#D9D6CF] dark:border-white/10 shadow-2xs">
                <span className="text-base sm:text-lg font-bold text-[#171717] dark:text-white block">
                  12+ Years
                </span>
                <span className="text-[11px] text-[#6F6D68] dark:text-white/60">
                  Experience (Since 2014)
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#1a1a1a] border border-[#D9D6CF] dark:border-white/10 shadow-2xs">
                <span className="text-base sm:text-lg font-bold text-[#B89A68] dark:text-[#CBB184] block">
                  200+ Deals
                </span>
                <span className="text-[11px] text-[#6F6D68] dark:text-white/60">
                  Closed Transactions
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-white dark:bg-[#1a1a1a] border border-[#D9D6CF] dark:border-white/10 shadow-2xs col-span-2 sm:col-span-1">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                  ))}
                </div>
                <span className="text-[11px] text-[#6F6D68] dark:text-white/60 mt-1 block">
                  100% 5-Star Reviews
                </span>
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#properties"
                className="px-7 py-3.5 rounded-xl bg-[#171717] text-white hover:bg-[#B89A68] dark:bg-white dark:text-[#111111] dark:hover:bg-[#B89A68] dark:hover:text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-2.5 shadow-sm group cursor-pointer"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={`https://wa.me/916230369704?text=${encodeURIComponent(
                  'Hello Sunny Thakur, I would like to schedule a property consultation with you.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Talk to Sunny</span>
              </a>
            </motion.div>

            {/* Micro proof line */}
            <div className="flex items-center gap-2 text-xs text-[#6F6D68] dark:text-white/50 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#B89A68]" />
              <span>Associated with EvaraHomes &amp; SRV Real Estate</span>
            </div>
          </div>

          {/* RIGHT SIDE: Dedicated Visual Wall Card with Auto-sliding Media & Data */}
          <div className="lg:col-span-6 relative">
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="space-y-3 relative z-10"
            >
              {/* The Master Visual Wall Card */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-[#D9D6CF] dark:border-white/15 shadow-2xl bg-[#111111] group">
                {/* Pre-rendered Image Layers with Smooth Opacity Crossfade */}
                {HERO_SLIDES.map((slide, index) => {
                  const isActive = index === currentSlideIndex;
                  return (
                    <motion.div
                      key={slide.id}
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1.0 : 1.05,
                      }}
                      transition={{
                        opacity: { duration: 0.9, ease: 'easeInOut' },
                        scale: { duration: 5.0, ease: 'easeOut' },
                      }}
                      className="absolute inset-0 w-full h-full bg-cover bg-center pointer-events-none"
                      style={{
                        backgroundImage: `url('${slide.imageUrl}')`,
                        zIndex: isActive ? 2 : 1,
                      }}
                      role="img"
                      aria-label={slide.title}
                    />
                  );
                })}

                {/* Vignette Gradients for Text Contrast */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/35 to-black/20 pointer-events-none" />

                {/* Top Overlay: Typology Badge & Verified Proof */}
                <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-white/90 dark:bg-black/80 backdrop-blur-md border border-white/20 text-[#171717] dark:text-white uppercase tracking-wider shadow-md">
                    <IconComponent className="w-3.5 h-3.5 text-[#B89A68]" />
                    <span>{currentSlide.tag}</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/90 text-white shadow-md backdrop-blur-md">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Registry</span>
                  </span>
                </div>

                {/* Bottom Overlay: Real Property Title & Client Delivery Badge (Optimized Width for Sunny cutout pairing) */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-[68%] lg:max-w-[64%] xl:max-w-[60%] z-20 space-y-2.5">
                  <div className="p-3.5 sm:p-4 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/15 text-white shadow-xl space-y-2">
                    <div>
                      <h3 className="font-bold text-sm sm:text-base lg:text-lg text-white leading-tight">
                        {currentSlide.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-white/80 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[#CBB184] shrink-0" />
                        <span>{currentSlide.location}</span>
                      </div>
                    </div>

                    {/* Client Delivery Proof & Size */}
                    <div className="pt-2 border-t border-white/15 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="text-[10px] text-[#CBB184] uppercase tracking-wider block font-semibold">
                          Delivered Client Deal
                        </span>
                        <span className="font-semibold text-white/95">
                          {currentSlide.dealHighlight}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-white/60 uppercase tracking-wider block font-medium">
                          Configuration
                        </span>
                        <span className="font-bold text-[#F5EAD4]">
                          {currentSlide.sizeTag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Controls & Counter Under the Wall Card */}
              <div className="flex items-center justify-between px-2 pt-1 relative z-40">
                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlideIndex === idx
                          ? 'w-7 bg-[#B89A68]'
                          : 'w-2 bg-[#D9D6CF] dark:bg-white/20 hover:bg-[#B89A68]/50'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Slide Counter & Arrow Buttons */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#6F6D68] dark:text-white/60 pr-1">
                    0{currentSlideIndex + 1} / 0{HERO_SLIDES.length}
                  </span>

                  <button
                    onClick={handlePrevSlide}
                    className="p-1.5 rounded-full bg-white dark:bg-[#1e1e1e] border border-[#D9D6CF] dark:border-white/10 hover:border-[#B89A68] text-[#171717] dark:text-white shadow-2xs transition-colors cursor-pointer"
                    aria-label="Previous property"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleNextSlide}
                    className="p-1.5 rounded-full bg-white dark:bg-[#1e1e1e] border border-[#D9D6CF] dark:border-white/10 hover:border-[#B89A68] text-[#171717] dark:text-white shadow-2xs transition-colors cursor-pointer"
                    aria-label="Next property"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Sunny Thakur Transparent Cutout Foreground Character */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{
                opacity: 1,
                y: [0, -6, 0],
              }}
              transition={{
                opacity: { duration: 0.8, ease: 'easeOut' },
                y: {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8,
                },
              }}
              className="absolute -bottom-3 -right-2 sm:-bottom-5 sm:-right-4 lg:-bottom-6 lg:-right-6 xl:-bottom-7 xl:-right-8 z-30 pointer-events-none select-none flex items-end justify-end h-[230px] xs:h-[270px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[540px] max-w-[46%] sm:max-w-[40%] lg:max-w-[42%]"
            >
              <img
                src={sunnyPoseImg}
                alt="Sunny Thakur — Real Estate Consultant"
                className="h-full w-auto object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.22)] dark:drop-shadow-[0_18px_36px_rgba(0,0,0,0.65)]"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#track-record"
        aria-label="Scroll to explore"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#6F6D68] dark:text-white/40 hover:text-[#B89A68] dark:hover:text-white transition-colors cursor-pointer"
      >
        <span className="text-[10px] uppercase font-semibold tracking-[0.16em]">
          Scroll to explore
        </span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#B89A68]" />
      </a>
    </section>
  );
};
