import React, { useRef } from 'react';
import { Shield, Zap, FileCheck } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const featuresVideoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      <video
        ref={featuresVideoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://ironbook-blogs.s3.ap-southeast-1.amazonaws.com/assests/website-assests/18069232-uhd_3840_2160_24fps.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Comprehensive AI-Based Vehicle Intelligence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Powered by advanced machine learning algorithms and comprehensive data sources to deliver accurate, real-time vehicle insights for fintech applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Instant Verification</h3>
            <p className="text-gray-300">
              Real-time vehicle verification with RTO integration and comprehensive database checks for immediate trust assessment.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI Risk Scoring</h3>
            <p className="text-gray-300">
              Advanced machine learning models analyze multiple data points to provide accurate risk assessment for lending decisions.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <FileCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Digital Passport</h3>
            <p className="text-gray-300">
              Tamper-proof digital vehicle passports with blockchain-backed verification for enhanced security and trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;