import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import '../styles/navbar.css';

const Navbar = () => {
  const { token, logout, username } = useAuth(); // Ambil token dan fungsi logout dari context
  const isLoggedIn = !!token; // Jika token ada, anggap user sudah login

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src="../hog-logo-bg.png" alt="Logo" />
        </Link>
      </div>
      <div className="logo-text">
        <Link to="/">HOME OF GAMERS</Link>
      </div>
      <div className="navbar-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/rewards">Rewards</Link>
      </div>
      <div className="navbar-icons">
        {isLoggedIn ? (
          <>
            <img src='/Notification.png' alt="Notifications" className="icon" />
            <img src="/photoprofile.png" alt="User" className="icon" />
            <button className="user-button">{username}</button>
            <button onClick={logout} className="user-button">Logout</button>
          </>
        ) : (
          <Link to="/login" className="user-button">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
