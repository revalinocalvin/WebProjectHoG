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
