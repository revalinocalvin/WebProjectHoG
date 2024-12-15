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
        <div className="web-intro">
          <h2>Ayo Bermain Bersama Kami</h2>
          <p className="game-logos-heading">Kami memiliki ratusan koleksi game yang siap dimainkan.</p>
          <div className="game-logos">
            <img src="/icon-dota.svg" alt="Dota 2" />
            <img src="/icon-steam.svg" alt="Steam" />
            <img src="/icon-gta.svg" alt="GTA V" />
            <img src="/icon-efootball.svg" alt="Football" />
            <img src="/icon-pb.svg" alt="Point Blank" />
            <img src="/icon-cs2.svg" alt="cs2" />
          </div>
          <h3>4 Langkah Mudah untuk Mulai Bermain</h3>
          <div className="steps-icons">
            <div className="step-button">
              <img src="/icon-hp-people.svg" alt="Buat Akun" className="step-icon" />
              <p>Buat Akun</p>
            </div>
            <div className="step-button">
              <img src="/icon-hp-pc.svg" alt="Pilih Komputer" className="step-icon" />
              <p>Pilih Komputer</p>
            </div>
            <div className="step-button">
              <img src="/icon-hp-calendar.svg" alt="Lakukan Pemesanan" className="step-icon" />
              <p>Lakukan Pemesanan</p>
            </div>
            <div className="step-button">
              <img src="/icon-hp-home.svg" alt="Konfirmasi dan Datang" className="step-icon" />
              <p>Konfirmasi dan Datang</p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="packages">
            <h2>Harga Paket <img src="/tag.png" alt="Price Icon" className="price-icon" /></h2>
            <ul>
              <li>
                <span>Paket Member</span>
                <span>Total Waktu</span>
                <span>Harga</span>
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
                <img src="/vga.png" alt="VGA" className="vga-img"/>
                <li><span>Nvidia (RTX 3070, RTX 3070Ti, RTX 4060 Ti, AMD RX 6600)</span></li>
                <img src="CPU.png" alt="CPU" className="cpu-img"/>
                <li><span>Processor i5 GEN 12</span></li>
                <img src="/RAM.png" alt="RAM" className="ram-img"/>
                <li><span>32GB RAM</span></li>
              </ul>
            </div>

            <div className="gear">
              <h2>Gear Equipment</h2>
              <ul>
                <img src="/Monitor.png" alt="Monitor Icon" className="monitor-icon"/>
                <li><span>ASUS XL2546K 240hz, 360hz</span></li>
                <img src="/Mouse.png" alt="Mouse Icon" className="mouse-icon"/>
                <li><span>Logitech G102 Lightsync</span></li>
                <img src="/HEadset.png" alt="Headset Icon" className="headset-icon"/>
                <li><span>DBE GM 220</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="location">
          <h3>LOKASI WARNET HOME OF GAMERS</h3>
          <img src="/Map.png" alt="Map" className="map-img"/>
        </div>
      </div>
    </>
  );
};

export default MainPage;
