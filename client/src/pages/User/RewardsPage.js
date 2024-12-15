import React from 'react';
import '../../styles/rewardsPage.css';

const Rewards = () => {
    const coupons = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        type: 'Billing',
        name: 'Kupon Diskon',
        price: 200
    }));

    return (
        <div className="rewards-page">
            <header className="header">
                <div className="points">Poin: 25</div>
            </header>
            <div className="banner">
                <h1>Tukar Poin, Dapet Cupon.</h1>
            </div>
            <div className="tabs">
                <button className="tab active">Semua</button>
                <button className="tab">Billing</button>
                <button className="tab">Snack</button>
            </div>
            <div className="coupon-grid">
                {coupons.map(coupon => (
                    <div key={coupon.id} className="coupon-card">
                        <div className="coupon-type">{coupon.type}</div>
                        <div className="coupon-image">
                            <img src="/cupon.png" alt="Coupon" />
                        </div>
                        <div className="coupon-name">{coupon.name}</div>
                        <div className="coupon-price">{coupon.price} P</div>
                        <button className="redeem-button">Redeem</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Rewards;