// src/pages/SignIn.tsx
import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import AuthLayout from '../components/layout/AuthLayout'; 
import { useNavigate } from 'react-router-dom';

// Re-using the GoogleIcon from the SignUp component
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.802 8.94C34.331 4.761 29.591 2.5 24 2.5C11.983 2.5 2.5 11.983 2.5 24s9.483 21.5 21.5 21.5c11.146 0 20.24-8.835 20.24-20.24c0-1.285-.115-2.545-.329-3.777z"></path>
    <path fill="#FF3D00" d="M6.306 14.691c2.14-3.64 5.92-6.14 10.29-6.14c3.059 0 5.842 1.154 7.961 3.039l5.541-5.541C34.331 4.761 29.591 2.5 24 2.5C16.318 2.5 9.506 7.045 6.306 14.691z"></path>
    <path fill="#4CAF50" d="M24 45.5c5.94 0 11.21-2.485 14.93-6.535l-5.54-5.54c-1.87 1.27-4.18 2.075-6.39 2.075c-5.223 0-9.651-3.343-11.303-8H6.306c3.193 7.647 10.96 13 19.694 13z"></path>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-0.792 2.237-2.231 4.16-4.087 5.571l5.541 5.541c3.41-3.13 5.55-7.79 5.55-13.112c0-1.285-.115-2.545-.329-3.777z"></path>
  </svg>
);

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: 'testuser@example.com', // Default value
    password: '●●●●●●●●'           // Default value
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing in with:", formData);
    navigate('/dashboard'); // Redirect to dashboard on sign in
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          {/* Replace with your logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Chakra
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 mt-4">Welcome Back!</h2>
          <p className="text-gray-600 mt-2">Sign in to continue to your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="email" name="email" placeholder="Email Address" required
              onChange={handleChange} value={formData.email}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="password" name="password" placeholder="Password" required
              onChange={handleChange} value={formData.password}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="text-right">
            <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <GoogleIcon />
          <span className="font-semibold text-gray-700">Continue with Google</span>
        </button>

        <p className="text-center text-gray-600 mt-8">
          Don't have an account?{' '}
          <a href="/signup" className="font-semibold text-blue-600 hover:underline">
            Create one
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignIn;