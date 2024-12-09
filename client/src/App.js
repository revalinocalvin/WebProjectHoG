import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
        <div className="landing-page">
          <header className="header">
            <h1>LAKI LAKI TIDAK BERCERITA</h1>
            <p>IDE RANGGA MEMANG TIDAK PERNAH GAGAL</p>
          </header>

          <div className="content">
            <div className="packages">
              <h2>Harga Paket</h2>
              <ul>
                <li><strong>Paket Member</strong> - <strong>Total Waktu</strong> - <strong>Price</strong></li>
                <li>Paket Member - 30 Menit - 9,000</li>
                <li>1 Jam Member - 1h 10m - 9,000</li>
                <li>2 Jam Member - 2h 20m - 18,000</li>
                <li>3 Jam Member - 3h 30m - 27,000</li>
                <li>4 Jam Member - 4h 40m - 36,000</li>
                <li>5 Jam Member - 5h 50m - 45,000</li>
                <li>Paket Malam - 9h - 50,000</li>
              </ul>
            </div>

            <div className="specs">
              <h2>Spesifikasi PC</h2>
              <ul>
                <li>Nvidia (RTX 3070, RTX 3070Ti, RTX 4060 Ti, AMD RX 6600)</li>
                <li>Processor i5 GEN 12</li>
                <li>32GB RAM</li>
              </ul>
            </div>

            <div className="gear">
              <h2>Gear Equipment</h2>
              <ul>
                <li>ASUS XL2546K 240hz, 360hz</li>
                <li>Logitech G102 Lightsync</li>
                <li>DBE GM 220</li>
              </ul>
            </div>
          </div>

          <div className="steps">
            <h3>4 LANGKAH MUDAH UNTUK BERMAIN</h3>
            <div className="step-icons">
              <div>Buat Akun</div>
              <div>Pilih Komputer</div>
              <div>Lakukan Pemesanan</div>
              <div>Konfirmasi & Datang</div>
            </div>
          </div>

          <div className="location">
            <h3>LOKASI WARNET HOME OF GAMERS</h3>
            <img src="path/to/map.png" alt="Map" className="map-image" />
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;