const express = require('express');
const Product = require('../models/Category');
const router = express.Router();
const categoryController = require('../controllers/category.controller');
const validateCategory = require('../middleware/categoryValidation');
const { validationResult } = require('express-validator');

// Middleware to handle validation errors
const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

// Routes
router.post('/', validateCategory, handleValidationErrors, categoryController.addCategory); // Add a new category
router.put('/:id', categoryController.updateCategory); // Update a category
router.get('/', categoryController.getAllCategories); // Get all categories

router.get('/count', async (req, res) => {
  try {
    const count = await Product.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error counting products:", error);
    res.status(500).send({ error: "Failed to count products" });
  }
});


router.get('/:id', categoryController.getCategoryById); // Get a category by ID
router.delete('/:id', categoryController.deleteCategory); //delete a category

module.exports = router;
