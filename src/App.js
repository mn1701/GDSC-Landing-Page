import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import UnderConstructionPage from './components/UnderConstructionPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Router>
        <Navbar />
        <div className="max-w-[1440px] mx-auto p-4">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/under-construction" element={<UnderConstructionPage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
