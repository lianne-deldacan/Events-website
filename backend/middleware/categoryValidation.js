const { check } = require('express-validator');

// Validation rules for category
const validateCategory = [
    check('name')
        .notEmpty()
        .withMessage('Category name is required') // Ensure name is provided
        .isLength({ min: 3 })
        .withMessage('Category name must be at least 3 characters long') // Minimum length validation
        .matches(/^[a-zA-Z\s]+$/)
        .withMessage('Category name can only contain letters and spaces') // No special characters or numbers
        .trim()
        .escape(), // Prevent injection attacks
];

module.exports = validateCategory;
