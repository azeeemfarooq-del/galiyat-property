import React from 'react';
import { ArrowRight, Mountain, Home, Building2, TrendingUp } from 'lucide-react';
import { PropertyType } from '../types';

interface PropertyCategoriesProps {
  onSelectCategory: (type: PropertyType | 'All') => void;
}

export const PropertyCategories: React.FC<PropertyCategoriesProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      type: 'Plot' as PropertyType,
      title: 'PLOTS',
      iconEmoji: '🏔️',
      icon: <Mountain className="w-6 h-6 text-[#2D5F3F]" />,
      description: 'Residential and investment plots in scenic locations across Nathia Gali, Ayubia, Khanaspur, and Kalabagh.',
      popularSizes: '5 Marla • 10 Marla • 1 Kanal • 2 Kanal',
      bgGradient: 'from-emerald-900/90 to-stone-900/90',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
    },
    {
      type: 'Cottage' as PropertyType,
      title: 'COTTAGES',
      iconEmoji: '🏡',
      icon: <Home className="w-6 h-6 text-[#2D5F3F]" />,
      description: 'Beautiful mountain cottages and vacation-home opportunities featuring timber, stone accents and fireplaces.',
      popularSizes: '2-Bed • 3-Bed • 4-Bed Chalets',
      bgGradient: 'from-emerald-950/90 to-[#173F2A]/90',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
    },
    {
      type: 'House' as PropertyType,
      title: 'HOUSES & VILLAS',
      iconEmoji: '🏠',
      icon: <Building2 className="w-6 h-6 text-[#2D5F3F]" />,
      description: 'Comfortable homes and contemporary hill villas surrounded by Galiyat’s natural pine beauty and cool weather.',
      popularSizes: 'Independent Villas & Family Residences',
      bgGradient: 'from-stone-900/90 to-[#173F2A]/90',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    },
    {
      type: 'Investment Opportunity' as PropertyType,
      title: 'INVESTMENT',
      iconEmoji: '📈',
      icon: <TrendingUp className="w-6 h-6 text-[#2D5F3F]" />,
      description: 'Explore property opportunities based on location, demand and your goals with balanced, realistic guidance.',
      popularSizes: 'Acreage • Commercial Parcels • Boutique Resorts',
      bgGradient: 'from-[#173F2A]/90 to-emerald-950/90',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#F8F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#2D5F3F] bg-emerald-100/60 px-3 py-1 rounded-full border border-emerald-200">
            Property Categories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173F2A] tracking-tight mt-3 mb-3">
            What Are You Looking For?
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Targeted real estate solutions tailored to your hill-station lifestyle and property requirements.
          </p>
        </div>

        {/* 4 Large Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              id={`category-card-${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => onSelectCategory(cat.type)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-stone-200 cursor-pointer flex flex-col h-[340px] text-left"
            >
              {/* Top Half Image */}
              <div className="h-44 relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${cat.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm p-2 rounded-xl border border-white/50 shadow-sm">
                  {cat.icon}
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
                    Category
                  </span>
                  <h3 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-1.5">
                    <span>{cat.iconEmoji}</span>
                    <span>{cat.title}</span>
                  </h3>
                </div>
              </div>

              {/* Bottom Half Description */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white group-hover:bg-emerald-50/40 transition-colors">
                <div>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2 mb-2">
                    {cat.description}
                  </p>
                  <span className="text-[11px] font-semibold text-[#2D5F3F] block">
                    {cat.popularSizes}
                  </span>
                </div>

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-bold text-[#2D5F3F] group-hover:text-[#173F2A]">
                  <span>Explore Listings</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onSelectCategory('All')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#2D5F3F] hover:bg-[#173F2A] text-white text-sm font-bold shadow-md transition-all group"
          >
            <span>Explore All Properties</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
