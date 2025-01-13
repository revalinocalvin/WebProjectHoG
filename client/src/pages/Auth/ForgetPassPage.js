import React from 'react';
import '../../styles/forgetPassword.css';

function ForgetPassword() {
    return (
        <div className="forget-password-container">
            <div className="forget-password-box">
                <h2>Atur ulang password</h2>
                <p>Masukkan email yang terdaftar untuk mendapatkan kode verifikasi</p>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                    <button type="submit">Lanjut</button>
                </form>
            </div>
        </div>
    );
}

export default ForgetPassword;