import React from 'react';
import { CheckCircle, Zap } from 'lucide-react'; // Added Zap for a feature highlight

interface PricingSectionProps {
  onContactClick: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onContactClick }) => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transparent Pricing for Every Scale
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to enterprises, choose the plan that fits your needs with no hidden fees and predictable costs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:items-center">

          {/* Card 1: Starter */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Starter</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">₹5</span>
              <span className="text-gray-600">/verification</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Basic vehicle verification</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Insurance & challan check</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Email support</span>
              </li>
            </ul>
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Get Started
            </button>
          </div>
          
          {/* Card 2: Professional (Most Popular) */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-500 rounded-xl p-8 relative transition-all duration-300 shadow-xl md:scale-105 hover:shadow-2xl hover:shadow-blue-500/30">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Professional</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">₹25</span>
              <span className="text-gray-600">/verification</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Complete vehicle report</span>
              </li>
              <li className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-800">AI risk scoring</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Valuation estimates</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Priority support</span>
              </li>
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Choose Professional
            </button>
          </div>
          
          {/* Card 3: Enterprise */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">Custom</span>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Unlimited verifications</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Custom integrations</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">SLA guarantees</span>
              </li>
            </ul>
            <button 
              onClick={onContactClick}
              className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;