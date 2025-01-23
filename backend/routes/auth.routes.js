const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.loginCustomer); // Customer login
router.post('/signup', authController.signupCustomer); // Customer signup


module.exports = router;