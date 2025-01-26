const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/book.controller'); 

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
