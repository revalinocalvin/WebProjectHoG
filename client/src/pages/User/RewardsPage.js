import React, { useState } from 'react';
import '../../styles/rewardsPage.css';

const Rewards = () => {
    const [activeTab, setActiveTab] = useState('Semua');

    const coupons = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        type: i % 2 === 0 ? 'Billing' : 'Snack',
        name: 'Kupon Diskon',
        price: 200 
    }));

    const filteredCoupons = activeTab === 'Semua' 
        ? coupons 
        : coupons.filter(coupon => coupon.type === activeTab);

    return (
        <div className="rewards-page">
            <header className="header-rewards">
                <div className="points">Poin: 25 💎</div>
            </header>
            <div className="banner">
                <h1 className="tag-rewards">Tukar Poin, Dapet Cupon.</h1>
            </div>
            <div className="tabs">
                {['Semua', 'Billing', 'Snack'].map(tab => (
                    <button 
                        key={tab} 
                        className={`tab ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="coupon-grid">
                {filteredCoupons.map(coupon => (
                    <div key={coupon.id} className="coupon-card">
                        <div className="coupon-type">{coupon.type}</div>
                        <div className="coupon-image">
                            <img src="/cupon.png" alt="Coupon" />
                        </div>
                        <div className="coupon-name">{coupon.name}</div>
                        <div className="coupon-price">{coupon.price} 💎</div>
                        <button className="redeem-button">Redeem</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rewards;