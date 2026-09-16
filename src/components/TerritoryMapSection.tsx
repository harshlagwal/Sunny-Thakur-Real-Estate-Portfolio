import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Phone,
  MessageSquare,
  CheckCircle2,
  Clock,
  Layers,
  Compass,
  ArrowRight,
  ShieldCheck,
  Building2,
  Car,
} from 'lucide-react';
import { LOCALITY_HOTSPOTS, BRAND } from '../data/portfolioData';
import { LocalityHotspot } from '../types';
import { useTheme } from '../context/ThemeContext';

interface TerritoryMapSectionProps {
  onSelectCategoryFilter?: (category: string) => void;
}

export const TerritoryMapSection: React.FC<TerritoryMapSectionProps> = ({
  onSelectCategoryFilter,
}) => {
  const [selectedId, setSelectedId] = useState<string>('dau-majra');
  const [viewMode, setViewMode] = useState<'map' | 'blueprint'>('map');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const activeHotspot: LocalityHotspot =
    LOCALITY_HOTSPOTS.find((item) => item.id === selectedId) || LOCALITY_HOTSPOTS[0];

  const handleLocalitySelect = (id: string) => {
    setSelectedId(id);
  };

  return (
    <section
      id="territory"
      className="w-full bg-[#FAF8F5] dark:bg-[#111111] text-[#171717] dark:text-white py-24 lg:py-32 relative overflow-hidden transition-colors duration-400 border-b border-[#D9D6CF] dark:border-white/10"
    >
      {/* Background Cartographic Grid Texture */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-400 ${
          isDark
            ? 'opacity-[0.06] bg-[radial-gradient(#CBB184_1px,transparent_1px)]'
            : 'opacity-[0.10] bg-[radial-gradient(#8C8A84_1px,transparent_1px)]'
        } [background-size:32px_32px]`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#D9D6CF] dark:border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#B89A68] block">
                STRATEGIC OPERATIONAL TERRITORY
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#B89A68]/15 border border-[#B89A68]/30 text-[10px] font-semibold text-[#B89A68] dark:text-[#CBB184]">
                12+ Years Local Expertise
              </span>
            </div>

            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-white tracking-tight leading-tight">
              One High-Growth Corridor.
              <br />
              <span className="text-[#B89A68]">Deep Ground Familiarity.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#6F6D68] dark:text-white/70 max-w-2xl font-normal">
              Direct guidance across <span className="font-semibold text-[#171717] dark:text-white">Dau Majra</span>,{' '}
              <span className="font-semibold text-[#171717] dark:text-white">Sunny Enclave</span>,{' '}
              <span className="font-semibold text-[#171717] dark:text-white">Kurali</span>, and the{' '}
              <span className="font-semibold text-[#171717] dark:text-white">Airport Expressway</span>. Clear registries, verified builders, and direct developer pricing.
            </p>
          </div>

          {/* Mode Selector & Quick Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex p-1 rounded-xl bg-white dark:bg-[#1c1c1c] border border-[#D9D6CF] dark:border-white/10 shadow-xs">
              <button
                onClick={() => setViewMode('map')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'map'
                    ? 'bg-[#B89A68] text-white shadow-xs'
                    : 'text-[#6F6D68] dark:text-white/60 hover:text-[#171717] dark:hover:text-white'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Live Interactive Map</span>
              </button>
              <button
                onClick={() => setViewMode('blueprint')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  viewMode === 'blueprint'
                    ? 'bg-[#B89A68] text-white shadow-xs'
                    : 'text-[#6F6D68] dark:text-white/60 hover:text-[#171717] dark:hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Corridor Blueprint</span>
              </button>
            </div>
          </div>
        </div>

        {/* Locality Quick-Selector Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {LOCALITY_HOTSPOTS.map((hotspot) => {
            const isSelected = hotspot.id === activeHotspot.id;
            return (
              <button
                key={hotspot.id}
                onClick={() => handleLocalitySelect(hotspot.id)}
                className={`p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-white dark:bg-[#202020] border-[#B89A68] shadow-md -translate-y-0.5 ring-1 ring-[#B89A68]'
                    : 'bg-white/70 dark:bg-[#181818] border-[#D9D6CF] dark:border-white/10 hover:border-[#B89A68]/50 hover:bg-white dark:hover:bg-[#1f1f1f]'
                }`}
              >
                {isSelected && (
                  <span className="absolute top-0 right-0 w-3 h-3 bg-[#B89A68] rounded-bl-md" />
                )}
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] font-semibold text-[#B89A68] uppercase tracking-wider">
                    {hotspot.tag}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-emerald-500 animate-ping' : 'bg-[#D9D6CF] dark:bg-white/20'}`} />
                </div>
                <h4 className="font-semibold text-sm sm:text-base text-[#171717] dark:text-white">
                  {hotspot.name}
                </h4>
                <p className="text-[11px] text-[#6F6D68] dark:text-white/60 mt-0.5 line-clamp-1">
                  {hotspot.propertyTypes}
                </p>
              </button>
            );
          })}
        </div>

        {/* Main Map & Blueprint Container */}
        <div className="bg-white dark:bg-[#181818] border border-[#D9D6CF] dark:border-white/10 rounded-2xl shadow-sm overflow-hidden">
          {/* Top Bar with Live Intel Meta */}
          <div className="p-4 sm:px-6 sm:py-3.5 bg-[#FAF8F5] dark:bg-[#1f1f1f] border-b border-[#D9D6CF] dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B89A68] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B89A68]"></span>
              </span>
              <span className="text-xs font-semibold text-[#171717] dark:text-white">
                Active Viewing: {activeHotspot.name}
              </span>
              <span className="text-xs text-[#6F6D68] dark:text-white/40 hidden sm:inline">•</span>
              <span className="text-xs text-[#6F6D68] dark:text-white/60 hidden sm:inline">
                GPS: {activeHotspot.coords}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={activeHotspot.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-[#B89A68] hover:text-[#9F8252] bg-[#B89A68]/10 hover:bg-[#B89A68]/20 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Dynamic Content: Map View or Blueprint View */}
          {viewMode === 'map' ? (
            <div className="relative w-full h-[420px] sm:h-[500px] bg-[#E5E3DF] dark:bg-[#111111]">
              {/* Google Maps Live Responsive Embed */}
              <iframe
                title={`Map of ${activeHotspot.name}`}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  activeHotspot.mapQuery
                )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full border-0 grayscale-[20%] contrast-105"
                loading="lazy"
              />

              {/* Floating Live Hotspot Floating Card */}
              <div className="absolute top-4 left-4 max-w-xs sm:max-w-sm bg-white/95 dark:bg-[#161616]/95 backdrop-blur-md p-4 rounded-xl border border-[#D9D6CF] dark:border-white/15 shadow-xl hidden sm:block">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-semibold text-[#B89A68] uppercase tracking-wider">
                    {activeHotspot.badge}
                  </span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Title
                  </span>
                </div>
                <h4 className="font-semibold text-sm text-[#171717] dark:text-white">
                  {activeHotspot.name}
                </h4>
                <p className="text-xs text-[#6F6D68] dark:text-white/70 mt-1 leading-relaxed line-clamp-2">
                  {activeHotspot.description}
                </p>
                <div className="mt-2.5 pt-2 border-t border-[#D9D6CF]/60 dark:border-white/10 flex flex-wrap gap-1.5">
                  {activeHotspot.keySizes.map((size) => (
                    <span
                      key={size}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-[#171717] dark:text-white/90"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Compass Overlay */}
              <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/90 dark:bg-black/80 backdrop-blur-md border border-[#D9D6CF] dark:border-white/15 shadow-md flex items-center gap-1.5 text-xs text-[#B89A68]">
                <Compass className="w-4 h-4 animate-[spin_30s_linear_infinite]" />
                <span className="font-medium text-[11px]">TRI-CITY HUB</span>
              </div>
            </div>
          ) : (
            /* Blueprint & Infrastructure Transit View */
            <div className="p-6 sm:p-10 space-y-8 bg-gradient-to-b from-white to-[#FAF8F5] dark:from-[#181818] dark:to-[#141414]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-[#FAF8F5] dark:bg-[#202020] border border-[#D9D6CF] dark:border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#B89A68]/15 flex items-center justify-center text-[#B89A68]">
                    <Navigation className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-base text-[#171717] dark:text-white">
                    Corridor Lifeline: NH-205 &amp; Highway
                  </h4>
                  <p className="text-xs text-[#6F6D68] dark:text-white/70 leading-relaxed">
                    Direct 4-lane signal-free highway connecting Kurali and Kharar to Chandigarh and Rupnagar. Ensures rapid commute to Mohali Industrial park in 15-20 mins.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#FAF8F5] dark:bg-[#202020] border border-[#D9D6CF] dark:border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#B89A68]/15 flex items-center justify-center text-[#B89A68]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-base text-[#171717] dark:text-white">
                    Sunny Enclave Sector 125 &amp; 127
                  </h4>
                  <p className="text-xs text-[#6F6D68] dark:text-white/70 leading-relaxed">
                    The core residential powerhouse with 20,000+ settled families. Direct walk-to shopping complexes, schools, banks, and VR Punjab Mall.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#FAF8F5] dark:bg-[#202020] border border-[#D9D6CF] dark:border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#B89A68]/15 flex items-center justify-center text-[#B89A68]">
                    <Car className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-base text-[#171717] dark:text-white">
                    Dau Majra &amp; Kurali Plotted Belts
                  </h4>
                  <p className="text-xs text-[#6F6D68] dark:text-white/70 leading-relaxed">
                    The fastest-appreciating square-yard zones. High availability of 100, 120, 230, and 300 gaj approved plots with immediate registry and clear demarcation.
                  </p>
                </div>
              </div>

              {/* Transit Distance Comparison Table */}
              <div className="p-5 rounded-xl border border-[#D9D6CF] dark:border-white/10 bg-white dark:bg-[#1e1e1e] space-y-3">
                <span className="text-xs font-semibold text-[#B89A68] uppercase tracking-wider block">
                  CORRIDOR TRAVEL TIME MATRIX
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-3 rounded-lg bg-[#FAF8F5] dark:bg-black/30 border border-[#D9D6CF]/60 dark:border-white/5">
                    <span className="text-[11px] text-[#6F6D68] dark:text-white/60 block">VR Punjab Mall</span>
                    <span className="text-base font-semibold text-[#171717] dark:text-white">6 - 10 Mins</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FAF8F5] dark:bg-black/30 border border-[#D9D6CF]/60 dark:border-white/5">
                    <span className="text-[11px] text-[#6F6D68] dark:text-white/60 block">Mohali IT City</span>
                    <span className="text-base font-semibold text-[#171717] dark:text-white">15 - 18 Mins</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FAF8F5] dark:bg-black/30 border border-[#D9D6CF]/60 dark:border-white/5">
                    <span className="text-[11px] text-[#6F6D68] dark:text-white/60 block">Chandigarh Sector 17</span>
                    <span className="text-base font-semibold text-[#171717] dark:text-white">18 - 22 Mins</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FAF8F5] dark:bg-black/30 border border-[#D9D6CF]/60 dark:border-white/5">
                    <span className="text-[11px] text-[#6F6D68] dark:text-white/60 block">International Airport</span>
                    <span className="text-base font-semibold text-[#171717] dark:text-white">20 - 25 Mins</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Locality Intelligence Dossier */}
          <div className="p-6 sm:p-8 bg-[#FAF8F5] dark:bg-[#1b1b1b] border-t border-[#D9D6CF] dark:border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#B89A68] text-white text-xs font-semibold uppercase tracking-wider">
                    {activeHotspot.badge}
                  </span>
                  <span className="text-xs text-[#B89A68] dark:text-[#CBB184] font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified By Sunny Thakur
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-[#171717] dark:text-white">
                    {activeHotspot.name} — {activeHotspot.subTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6F6D68] dark:text-white/70 mt-1.5 leading-relaxed">
                    {activeHotspot.description}
                  </p>
                </div>

                {/* Available Plot / Unit Configurations */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-[#171717] dark:text-white uppercase tracking-wider block mb-2">
                    Available Configurations &amp; Sizes:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeHotspot.keySizes.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1 rounded-lg bg-white dark:bg-[#252525] border border-[#D9D6CF] dark:border-white/10 text-xs font-semibold text-[#B89A68] dark:text-[#CBB184] shadow-2xs"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>


                {/* Distance Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeHotspot.distanceHighlights.map((dist) => (
                    <div
                      key={dist.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white dark:bg-white/5 border border-[#D9D6CF]/70 dark:border-white/10 text-xs text-[#171717] dark:text-white/80"
                    >
                      <Clock className="w-3 h-3 text-[#B89A68]" />
                      <span>{dist.label}:</span>
                      <strong className="text-[#B89A68] dark:text-[#CBB184] font-semibold">{dist.time}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Direct Action Card */}
              <div className="lg:col-span-4 bg-white dark:bg-[#222222] p-6 rounded-xl border border-[#D9D6CF] dark:border-white/10 shadow-xs space-y-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B89A68] block">
                    DIRECT LOCALITY ADVISORY
                  </span>
                  <h4 className="font-semibold text-base text-[#171717] dark:text-white">
                    Consult for {activeHotspot.name}
                  </h4>
                  <p className="text-xs text-[#6F6D68] dark:text-white/60 leading-relaxed">
                    Get current square-yard registry rates, verified map layouts, and visit available site options.
                  </p>
                </div>

                <div className="space-y-2.5 pt-1">
                  <a
                    href={`https://wa.me/916230369704?text=${encodeURIComponent(
                      `Hello Sunny Thakur, I am looking for verified property / plot options in ${activeHotspot.name}. Please share available options and current rates.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BA5A] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Sunny for {activeHotspot.name.split(',')[0]}</span>
                  </a>

                  <a
                    href={`tel:${BRAND.phoneClean}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-[#171717] hover:bg-[#B89A68] dark:bg-white dark:text-[#111111] dark:hover:bg-[#B89A68] dark:hover:text-white text-white text-xs font-medium uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct Call (+91 {BRAND.phone})</span>
                  </a>

                  <button
                    onClick={() => {
                      if (onSelectCategoryFilter) {
                        const cat =
                          activeHotspot.id === 'dau-majra' || activeHotspot.id === 'kurali'
                            ? 'plots'
                            : activeHotspot.id === 'sunny-enclave'
                            ? 'kothis'
                            : 'villas';
                        onSelectCategoryFilter(cat);
                      }
                    }}
                    className="w-full py-2 px-4 rounded-xl border border-[#D9D6CF] dark:border-white/10 hover:bg-[#FAF8F5] dark:hover:bg-white/5 text-xs text-center text-[#6F6D68] dark:text-white/80 block transition-colors cursor-pointer"
                  >
                    Browse Featured Properties ({activeHotspot.name.split(',')[0]})
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
