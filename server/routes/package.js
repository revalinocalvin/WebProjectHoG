const express = require('express');
const router = express.Router();
const Package = require('../models/Package'); // adjust the path according to your project structure
const { protect, authorize } = require('../middleware/auth');

// Route to get all packages
router.get('/', async (req, res) => {
    const packages = await Package.find();
    res.json(packages);
});

// Route to create a package. Only admins should be able to do this.
router.post('/', protect, authorize('admin'), async (req, res) => {
    const newPackage = new Package(req.body);        //admin
    await newPackage.save();
    res.json(newPackage);
});

router.delete('/:id', protect, authorize('admin'), async (req, res) => {
    const package = await Package.findById(req.params.id);
    if (!package) {
        return res.status(404).send('Paket not found');          //admim
    }
    await package.remove();
    res.json({ message: 'Paket removed' });
});

router.put ('/:id', protect, authorize('admin'), async (req, res) => {
    const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPackage) {
        return res.status(404).send('Paket not found');          //admin
    }
    res.json(updatedPackage);
});

module.exports = router;
