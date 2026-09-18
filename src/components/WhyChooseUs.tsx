import React from 'react';
import { Phone, Users, MapPin, Handshake, Megaphone, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US, BUSINESS_INFO } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <Users key="users" className="w-6 h-6 text-[#2D5F3F]" />,
    <MapPin key="map" className="w-6 h-6 text-[#2D5F3F]" />,
    <Handshake key="buyer" className="w-6 h-6 text-[#2D5F3F]" />,
    <Megaphone key="seller" className="w-6 h-6 text-[#2D5F3F]" />,
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-[#F8F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D5F3F] bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Consultancy Values
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173F2A] tracking-tight mb-4">
            Your Local Property Partner in Galiyat
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Navigating mountain real estate requires dedicated on-ground experience, nuanced revenue knowledge, and transparent guidance at every step.
          </p>
        </div>

        {/* 4 Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-14">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={item.title}
              id={`why-us-${index}`}
              className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-[#2D5F3F]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5 group-hover:bg-[#2D5F3F] group-hover:text-white transition-colors [&_svg]:group-hover:text-white">
                  {icons[index]}
                </div>
                <h3 className="text-lg font-bold text-[#173F2A] mb-2 group-hover:text-[#2D5F3F] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 flex items-center gap-1 text-[11px] font-bold text-[#2D5F3F] uppercase tracking-wider">
                <span>0{index + 1} Step Advantage</span>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp Banner Action */}
        <div className="bg-gradient-to-r from-[#173F2A] via-[#2D5F3F] to-[#173F2A] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-1">
              Have Questions About Land or Cottages in Galiyat?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
              Connect directly with our senior consultant for real-time guidance on available locations and property suitability.
            </p>
          </div>

          <a
            id="why-choose-us-whatsapp-btn"
            href={`https://wa.me/923009881240?text=${encodeURIComponent(
              'Assalam-o-Alaikum, I would like to consult regarding property opportunities in Galiyat.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Talk to Us on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
