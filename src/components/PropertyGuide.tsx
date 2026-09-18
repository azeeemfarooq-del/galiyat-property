import React from 'react';
import { BookOpen, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { GUIDE_ARTICLES } from '../data/mockData';
import { GuideArticle } from '../types';

interface PropertyGuideProps {
  onReadArticle: (article: GuideArticle) => void;
}

export const PropertyGuide: React.FC<PropertyGuideProps> = ({ onReadArticle }) => {
  return (
    <section id="guide" className="py-20 bg-[#F8F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D5F3F] bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Knowledge & Insights
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173F2A] tracking-tight mb-4">
            Galiyat Property Guide
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Essential due diligence, regional insights, and location comparisons to guide your property decisions across the hill stations.
          </p>
        </div>

        {/* 6 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {GUIDE_ARTICLES.map((article) => (
            <div
              key={article.id}
              id={`guide-card-${article.id}`}
              onClick={() => onReadArticle(article)}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#2D5F3F]/40 transition-all duration-300 flex flex-col justify-between cursor-pointer group text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-[#2D5F3F] uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-stone-600 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#173F2A] group-hover:text-[#2D5F3F] transition-colors leading-snug mb-3">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#2D5F3F] group-hover:text-[#173F2A]">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Read Full Article</span>
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
