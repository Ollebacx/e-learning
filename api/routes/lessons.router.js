const router = require('express').Router()

const {
  getAllLessons,
  createLesson,
  getOneLesson,
  updateLesson,
  deleteLesson
} = require('../controllers/lessons.controller')

router.get('/', getAllLessons)
router.post('/', createLesson)
router.get('/:id', getOneLesson)
router.put('/:id', updateLesson)
router.delete('/:id', deleteLesson)

module.exports = router
