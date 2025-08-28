import React, { useState } from 'react';
import Header from '../components/landingPage/components/Header';
import HeroSection from '../components/landingPage/components/HeroSection';
import FeaturesSection from '../components/landingPage/components/FeaturesSection';
import APISection from '../components/landingPage/components/APISection';
import PricingSection from '../components/landingPage/components/PricingSection';
import AIChat from '../components/landingPage/components/AIChat';
// import StatsSection from './components/StatsSection';
// import PartnersSection from './components/PartnersSection';
import AboutSection from '../components/landingPage/components/AboutSection';
import Footer from '../components/landingPage/components/Footer';
import ContactModal from '../components/landingPage/components/ContactModal';

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onContactClick={handleContactClick} />

      <main>
        <HeroSection
        />
        <APISection />
        <AIChat />
        <PricingSection onContactClick={handleContactClick} />
         <FeaturesSection />
        {/* <StatsSection /> */}
        {/* <PartnersSection /> */}
        <AboutSection />
      </main>

      <Footer onContactClick={handleContactClick} />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
      />
    </div>
  );
};

export default App;