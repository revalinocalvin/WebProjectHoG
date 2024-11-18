const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: Date,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  update_at: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('News', newsSchema);