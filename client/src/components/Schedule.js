import React, { useEffect, useState } from 'react';
import '../styles/schedule.css';

const Schedule = ({ selectedDate, newBooking }) => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        if (selectedDate) {
            const formattedDate = selectedDate.toISOString().split('T')[0];
            fetch(`/api/bookings?date=${formattedDate}`)
                .then(response => response.json())
                .then(data => setBookings(data))
                .catch(error => console.error('Error fetching bookings:', error));
        }
    }, [selectedDate]);

    useEffect(() => {
        if (newBooking) {
            setBookings(prevBookings => [...prevBookings, newBooking]);
        }
    }, [newBooking]);

    const renderCells = (pc) => {
        const cells = [];
        for (let hour = 1; hour <= 24; hour++) {
            const booking = bookings.find(booking => booking.pc === pc && hour >= booking.start && hour < booking.end);
            cells.push(
                <td key={hour} className={booking ? 'booked' : 'available'}>
                    {booking ? 'Booked' : ''}
                </td>
            );
        }
        return cells;
    };

    return (
        <table className="schedule-table">
            <thead>
                <tr>
                    <th>PC</th>
                    {[...Array(24)].map((_, i) => <th key={i}>{i + 1}</th>)}
                </tr>
            </thead>
            <tbody>
                {['PC 1', 'PC 2', 'PC 3', 'PC 4', 'PC 5', 'PC 6', 'PC 7', 'PC 8', 'PC 9'].map(pc => (
                    <tr key={pc}>
                        <td>{pc}</td>
                        {renderCells(pc)}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Schedule;