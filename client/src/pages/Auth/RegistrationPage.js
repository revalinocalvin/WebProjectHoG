import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/RegisterPage.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const currentHost = window.location.hostname; // Get the current IP or hostname
        const port = 8080; // Specify the port you want to use
        const apiUrl = `http://${currentHost}:${port}`; // Base API URL

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password
                })
            });

            if (response.ok) {
                alert('Registration successful');
                window.location.href = '/login';
                // Redirect to login or dashboard
            } else {
                const data = await response.json();
                alert(data.errors ? data.errors.map(err => err.msg).join(', ') : 'Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
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
