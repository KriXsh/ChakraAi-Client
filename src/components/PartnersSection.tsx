import React from 'react';

const PartnersSection: React.FC = () => {
  const partners = ['RTO India', 'VAHAN', 'Insurance Bureau', 'Fintech Partners'];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Partnerships & Integrations</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="text-xl font-bold text-gray-700">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;