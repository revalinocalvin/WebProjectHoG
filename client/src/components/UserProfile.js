// components/UserProfile.js
import React from 'react';
import '../styles/userProfile.css'; // Tambahkan CSS untuk styling
//import profilePic from '../assets/profile-pic.jpg'; // Path to profile picture

const UserProfile = () => {
    return (
        <div className="user-profile">
            <div className="profile-header">
                <img src='/public/logo192.png' alt="Profile" className="profile-pic"/>
                <h3>Roroaji</h3>
                <p className="points">POIN: 25</p>
            </div>
            <div className="billing-info">
                <p>Sisa Billing Anda</p>
                <p className="billing-time">1 Jam 20 Menit</p>
            </div>
            <div className="next-booking">
                <h4>Booking Berikutnya</h4>
                <p>Kamis, 28 Oktober</p>
                <div className="booking-time">
                    <span>19:00</span>
                    <span>PC 5</span>
                    <span>23:30</span>
                </div>
                <button>Konfirmasi</button>
                <button>Batalkan</button>
            </div>
            <button className="history-button">Riwayat Booking</button>
        </div>
    );
};

export default UserProfile;