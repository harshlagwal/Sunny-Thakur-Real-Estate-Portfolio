import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { BRAND } from '../data/portfolioData';

export const AboutSunnySection: React.FC = () => {
  return (
    <section id="about" className="w-full bg-[#FAF8F5] dark:bg-[#181818] py-24 lg:py-32 border-b border-[#D9D6CF] dark:border-white/10 transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Portrait with editorial architectural framing */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative bg-white dark:bg-[#202020] p-4 sm:p-5 rounded-2xl border border-[#D9D6CF] dark:border-white/12 shadow-lg transition-all duration-300 hover:shadow-2xl">
              <div className="relative overflow-hidden aspect-[3/4] rounded-xl bg-[#111111]">
                <img
                  src={BRAND.images.portrait}
                  alt="Sunny Thakur - Real Estate Consultant"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-[#171717] dark:text-[#F5F3EE] leading-tight">
                    Sunny Thakur
                  </h3>
                  <span className="text-[11px] font-medium text-[#B89A68] uppercase tracking-wider">
                    Real Estate Consultant
                  </span>
                </div>
                <div className="w-8 h-8 rounded-xl bg-[#F5F3EE] dark:bg-[#282828] flex items-center justify-center text-[#B89A68] border border-[#D9D6CF] dark:border-white/10">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Biography & Vision */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
                PERSONAL ADVISORY PROFILE
              </span>
              <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-[#F5F3EE] tracking-tight">
                Meet Sunny Thakur.
              </h2>
              <p className="font-editorial text-2xl italic font-normal text-[#B89A68]">
                “Find Your Place. Build Your Future.”
              </p>
            </div>

            <div className="space-y-3.5 text-sm sm:text-base text-[#6F6D68] dark:text-[#A8A49C] font-normal leading-relaxed">
              <p>
                Since 2014, Sunny Thakur has been working across the Kurali–Kharar–Chandigarh property
                market, helping clients explore residential opportunities including plots, flats,
                kothis and villas.
              </p>
              <p className="text-xs sm:text-sm text-[#171717]/75 dark:text-[#F5F3EE]/75">
                Operating with deep local market familiarity and direct, transparent communication,
                Sunny cuts through the confusion of property acquisition to protect his clients' capital
                and deliver homes that endure for generations.
              </p>
            </div>

            {/* Credential Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 border-t border-[#D9D6CF]/60 dark:border-white/10">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-4 rounded-xl bg-white dark:bg-[#202020] border border-[#D9D6CF] dark:border-white/12 transition-all shadow-2xs"
              >
                <span className="text-2xl sm:text-3xl font-semibold text-[#171717] dark:text-[#F5F3EE] block">2014</span>
                <span className="text-[10px] font-medium text-[#6F6D68] dark:text-[#A8A49C] uppercase tracking-wider">
                  Journey Started
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-4 rounded-xl bg-white dark:bg-[#202020] border border-[#D9D6CF] dark:border-white/12 transition-all shadow-2xs"
              >
                <span className="text-2xl sm:text-3xl font-semibold text-[#B89A68] block">12+</span>
                <span className="text-[10px] font-medium text-[#6F6D68] dark:text-[#A8A49C] uppercase tracking-wider">
                  Years Experience
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="p-4 rounded-xl bg-white dark:bg-[#202020] border border-[#D9D6CF] dark:border-white/12 col-span-2 sm:col-span-1 transition-all shadow-2xs"
              >
                <span className="text-2xl sm:text-3xl font-semibold text-[#171717] dark:text-[#F5F3EE] block">200+</span>
                <span className="text-[10px] font-medium text-[#6F6D68] dark:text-[#A8A49C] uppercase tracking-wider">
                  Reported Sales
                </span>
              </motion.div>
            </div>

            {/* Direct Connect Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`tel:${BRAND.phoneClean}`}
                className="px-6 py-3 rounded-xl bg-[#171717] text-white dark:bg-[#F5F3EE] dark:text-[#111111] hover:bg-[#B89A68] dark:hover:bg-[#CBB184] text-xs font-medium tracking-wider uppercase transition-colors flex items-center gap-2 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#B89A68] dark:text-[#171717]" />
                <span>Call Sunny (+91 {BRAND.phone})</span>
              </a>

              <a
                href={`https://wa.me/916230369704?text=${encodeURIComponent(
                  'Hello Sunny Thakur, I would like to schedule a private property consultation with you.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white dark:bg-[#202020] border border-[#D9D6CF] dark:border-white/12 hover:border-[#B89A68] text-[#171717] dark:text-[#F5F3EE] text-xs font-medium tracking-wider uppercase transition-all flex items-center gap-2 shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#B89A68]" />
                <span>WhatsApp Sunny</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
