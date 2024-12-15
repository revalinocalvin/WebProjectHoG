import React, { useState }from 'react';
import '../../styles/DashboardPage.css'; // Tambahkan CSS untuk styling
import Schedule from '../../components/Schedule';
import BookingPC from '../../components/BookingPC';
import UserProfile from '../../components/UserProfile';
import TimeConfiguration from '../../components/TimeConfiguration';

const DashboardPage = () => {
    const [selectedPC, setSelectedPC] = useState(null);

    const handlePCClick = (pcNumber) => {
        setSelectedPC(pcNumber);
    };

    return (
        <div className="dashboard-container">
            <div className="main-content">
                <div className="mapping-jadwal">
                    <h1>Mapping Jadwal</h1>
                    <Schedule />
                </div>
                <div className="booking-pc">
                    <h1>Denah Computer</h1>
                    <BookingPC onPCClick={handlePCClick} />
                </div>
                {selectedPC && (
                    <TimeConfiguration selectedPC={selectedPC} />
                )}
            </div>
            <div className="user-profil">
                <UserProfile />
            </div>
        </div>
    );
};

export default DashboardPage;