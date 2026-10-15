import React, { useState } from 'react';
import { COMMUNITIES_SERVED } from '../data/trussData';
import { Truck, MapPin, CheckCircle, Navigation, Clock } from 'lucide-react';
import { trussManufacturingFacility } from '../assets/images';

export const DeliveryNetwork: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<string>('Pilot Butte (HQ Plant)');

  return (
    <section id="delivery" className="py-20 bg-slate-100/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#233d7c] mb-2">
            Dedicated Logistics & Job-Site Offloading
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Direct Job-Site Delivery Across Saskatchewan
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Our specialized fleet of roll-off and crane-equipped boom trucks delivers trusses safely and on schedule directly to framing crews across Western Canada.
          </p>
        </div>

        {/* 2-Column Delivery Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Community Pills / Badges & Hub Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#233d7c]" />
                <span>Primary Saskatchewan Delivery Corridors</span>
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {COMMUNITIES_SERVED.map((hub) => (
                  <button
                    key={hub.name}
                    type="button"
                    onClick={() => setSelectedHub(hub.name)}
                    className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                      selectedHub === hub.name
                        ? 'bg-[#233d7c] text-white border-[#233d7c] shadow-sm'
                        : hub.highlighted
                        ? 'bg-blue-50/60 text-[#233d7c] border-blue-200 hover:bg-blue-100'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{hub.name}</span>
                    <span className="text-[10px] ml-1.5 opacity-75 font-mono">({hub.dist})</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Route Detail */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <div className="font-bold text-slate-900 flex items-center justify-between">
                <span>Selected Destination: {selectedHub}</span>
                <span className="text-[#233d7c] font-mono">Scheduled Route</span>
              </div>
              <p>
                Trusses banded, weather-wrapped, and dispatched directly from our 600 - 5th Avenue Pilot Butte manufacturing yard.
              </p>
            </div>

            {/* Delivery Fleet Advantages */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <Truck className="w-5 h-5 text-[#233d7c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    High-Reach Hydraulic Crane Offloading
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Our drivers are experienced professionals who stage truss packages safely onto top-plates or dunnage pads, reducing ground handling and crane rental costs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#233d7c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                    Weather-Coordinated Job-Site Drops
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Our dispatch team confirms job-site ground conditions with your site superintendent 24 hours prior to rollout to prevent mud or prairie snow delays.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Facility & Fleet Photo Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900">
              <img
                src={trussManufacturingFacility}
                alt="Gang-Nail Trusses Pilot Butte manufacturing plant and staging area"
                className="w-full h-[320px] sm:h-[380px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  Pilot Butte Central Manufacturing Facility
                </p>
                <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                  600 - 5th Avenue, Pilot Butte, SK
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  15 minutes east of Regina with direct access to Trans-Canada Highway 1.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
