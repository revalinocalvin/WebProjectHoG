import React, { useState, useEffect } from 'react';
import Schedule from '../components/Schedule'; // Assuming you have this component
import './dashboard.css'; // Create this CSS file for styling

const Dashboard = () => {
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [bookings, setBookings] = useState([]);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const currentHost = window.location.hostname; // Get the current IP or hostname
        const port = 8080; // Specify the port you want to use
        const apiUrl = `http://${currentHost}:${port}`; // Base API URL
    
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

    const handleBookingSelect = (booking) => {
        setSelectedBooking(booking);
    };

    return (
        <div className="dashboard-container">
            <div className="schedule-section">
                <Schedule onBookingSelect={handleBookingSelect} />
                <div className="booking-details">
                    {selectedBooking ? (
                        <div>
                            <h3>Booking Details</h3>
                            <p>Name: {selectedBooking.name}</p>
                            <p>Email: {selectedBooking.email}</p>
                            <p>Phone: {selectedBooking.phone}</p>
                            <p>Enroll Number: {selectedBooking.enrollNumber}</p>
                            <p>Date of Admission: {selectedBooking.dateOfAdmission}</p>
                        </div>
                    ) : (
                        <p>Select a booking to see details</p>
                    )}
                </div>
            </div>
            <div className="booking-list-section">
                <h2>Booking List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Enroll Number</th>
                            <th>Date of Admission</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id}>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phone}</td>
                                <td>{booking.enrollNumber}</td>
                                <td>{booking.dateOfAdmission}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button className="add-booking-button">Add New Booking</button>
            </div>
            <div className="sidebar">
                <div className="date-time">
                    <h3>{new Date().toLocaleDateString()}</h3>
                    <h2>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h2>
                </div>
                <div className="navigation">
                    <button>Settings</button>
                    <button>Content Editing</button>
                    <button>Announcement Making</button>
                    <button>Dashboard</button>
                </div>
                <div className="notifications">
                    <h3>Notifications</h3>
                    {notifications.map((notification, index) => (
                        <div key={index} className="notification-item">
                            {notification.message}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
