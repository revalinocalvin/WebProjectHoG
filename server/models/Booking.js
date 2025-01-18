const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // computerId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Pc',
    //     required: true,
    // },
    computerId: { type: Number, required: true },
    // package: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Package',
    //     required: true,
    // },
    package: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    startTime: {
        type: Date, // Anda bisa menggunakan tipe Date untuk menyimpan waktu
        required: true,
    },
    endTime: {
        type: Date, // Anda bisa menggunakan tipe Date untuk menyimpan waktu
        required: true,
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
