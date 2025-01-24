const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.loginUser); // Customer login
router.post('/signup', authController.signupUser); // Customer signup


module.exports = router;