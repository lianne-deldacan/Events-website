const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Authentication routes
router.post('/login', authController.loginUser);
router.post('/signup', authController.signupUser);
router.get('/users', authController.getAllUsers); // Fetch all users

module.exports = router;
