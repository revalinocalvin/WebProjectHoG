import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = ({ isLoggedIn, username }) => {
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
        <Link to="/main">Rewards</Link>
      </div>
      <div className="navbar-icons">
        {isLoggedIn ? (
          <>
            <img src='/Notification.png' alt="Notifications" className="icon" />
            <img src="/photoprofile.png" alt="User" className="icon" />
            <button className="user-button">{username}</button>
          </>
        ) : (
          <Link to="/login" className="user-button">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
