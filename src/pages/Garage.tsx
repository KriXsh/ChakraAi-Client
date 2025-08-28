// src/pages/Garage.tsx
import React from 'react';
import { Car, ShieldCheck, Repeat } from 'lucide-react';
import DashboardLayout from '../components/layout/DashboardLayout';

const vehicles = [
  { name: 'Maruti Suzuki Swift', number: 'DL10AB1234', insurance: 'Expires in 25 days', puc: 'Valid', type: 'Petrol' },
  { name: 'Hyundai Creta', number: 'HR26CD5678', insurance: 'Valid', puc: 'Expires in 5 days', type: 'Diesel' },
];

const Garage: React.FC = () => {
  return (
    <DashboardLayout userType="consumer">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Garage</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vehicles.map((vehicle) => (
          <div key={vehicle.number} className="bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                <Car className="w-7 h-7 text-gray-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{vehicle.name}</h3>
                <p className="font-mono text-gray-600">{vehicle.number}</p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                <span className="text-gray-600">Insurance: <span className="font-medium text-orange-600">{vehicle.insurance}</span></span>
              </div>
               <div className="flex items-center gap-2">
                <Repeat className="w-4 h-4 text-red-500" />
                <span className="text-gray-600">PUC: <span className="font-medium text-red-600">{vehicle.puc}</span></span>
              </div>
            </div>
            <div className="mt-6 flex gap-2">
              <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold text-sm">View Passport</button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-50 text-sm">Renew Now</button>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Garage;