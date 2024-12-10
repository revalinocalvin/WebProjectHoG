import React, { useEffect, useState } from 'react';
import '../styles/schedule.css'; // Tambahkan CSS untuk styling

const Schedule = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Ambil data dari API
        fetch('/api/bookings')
            .then(response => response.json())
            .then(data => setBookings(data))
            .catch(error => console.error('Error fetching bookings:', error));
    }, []);

    const renderCells = (pc) => {
        const cells = [];
        for (let hour = 1; hour <= 24; hour++) {
            const isBooked = bookings.some(booking => booking.pc === pc && hour >= booking.start && hour < booking.end);
            cells.push(
                <td key={hour} className={isBooked ? 'booked' : 'available'}>
                    {isBooked ? 'Booked' : ''}
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
                {['PC 1', 'PC 2', 'PC 3', 'PC 4','PC 5', 'PC 6', 'PC 7', 'PC 8', 'PC 9'].map(pc => (
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