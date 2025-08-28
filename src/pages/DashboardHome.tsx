import React from 'react';

import DashboardLayout from '../components/layout/DashboardLayout';

const DashboardHome: React.FC = () => {
  return (
    <DashboardLayout userType="consumer">
      {/* Top Banner Card */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl p-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">AI Based Products</h2>
          <p className="mt-1 max-w-lg">Unlock a world of possibilities with our suite of AI-driven verification tools.</p>
        </div>
        <button className="bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors">
          Explore Now
        </button>
      </div>

      {/* API Details Cards */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Your Activity</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-600">Vehicles in Garage</h4>
            <p className="text-3xl font-bold text-gray-900 mt-2">2</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-600">Reports Generated</h4>
            <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
          </div>
           <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-600">API Credits Used</h4>
            <p className="text-3xl font-bold text-gray-900 mt-2">120</p>
          </div>
           <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-600">Expiring Soon</h4>
            <p className="text-3xl font-bold text-orange-500 mt-2">1</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardHome;