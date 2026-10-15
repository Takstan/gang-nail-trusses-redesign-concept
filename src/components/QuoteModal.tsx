import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Upload, Send, Phone, Mail, Clock } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<QuoteFormData>;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialData
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    location: 'Regina / Pilot Butte Area',
    projectType: 'residential',
    systemNeeded: 'roof',
    estimatedSpanFt: 36,
    timeline: 'Within 2-4 weeks',
    notes: '',
    filesAttached: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        ...initialData
      }));
    }
  }, [initialData]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'A valid email is required.';
    if (!formData.phone.trim()) newErrors.phone = 'A phone number is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Top Header */}
        <div className="bg-[#102347] text-white p-6 sm:p-7 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
              <span>Gang-Nail Trusses Estimating Desk</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-400">Quick 24-48h Turnaround</span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-white">
              Request Your Engineered Truss Quote
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Provide project specifications or attach architectural blueprints for a comprehensive P.Eng review.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body or Success State */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Quote Request Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our estimating and design department at Pilot Butte has received your project details. We will review your span requirements and return a competitive quote within <strong>24–48 hours</strong>.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left max-w-md mx-auto space-y-1">
                <p><strong>Direct Estimating Email:</strong> quotes@gangnailtruss.ca</p>
                <p><strong>Pilot Butte Desk:</strong> (306) 781-4535</p>
                <p><strong>Toll-Free:</strong> 1 (800) 667-7141</p>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-[#233d7c] hover:bg-[#1a2f60] text-white text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer transition-colors"
                >
                  Close & Return to Home
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Samuel Sthamann"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#233d7c] ${
                      errors.name ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Company / Builder (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Prairie Custom Builders Ltd."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#233d7c]"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="estimator@builder.com"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#233d7c] ${
                      errors.email ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(306) 555-0199"
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#233d7c] ${
                      errors.phone ? 'border-red-400 ring-1 ring-red-400' : 'border-slate-300'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Row 3: Project Type & System Needed */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#233d7c]"
                  >
                    <option value="residential">Residential Custom Home / Addition</option>
                    <option value="garage">Garage / Storage Shop / Cabin</option>
                    <option value="agricultural">Agricultural Barn / Riding Arena / Pole Shed</option>
                    <option value="commercial">Commercial / Institutional Building</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    System Required
                  </label>
                  <select
                    value={formData.systemNeeded}
                    onChange={(e) => setFormData({ ...formData, systemNeeded: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#233d7c]"
                  >
                    <option value="roof">Engineered Roof Trusses Only</option>
                    <option value="floor">Open Web / I-Joist Floor Systems</option>
                    <option value="tall-walls">Tall Wall LVL Framing Package</option>
                    <option value="complete-package">Complete Structural Timber Package</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Project Location & Target Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Job-Site Location / Town
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Regina, Moose Jaw, Pilot Butte"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#233d7c]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Target Delivery Window
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#233d7c]"
                  >
                    <option value="Immediate (Low lead time rush)">Immediate (Rush / Low lead time required)</option>
                    <option value="Within 2-4 weeks">Within 2–4 Weeks</option>
                    <option value="Next Month">Next Month</option>
                    <option value="Planning stage / Future build">Planning / Budgeting Phase</option>
                  </select>
                </div>
              </div>

              {/* Blueprint / Plan Notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Project Notes & Dimensions
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Specify building span, wall heights, snow load requirements, or special architectural features..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#233d7c]"
                />
              </div>

              {/* Blueprint Upload Callout */}
              <div className="p-3.5 rounded-xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-[#233d7c]" />
                  <span>Have CAD or PDF blueprints ready?</span>
                </div>
                <label className="font-bold text-[#233d7c] hover:underline cursor-pointer">
                  <span>Attach File</span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setFormData({
                          ...formData,
                          filesAttached: true,
                          notes: formData.notes + ` [File Attached: ${e.target.files[0].name}]`
                        });
                      }
                    }}
                  />
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#233d7c] hover:bg-[#1a2f60] active:bg-[#14244b] rounded-xl shadow cursor-pointer transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>{isSubmitting ? 'Submitting to Estimators...' : 'Submit Quote Request'}</span>
                </button>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <Clock className="w-4 h-4 text-emerald-600" />
                  <span>24–48h P.Eng Engineering Estimate</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
