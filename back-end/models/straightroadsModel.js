const db = require('../database-sql/index');

const getAll = (callback) => {
  const query = 'SELECT * FROM straightroadstable';
  db.query(query, callback);
};

const create = (newLesson, callback) => {
  const query = "INSERT INTO straightroadstable (PageId, Title, Content, VideoURL, Lessons, Photos) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(query, [newLesson.PageId, newLesson.Title, newLesson.Content, newLesson.VideoURL, newLesson.Lessons, newLesson.Photos], callback);
};

const update = (lessonId, updatedLesson, callback) => {
  const query = 'UPDATE straightroadstable SET ? WHERE PageId = ?';
  db.query(query, [updatedLesson, lessonId], callback);
};

const remove = (lessonId, callback) => {
  const query = 'DELETE FROM straightroadstable WHERE PageId = ?';
  db.query(query, lessonId, callback);
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
