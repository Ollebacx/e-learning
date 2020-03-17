const mongoose = require('mongoose')

const teacherSchema = new Mongoose.Schema ({
    "name": "String",
    "location": "String",
    "biography": "String",
    "available": "String",
    "email": "String"
})

const teacherSchema = mongoose.model('teachers', teacherSchema)
module.exports = teacherSchema

