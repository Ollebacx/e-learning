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

}

function addMyLesson (req, res) {
  UserModel
    .findById(req.params.id)
    .then(user => {
      user.lessons.push(req.body.lessonId)
      user.save()
        .then(res.json(user))
        .catch(err => console.log(err))
    })
}

/* const addFavMovToUser = (req, res) => {
	const userId = req.params.userId
	const favMovieId = req.body.favMovies
	Users.findById(userId)
		.then(user => {
			user.favMovies.push(favMovieId)
			user.save()
				.then(res.json(user))
				.catch(err => console.log(err))
		})
		.catch(err => console.log(err))
}
 */


function getMyLesson (req, res) {

}

function updateMyLesson (req, res) {

}

function deleteMyLesson (req, res) {

}
