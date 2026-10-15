import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="bg-[#0b172a] text-slate-400 border-t border-slate-800 text-sm">
      {/* Top Banner / Lead-time strip */}
      <div className="bg-[#122340] border-b border-slate-800/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white">
              Ready to frame your next residential or agricultural project?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Low lead times, fast estimator turnarounds, and job-site delivery across Saskatchewan.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow cursor-pointer transition-colors whitespace-nowrap shrink-0"
          >
            Request Your Quote Today
          </button>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#233d7c] border border-blue-400/30 flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 20L12 4l10 16H2z" />
                  <path d="M12 4v16" />
                  <path d="M7 12l5 8" />
                  <path d="M17 12l-5 8" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white uppercase font-display">
                GANG<span className="text-amber-400">-</span>NAIL
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Engineering Trust Since 1976. One of Saskatchewan’s largest truss manufacturing facilities, producing precision-engineered roof trusses, open-web floor systems, and heavy-duty structural timber packages.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400">
              <span className="text-emerald-400 font-semibold">COR™ Certified Safety</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>RRHBA Member 48 Years</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-red-400">Made in Canada</span>
            </div>
          </div>

          {/* Col 2: Engineered Systems */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Truss Systems
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#systems" className="hover:text-white transition-colors">Residential Roof Trusses</a>
              </li>
              <li>
                <a href="#systems" className="hover:text-white transition-colors">Commercial & Clear-Span Trusses</a>
              </li>
              <li>
                <a href="#systems" className="hover:text-white transition-colors">Agricultural Pole Sheds</a>
              </li>
              <li>
                <a href="#systems" className="hover:text-white transition-colors">Open Web Floor Systems</a>
              </li>
              <li>
                <a href="#systems" className="hover:text-white transition-colors">I-Joist Engineered Framing</a>
              </li>
              <li>
                <a href="#systems" className="hover:text-white transition-colors">Tall Wall LVL Studs</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Estimating & Resources */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Builder Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenQuote} className="hover:text-white transition-colors text-left cursor-pointer">
                  Request a Quote
                </button>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">Span & Lead Time Estimator</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Client Testimonials</a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-white transition-colors">Saskatchewan Delivery Routes</a>
              </li>
              <li>
                <a 
                  href="https://gangnailtruss.ca/wp-content/uploads/2023/01/WWTA-Bracing-Guide.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>WWTA Bracing Guide (PDF)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Facility & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Pilot Butte Plant
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Box 480, 600 - 5th Avenue<br />Pilot Butte, SK S0G 3Z0</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:3067814535" className="hover:text-white transition-colors font-mono font-semibold">
                  (306) 781-4535
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-slate-500 pl-6">Toll-Free:</span>
                <a href="tel:18006677141" className="hover:text-white transition-colors font-mono">
                  1 (800) 667-7141
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:quotes@gangnailtruss.ca" className="hover:text-white transition-colors">
                  quotes@gangnailtruss.ca
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Mon – Fri: 7:00 AM – 5:00 PM CST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Unboxed Legal */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Gang-Nail Trusses. All rights reserved. Engineering Trust Since 1976.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Pilot Butte, SK</span>
            <span aria-hidden="true">·</span>
            <span>Regina & Region Home Builders' Association</span>
            <span aria-hidden="true">·</span>
            <span>COR™ Safety</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
