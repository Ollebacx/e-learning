const router = require('express').Router()
const { authUser } = require('../utils') 

const {
    getTeacherInfo
} = require('../controllers/teachers.controller')

router.get('/:id', getTeacherInfo)

module.exports = router