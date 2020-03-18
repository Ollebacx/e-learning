const mongoose = require('mongoose')
const ticketSchema = require('../models/tickets.model')

const lessonSchema = new mongoose.Schema ({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  status: {
    type: String,
    enum: ['in_progress', 'to_start', 'completed'],
    default: 'to_start'
  },
  duration: String,
  difficulty: {
    type: String,
    enum: ['begginer', 'intermediate', 'advanced']
  },
  photoURL: String,
  description: String,
  overview: String,
  content: String,
  lessonURL: String,
  lab: String,
  qa: [ticketSchema]
})

const lessonModel = mongoose.model('lessons', lessonSchema)
module.exports = lessonModel