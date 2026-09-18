import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface FloatingWhatsAppProps {
  onOpenChat: () => void;
  isChatOpen: boolean;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenChat, isChatOpen }) => {
  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom-Right) */}
      {!isChatOpen && (
        <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 animate-fadeIn">
          {/* Instant Auto-Response Assistant Bubble */}
          <button
            id="floating-chat-trigger"
            onClick={onOpenChat}
            className="group flex items-center gap-2.5 bg-[#173F2A] hover:bg-[#2D5F3F] text-white py-2.5 px-4 rounded-full shadow-xl border border-[#C9A227]/40 transition-all transform hover:-translate-y-1"
            title="Ask Instant Property Assistant"
          >
            <div className="relative">
              <MessageCircle className="w-5 h-5 text-[#C9A227]" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            </div>
            <span className="text-xs font-bold tracking-wide">
              Instant Property Assistant
            </span>
          </button>

          {/* WhatsApp Main Floating Button */}
          <a
            id="floating-whatsapp-btn"
            href={`https://wa.me/923009881240?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-5 rounded-full shadow-2xl transition-all transform hover:-translate-y-1 hover:shadow-emerald-900/40 group"
            aria-label="Direct WhatsApp Chat"
          >
            <Phone className="w-6 h-6 fill-white animate-pulse" />
            <div className="text-left leading-tight">
              <span className="text-[10px] uppercase font-bold text-emerald-950/80 block tracking-wider">
                Direct WhatsApp
              </span>
              <span className="text-sm font-extrabold font-mono tracking-tight text-white">
                {BUSINESS_INFO.whatsappDisplay}
              </span>
            </div>
          </a>
        </div>
      )}

      {/* Mobile Sticky Bottom WhatsApp Bar */}
      <div 
        id="mobile-sticky-whatsapp-bar"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#173F2A]/95 backdrop-blur-md p-2.5 border-t border-emerald-700/50 shadow-2xl flex items-center gap-2"
      >
        <button
          onClick={onOpenChat}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#2D5F3F] text-white text-xs font-bold flex items-center justify-center gap-1.5 border border-emerald-500/30"
        >
          <MessageCircle className="w-4 h-4 text-[#C9A227]" />
          <span>Auto Assistant</span>
        </button>

        <a
          href={`https://wa.me/923009881240?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsAppMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] py-2.5 px-3 rounded-xl bg-[#25D366] text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>WhatsApp — {BUSINESS_INFO.whatsappDisplay}</span>
        </a>
      </div>
    </>
  );
};
