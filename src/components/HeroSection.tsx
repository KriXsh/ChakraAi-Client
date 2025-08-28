import React, { useRef } from 'react';
import { CheckCircle, Shield, Zap, ArrowRight, Bot } from 'lucide-react'; // Import Bot icon

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        ref={heroVideoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://ironbook-blogs.s3.ap-southeast-1.amazonaws.com/assests/website-assests/14274530_1920_1080_25fps.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          AI-Powered Vehicle Verification
          <span className="block text-blue-400">for Fintech Solutions</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          India's most trusted vehicle intelligence platform. Instant verification, comprehensive reports, and AI-driven insights for the financial sector.
        </p>
        
        {/* Call-to-action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          {/* Primary Button */}
          <a
            href="/signup"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 w-full sm:w-auto"
          >
            Get Free Report
            <ArrowRight className="w-5 h-5" />
          </a>
          
          {/* Secondary "Try Now" Button - ADDED */}
          <a
            href="#ai-chat"
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 w-full sm:w-auto"
          >
            <Bot className="w-5 h-5" />
            Try AI Chat
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span>Instant Verification</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-400" />
            <span>DPDP Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span>AI-Powered Analysis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;