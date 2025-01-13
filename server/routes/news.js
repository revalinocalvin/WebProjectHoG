const express = require('express');
const router = express.Router();
const News = require('../models/News'); // adjust the path according to your project structure
const { protect, authorize } = require('../middleware/auth');

// Route to get all News
router.get('/', async (req, res) => {
    const news = await News.find();      //all role
    res.json(news);
});

// Route to create a News. Only admins should be able to do this.            
router.post('/', protect, authorize('admin'), async (req, res) => {
    const newNews = new News(req.body);                     //admin
    await newNews.save();
    res.json(newNews);
});
// Route to delete a News. Only admins should be able to do this.
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
    const news = await News.findById(req.params.id);
    if (!news) {
        return res.status(404).send('News not found'); // admin
    }
    await News.deleteOne({ _id: req.params.id });
    res.json({ message: 'News removed' });
});

// Route to update a News. Only admins should be able to do this.   
router.put('/:id', protect, authorize('admin'), async (req, res) => {    
    const updatedNews = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });    //admin
    if (!updatedNews) {
        return res.status(404).send('News not found');
    }
    res.json(updatedNews);
});

module.exports = router;