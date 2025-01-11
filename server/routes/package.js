const express = require('express');
const router = express.Router();
const Package = require('../models/Package'); // adjust the path according to your project structure
const { protect, authorize } = require('../middleware/auth');

// Route to get all packages
router.get('/getallpackages', async (req, res) => {
    const packages = await Package.find();
    res.json(packages);
});

// Route to create a package. Only admins should be able to do this.
router.post('/Postpackages', protect, authorize('admin'), async (req, res) => {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.json(newPackage);
});

module.exports = router;
