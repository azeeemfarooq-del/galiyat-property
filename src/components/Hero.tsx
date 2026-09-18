import React from 'react';
import { ArrowRight, Phone, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface HeroProps {
  onExploreClick?: () => void;
  onOpenWhatsApp?: () => void;
  onOpenInquiry?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onOpenInquiry }) => {
  const handleExplore = () => {
    if (onExploreClick) {
      onExploreClick();
    } else if (onOpenInquiry) {
      onOpenInquiry();
    } else {
      document.getElementById('latest-properties')?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center pt-24 pb-28 md:pb-36 overflow-hidden">
      {/* Cinematic High-Resolution Background Image with Misty Pine Galiyat Valley */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        {/* Multi-layered dark forest green gradient overlay for high contrast text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173F2A] via-[#173F2A]/70 to-[#0c2217]/85" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#173F2A]/50 to-[#173F2A]/90" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-8 mb-6">
        {/* Top Gold Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/50 text-[#C9A227] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm shadow-sm animate-fadeIn">
          <Sparkles className="w-4 h-4 text-[#C9A227]" />
          <span>YOUR PROPERTY JOURNEY STARTS HERE</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] mb-6 drop-shadow-sm">
          FIND YOUR DREAM PROPERTY <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-[#C9A227]">
            IN GALIYAT
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base sm:text-xl md:text-2xl text-emerald-100/90 max-w-3xl mx-auto font-normal leading-relaxed mb-6">
          Plots, cottages, houses and investment opportunities in the beautiful hill stations of Pakistan.
        </p>

        {/* Location Line */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-emerald-200/90 mb-10 bg-[#173F2A]/60 backdrop-blur-sm py-2 px-5 rounded-full border border-emerald-500/20 max-w-2xl mx-auto">
          <MapPin className="w-4 h-4 text-[#C9A227] shrink-0" />
          <span className="hover:text-white transition-colors">Galiyat</span>
          <span className="text-[#C9A227]">•</span>
          <span className="hover:text-white transition-colors">Ayubia</span>
          <span className="text-[#C9A227]">•</span>
          <span className="hover:text-white transition-colors">Nathia Gali</span>
          <span className="text-[#C9A227]">•</span>
          <span className="hover:text-white transition-colors">Khanaspur</span>
          <span className="text-[#C9A227]">•</span>
          <span className="hover:text-white transition-colors">Kalabagh</span>
          <span className="text-[#C9A227]">•</span>
          <span className="hover:text-white transition-colors">Murree</span>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            id="hero-explore-cta"
            onClick={handleExplore}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2D5F3F] to-[#1e442c] hover:from-[#35724b] hover:to-[#245336] text-white text-base font-bold shadow-lg shadow-emerald-950/50 border border-emerald-400/30 transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Properties</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            id="hero-whatsapp-cta"
            href={`https://wa.me/923009881240?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-base font-bold shadow-lg shadow-emerald-950/50 transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 fill-white" />
            <span>WhatsApp Us</span>
            <span className="bg-black/20 text-xs px-2 py-1 rounded font-semibold tracking-wide">
              {BUSINESS_INFO.whatsappDisplay}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
