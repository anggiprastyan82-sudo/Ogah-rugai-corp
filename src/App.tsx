import React from 'react';
import { Navbar, Hero, TradingSection, EducationSection, GamingSection, Footer } from './components/Sections';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-main text-[#F5F5F5] selection:bg-brand selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <TradingSection />
        <EducationSection />
        <GamingSection />
      </main>
      <Footer />
    </div>
  );
}
