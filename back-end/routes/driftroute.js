
const express = require('express');
const router = express.Router();
const driftController = require('../controllers/driftcontroller');


router.get('/lessons', driftController.getAllLessons);


router.post('/lessons', driftController.addLesson);

router.put('/lessons/:lessonId', driftController.updateLesson);


router.delete('/lessons/:lessonId', driftController.deleteLesson);

module.exports = router;
