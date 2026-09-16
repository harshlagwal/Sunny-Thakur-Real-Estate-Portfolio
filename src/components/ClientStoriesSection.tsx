import React, { useState } from 'react';
import { Quote, Star, CheckCircle2, MapPin, Pause, Play } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const ClientStoriesSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials list for smooth infinite seamless looping
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="stories" className="w-full bg-[#FAF8F5] dark:bg-[#181818] py-24 lg:py-32 border-b border-[#D9D6CF] dark:border-white/10 transition-colors duration-400 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#D9D6CF] dark:border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#B89A68] block">
                AUTHENTIC CLIENT EXPERIENCES &amp; REVIEWS
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-semibold">
                <CheckCircle2 className="w-3 h-3" />
                100% Verified Deals
              </span>
            </div>

            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-[#F5F3EE] tracking-tight">
              Real Clients.
              <br />
              Delivered Properties.
              <br />
              <span className="text-[#B89A68]">5-Star Trust.</span>
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            {/* 5-Star Aggregate Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#202020] border border-[#D9D6CF] dark:border-white/10 shadow-xs">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-sm font-semibold text-[#171717] dark:text-[#F5F3EE]">5.0 / 5.0</span>
              <span className="text-xs text-[#6F6D68] dark:text-[#A8A49C]">• Kharar &amp; Kurali</span>
            </div>

            {/* Animation state indicator & toggle */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-[#6F6D68] dark:text-[#A8A49C] hover:text-[#171717] dark:hover:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
              title={isPaused ? 'Resume auto-scroll' : 'Pause auto-scroll'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-[#B89A68]" />
                  <span>Resume Animation</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#B89A68]" />
                  <span>Pause Motion (or hover card)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Animated Carousel Track */}
      <div className="relative w-full mt-10">
        {/* Soft edge fades for seamless appearance */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF8F5] dark:from-[#181818] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF8F5] dark:from-[#181818] to-transparent z-10" />

        {/* Scrolling items wrapper */}
        <div
          className="animate-marquee-infinite py-4 px-2"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[340px] sm:w-[420px] shrink-0 mx-3 sm:mx-4 bg-white dark:bg-[#202020] p-6 sm:p-7 rounded-2xl border border-[#D9D6CF] dark:border-white/12 shadow-xs hover:shadow-xl hover:border-[#B89A68]/50 dark:hover:border-[#B89A68]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Meta: Stars, Rating and Deal Tag */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  {/* 5 Golden Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating || 5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className="w-4 h-4 fill-amber-500 text-amber-500 transition-transform group-hover:scale-110"
                      />
                    ))}
                    <span className="text-xs font-semibold text-[#171717] dark:text-[#F5F3EE] ml-1.5">
                      5.0
                    </span>
                  </div>

                  {/* Deal Detail Badge */}
                  {item.dealDetail && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#B89A68]/15 text-[#B89A68] dark:text-[#CBB184] border border-[#B89A68]/30">
                      {item.dealDetail}
                    </span>
                  )}
                </div>

                {/* Quote Text */}
                <div className="relative pt-1">
                  <Quote className="w-5 h-5 text-[#B89A68]/30 absolute -top-1 -left-1" />
                  <p className="font-editorial text-base sm:text-lg text-[#171717] dark:text-[#F5F3EE] italic font-normal leading-relaxed pl-5">
                    “{item.quote}”
                  </p>
                </div>
              </div>

              {/* Bottom Client Info */}
              <div className="pt-5 mt-5 border-t border-[#D9D6CF]/60 dark:border-white/10 flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-semibold text-sm sm:text-base text-[#171717] dark:text-[#F5F3EE]">
                      {item.clientName}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89A68]" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#6F6D68] dark:text-[#A8A49C] font-normal">
                    <MapPin className="w-3 h-3 text-[#B89A68] shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[10px] font-medium tracking-wider text-[#B89A68] uppercase">
                    {item.propertyType}
                  </span>
                  <div className="text-[10px] text-[#6F6D68] dark:text-[#A8A49C] mt-1">
                    {item.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Helpful caption */}
      <div className="text-center mt-6">
        <p className="text-xs text-[#6F6D68] dark:text-[#A8A49C]">
          ← Auto-scrolling reviews. Hover over any card to pause and read →
        </p>
      </div>
    </section>
  );
};
