import React from 'react';
import { Car, TrendingUp, Users, CheckCircle } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Future of Vehicle Intelligence
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Chakra is India's most comprehensive AI-powered vehicle verification platform, specifically designed for the fintech industry. We combine cutting-edge artificial intelligence with extensive data partnerships to deliver instant, accurate vehicle insights.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to eliminate vehicle-related fraud in financial transactions while enabling faster, data-driven lending decisions. With partnerships across government databases and private data sources, we provide the most complete picture of any vehicle in India.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">250+</div>
                <div className="text-sm text-gray-600">Data Sources</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Chakra?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">AI-First Approach</div>
                    <div className="text-blue-100">Advanced machine learning for precise risk assessment</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Comprehensive Data</div>
                    <div className="text-blue-100">Integration with 250+ official and private data sources</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Fintech Focused</div>
                    <div className="text-blue-100">Purpose-built for financial services and lending</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">Enterprise Ready</div>
                    <div className="text-blue-100">Bank-grade security and compliance standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;