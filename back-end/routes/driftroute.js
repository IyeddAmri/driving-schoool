
const express = require('express');
const router = express.Router();
const driftController = require('../controllers/driftcontroller');


router.get('/lesson', driftController.getAllLessons);


router.post('/lesson', driftController.addLesson);

router.put('/lesson/:lessonId', driftController.updateLesson);


router.delete('/lesson/:lessonId', driftController.deleteLesson);

module.exports = router;
