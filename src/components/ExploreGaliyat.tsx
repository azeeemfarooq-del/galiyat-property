import React from 'react';
import { ArrowRight, Mountain, Trees, Compass } from 'lucide-react';
import { LOCATIONS_DATA, ADDITIONAL_LOCATIONS } from '../data/mockData';
import { LocationGuide, PropertyLocation } from '../types';

interface ExploreGaliyatProps {
  onSelectLocation?: (location: PropertyLocation) => void;
  onOpenLocationDetail?: (location: LocationGuide) => void;
}

export const ExploreGaliyat: React.FC<ExploreGaliyatProps> = ({
  onSelectLocation,
  onOpenLocationDetail,
}) => {
  return (
    <section id="locations" className="py-20 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#2D5F3F] text-xs font-bold tracking-widest uppercase mb-3">
            <Trees className="w-3.5 h-3.5" />
            <span>EXPLORE THE BEAUTY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173F2A] tracking-tight mb-4">
            Explore Property Opportunities Across Galiyat
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Discover beautiful locations where nature, lifestyle and property opportunities come together.
          </p>
        </div>

        {/* 6 Premium Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {LOCATIONS_DATA.map((loc) => (
            <div
              key={loc.id}
              id={`location-card-${loc.id}`}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200 h-[380px] sm:h-[420px] flex flex-col justify-end text-left"
            >
              {/* Background Image with Zoom on Hover */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108"
                style={{ backgroundImage: `url('${loc.imageUrl}')` }}
              />

              {/* Multi-gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#173F2A] via-[#173F2A]/60 to-black/20 group-hover:via-[#173F2A]/70 transition-colors" />

              {/* Top Meta Badge */}
              <div className="absolute top-5 left-5 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-emerald-200 text-xs font-semibold border border-white/20">
                  <Mountain className="w-3 h-3 text-[#C9A227]" />
                  <span>{loc.elevation}</span>
                </span>
              </div>

              {/* Card Content at Bottom */}
              <div className="relative z-10 p-6 sm:p-7 text-white">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {loc.name}
                  {loc.name === 'Nathia Gali' && (
                    <span className="text-xs font-normal text-emerald-200/90 ml-2 tracking-normal">
                      (Nathaigali)
                    </span>
                  )}
                </h3>

                <p className="text-sm text-emerald-100/90 line-clamp-2 mb-5 leading-relaxed font-normal">
                  {loc.description}
                </p>

                <div className="flex items-center gap-3 pt-2 border-t border-white/15">
                  <button
                    onClick={() => onSelectLocation && onSelectLocation(loc.name)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#2D5F3F] hover:bg-[#38744e] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl border border-emerald-400/40 shadow-sm transition-all"
                  >
                    <span>Explore Properties</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenLocationDetail && onOpenLocationDetail(loc)}
                    className="px-3 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-sm border border-white/20 transition-all"
                    title="View Location Guide"
                  >
                    <Compass className="w-4 h-4 text-[#C9A227]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Locations Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F8F8F5] border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-[#173F2A] uppercase tracking-wider mb-1">
              Also Exploring Additional Hill Stations:
            </h4>
            <p className="text-xs sm:text-sm text-stone-600">
              We also consult on select scenic land & cottages in adjoining hamlets.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {ADDITIONAL_LOCATIONS.map((locName) => (
              <button
                key={locName}
                onClick={() => onSelectLocation && onSelectLocation(locName as PropertyLocation)}
                className="px-3.5 py-1.5 rounded-lg bg-white border border-stone-300 hover:border-[#2D5F3F] hover:text-[#2D5F3F] text-xs font-semibold text-stone-700 shadow-2xs transition-all flex items-center gap-1.5"
              >
                <Trees className="w-3 h-3 text-[#2D5F3F]" />
                <span>{locName}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
