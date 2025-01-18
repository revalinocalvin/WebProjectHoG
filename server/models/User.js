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
    phonenumber:{
        type: String,
        required: false,
    },
    pictures:{
        type: String,
        required: false
    },
    email:{
        type:String,
        required: false,
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
    points:{
        type: Number,
        default: 0
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
