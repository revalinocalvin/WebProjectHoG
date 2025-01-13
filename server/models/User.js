const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Menentukan nilai yang valid untuk role
        default: 'user', // Default role adalah 'user'
    },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking'

    }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
