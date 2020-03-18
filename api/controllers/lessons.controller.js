const Lesson = require('../models/lessons.model')
const { handleError } = require('../utils')

module.exports = {
    getAllLessons,
    createLesson,
    getOneLesson,
    updateLesson,
    deleteLesson,
    getMyLessons,
    addMyLesson,
    getMyLesson,
    updateMyLesson,
    deleteMyLesson
}

function getAllLessons (req,res) {
  Lesson
  .find()
  .then(lessons => res.json(lessons))
  .catch((err) => handleError(err, res))
}

function createLesson (req,res) {
  Lesson
  .create(req.body)
  .then(lesson => res.json(lesson))
  .catch((err) => handleError(err, res))
}

function getOneLesson (req,res) {
  Lesson
  .findById(req.params.id)
  .then(lesson => res.json(lesson))
  .catch((err) => handleError(err, res))
}

function updateLesson (req,res) {
  Lesson
  .findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(lesson => res.json(lesson))
  .catch((err) => handleError(err, res))
}

function deleteLesson (req,res) {
  Lesson
  .deleteOne({ _id: req.params.id })
  .then(response => res.json(response))
  .catch(err => handleError(err, res))
}


function getMyLessons (req, res) {

}



function addMyLesson (req, res) {
  Lesson

}


function getMyLesson (req, res) {

}


function updateMyLesson (req, res) {


}


function deleteMyLesson (req, res) {

}
