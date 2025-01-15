import React, { useEffect, useState } from 'react';
import '../styles/schedule.css';

const Schedule = ({ selectedDate, newBooking }) => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Mock booking data for testing
        const mockBookings = [
            { pc: 'PC 1', start: 1, end: 3, name: 'Alice', color: '#ff5733' },
            { pc: 'PC 2', start: 2, end: 5, name: 'Charlie', color: '#33c3ff' },
            { pc: 'PC 3', start: 8, end: 10, name: 'David', color: '#ff33a8' },
            { pc: 'PC 3', start: 10, end: 12, name: 'Eve', color: '#ffcc33' },
        ];

        setBookings(mockBookings);
    }, []);

    useEffect(() => {
        if (newBooking) {
            setBookings(prevBookings => [...prevBookings, newBooking]);
        }
    }, [newBooking]);

    const renderCells = (pc) => {
        const cells = [];
        
        for (let hour = 1; hour <= 24; hour++) {
            const booking = bookings.find(b => b.pc === pc && hour >= b.start && hour < b.end);
            
            if (booking) {
                // Fill the cell with the booking name and color
                cells.push(
                    <td key={hour} style={{ backgroundColor: booking.color }}>
                        {booking.name}
                    </td>
                );
            } else {
                // Render an empty cell for available hours
                cells.push(<td key={hour} className="available"></td>);
            }
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
