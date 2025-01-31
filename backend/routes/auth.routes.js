const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const User = require('../models/User'); 

router.post('/login', authController.loginUser);
router.post('/signup', authController.signupUser);
router.get('/users', authController.getAllUsers);

// ✅ Fix user count route
router.get('/count', async (req, res) => {
  try {
    const userCount = await User.countDocuments({});
    res.json({ count: userCount });
  } catch (err) {
    console.error('Error fetching user count:', err);
    res.status(500).json({ message: 'Error fetching user count' });
  }
});

module.exports = router;
