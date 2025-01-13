// RegisterPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/RegisterPage.css';

const RegisterPage = () => {
    return (
        <div className="register-container">
        <div className="register-card">
            <h2>Create an Account</h2>
            <form>
            <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter your username" required />
            </div>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="Enter your phone number" required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" placeholder="Confirm your password" required />
            </div>
            <div className="terms">
                <label>
                <input type="checkbox" required /> I agree with the <a href="#">terms and conditions</a>.
                </label>
            </div>
            <button type="submit" className="register-button">Register</button>
            </form>
            <p className="login-text">
            Already have an account? <Link to="/login">Login Now</Link>
            </p>
        </div>
        </div>
    );
};

export default RegisterPage;