import React from 'react';
import { ShieldCheck, Calendar, Layers, Activity } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: '50,000',
      unit: 'lbs',
      label: 'Gang-Nail Plates Pressed / Month',
      desc: 'High-tensile galvanized connector plates locked into engineered joints',
      icon: Layers
    },
    {
      value: '30,000',
      unit: 'LF',
      label: 'Lumber Cut Per Shift',
      desc: 'Computerized multi-blade component saws for millimeter precision',
      icon: Activity
    },
    {
      value: '48+',
      unit: 'Years',
      label: 'Engineering Trust Since 1976',
      desc: 'Proud partner of the Regina & Region Home Builders’ Association',
      icon: Calendar
    },
    {
      value: '100%',
      unit: 'P.Eng',
      label: 'COR™ Safety & Quality Certified',
      desc: 'Every roof and floor system fully stamped to Canadian building codes',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="lead-times" className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="p-6 sm:p-7 hover:bg-slate-50/70 transition-colors group">
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-[#233d7c] group-hover:bg-[#233d7c] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {stat.unit}
                  </span>
                </div>

                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-mono tabular-nums">
                    {stat.value}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-800 mt-2">
                  {stat.label}
                </h3>
                
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
