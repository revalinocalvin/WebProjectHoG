import React, { useState } from 'react';

const AddBooking = () => {
    const [formData, setFormData] = useState({
        username: '',
        computerId: '',
        date: '',
        startTime: '',
        endTime: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/bookings/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        // Handle response
    };

    return (
        <div>
            <h2>Add Booking</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" onChange={handleChange} required />
                <input name="computerId" placeholder="Computer ID" onChange={handleChange} required />
                <input type="date" name="date" onChange={handleChange} required />
                <input type="time" name="startTime" onChange={handleChange} required />
                <input type="time" name="endTime" onChange={handleChange} required />
                <button type="submit">Add Booking</button>
            </form>
        </div>
    );
};

export default AddBooking;
