import React from 'react';
import '../styles/bookingPC.css'; // Tambahkan CSS untuk styling

const BookingPC = () => {
    return (
        <div className="booking-pc-container">
        <p>Silahkan Pilih PC Dahulu</p>
        <div className="pc-selection">
            {/* Ganti dengan komponen atau elemen untuk memilih PC */}
            <div className="pc">PC 1</div>
            <div className="pc">PC 2</div>
            <div className="pc">PC 3</div>
            {/* Tambahkan lebih banyak PC */}
        </div>
        <button className="tutorial-button">Lihat Tutorial Booking disini</button>
        </div>
    );
};

export default BookingPC;