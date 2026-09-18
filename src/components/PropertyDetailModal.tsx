import React from 'react';
import { X, Phone, MapPin, Eye, CheckCircle2, ShieldAlert, Mountain, Compass, Car, Sparkles } from 'lucide-react';
import { Property } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div
      id="property-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 text-left relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-stone-900 rounded-t-3xl">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-lg bg-[#173F2A]/95 text-emerald-200 text-xs font-bold border border-emerald-400/30">
              {property.type}
            </span>
            {property.isSampleListing && (
              <span className="px-2.5 py-1 rounded-lg bg-amber-500 text-white text-xs font-semibold uppercase tracking-wider">
                Sample Listing
              </span>
            )}
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-1.5 text-xs text-[#C9A227] font-semibold mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{property.location}, Galiyat, Pakistan</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {property.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#F8F8F5] p-3 rounded-xl border border-stone-200">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">Size</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">{property.size}</span>
            </div>
            <div className="bg-[#F8F8F5] p-3 rounded-xl border border-stone-200">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">Status</span>
              <span className="text-xs sm:text-sm font-bold text-[#2D5F3F]">{property.status}</span>
            </div>
            <div className="bg-[#F8F8F5] p-3 rounded-xl border border-stone-200">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">Elevation</span>
              <span className="text-xs sm:text-sm font-bold text-stone-900">{property.elevation || '7,800+ ft'}</span>
            </div>
            <div className="bg-[#F8F8F5] p-3 rounded-xl border border-stone-200">
              <span className="text-[10px] text-stone-400 uppercase font-bold block">Price Guidance</span>
              <span className="text-xs font-bold text-[#2D5F3F]">{property.price}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-[#173F2A] uppercase tracking-wider mb-2">
              Property Description & Setting
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Access & View Details */}
          {(property.roadAccess || property.view) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {property.roadAccess && (
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/60 text-xs text-stone-800">
                  <Car className="w-4 h-4 text-[#2D5F3F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173F2A]">Road Access:</strong>
                    <span>{property.roadAccess}</span>
                  </div>
                </div>
              )}
              {property.view && (
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/60 text-xs text-stone-800">
                  <Compass className="w-4 h-4 text-[#2D5F3F] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#173F2A]">Scenic Vista:</strong>
                    <span>{property.view}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Key Features */}
          {property.features && property.features.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-[#173F2A] uppercase tracking-wider mb-3">
                Key Property Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {property.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#2D5F3F] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Transparency Disclaimer */}
          <div className="p-4 rounded-xl bg-stone-100 border border-stone-200 flex items-start gap-3 text-xs text-stone-600">
            <ShieldAlert className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
            <span>
              <strong>Transparency Note:</strong> Property parameters and boundaries are subject to physical verification and revenue record validation (Fard/Inteqal). We coordinate on-ground inspections and revenue audits before any commitment.
            </span>
          </div>

          {/* Action CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-200">
            <div className="text-xs text-stone-500">
              Direct Consultant: <strong className="text-[#173F2A]">{BUSINESS_INFO.whatsappDisplay}</strong>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold"
              >
                Close
              </button>

              <a
                href={`https://wa.me/923009881240?text=${encodeURIComponent(
                  `Assalam-o-Alaikum, I am inquiring about '${property.title}' in ${property.location} (${property.size}). Please share available options and price guidance.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
