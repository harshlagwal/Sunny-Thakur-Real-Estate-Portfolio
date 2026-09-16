import React from 'react';
import { ShieldCheck, Building2, Landmark } from 'lucide-react';

export const PropertyNetworkSection: React.FC = () => {
  return (
    <section className="w-full bg-[#FAF8F5] dark:bg-[#181818] py-20 lg:py-28 border-b border-[#D9D6CF] dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Section context */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
              INSTITUTIONAL ALLIANCES
            </span>
            <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#171717] dark:text-[#F5F3EE] tracking-tight">
              Connected to the Right Property Network.
            </h2>
            <p className="text-sm sm:text-base text-[#6F6D68] dark:text-[#A8A49C] font-normal leading-relaxed">
              Properties and opportunities are offered in direct alliance with established regional
              property development organizations, ensuring transparent documentation and direct builder
              allotments.
            </p>
          </div>

          {/* Network Placards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* EvaraHomes Placard */}
            <div className="bg-white dark:bg-[#202020] p-7 sm:p-8 rounded-2xl border border-[#D9D6CF] dark:border-white/12 shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#F5F3EE] dark:bg-[#282828] flex items-center justify-center text-[#B89A68] group-hover:bg-[#B89A68] group-hover:text-white transition-colors">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#6F6D68] dark:text-[#A8A49C] font-medium">
                    ALLIED NETWORK
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-[#171717] dark:text-[#F5F3EE]">
                  EvaraHomes
                </h3>
                <span className="text-xs font-medium text-[#B89A68] uppercase tracking-wider block mt-1">
                  Residential Developer Network
                </span>

                <p className="text-xs text-[#6F6D68] dark:text-[#A8A49C] font-normal leading-relaxed mt-3">
                  Strategic residential enclaves, quality structural oversight, and curated family
                  villas and kothis across the Kharar corridor.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#D9D6CF]/60 dark:border-white/10 flex items-center justify-between text-xs text-[#171717] dark:text-[#F5F3EE] font-normal">
                <span className="flex items-center gap-1.5 text-[#B89A68] font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  Vetted Inventory
                </span>
                <span className="text-xs text-[#6F6D68] dark:text-[#A8A49C]">Punjab Region</span>
              </div>
            </div>

            {/* SRV Real Estate Placard */}
            <div className="bg-white dark:bg-[#202020] p-7 sm:p-8 rounded-2xl border border-[#D9D6CF] dark:border-white/12 shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#F5F3EE] dark:bg-[#282828] flex items-center justify-center text-[#B89A68] group-hover:bg-[#B89A68] group-hover:text-white transition-colors">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-[#6F6D68] dark:text-[#A8A49C] font-medium">
                    ALLIED NETWORK
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-[#171717] dark:text-[#F5F3EE]">
                  SRV Real Estate
                </h3>
                <span className="text-xs font-medium text-[#B89A68] uppercase tracking-wider block mt-1">
                  Land &amp; Strategic Assets Network
                </span>

                <p className="text-xs text-[#6F6D68] dark:text-[#A8A49C] font-normal leading-relaxed mt-3">
                  Acreage development, expressway-connected masterplans, and high-growth plotted
                  opportunities spanning Kurali and Chandigarh borders.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#D9D6CF]/60 dark:border-white/10 flex items-center justify-between text-xs text-[#171717] dark:text-[#F5F3EE] font-normal">
                <span className="flex items-center gap-1.5 text-[#B89A68] font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  Freehold Clear Titles
                </span>
                <span className="text-xs text-[#6F6D68] dark:text-[#A8A49C]">Direct Partnership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
