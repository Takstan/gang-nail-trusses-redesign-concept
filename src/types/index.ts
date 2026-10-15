export interface ProductSystem {
  id: string;
  name: string;
  kicker: string;
  shortDesc: string;
  features: string[];
  applications: string[];
  specNote: string;
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  company: string;
  relationshipYears: string;
  quote: string;
  rating: number;
}

export interface QuoteFormData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  location: string;
  projectType: 'residential' | 'agricultural' | 'commercial' | 'garage';
  systemNeeded: 'roof' | 'floor' | 'tall-walls' | 'complete-package';
  estimatedSpanFt: number;
  timeline: string;
  notes: string;
  filesAttached?: boolean;
}
