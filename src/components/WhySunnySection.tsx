import React from 'react';
import { motion } from 'motion/react';
import { WHY_SUNNY_PILLARS } from '../data/portfolioData';

export const WhySunnySection: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-[#111111] py-24 lg:py-32 border-b border-[#D9D6CF] dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-3"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
            CLIENT CHARTER &amp; ETHOS
          </span>
          <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-[#F5F3EE] tracking-tight">
            Why Work With Sunny?
          </h2>
          <p className="text-sm sm:text-base text-[#6F6D68] dark:text-[#A8A49C] font-normal leading-relaxed">
            Property advisory built on quiet integrity, rigorous title diligence, and personal
            attention rather than generic real-estate marketplace noise.
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_SUNNY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#F5F3EE] dark:bg-[#181818] p-7 sm:p-8 rounded-2xl border border-[#D9D6CF] dark:border-white/12 hover:border-[#B89A68]/60 transition-all duration-300 flex flex-col justify-between min-h-[320px] group shadow-2xs hover:shadow-xl cursor-default"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#B89A68] tracking-wider">
                    {pillar.code}
                  </span>
                  <span className="text-xs text-[#6F6D68]/60 dark:text-[#A8A49C]/60">#{pillar.number}</span>
                </div>

                <h3 className="font-semibold text-lg text-[#171717] dark:text-[#F5F3EE] group-hover:text-[#B89A68] transition-colors tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#6F6D68] dark:text-[#A8A49C] font-normal leading-relaxed">{pillar.description}</p>
              </div>

              <div className="pt-5 border-t border-[#D9D6CF]/60 dark:border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#171717]/70 dark:text-[#F5F3EE]/70 font-medium block">
                  {pillar.footerTag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
