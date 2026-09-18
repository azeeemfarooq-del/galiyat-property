import React from 'react';
import { Phone, Eye, MapPin, Sparkles, AlertCircle } from 'lucide-react';
import { Property } from '../types';
import { BUSINESS_INFO, SAMPLE_PROPERTIES } from '../data/mockData';

interface FeaturedPropertiesProps {
  properties?: Property[];
  onViewDetails?: (property: Property) => void;
  onSelectProperty?: (property: Property) => void;
}

export const FeaturedProperties: React.FC<FeaturedPropertiesProps> = ({
  properties = SAMPLE_PROPERTIES,
  onViewDetails,
  onSelectProperty,
}) => {
  const safeProperties = properties || SAMPLE_PROPERTIES;
  const featured = safeProperties.filter((p) => p.isFeatured).slice(0, 4);

  const handleSelect = (prop: Property) => {
    if (onSelectProperty) onSelectProperty(prop);
    else if (onViewDetails) onViewDetails(prop);
  };

  return (
    <section id="properties" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#C9A227] text-xs font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED OPPORTUNITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173F2A] tracking-tight">
              Properties Worth Exploring
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-2">
              Explore selected property opportunities in Galiyat and surrounding areas.
            </p>
          </div>

          {/* Sample Listing Disclaimer Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200 text-stone-600 text-xs self-start md:self-auto">
            <AlertCircle className="w-4 h-4 text-stone-400 shrink-0" />
            <span>Sample listings for illustrative layout</span>
          </div>
        </div>

        {/* 4 Featured Property Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((prop) => (
            <div
              key={prop.id}
              id={`featured-prop-${prop.id}`}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group text-left"
            >
              {/* Image & Badges */}
              <div className="relative h-56 overflow-hidden bg-stone-100">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${prop.imageUrl}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Type Badge */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="px-2.5 py-1 rounded-md bg-[#173F2A]/90 backdrop-blur-sm text-emerald-200 text-xs font-bold border border-emerald-400/30">
                    {prop.type}
                  </span>
                  {prop.isSampleListing && (
                    <span className="px-2 py-0.5 rounded bg-amber-500/90 text-white text-[10px] font-semibold uppercase tracking-wider">
                      Sample Listing
                    </span>
                  )}
                </div>

                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-bold backdrop-blur-sm shadow-sm ${
                      prop.status === 'Available'
                        ? 'bg-emerald-600/90 text-white'
                        : prop.status === 'Under Discussion'
                        ? 'bg-amber-600/90 text-white'
                        : 'bg-stone-700/90 text-white'
                    }`}
                  >
                    {prop.status}
                  </span>
                </div>

                {/* Location overlay */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                    <span>{prop.location}, Galiyat</span>
                  </span>
                  <span className="bg-black/40 px-2 py-0.5 rounded font-mono text-[11px]">
                    {prop.size}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#173F2A] text-base mb-1.5 line-clamp-1 group-hover:text-[#2D5F3F] transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    {prop.description}
                  </p>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 uppercase font-semibold block">Price</span>
                      <span className="text-xs font-bold text-[#2D5F3F]">{prop.price}</span>
                    </div>
                    {prop.elevation && (
                      <span className="text-[11px] font-medium text-stone-500">
                        Alt: {prop.elevation}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 pt-3 border-t border-stone-100 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleSelect(prop)}
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-stone-600" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={`https://wa.me/923009881240?text=${encodeURIComponent(
                      `Assalam-o-Alaikum, I am inquiring about '${prop.title}' (${prop.size} in ${prop.location}). Please share current availability and details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5 fill-white" />
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
