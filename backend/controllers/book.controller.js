const mongoose = require('mongoose');
const Booking = require('../models/Book');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { name, email, phone, eventType, participants, appointmentDate, appointmentTime, notes } = req.body;

    // Validate input
    if (!name || !email || !phone || !eventType || !participants || !appointmentDate || !appointmentTime) {
      return res.status(400).json({ status: 'fail', message: 'All required fields must be filled' });
    }

    const booking = new Booking({ name, email, phone, eventType, participants, appointmentDate, appointmentTime, notes });
    await booking.save();

    res.status(201).json({ status: 'success', data: booking });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Get all bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ status: 'success', data: bookings });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Get a booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ status: 'fail', message: 'Booking not found' });

    res.status(200).json({ status: 'success', data: booking });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Update a booking
exports.updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!booking) return res.status(404).json({ status: 'fail', message: 'Booking not found' });

    res.status(200).json({ status: 'success', message: 'Booking updated successfully', data: booking });
  } catch (error) {
    res.status(400).json({ status: 'error', message: error.message });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ status: 'fail', message: 'Booking not found' });

    res.status(200).json({ status: 'success', message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
