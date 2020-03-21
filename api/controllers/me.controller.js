const UserLesson = require('../models/userLesson.model')

const { handleError } = require('../utils')

module.exports = {
  getUserLessons,
  getUserLesson,
  updateUserLesson,
  addLessonToUser,
  removeLessonFromUser
}

function getUserLessons (req, res) {
  UserLesson
    .find({ user: res.locals.user._id })
    .then(response => res.json({ lessons: response[0].lessons }))
    .catch((err) => handleError(err, res))
}

function getUserLesson (req, res) {
  UserLesson
    .find({
      user: res.locals.user._id,
      lesson: req.params.lessonId
    })
    .then(lesson => res.json(lesson))
    .catch((err) => handleError(err, res))
}

function updateUserLesson (req, res) {
  UserLesson
    .update({
      user: res.locals.user._id,
      lesson: req.params.lessonId
    }, {
      status: req.body.status
    })
    .then(lesson => res.json(lesson))
    .catch((err) => handleError(err, res))
}

function addLessonToUser (req, res) {
  UserLesson
    .create({
      user: res.locals.user._id,
      lesson: req.params.lessonId
    })
    .then(lessons => res.json(lessons))
    .catch((err) => handleError(err, res))
}

function removeLessonFromUser (req, res) {
  UserLesson
    .remove({
      user: res.locals.user._id,
      lesson: req.params.lessonId
    })
    .then(lessons => res.json(lessons))
    .catch((err) => handleError(err, res))
}
