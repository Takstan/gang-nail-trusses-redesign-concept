import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0f1d38]/95 backdrop-blur-md border-b border-slate-700/60 text-white transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single Brand Wordmark / Emblem (Display typography, tight tracking) */}
          <a href="#" className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-md">
            {/* Gang-Nail geometric truss plate emblem */}
            <div className="w-10 h-10 rounded-lg bg-[#233d7c] border border-blue-400/30 flex items-center justify-center text-white shadow-inner group-hover:bg-[#2b4c9e] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-current text-white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                {/* Roof truss geometric silhouette */}
                <path d="M2 20L12 4l10 16H2z" />
                <path d="M12 4v16" />
                <path d="M7 12l5 8" />
                <path d="M17 12l-5 8" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white uppercase font-display">
                GANG<span className="text-amber-400">-</span>NAIL
              </span>
              <span className="text-[10px] tracking-wider uppercase text-slate-400 font-semibold mt-0.5">
                Trusses · Est. 1976
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 single-line clean nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#systems" className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
              Truss Systems
            </a>
            <a href="#lead-times" className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
              Lead Times & Stats
            </a>
            <a href="#estimator" className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
              Span Estimator
            </a>
            <a href="#testimonials" className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
              Builder Proof
            </a>
            <a href="#delivery" className="hover:text-white hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0">
              Delivery Map
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#233d7c] hover:bg-[#2e4f9f] active:bg-[#1a2f60] border border-blue-400/40 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4 text-amber-300" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c182c] border-b border-slate-700 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <a
              href="#systems"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Truss Systems
            </a>
            <a
              href="#lead-times"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Lead Times & Stats
            </a>
            <a
              href="#estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Span Estimator
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Builder Proof
            </a>
            <a
              href="#delivery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-white transition-colors"
            >
              Delivery Map
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 px-4 text-center font-bold text-sm text-white bg-[#233d7c] hover:bg-[#2b4c9e] rounded-lg tracking-wide uppercase transition-colors"
            >
              Request a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
