import React from 'react';
import {Code, Shield, Clock } from 'lucide-react'; // More specific icons

const APISection: React.FC = () => {
  return (
    <section id="api" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Developer-First API Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrate vehicle verification seamlessly into your fintech applications with our robust, scalable APIs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Feature List */}
          <div className="space-y-4">
            {/* Feature 1 with Hover Effect */}
            <div className="p-6 rounded-xl transition-all duration-300 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500/10 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Integration</h3>
                  <p className="text-gray-600">Get started in minutes with our comprehensive documentation and SDKs for all major programming languages.</p>
                </div>
              </div>
            </div>
            
            {/* Feature 2 with Hover Effect */}
            <div className="p-6 rounded-xl transition-all duration-300 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500/10 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time Data</h3>
                  <p className="text-gray-600">Access live vehicle data with 99.9% uptime SLA and sub-second response times for critical financial decisions.</p>
                </div>
              </div>
            </div>

            {/* Feature 3 with Hover Effect */}
            <div className="p-6 rounded-xl transition-all duration-300 hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise Security</h3>
                  <p className="text-gray-600">Bank-grade security with end-to-end encryption and compliance with all major financial regulations.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: API Code Block */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-200 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm font-medium">POST /v1/verify</span>
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            
            {/* FIXED SYNTAX BLOCK */}
            <pre className="text-sm overflow-x-auto">
              <code className="language-bash">
                <span><span className="text-cyan-400">curl</span> -X POST \</span>{'\n'}
                <span>  <span className="text-sky-300">https://api.chakra.ai/v1/verify</span> \</span>{'\n'}
                <span>  -H <span className="text-yellow-300">"Authorization: Bearer your-api-key"</span> \</span>{'\n'}
                <span>  -H <span className="text-yellow-300">"Content-Type: application/json"</span> \</span>{'\n'}
                <span>  -d <span className="text-purple-300">{"'{"}</span></span>{'\n'}
                <span className="text-purple-300">    "registration_number": "MH0XXXXX4",</span>{'\n'}
                <span className="text-purple-300">    "include_risk_score": true,</span>{'\n'}
                <span className="text-purple-300">    "include_valuation": true</span>{'\n'}
                <span><span className="text-purple-300">  {"}'"}</span></span>
                {'\n\n'}
                <span className="text-gray-400">{`// Response`}</span>{'\n'}
                <span className="text-green-300">{'{'}</span>{'\n'}
                <span className="text-green-300">  "status": "success",</span>{'\n'}
                <span className="text-green-300">  "vehicle": {'{ ... }'}</span>{'\n'}
                <span className="text-green-300">{'}'}</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APISection;