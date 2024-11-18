const mongoose = require('mongoose');

const rewardSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  points_earned: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  update_reward: {
    type: Date, // durasi dalam jam atau menit
    required: true
  }
});

module.exports = mongoose.model('Reward', rewardSchema);