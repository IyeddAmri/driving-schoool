const express = require('express');
const router = express.Router();
const straightroadsController = require('../controllers/straightroadsController');


router.get('/lessons', straightroadsController.getAllLessons);


router.post('/lessons', straightroadsController.addLesson);


router.put('/lessons/:lessonId', straightroadsController.updateLesson);


router.delete('/lessons/:lessonId', straightroadsController.deleteLesson);

module.exports = router;
