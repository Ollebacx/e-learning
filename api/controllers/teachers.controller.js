const TeacherModel = require('../models/teachers.model')
const { handleError } = require('../utils')

module.exports = {
    getTeacherInfo
}

function getTeacherInfo (req, res) {
   TeacherModel.findById(req.params.id)
   .then(teacher => { 
     res.json(teacher)
     console.log('This is your teacher')
   })
    
   .catch(err => ( console.error(err)
   ))
}
