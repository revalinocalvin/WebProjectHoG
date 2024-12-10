import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/bookingPC.css'; // Tambahkan CSS untuk styling

const BookingPC = () => {
    const handlePCClick = (pcNumber) => {
        alert(`Anda memilih PC ${pcNumber}`);
    };

    return (
        <div className="booking-pc-container">
            <h2>Silahkan Pilih Computer Dahulu!</h2>
            <div className="pc-layout">
                <div className="entrance">MASUK</div>
                <div className="pc-selection">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(pc => (
                        <div 
                            key={pc} 
                            className="pc" 
                            onClick={() => handlePCClick(pc)}
                        >
                            <img src="/public/PC.png" alt={`PC ${pc}`} />
                        </div>
                    ))}
                </div>
            </div>
            <button className="tutorial-button">
                <Link to="/tutorial">Lihat Tutorial Booking disini</Link>
            </button>
        </div>
    );
};

export default BookingPC;