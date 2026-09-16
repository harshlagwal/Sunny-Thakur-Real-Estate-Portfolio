import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  Mail,
  MapPin,
  Copy,
  Check,
  Trees,
  Home,
  Building2,
  Layers,
  Sparkles,
  Calendar,
  FileText,
  ShieldCheck,
} from 'lucide-react';
import { BRAND } from '../data/portfolioData';

type PropertyCategory = 'Plot' | 'Kothi' | 'Flat' | 'Villa';
type CorridorLocation =
  | 'Kharar (Sunny Enclave & Sec 125)'
  | 'Kurali (Expressway & Townships)'
  | 'Chandigarh Periphery'
  | 'Mohali Direct Border Bounds';

type BudgetBracket =
  | '₹40L – ₹75L'
  | '₹75L – ₹1.50 Cr'
  | '₹1.50 Cr – ₹3.00 Cr'
  | '₹3.00 Cr+ (Signature)';

export const ContactSection: React.FC = () => {
  const [propertyType, setPropertyType] = useState<PropertyCategory>('Plot');
  const [location, setLocation] = useState<CorridorLocation>('Kharar (Sunny Enclave & Sec 125)');
  const [budget, setBudget] = useState<BudgetBracket>('₹75L – ₹1.50 Cr');
  const [selectedTag, setSelectedTag] = useState<string>('Immediate Possession');
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);

  const handleCopy = async (text: string, field: 'phone' | 'email') => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedField(field);
      setTimeout(() => {
        setCopiedField((prev) => (prev === field ? null : prev));
      }, 2000);
    } catch (err) {
      console.error('Failed to copy to clipboard', err);
    }
  };

  // Dynamically constructed luxury WhatsApp message
  const generatedWhatsAppMessage = `Hello Sunny Thakur,\n\nI am looking for: ${propertyType}\nPreferred Location: ${location}\nBudget Bracket: ${budget}\nPriority: ${selectedTag}\n\nPlease share available verified property options.`;

  const getWhatsAppUrl = (customText?: string) => {
    const text = encodeURIComponent(customText || generatedWhatsAppMessage);
    return `https://wa.me/916230369704?text=${text}`;
  };

  const propertyOptions: { id: PropertyCategory; label: string; sub: string; icon: React.ReactNode }[] = [
    { id: 'Plot', label: 'Plot', sub: 'Demarcated Land', icon: <Trees className="w-4 h-4" /> },
    { id: 'Kothi', label: 'Kothi', sub: 'Bungalow / House', icon: <Home className="w-4 h-4" /> },
    { id: 'Flat', label: 'Flat', sub: 'Luxury Apartment', icon: <Building2 className="w-4 h-4" /> },
    { id: 'Villa', label: 'Villa', sub: 'Signature Estate', icon: <Layers className="w-4 h-4" /> },
  ];

  const locationOptions: CorridorLocation[] = [
    'Kharar (Sunny Enclave & Sec 125)',
    'Kurali (Expressway & Townships)',
    'Chandigarh Periphery',
    'Mohali Direct Border Bounds',
  ];

  const budgetOptions: BudgetBracket[] = [
    '₹40L – ₹75L',
    '₹75L – ₹1.50 Cr',
    '₹1.50 Cr – ₹3.00 Cr',
    '₹3.00 Cr+ (Signature)',
  ];

  const priorityTags: string[] = [
    'Immediate Possession',
    'Corner Plot / Park Facing',
    'East Facing / Vastu Compliant',
    'Direct Registry / Clear Title',
    'High Rental Yield',
  ];

  return (
    <section
      id="contact"
      className="w-full bg-[#FAF8F5] dark:bg-[#111111] py-24 lg:py-32 relative border-b border-[#D9D6CF] dark:border-white/10 transition-colors duration-400"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Direct Contact & Advisory Desk */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
                DIRECT ADVISORY DESK
              </span>
              <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-[#171717] dark:text-[#F5F3EE] tracking-tight leading-tight">
                Connect Directly With Sunny.
              </h2>
              <p className="font-editorial text-2xl italic font-normal text-[#B89A68]">
                “No forms. No spam. Direct WhatsApp consultation.”
              </p>
            </div>

            <div className="bg-white dark:bg-[#181818] p-7 sm:p-8 rounded-2xl border border-[#D9D6CF] dark:border-white/12 shadow-xs space-y-6 transition-colors">
              {/* Consultant Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-medium text-[#6F6D68] dark:text-[#A8A49C] uppercase tracking-wider block">
                    Principal Real Estate Consultant
                  </span>
                  <h3 className="font-semibold text-xl text-[#171717] dark:text-[#F5F3EE]">
                    Sunny Thakur
                  </h3>
                  <p className="text-xs text-[#B89A68] font-medium uppercase tracking-wider">
                    Serving {BRAND.territory}
                  </p>
                </div>

                {/* Live Availability Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 text-[10px] font-medium tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available Now</span>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-3 pt-4 border-t border-[#D9D6CF]/60 dark:border-white/10 text-sm">
                {/* Telephone */}
                <div className="flex items-center justify-between gap-3 p-2 -mx-2 rounded-xl hover:bg-[#F5F3EE]/60 dark:hover:bg-[#202020]/50 transition-colors group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#F5F3EE] dark:bg-[#222222] flex items-center justify-center text-[#B89A68] shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-medium text-[#6F6D68] dark:text-[#A8A49C] uppercase tracking-wider block">
                        Direct Phone Call
                      </span>
                      <a
                        href={`tel:${BRAND.phoneClean}`}
                        className="font-medium text-[#171717] dark:text-[#F5F3EE] hover:text-[#B89A68] transition-colors"
                      >
                        +91 {BRAND.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(`+91 ${BRAND.phone}`, 'phone')}
                    aria-label={copiedField === 'phone' ? 'Phone number copied' : 'Copy phone number'}
                    className={`px-2.5 py-1.5 rounded-lg border text-xs transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                      copiedField === 'phone'
                        ? 'bg-[#B89A68]/15 text-[#B89A68] border-[#B89A68]/40'
                        : 'bg-[#F5F3EE] dark:bg-[#222222] text-[#6F6D68] dark:text-[#A8A49C] hover:text-[#171717] dark:hover:text-[#F5F3EE] border-[#D9D6CF] dark:border-white/10 hover:border-[#B89A68]/40'
                    }`}
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#B89A68]" />
                        <span className="text-[10px] font-medium uppercase tracking-wider text-[#B89A68]">
                          Copied
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="text-[10px] font-medium uppercase tracking-wider hidden sm:inline">
                          Copy
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-center justify-between gap-3 p-2 -mx-2 rounded-xl hover:bg-[#F5F3EE]/60 dark:hover:bg-[#202020]/50 transition-colors group">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-[#F5F3EE] dark:bg-[#222222] flex items-center justify-center text-[#B89A68] shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-medium text-[#6F6D68] dark:text-[#A8A49C] uppercase tracking-wider block">
                        Official Email
                      </span>
                      <a
                        href={`mailto:${BRAND.email}`}
                        className="text-xs sm:text-sm text-[#171717] dark:text-[#F5F3EE] hover:text-[#B89A68] transition-colors break-all block"
                      >
                        {BRAND.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleCopy(BRAND.email, 'email')}
                    aria-label={copiedField === 'email' ? 'Email address copied' : 'Copy email address'}
                    className={`px-2.5 py-1.5 rounded-lg border text-xs transition-all duration-200 flex items-center gap-1.5 cursor-pointer shrink-0 ${
                      copiedField === 'email'
                        ? 'bg-[#B89A68]/15 text-[#B89A68] border-[#B89A68]/40'
                        : 'bg-[#F5F3EE] dark:bg-[#222222] text-[#6F6D68] dark:text-[#A8A49C] hover:text-[#171717] dark:hover:text-[#F5F3EE] border-[#D9D6CF] dark:border-white/10 hover:border-[#B89A68]/40'
                    }`}
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#B89A68]" />
                        <span className="text-[10px] font-medium uppercase tracking-wider text-[#B89A68]">
                          Copied
                        </span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span className="text-[10px] font-medium uppercase tracking-wider hidden sm:inline">
                          Copy
                        </span>
                      </>
                    )}
                  </button>
                </div>

                {/* Operating Hub */}
                <div className="flex items-center gap-3 p-2 -mx-2 rounded-xl">
                  <div className="w-9 h-9 rounded-xl bg-[#F5F3EE] dark:bg-[#222222] flex items-center justify-center text-[#B89A68] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-medium text-[#6F6D68] dark:text-[#A8A49C] uppercase tracking-wider block">
                      Operating Hub &amp; Territory
                    </span>
                    <span className="text-xs text-[#171717] dark:text-[#F5F3EE] font-normal">
                      Kharar (Sunny Enclave / Sec 125) • Kurali • Chandigarh
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badge Bar */}
              <div className="pt-2 flex items-center gap-2 text-xs text-[#6F6D68] dark:text-[#A8A49C]">
                <ShieldCheck className="w-4 h-4 text-[#B89A68] shrink-0" />
                <span className="text-[11px] leading-relaxed">
                  Direct broker negotiation. 100% verified freehold titles and registry guidance.
                </span>
              </div>
            </div>

            {/* Quick 1-Click Fast Actions */}
            <div className="space-y-2.5">
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#6F6D68] dark:text-[#A8A49C] block">
                QUICK DIRECT ACTIONS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={getWhatsAppUrl(
                    'Hello Sunny Thakur, I would like to schedule a private site visit this weekend for properties in Kharar / Kurali.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-[#181818] hover:bg-[#F5F3EE] dark:hover:bg-[#222222] border border-[#D9D6CF] dark:border-white/10 hover:border-[#B89A68]/50 transition-all flex items-center gap-2.5 text-xs text-[#171717] dark:text-[#F5F3EE] group shadow-2xs"
                >
                  <Calendar className="w-4 h-4 text-[#B89A68] shrink-0" />
                  <span className="font-medium">Book Site Visit</span>
                </a>

                <a
                  href={getWhatsAppUrl(
                    'Hello Sunny Thakur, please share the latest list/brochure of available freehold plots in Kharar & Kurali.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white dark:bg-[#181818] hover:bg-[#F5F3EE] dark:hover:bg-[#222222] border border-[#D9D6CF] dark:border-white/10 hover:border-[#B89A68]/50 transition-all flex items-center gap-2.5 text-xs text-[#171717] dark:text-[#F5F3EE] group shadow-2xs"
                >
                  <FileText className="w-4 h-4 text-[#B89A68] shrink-0" />
                  <span className="font-medium">Request Plots List</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 1-Click Smart WhatsApp Configurator */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-white dark:bg-[#181818] p-7 sm:p-10 rounded-2xl border border-[#D9D6CF] dark:border-white/12 shadow-sm transition-colors space-y-7"
          >
            {/* Header */}
            <div className="space-y-2 border-b border-[#D9D6CF]/60 dark:border-white/10 pb-5">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B89A68]" />
                <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68]">
                  1-CLICK WHATSAPP PROPERTY SELECTOR
                </span>
              </div>
              <h3 className="font-semibold text-2xl text-[#171717] dark:text-[#F5F3EE] tracking-tight">
                Select Your Requirement. Get Direct Options.
              </h3>
              <p className="text-xs sm:text-sm text-[#6F6D68] dark:text-[#A8A49C]">
                Choose your preferences below. Your bespoke WhatsApp inquiry is formatted automatically for Sunny.
              </p>
            </div>

            {/* Step 01: Property Typology */}
            <div className="space-y-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
                01 / SELECT PROPERTY TYPOLOGY
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {propertyOptions.map((opt) => {
                  const isSelected = propertyType === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setPropertyType(opt.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[90px] ${
                        isSelected
                          ? 'bg-[#171717] text-white dark:bg-[#F5F3EE] dark:text-[#111111] border-[#171717] dark:border-white shadow-sm'
                          : 'bg-[#FAF8F5] dark:bg-[#202020] text-[#171717] dark:text-[#F5F3EE] border-[#D9D6CF] dark:border-white/10 hover:border-[#B89A68]/50'
                      }`}
                    >
                      <div className={`p-1.5 rounded-lg w-fit ${isSelected ? 'bg-white/15 dark:bg-black/10 text-white dark:text-[#111111]' : 'bg-white dark:bg-[#282828] text-[#B89A68]'}`}>
                        {opt.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-sm leading-tight">{opt.label}</div>
                        <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-white/70 dark:text-black/70' : 'text-[#6F6D68] dark:text-[#A8A49C]'}`}>
                          {opt.sub}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 02: Preferred Location Corridor */}
            <div className="space-y-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
                02 / PREFERRED LOCATION CORRIDOR
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {locationOptions.map((loc) => {
                  const isSelected = location === loc;
                  return (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setLocation(loc)}
                      className={`px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all duration-200 cursor-pointer text-left flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#171717] text-white dark:bg-[#F5F3EE] dark:text-[#111111] border-[#171717] dark:border-white shadow-2xs'
                          : 'bg-[#FAF8F5] dark:bg-[#202020] text-[#171717] dark:text-[#F5F3EE] border-[#D9D6CF] dark:border-white/10 hover:border-[#B89A68]/50'
                      }`}
                    >
                      <span>{loc}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 shrink-0 text-[#B89A68] dark:text-[#171717]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 03: Budget Bracket */}
            <div className="space-y-3">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
                03 / BUDGET BRACKET
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {budgetOptions.map((b) => {
                  const isSelected = budget === b;
                  return (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setBudget(b)}
                      className={`px-3 py-2.5 rounded-xl border text-center text-xs font-medium transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#171717] text-white dark:bg-[#F5F3EE] dark:text-[#111111] border-[#171717] dark:border-white shadow-2xs'
                          : 'bg-[#FAF8F5] dark:bg-[#202020] text-[#171717] dark:text-[#F5F3EE] border-[#D9D6CF] dark:border-white/10 hover:border-[#B89A68]/50'
                      }`}
                    >
                      {b}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 04: Priority Highlight Chips */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
                04 / SPECIFIC PREFERENCE (OPTIONAL)
              </span>
              <div className="flex flex-wrap gap-1.5">
                {priorityTags.map((tag) => {
                  const isSelected = selectedTag === tag;
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setSelectedTag(tag)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all cursor-pointer border ${
                        isSelected
                          ? 'bg-[#B89A68] text-white border-[#B89A68]'
                          : 'bg-[#FAF8F5] dark:bg-[#202020] text-[#6F6D68] dark:text-[#A8A49C] border-[#D9D6CF] dark:border-white/10 hover:border-[#B89A68]/40'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live WhatsApp Preview Bubble */}
            <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-[#222222] border border-[#D9D6CF]/70 dark:border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-[#6F6D68] dark:text-[#A8A49C] font-mono">
                <span>LIVE PREVIEW FOR SUNNY THAKUR</span>
                <span className="text-[#25D366] font-semibold flex items-center gap-1">
                  ● Ready to Send
                </span>
              </div>
              <div className="p-3 rounded-lg bg-white dark:bg-[#181818] border border-[#D9D6CF]/60 dark:border-white/10 text-xs font-mono text-[#171717] dark:text-[#F5F3EE] leading-relaxed whitespace-pre-line">
                {generatedWhatsAppMessage}
              </div>
            </div>

            {/* Primary 1-Click WhatsApp Launch CTA */}
            <div className="pt-1">
              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-[0_10px_25px_rgba(37,211,102,0.35)] cursor-pointer"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.12.16 1.7 2.6 4.12 3.65.58.25 1.02.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.29s-1.44-.71-1.66-.82c-.22-.12-.39-.17-.55.12-.16.28-.64.82-.78.99-.15.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45s-.55-1.33-.76-1.82c-.2-.48-.41-.41-.56-.42h-.47z" />
                </svg>
                <span>Send Requirement on WhatsApp →</span>
              </motion.a>

              <div className="mt-3 flex items-center justify-center gap-4 text-[11px] text-[#6F6D68] dark:text-[#A8A49C]">
                <span>✓ Instant Direct Response</span>
                <span>•</span>
                <span>✓ 100% Free Consultation</span>
                <span>•</span>
                <span>✓ Zero Brokerage Spam</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
