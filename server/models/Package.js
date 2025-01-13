const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    points:{
        type:Number,
        required: true
    }
});

module.exports = mongoose.model('Package', packageSchema);
