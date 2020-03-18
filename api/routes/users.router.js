const router = require('express').Router()
const { authUser } = require('../utils')

const {
  getAllUsers,
  getUserById,
  deleteUserById,
  updateUser,
  getMyLessons,
  addMyLesson,
  getMyLesson,
  updateMyLesson,
  deleteMyLesson
} = require('../controllers/users.controller')

router.get('/', getAllUsers)
router.get('/:id', getUserById)
router.delete('/:id', deleteUserById)
router.put('/:id', updateUser)

router.get('/:id/lessons', getMyLessons)
router.post('/:id/lessons', addMyLesson)
router.get('/:id/lessons/:lessonId', getMyLesson)
router.put('/me/:id', authUser, updateMyLesson)
router.delete('/me/:id', authUser, deleteMyLesson)

module.exports = router
