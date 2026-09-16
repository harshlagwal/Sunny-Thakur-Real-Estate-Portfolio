import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { BRAND } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/90 dark:bg-[#181818]/92 backdrop-blur-xl border-t border-[#D9D6CF] dark:border-white/10 px-3 py-2.5 flex items-center gap-2.5 shadow-2xl transition-colors">
      <ThemeToggle />

      <a
        href={`tel:${BRAND.phoneClean}`}
        className="flex-1 py-2.5 rounded-xl bg-[#171717] text-white dark:bg-[#F5F3EE] dark:text-[#111111] hover:bg-[#B89A68] dark:hover:bg-[#CBB184] text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#B89A68] dark:text-[#171717]" />
        <span>Call Sunny</span>
      </a>

      <a
        href={`https://wa.me/916230369704?text=${encodeURIComponent(
          'Hello Sunny Thakur, I would like to inquire about properties in Kurali / Kharar / Chandigarh.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 rounded-xl bg-[#B89A68] text-white hover:bg-[#9F8252] text-xs font-medium tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-2xs"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
