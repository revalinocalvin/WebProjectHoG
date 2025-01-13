const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const { validateBooking, validateResults } = require('../middleware/validate');
const Booking = require('../models/Booking');
const Package = require('../models/Package'); // adjust the path according to your project structure
const User = require('../models/User');

// Booking Komputer
router.post('/', [protect, validateBooking, validateResults], async (req, res) => {
    const { computerId, packageId, date } = req.body;

    // Check if the package exists
    const package = await Package.findById(packageId);
    if (!package) {
        return res.status(400).send('Invalid package ID');
    }

    // Cek apakah komputer sudah dibooking pada tanggal yang sama
    const existingBooking = await Booking.findOne({ computerId, date });
    if (existingBooking) {
        return res.status(400).send('Computer is already booked on this date');
    }

    const newBooking = new Booking({ user: req.user.id, computerId, package, date });    //POST http://port/api/bookings
    await newBooking.save();
    
    // Update user bookings
    await User.findByIdAndUpdate(req.user.id, { $push: { bookings: newBooking._id } });
    res.status(201).send('Booking created');
});

// Update Status Pembayaran
router.put('/:id/pay', protect, async (req, res) => {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).send('Booking not found');      //PUT http://port/api/bookings/booking_id/pay 
    booking.isPaid = true;
    await booking.save();
    res.status(200).send('Payment status updated');            
});

// Endpoint untuk Admin Melihat Riwayat Booking Pengguna Lain
router.get('/user/:userId', [protect, authorize('admin')], async (req, res) => {
    // Cek apakah pengguna adalah admin
    if (req.user.role !== 'admin') {
        return res.status(403).send('Access denied.');
    }

    const bookings = await Booking.find({ user: req.params.userId }).populate('user', 'username');
    if (bookings.length === 0) {
        return res.status(404).send('No bookings found for this user.');
    }
    res.status(200).json(bookings);
});

// Endpoint untuk Pengguna Melihat Riwayat Booking Mereka Sendiri
router.get('/', protect, async (req, res) => {
    const bookings = await Booking.find({ user: req.user.id }).populate('user', 'username');
    if (bookings.length === 0) {
        return res.status(404).send('No bookings found for this user.');
    }
    res.status(200).json(bookings);
});


module.exports = router;


// Update Status Pembayaran
router.put('/:id/pay', protect, async (req, res) => {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).send('Booking not found');      //PUT http://port/api/bookings/booking_id/pay 
    booking.isPaid = true;
    await booking.save();
    res.status(200).send('Payment status updated');            
});

// Endpoint untuk Admin Melihat Riwayat Booking Pengguna Lain
router.get('/user/:userId', [protect, authorize('admin')], async (req, res) => {
    // Cek apakah pengguna adalah admin
    if (req.user.role !== 'admin') {
        return res.status(403).send('Access denied.');
    }

    const bookings = await Booking.find({ user: req.params.userId }).populate('user', 'username');
    if (bookings.length === 0) {
        return res.status(404).send('No bookings found for this user.');
    }
    res.status(200).json(bookings);
});

// Endpoint untuk Pengguna Melihat Riwayat Booking Mereka Sendiri
router.get('/', protect, async (req, res) => {
    const bookings = await Booking.find({ user: req.user.id }).populate('user', 'username');
    if (bookings.length === 0) {
        return res.status(404).send('No bookings found for this user.');
    }
    res.status(200).json(bookings);
});


module.exports = router;
