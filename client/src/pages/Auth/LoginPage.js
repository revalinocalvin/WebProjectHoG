import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/loginPages.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Reset message

        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                localStorage.setItem('token', data.token);
                setMessage('Login successful!');
                window.location.href = '/dashboard';
            } else {
                const errorData = await response.json();
                console.error('Login failed:', errorData);
                setMessage(errorData.message || 'Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <img src="/hog-logo-bg.png" alt="HOG-Logo" className="hog-logo" />
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="options">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link to="/forgetpass">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                {message && <p className="message">{message}</p>}
                <p className="register-text">
                    Don't have an account? <Link to="/register">Register Now</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
