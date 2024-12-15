// LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/loginPages.css';

const LoginPage = () => {
    return (
        <div className="login-container">
        <div className="login-card">
            <img src="/hog-logo-bg.png" alt="HOG-Logo" className="hog-logo" />
            <h2>Log In</h2>
            <form>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter your username" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            <div className="options">
                <label>
                <input type="checkbox" /> Remember me
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="login-button">Login</button>
            </form>
            <p className="register-text">
            Don't have an account? <Link to="/register">Register Now</Link>
            </p>
        </div>
        </div>
    );
};

export default LoginPage;