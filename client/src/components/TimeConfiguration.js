import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/timeConfiguration .css';

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

    handleSubmit = (event) => {
        event.preventDefault();
        const { startTime, endTime } = this.state;
        const startHour = parseInt(startTime.split(':')[0], 10);
        const endHour = parseInt(endTime.split(':')[0], 10);
        const duration = endHour - startHour;
        const pricePerHour = 50000; // Example price per hour
        const totalPrice = duration * pricePerHour;

        this.setState({ showPayment: true, totalPrice });
    };

    // Inside TimeConfiguration component
    handlePayment = () => {
        this.setState({ paymentSuccess: true });
        const { bookingDate, startTime, endTime } = this.state;
        this.props.onBookingConfirmed({
            date: bookingDate,
            start: parseInt(startTime.split(':')[0], 10),
            end: parseInt(endTime.split(':')[0], 10),
            pc: this.props.selectedPC,
        });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { selectedPC } = this.props;
        const { showPayment, bookingDate, startTime, endTime, totalPrice, paymentSuccess } = this.state;
        const timeOptions = Array.from({ length: 24 }, (_, i) => {
            const hour = i.toString().padStart(2, '0');
            return `${hour}:00`;
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