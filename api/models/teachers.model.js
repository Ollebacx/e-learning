const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema ({
    "name": String,
    "location": String,
    "biography": String,
    "available": String,
    "email": String
})

const teacherModel = mongoose.model('teachers', teacherSchema)
module.exports = teacherModel