// FAQPage.js
import React, { useState } from 'react';
import '../../styles/faqPage.css';

const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
        question: "Apakah saya bisa memilih spesifikasi komputer tertentu?",
        answer: "Tentu! Kami menyediakan informasi lengkap mengenai spesifikasi komputer di setiap cabang. Anda dapat memilih komputer dengan spesifikasi yang sesuai dengan kebutuhan Anda, seperti untuk gaming, streaming, atau pekerjaan."
        },
        {
        question: "Apakah saya perlu datang tepat waktu sesuai jadwal booking?",
        answer: "Ya, kami menyarankan Anda datang tepat waktu untuk memastikan reservasi Anda tidak hangus. Toleransi keterlambatan adalah 15 menit. Jika terlambat lebih dari itu, reservasi dapat dialihkan ke pelanggan lain."
        },
        {
        question: "Apakah saya bisa membatalkan atau mengubah jadwal booking?",
        answer: "Pembatalan atau perubahan jadwal dapat dilakukan maksimal 3 jam sebelum waktu booking melalui akun Anda di website. Untuk pembatalan mendadak, biaya booking tidak dapat dikembalikan."
        },
        {
        question: "Apakah ada diskon untuk booking dalam waktu lama?",
        answer: "Ya, kami menawarkan diskon khusus untuk reservasi lebih dari 5 jam. Diskon akan otomatis diterapkan saat checkout."
        },
        {
        question: "Apakah ada metode pembayaran yang tersedia?",
        answer: "Kami menerima berbagai metode pembayaran, seperti transfer bank, dompet digital, dan kartu kredit/debit."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
        <h1>FAQ's</h1>
        {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{activeIndex === index ? '-' : '+'}</span> {faq.question}
            </div>
            {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
            )}
            </div>
        ))}
        </div>
    );
};

export default FAQPage;