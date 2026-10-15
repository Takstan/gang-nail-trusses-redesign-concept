import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Ruler, Shield, Sparkles } from 'lucide-react';

interface EstimatorProps {
  onPreFillQuote: (details: {
    projectType: 'residential' | 'agricultural' | 'commercial' | 'garage';
    systemNeeded: 'roof' | 'floor' | 'tall-walls' | 'complete-package';
    spanFt: number;
    pitch: string;
    notes: string;
  }) => void;
}

export const InteractiveTrussEstimator: React.FC<EstimatorProps> = ({ onPreFillQuote }) => {
  const [projectType, setProjectType] = useState<'residential' | 'agricultural' | 'commercial' | 'garage'>('residential');
  const [spanFt, setSpanFt] = useState<number>(36);
  const [pitch, setPitch] = useState<string>('6/12');
  const [includeFloorTruss, setIncludeFloorTruss] = useState<boolean>(true);
  const [raisedHeelEnergy, setRaisedHeelEnergy] = useState<boolean>(true);

  // Dynamic calculations based on engineering rules
  const getRecommendation = () => {
    let trussType = 'Standard Howe / Fink Gable System';
    let heelRecommendation = raisedHeelEnergy ? '14" Raised Energy Heel (Permits R-60 attic insulation to exterior edge)' : 'Standard 4.5" Heel';
    let leadTime = '10 to 14 Business Days';
    let pitchDesc = `${pitch} Pitch`;

    if (spanFt >= 48) {
      trussType = 'Heavy-Duty Commercial/Ag Clear Span (Multi-Ply Piggyback)';
      leadTime = '12 to 18 Business Days';
    } else if (projectType === 'garage') {
      trussType = 'Attic Storage or Scissor Cathedral Truss';
      leadTime = '7 to 10 Business Days';
    } else if (spanFt <= 24) {
      trussType = 'Mono or Standard Fink Residential';
      leadTime = '7 to 10 Business Days';
    }

    return {
      trussType,
      heelRecommendation,
      leadTime,
      pitchDesc,
      plates: `${Math.round(spanFt * 2.8)} Gang-Nail Pressed Steel Joints`,
      subfloorNote: includeFloorTruss ? 'Open-Web Floor Package Included (Zero Ceiling Drops)' : 'Roof Only Specified'
    };
  };

  const rec = getRecommendation();

  const handleSendToQuote = () => {
    onPreFillQuote({
      projectType,
      systemNeeded: includeFloorTruss ? 'complete-package' : 'roof',
      spanFt,
      pitch,
      notes: `Configured via Estimator: ${spanFt}ft span, ${pitch} pitch, ${raisedHeelEnergy ? 'Raised Heel Energy Truss' : 'Standard Heel'}, ${includeFloorTruss ? 'With Open Web Floor Trusses' : 'Roof Trusses Only'}.`
    });
  };

  return (
    <section id="estimator" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#233d7c] mb-2">
            Interactive Project Configurator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Estimate Your Truss & Lead Time
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Select your building dimensions to preview recommended engineered truss profiles and standard turnaround times.
          </p>
        </div>

        {/* 2-Column Calculator Box */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Project Category
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'residential', label: 'Residential' },
                  { id: 'garage', label: 'Garage / Shop' },
                  { id: 'agricultural', label: 'Agricultural' },
                  { id: 'commercial', label: 'Commercial' },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setProjectType(type.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                      projectType === type.id
                        ? 'bg-[#233d7c] text-white border-[#233d7c] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Clear Span Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Building Clear Span Width
                </label>
                <span className="text-base font-extrabold text-[#233d7c] font-mono">
                  {spanFt} Feet ({Math.round(spanFt * 0.3048 * 10) / 10} m)
                </span>
              </div>
              <input
                type="range"
                min={16}
                max={72}
                step={2}
                value={spanFt}
                onChange={(e) => setSpanFt(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#233d7c]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1.5 font-mono">
                <span>16 ft (Garage)</span>
                <span>36 ft (Standard Home)</span>
                <span>54 ft (Large Shop)</span>
                <span>72+ ft (Ag Arena)</span>
              </div>
            </div>

            {/* Step 3: Pitch & Energy Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  3. Roof Pitch
                </label>
                <select
                  value={pitch}
                  onChange={(e) => setPitch(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#233d7c]"
                >
                  <option value="4/12">4/12 (Gentle Prairie Slope)</option>
                  <option value="6/12">6/12 (Standard Canadian Residential)</option>
                  <option value="8/12">8/12 (Architectural Steep Pitch)</option>
                  <option value="10/12">10/12 (Dramatic Vaulted Peak)</option>
                  <option value="Scissor">Scissor / Cathedral Vaulted Ceiling</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  4. Systems Included
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={raisedHeelEnergy}
                      onChange={(e) => setRaisedHeelEnergy(e.target.checked)}
                      className="rounded border-slate-300 text-[#233d7c] focus:ring-[#233d7c]"
                    />
                    <span>Energy Heel (Full R-60 Edge Insulation)</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs font-medium text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={includeFloorTruss}
                      onChange={(e) => setIncludeFloorTruss(e.target.checked)}
                      className="rounded border-slate-300 text-[#233d7c] focus:ring-[#233d7c]"
                    />
                    <span>Open Web Floor Truss Package</span>
                  </label>
                </div>
              </div>
            </div>

          </div>

          {/* Results Card Column */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#233d7c]">
                Engineered Configuration
              </span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Quick Lead Time Ready
              </span>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <span className="text-xs text-slate-500 font-medium">Recommended System:</span>
                <p className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                  {rec.trussType}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 text-xs">
                <div>
                  <span className="text-slate-500 block">Attic Energy Spec:</span>
                  <span className="font-semibold text-slate-800">{rec.heelRecommendation}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Estimated Lead Time:</span>
                  <span className="font-bold text-[#233d7c] font-mono">{rec.leadTime}</span>
                </div>
              </div>

              <div className="text-xs text-slate-600 space-y-1">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#233d7c]" />
                  <span>{rec.plates} for superior joint rigidity</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#233d7c]" />
                  <span>{rec.subfloorNote}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#233d7c]" />
                  <span>Includes full Canadian P.Eng structural seal & installation bracing guide</span>
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100">
              <button
                type="button"
                onClick={handleSendToQuote}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#233d7c] hover:bg-[#1c3266] rounded-xl shadow transition-all cursor-pointer"
              >
                <span>Request Exact Blueprint Quote</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
              <p className="text-[11px] text-slate-400 text-center mt-2">
                Have architectural CAD or PDF plans? Attach them directly in the next step.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
