const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/book.controller'); 
const Booking = require('../models/Book'); 

// Booking count route (now it's using '/count' as the correct route)
router.get('/count', async (req, res) => {
  try {
    const bookingCount = await Booking.countDocuments({});
    res.json({ count: bookingCount });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching booking count' });
  }
});

// Route: Create a new booking
router.post('/', bookingController.createBooking);

// Route: Get all bookings
router.get('/', bookingController.getBookings);

// Route: Get a single booking by ID
router.get('/:id', bookingController.getBookingById);

// Route: Update a booking
router.put('/:id', bookingController.updateBooking);

// Route: Delete a booking
router.delete('/:id', bookingController.deleteBooking);


module.exports = router;
