// FAQPage.js
import React, { useState } from 'react';
import '../../styles/faqPage.css';

const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
        question: "Bagaimana cara booking",
        answer: "Tidak ada penemu bebek seperti kita menemukan suatu benda atau menciptakan sesuatu. Bebek adalah jenis burung air yang sudah ada sejak jutaan tahun lalu. Para ilmuwan telah menemukan fosil bebek purba yang menunjukkan bahwa hewan ini telah berevolusi selama berabad-abad. Jadi, bukan seorang individu yang menemukan bebek, melainkan proses evolusi alamiah yang panjang."
        },
        {
        question: "Siapa penemu Gacoan",
        answer: "Informasi tentang penemu Gacoan belum tersedia."
        },
        {
        question: "Siapa penemu Bebek",
        answer: "Informasi tentang penemu Bebek belum tersedia."
        },
        {
        question: "Siapa penemu Bebek",
        answer: "Informasi tentang penemu Bebek belum tersedia."
        },
        {
        question: "Siapa penemu Bebek",
        answer: "Informasi tentang penemu Bebek belum tersedia."
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