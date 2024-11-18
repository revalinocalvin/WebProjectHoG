const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  package_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'packages',
    required: true
  },
  computer_spec_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'pc',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  duration: {
    type: Number, // durasi dalam jam atau menit
    required: true
  },
  total_price: {
    type: Number,
    required: true
  },
  payment_status: {
    type: String,
    enum: ['Paid', 'Pending', 'Canceled'], // pilihan status pembayaran
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware pre-delete untuk menghapus booking terkait
bookingSchema.pre('deleteOne', { document: true, query: true }, async function (next) {
 // const bookingId = this._id;
	//await this.model('User').updateMany(
		//{ 'tickets.showtime': showtimeId },
		//{ $pull: { tickets: { showtime: showtimeId } } }
	//)
  //console.log(`Booking with ID ${bookingId} is being deleted`);
  //next()
});

module.exports = mongoose.model('Booking', bookingSchema);
