const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();

// Validasi untuk registrasi
const validateRegister = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];


// Registrasi User
router.post('/register', validateRegister, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.status(201).send('User registered');
});


// Login User
router.post('/login', async (req, res) =>{
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
});


// Get user profile
router.get('/profile', protect, async (req, res) => {
    const user = await User.findById(req.user.id);
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.status(200).json(user);
});


// Admin gets all users
router.get('/all', [protect, authorize('admin')], async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
});

router.delete('/:id', [protect, authorize('admin')], async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return res.status(404).send('User not found');
    }
    await user.remove();
    res.status(200).send('User removed');
});


module.exports = router;
