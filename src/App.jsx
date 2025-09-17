import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import ItineraryPlanner from './components/ItineraryPlanner';
import Marketplace from './components/Marketplace';
import GuidesPage from './components/GuidesPage';
import CulturePage from './components/CulturePage';
import AboutPage from './components/AboutPage';
import Chatbot from './components/chatbot';

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />
      
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/itinerary" element={<ItineraryPlanner />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/culture" element={<CulturePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Chatbot - Available on all pages */}
      <Chatbot />
    </div>
  );
}

export default App;