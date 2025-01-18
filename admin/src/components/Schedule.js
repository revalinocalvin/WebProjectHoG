import React, { useEffect, useState } from 'react';
import './schedule.css';

const Schedule = ({ onBookingSelect }) => {
    const [bookings, setBookings] = useState([]);
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    const currentHost = window.location.hostname; // Get the current IP or hostname
    const port = 8080; // Specify the port you want to use
    const apiUrl = `http://${currentHost}:${port}`; // Base API URL

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/bookings/all`); // Adjust the URL if needed
                if (!response.ok) {
                    throw new Error('Failed to fetch bookings');
                }
                const data = await response.json();
                setBookings(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchBookings();
    }, []);

    // Function to convert computerId to PC name
    const getPcName = (computerId) => {
        const pcMapping = {
            1: 'PC 1',
            2: 'PC 2',
            3: 'PC 3',
            4: 'PC 4',
            5: 'PC 5',
            6: 'PC 6',
            7: 'PC 7',
            8: 'PC 8',
            9: 'PC 9',
            // Add more mappings as needed
        };
        return pcMapping[computerId] || 'Unknown PC';
    };

    const renderCells = (pc) => {
        const cells = [];
        
        for (let hour = 0; hour < 24; hour++) {
            const startHour = hour;
            const endHour = hour + 1;
            const booking = bookings.find(b => 
                getPcName(b.computerId) === pc &&
                new Date(b.date).toISOString().split('T')[0] === currentDate && // Match current date
                new Date(b.startTime).getHours() <= startHour &&
                new Date(b.endTime).getHours() > startHour &&
                b.isPaid // Check if booking is paid
            );

            const handleCellClick = () => {
                if (booking) {
                    onBookingSelect(booking); // Call the prop function with the booking
                }
            };

            if (booking) {
                cells.push(
                    <td key={hour} style={{ backgroundColor: '#ffcc00', cursor: 'pointer' }} onClick={handleCellClick}> {/* Set a color for booked slots */}
                        {booking.user.username} {/* Display the username */}
                    </td>
                );
            } else {
                cells.push(<td key={hour} className="available" onClick={handleCellClick}></td>); // Available cell
            }
        }
        
        return cells;
    };
    
    return (
        <table className="schedule-table">
            <thead>
                <tr>
                    <th>PC</th>
                    {[...Array(24)].map((_, i) => <th key={i}>{i}</th>)}
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
