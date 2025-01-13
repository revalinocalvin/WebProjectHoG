const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const Pcschema = new mongoose.Schema({
    pcnumber: {
        type: String,
        required: true
    },
    pcimage: {
        type: String,
        required: true
    },
    spec: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Pc', Pcschema);
