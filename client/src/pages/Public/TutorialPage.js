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
            <img src="path/to/image2.jpg" alt="Mapping Jadwal" className="tutorial-image" />
            <p>Pada halaman booking pengguna dapat melihat mapping jadwal dari semua booking online yang tersedia.</p>
            <img src="path/to/image3.jpg" alt="Booking Example" className="tutorial-image" />
            <p>Pemain dapat melakukan booking online dengan cara:</p>
            <ul>
                <li>Memilih jadwal (hari + jam bermain).</li>
                <li>Memilih letak PC yang ingin di booking.</li>
                <li>Dan memilih paket bermain.</li>
            </ul>
            <p>Jika sudah, pengguna berhasil melakukan booking online.</p>
        </div>
    </div>
    );
};

export default TutorialPage;