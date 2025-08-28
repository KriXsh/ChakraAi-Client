import React from 'react';
import type { VehicleData } from '../../../types';

interface VehicleResultsProps {
  vehicleData: VehicleData;
  showLoginPrompt: boolean;
}

const VehicleResults: React.FC<VehicleResultsProps> = ({ vehicleData, showLoginPrompt }) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Vehicle Report</h2>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Free Preview
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Registration:</span>
                <span className="font-semibold">{vehicleData.registrationNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Make & Model:</span>
                <span className="font-semibold">{vehicleData.make} {vehicleData.model}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Year:</span>
                <span className="font-semibold">{vehicleData.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fuel Type:</span>
                <span className="font-semibold">{vehicleData.fuelType}</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Previous Owners:</span>
                <span className="font-semibold">{vehicleData.ownershipCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Insurance:</span>
                <span className={`font-semibold ${vehicleData.insuranceStatus === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
                  {vehicleData.insuranceStatus}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Challans:</span>
                <span className="font-semibold">{vehicleData.challansCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Risk Score:</span>
                <span className={`font-semibold ${vehicleData.riskScore < 30 ? 'text-green-600' : vehicleData.riskScore < 70 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {vehicleData.riskScore}/100
                </span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">Estimated Value:</span>
              <span className="text-xl font-bold text-blue-600">
                {formatCurrency(vehicleData.estimatedValue.min)} - {formatCurrency(vehicleData.estimatedValue.max)}
              </span>
            </div>
          </div>
        </div>
        
        {showLoginPrompt && (
          <div className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white text-center">
            <h3 className="text-xl font-bold mb-2">Want the Complete Report?</h3>
            <p className="mb-4">Sign up for detailed ownership history, accident records, and AI-powered risk analysis</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Sign Up for Full Access
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleResults;