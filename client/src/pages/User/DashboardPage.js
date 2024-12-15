import React, { useState, useEffect  }from 'react';
import '../../styles/DashboardPage.css'; // Tambahkan CSS untuk styling
import Schedule from '../../components/Schedule';
import BookingPC from '../../components/BookingPC';
import UserProfile from '../../components/UserProfile';
import TimeConfiguration from '../../components/TimeConfiguration';

const DashboardPage = () => {
    const [selectedPC, setSelectedPC] = useState(null);
    const [dates, setDates] = useState([]);

    useEffect(() => {
        const current = new Date();
        const startOfWeek = current.getDate() - current.getDay();
        const weekDates = Array.from({ length: 7 }, (_, i) => {
            const date = new Date(current.setDate(startOfWeek + i));
            return {
                day: date.toLocaleDateString('id-ID', { weekday: 'short' }),
                date: date.getDate(),
                isToday: date.toDateString() === new Date().toDateString()
            };
        });
        setDates(weekDates);
    }, []);

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
                <div className="date-display">
                    {dates.map((d, index) => (
                        <div key={index} className={`date-item ${d.isToday ? 'today' : ''}`}>
                            <span>{d.day}</span>
                            <span>{d.date}</span>
                        </div>
                    ))}
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