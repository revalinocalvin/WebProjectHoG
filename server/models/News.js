const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const newsschema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    date:{
        type: Date,
        required: true
    }

});

module.exports = mongoose.model('News', newsschema);
