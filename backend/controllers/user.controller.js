const User = require('../models/User'); // Assuming you have a User model

// Get all users
// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};


// Delete a user
// In user.controller.js
exports.deleteUser = async (req, res) => {
  try {
    console.log('Deleting user with ID:', req.params.id); // Log the received ID
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};


// Update a user
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user); // Sends the updated user object
  } catch (error) {
    res.status(500).json({ message: 'Error updating user' });
  }
};


