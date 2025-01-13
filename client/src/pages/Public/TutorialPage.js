// TutorialPage.js
import React from 'react';
import '../../styles/tutorialPage.css';

const TutorialPage = () => {
    return (
    <div className="tutorial-container">
        <div className="tutorial-content">
            <h2>Panduan Melakukan Booking Online</h2>
            <img src="/tutor1.png" alt="Tutor Step1" className="tutorial-image" />
            <p>Untuk dapat melakukan booking secara online, pengguna harus melakukan login terlebih dahulu.</p>
            <img src="/tutor2.png" alt="Tutor Step2" className="tutorial-image" />
            <p>Setelah melakukan login, pengguna dapat pergi ke halaman booking untuk melakukan booking online.</p>
            <img src="/tutor3.png" alt="Mapping Jadwal" className="tutorial-image" />
            <p>Pada halaman booking pengguna dapat melihat mapping jadwal dari semua booking online yang tersedia.</p>
            <img src="/tutor4.png" alt="Booking Example" className="tutorial-image" />
            <p>Pemain dapat melakukan booking online dengan cara:</p>
            <p className='tutor-booking'>
            Memilih jadwal (hari + jam bermain).
            <br></br>
            Memilih letak PC yang ingin di booking.
            <br></br>
            Dan memilih paket bermain.
            </p>
            <p>Jika sudah, pengguna berhasil melakukan booking online.</p>
        </div>
    </div>
    );
};

export default TutorialPage;