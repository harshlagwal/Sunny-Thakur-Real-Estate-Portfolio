import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/portfolioData';

interface PropertyCategoriesSectionProps {
  onSelectCategory?: (category: string) => void;
}

export const PropertyCategoriesSection: React.FC<PropertyCategoriesSectionProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="categories" className="w-full bg-[#FAF8F5] dark:bg-[#181818] py-24 lg:py-32 border-b border-[#D9D6CF] dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Editorial Header with breathing room */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-3"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
            RESIDENTIAL TYPOLOGIES
          </span>
          <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-[#F5F3EE] tracking-tight">
            Find What Fits Your Future.
          </h2>
          <p className="text-sm sm:text-base text-[#6F6D68] dark:text-[#A8A49C] font-normal leading-relaxed">
            Four distinct asset classes tailored to your family's lifestyle horizon and capital
            strategy across the Kurali, Kharar, and Chandigarh corridors.
          </p>
        </motion.div>

        {/* Asymmetrical Editorial Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {CATEGORIES.map((cat, idx) => {
            const colSpan = idx === 0 || idx === 3 ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`${colSpan} group relative bg-[#111111] rounded-2xl overflow-hidden flex flex-col justify-between p-8 sm:p-10 min-h-[440px] shadow-sm hover:shadow-2xl transition-all duration-500 border border-black/5 dark:border-white/10`}
              >
                {/* Background Image with Hover Scale */}
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                  style={{ backgroundImage: `url('${cat.imageUrl}')` }}
                  role="img"
                  aria-label={`${cat.name} architectural representation`}
                />

                {/* Editorial Architectural Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/95 via-[#111111]/45 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/75 via-transparent to-transparent" />

                {/* Top Badge & Number */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="text-xs px-3 py-1 rounded-lg bg-white/90 dark:bg-white/95 text-[#111111] font-medium tracking-wide shadow-xs">
                    {cat.number} / {cat.name.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#B89A68] text-white text-[11px] font-medium tracking-wider uppercase shadow-xs">
                    {cat.badge}
                  </span>
                </div>

                {/* Bottom Content Dossier */}
                <div className="relative z-10 space-y-2.5 pt-16">
                  <h3 className="font-semibold text-2xl sm:text-3xl text-white tracking-tight">
                    {cat.name}
                  </h3>

                  <p className="font-editorial text-lg sm:text-xl italic font-normal text-[#CBB184] leading-snug">
                    “{cat.tagline}”
                  </p>

                  <p className="text-xs sm:text-sm text-white/75 font-normal max-w-lg leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {cat.description}
                  </p>

                  <div className="pt-3">
                    <a
                      href="#properties"
                      onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                      className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-white/90 group-hover:text-[#CBB184] transition-colors cursor-pointer"
                    >
                      <span>Explore {cat.name} Opportunities</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
