const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');
const Blog = require('../models/Blog');

// Blog count route (should be defined before other routes that use :id)
router.get('/count', async (req, res) => {
  try {
    const blogCount = await Blog.countDocuments({});
    res.json({ count: blogCount });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching blog count' });
  }
});

// Blog routes
router.post('/', blogController.addBlog); // Create a blog
router.get('/', blogController.getAllBlogs); // Get all blogs
router.get('/:id', blogController.getBlogById); // Get a blog by ID
router.put('/:id', blogController.updateBlog); // Update a blog
router.delete('/:id', blogController.deleteBlog); // Delete a blog




module.exports = router;
