import React from 'react';
import { Phone, Mountain, Home as HomeIcon, Trees, Facebook, Youtube, Twitter, ArrowUp, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

interface FooterProps {
  onSelectLocation?: (loc: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Properties', href: '#properties' },
    { label: 'Locations', href: '#locations' },
    { label: 'Services', href: '#services' },
    { label: 'Sell Your Property', href: '#sell-property' },
    { label: 'About Us', href: '#about-us' },
    { label: 'Property Guide', href: '#guide' },
    { label: 'Contact', href: '#contact' },
  ];

  const locationsList = [
    'Galiyat',
    'Nathia Gali',
    'Ayubia',
    'Khanaspur',
    'Kalabagh',
    'Murree',
    'Dunga Gali',
    'Changla Gali',
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#173F2A] text-emerald-100/90 pt-16 pb-12 border-t border-emerald-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-800/80">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2D5F3F] to-[#0f2e1e] border border-[#C9A227]/50 flex items-center justify-center relative">
                <Mountain className="w-5 h-5 text-[#C9A227]" />
                <HomeIcon className="w-3 h-3 text-white absolute bottom-0.5 right-0.5" />
                <Trees className="w-2.5 h-2.5 text-emerald-300 absolute bottom-0.5 left-0.5" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base tracking-tight leading-tight">
                  Galiyat Property Consultant
                </h3>
                <p className="text-xs text-[#C9A227] font-semibold">
                  {BUSINESS_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-emerald-200/80 leading-relaxed">
              Property consultancy focused on Galiyat, Ayubia, Nathia Gali, Kalabagh, Murree and surrounding areas.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#C9A227] font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Transparent & Verified Guidance</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-emerald-700/60 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#C9A227] transition-colors inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-emerald-700/60 pb-2">
              Hill Stations
            </h4>
            <ul className="space-y-2 text-xs">
              {locationsList.map((loc) => (
                <li key={loc}>
                  <a
                    href="#latest-properties"
                    className="hover:text-[#C9A227] transition-colors inline-block py-0.5"
                  >
                    {loc} Property
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact & WhatsApp */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-emerald-700/60 pb-2">
              Contact Us
            </h4>

            <div className="bg-[#0e271a] p-4 rounded-xl border border-emerald-800">
              <span className="text-[10px] text-emerald-300/80 uppercase font-semibold block mb-1">
                Direct WhatsApp Contact
              </span>
              <div className="text-lg font-black text-white font-mono mb-2">
                {BUSINESS_INFO.whatsappDisplay}
              </div>
              <a
                id="footer-whatsapp-btn"
                href={`https://wa.me/923009881240?text=${encodeURIComponent(BUSINESS_INFO.defaultWhatsAppMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-1">
              <span className="text-[11px] text-emerald-300 block mb-2 font-medium">Follow Our Updates</span>
              <div className="flex items-center gap-2">
                <a
                  href={BUSINESS_INFO.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-300/70">
          <div className="text-center md:text-left">
            <p>© 2026 Galiyat Property Consultant. All Rights Reserved.</p>
            <p className="text-[11px] text-emerald-400/50 mt-0.5">
              Serving Nathia Gali, Ayubia, Khanaspur, Kalabagh, Murree & Abbottabad Region.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a href="#about-us" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#about-us" className="hover:text-white transition-colors">Terms & Conditions</a>
            <span>•</span>
            <a href="#how-it-works" className="hover:text-white transition-colors">Property Disclaimer</a>
            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
