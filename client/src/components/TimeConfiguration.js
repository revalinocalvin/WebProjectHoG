import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/timeConfiguration.css';

class TimeConfiguration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPayment: false,
            bookingDate: '',
            startTime: '',
            endTime: '',
            totalPrice: 0,
            paymentSuccess: false,
        };
    }

    handleSubmit = async (event) => { // Make the function async
        event.preventDefault();
        const { bookingDate, startTime, endTime } = this.state;
    
        const startHour = parseInt(startTime.split(':')[0], 10);
        const startMinute = parseInt(startTime.split(':')[1], 10);
        const endHour = parseInt(endTime.split(':')[0], 10);
        const endMinute = parseInt(endTime.split(':')[1], 10);
        
        // Calculate duration in hours and minutes
        const durationInHours = endHour - startHour + (endMinute - startMinute) / 60;
        const pricePerHour = 50000; // Example price per hour
        const totalPrice = durationInHours * pricePerHour;
    
        this.setState({ showPayment: true, totalPrice });
    
        const startDateTime = new Date(`${bookingDate}T${startTime}:00`);
        const endDateTime = new Date(`${bookingDate}T${endTime}:00`);
    
        // Check if the Date objects are valid
        if (isNaN(startDateTime.getTime()) || isNaN(endDateTime.getTime())) {
            console.error("Invalid date/time format");
            return; // Handle the error as needed
        }
    
        this.setState({
            startDateTime, // You can store the Date objects in the state if needed
            endDateTime,
        });
    
        // Prepare booking details
        const bookingDetails = {
            computerId: this.props.selectedPC, // Get computerId from props
            package: '1', // Use package "1"
            date: bookingDate,
            startTime: startDateTime.toISOString(), // Convert to ISO string
            endTime: endDateTime.toISOString(), // Convert to ISO string
        };
        console.log('Booking Details:', bookingDetails);

        const currentHost = window.location.hostname; // Get the current IP or hostname
        const port = 8080; // Specify the port you want to use
        const apiUrl = `http://${currentHost}:${port}`; // Base API URL

        const endpoint = '/api/bookings/'; // Specific endpoint
    
        try {
            const response = await fetch(`${apiUrl}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` // Use token if applicable
                },
                body: JSON.stringify(bookingDetails),
            });
    
            if (!response.ok) {
                const errorData = await response.json(); // Get the error message from the server
                throw new Error(errorData.error || 'Network response was not ok');
            }
    
            const result = await response.json();
            this.props.onBookingConfirmed(result); // Send the successful booking data
        } catch (error) {
            console.error('Error booking:', error);
            // Optionally, set an error state to display to the user
        }
    };
    

    handlePayment = async () => {
        // Simulate payment success
        this.setState({ paymentSuccess: true });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { selectedPC } = this.props;
        const { showPayment, bookingDate, startTime, endTime, totalPrice, paymentSuccess } = this.state;
        const timeOptions = Array.from({ length: 24 }, (_, i) => {
            const hour = i.toString().padStart(2, '0');
            return `${hour}:30`;
        });

        return (
            <>
                <div className="booking-time">
                    <h1>Atur Waktu Bermain</h1>
                    <h4>Silahkan pilih waktu bermain</h4>
                    <div className="time-configuration">
                        <div className="booking-section">
                            <h1>KOMPUTER {selectedPC}</h1>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Tanggal Booking:
                                    <input type="date" name="bookingDate" onChange={this.handleChange} required />
                                </label>
                                <label>
                                    Jam Mulai:
                                    <select name="startTime" onChange={this.handleChange} required>
                                        {timeOptions.map(time => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </label>
                                <label>
                                    Jam Selesai:
                                    <select name="endTime" onChange={this.handleChange} required>
                                        {timeOptions.map(time => (
                                            <option key={time} value={time}>{time}</option>
                                        ))}
                                    </select>
                                </label>
                                <button type="submit">Konfirmasi</button>
                            </form>
                        </div>
                        <div className="computer-info">
                            <img src="/homepage-bg.png" alt="Komputer" />
                            <div className='info-spec'>
                                <h2>Komputer {selectedPC}</h2>
                                <p>CPU: Intel Core i7-13400k</p>
                                <p>GPU: RTX 4060</p>
                                <p>RAM: 32 GB</p>
                                <br />
                                <p>Monitor: Asus 360hz</p>
                                <p>Mouse: G102 Lightsync</p>
                                <p>Keyboard: Da Red Switch</p>
                                <p>Headset: DBE GM 200</p>
                                <p>Gamepad: Logitech F100</p>
                            </div>
                        </div>
                    </div>
                </div>
                {showPayment && (
                    <div className="payment-section">
                        {!paymentSuccess ? (
                            <div className="payment-details">
                                <h1>Bayar Menggunakan QRIS</h1>
                                <img 
                                    src="/qris.png" 
                                    alt="QRIS" 
                                    onClick={this.handlePayment} // Click to trigger payment success
                                    style={{ cursor: 'pointer' }} // Change cursor to indicate clickable
                                />
                                <h2>PC {selectedPC}</h2>
                                <p>Tanggal Booking: {bookingDate}</p>
                                <p>Jam Mulai: {startTime}</p>
                                <p>Jam Selesai: {endTime}</p>
                                <p>Total Harga: Rp {totalPrice.toLocaleString()}</p>
                            </div>
                        ) : (
                            <div className="payment-success">
                                <h2>Pembayaran Anda telah berhasil diproses</h2>
                                <p>Terima kasih dan selamat bermain! </p>
                            </div>
                        )}
                    </div>
                )}
            </>
        );
    }
}

TimeConfiguration.propTypes = {
    selectedPC: PropTypes.number.isRequired,
    onBookingConfirmed: PropTypes.func,
};

TimeConfiguration.defaultProps = {
    onBookingConfirmed: () => {
        console.log('Booking confirmed');
    },
};

export default TimeConfiguration;
