const router= require('express').Router()
const { authUser } = require('../utils')

const {
  getAllLessons,
  createLesson,
  getOneLesson,
  updateLesson,
  deleteLesson,
  getMyLessons,
  createMyLesson,
  getMyLesson,
  updateMyLesson,
  deleteMyLesson
} = require('../controllers/lessons.controller')

router.get('/', getAllLessons)
router.post('/', createLesson)
router.get('/:id', getOneLesson)
router.put('/:id', updateLesson)
router.delete('/:id', deleteLesson)
/* 
router.get('/me', authUser, getMyLessons)
router.post('/me', authUser, createMyLesson)
router.get('/me/:id', authUser, getMyLesson)
router.put('/me/:id', authUser, updateMyLesson)
router.delete('/me/:id', authUser, deleteMyLesson)
 */
module.exports = router
