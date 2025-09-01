import React from 'react';

const ChakraLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6' }} />
        <stop offset="100%" style={{ stopColor: '#8b5cf6' }} />
      </linearGradient>
    </defs>
    <path
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"
      stroke="url(#logoGradient)"
      strokeWidth="1.5"
      fill="rgba(59, 130, 246, 0.1)"
    />
    <path
      d="M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"
      stroke="url(#logoGradient)"
      strokeOpacity="0.6"
      strokeWidth="1.5"
    />
    <circle cx="12" cy="12" r="2" fill="url(#logoGradient)" />
  </svg>
);

export default ChakraLogo;