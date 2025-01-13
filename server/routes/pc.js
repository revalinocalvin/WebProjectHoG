const express = require('express');
const router = express.Router();
const Pc = require('../models/Pc'); // adjust the path according to your project structure
const { protect, authorize } = require('../middleware/auth');

// Route to get all packages
router.get('/', async (req, res) => {
    const pc = await Pc.find();
    res.json(pc);
});

// Route to create a package. Only admins should be able to do this.
router.post('/', protect, authorize('admin'), async (req, res) => {
    const newPc = new Pc(req.body);
    await newPc.save();
    res.json(newPc);
});

router.delete('/:id', protect, authorize('admin'), async (req, res) => {
    const pc = await Pc.findById(req.params.id);
    if (!pc) {
        return res.status(404).send('Pc not found');
    }
    await pc.remove();
    res.json({ message: 'Pc removed' });
});
router.put('/:id', protect, authorize('admin'), async (req, res) => {
    const updatedPc = await Pc.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPc) {
        return res.status(404).send('Pc not found');
    }
    res.json(updatedPc);
});

module.exports = router;
