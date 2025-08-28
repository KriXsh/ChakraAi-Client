import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="lg:grid lg:grid-cols-2 xl:grid-cols-5">
        
        {/* Left Column: Video and Branding */}
        <div className="hidden lg:block xl:col-span-3 relative h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="https://ironbook-blogs.s3.ap-southeast-1.amazonaws.com/assests/website-assests/14274530_1920_1080_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* --- THIS DIV IS UPDATED --- */}
          <div className="relative z-20 flex flex-col justify-center items-center text-center h-full p-12 text-white">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              Unlock True Vehicle Insights.
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Chakra's developer-first APIs provide the speed, accuracy, and security your financial services demand.
            </p>
          </div>
        </div>

        {/* Right Column: Form Area */}
        <div className="w-full xl:col-span-2 h-screen flex items-center justify-center p-8 lg:p-12">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;