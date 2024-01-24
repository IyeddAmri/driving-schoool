const express = require('express');
const router = express.Router();
const straightroadsController = require('../controllers/straightroadsController');

// Get all lessons
router.get('/lessons', straightroadsController.getAllLessons);

// Add a lesson
router.post('/lessons', straightroadsController.addLesson);

// Update a lesson
router.put('/lessons/:lessonId', straightroadsController.updateLesson);

// Delete a lesson
router.delete('/lessons/:lessonId', straightroadsController.deleteLesson);

module.exports = router;
