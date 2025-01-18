import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Bookings from './pages/bookings';
import AddBooking from './pages/add-bookings';
// import UserManagement from './components/UserManagement'; // Optional

function App() {
    return (
        <Router>
            <div>
                <h1>Admin Panel</h1>
                <nav>
                    <ul>
                        <li><a href="/">Dashboard</a></li>
                        <li><a href="/bookings">Manage Bookings</a></li>
                        <li><a href="/add-booking">Add Booking</a></li>
                        {/* <li><a href="/users">User Management</a></li> // Optional */}
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/add-booking" element={<AddBooking />} />
                    {/* <Route path="/users" element={<UserManagement />} /> // Optional */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
