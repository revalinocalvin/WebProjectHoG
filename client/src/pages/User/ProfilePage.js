import React,  { useState } from 'react';
import '../../styles/profilePage.css';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        username: 'Roroaji',
        name: 'Gusti Raden Mas Suryo Rangga',
        email: 'mahasiswakilippgpc123@gmail.com',
        phone: '08121212121'
    });

    const [bookings, setBookings] = useState([
        { date: '24 Desember 2019', pc: 'PC 4', time: '08.00 - 10.00' },
        { date: '24 Desember 2019', reward: 'Billing', points: '300' }
    ]);

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    return (
        <div className="profile-page">
            <header className="profile-header">
                <h1>Profil Saya</h1>
                <p>Kelola informasi profil anda untuk mengontrol, melindungi dan mengamankan akun</p>
            </header>
            <div className="profile-info">
                <div className="profile-details">
                    <h2>Profil</h2>
                    {isEditing ? (
                        <form>
                            <input
                                type="text"
                                name="username"
                                value={profile.username}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="name"
                                value={profile.name}
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                name="email"
                                value={profile.email}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="phone"
                                value={profile.phone}
                                onChange={handleInputChange}
                            />
                        </form>
                    ) : (
                        <>
                            <p>{profile.username} <span>Username</span></p>
                            <p>{profile.name} <span>Nama</span></p>
                            <p>{profile.email} <span>Email</span></p>
                            <p>{profile.phone} <span>No. Telp</span></p>
                        </>
                    )}
                </div>
                <div className="profile-image">
                    <img src="../../" alt="Profile" />
                </div>
                <button className="edit-button" onClick={handleEditClick}>
                    {isEditing ? 'Simpan' : 'Edit'}
                </button>
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