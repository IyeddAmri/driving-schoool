
const db = require('../database-sql/index');

const getAll = (callback) => {
  db.query('SELECT * FROM driftingtable', callback);
};

const create = (newLesson, callback) => {
  db.query('INSERT INTO driftingtable SET ?', newLesson, callback);
};

const update = (lessonId, params, callback) => {
  db.query('UPDATE driftingtable SET ? WHERE PageId = ?', [params, lessonId], callback);
};

const remove = (lessonId, callback) => {
  db.query('DELETE FROM driftingtable WHERE PageId = ?', lessonId, callback);
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};