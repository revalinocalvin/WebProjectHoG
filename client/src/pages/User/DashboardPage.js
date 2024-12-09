import React from 'react';
import '../../styles/DashboardPage.css'; // Tambahkan CSS untuk styling
import Schedule from '../../components/Schedule';
import BookingPC from '../../components/BookingPC';
import UserProfile from '../../components/UserProfile';


const DashboardPage = () => {
    return (
        <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div className="mapping-jadwal">
            <h2>Mapping Jadwal</h2>
            <Schedule />
        </div>
        <div className="booking-pc">
            <h2>Booking PC</h2>
            <BookingPC />
        </div>
        <UserProfile />
        </div>
    );
};

export default DashboardPage;