import React, { useState } from 'react';
import { BUILDER_TESTIMONIALS } from '../data/trussData';
import { Star, Building2, Quote, Award } from 'lucide-react';

export const BuilderReviews: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(BUILDER_TESTIMONIALS[0].id);

  const selectedTestimonial = BUILDER_TESTIMONIALS.find(t => t.id === selectedId) || BUILDER_TESTIMONIALS[0];

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <Award className="w-4 h-4" />
            <span>Prairie Builder Partnerships Since 1976</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Decades of Engineering Trust
          </h2>
          <p className="mt-2 text-base text-slate-300">
            Hear directly from the master builders, general contractors, and lumber suppliers who rely on Gang-Nail season after season.
          </p>
        </div>

        {/* Testimonial Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Builder List / Selector */}
          <div className="lg:col-span-5 space-y-3">
            {BUILDER_TESTIMONIALS.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? 'bg-[#1a3364] border-blue-400/50 shadow-md ring-1 ring-blue-400/30'
                      : 'bg-slate-800/60 hover:bg-slate-800 border-slate-700/60'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{item.company}</span>
                    <span className="text-[11px] font-mono text-amber-400 font-semibold">{item.relationshipYears}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {item.author}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Quote Card */}
          <div className="lg:col-span-7 bg-[#132342] rounded-3xl border border-slate-700/80 p-8 sm:p-10 relative shadow-2xl">
            <Quote className="w-12 h-12 text-blue-500/20 absolute top-6 right-6 pointer-events-none" />

            <div className="flex items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-semibold text-slate-400 ml-2">Verified 5.0 Builder Rating</span>
            </div>

            <blockquote className="text-base sm:text-lg text-slate-100 font-normal leading-relaxed italic">
              "{selectedTestimonial.quote}"
            </blockquote>

            <div className="mt-8 pt-6 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-bold text-base text-white">
                  {selectedTestimonial.author}
                </p>
                <p className="text-xs text-slate-400 font-medium">
                  {selectedTestimonial.company}
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  {selectedTestimonial.relationshipYears}
                </span>
                <span className="text-[11px] text-slate-400">
                  Exclusive Truss Supplier
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
