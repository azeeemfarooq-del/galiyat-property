import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Trees, Home as HomeIcon, Mountain } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenChat?: () => void;
  onOpenLiveChat?: () => void;
  onSelectLocation?: (loc: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat, onOpenLiveChat }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleOpenChat = () => {
    if (onOpenLiveChat) onOpenLiveChat();
    else if (onOpenChat) onOpenChat();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'Locations', href: '#locations' },
    { label: 'Services', href: '#services' },
    { label: 'Sell Your Property', href: '#sell-property' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Guide', href: '#guide' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#173F2A]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#2D5F3F]/40'
          : 'bg-gradient-to-b from-[#173F2A]/90 via-[#173F2A]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <a href="#home" id="brand-logo-link" className="flex items-center gap-3 group text-left">
            {/* Custom Mountain + House + Pine icon */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2D5F3F] to-[#173F2A] border border-[#C9A227]/40 flex items-center justify-center shadow-md relative overflow-hidden group-hover:border-[#C9A227] transition-all">
              <div className="absolute inset-0 bg-[#C9A227]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-center text-[#C9A227]">
                <Mountain className="w-6 h-6 text-[#C9A227]" />
                <HomeIcon className="w-3.5 h-3.5 text-white absolute bottom-0.5 right-0.5" />
                <Trees className="w-3 h-3 text-emerald-400 absolute bottom-0.5 left-0.5" />
              </div>
            </div>
            <div>
              <div className="text-white font-bold text-lg sm:text-xl tracking-tight leading-tight flex items-center gap-1.5">
                <span>Galiyat Property</span>
                <span className="text-[#C9A227] text-xs uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#C9A227]/15 border border-[#C9A227]/30">
                  Consultant
                </span>
              </div>
              <p className="text-emerald-200/80 text-xs font-medium tracking-wide">
                {BUSINESS_INFO.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-emerald-100/90 hover:text-[#C9A227] text-sm font-medium transition-colors tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C9A227] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action & WhatsApp Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleOpenChat}
              className="px-3 py-2 text-xs font-semibold text-emerald-100 bg-[#2D5F3F]/60 hover:bg-[#2D5F3F] border border-emerald-500/30 rounded-lg flex items-center gap-1.5 transition-all shadow-sm"
              title="Open Instant Auto-Response Assistant"
            >
              <MessageCircle className="w-4 h-4 text-[#C9A227]" />
              <span className="hidden md:inline">Instant Assistant</span>
            </button>

            <a
              id="header-whatsapp-cta"
              href={`https://wa.me/923009881240?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsAppMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs md:text-sm px-4 py-2.5 rounded-lg shadow-md hover:shadow-emerald-900/40 transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 fill-white" />
              <span>{BUSINESS_INFO.whatsappDisplay}</span>
              <span className="hidden xl:inline bg-black/15 text-[11px] px-1.5 py-0.5 rounded font-normal">WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`https://wa.me/923009881240?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsAppMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#25D366] text-white rounded-lg"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-emerald-100 hover:bg-[#2D5F3F]/60 border border-emerald-500/30"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pb-4 pt-2 border-t border-emerald-700/40 bg-[#173F2A] rounded-2xl p-4 shadow-xl text-left animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-emerald-100 hover:text-[#C9A227] text-sm font-medium py-1.5 px-3 rounded-lg hover:bg-[#2D5F3F]/40 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-emerald-700/40 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleOpenChat();
                  }}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#2D5F3F] text-emerald-100 text-sm font-medium flex items-center justify-center gap-2 border border-emerald-500/30"
                >
                  <MessageCircle className="w-4 h-4 text-[#C9A227]" />
                  <span>Ask Instant Auto-Response Assistant</span>
                </button>
                <a
                  href={`https://wa.me/923009881240?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsAppMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#25D366] text-white font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Chat on WhatsApp ({BUSINESS_INFO.whatsappDisplay})</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
