import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Construction from './components/Construction';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/construction" element={
          <>
            <Construction />
            <WhatsAppButton />
          </>
        } />
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <Features />
            <HowItWorks />
            <Benefits />
            <Testimonials />
            <Pricing />
            <CTA />
            <Footer />
            <WhatsAppButton />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;