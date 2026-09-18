import React from 'react';
import { MessageSquare, Search, Eye, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

export const HowItWorks: React.FC = () => {
  const stepIcons = [
    <MessageSquare key="msg" className="w-6 h-6 text-[#2D5F3F]" />,
    <Search key="search" className="w-6 h-6 text-[#2D5F3F]" />,
    <Eye key="visit" className="w-6 h-6 text-[#2D5F3F]" />,
    <CheckCircle2 key="check" className="w-6 h-6 text-[#2D5F3F]" />,
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D5F3F] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Simple & Transparent
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173F2A] tracking-tight mb-3">
            How It Works
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            A clear, stepwise framework designed to ensure trust, transparency, and thorough evaluation.
          </p>
        </div>

        {/* 4 Steps Container with Connecting Line */}
        <div className="relative">
          {/* Subtle connecting dotted line on desktop */}
          <div className="hidden lg:block absolute top-1/3 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-emerald-300 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 text-left">
            {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
              <div
                key={stepItem.step}
                id={`how-step-${stepItem.step}`}
                className="bg-[#F8F8F5] p-6 sm:p-7 rounded-2xl border border-stone-200 hover:border-[#2D5F3F]/50 transition-all flex flex-col justify-between group shadow-2xs hover:shadow-md"
              >
                <div>
                  {/* Step badge & icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#C9A227] font-mono">
                      {stepItem.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center shadow-xs group-hover:bg-[#2D5F3F] group-hover:text-white transition-colors [&_svg]:group-hover:text-white">
                      {stepIcons[idx]}
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#173F2A] mb-2 group-hover:text-[#2D5F3F] transition-colors">
                    {stepItem.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-semibold text-stone-600">
                  <span>Phase {idx + 1}</span>
                  <span className="text-[#2D5F3F] font-bold">Safe & Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
