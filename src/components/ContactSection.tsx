import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Sparkles, CheckCircle2, Copy, Check, ArrowRight } from 'lucide-react';
import { PropertyLocation, PropertyType, CustomerInquiry } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

interface ContactSectionProps {
  onOpenLiveChat: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenLiveChat }) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    preferredLocation: 'Nathia Gali' as PropertyLocation | 'All Locations',
    propertyType: 'Plot' as PropertyType | 'Any Type',
    budget: '',
    requirement: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryResult, setInquiryResult] = useState<CustomerInquiry | null>(null);
  const [copied, setCopied] = useState(false);

  const locations: (PropertyLocation | 'All Locations')[] = [
    'All Locations',
    'Nathia Gali',
    'Ayubia',
    'Galiyat',
    'Khanaspur',
    'Kalabagh',
    'Murree',
    'Dunga Gali',
    'Changla Gali',
    'Khairagali',
  ];

  const propertyTypes: (PropertyType | 'Any Type')[] = [
    'Any Type',
    'Plot',
    'Cottage',
    'House',
    'Villa',
    'Commercial Property',
    'Investment Opportunity',
  ];

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) {
      alert('Please provide your Name and WhatsApp number.');
      return;
    }

    setIsSubmitting(true);

    // Try server-side auto-response endpoint, or generate comprehensive on-the-fly automated response
    try {
      const res = await fetch('/api/inquiry-auto-reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let autoReplyText = '';
      if (res.ok) {
        const data = await res.json();
        autoReplyText = data.autoResponse;
      } else {
        throw new Error('Fallback to local auto-responder');
      }

      const inquiryObj: CustomerInquiry = {
        id: `inq-${Date.now()}`,
        name: formData.name,
        whatsapp: formData.whatsapp,
        preferredLocation: formData.preferredLocation,
        propertyType: formData.propertyType,
        budget: formData.budget || 'Not specified (Consultant to advise)',
        requirement: formData.requirement || 'General inquiry regarding available opportunities.',
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        autoResponseSummary: autoReplyText,
      };

      setInquiryResult(inquiryObj);
    } catch {
      // High-quality local automated response engine
      const locText = formData.preferredLocation === 'All Locations' ? 'Galiyat region' : formData.preferredLocation;
      const typeText = formData.propertyType === 'Any Type' ? 'mountain property' : formData.propertyType;
      
      const generatedReply = `Assalam-o-Alaikum ${formData.name},\n\nThank you for reaching out to Galiyat Property Consultant regarding ${typeText} options in ${locText}.\n\n✅ **Instant Preliminary Guidance:**\n• **Location:** ${locText} is currently experiencing steady interest for ${typeText.toLowerCase()}s with direct road access.\n• **Budget Consideration:** For ${formData.budget || 'your requirements'}, we shortlist parcels with clean revenue title (Fard Malkiat & Inteqal).\n• **Topography & Verification:** We recommend an on-site physical inspection to review slope gradient, water availability, and winter accessibility.\n\nOur senior consultant at 03009881240 is reviewing off-market options matching your criteria.`;

      const inquiryObj: CustomerInquiry = {
        id: `inq-${Date.now()}`,
        name: formData.name,
        whatsapp: formData.whatsapp,
        preferredLocation: formData.preferredLocation,
        propertyType: formData.propertyType,
        budget: formData.budget || 'Consultant to advise',
        requirement: formData.requirement || 'General hill station property inquiry.',
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        autoResponseSummary: generatedReply,
      };

      setInquiryResult(inquiryObj);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Info & Live Chat CTA */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2D5F3F] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
                Get In Touch
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173F2A] tracking-tight mb-4 leading-tight">
                Let's Find Your Place in Galiyat
              </h2>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
                Whether you are searching for a serene plot in Nathia Gali, a pine cottage in Ayubia, or exploring long-term mountain land, our local consultants are ready to assist.
              </p>

              {/* Direct WhatsApp Callout Card */}
              <div className="bg-[#F8F8F5] p-6 rounded-2xl border border-stone-200 mb-6">
                <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                  Primary WhatsApp Contact:
                </div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-sm">
                      <Phone className="w-6 h-6 fill-white" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-black text-[#173F2A] font-mono tracking-tight">
                        {BUSINESS_INFO.whatsappDisplay}
                      </div>
                      <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
                        <span>Online • Direct Response</span>
                      </div>
                    </div>
                  </div>

                  <a
                    id="contact-direct-whatsapp-btn"
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-sm transition-all"
                  >
                    Chat
                  </a>
                </div>
              </div>

              {/* Office & Timing Specs */}
              <div className="space-y-4 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2D5F3F] shrink-0 mt-0.5" />
                  <span>{BUSINESS_INFO.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#2D5F3F] shrink-0" />
                  <span>{BUSINESS_INFO.officeHours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#2D5F3F] shrink-0" />
                  <span>{BUSINESS_INFO.email}</span>
                </div>
              </div>
            </div>

            {/* Live Chat & Auto-Responder Box */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <div className="bg-emerald-950 text-white p-5 rounded-2xl border border-emerald-800 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#C9A227] font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Instant Auto-Responder Available</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">Have an instant question?</h4>
                  <p className="text-xs text-emerald-200/80">Get automated guidance on prices, locations & laws.</p>
                </div>
                <button
                  onClick={onOpenLiveChat}
                  className="shrink-0 px-4 py-2.5 rounded-xl bg-[#2D5F3F] hover:bg-[#38744e] text-white text-xs font-bold border border-emerald-400/40 shadow-sm flex items-center gap-1.5 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#C9A227]" />
                  <span>Open Live Chat</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form with Automatic Response Output */}
          <div className="lg:col-span-7 text-left">
            <div className="bg-[#F8F8F5] rounded-3xl p-6 sm:p-9 border border-stone-200 shadow-lg">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-200">
                <div>
                  <h3 className="text-xl font-bold text-[#173F2A]">Property Inquiry Form</h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Submitting triggers our instant automatic response and connects you to our consultant.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                  <Sparkles className="w-3 h-3" />
                  Auto-Response Enabled
                </span>
              </div>

              {inquiryResult ? (
                /* Instant Automated Response Display */
                <div className="bg-white rounded-2xl p-6 border border-emerald-300 shadow-md animate-fadeIn">
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-100">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-bold text-[#173F2A]">
                        Inquiry Received & Automated Guidance Generated
                      </span>
                    </div>
                    <span className="text-xs text-stone-400 font-mono">{inquiryResult.createdAt}</span>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-stone-800 text-xs sm:text-sm leading-relaxed whitespace-pre-line mb-5">
                    {inquiryResult.autoResponseSummary}
                  </div>

                  {/* WhatsApp Forwarding & Actions */}
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row items-center gap-3">
                      <a
                        href={`https://wa.me/923009881240?text=${encodeURIComponent(
                          `Assalam-o-Alaikum, I submitted an inquiry on your website.\n\n*Name:* ${inquiryResult.name}\n*WhatsApp:* ${inquiryResult.whatsapp}\n*Preferred Location:* ${inquiryResult.preferredLocation}\n*Type:* ${inquiryResult.propertyType}\n*Budget:* ${inquiryResult.budget}\n*Requirement:* ${inquiryResult.requirement}\n\nPlease share available options.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
                      >
                        <Phone className="w-4 h-4 fill-white" />
                        <span>Forward Inquiry to WhatsApp (03009881240)</span>
                      </a>

                      <button
                        onClick={() => copyToClipboard(inquiryResult.autoResponseSummary || '')}
                        className="w-full sm:w-auto py-3 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setInquiryResult(null);
                        setFormData({
                          name: '',
                          whatsapp: '',
                          preferredLocation: 'Nathia Gali',
                          propertyType: 'Plot',
                          budget: '',
                          requirement: '',
                        });
                      }}
                      className="w-full text-center text-xs text-[#2D5F3F] hover:underline font-semibold pt-1"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Inquiry Input Form */
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="inquiry-name" className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="inquiry-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Khan"
                        className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label htmlFor="inquiry-whatsapp" className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="inquiry-whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="e.g. 03001234567"
                        className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label htmlFor="inquiry-location" className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                        Preferred Location
                      </label>
                      <select
                        id="inquiry-location"
                        value={formData.preferredLocation}
                        onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value as any })}
                        className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none cursor-pointer"
                      >
                        {locations.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Property Type */}
                    <div>
                      <label htmlFor="inquiry-property-type" className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                        Property Type
                      </label>
                      <select
                        id="inquiry-property-type"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                        className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none cursor-pointer"
                      >
                        {propertyTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label htmlFor="inquiry-budget" className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                      Budget Range (PKR)
                    </label>
                    <input
                      id="inquiry-budget"
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g. 60–80 Lacs, or 1.5–2 Crore"
                      className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none"
                    />
                  </div>

                  {/* Requirement */}
                  <div>
                    <label htmlFor="inquiry-requirement" className="text-xs font-bold text-stone-700 uppercase tracking-wider block mb-1">
                      Your Specific Requirement
                    </label>
                    <textarea
                      id="inquiry-requirement"
                      rows={3}
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      placeholder="Tell us what you are looking for (e.g. 10 Marla plot with sunset view, 3-bed cottage, road access details, etc.)..."
                      className="w-full bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-sm text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none"
                    />
                  </div>

                  {/* Submit Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      id="send-inquiry-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#2D5F3F] hover:bg-[#173F2A] text-white text-sm font-bold shadow-md transition-all disabled:opacity-70"
                    >
                      <Send className="w-4 h-4 text-[#C9A227]" />
                      <span>{isSubmitting ? 'Processing Automatic Response...' : 'Send Inquiry (Get Instant Response)'}</span>
                    </button>

                    <a
                      href={`https://wa.me/923009881240?text=${encodeURIComponent(
                        'Assalam-o-Alaikum, I would like to make an inquiry regarding properties in Galiyat.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <Phone className="w-3.5 h-3.5 fill-white" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
