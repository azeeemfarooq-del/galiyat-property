import React from 'react';
import { X, Clock, BookOpen, Share2, Phone, Sparkles } from 'lucide-react';
import { GuideArticle } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface ArticleModalProps {
  article: GuideArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      id="article-reader-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 text-left relative p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center transition-colors"
          aria-label="Close article"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Category & Read Time */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D5F3F] bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
            {article.category}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-stone-600 font-medium">
            <Clock className="w-3 h-3" />
            <span>{article.readTime}</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173F2A] tracking-tight mb-4 leading-tight">
          {article.title}
        </h2>

        {/* Summary box */}
        <div className="bg-[#F8F8F5] p-4 rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700 italic mb-6">
          “{article.summary}”
        </div>

        {/* Article Paragraphs */}
        <div className="space-y-4 text-stone-700 text-sm leading-relaxed mb-8">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Bottom CTA & WhatsApp Action */}
        <div className="pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stone-500">
            Published for Galiyat Property Guidance • {article.publishedDate}
          </div>

          <a
            href={`https://wa.me/923009881240?text=${encodeURIComponent(
              `Assalam-o-Alaikum, I was reading your guide on '${article.title}' and would like to discuss property options in Galiyat.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-sm transition-all"
          >
            <Phone className="w-3.5 h-3.5 fill-white" />
            <span>Discuss on WhatsApp ({BUSINESS_INFO.whatsappDisplay})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
