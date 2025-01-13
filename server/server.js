const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user'); // Make sure to create this file
const bookingRoutes = require('./routes/booking'); // Make sure to create this file
const packageRoutes = require('./routes/package');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/bookings', bookingRoutes); // Authentication middleware is now included in the bookings routes
app.use('/api/packages', packageRoutes); // Authentication middleware is now included in the packages routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
