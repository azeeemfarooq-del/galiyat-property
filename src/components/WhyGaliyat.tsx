import React from 'react';
import { Trees, Heart, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { WHY_GALIYAT_BENEFITS } from '../data/mockData';

export const WhyGaliyat: React.FC = () => {
  const benefitIcons = [
    <Trees key="nature" className="w-5 h-5 text-[#2D5F3F]" />,
    <Heart key="peace" className="w-5 h-5 text-[#2D5F3F]" />,
    <Compass key="tourism" className="w-5 h-5 text-[#2D5F3F]" />,
    <Sparkles key="potential" className="w-5 h-5 text-[#2D5F3F]" />,
  ];

  return (
    <section id="why-galiyat" className="py-20 bg-white border-y border-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Text & Benefits */}
          <div className="lg:col-span-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2D5F3F] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
              The Alpine Living Experience
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173F2A] tracking-tight mb-4 leading-tight">
              Why Choose Galiyat?
            </h2>

            <p className="text-xl sm:text-2xl font-serif italic text-[#2D5F3F] mb-4">
              “Galiyat is more than a destination. It’s a lifestyle.”
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
              Fresh mountain air, dense pine forests, peaceful surroundings and breathtaking valley scenery make the region uniquely attractive for individuals and families looking for a tranquil second home, vacation cottage, or long-term property investment.
            </p>

            {/* 4 Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {WHY_GALIYAT_BENEFITS.map((b, idx) => (
                <div
                  key={b.title}
                  className="p-4 rounded-xl bg-[#F8F8F5] border border-stone-200/80 hover:border-emerald-300 transition-colors"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100/70 flex items-center justify-center">
                      {benefitIcons[idx]}
                    </div>
                    <h3 className="font-bold text-[#173F2A] text-sm sm:text-base">
                      {b.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-2 text-xs text-stone-500">
              <CheckCircle2 className="w-4 h-4 text-[#2D5F3F] shrink-0" />
              <span>Authentic mountain living 60–90 minutes from Islamabad & Rawalpindi.</span>
            </div>
          </div>

          {/* Right Column: Cinematic Photography with layered badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
                alt="Scenic pine mountain valley of Galiyat, Pakistan"
                className="w-full h-[420px] sm:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173F2A]/80 via-transparent to-black/10" />

              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 text-left">
                <div className="flex items-center justify-between text-xs text-[#C9A227] font-semibold mb-1">
                  <span>Elevation: 7,500 – 8,200 ft</span>
                  <span>Pure Pine Microclimate</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-100 font-medium">
                  Mukshpuri & Miranjani trails, Ayubia chairlift, and historical colonial pine tracks.
                </p>
              </div>
            </div>

            {/* Small Floating Overlapping Trust Box */}
            <div className="hidden sm:block absolute -top-5 -left-5 bg-white p-4 rounded-2xl shadow-xl border border-stone-200 max-w-xs text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#2D5F3F] flex items-center justify-center font-bold text-sm">
                  100%
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#173F2A]">Natural Sanctuary</h4>
                  <p className="text-[11px] text-stone-500">Unspoiled pine hillsides</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
