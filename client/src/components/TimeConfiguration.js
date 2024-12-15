import React, { Component } from 'react';
import '../styles/timeConfiguration .css';

class TimeConfiguration extends Component {
    render() {
        const { selectedPC } = this.props;
        const timeOptions = Array.from({ length: 24 }, (_, i) => {
            const hour = i.toString().padStart(2, '0');
            return `${hour}:30`;
        });
        return (
            <div className="booking-time">
                <h1>Atur Waktu Bermain</h1>
                <h4>Silahkan pilih waktu bermain</h4>
                <div className="time-configuration">
                    <div className="booking-section">
                        <h2>KOMPUTER {selectedPC}</h2>
                    <form>
                        <label>
                            Tanggal Booking:
                            <input type="date" name="bookingDate" />
                        </label>
                        <label>
                            Jam Mulai:
                            <select name="startTime">
                                {timeOptions.map(time => (
                                    <option key={time} value={time}>{time}</option>
                                ))}
                            </select>
                        </label>
                        <label>
                            Jam Selesai:
                            <select name="endTime">
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
                            <br></br>
                            <p>Monitor: Asus 360hz</p>
                            <p>Mouse: G102 Lightsync</p>
                            <p>Keyboard: Da Red Switch</p>
                            <p>Headset: DBE GM 200</p>
                            <p>Gamepad: Logitech F100</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimeConfiguration;