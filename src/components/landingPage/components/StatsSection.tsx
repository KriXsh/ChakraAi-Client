import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { value: '10M+', label: 'Vehicles Verified', color: 'text-blue-400' },
    { value: '500+', label: 'Enterprise Clients', color: 'text-purple-400' },
    { value: '99.9%', label: 'Uptime SLA', color: 'text-green-400' },
    { value: '₹50Cr+', label: 'Fraud Prevented', color: 'text-yellow-400' },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by India's Leading Fintech Companies
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;