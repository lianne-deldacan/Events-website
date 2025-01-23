const Customer = require('../models/Customer');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Login customer
exports.loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const customer = await Customer.findOne({ email });

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    if (customer.password !== password) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = customer.getJwtToken()
  console.log(token);

    res.status(200).json({
      message: 'Login successful',
      customer,
      token,
    });
  } catch (err) {
    console.error('Error logging in customer:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Signup customer
exports.signupCustomer = async (req, res) => {
  const { firstName, lastName, email, password, phoneNumber, address } = req.body;
  
  try {
    if(firstName === "" || lastName === "" || email === "" || password === "" || phoneNumber === "" || address === ""){
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingCustomer = await Customer.findOne({email:email});

    if(existingCustomer){
      return res.status(400).json({ message: 'Email is already registered' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const customer = new Customer({
      _id: new mongoose.Types.ObjectId(),
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
    });

    const newCustomer = await customer.save();

    const token = newCustomer.getJwtToken()
    console.log(token);

    return res.status(200).json({
      message: 'Signup successful',
      customer: newCustomer,
      token,
    });
    
  } catch (err) {
    console.error('Error signing up customer:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
}


