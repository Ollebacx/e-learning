const UserModel = require('../models/users.model')
const { handleError } = require('../utils')

module.exports = {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
  getMyLessons,
  addMyLesson,
  getMyLesson,
  updateMyLesson,
  deleteMyLesson
}

function getAllUsers (req, res) {
  UserModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getUserById (req, res) {
  UserModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function deleteUserById (req, res) {
  UserModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handleError(err, res))
}

function updateUser (req, res) {
  UserModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handleError(err, res))
}

function getMyLessons (req, res) {
  UserModel
    .findById(req.params.id)
    .populate('lessons')
    .then(user => res.json(user.lessons))
    .catch(err => handleError(err, res))
}
function addMyLesson (req, res) {
  UserModel
    .findById(req.params.id)
    .then(user => {
      user.lessons.push(req.body.lessonId)
      user.save()
        .then(res.json(user))
        .catch(err => handleError(err, res))
    })
}

function getMyLesson (req, res) {
  UserModel
    .findById(req.params.id)
    .populate('lessons')
    .then(user => {
      res.json(user.lessons.filter(lesson => lesson._id == req.params.lessonId))
    })
    .catch(err => handleError(err, res))
}

function updateMyLesson (req, res) {

}

function deleteMyLesson (req, res) {

}
