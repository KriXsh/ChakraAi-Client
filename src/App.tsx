// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage'; 
import SignIn from './pages/SignIn';       
import SignUp from './pages/SignUp';
import DashboardHome from './pages/DashboardHome';
import Garage from './pages/Garage';
import BulkVerification from './pages/BulkVerification';
import ApiPlayground from './pages/ApiPlayground';

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
        <Route path="/garage" element={<Garage />} />
        
        {/* Enterprise Dashboard Routes */}
        <Route path="/enterprise" element={<BulkVerification />} /> {/* Default to bulk */}
        <Route path="/enterprise/bulk" element={<BulkVerification />} />
        <Route path="/enterprise/api" element={<ApiPlayground />} />
      </Routes>
    </Router>
  );
};

export default App;