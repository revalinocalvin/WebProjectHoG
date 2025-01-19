import React, { useState } from 'react';
import '../../styles/profilePage.css';
import { Link } from 'react-router-dom'; // Import Link

const ProfilePage = () => {
    const [profile] = useState({
        username: 'Roroaji',
        name: 'Gusti Raden Rangga',
        email: 'mahasiswa@gmail.com',
        phone: '08121212121'
    });

    const [bookings] = useState([
        { date: '24 Desember 2019', pc: 'PC 4', time: '08.00 - 10.00' },
        { date: '24 Desember 2019', reward: 'Billing', points: '300' }
    ]);

    return (
        <div className="profile-page">
            <header className="profile-header">
                <h1>Profil Saya</h1>
                <p>Kelola informasi profil anda untuk mengontrol, melindungi dan mengamankan akun</p>
            </header>
            <div className="profile-info">
                <div className="profile-details">
                    <h2>Profil</h2>
                    <p>{profile.username}<span>: Username</span></p>
                    <p>{profile.name}<span>: Nama</span></p>
                    <p>{profile.email}<span>: Email</span></p>
                    <p>{profile.phone}<span>: No. Telp</span></p>
                </div>
                <div className="profile-image">
                    <img src="photoprofile.png" alt="Profile" />
                </div>
                <Link to="/editprofile" className="edit-button">
                    <img src="editIcon.png" alt="editProfile"/>
                </Link>
            </div>
            <div className="history-section">
                <h2>Riwayat</h2>
                {bookings.map((booking, index) => (
                    <div key={index} className={`history-card ${booking.pc ? 'booking' : 'reward'}`}>
                        <h3>{booking.pc ? 'Booking' : 'Reward'}</h3>
                        <p><strong>{booking.date}</strong></p>
                        {booking.pc && <p>{booking.pc}</p>}
                        {booking.pc && <p>{booking.time}</p>}
                        {booking.reward && <p>{booking.reward}</p>}
                        {booking.reward && <p>{booking.points}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfilePage;
