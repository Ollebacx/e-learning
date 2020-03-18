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

<<<<<<< HEAD
router.get('/me', authUser, getMyLessons)
router.post('/me', authUser, addMyLesson)
router.get('/me/:id', authUser, getMyLesson)
router.put('/me/:id', authUser, updateMyLesson)
router.delete('/me/:id', authUser, deleteMyLesson)

=======
>>>>>>> 4bf91b5bfeeed2c6e6be6a1417ea8140571bcb4e
module.exports = router
