import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Public/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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