import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TIMELINE } from '../data/portfolioData';
import { CheckCircle2, Milestone } from 'lucide-react';

export const JourneyTimelineSection: React.FC = () => {
  const [activeMilestone, setActiveMilestone] = useState<number>(TIMELINE.length - 1);

  return (
    <section id="journey" className="w-full bg-white dark:bg-[#111111] py-24 lg:py-32 border-b border-[#D9D6CF] dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl space-y-3"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
            CAREER PROVENANCE
          </span>
          <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-[#F5F3EE] tracking-tight">
            Started in 2014.
            <br />
            Still Moving Forward.
          </h2>
          <p className="font-editorial text-xl sm:text-2xl italic font-normal text-[#6F6D68] dark:text-[#A8A49C]">
            12+ years of real-estate experience rooted in direct accountability and client trust.
          </p>
        </motion.div>

        {/* Territory Corridor Progression Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="p-4 sm:p-5 rounded-2xl bg-[#F5F3EE] dark:bg-[#181818] border border-[#D9D6CF] dark:border-white/12 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors"
        >
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#171717] dark:text-[#F5F3EE]">
            <Milestone className="w-4 h-4 text-[#B89A68]" />
            <span>OPERATIONAL PROGRESSION CORRIDOR:</span>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-medium text-[#171717] dark:text-[#F5F3EE] flex-wrap">
            <span className="px-3 py-1 rounded-xl bg-white dark:bg-[#202020] border border-[#D9D6CF] dark:border-white/12">KURALI</span>
            <span className="text-[#B89A68]">→</span>
            <span className="px-3 py-1 rounded-xl bg-[#171717] text-white dark:bg-[#F5F3EE] dark:text-[#111111]">KHARAR (HUB)</span>
            <span className="text-[#B89A68]">→</span>
            <span className="px-3 py-1 rounded-xl bg-white dark:bg-[#202020] border border-[#D9D6CF] dark:border-white/12">CHANDIGARH</span>
          </div>
        </motion.div>

        {/* Horizontal Tectonic Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {TIMELINE.map((step, idx) => {
            const isSelected = activeMilestone === idx;

            return (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onClick={() => setActiveMilestone(idx)}
                className={`p-6 sm:p-7 rounded-2xl flex flex-col justify-between min-h-[300px] border transition-all duration-300 cursor-pointer ${
                  step.highlight
                    ? 'bg-[#171717] dark:bg-[#222222] text-white border-[#171717] dark:border-white/20 shadow-md hover:shadow-xl'
                    : isSelected
                    ? 'bg-[#FAF8F5] dark:bg-[#202020] border-[#B89A68] shadow-sm'
                    : 'bg-[#F5F3EE] dark:bg-[#181818] border-[#D9D6CF] dark:border-white/12 hover:border-[#B89A68]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`text-2xl sm:text-3xl font-semibold tracking-tight ${
                        step.highlight ? 'text-[#CBB184]' : 'text-[#B89A68]'
                      }`}
                    >
                      {step.year}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        step.highlight
                          ? 'bg-[#CBB184] animate-pulse'
                          : isSelected
                          ? 'bg-[#B89A68]'
                          : 'bg-[#6F6D68]/40 dark:bg-white/30'
                      }`}
                    />
                  </div>

                  <span
                    className={`text-[10px] font-medium uppercase tracking-wider block mb-1 ${
                      step.highlight ? 'text-white/60' : 'text-[#6F6D68] dark:text-[#A8A49C]'
                    }`}
                  >
                    {step.chapter}
                  </span>

                  <h3
                    className={`font-semibold text-base mb-2.5 tracking-tight ${
                      step.highlight ? 'text-white' : 'text-[#171717] dark:text-[#F5F3EE]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs font-normal leading-relaxed ${
                      step.highlight ? 'text-white/75' : 'text-[#6F6D68] dark:text-[#A8A49C]'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#D9D6CF]/60 dark:border-white/10 flex items-center justify-between">
                  <span
                    className={`text-[10px] uppercase tracking-wider font-normal ${
                      step.highlight ? 'text-[#CBB184]' : 'text-[#6F6D68] dark:text-[#A8A49C]'
                    }`}
                  >
                    {idx === TIMELINE.length - 1 ? '12+ YEARS EXPERIENCE' : 'MILESTONE ACHIEVED'}
                  </span>
                  <CheckCircle2
                    className={`w-3.5 h-3.5 ${
                      step.highlight ? 'text-[#CBB184]' : 'text-[#B89A68]'
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
