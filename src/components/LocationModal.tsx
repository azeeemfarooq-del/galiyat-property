import React from 'react';
import { X, Mountain, MapPin, Compass, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { LocationGuide, PropertyLocation } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface LocationModalProps {
  location: LocationGuide | null;
  onClose: () => void;
  onFilterLocation: (loc: PropertyLocation) => void;
}

export const LocationModal: React.FC<LocationModalProps> = ({
  location,
  onClose,
  onFilterLocation,
}) => {
  if (!location) return null;

  return (
    <div
      id="location-guide-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 text-left relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
          aria-label="Close location modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Image */}
        <div className="relative h-60 w-full overflow-hidden rounded-t-3xl">
          <img
            src={location.imageUrl}
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-xs text-[#C9A227] font-bold uppercase tracking-wider block mb-1">
              {location.subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {location.name}
            </h2>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Quick Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#F8F8F5] p-3 rounded-xl border border-stone-200 flex items-center gap-3">
              <Mountain className="w-5 h-5 text-[#2D5F3F]" />
              <div>
                <span className="text-[10px] text-stone-400 uppercase font-bold block">Elevation</span>
                <span className="text-xs font-bold text-stone-900">{location.elevation}</span>
              </div>
            </div>

            <div className="bg-[#F8F8F5] p-3 rounded-xl border border-stone-200 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#2D5F3F]" />
              <div>
                <span className="text-[10px] text-stone-400 uppercase font-bold block">Distance / Access</span>
                <span className="text-xs font-bold text-stone-900">{location.distanceFromMurreeOrIslamabad}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold text-[#173F2A] uppercase tracking-wider mb-2">
              About {location.name} Property Landscape
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {location.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="text-xs font-bold text-[#173F2A] uppercase tracking-wider mb-3">
              Location Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {location.highlights.map((hl, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D5F3F] shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Property Types */}
          <div>
            <h3 className="text-xs font-bold text-[#173F2A] uppercase tracking-wider mb-2">
              Dominant Property Types
            </h3>
            <div className="flex flex-wrap gap-2">
              {location.keyPropertyTypes.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-emerald-50 text-[#173F2A] border border-emerald-200 text-xs font-semibold rounded-lg">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                onFilterLocation(location.name);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#2D5F3F] hover:bg-[#173F2A] text-white text-xs font-bold transition-all"
            >
              <span>Explore Listings in {location.name}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href={`https://wa.me/923009881240?text=${encodeURIComponent(
                `Assalam-o-Alaikum, I am interested in property options specifically in ${location.name}. Please share available plots/cottages.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
