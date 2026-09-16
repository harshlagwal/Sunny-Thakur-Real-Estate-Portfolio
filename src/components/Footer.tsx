import React from 'react';
import { BRAND } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#111111] dark:bg-[#0c0c0c] text-white border-t border-[#D9D6CF]/20 dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-28 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="font-semibold text-lg tracking-tight uppercase text-white">
                  SUNNY THAKUR
                </span>
              </div>

              <p className="font-editorial text-2xl italic font-normal text-[#CBB184]">
                “Find Your Place. Build Your Future.”
              </p>

              <p className="text-xs text-white/60 font-normal leading-relaxed max-w-sm">
                A personal brand &amp; real-estate portfolio establishing trusted property advisory
                across Kurali, Kharar, and Chandigarh periphery since 2014.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-1.5">
              <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#B89A68] block">
                CORE OPERATING REGION
              </span>
              <p className="text-base font-normal text-white/90 tracking-wide">
                Kurali <span className="text-[#B89A68]">•</span> Kharar{' '}
                <span className="text-[#B89A68]">•</span> Chandigarh
              </p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block border-b border-white/10 pb-2">
              QUICK NAVIGATION
            </span>
            <nav className="flex flex-col space-y-2 text-xs text-white/70 font-normal">
              <a href="#properties" className="hover:text-white transition-colors py-1">
                Properties Showcase
              </a>
              <a href="#territory" className="hover:text-white transition-colors py-1">
                Territory Map
              </a>
              <a href="#categories" className="hover:text-white transition-colors py-1">
                Property Categories
              </a>
              <a href="#journey" className="hover:text-white transition-colors py-1">
                Advisory Journey
              </a>
              <a href="#about" className="hover:text-white transition-colors py-1">
                About Sunny
              </a>
              <a href="#contact" className="hover:text-white transition-colors py-1">
                Contact &amp; Inquiries
              </a>
            </nav>
          </div>

          {/* Contact and Alliances Column */}
          <div className="md:col-span-4 space-y-6">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block border-b border-white/10 pb-2">
              DIRECT ACCESS
            </span>

            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[10px] text-white/50 uppercase tracking-wider block">
                  Direct Telephone
                </span>
                <a
                  href={`tel:${BRAND.phoneClean}`}
                  className="text-sm font-medium text-white hover:text-[#CBB184] transition-colors mt-0.5 inline-block"
                >
                  +91 {BRAND.phone}
                </a>
              </div>

              <div>
                <span className="text-[10px] text-white/50 uppercase tracking-wider block">
                  Electronic Dispatch
                </span>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-white/90 hover:text-[#CBB184] transition-colors break-all mt-0.5 inline-block font-normal"
                >
                  {BRAND.email}
                </a>
              </div>

              <div className="pt-4 border-t border-white/10">
                <span className="text-[10px] text-white/50 uppercase tracking-wider block mb-1.5">
                  Associated Organizations
                </span>
                <div className="flex flex-wrap items-center gap-2 text-white/90">
                  <span className="px-2.5 py-1 rounded-md bg-white/10 text-white text-xs font-normal">
                    EvaraHomes
                  </span>
                  <span className="text-[#B89A68]">•</span>
                  <span className="px-2.5 py-1 rounded-md bg-white/10 text-white text-xs font-normal">
                    SRV Real Estate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal Line */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45 sm:pr-24">
          <p>© 2026 Sunny Thakur. All rights reserved. Real Estate Consultant.</p>
          <div className="flex items-center gap-6">
            <span>Kurali • Kharar • Chandigarh</span>
            <span>•</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#B89A68] hover:text-white transition-colors cursor-pointer font-medium py-1 px-2 rounded-lg hover:bg-white/5"
            >
              Back to top ↑
            </button>
          </div>
        </div>

        {/* Built By Watermark */}
        <div className="mt-6 text-center">
          <p className="text-[11px] text-white/30 tracking-wider font-medium">
            Built By{' '}
            <span className="text-[#B89A68]/60 hover:text-[#B89A68] transition-colors">
              Harsh Lagwal
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
