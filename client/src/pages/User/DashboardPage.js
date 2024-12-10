import React from 'react';
import '../../styles/DashboardPage.css'; // Tambahkan CSS untuk styling
import Schedule from '../../components/Schedule';
import BookingPC from '../../components/BookingPC';
import UserProfile from '../../components/UserProfile';

const DashboardPage = () => {
    return (
        <div className="dashboard-container">
            <div className="main-content">
                <div className="mapping-jadwal">
                    <h1>Mapping Jadwal</h1>
                    <Schedule />
                </div>
                <div className="booking-pc">
                    <h1>Booking PC</h1>
                    <BookingPC />

                </div>
            </div>
            <div className="user-profil"><UserProfile /></div>
        </div>
    );
};

export default DashboardPage;