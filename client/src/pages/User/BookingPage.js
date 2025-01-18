import React, { useState } from 'react';
import TimeConfiguration from '../../components/TimeConfiguration';
import Schedule from '../../components/Schedule';

const BookingPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [newBooking, setNewBooking] = useState(null);

    const handleBookingConfirmed = (booking) => {
        setNewBooking(booking);
    };

    return (
        <div>
        <TimeConfiguration selectedPC="PC 1" onBookingConfirmed={handleBookingConfirmed} />
        <Schedule selectedDate={selectedDate} newBooking={newBooking} />
        </div>
    );
};

export default BookingPage;