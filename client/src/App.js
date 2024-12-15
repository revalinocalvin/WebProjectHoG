import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Public/MainPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const username = "Rangga";
  
  return (
    <div className="App">
      <Router>
        <Navbar isLoggedIn={isLoggedIn} username={username} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;