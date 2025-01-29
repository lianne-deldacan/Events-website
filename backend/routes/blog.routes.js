const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');

// Blog routes
router.post('/', blogController.addBlog); // Create a blog
router.get('/', blogController.getAllBlogs); // Get all blogs
router.get('/:id', blogController.getBlogById); // Get a blog by ID
router.put('/:id', blogController.updateBlog); // Update a blog
router.delete('/:id', blogController.deleteBlog); // Delete a blog

module.exports = router;
