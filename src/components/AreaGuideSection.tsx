import React from 'react';
import { AREA_GUIDES } from '../data/portfolioData';

export const AreaGuideSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F3EE] dark:bg-[#111111] py-24 lg:py-32 border-b border-[#D9D6CF] dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
            LOCALITY DOSSIER
          </span>
          <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-[#F5F3EE] tracking-tight">
            Know the Territory.
          </h2>
          <p className="text-sm sm:text-base text-[#6F6D68] dark:text-[#A8A49C] font-normal leading-relaxed">
            Strategic infrastructure, commute dynamics, and lifestyle character broken down by
            micro-market across the tri-city corridor.
          </p>
        </div>

        {/* 3 Locality Dossier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {AREA_GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="bg-white dark:bg-[#181818] p-7 sm:p-8 rounded-2xl border border-[#D9D6CF] dark:border-white/12 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-[#F5F3EE] dark:bg-[#222222] text-[#171717] dark:text-[#F5F3EE] font-medium uppercase tracking-wider">
                    {guide.zone}
                  </span>
                  <span className="text-xs font-medium text-[#B89A68] uppercase tracking-wider">
                    {guide.badge}
                  </span>
                </div>

                <h3 className="font-semibold text-xl text-[#171717] dark:text-[#F5F3EE] group-hover:text-[#B89A68] transition-colors">
                  {guide.name}
                </h3>

                <p className="font-editorial text-lg italic font-normal text-[#B89A68]">
                  “{guide.tagline}”
                </p>

                <p className="text-xs text-[#6F6D68] dark:text-[#A8A49C] font-normal leading-relaxed">{guide.description}</p>
              </div>

              {/* Data attributes table */}
              <div className="pt-5 border-t border-[#D9D6CF]/60 dark:border-white/10 space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#6F6D68] dark:text-[#A8A49C] font-normal">PRIMARY FOCUS</span>
                  <span className="text-[#171717] dark:text-[#F5F3EE] font-medium">{guide.primaryTypologies}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6F6D68] dark:text-[#A8A49C] font-normal">COMMUTE &amp; TRANSIT</span>
                  <span className="text-[#171717] dark:text-[#F5F3EE] font-medium">{guide.transitInfo}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#6F6D68] dark:text-[#A8A49C] font-normal">TRAJECTORY</span>
                  <span className="text-[#B89A68] font-medium">{guide.appreciationTrend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
