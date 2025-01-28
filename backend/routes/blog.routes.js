const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.controller');
const validateBlog = require('../middleware/blogValidation');

// Routes for blog management
router.get('/blogs', blogController.getAllBlogs);
router.get('/blogs/:id', blogController.getBlogById);
router.post('/blogs', validateBlog, blogController.createBlog);
router.put('/blogs/:id', validateBlog, blogController.updateBlog);
router.delete('/blogs/:id', blogController.deleteBlog);

module.exports = router;
