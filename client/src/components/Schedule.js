// components/Schedule.js
import React from 'react';
import '../styles/schedule.css'; // Tambahkan CSS untuk styling

const Schedule = () => {
    return (
        <table className="schedule-table">
        <thead>
            <tr>
            <th>PC</th>
            <th>Jam 1</th>
            <th>Jam 2</th>
            <th>Jam 3</th>
            {/* Tambahkan lebih banyak jam sesuai kebutuhan */}
            </tr>
        </thead>
        <tbody>
            {/* Contoh data, ganti dengan data dinamis */}
            <tr>
            <td>PC 1</td>
            <td className="booked">Booked</td>
            <td></td>
            <td className="available">Available</td>
            </tr>
            {/* Tambahkan lebih banyak baris untuk PC lainnya */}
        </tbody>
        </table>
    );
};

export default Schedule;