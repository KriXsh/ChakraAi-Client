import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Chakra
            </h3>
            <p className="text-gray-400 mb-6">
              AI-powered vehicle verification platform for India's fintech industry. Instant insights, comprehensive reports, and enterprise-grade security.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Vehicle Verification API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Risk Scoring Engine</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Vehicle Passport</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Analytics Dashboard</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Lending & NBFC</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insurance Underwriting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Used Car Marketplaces</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fleet Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>hello@Chakra.ai</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Mumbai, Maharashtra</span>
              </li>
            </ul>
            
            <button 
              onClick={onContactClick}
              className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Chakra. All rights reserved. | Privacy Policy | Terms of Service | Data Protection</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;