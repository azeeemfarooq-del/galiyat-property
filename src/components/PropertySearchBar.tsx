import React, { useState } from 'react';
import { Search, Home, MapPin, Target, DollarSign, ArrowRight } from 'lucide-react';
import { PropertyType, PropertyLocation, PropertyPurpose } from '../types';

interface PropertySearchBarProps {
  onSearch: (filters: {
    type?: PropertyType | 'All';
    location?: PropertyLocation | 'All';
    purpose?: PropertyPurpose | 'All';
    budget?: string;
  }) => void;
}

export const PropertySearchBar: React.FC<PropertySearchBarProps> = ({ onSearch }) => {
  const [selectedType, setSelectedType] = useState<PropertyType | 'All'>('All');
  const [selectedLocation, setSelectedLocation] = useState<PropertyLocation | 'All'>('All');
  const [selectedPurpose, setSelectedPurpose] = useState<PropertyPurpose | 'All'>('Buy');
  const [budget, setBudget] = useState<string>('');

  const propertyTypes: PropertyType[] = [
    'Plot',
    'Cottage',
    'House',
    'Villa',
    'Commercial Property',
    'Investment Opportunity',
  ];

  const locations: PropertyLocation[] = [
    'Galiyat',
    'Ayubia',
    'Nathia Gali',
    'Khanaspur',
    'Kalabagh',
    'Murree',
    'Dunga Gali',
    'Changla Gali',
  ];

  const purposes: PropertyPurpose[] = ['Buy', 'Sell', 'Investment'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      type: selectedType,
      location: selectedLocation,
      purpose: selectedPurpose,
      budget: budget.trim(),
    });
  };

  return (
    <div className="relative -mt-16 sm:-mt-20 z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        id="property-discovery-card"
        className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-stone-200 p-5 sm:p-7 backdrop-blur-md"
      >
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2D5F3F] animate-pulse" />
            <h2 className="text-sm sm:text-base font-bold text-[#173F2A] tracking-tight uppercase">
              Property Discovery Bar
            </h2>
          </div>
          <span className="text-xs text-stone-700 hidden sm:inline font-medium">
            Find Plots, Cottages & Land across Galiyat
          </span>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {/* 1. What are you looking for? */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="search-property-type" className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wider">
              <Home className="w-3.5 h-3.5 text-[#2D5F3F]" />
              <span>Looking for?</span>
            </label>
            <div className="relative">
              <select
                id="search-property-type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as any)}
                className="w-full bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-[#1F2933] focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none transition-all cursor-pointer appearance-none"
              >
                <option value="All">All Property Types</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500">
                ▼
              </div>
            </div>
          </div>

          {/* 2. Location */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="search-location" className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-[#2D5F3F]" />
              <span>Location</span>
            </label>
            <div className="relative">
              <select
                id="search-location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value as any)}
                className="w-full bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-[#1F2933] focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none transition-all cursor-pointer appearance-none"
              >
                <option value="All">All Galiyat Locations</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc} {loc === 'Nathia Gali' ? '(Nathaigali)' : ''}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500">
                ▼
              </div>
            </div>
          </div>

          {/* 3. Purpose */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="search-purpose" className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wider">
              <Target className="w-3.5 h-3.5 text-[#2D5F3F]" />
              <span>Purpose</span>
            </label>
            <div className="relative">
              <select
                id="search-purpose"
                value={selectedPurpose}
                onChange={(e) => setSelectedPurpose(e.target.value as any)}
                className="w-full bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-[#1F2933] focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none transition-all cursor-pointer appearance-none"
              >
                {purposes.map((p) => (
                  <option key={p} value={p}>
                    {p} Property
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-stone-500">
                ▼
              </div>
            </div>
          </div>

          {/* 4. Budget & Submit */}
          <div className="space-y-1.5 text-left">
            <label htmlFor="search-budget" className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wider">
              <DollarSign className="w-3.5 h-3.5 text-[#2D5F3F]" />
              <span>Your Budget</span>
            </label>
            <div className="flex gap-2">
              <input
                id="search-budget"
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="e.g. 50 Lacs, 1.5 Crore"
                className="w-full bg-stone-50 hover:bg-stone-100 border border-stone-200 rounded-xl px-3.5 py-3 text-sm font-semibold text-[#1F2933] placeholder:text-stone-400 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none transition-all"
              />
              <button
                id="search-submit-btn"
                type="submit"
                className="shrink-0 bg-[#2D5F3F] hover:bg-[#173F2A] text-white px-4 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-1.5 shadow-md transition-all group"
                title="Find Property"
              >
                <Search className="w-4 h-4 text-[#C9A227]" />
                <span className="hidden xl:inline">Find</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </form>

        <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-600 border-t border-stone-100">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-stone-700">Quick Filters:</span>
            <button
              type="button"
              onClick={() => {
                setSelectedType('Plot');
                setSelectedLocation('Nathia Gali');
                onSearch({ type: 'Plot', location: 'Nathia Gali' });
              }}
              className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-[#2D5F3F]/10 hover:text-[#2D5F3F] transition-colors"
            >
              Nathia Gali Plots
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedType('Cottage');
                setSelectedLocation('Ayubia');
                onSearch({ type: 'Cottage', location: 'Ayubia' });
              }}
              className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-[#2D5F3F]/10 hover:text-[#2D5F3F] transition-colors"
            >
              Ayubia Cottages
            </button>
          </div>
          <span className="text-[11px] text-stone-600 italic">
            *Static sample listings for discovery. Connect on WhatsApp for live off-market inventory.
          </span>
        </div>
      </div>
    </div>
  );
};
