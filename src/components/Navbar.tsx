import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/portfolioData';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenContact?: () => void;
}

const NAV_LINKS = [
  { href: '#hero', label: 'Home', id: 'home', targetId: 'hero' },
  { href: '#about', label: 'About', id: 'about', targetId: 'about' },
  { href: '#properties', label: 'Properties', id: 'properties', targetId: 'properties' },
  { href: '#territory', label: 'Territory', id: 'territory', targetId: 'territory' },
  { href: '#stories', label: 'Reviews', id: 'stories', targetId: 'stories' },
  { href: '#contact', label: 'Contact', id: 'contact', targetId: 'contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const isManualScroll = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 120);

      if (isManualScroll.current) return;

      if (scrollY < 180) {
        setActiveSection('home');
        return;
      }

      // If scrolled near bottom of page, activate contact
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120
      ) {
        setActiveSection('contact');
        return;
      }

      const viewportAnchor = window.innerHeight * 0.35;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const item = NAV_LINKS[i];
        const el = document.getElementById(item.targetId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= viewportAnchor && rect.bottom >= viewportAnchor) {
            setActiveSection(item.id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(id);

    // Lock scroll-spy updates so indicator stays locked on the clicked item while scrolling
    isManualScroll.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isManualScroll.current = false;
    }, 950);

    if (id === 'contact' && onOpenContact) {
      onOpenContact();
    }

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Left Side: Sunny Thakur Name (NO BOX, Fixed & Static during Scroll) */}
      <div className="fixed top-5 left-4 sm:left-8 z-50 pointer-events-auto select-none">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveSection('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex flex-col group focus:outline-none"
          aria-label="Sunny Thakur Real Estate Consultant"
        >
          <span className="font-bold text-base sm:text-lg tracking-tight uppercase leading-none text-[#171717] dark:text-[#F5F3EE] drop-shadow-xs">
            SUNNY THAKUR
          </span>
          <span className="text-[10px] tracking-[0.16em] uppercase font-semibold mt-1 text-[#B89A68] dark:text-[#CBB184]">
            REAL ESTATE CONSULTANT
          </span>
        </a>
      </div>

      {/* 2. Main Unified Floating Navbar (Bada Navbar - All Data in One Capsule) */}
      <div className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto hidden md:block">
        <nav
          className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-[#181818]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 shadow-[0_12px_36px_rgba(0,0,0,0.1)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
          aria-label="Main Navigation"
        >
          {/* Navigation Links */}
          <div className="flex items-center">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`relative px-3.5 lg:px-4 py-2 text-xs lg:text-sm font-medium transition-colors duration-200 z-10 select-none ${
                    isActive
                      ? 'text-[#111111] dark:text-white font-semibold'
                      : 'text-[#6F6D68] dark:text-[#A8A49C] hover:text-[#111111] dark:hover:text-white'
                  }`}
                >
                  {/* Sliding Active Pill Background */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute inset-0 rounded-full bg-[#EFECE6] dark:bg-white/15 shadow-2xs z-[-1]"
                    />
                  )}

                  {/* Top Notch Tab Indicator (from Screenshot) */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-notch"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-7 sm:w-8 h-1 bg-[#111111] dark:bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                    />
                  )}

                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Clean Vertical Divider */}
          <div className="h-5 w-px bg-[#D9D6CF] dark:bg-white/15 mx-1" />

          {/* Quick Action Controls: Theme, Contact Icon, Original WhatsApp Icon */}
          <div className="flex items-center gap-1.5 pl-1">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Direct Contact Icon (Sharp gold button with bold icon) */}
            <a
              href={`tel:${BRAND.phoneClean}`}
              className="p-2 rounded-full text-[#B89A68] hover:text-white hover:bg-[#B89A68] bg-[#B89A68]/15 border border-[#B89A68]/40 transition-all shadow-xs"
              title={`Call Sunny Thakur: +91 ${BRAND.phone}`}
              aria-label="Call Sunny Thakur"
            >
              <Phone className="w-4 h-4 stroke-[2.5]" />
            </a>

            {/* Original WhatsApp Official Icon (Solid official WhatsApp green) */}
            <a
              href={`https://wa.me/916230369704?text=${encodeURIComponent(
                'Hello Sunny Thakur, I would like to consult with you regarding property opportunities in Kurali / Kharar / Chandigarh.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-xs transition-all hover:scale-105"
              title="Chat on WhatsApp (+91 62303-69704)"
              aria-label="WhatsApp Sunny Thakur"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </nav>
      </div>

      {/* 3. Mobile Top Header Controls */}
      <div className="fixed top-4 right-4 z-50 md:hidden flex items-center gap-2 pointer-events-auto">
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-white/90 dark:bg-[#181818]/90 backdrop-blur-xl border border-black/10 dark:border-white/15 shadow-sm">
          <ThemeToggle />
          <a
            href={`tel:${BRAND.phoneClean}`}
            className="p-1.5 rounded-full text-[#B89A68]"
            title="Call Sunny Thakur"
            aria-label="Call Sunny Thakur"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={`https://wa.me/916230369704?text=${encodeURIComponent(
              'Hello Sunny Thakur, I would like to consult with you regarding property opportunities.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full text-[#25D366]"
            title="WhatsApp"
            aria-label="WhatsApp Sunny Thakur"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-full text-[#171717] dark:text-white"
            aria-label="Open menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 p-5 rounded-2xl bg-white/95 dark:bg-[#181818]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 shadow-2xl transition-all animate-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1.5">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#EFECE6] dark:bg-white/15 text-[#111111] dark:text-white'
                      : 'text-[#6F6D68] dark:text-[#A8A49C] hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
                </a>
              );
            })}
          </nav>

          <div className="pt-4 mt-3 border-t border-black/10 dark:border-white/10 grid grid-cols-2 gap-2">
            <a
              href={`tel:${BRAND.phoneClean}`}
              className="py-2.5 px-3 rounded-xl bg-black/5 dark:bg-white/5 text-[#171717] dark:text-white text-xs font-medium flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89A68]" />
              <span>Call Sunny</span>
            </a>
            <a
              href={`https://wa.me/916230369704?text=${encodeURIComponent(
                'Hello Sunny Thakur, I would like to consult with you regarding property opportunities.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-3 rounded-xl bg-[#25D366]/15 text-[#128C7E] dark:text-[#25D366] text-xs font-medium flex items-center justify-center gap-1.5"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.888 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
