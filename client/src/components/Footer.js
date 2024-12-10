import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'; // Adjust the path to point to the styles folder

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={`${process.env.PUBLIC_URL}../hog-logo-bg.png`} alt="Home of Gamers" />
        </div>
        <div className="footer-contact">
          <p>Jl. Manunggal 2 No.1, RT.8/RW.2, Petukangan Sel., Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12270</p>
          <p>+62 878-7867-2111</p>
          <p>@HomeOfGamers</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Information</h4>
            <Link to="#about">About Us</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="#news">News</Link>
          </div>
          <div className="footer-column">
            <h4>Product</h4>
            <Link to="#booking">Booking</Link>
            <Link to="#rewards">Rewards</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Hak Cipta ©2024 6 Mahasiswa Kuli Pagi FC</p>
      </div>
    </footer>
  );
};

export default Footer;
