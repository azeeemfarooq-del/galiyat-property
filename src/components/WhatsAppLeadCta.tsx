import React, { useState } from 'react';
import { Phone, MessageSquare, Sparkles, Check, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';

export const WhatsAppLeadCta: React.FC = () => {
  const [preferredLoc, setPreferredLoc] = useState('Nathia Gali');
  const [preferredType, setPreferredType] = useState('Plot');
  const [approxBudget, setApproxBudget] = useState('Open to Options');

  const customMessage = `Assalam-o-Alaikum, I am interested in property opportunities in Galiyat.\n\n*Preferred Location:* ${preferredLoc}\n*Type:* ${preferredType}\n*Budget:* ${approxBudget}\n\nPlease share available options and price guidance.`;

  return (
    <section id="whatsapp-lead-cta" className="py-20 bg-gradient-to-br from-[#173F2A] via-[#2D5F3F] to-[#0f2e1e] text-white relative overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-96 h-96 rounded-full bg-[#C9A227]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/20 border border-[#C9A227]/40 text-[#C9A227] text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct Consultant WhatsApp</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
          Looking for Property in Galiyat?
        </h2>

        <p className="text-base sm:text-xl text-emerald-100/90 max-w-2xl mx-auto leading-relaxed mb-8">
          Tell us your preferred location, property type and budget. We provide real-time updates on available plots and vacation chalets.
        </p>

        {/* Quick Configurator Box for customized WhatsApp message */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-5 sm:p-7 border border-white/15 max-w-3xl mx-auto mb-8 text-left">
          <div className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-4 flex items-center justify-between">
            <span>Customize Your 1-Click WhatsApp Inquiry:</span>
            <span className="text-stone-300 font-normal">Pre-formats your message</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
            <div>
              <label htmlFor="quick-lead-location" className="text-[11px] text-emerald-200 block mb-1 font-semibold">Location</label>
              <select
                id="quick-lead-location"
                value={preferredLoc}
                onChange={(e) => setPreferredLoc(e.target.value)}
                className="w-full bg-white/15 border border-white/25 rounded-lg px-3 py-2 text-xs font-semibold text-white outline-none [&_option]:text-black"
              >
                <option value="Nathia Gali">Nathia Gali</option>
                <option value="Ayubia">Ayubia</option>
                <option value="Khanaspur">Khanaspur</option>
                <option value="Kalabagh">Kalabagh</option>
                <option value="Murree">Murree</option>
                <option value="Dunga Gali">Dunga Gali</option>
                <option value="Changla Gali">Changla Gali</option>
              </select>
            </div>

            <div>
              <label htmlFor="quick-lead-type" className="text-[11px] text-emerald-200 block mb-1 font-semibold">Property Type</label>
              <select
                id="quick-lead-type"
                value={preferredType}
                onChange={(e) => setPreferredType(e.target.value)}
                className="w-full bg-white/15 border border-white/25 rounded-lg px-3 py-2 text-xs font-semibold text-white outline-none [&_option]:text-black"
              >
                <option value="Plot (10 Marla / 1 Kanal)">Plot</option>
                <option value="Cottage (Vacation Chalet)">Cottage</option>
                <option value="House / Villa">House / Villa</option>
                <option value="Investment Land">Investment Land</option>
                <option value="Commercial Land">Commercial Land</option>
              </select>
            </div>

            <div>
              <label htmlFor="quick-lead-budget" className="text-[11px] text-emerald-200 block mb-1 font-semibold">Budget Range</label>
              <select
                id="quick-lead-budget"
                value={approxBudget}
                onChange={(e) => setApproxBudget(e.target.value)}
                className="w-full bg-white/15 border border-white/25 rounded-lg px-3 py-2 text-xs font-semibold text-white outline-none [&_option]:text-black"
              >
                <option value="Under 50 Lacs">Under 50 Lacs</option>
                <option value="50 Lacs - 1 Crore">50 Lacs - 1 Crore</option>
                <option value="1 Crore - 2.5 Crore">1 Crore - 2.5 Crore</option>
                <option value="2.5 Crore+">2.5 Crore+</option>
                <option value="Open to Options">Open to Options</option>
              </select>
            </div>
          </div>

          <div className="bg-black/40 p-3 rounded-lg border border-white/10 font-mono text-[11px] text-emerald-200 line-clamp-2">
            <strong>Preview Message:</strong> "{customMessage.replace(/\n/g, ' ')}"
          </div>
        </div>

        {/* Primary Large CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="lead-cta-whatsapp-btn"
            href={`https://wa.me/923009881240?text=${encodeURIComponent(customMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-base font-extrabold shadow-2xl transition-all transform hover:-translate-y-1"
          >
            <Phone className="w-5 h-5 fill-white" />
            <span>Chat on WhatsApp</span>
            <span className="bg-black/25 text-xs px-2.5 py-1 rounded font-mono font-normal">
              {BUSINESS_INFO.whatsappDisplay}
            </span>
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-emerald-200/80 font-medium">
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Direct Consultant Access</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>No Obligation Consultation</span>
          </span>
        </div>
      </div>
    </section>
  );
};
