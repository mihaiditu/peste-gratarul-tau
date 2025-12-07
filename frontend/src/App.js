import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Background from './Background';
import Homepage from './Homepage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import { AuthProvider } from './AuthContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
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

        <Route 
          path="/profile" 
          element={
            <>
              <Navbar />
              <div style={{ textAlign: 'center', marginTop: '50px', color: '#721D08', fontFamily: 'Montserrat', fontSize: '24px' }}>
                Profile Page Coming Soon
              </div>
            </>
          } 
        />
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;