// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="../hog-logo-bg.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/rewards">Rewards</Link>
        <Link to="/login">Login</Link>
      </div>
      <div className="navbar-icons">
        <img src="/path/to/bell-icon.png" alt="Notifications" className="icon" />
        <span className="user-name">Rangga</span>
        <img src="/path/to/user-profile.png" alt="User" className="icon" />
        <button className="user-button">User</button>
      </div>
    </nav>
  );
};

export default Navbar;
