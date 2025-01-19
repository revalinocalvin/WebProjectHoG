import React, { useState, useEffect } from 'react';
import '../../styles/DashboardPage.css';
import Schedule from '../../components/Schedule';
import BookingPC from '../../components/BookingPC';
import UserProfile from '../../components/UserProfile';
import TimeConfiguration from '../../components/TimeConfiguration';

const DashboardPage = () => {
    const [selectedPC, setSelectedPC] = useState(null);
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const current = new Date();
        const weekDates = Array.from({ length: 7 }, (_, i) => {
            const date = new Date(current);
            date.setDate(current.getDate() + i);
            return {
                day: date.toLocaleDateString('id-ID', { weekday: 'short' }),
                date: date,
                isToday: date.toDateString() === new Date().toDateString()
            };
        });
        setDates(weekDates);
        setSelectedDate(weekDates[0].date); // Set initial selected date
    }, []);

    const handlePCClick = (pcNumber) => {
        setSelectedPC(pcNumber);
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };

    const handleBookingConfirmed = (bookingDetails) => {
        setBookings(prevBookings => [...prevBookings, bookingDetails]);
    };

    return (
        <div className="dashboard-container">
            <div className="main-content">
                <div className="mapping-jadwal">
                    <h1>Mapping Jadwal</h1>
                    <Schedule selectedDate={selectedDate} />
                </div>
                <div className="date-display">
                    {dates.map((d, index) => (
                        <button 
                            key={index} 
                            className={`date-item ${d.isToday ? 'today' : ''} ${selectedDate?.getTime() === d.date.getTime() ? 'selected' : ''}`}
                            onClick={() => handleDateClick(d.date)}
                            >
                            <span>{d.day}</span>
                            <span>{d.date.getDate()}</span>
                        </button>
                    ))}
                </div>
                <div className="booking-pc">
                    <h1>Denah Computer</h1>
                    <BookingPC onPCClick={handlePCClick} />
                </div>
                {selectedPC && (
                    <TimeConfiguration selectedPC={selectedPC}
                        onBookingConfirmed={(bookingDetails) => {
                        console.log('Booking confirmed:', bookingDetails);
                        // Handle booking confirmation logic here
                        }}
                    />
                )}
            </div>
            <div className="user-profil">
                    <UserProfile />
            </div>
        </div>
    );
};

export default DashboardPage;
