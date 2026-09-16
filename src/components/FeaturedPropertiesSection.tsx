import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { FEATURED_PROPERTIES } from '../data/portfolioData';
import { PropertyItem } from '../types';
import { PropertyDetailModal } from './PropertyDetailModal';

interface FeaturedPropertiesSectionProps {
  initialCategory?: string;
  onOpenContact?: () => void;
}

export const FeaturedPropertiesSection: React.FC<FeaturedPropertiesSectionProps> = ({
  initialCategory = 'all',
  onOpenContact,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(initialCategory);
  const [activePropertyModal, setActivePropertyModal] = useState<PropertyItem | null>(null);

  const filteredProperties =
    selectedFilter === 'all'
      ? FEATURED_PROPERTIES
      : FEATURED_PROPERTIES.filter((p) => p.category === selectedFilter);

  const filterTabs: { label: string; value: string }[] = [
    { label: 'ALL', value: 'all' },
    { label: 'PLOTS', value: 'plots' },
    { label: 'KOTHIS', value: 'kothis' },
    { label: 'FLATS', value: 'flats' },
    { label: 'VILLAS', value: 'villas' },
  ];

  return (
    <section
      id="properties"
      className="w-full bg-[#F5F3EE] dark:bg-[#111111] py-24 lg:py-32 border-b border-[#D9D6CF] dark:border-white/10 transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header & Minimal Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#D9D6CF] dark:border-white/10"
        >
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
              CURATED PROPERTY SHOWCASE
            </span>
            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-[#F5F3EE] tracking-tight">
              Property Opportunities.
            </h2>
            <p className="text-sm sm:text-base text-[#6F6D68] dark:text-[#A8A49C] font-normal leading-relaxed">
              Explore selected properties across Kurali, Kharar and Chandigarh.
            </p>
          </div>

          {/* Elegant Category Filters */}
          <div
            className="flex items-center gap-1.5 flex-wrap bg-white dark:bg-[#181818] p-1.5 rounded-xl border border-[#D9D6CF] dark:border-white/12 shadow-2xs"
            id="property-category-filters"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedFilter(tab.value)}
                className={`px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer rounded-lg ${
                  selectedFilter === tab.value
                    ? 'bg-[#171717] text-white dark:bg-[#F5F3EE] dark:text-[#111111] shadow-2xs'
                    : 'text-[#6F6D68] dark:text-[#A8A49C] hover:text-[#171717] dark:hover:text-[#F5F3EE] hover:bg-[#F5F3EE] dark:hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Editorial Luxury Real Estate Composition (Asymmetrical Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8" id="property-opportunities-grid">
          {filteredProperties.map((property, idx) => {
            const colSpan = property.aspectClass || (idx % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5');
            const minHeight = idx % 2 === 0 ? 'min-h-[460px]' : 'min-h-[420px]';

            return (
              <motion.article
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className={`${colSpan} group relative bg-[#111111] rounded-2xl border border-[#D9D6CF] dark:border-white/12 overflow-hidden flex flex-col justify-between ${minHeight} shadow-sm hover:shadow-2xl transition-all duration-500`}
              >
                {/* Dominant Architectural Photography with Subtle Zoom */}
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-108"
                  style={{ backgroundImage: `url('${property.imageUrl}')` }}
                  role="img"
                  aria-label={`${property.categoryLabel} in ${property.location}`}
                />

                {/* Editorial Tone Gradients & Subtle Dark Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/45 to-[#111111]/15 group-hover:from-[#111111]/95 group-hover:via-[#111111]/60 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/60 via-transparent to-transparent pointer-events-none" />

                {/* Card Top: Property Type & Location Pill */}
                <div className="relative z-10 p-6 sm:p-8 flex items-start justify-between">
                  <span className="text-xs font-medium px-3 py-1 rounded-lg bg-[#F5F3EE] dark:bg-[#181818] text-[#171717] dark:text-[#F5F3EE] border border-black/5 dark:border-white/10 uppercase tracking-wider shadow-2xs">
                    {property.categoryLabel}
                  </span>
                  <span className="text-xs font-normal text-white/90 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 uppercase tracking-wider">
                    {property.location}
                  </span>
                </div>

                {/* Card Bottom: Basic Info, Short Description, Enquiry CTA */}
                <div className="relative z-10 p-6 sm:p-8 space-y-3.5 pt-12">
                  <div className="space-y-1.5">
                    <div className="text-xs text-[#CBB184] uppercase tracking-wider font-medium">
                      {property.basicInfo}
                    </div>

                    <p className="font-editorial text-xl sm:text-2xl italic font-normal text-white leading-snug">
                      “{property.shortDescription}”
                    </p>
                  </div>

                  {/* Primary Conversion CTA */}
                  <div className="pt-2 border-t border-white/15">
                    <button
                      onClick={() => setActivePropertyModal(property)}
                      className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#CBB184] group-hover:text-white transition-colors cursor-pointer py-1"
                    >
                      <span>Enquire About Property</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B89A68] group-hover:text-white transition-transform group-hover:translate-x-1.5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Refined Bottom Consultation CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-[#181818] border border-[#D9D6CF] dark:border-white/12 rounded-2xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors duration-400"
        >
          <div className="space-y-2 max-w-xl">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
              BESPOKE PROPERTY SEARCH
            </span>
            <h3 className="font-semibold text-2xl sm:text-3xl text-[#171717] dark:text-[#F5F3EE] tracking-tight">
              Looking for something specific?
            </h3>
            <p className="text-sm text-[#6F6D68] dark:text-[#A8A49C] font-normal leading-relaxed">
              Tell Sunny what you’re looking for and explore suitable property opportunities across
              Kurali, Kharar, and Chandigarh.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#contact"
              onClick={onOpenContact}
              className="px-6 py-3.5 rounded-xl bg-[#171717] text-white hover:bg-[#B89A68] dark:bg-[#F5F3EE] dark:text-[#111111] dark:hover:bg-[#CBB184] text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2 group shadow-2xs cursor-pointer"
            >
              <span>Talk to Sunny</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`https://wa.me/916230369704?text=${encodeURIComponent(
                'Hello Sunny Thakur, I am looking for a specific property opportunity in Kurali / Kharar / Chandigarh. Could we connect?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-[#F5F3EE] dark:bg-[#202020] hover:bg-[#FAF8F5] dark:hover:bg-[#252525] border border-[#D9D6CF] dark:border-white/12 text-[#171717] dark:text-[#F5F3EE] text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#B89A68]" />
              <span>WhatsApp Requirement</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Property Enquiry Modal */}
      <PropertyDetailModal
        property={activePropertyModal}
        onClose={() => setActivePropertyModal(null)}
      />
    </section>
  );
};
