const mongoose = require('mongoose');

const pcSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },
  pc_sec: {
    type: String,
    required: true
  },
  is_available: {
    type: Boolean,
    required: true
  },
  location: {
    type: String, // durasi dalam jam atau menit
    required: true
  }
});

module.exports = mongoose.model('Pc', pcSchema);