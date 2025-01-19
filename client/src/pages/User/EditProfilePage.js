import React, { useState } from 'react';
import '../../styles/editProfilePage.css';
import { Link } from 'react-router-dom';

const EditProfile = ({ profile = {}, setProfile }) => {
    const [localProfile, setLocalProfile] = useState({
        username: profile.username || '',
        name: profile.name || '',
        email: profile.email || '',
        phone: profile.phone || ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLocalProfile({ ...localProfile, [name]: value });
    };

    const handleSave = () => {
        setProfile(localProfile);
        // Navigate back to the profile page
    };

    return (
        <div className="edit-profile-page">
            <header className="edit-profile-header">
                <h1>Perbarui Profil</h1>
                <p>Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun</p>
            </header>
            <div className="edit-profile-form">
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={localProfile.username}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Nama</label>
                    <input
                        type="text"
                        name="name"
                        value={localProfile.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={localProfile.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>No. Telp</label>
                    <input
                        type="text"
                        name="phone"
                        value={localProfile.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <button className="save-button" onClick={handleSave}>
                    Simpan
                </button>
            </div>
            <div className="settings-section">
                <h2>Setting</h2>
                <button className="change-password-button">Change Password</button>
                <button className="logout-button">Log Out</button>
                <Link to="/profile">
                    <button className="back-profile-button">Back</button>
                </Link>
            </div>
        </div>
    );
};

export default EditProfile;