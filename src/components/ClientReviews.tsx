import React, { useState } from 'react';
import { Star, MessageSquareQuote, ShieldAlert, PlusCircle, CheckCircle, User } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  city: string;
  rating: number;
  review: string;
  date: string;
}

export const ClientReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showAddReview, setShowAddReview] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    city: '',
    rating: 5,
    review: '',
  });
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.review) return;

    const reviewObj: Review = {
      id: `rev-${Date.now()}`,
      name: newReview.name,
      city: newReview.city || 'Pakistan',
      rating: Number(newReview.rating),
      review: newReview.review,
      date: 'Just now (Pending Review Verification)',
    };

    setReviews([reviewObj, ...reviews]);
    setSubmittedMessage(true);
    setTimeout(() => {
      setSubmittedMessage(false);
      setShowAddReview(false);
      setNewReview({ name: '', city: '', rating: 5, review: '' });
    }, 2500);
  };

  return (
    <section id="reviews" className="py-20 bg-white border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#2D5F3F] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            Client Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#173F2A] tracking-tight mb-3">
            What Our Clients Say
          </h2>
          <p className="text-stone-600 text-sm sm:text-base">
            We value genuine client relationships and uphold transparency in every interaction.
          </p>
        </div>

        {/* Reviews Display / Compliant Placeholder */}
        {reviews.length === 0 ? (
          <div className="bg-[#F8F8F5] rounded-3xl p-10 sm:p-14 border border-stone-200 text-center max-w-2xl mx-auto shadow-2xs">
            <div className="w-16 h-16 rounded-full bg-emerald-100/80 flex items-center justify-center mx-auto mb-4 text-[#2D5F3F]">
              <MessageSquareQuote className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold text-[#173F2A] mb-2">
              Real client reviews will appear here.
            </h3>

            <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto leading-relaxed mb-6">
              In accordance with our strict transparency policy, we do not publish synthetic or unverified testimonials. Genuine client feedback from property transactions and site visits will be posted here as they are received.
            </p>

            <button
              onClick={() => setShowAddReview(!showAddReview)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-stone-300 hover:border-[#2D5F3F] text-xs font-bold text-stone-700 hover:text-[#2D5F3F] transition-all shadow-xs"
            >
              <PlusCircle className="w-4 h-4 text-[#2D5F3F]" />
              <span>{showAddReview ? 'Close Feedback Form' : 'Share Your Consultation Feedback'}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#F8F8F5] p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-[#2D5F3F] font-bold text-sm">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-stone-900">{rev.name}</h4>
                        <span className="text-[11px] text-stone-500">{rev.city}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-amber-500">
                      {Array.from({ length: rev.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 italic leading-relaxed">
                    “{rev.review}”
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-stone-200 text-[10px] text-stone-600 font-mono">
                  {rev.date}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Optional Add Feedback Drawer */}
        {showAddReview && (
          <div className="mt-8 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 max-w-xl mx-auto text-left shadow-lg animate-fadeIn">
            {submittedMessage ? (
              <div className="text-center py-6">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h4 className="text-base font-bold text-stone-900">Thank you for your feedback!</h4>
                <p className="text-xs text-stone-500">Your review will be verified by our team.</p>
              </div>
            ) : (
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <h4 className="text-base font-bold text-[#173F2A] border-b border-stone-100 pb-2">
                  Submit Genuine Consultation Review
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={newReview.name}
                      onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                      placeholder="e.g. Tariq Mehmood"
                      className="w-full bg-[#F8F8F5] border border-stone-200 rounded-lg p-2.5 text-xs outline-none focus:ring-1 focus:ring-[#2D5F3F]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-stone-700 block mb-1">City</label>
                    <input
                      type="text"
                      value={newReview.city}
                      onChange={(e) => setNewReview({ ...newReview, city: e.target.value })}
                      placeholder="e.g. Islamabad / Lahore"
                      className="w-full bg-[#F8F8F5] border border-stone-200 rounded-lg p-2.5 text-xs outline-none focus:ring-1 focus:ring-[#2D5F3F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Rating</label>
                  <select
                    value={newReview.rating}
                    onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                    className="w-full bg-[#F8F8F5] border border-stone-200 rounded-lg p-2.5 text-xs outline-none"
                  >
                    <option value={5}>5 Stars - Excellent Consultancy</option>
                    <option value={4}>4 Stars - Very Good</option>
                    <option value={3}>3 Stars - Satisfactory</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-700 block mb-1">Your Review</label>
                  <textarea
                    rows={3}
                    required
                    value={newReview.review}
                    onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                    placeholder="Share your experience regarding property consultation, site visit, or transparency..."
                    className="w-full bg-[#F8F8F5] border border-stone-200 rounded-lg p-2.5 text-xs outline-none focus:ring-1 focus:ring-[#2D5F3F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#2D5F3F] text-white font-bold text-xs shadow-sm hover:bg-[#173F2A] transition-colors"
                >
                  Submit Genuine Feedback
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
