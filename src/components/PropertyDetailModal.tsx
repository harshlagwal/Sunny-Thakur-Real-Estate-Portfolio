import React, { useState } from 'react';
import { X, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { PropertyItem } from '../types';
import { BRAND } from '../data/portfolioData';

interface PropertyDetailModalProps {
  property: PropertyItem | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [isSent, setIsSent] = useState(false);

  if (!property) return null;

  const whatsappMsg = encodeURIComponent(
    `Hello Sunny Thakur,\nI would like to enquire about the ${property.categoryLabel} opportunity in ${property.location} (${property.basicInfo}).\nPlease share further information and consultation availability.`
  );

  const handleQuickEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#111111]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#F5F3EE] dark:bg-[#181818] max-w-xl w-full rounded-2xl border border-[#D9D6CF] dark:border-white/12 shadow-2xl relative my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200 transition-colors"
        onClick={(e) => e.stopPropagation()}
        id="property-enquiry-modal"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#111111]/70 hover:bg-[#111111] text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close enquiry modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Image Header */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-[#111111]">
          <img
            src={property.imageUrl}
            alt={`${property.categoryLabel} in ${property.location}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent" />

          {/* Type Badge & Location */}
          <div className="absolute bottom-5 left-5 right-5 space-y-1">
            <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#B89A68] text-white uppercase tracking-wider inline-block">
              {property.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              {property.location}
            </h3>
            <p className="text-xs sm:text-sm font-normal text-white/80">
              {property.basicInfo}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-5">
          {/* Editorial Quote Statement */}
          <div className="border-l-2 border-[#B89A68] pl-4">
            <p className="font-editorial text-lg sm:text-xl italic font-normal text-[#171717] dark:text-[#F5F3EE]">
              “{property.shortDescription}”
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#6F6D68] dark:text-[#A8A49C] font-normal leading-relaxed">
            Sunny Thakur personally represents clients for verified property opportunities across
            Kurali, Kharar, and Chandigarh. Get in touch directly for detailed documentation and private
            site inspection.
          </p>

          {!isSent ? (
            <div className="space-y-4 pt-2 border-t border-[#D9D6CF] dark:border-white/10">
              <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#B89A68] block">
                Direct Client Communication
              </span>

              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/916230369704?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 rounded-xl bg-[#B89A68] text-white hover:bg-[#9F8252] text-xs font-medium tracking-wider uppercase text-center transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Enquire via WhatsApp</span>
                </a>

                <a
                  href={`tel:${BRAND.phoneClean}`}
                  className="w-full sm:flex-1 py-3 rounded-xl bg-[#171717] text-white dark:bg-[#F5F3EE] dark:text-[#111111] hover:bg-[#B89A68] dark:hover:bg-[#CBB184] text-xs font-medium tracking-wider uppercase text-center transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B89A68] dark:text-[#171717]" />
                  <span>Call Sunny Directly</span>
                </a>
              </div>

              {/* Quick Callback Request */}
              <form onSubmit={handleQuickEnquiry} className="pt-2 space-y-2.5">
                <span className="text-xs text-[#6F6D68] dark:text-[#A8A49C] font-normal block">
                  Or request a callback:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="bg-white dark:bg-[#202020] rounded-xl border border-[#D9D6CF] dark:border-white/12 px-3 py-2 text-xs text-[#171717] dark:text-[#F5F3EE] outline-none focus:border-[#B89A68]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Your Phone Number"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="bg-white dark:bg-[#202020] rounded-xl border border-[#D9D6CF] dark:border-white/12 px-3 py-2 text-xs text-[#171717] dark:text-[#F5F3EE] outline-none focus:border-[#B89A68]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-white dark:bg-[#202020] border border-[#171717] dark:border-white/20 text-[#171717] dark:text-[#F5F3EE] hover:bg-[#171717] hover:text-white dark:hover:bg-white dark:hover:text-[#111111] text-xs font-medium tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Callback for this Opportunity</span>
                </button>
              </form>
            </div>
          ) : (
            <div className="p-6 bg-white dark:bg-[#202020] rounded-xl border border-[#B89A68] text-center space-y-2 animate-in fade-in">
              <CheckCircle2 className="w-7 h-7 text-[#B89A68] mx-auto" />
              <h4 className="font-semibold text-sm text-[#171717] dark:text-[#F5F3EE]">Enquiry Received</h4>
              <p className="text-xs text-[#6F6D68] dark:text-[#A8A49C] font-normal">
                Sunny Thakur will review your enquiry for this {property.categoryLabel} opportunity
                and contact you at {clientPhone}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
