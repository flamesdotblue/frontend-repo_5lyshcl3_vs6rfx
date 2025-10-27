import React from 'react';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Destinations from './components/Destinations';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Packages />
      <Destinations />
      <CTA />
    </div>
  );
}

export default App;
