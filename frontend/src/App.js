import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Background from './Background';
import Homepage from './Homepage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import BestGrills from './BestGrills';
import Profile from './Profile';
import ForgotPassPage from './ForgotPassPage';
import { AuthProvider } from './AuthContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Background />
              <Homepage />
            </>
          } 
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/bestgrills" element={<BestGrills />} />
        <Route path="/forgot-password" element={<ForgotPassPage />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;