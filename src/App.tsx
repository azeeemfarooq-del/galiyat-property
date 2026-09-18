import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertySearchBar } from './components/PropertySearchBar';
import { TrustBadges } from './components/TrustBadges';
import { ExploreGaliyat } from './components/ExploreGaliyat';
import { PropertyCategories } from './components/PropertyCategories';
import { FeaturedProperties } from './components/FeaturedProperties';
import { LatestProperties } from './components/LatestProperties';
import { WhyGaliyat } from './components/WhyGaliyat';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { SellYourProperty } from './components/SellYourProperty';
import { AboutUs } from './components/AboutUs';
import { PropertyGuide } from './components/PropertyGuide';
import { ClientReviews } from './components/ClientReviews';
import { WhatsAppLeadCta } from './components/WhatsAppLeadCta';
import { SocialMedia } from './components/SocialMedia';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LiveChatWidget } from './components/LiveChatWidget';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { ArticleModal } from './components/ArticleModal';
import { LocationModal } from './components/LocationModal';

import { Property, LocationGuide, GuideArticle, PropertyLocation, PropertyType, PropertyPurpose } from './types';
import { SAMPLE_PROPERTIES } from './data/mockData';

export default function App() {
  // Navigation and Search Filters
  const [selectedLocation, setSelectedLocation] = useState<PropertyLocation | 'All Locations'>('All Locations');
  const [selectedType, setSelectedType] = useState<PropertyType | 'All Types'>('All Types');
  const [searchBudget, setSearchBudget] = useState<string>('All Budgets');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Modals & Chat State
  const [detailProperty, setDetailProperty] = useState<Property | null>(null);
  const [detailArticle, setDetailArticle] = useState<GuideArticle | null>(null);
  const [detailLocation, setDetailLocation] = useState<LocationGuide | null>(null);
  const [isLiveChatOpen, setIsLiveChatOpen] = useState(false);

  // Search trigger handler
  const handleSearch = (filters: {
    type?: PropertyType | 'All';
    location?: PropertyLocation | 'All';
    purpose?: PropertyPurpose | 'All';
    budget?: string;
    keyword?: string;
  }) => {
    if (filters.location) {
      setSelectedLocation(filters.location === 'All' ? 'All Locations' : filters.location);
    }
    if (filters.type) {
      setSelectedType(filters.type === 'All' ? 'All Types' : filters.type);
    }
    if (filters.budget !== undefined) {
      setSearchBudget(filters.budget);
    }
    if (filters.keyword !== undefined) {
      setSearchQuery(filters.keyword);
    }

    // Smooth scroll to latest properties section
    const targetElement = document.getElementById('latest-properties');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Category card click handler
  const handleCategorySelect = (type: PropertyType | 'All' | 'All Types') => {
    setSelectedType(type === 'All' ? 'All Types' : type);
    const targetElement = document.getElementById('latest-properties');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Location filter from modal or cards
  const handleLocationSelect = (loc: PropertyLocation) => {
    setSelectedLocation(loc);
    const targetElement = document.getElementById('latest-properties');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-stone-800 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-900">
      {/* 1. Sticky Navigation */}
      <Navbar
        onOpenLiveChat={() => setIsLiveChatOpen(true)}
        onOpenChat={() => setIsLiveChatOpen(true)}
      />

      {/* 2. Hero Section */}
      <Hero
        onExploreClick={() => {
          document.getElementById('latest-properties')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenInquiry={() => {
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3. Property Search Bar (Overlapping Hero) */}
      <PropertySearchBar onSearch={handleSearch} />

      {/* 4. Trust Badges */}
      <TrustBadges />

      {/* 5. Explore Galiyat Locations */}
      <ExploreGaliyat
        onSelectLocation={handleLocationSelect}
        onOpenLocationDetail={(locGuide) => setDetailLocation(locGuide)}
      />

      {/* 6. Property Categories */}
      <PropertyCategories onSelectCategory={handleCategorySelect} />

      {/* 7. Featured Properties */}
      <FeaturedProperties
        properties={SAMPLE_PROPERTIES}
        onSelectProperty={(prop) => setDetailProperty(prop)}
        onViewDetails={(prop) => setDetailProperty(prop)}
      />

      {/* 8. Latest Properties (Filterable Hub) */}
      <LatestProperties
        properties={SAMPLE_PROPERTIES}
        selectedLocation={selectedLocation}
        selectedType={selectedType}
        searchBudget={searchBudget}
        searchQuery={searchQuery}
        onLocationChange={setSelectedLocation}
        onTypeChange={setSelectedType}
        onBudgetChange={setSearchBudget}
        onQueryChange={setSearchQuery}
        onSelectProperty={(prop) => setDetailProperty(prop)}
        onViewDetails={(prop) => setDetailProperty(prop)}
      />

      {/* 9. Why Galiyat */}
      <WhyGaliyat />

      {/* 10. Why Choose Us */}
      <WhyChooseUs />

      {/* 11. How It Works */}
      <HowItWorks />

      {/* 12. Sell Your Property */}
      <SellYourProperty />

      {/* 13. About Us */}
      <AboutUs />

      {/* 14. Galiyat Property Guide */}
      <PropertyGuide onReadArticle={(article) => setDetailArticle(article)} />

      {/* 15. Client Reviews */}
      <ClientReviews />

      {/* 16. WhatsApp Lead CTA Banner */}
      <WhatsAppLeadCta />

      {/* 17. Social Media */}
      <SocialMedia />

      {/* 18. Contact & Automated Inquiry Analysis Section */}
      <ContactSection onOpenLiveChat={() => setIsLiveChatOpen(true)} />

      {/* 19. Footer */}
      <Footer onSelectLocation={(loc) => handleLocationSelect(loc as PropertyLocation)} />

      {/* Floating WhatsApp and Assistant Trigger */}
      <FloatingWhatsApp
        isChatOpen={isLiveChatOpen}
        onOpenChat={() => setIsLiveChatOpen(true)}
      />

      {/* Integrated Live Chat Widget with Auto-Responses */}
      <LiveChatWidget
        isOpen={isLiveChatOpen}
        onClose={() => setIsLiveChatOpen(false)}
      />

      {/* Interactive Modals */}
      <PropertyDetailModal
        property={detailProperty}
        onClose={() => setDetailProperty(null)}
      />

      <ArticleModal
        article={detailArticle}
        onClose={() => setDetailArticle(null)}
      />

      <LocationModal
        location={detailLocation}
        onClose={() => setDetailLocation(null)}
        onFilterLocation={handleLocationSelect}
      />
    </div>
  );
}
