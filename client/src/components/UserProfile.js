// components/UserProfile.js
import React, { useState, useEffect } from 'react';
import '../styles/userProfile.css'; // Tambahkan CSS untuk styling
import { Link } from 'react-router-dom';

const UserProfile = () => {
    // State untuk menyimpan data user
    const [userData, setUserData] = useState({
        username: '',
        points: 0,
        billingTime: '',
        nextBooking: {
            date: '',
            startTime: '',
            pcNumber: '',
            endTime: '',
        },
    });

    // Ambil data user saat komponen dimount
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token'); // Ambil token login dari localStorage
                const response = await fetch('/api/user/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Gagal mengambil data user');
                }
                const data = await response.json();
                setUserData({
                    username: data.username,
                    points: data.points,
                    billingTime: data.billingTime,
                    nextBooking: data.nextBooking,
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);


return (
        <div className="user-profile">
            <Link to="/profile">
                <img src="photoprofile.png" alt="Profile" className="profile-pic" />
            </Link>
            <div className="profile-header">
                <h3>{userData.username || 'username...'}</h3>
                <p className="points">POIN: {userData.points}</p>
            </div>
            <div className="billing-info">
                <p>Sisa Billing Anda</p>
                <p className="billing-time">{userData.billingTime || 'Tidak ada data'}</p>
            </div>
            <div className="next-booking">
                <h4>Booking Berikutnya</h4>
                <p>{userData.nextBooking.date || 'Tidak ada booking berikutnya'}</p>
                <div className="booking-info">
                    <span>{userData.nextBooking.startTime || '--:--'}</span>
                    <span>{userData.nextBooking.pcNumber || 'PC --'}</span>
                    <span>{userData.nextBooking.endTime || '--:--'}</span>
                </div>
                <button>Konfirmasi</button>
                <button>Batalkan</button>
            </div>
            <Link to="/profile">
                <button className="history-button" >Riwayat Booking</button>
            </Link>
            
            
        </div>
    );
};

export default UserProfile;