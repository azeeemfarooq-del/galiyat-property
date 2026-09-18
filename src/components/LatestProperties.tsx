import React, { useState, useEffect } from 'react';
import { Phone, Eye, Filter, MapPin, Building, Sparkles, Search } from 'lucide-react';
import { Property, PropertyType, PropertyLocation, PropertyStatus } from '../types';
import { SAMPLE_PROPERTIES, BUSINESS_INFO } from '../data/mockData';

interface LatestPropertiesProps {
  properties?: Property[];
  onViewDetails?: (property: Property) => void;
  onSelectProperty?: (property: Property) => void;
  activeTypeFilter?: PropertyType | 'All' | 'All Types';
  activeLocationFilter?: PropertyLocation | 'All' | 'All Locations';
  selectedLocation?: PropertyLocation | 'All' | 'All Locations';
  selectedType?: PropertyType | 'All' | 'All Types';
  searchBudget?: string;
  searchQuery?: string;
  onLocationChange?: (location: any) => void;
  onTypeChange?: (type: any) => void;
  onBudgetChange?: (budget: string) => void;
  onQueryChange?: (query: string) => void;
}

export const LatestProperties: React.FC<LatestPropertiesProps> = ({
  properties = SAMPLE_PROPERTIES,
  onViewDetails,
  onSelectProperty,
  activeTypeFilter = 'All',
  activeLocationFilter = 'All',
  selectedLocation: propLocation,
  selectedType: propType,
  searchBudget: propBudget = '',
  searchQuery: propQuery = '',
  onLocationChange,
  onTypeChange,
  onBudgetChange,
  onQueryChange,
}) => {
  const safeProperties = properties && Array.isArray(properties) ? properties : SAMPLE_PROPERTIES;

  const initialType = propType && propType !== 'All Types' ? propType : activeTypeFilter !== 'All Types' ? activeTypeFilter : 'All';
  const initialLocation = propLocation && propLocation !== 'All Locations' ? propLocation : activeLocationFilter !== 'All Locations' ? activeLocationFilter : 'All';

  const [selectedType, setSelectedTypeState] = useState<string>(initialType);
  const [selectedLocation, setSelectedLocationState] = useState<string>(initialLocation);
  const [selectedStatus, setSelectedStatus] = useState<PropertyStatus | 'All'>('All');
  const [internalQuery, setInternalQuery] = useState<string>(propQuery || '');

  // Keep state in sync with parent props
  useEffect(() => {
    if (propType) {
      setSelectedTypeState(propType === 'All Types' ? 'All' : propType);
    }
  }, [propType]);

  useEffect(() => {
    if (propLocation) {
      setSelectedLocationState(propLocation === 'All Locations' ? 'All' : propLocation);
    }
  }, [propLocation]);

  useEffect(() => {
    if (propQuery !== undefined) {
      setInternalQuery(propQuery);
    }
  }, [propQuery]);

  const handleTypeChange = (type: string) => {
    setSelectedTypeState(type);
    if (onTypeChange) onTypeChange(type === 'All' ? 'All Types' : type);
  };

  const handleLocationChange = (loc: string) => {
    setSelectedLocationState(loc);
    if (onLocationChange) onLocationChange(loc === 'All' ? 'All Locations' : loc);
  };

  const handleQueryChange = (q: string) => {
    setInternalQuery(q);
    if (onQueryChange) onQueryChange(q);
  };

  const handleSelect = (prop: Property) => {
    if (onSelectProperty) onSelectProperty(prop);
    else if (onViewDetails) onViewDetails(prop);
  };

  const filteredProperties = safeProperties.filter((p) => {
    const matchesType =
      selectedType === 'All' || selectedType === 'All Types' || p.type === selectedType;
    const matchesLocation =
      selectedLocation === 'All' ||
      selectedLocation === 'All Locations' ||
      p.location.toLowerCase() === selectedLocation.toLowerCase() ||
      (selectedLocation === 'Galiyat' && (p.location === 'Galiyat' || p.location === 'Nathia Gali' || p.location === 'Ayubia' || p.location === 'Khanaspur' || p.location === 'Kalabagh' || p.location === 'Dunga Gali' || p.location === 'Changla Gali' || p.location === 'Khairagali'));
    const matchesStatus = selectedStatus === 'All' || p.status === selectedStatus;

    const queryTerm = internalQuery.trim().toLowerCase();
    const matchesQuery =
      !queryTerm ||
      p.title.toLowerCase().includes(queryTerm) ||
      p.description.toLowerCase().includes(queryTerm) ||
      p.location.toLowerCase().includes(queryTerm) ||
      p.type.toLowerCase().includes(queryTerm) ||
      p.size.toLowerCase().includes(queryTerm);

    return matchesType && matchesLocation && matchesStatus && matchesQuery;
  });

  const propertyTypes: string[] = [
    'All',
    'Plot',
    'Cottage',
    'House',
    'Villa',
    'Commercial Property',
    'Investment Opportunity',
  ];

  const statuses: (PropertyStatus | 'All')[] = ['All', 'Available', 'Under Discussion', 'Sold'];

  const resetAllFilters = () => {
    handleTypeChange('All');
    handleLocationChange('All');
    setSelectedStatus('All');
    handleQueryChange('');
    if (onBudgetChange) onBudgetChange('All Budgets');
  };

  return (
    <section id="latest-properties" className="py-20 bg-[#F8F8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D5F3F] bg-emerald-100/70 px-3 py-1 rounded-full border border-emerald-200">
            Portfolio Catalogue
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173F2A] tracking-tight mt-3 mb-3">
            Latest Property Opportunities
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Browse active plots, vacation cottages, hillside villas, and strategic mountain investments across the Galiyat region.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200 shadow-sm mb-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-700 uppercase tracking-wider">
              <Filter className="w-4 h-4 text-[#2D5F3F]" />
              <span>Filter By Type:</span>
            </div>

            {/* Type Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleTypeChange(type)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedType === type
                      ? 'bg-[#2D5F3F] text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Location & Status Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-1">
            <div className="flex items-center gap-2">
              <label htmlFor="filter-location" className="text-xs font-bold text-stone-600 shrink-0">
                Location:
              </label>
              <select
                id="filter-location"
                value={selectedLocation}
                onChange={(e) => handleLocationChange(e.target.value)}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-xs font-semibold text-stone-800 outline-none focus:ring-1 focus:ring-[#2D5F3F]"
              >
                <option value="All">All Locations in Galiyat</option>
                <option value="Galiyat">Galiyat (General)</option>
                <option value="Nathia Gali">Nathia Gali / Nathaigali</option>
                <option value="Ayubia">Ayubia</option>
                <option value="Khanaspur">Khanaspur</option>
                <option value="Kalabagh">Kalabagh</option>
                <option value="Murree">Murree</option>
                <option value="Dunga Gali">Dunga Gali</option>
                <option value="Changla Gali">Changla Gali</option>
                <option value="Khairagali">Khairagali</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="filter-status" className="text-xs font-bold text-stone-600 shrink-0">
                Status:
              </label>
              <div className="flex items-center gap-1 w-full">
                {statuses.map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStatus(st)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                      selectedStatus === st
                        ? 'bg-[#173F2A] text-white border-[#173F2A]'
                        : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-stone-500 font-medium sm:col-span-2 md:col-span-1">
              <span>Showing: <strong className="text-stone-800">{filteredProperties.length}</strong> opportunities</span>
              {(selectedType !== 'All' || selectedLocation !== 'All' || selectedStatus !== 'All' || internalQuery) && (
                <button
                  onClick={resetAllFilters}
                  className="text-[#2D5F3F] hover:underline font-semibold"
                >
                  Reset filters
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 max-w-lg mx-auto">
            <Building className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-stone-800 mb-1">No matching sample listings found</h3>
            <p className="text-xs sm:text-sm text-stone-500 mb-6">
              We have private off-market plots and cottages that may not be displayed publicly. Contact us directly on WhatsApp with your specific criteria.
            </p>
            <a
              href={`https://wa.me/923009881240?text=${encodeURIComponent(
                `Assalam-o-Alaikum, I am looking for a ${selectedType !== 'All' ? selectedType : 'property'} in ${
                  selectedLocation !== 'All' ? selectedLocation : 'Galiyat'
                }. Please share off-market options.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Inquire via WhatsApp (03009881240)</span>
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                id={`property-item-${prop.id}`}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition-all flex flex-col group text-left"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-stone-100">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('${prop.imageUrl}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Top Badges */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                    <span className="px-2 py-0.5 rounded bg-[#173F2A]/90 text-emerald-200 text-[11px] font-bold">
                      {prop.type}
                    </span>
                    {prop.isSampleListing && (
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/90 text-white text-[9px] font-bold uppercase tracking-wider">
                        Sample
                      </span>
                    )}
                  </div>

                  <div className="absolute top-2.5 right-2.5">
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-bold backdrop-blur-sm shadow-xs ${
                        prop.status === 'Available'
                          ? 'bg-emerald-600 text-white'
                          : prop.status === 'Under Discussion'
                          ? 'bg-amber-600 text-white'
                          : 'bg-stone-700 text-white'
                      }`}
                    >
                      {prop.status}
                    </span>
                  </div>

                  {/* Location & Size */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C9A227]" />
                      <span>{prop.location}</span>
                    </span>
                    <span className="bg-black/50 px-2 py-0.5 rounded font-mono text-[11px]">
                      {prop.size}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-[#173F2A] text-sm mb-1 line-clamp-1 group-hover:text-[#2D5F3F]">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-3">
                      {prop.description}
                    </p>

                    <div className="text-xs font-bold text-[#2D5F3F] pt-2 border-t border-stone-100">
                      {prop.price}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="mt-4 pt-3 border-t border-stone-100 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleSelect(prop)}
                      className="py-2 px-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <a
                      href={`https://wa.me/923009881240?text=${encodeURIComponent(
                        `Assalam-o-Alaikum, I am inquiring about '${prop.title}' in ${prop.location} (${prop.size}). Please share details.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center justify-center gap-1 transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
