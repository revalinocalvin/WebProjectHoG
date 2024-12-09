import React from 'react';
import '../styles/button.css'; // Jika ada styling khusus

const Button = ({ onClick, label }) => {
    return (
        <button className="custom-button" onClick={onClick}>
        {label}
        </button>
    );
};

export default Button;
