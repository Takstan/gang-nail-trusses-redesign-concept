import React, { useState } from 'react';
import { TRUSS_PRODUCTS } from '../data/trussData';
import { ProductSystem } from '../types';
import { Check, ArrowRight, Compass, Shield, Wrench, Building2 } from 'lucide-react';

interface ProductSolutionsProps {
  onOpenQuoteWithSystem: (systemId: string) => void;
}

export const ProductSolutions: React.FC<ProductSolutionsProps> = ({ onOpenQuoteWithSystem }) => {
  const [activeSystemId, setActiveSystemId] = useState<string>('roof-systems');

  const activeProduct = TRUSS_PRODUCTS.find(p => p.id === activeSystemId) || TRUSS_PRODUCTS[0];

  return (
    <section id="systems" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with quiet unboxed kicker */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#233d7c] mb-2">
            Engineered Wood Solutions · Built in Saskatchewan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Engineered For Every Structural Span
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From custom residences and multi-family framing to clear-span agricultural pole sheds and commercial developments.
          </p>

          {/* Interactive Segmented Selector Tabs */}
          <div className="mt-8 inline-flex p-1.5 bg-slate-200/80 rounded-xl border border-slate-300/60 max-w-full overflow-x-auto">
            {TRUSS_PRODUCTS.map((prod) => (
              <button
                key={prod.id}
                onClick={() => setActiveSystemId(prod.id)}
                className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold tracking-tight rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeSystemId === prod.id
                    ? 'bg-[#233d7c] text-white shadow-sm'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-white/50'
                }`}
              >
                {prod.name.replace(' Systems', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Image with authentic architectural detail */}
          <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] bg-slate-900">
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
                <span>{activeProduct.kicker}</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-300">{activeProduct.specNote}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {activeProduct.name}
              </h3>
            </div>
          </div>

          {/* Right Column: Key Details, Lean Copy, Action */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#233d7c]">
                  Overview & Engineering
                </span>
                <p className="mt-2 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {activeProduct.shortDesc}
                </p>
              </div>

              {/* Engineered Advantages */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Key Advantages for Builders
                </h4>
                <ul className="space-y-2.5">
                  {activeProduct.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                      <div className="p-0.5 rounded-full bg-blue-50 text-[#233d7c] shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Applications unboxed */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Common Applications
                </span>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-medium text-slate-600">
                  {activeProduct.applications.map((app, i) => (
                    <React.Fragment key={i}>
                      <span>{app}</span>
                      {i < activeProduct.applications.length - 1 && (
                        <span aria-hidden="true" className="text-slate-300">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>

            {/* Direct CTA for this category */}
            <div className="pt-8 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => onOpenQuoteWithSystem(activeProduct.id)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#233d7c] hover:bg-[#1e3469] rounded-xl transition-all cursor-pointer shadow-sm hover:shadow"
              >
                <span>Quote This System</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>

              <span className="text-xs text-slate-500 text-center sm:text-left">
                Blueprints can be emailed directly to <strong className="text-slate-800">quotes@gangnailtruss.ca</strong>
              </span>
            </div>

          </div>

        </div>

        {/* 4 Feature Cards Grid below the showcase */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {TRUSS_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              onClick={() => setActiveSystemId(prod.id)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                activeSystemId === prod.id
                  ? 'bg-white border-[#233d7c] shadow-md ring-2 ring-[#233d7c]/20'
                  : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-bold text-[#233d7c] mb-2">
                <span>{prod.kicker}</span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${activeSystemId === prod.id ? 'translate-x-1 text-[#233d7c]' : 'text-slate-400'}`} />
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                {prod.name}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">
                {prod.shortDesc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
