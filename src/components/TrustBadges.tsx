import React from 'react';
import { Compass, ShieldCheck, Scale, MessageSquareCode } from 'lucide-react';
import { TRUST_BADGES } from '../data/mockData';

export const TrustBadges: React.FC = () => {
  const icons = [
    <Compass key="compass" className="w-8 h-8 text-[#2D5F3F] stroke-[1.75]" />,
    <ShieldCheck key="shield" className="w-8 h-8 text-[#2D5F3F] stroke-[1.75]" />,
    <Scale key="scale" className="w-8 h-8 text-[#2D5F3F] stroke-[1.75]" />,
    <MessageSquareCode key="chat" className="w-8 h-8 text-[#2D5F3F] stroke-[1.75]" />,
  ];

  return (
    <section id="trust-badges" className="pt-20 pb-16 bg-[#F8F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_BADGES.map((badge, index) => (
            <div
              key={badge.number}
              id={`trust-badge-${badge.number}`}
              className="bg-white rounded-2xl p-7 border border-stone-200 shadow-sm hover:shadow-md hover:border-[#2D5F3F]/40 transition-all group text-left relative overflow-hidden"
            >
              <div className="absolute top-4 right-5 text-3xl font-black text-stone-100 group-hover:text-emerald-50 transition-colors font-mono">
                {badge.number}
              </div>

              <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100/80 flex items-center justify-center mb-5 group-hover:bg-[#2D5F3F] group-hover:text-white transition-all [&_svg]:group-hover:text-white">
                {icons[index]}
              </div>

              <h3 className="text-lg font-bold text-[#173F2A] mb-2 tracking-tight group-hover:text-[#2D5F3F] transition-colors">
                {badge.title}
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
