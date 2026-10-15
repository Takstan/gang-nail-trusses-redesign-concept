import React from 'react';
import { ArrowRight, Phone, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { heroTrussBackground, heroGangnailTrusses } from '../assets/images';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreSystems: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExploreSystems }) => {
  return (
    <section className="relative overflow-hidden bg-[#0c182c] text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Real Timber Truss Background Image Connected to Gang-Nail's Business */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroTrussBackground}
          alt="Exposed precision-engineered timber roof trusses and rafters manufactured with Gang-Nail connector plates"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.15]"
          referrerPolicy="no-referrer"
        />
        {/* Measured Scrim Gradient Overlays for WCAG AA Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0d1e3a]/90 to-[#0e2448]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/60" />
      </div>

      {/* Subtle blueprint grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
        aria-hidden="true"
      />

      {/* Ambient warm timber & steel glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[250px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unboxed Kicker - Zero Pill Discipline */}
        <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-200 mb-5">
          <span className="text-amber-400">Pilot Butte, Saskatchewan</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span>48 Years of Trusted Manufacturing</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span className="text-emerald-400">COR™ Certified Quality</span>
        </div>

        {/* 2-Column Split: Punchy Value Proposition & Hero Visual Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Focused, Punchy Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight leading-[1.1] text-white">
              Precision Trusses. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-300">
                Guaranteed Low Lead Times.
              </span>
            </h1>

            {/* Core Value Statement - Kept lean and direct as requested */}
            <p className="text-lg sm:text-xl text-slate-200/90 leading-relaxed max-w-2xl">
              We design, manufacture, and deliver engineered wood roof and floor systems built specifically to endure the Prairie climate. From custom residential spans to expansive agricultural arenas.
            </p>

            {/* Turnaround Lead Time Callout Banner */}
            <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-2xl">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-sm sm:text-base font-bold text-white tracking-wide">
                    Our goal is to keep our lead times low.
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    You get your truss package faster with us — stamped by professional engineers and delivered direct to your site on schedule.
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Request a Fast Quote</span>
                <ArrowRight className="w-4 h-4 text-slate-900" />
              </button>

              <button
                onClick={onExploreSystems}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/20 rounded-xl transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Explore Truss Systems</span>
              </button>

              <a
                href="tel:3067814535"
                className="inline-flex items-center justify-center gap-2 px-4 py-4 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                title="Call Gang-Nail Sales Desk"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>(306) 781-4535</span>
              </a>
            </div>

            {/* Builder Trust Kicker List */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Quick 48h Quote Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Stamped P.Eng Engineering</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Dedicated Boom-Truck Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900 group">
              <img
                src={heroGangnailTrusses}
                alt="Precision engineered timber roof trusses erected on Canadian residential build at golden hour"
                className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Verified Trust Tag in Corner */}
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5 text-xs font-bold text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-600 inline-block"></span>
                <span>Made in Canada</span>
              </div>

              {/* Architectural Overlay Information */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/85 backdrop-blur-md border border-white/15 rounded-xl p-4 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                      Engineered Timber Craftsmanship
                    </p>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Pilot Butte High-Pressure Gang-Nail System
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-slate-300 block">Snow & Wind Rated</span>
                    <span className="text-xs font-mono font-bold text-emerald-400">NBC Compliant</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Behind-the-card decorative glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-amber-500/20 rounded-3xl blur-2xl -z-10" />
          </div>

        </div>

      </div>
    </section>
  );
};
