import React from 'react';
import { ShieldCheck, Mountain, MapPin, Trees, ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-20 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-stone-100">
              <img
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80"
                alt="Nathia Gali mountain pine panorama"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173F2A]/90 via-[#173F2A]/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <div className="text-[#C9A227] text-xs font-bold uppercase tracking-widest mb-1">
                  Local Heritage & Ground Presence
                </div>
                <h4 className="text-xl font-bold text-white mb-1">Galiyat Property Consultant</h4>
                <p className="text-xs text-emerald-100/90">
                  {BUSINESS_INFO.address}
                </p>
              </div>
            </div>

            {/* Floating Tag */}
            <div className="absolute -bottom-4 -right-3 bg-[#173F2A] text-white py-2.5 px-4 rounded-xl border border-[#C9A227]/40 shadow-lg text-left">
              <span className="text-[10px] text-[#C9A227] uppercase font-bold tracking-wider block">Commitment</span>
              <span className="text-xs font-extrabold">{BUSINESS_INFO.tagline}</span>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 text-left order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D5F3F] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              About Our Consultancy
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173F2A] tracking-tight mb-6 leading-tight">
              About Galiyat Property Consultant
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-stone-800 text-base sm:text-lg">
                Galiyat Property Consultant is a local real estate consultancy focused on property opportunities across Galiyat, Ayubia, Nathia Gali, Khanaspur, Kalabagh, Murree and surrounding areas.
              </p>
              <p>
                Our goal is simple: help buyers, sellers and investors explore suitable property opportunities with clear communication, local knowledge and professional guidance.
              </p>
              <p className="text-sm">
                We believe that buying or selling a mountain property should be backed by transparent due diligence, accurate topography assessments, honest climate advice, and verified revenue records. We do not make unrealistic promises; instead, we stand as your dependable on-ground partner.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-8">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8F8F5] border border-stone-200">
                <ShieldCheck className="w-5 h-5 text-[#2D5F3F]" />
                <span className="text-xs sm:text-sm font-bold text-[#173F2A]">Strict Document Due Diligence</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8F8F5] border border-stone-200">
                <Mountain className="w-5 h-5 text-[#2D5F3F]" />
                <span className="text-xs sm:text-sm font-bold text-[#173F2A]">On-Ground Elevation & Slope Analysis</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8F8F5] border border-stone-200">
                <MapPin className="w-5 h-5 text-[#2D5F3F]" />
                <span className="text-xs sm:text-sm font-bold text-[#173F2A]">Accurate Road & Winter Access Advice</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8F8F5] border border-stone-200">
                <Trees className="w-5 h-5 text-[#2D5F3F]" />
                <span className="text-xs sm:text-sm font-bold text-[#173F2A]">Sustainable Hill Station Living</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2D5F3F] hover:bg-[#173F2A] text-white text-sm font-bold shadow-md transition-all group"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`https://wa.me/923009881240?text=${encodeURIComponent(
                  'Assalam-o-Alaikum, I would like to learn more about Galiyat Property Consultant and your services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>WhatsApp (03009881240)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
