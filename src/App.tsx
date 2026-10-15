/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ProductSolutions } from './components/ProductSolutions';
import { InteractiveTrussEstimator } from './components/InteractiveTrussEstimator';
import { BuilderReviews } from './components/BuilderReviews';
import { DeliveryNetwork } from './components/DeliveryNetwork';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { QuoteFormData } from './types';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialData, setQuoteInitialData] = useState<Partial<QuoteFormData>>({});

  const handleOpenQuote = (data?: Partial<QuoteFormData>) => {
    if (data) {
      setQuoteInitialData(data);
    } else {
      setQuoteInitialData({});
    }
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  const handleOpenQuoteWithSystem = (systemId: string) => {
    let systemNeeded: QuoteFormData['systemNeeded'] = 'roof';
    if (systemId === 'floor-systems') systemNeeded = 'floor';
    else if (systemId === 'tall-walls') systemNeeded = 'tall-walls';
    else if (systemId === 'beam-posts') systemNeeded = 'complete-package';

    handleOpenQuote({
      systemNeeded,
      notes: `Interested in quote for ${systemId.replace('-', ' ')} system.`
    });
  };

  const handlePreFillQuote = (details: {
    projectType: 'residential' | 'agricultural' | 'commercial' | 'garage';
    systemNeeded: 'roof' | 'floor' | 'tall-walls' | 'complete-package';
    spanFt: number;
    pitch: string;
    notes: string;
  }) => {
    handleOpenQuote({
      projectType: details.projectType,
      systemNeeded: details.systemNeeded,
      estimatedSpanFt: details.spanFt,
      notes: details.notes
    });
  };

  const handleExploreSystems = () => {
    const el = document.getElementById('systems');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-[#233d7c] selection:text-white">
      {/* 1. Header (Strict Top Bar Contract) */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1">
        {/* 2. Catchy Hero Section */}
        <Hero 
          onOpenQuote={() => handleOpenQuote()} 
          onExploreSystems={handleExploreSystems} 
        />

        {/* 3. Operational Statistics Strip */}
        <StatsBar />

        {/* 4. Engineered Product Systems (What We Do) */}
        <ProductSolutions 
          onOpenQuoteWithSystem={handleOpenQuoteWithSystem} 
        />

        {/* 5. Interactive Truss & Lead Time Estimator */}
        <InteractiveTrussEstimator 
          onPreFillQuote={handlePreFillQuote} 
        />

        {/* 6. Authentic Builder Reviews & Testimonials */}
        <BuilderReviews />

        {/* 7. Saskatchewan Distribution & Delivery Fleet */}
        <DeliveryNetwork />
      </main>

      {/* 8. Corporate Quiet Footer */}
      <Footer onOpenQuote={() => handleOpenQuote()} />

      {/* 9. Interactive Fast Quote Dialog */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={handleCloseQuote} 
        initialData={quoteInitialData} 
      />
    </div>
  );
}
