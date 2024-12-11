import React from 'react';
import '../../styles/MainPage.css';

const MainPage = () => {
  return (
    <>
      <header className="header">
        <h1>LAKI LAKI TIDAK BERCERITA</h1>
        <p>IDE RANGGA MEMANG TIDAK PERNAH GAGAL</p>
      </header>

      <div className="landing-page">
        <div className="content">
          <div className="packages">
          <h2>Harga Paket <img src="/tag.png" alt="Price Icon" className="price-icon" /></h2>
            <ul>
              <li>
                <span>Paket Member</span>
                <span>Total Waktu</span>
                <span>Price</span>
              </li>
              <li>
                <span>30 Menit Member</span>
                <span>35m</span>
                <span>5,000</span>
              </li>
              <li>
                <span>1 Jam Member</span>
                <span>1h 10m</span>
                <span>9,000</span>
              </li>
              <li>
                <span>2 Jam Member</span>
                <span>2h 20m</span>
                <span>18,000</span>
              </li>
              <li>
                <span>3 Jam Member</span>
                <span>3h 30m</span>
                <span>27,000</span>
              </li>
              <li>
                <span>4 Jam Member</span>
                <span>4h 40m</span>
                <span>36,000</span>
              </li>
              <li>
                <span>5 Jam Member</span>
                <span>5h 50m</span>
                <span>45,000</span>
              </li>
              <li>
                <span>Paket Malam</span>
                <span>9h</span>
                <span>50,000</span>
              </li>
            </ul>
          </div>

          <div className="right-column">
            <div className="specs">
              <h2>Spesifikasi PC</h2>
              <ul>
                <li><span>Nvidia (RTX 3070, RTX 3070Ti, RTX 4060 Ti, AMD RX 6600)</span></li>
                <li><span>Processor i5 GEN 12</span></li>
                <li><span>32GB RAM</span></li>
              </ul>
            </div>

            <div className="gear">
              <h2>Gear Equipment</h2>
              <ul>
                <li><span>ASUS XL2546K 240hz, 360hz</span></li>
                <li><span>Logitech G102 Lightsync</span></li>
                <li><span>DBE GM 220</span></li>
              </ul>
            </div>
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
    </>
  );
};

export default MainPage;
