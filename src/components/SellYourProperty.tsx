import React, { useState } from 'react';
import { UploadCloud, CheckCircle, Phone, Sparkles, AlertCircle, FileText, Image as ImageIcon, Send, ArrowRight } from 'lucide-react';
import { PropertyType, PropertyLocation, SellPropertySubmission } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

export const SellYourProperty: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    propertyType: 'Plot' as PropertyType,
    location: 'Nathia Gali' as PropertyLocation,
    propertySize: '',
    expectedPrice: '',
    description: '',
  });

  const [uploadedFileNames, setUploadedFileNames] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<SellPropertySubmission | null>(null);

  const propertyTypes: PropertyType[] = [
    'Plot',
    'Cottage',
    'House',
    'Villa',
    'Commercial Property',
    'Investment Opportunity',
  ];

  const locations: PropertyLocation[] = [
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const names = Array.from(e.target.files).map((f: File) => f.name);
      setUploadedFileNames((prev) => [...prev, ...names]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp || !formData.propertySize) {
      alert('Please fill in your Name, WhatsApp number, and Property Size.');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission and produce structured response
    setTimeout(() => {
      const submission: SellPropertySubmission = {
        id: `seller-${Date.now()}`,
        name: formData.name,
        whatsapp: formData.whatsapp,
        propertyType: formData.propertyType,
        location: formData.location,
        propertySize: formData.propertySize,
        expectedPrice: formData.expectedPrice || 'Demand to be evaluated',
        description: formData.description,
        imageNames: uploadedFileNames,
        submittedAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      setSubmissionSuccess(submission);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="sell-property" className="py-20 bg-gradient-to-b from-[#F8F8F5] via-white to-[#F8F8F5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D5F3F] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Seller Advisory & Marketing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#173F2A] tracking-tight mb-4">
            Have a Property to Sell?
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Let us know about your property and our team can review the information and discuss how it can be presented to potential buyers.
          </p>
        </div>

        {/* Main Form Container or Success Confirmation */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-xl relative overflow-hidden">
          {submissionSuccess ? (
            <div className="py-8 text-center max-w-2xl mx-auto animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-[#2D5F3F]">
                <CheckCircle className="w-10 h-10" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2D5F3F] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Property Submitted Successfully
              </span>
              <h3 className="text-2xl font-bold text-[#173F2A] mt-3 mb-2">
                Thank You, {submissionSuccess.name}!
              </h3>
              <p className="text-sm text-stone-600 mb-6">
                Our consultant has received your property details for <strong>{submissionSuccess.propertySize} {submissionSuccess.propertyType} in {submissionSuccess.location}</strong>.
              </p>

              {/* Summary Card */}
              <div className="bg-[#F8F8F5] p-5 rounded-2xl border border-stone-200 text-left text-xs space-y-2 mb-6 font-mono text-stone-700">
                <div><strong>Submission Reference:</strong> {submissionSuccess.id}</div>
                <div><strong>Location:</strong> {submissionSuccess.location}, Galiyat</div>
                <div><strong>Type & Size:</strong> {submissionSuccess.propertyType} • {submissionSuccess.propertySize}</div>
                <div><strong>Expected Price:</strong> {submissionSuccess.expectedPrice}</div>
                <div><strong>WhatsApp Contact:</strong> {submissionSuccess.whatsapp}</div>
                {submissionSuccess.imageNames && submissionSuccess.imageNames.length > 0 && (
                  <div><strong>Attached Photos:</strong> {submissionSuccess.imageNames.join(', ')}</div>
                )}
              </div>

              {/* Direct WhatsApp Forward Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/923009881240?text=${encodeURIComponent(
                    `Assalam-o-Alaikum, I just submitted my property on your website:\n\n*Name:* ${submissionSuccess.name}\n*Property:* ${submissionSuccess.propertySize} ${submissionSuccess.propertyType}\n*Location:* ${submissionSuccess.location}\n*Expected Price:* ${submissionSuccess.expectedPrice}\n*Description:* ${submissionSuccess.description}\n\nPlease review and guide on marketing.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Send Property Directly to WhatsApp (03009881240)</span>
                </a>

                <button
                  onClick={() => {
                    setSubmissionSuccess(null);
                    setFormData({
                      name: '',
                      whatsapp: '',
                      propertyType: 'Plot',
                      location: 'Nathia Gali',
                      propertySize: '',
                      expectedPrice: '',
                      description: '',
                    });
                    setUploadedFileNames([]);
                  }}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-sm font-semibold transition-colors"
                >
                  Submit Another Property
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Name */}
                <div className="space-y-1.5">
                  <label htmlFor="seller-name" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="seller-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Muhammad Aslam"
                    className="w-full bg-[#F8F8F5] border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* 2. WhatsApp Number */}
                <div className="space-y-1.5">
                  <label htmlFor="seller-whatsapp" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="seller-whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="e.g. 03001234567"
                    className="w-full bg-[#F8F8F5] border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* 3. Property Type */}
                <div className="space-y-1.5">
                  <label htmlFor="seller-property-type" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                    Property Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="seller-property-type"
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                    className="w-full bg-[#F8F8F5] border border-stone-200 rounded-xl px-4 py-3 text-sm font-medium text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none cursor-pointer"
                  >
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4. Location */}
                <div className="space-y-1.5">
                  <label htmlFor="seller-location" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                    Location in Galiyat <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="seller-location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value as any })}
                    className="w-full bg-[#F8F8F5] border border-stone-200 rounded-xl px-4 py-3 text-sm font-medium text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none cursor-pointer"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 5. Property Size */}
                <div className="space-y-1.5">
                  <label htmlFor="seller-size" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                    Property Size <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="seller-size"
                    type="text"
                    required
                    value={formData.propertySize}
                    onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                    placeholder="e.g. 10 Marla, 1 Kanal, 4 Kanal, etc."
                    className="w-full bg-[#F8F8F5] border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* 6. Expected Price */}
                <div className="space-y-1.5">
                  <label htmlFor="seller-price" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                    Expected Price / Demand (PKR)
                  </label>
                  <input
                    id="seller-price"
                    type="text"
                    value={formData.expectedPrice}
                    onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                    placeholder="e.g. 85 Lacs, 2.2 Crore or Open to Consultation"
                    className="w-full bg-[#F8F8F5] border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* 7. Description */}
              <div className="space-y-1.5">
                <label htmlFor="seller-description" className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                  Property Description & Access Details
                </label>
                <textarea
                  id="seller-description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe road access width, view, water/electricity status, elevation, slope, or revenue mutation status..."
                  className="w-full bg-[#F8F8F5] border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:ring-2 focus:ring-[#2D5F3F] focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* 8. Upload Images Area */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                  Upload Property Photos or Revenue Map (Optional)
                </label>
                <label
                  htmlFor="seller-image-upload"
                  className="border-2 border-dashed border-stone-300 hover:border-[#2D5F3F] rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer bg-[#F8F8F5] hover:bg-emerald-50/50 transition-all text-center"
                >
                  <UploadCloud className="w-8 h-8 text-[#2D5F3F] mb-2" />
                  <span className="text-xs sm:text-sm font-semibold text-stone-700">
                    Click to select images or drag and drop
                  </span>
                  <span className="text-[11px] text-stone-500 mt-1">
                    PNG, JPG, JPEG up to 15MB each
                  </span>
                  <input
                    id="seller-image-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>

                {/* Uploaded File Badges */}
                {uploadedFileNames.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {uploadedFileNames.map((name, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 bg-emerald-100/70 border border-emerald-300 text-[#173F2A] text-xs px-3 py-1 rounded-lg font-mono"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span className="max-w-[200px] truncate">{name}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Verification & Review Disclaimer */}
              <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-900 leading-relaxed font-medium">
                  <strong>Notice:</strong> All submitted property information is subject to review and verification before publication. We do not list properties without authentic ownership records.
                </p>
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  id="submit-property-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#2D5F3F] hover:bg-[#173F2A] text-white text-sm font-bold shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-75"
                >
                  <Send className="w-4 h-4 text-[#C9A227]" />
                  <span>{isSubmitting ? 'Submitting Property Details...' : 'Submit Property for Review'}</span>
                </button>

                <div className="text-xs text-stone-500 text-center sm:text-right">
                  Or message directly via WhatsApp: <strong className="text-[#173F2A]">03009881240</strong>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
