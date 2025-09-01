// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; 
import SignIn from './pages/SignIn';       
import SignUp from './pages/SignUp';
import DashboardHome from './pages/DashboardHome';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Consumer Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardHome />} />
      </Routes>
    </Router>
  );
};

export default App;