import React, { createContext, useContext, useState, useEffect } from 'react';

// Create context
const AuthContext = createContext();

// Create hook to use context
export const useAuth = () => useContext(AuthContext);

// Create provider to wrap the application
export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({ token: null, username: null });

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        const savedUsername = localStorage.getItem('username');
        if (savedToken && savedUsername) {
            setAuthData({ token: savedToken, username: savedUsername });
        }
    }, []);

    const login = (newToken, newUsername) => {
        localStorage.setItem('token', newToken);
        localStorage.setItem('username', newUsername);
        setAuthData({ token: newToken, username: newUsername });
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setAuthData({ token: null, username: null });
    };

    return (
        <AuthContext.Provider value={{ ...authData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
