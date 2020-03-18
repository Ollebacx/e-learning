const Lesson = require('../models/lessons.model')
const User = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getUserLessons,
  // getUserLesson,
  // updateUserLesson,
  addLessonToUser,
  removeLessonFromUser
}

function getUserLessons (req, res) {
  User
    .find(res.locals.user._id, 'lessons')
    .populate('lessons')
    .then(response => res.json({ lessons: response[0].lessons }))
    .catch((err) => handleError(err, res))
}

// function getUserLesson (req, res) {
//   Lesson
//     .create(req.body)
//     .then(lesson => res.json(lesson))
//     .catch((err) => handleError(err, res))
// }

// function updateUserLesson (req, res) {
//   Lesson
//     .findById(req.params.id)
//     .then(lesson => res.json(lesson))
//     .catch((err) => handleError(err, res))
// }

function addLessonToUser (req, res) {
  User
    .update(
      { _id: res.locals.user._id },
      { $push: { lessons: req.params.lessonId } }
    )
    .then(lessons => res.json(lessons))
    .catch((err) => handleError(err, res))
}

function removeLessonFromUser (req, res) {
  User
    .update(
      { _id: res.locals.user._id },
      { $pull: { lessons: req.params.lessonId } }
    )
    .then(lessons => res.json(lessons))
    .catch((err) => handleError(err, res))
}
