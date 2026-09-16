import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Home, Layers, Trees, Building2 } from 'lucide-react';

interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
  sublabel: string;
  indexStr: string;
  icon: React.ReactNode;
  inView: boolean;
  delayIndex: number;
}

const StatCounter: React.FC<StatItemProps> = ({
  target,
  suffix = '+',
  label,
  sublabel,
  indexStr,
  icon,
  inView,
  delayIndex,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: delayIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group bg-white dark:bg-[#181818] p-7 sm:p-8 border border-[#D9D6CF] dark:border-white/12 hover:border-[#B89A68]/60 hover:shadow-xl transition-all duration-300 rounded-2xl shadow-2xs flex flex-col justify-between cursor-default"
    >
      <div>
        <div className="flex items-center justify-between text-[#B89A68] mb-5">
          <div className="p-2.5 rounded-xl bg-[#F5F3EE] dark:bg-[#222222] group-hover:bg-[#B89A68] group-hover:text-white transition-colors duration-300">
            {icon}
          </div>
          <span className="text-[11px] font-mono text-[#6F6D68] dark:text-[#A8A49C] tracking-widest">{indexStr}</span>
        </div>

        {/* Numbers in Plus Jakarta Sans 600 */}
        <div className="font-semibold text-3xl sm:text-4xl text-[#171717] dark:text-[#F5F3EE] tracking-tight leading-none mb-2">
          {inView ? count : 0}
          <span className="text-[#B89A68] font-normal text-2xl sm:text-3xl ml-0.5">{suffix}</span>
        </div>

        {/* Category label */}
        <p className="text-sm font-medium tracking-wide text-[#171717] dark:text-[#F5F3EE]">{label}</p>
      </div>

      {/* Sublabel */}
      <p className="text-xs text-[#6F6D68] dark:text-[#A8A49C] font-normal mt-4 pt-3 border-t border-[#D9D6CF]/60 dark:border-white/10 leading-relaxed">
        {sublabel}
      </p>
    </motion.div>
  );
};

export const TrackRecordSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="track-record"
      ref={ref}
      className="w-full bg-[#F5F3EE] dark:bg-[#111111] py-24 lg:py-32 border-b border-[#D9D6CF] dark:border-white/10 transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header with generous whitespace */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-[#D9D6CF] dark:border-white/10"
        >
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
              VERIFIED PROPERTY TRACK RECORD
            </span>
            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-[#F5F3EE] tracking-tight leading-tight">
              12+ Years.
              <br />
              Hundreds of Property Journeys.
            </h2>
            <p className="font-editorial text-xl sm:text-2xl italic font-normal text-[#6F6D68] dark:text-[#A8A49C] max-w-2xl pt-1">
              Quiet precision over aggressive brokerage. Guiding generational wealth and authentic
              home ownership across Kurali, Kharar, and Chandigarh.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-[#181818] border border-[#D9D6CF] dark:border-white/12 rounded-2xl px-5 py-3.5 shadow-2xs"
            >
              <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#B89A68] block">
                Since
              </span>
              <span className="text-xl font-semibold text-[#171717] dark:text-[#F5F3EE] tracking-tight">2014</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-[#181818] border border-[#D9D6CF] dark:border-white/12 rounded-2xl px-5 py-3.5 shadow-2xs"
            >
              <span className="text-[10px] font-medium tracking-[0.12em] uppercase text-[#B89A68] block">
                Experience
              </span>
              <span className="text-xl font-semibold text-[#171717] dark:text-[#F5F3EE] tracking-tight">12+ Years</span>
            </motion.div>
          </div>
        </motion.div>

        {/* 4 Refined Statistics Cards in Plus Jakarta Sans 600 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          <StatCounter
            target={100}
            label="Plots"
            sublabel="Freehold demarcated plots & masterplanned township land"
            indexStr="01 / 04"
            icon={<Trees className="w-4 h-4" />}
            inView={isInView}
            delayIndex={0}
          />
          <StatCounter
            target={50}
            label="Kothis"
            sublabel="Independent multi-level residential bungalows in Kharar & Kurali"
            indexStr="02 / 04"
            icon={<Home className="w-4 h-4" />}
            inView={isInView}
            delayIndex={1}
          />
          <StatCounter
            target={40}
            label="Flats"
            sublabel="Curated residential high-rise suites and gated community apartments"
            indexStr="03 / 04"
            icon={<Building2 className="w-4 h-4" />}
            inView={isInView}
            delayIndex={2}
          />
          <StatCounter
            target={10}
            label="Villas"
            sublabel="Ultra-luxury bespoke architectural estates and private retreats"
            indexStr="04 / 04"
            icon={<Layers className="w-4 h-4" />}
            inView={isInView}
            delayIndex={3}
          />
        </div>
      </div>
    </section>
  );
};
