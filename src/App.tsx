import React, { useState } from 'react';
import { Navbar } from './components/Navigation/Navbar';
import { MobileMenu } from './components/Navigation/MobileMenu';
import { LandingPage } from './components/Landing/LandingPage';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRedirect = () => {
    window.location.href = 'https://quantbot.ai';
  };

  return (
    <div className="flex flex-col h-screen bg-[#0A0A0A] text-white">
      <Navbar 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onLaunchApp={handleRedirect}
      />
      <MobileMenu isOpen={isMobileMenuOpen} onLaunchApp={handleRedirect} />

      <div className="flex-1 flex overflow-hidden">
        <LandingPage onGetStarted={handleRedirect} />
      </div>
    </div>
  );
}

export default App;