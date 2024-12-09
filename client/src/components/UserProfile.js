// components/UserProfile.js
import React from 'react';
import '../styles/userProfile.css'; // Tambahkan CSS untuk styling

const UserProfile = () => {
    return (
        <div className="user-profile">
        <h3>Rangga</h3>
        <p>Sisa Billing: 1 Jam 08 Menit</p>
        <div className="next-booking">
            <h4>Booking Berikutnya</h4>
            <p>Kamis, 28 Oktober</p>
            <p>19:00 - 23:30</p>
            <button>Konfirmasi</button>
            <button>Batal</button>
        </div>
        </div>
    );
};

export default UserProfile;