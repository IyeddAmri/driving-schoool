
const driftModel = require('../models/driftmodel');

const getAllLessons = (req, res) => {
  driftModel.getAll((error, results) => {
    if (error) {
      console.error("Error fetching drift lessons:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
};

const addLesson = (req, res) => {
  const newLesson = req.body;

  driftModel.create(newLesson, (error, result) => {
    if (error) {
      console.error("Error adding drift lesson:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(201).json({ message: "Drift lesson added successfully", lesson: result });
    }
  });
};

const updateLesson = (req, res) => {
  const params = req.body;
  const lessonId = req.params.lessonId;

  driftModel.update(lessonId, params, (err, results) => {
    if (err) {
      console.error("Error updating drift lesson:", err);
      res.status(500).send(err);
    } else {
      console.log("Drift lesson updated successfully:", results);
      res.json(results);
    }
  });
};

const deleteLesson = (req, res) => {
  const lessonId = req.params.lessonId;

  driftModel.remove(lessonId, (error, result) => {
    if (error) {
      console.error("Error deleting drift lesson:", error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ message: "Drift lesson deleted successfully" });
    }
  });
};

module.exports = {
  getAllLessons,
  addLesson,
  updateLesson,
  deleteLesson,
};
//////////////////////////////