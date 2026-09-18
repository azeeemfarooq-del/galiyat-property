import React from 'react';
import { Youtube, Facebook, Twitter, Camera, Video, Compass, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const SocialMedia: React.FC = () => {
  const contentThemes = [
    { title: 'Galiyat Scenery & Weather', desc: 'Real-time seasonal weather, snowfall updates & pine forest views.' },
    { title: 'Property Video Walkthroughs', desc: 'Site tours showing road access, slope topography & valley vistas.' },
    { title: 'Nathia Gali & Ayubia Spotlights', desc: 'Deep dives into specific sectors, water access & local market updates.' },
    { title: 'Investment & Due Diligence', desc: 'Tips on revenue verification, Fard/Inteqal mutation & construction.' },
  ];

  return (
    <section id="social" className="py-16 bg-white border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D5F3F] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Stay Connected
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173F2A] tracking-tight mb-3">
            Follow Galiyat Property Consultant
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            Watch drone property tours, scenic hill station updates, and due diligence advice across our social platforms.
          </p>
        </div>

        {/* Social Channel Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 text-left">
          {/* Facebook */}
          <a
            id="social-facebook-link"
            href={BUSINESS_INFO.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#F8F8F5] border border-stone-200 hover:border-blue-500 hover:shadow-md transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <Facebook className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h3 className="font-bold text-[#173F2A] text-base group-hover:text-blue-600">
                Facebook Page
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Daily Galiyat photos & new listings
              </p>
            </div>
          </a>

          {/* YouTube */}
          <a
            id="social-youtube-link"
            href={BUSINESS_INFO.socialLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#F8F8F5] border border-stone-200 hover:border-red-500 hover:shadow-md transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <Youtube className="w-6 h-6 fill-white" />
            </div>
            <div>
              <h3 className="font-bold text-[#173F2A] text-base group-hover:text-red-600">
                YouTube Channel
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Drone videos & property walkthroughs
              </p>
            </div>
          </a>

          {/* X / Twitter */}
          <a
            id="social-twitter-link"
            href={BUSINESS_INFO.socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#F8F8F5] border border-stone-200 hover:border-black hover:shadow-md transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <Twitter className="w-5 h-5 fill-white" />
            </div>
            <div>
              <h3 className="font-bold text-[#173F2A] text-base group-hover:text-black">
                X (Twitter)
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Market insights & route conditions
              </p>
            </div>
          </a>
        </div>

        {/* Content Themes Strip */}
        <div className="bg-[#F8F8F5] rounded-2xl p-6 border border-stone-200 text-left">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold text-[#173F2A] uppercase tracking-wider">
            <Camera className="w-4 h-4 text-[#2D5F3F]" />
            <span>Featured Content Themes We Share:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contentThemes.map((item, idx) => (
              <div key={idx} className="p-3 bg-white rounded-xl border border-stone-200/80">
                <h4 className="text-xs font-bold text-[#2D5F3F] mb-1">{item.title}</h4>
                <p className="text-[11px] text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
